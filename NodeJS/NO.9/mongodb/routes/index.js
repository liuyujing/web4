var express = require('express');
var router = express.Router();


// var User = require("./userInfoModel");
//
// var xiaoming = new User({
//   id:1000,
//   name:"xiaoming"
// });
//
// xiaoming.save(function (error,res) {
//   console.log(error,res);
// });


var UserModel = require("./userInfoModel");

var Manager = require("./DBManager");

var manager = new Manager();

var info = {id:2222,name:"小红"};

manager.insertData(UserModel,info,function (error,res) {
  console.log("插入",error,res);
});

manager.searh(UserModel,null,function (error,result) {
  console.log("更新之后 查询：",result);
})

// manager.update(UserModel,{id:2222},{id:2223},function (err, numberAffected, raw) {
//   console.log("更新之后",err, numberAffected, raw);
//
//   manager.searh(UserModel,null,function (error,result) {
//     console.log("更新之后 查询：",result);
//   })
// });


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
