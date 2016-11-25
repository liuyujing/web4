var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/news",function (req,res) {
    console.log(req.query.pageIndex);
    res.jsonp("wwww");
});

router.post("/login",function (req,res) {
    console.log(req.body);
    res.jsonp("123456789");
});

module.exports = router;
