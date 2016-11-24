var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//"/register" 接口名
//req：request请求
//res：respone回应
//http://localhost:3222/ 服务器的地址
router.get("/register",function (req,res) {
    res.jsonp({
        code: 200,
        message: "success",
        data: [
            {
                title: "111",
                content: "111111111"},
            {
                title: "222",
                content: "2222222"},
            {
                title: "33333",
                content: "33333333"
            }
        ]
    });





});





router.get("/login",function (req,res) {
    var username = "xiaoMing";
    var password = "123456";

    console.log(req.query.username,req.query.password);

    if (req.query.username && req.query.password){

        if (username == req.query.username){

            if (password == req.query.password){

                res.jsonp({code:200,message:"登录成功"});

            }else {
                res.jsonp({code:302,message:"密码不正确"});
            }

        }else {
            res.jsonp({code:302,message:"帐号不匹配"});
        }

    }else {
        res.jsonp({code:302,message:"帐号或密码不能为空"});
    }

});


//post 以post方法 接收发送数据
router.post("/toLogin",function (req,res) {

    //接收到的数据 存在在  req.body中
    console.log(req.body);
    //使用send 发送给客户端数据
    res.send({code:200,message:"登录成功"});

//    跨域的解决
//    服务端 不允许 未授权的 域名 访问
//    添加授权  指定域名 以及方法
//     app.all('*', function(req, res, next) {
//         res.header("Access-Control-Allow-Origin", "*");
//         res.header("Access-Control-Allow-Headers", "X-Requested-With");
//         res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//         res.header("X-Powered-By",' 3.2.1');
//         res.header("Content-Type", "application/json;charset=utf-8");
//         next();
//     });
});




module.exports = router;
