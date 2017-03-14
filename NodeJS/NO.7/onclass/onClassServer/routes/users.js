
var express = require('express');
var router = express.Router();

var md5 = require("./md5");
var sha1 = require("./sha1");

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
            console.log("zhuce:",data);
          //data 查询成功的数据
          res.send(data);

        });

      }else {
          console.log("zhuceFail:",result);
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

//登录
router.post("/login",function (req,res) {

  if (req.body){

    if (req.body.pipiNum&&req.body.password){

      dbManager.searchData("SELECT * FROM `user` WHERE `id` = "+req.body.pipiNum+"",function (result) {
        console.log("data:",req.body.password);


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

//找回密码
router.post("/gotPassword",function (req,res) {

  dbManager.searchData("SELECT * FROM `user` WHERE (id='"+req.body.pipiID+"' AND phone='"+req.body.phone+"') OR (id='"+req.body.pipiID+"' AND username='"+req.body.username+"') OR (phone='"+req.body.phone+"' AND username='"+req.body.username+"')",function (result) {
    console.log(result);
    //如果查找到 给用户一个初始密码
    if (result.data.length>0){

      //查询到 用户之后   修改密码为初始密码
      var sha1String = sha1.SHA1("000000"+"pipiCook");
      var md5String = md5.MD5(sha1String);

        var userID = result.data[0].id;

      dbManager.updateData("UPDATE user SET password = '"+md5String+"' WHERE id = '"+userID+"'",function (result) {
        if (result.code == 200){
          res.send({
            code:200,
            message:"初始化密码",
            data:[{
              password:"000000"
            }]
          });
        }
      });

    }else {
      res.send({
        code:201,
        message:"没有此用户",
        data:[]
      });
    }

  });
});

module.exports = router;
