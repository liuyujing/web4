var express = require('express');
var router = express.Router();

var sql = require("mysql");
var connection = sql.createConnection("mysql://root@localhost/magicCook");

connection.connect(function (error) {
  if (error) {
    console.log("连接失败：", error);
  }
});

//掉线处理
connection.on("error",function (error) {
  if (error){
    connection = sql.createConnection(connection.config);
    connection.connect();
  }
});


function addUser(user,callback) {

  connection.query("INSERT INTO `user` (`username`, `password`) VALUES ('"+user.name+"', '"+user.password+"');",function (err,result,fileds) {

    if (!err){
      var data = {
        code:200,
        message:"注册成功！",
        userInfo:{
          name:user.name,
          password:user.password,
          score:0,
          money:0
        }
      };
      callback(data);

      return;
    }
    var data = {
      code:300,
      message:"注册失败！"
    };
    callback(data);

  });

}

/*
* sql 查询的 sql语句
* callback 查询之后的回调
* */
function searchUsers(sql,callback) {

  connection.query(sql,function (error,result) {

    if (!error){

      var data = {
        code:200,
        message:"查询成功",
        data:result
      };

      callback(data);
      return;
    }

    var data = {
      code:300,
      message:"查询失败"
    };

    switch (error.code){
      case "ER_EMPTY_QUERY":
        data.message = "查询条件不能为空";
        break;

      case "ER_BAD_FIELD_ERROR":
        data.message = "没有此字段";
        break;

      default:
        data.message = "未知错误原因";
    }
    console.log(error);

    callback(data);

  });

}


function deleteUser(name,callback) {

  connection.query("DELETE FROM user WHERE username='"+name+"'",function (error,result) {
    console.log(error,result);

    if (!error){

      var data = {
        code:200,
        message:"删除成功"
      };
      callback(data);
      return;
    }

    var data = {
      code:300,
      message:"未查到数据"
    };
    callback(data);

  });

}


router.post("/register",function (req, res) {
  if (req.body){

    addUser(req.body,function (result) {
      res.send(result);
    });

  }else {
    var error = {
      code:301,
      message:"请传入注册信息"
    };
    res.send(error);
  }
});


router.get("/getAllUsers",function (req,res) {

  searchUsers("SELECT * FROM user",function (result) {
    res.send(result);
  });

});


router.get("/searchUserForName",function (req,res) {

  console.log(req.query.name);
  searchUsers("SELECT * FROM user WHERE username='"+req.query.name+"'",function (result) {

    console.log(result);
    res.send(result);
  });

});


router.get("/deleteUser",function (req,res) {

  deleteUser(req.query.name,function (result) {
    res.send(result);
  });
});

module.exports = router;
