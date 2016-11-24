var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get("/login",function (req,res) {
  if (req.query.user=="xiaoMing"&&req.query.password=="123456"){
      res.jsonp({code:200,data:"登录成功"});
  }else {
      res.jsonp({code:301,data:"帐号密码不正确"});
  }

});

router.post("/toLogin",function (req,res) {
  console.log(req.body);
  if (req.body.user=="xiaoMing"&&req.body.password=="123456"){
    res.jsonp({code:200,data:"登录成功"});
  }else {
    res.jsonp({code:301,data:"帐号密码不正确"});
  }
});

module.exports = router;
