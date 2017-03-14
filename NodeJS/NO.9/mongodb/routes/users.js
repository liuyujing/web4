var express = require('express');
var router = express.Router();

// var User = require("./userModel");
//
// var xiaoming = new User({
//   id:100,
//   name:"小明"
// });
//
// xiaoming.save(function (error,res) {
//   console.log(error,res);
// });
//
//
// User.find({id:100},function (error,res) {
//   console.log(error,res);
// });
//
// // User.remove({id:100},function (error,res) {
// //   console.log("删除",error,res);
// // });
// //
//
//
// User.update({id:100,name:"葫芦娃"},function (error,res) {
//   console.log("更新",error,res);
//   User.find({id:100},function (error,res) {
//     console.log("查询",error,res);
//   });
// });
//


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
