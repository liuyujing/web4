/**
 * Created by liuyujing on 2016/11/24.
 */
(function () {

    $(".getData-button").click(function () {

        //设置请求  以get方式 去发送请求(异步)
        //done 完成时调用 会把解析出来的数据（对象） 提供给咱们
        // $.get("package.json").done(function (data,status) {
        //     console.log(data,status);
        // });


        // $.get({
        //     url: "http://apis.baidu.com/showapi_open_bus/showapi_joke/joke_text?page=1",
        //     headers: {"apikey": "800df6eb77392d2205b55cfccbcc1662"}
        // }).done(function (data,status) {
        //     console.log(data,status);
        // });


        //json 文本格式
        //jsonp json文件的交换方式
        //可以通过 jsonp解决 get方式 跨域问题
        // $.get({url:"http://localhost:3222/register",dataType:"jsonp"}).done(function (data) {
        //     console.log(data);
        // });


        $.get({url:"http://localhost:3111/register",dataType:"jsonp"}).done(function (data) {
            console.log(data);
        });


    });


    //服务器地址
    var HOST = "http://localhost:3222";
    //登录接口
    var LOGIN = "/login";
    //post登录接口
    var LOGIN_POST = "/toLogin";

    var loginButton = $(".login-button");
    var userNameInput = $("#userName");
    var passwordInput = $("#password");
    var result = $(".result");

    loginButton.click(function () {

        /*
        var param = "?username="+userNameInput.val()+"&password="+passwordInput.val()+"";

        console.log(HOST+LOGIN+param);

        $.get({url:HOST+LOGIN+param,dataType:"jsonp"}).done(function (data) {
            console.log(data);
            result.html(data.message);
        });

        */


        //post 以POST方式 发送数据
        //发送的参数  是放到 data
        $.post({
            url: HOST + LOGIN_POST,
            data: {
                //发送的key一定要与 服务端的匹配
                username: userNameInput.val(),               password: passwordInput.val()
            }
        }).done(function (data) {
            result.html(data.message);
        });



    });


//    1.端口号冲突 ：出现 当端口已经被启用的时候 -> www->var port = normalizePort(process.env.PORT || '3222');把3222这个端口号 修改成 其他的数字
//    2.检查有没有启动服务器 -> 浏览器中 输入 localhost:端口号
//    3.检查 服务端 与客户端 的主机名 与 端口号 是不是匹配
//    4.是不是 更新了 服务端的代码  忘记重启服务器
//    5.拼接接口地址的时候  是不是 拼接错了
//    6.检查 客户端 或者 服务端  代码中 是不是  有错误 比如：，.；  把一个函数 写到 另一个里面 ；少括号 或 多了括号；无用的错误代码 没有注释

})();
