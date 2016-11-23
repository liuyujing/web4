/**
 * Created by liuyujing on 2016/11/18.
 */

// onload = function () {
//
// }
(function () {


    var result = confirm("您确定更新吗？");
    console.log(result);
    if (result){
        update();
    }

    function update() {

    }



    document.querySelector(".print-button").onclick = function () {
        //打印文档
        print();
    };


    //open(url,窗口的名字,窗口的初始化设置) -> 会得到一个创建好的窗口对象
    var newWindow = null;
    document.querySelector(".open-window").onclick = function () {
        //如果newWindow 存在 再去判断是不是 打开的状态
        if (newWindow){
            //判断是不是 打开的状态closed：true（关闭） false（没有关闭）
            if (!newWindow.closed){
                //close() 关闭窗口的方法
                newWindow.close();
                return;
            }
        }
        newWindow = open("other.html","newWindow","width=300,height=200,left=300,top=100");

        // console.log(newWindow.name);
    };


    var left = 300;
    var top = 100;
    var width = 300;
    var height = 200;
//    通过键盘上面的 上下左右键  控制 窗口的移动
    document.body.onkeydown = function (event) {
        console.log(event.keyCode);
        switch (event.keyCode){
            case 38:
                top -= 10;
                break;
            case 40:
                top += 10;
                break;
            case 37:
                left -= 10;
                break;
            case 39:
                left += 10;
                break;
            case 68:
                width += 10;
                height += 10;
                break;
            case 88:
                width -= 10;
                height -= 10;
                break;
            default:
        }
        newWindow.moveTo(left,top);
        newWindow.resizeTo(width,height);
    };

    // var width = 300;
    // var height = 200;

    // document.body.onkeydown = function (event) {
    //     console.log(event.keyCode);
    //     switch (event.keyCode){
    //         case 68:
    //             width += 10;
    //             height += 10;
    //             break;
    //         case 88:
    //             width -= 10;
    //             height -= 10;
    //             break;
    //         default:
    //     }
    //     newWindow.resizeTo(width,height);
    // };

    document.getElementById("toTop").onclick = function () {
        var y = scrollY;
        var timer = setInterval(function () {
            y -= 100;
            if (y<=0){
                clearInterval(timer);
                y=0;
            }
            scrollTo(0,y);
        },200);

    };


    console.log(navigator.appCodeName);
    console.log(navigator.appName);
    console.log(navigator.appVersion);

    console.log(navigator.cookieEnabled);

//    cookie 可以用来存 临时的内容
//    设置的名字 不能重名  否则会覆盖

    if (navigator.cookieEnabled){
        document.cookie = "name=小明";
        document.cookie = "name=xiaoli";

        document.cookie = "age=20";
        console.log(document.cookie);
    }

    console.log(navigator.platform);

    console.log(navigator.userAgent);

    navigator.onLine?alert("正常"):alert("断开");

//    判断浏览器是不是 支持定位 geolocation
    if (navigator.geolocation){

        //获得到用户当前的位置
        navigator.geolocation.getCurrentPosition(success,fail);

        // var watchID = navigator.geolocation.watchPosition(success,fail);
        // navigator.geolocation.clearWatch(watchID);
    }

    //成功时候的回调
    function success(position) {
        console.log(position);
        var date = new Date(position.timestamp);
        console.log("定位成功的时间",date);
        console.log(position.coords.longitude,position.coords.latitude,position.coords.accuracy,position.coords.heading);
    }
    //失败的时候的回调
    function fail(error) {
        console.log(error.code);
        switch (error.code){
            case PERMISSION_DENIED:
                console.log("用户拒绝定位请求");
                break;
            case POSITION_UNAVAILABLE:
                console.log("位置信息不可用");
                break;
            case TIMEOUT:
                console.log("超时");
                break;
            default:

        }
    }

    //屏幕的有效高度（不包含菜单栏）
    console.log(screen.availHeight);
    //屏幕的有效宽度 （不包含菜单栏）
    console.log(screen.availWidth);
    //屏幕的高度
    console.log(screen.height);
    //屏幕的宽度
    console.log(screen.width);
    //颜色的度躁比
    console.log(screen.colorDepth);
    //分辨率的度躁比
    console.log(screen.pixelDepth);




    document.getElementById("next").onclick = function () {
        history.forward();
    };

    document.getElementById("goto").onblur = function () {
        history.go(parseInt(this.value));
    };


    document.getElementById("hash").onclick = function () {
        location.hash = "home";
    };


    var content = document.getElementById("test-content");

    var buttons = document.getElementsByTagName("li");
    buttons[0].onclick = function () {
        location.hash = "首页";
        content.innerHTML = "<div style='background: #e483fb;width: 300px;height: 200px;'>首页</div>";
    };
    buttons[1].onclick = function () {
        location.hash = "发现";
        content.innerHTML = "<div style='background: #29fbcb;width: 200px;height: 300px;'>发现</div>";
    };
    buttons[2].onclick = function () {
        location.hash = "设置";
        content.innerHTML = "<div style='background: #ebfb20;width: 300px;height: 200px;'>设置</div>";
    };


    console.log(location.host);//获得主机名和端口
    console.log(location.hostname);//获得主机名
    console.log(location.href);//得到完整的路径
    console.log(location.pathname);//路径的名字
    console.log(location.port);//端口号
    console.log(location.protocol);//协议名 http/https/tcp

    // 重新刷新页面
//     location.reload(true);
//     //载入一个新的文档
//     location.assign("other.html");
// //    载入一个新的文档  替换之前的内容
//     location.replace("other.html");

    document.getElementById("test-content").onclick = function () {
        // location.reload(true);
        // location.assign("other.html");
        location.replace("other.html");
    };

})();
