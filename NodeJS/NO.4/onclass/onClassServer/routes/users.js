
var express = require('express');
var router = express.Router();

var dbManagerMoudle = require("./DBManager");
var dbManager = new dbManagerMoudle.DBManager("mysql://root@localhost/cook");

//注册
router.post("/register",function (req,res) {

  //如果用户 填写了 注册信息的话 进入 往数据库 插入数据的函数
  if (req.body) {
    //接收用户的注册信息
    var userInfo = req.body;

    //如果 没有传入生日 使用当前的时间戳
    var birthday = userInfo.birthday?userInfo.birthday:"CURRENT_TIMESTAMP";

    //拼接SQL语句
    var sql  ="INSERT INTO `user` (`id`, `date`, `username`, `birthday`, `sex`, `phone`, `password`) VALUES (NULL, CURRENT_TIMESTAMP, '"+userInfo.username+"', "+birthday+", '"+userInfo.sex+"', '"+userInfo.phone+"', '"+userInfo.password+"');";

    //调用 插入数据库数据 的函数
    dbManager.insertData(sql,function (result) {

      //result 插入数据库 成功之后的 提示
      //如果插入数据 成功 code值是200
      //进入 查询用户的 函数（searchData）
      if (result.code == 200) {

        console.log(result.data.insertId);

        dbManager.searchData("SELECT * FROM `user` WHERE id='"+result.data.insertId+"'",function (data) {
          //data 查询成功的数据
          res.send(data);

        });

      }else {
        res.send(result);
      }

    });

  }else {
    res.send({
      code:301,
      message:"请填写注册信息"
    });
  }


});

router.post("/login",function (req,res) {

  if (req.body){

    if (req.body.pipiNum&&req.body.password){

      dbManager.searchData("SELECT * FROM `user` WHERE `id` = "+req.body.pipiNum+"",function (result) {
        console.log("data:",result);


        if (result.data.length>0) {
          if (req.body.password == result.data[0].password) {
            res.send(result);
          } else {
            res.send({
              code: 202,
              message: "密码错误",
              data: []
            });
          }
        }else {
          res.send({
            code: 204,
            message: "没有此用户",
            data: []
          });
        }

      });


    }else {
      res.send({
        code:201,
        message:"请检查帐号密码是否遗漏"
      });

    }


  }else {
    var message = req.body.pipiNum?"请填写密码":"请填写用户名";
    res.send({
      code:301,
      message:message
    });
  }

});

module.exports = router;
