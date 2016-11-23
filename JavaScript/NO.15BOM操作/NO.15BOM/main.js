/**
 * Created by liuyujing on 2016/11/18.
 */
(function () {


    function addLinester() {
        var divs = document.getElementsByTagName("div");
        for (var i = 0; i < divs.length; i++) {

            // function www(index) {
            //     divs[index].onclick = function () {
            //         alert(this.textContent);
            //         alert(index);
            //     };
            // }www(i);


            (function (index) {
                divs[index].onclick = function () {
                    alert(this.textContent);
                    alert(index);
                };
            })(i);
        }
    }

    // addLinester();


    function changColorEvent(color) {
        return function () {
            this.style.background = color;
        }
    }

    document.getElementsByTagName("div")[0].addEventListener("click",changColorEvent("red"));


    Array.prototype.each = function (callback) {
        for (var i=0;i<this.length;i++){
            callback(this[i],i,this);
        }
    };

    var list = ["22","44","77","88"];
    list.each(function (item,index,arr) {
        console.log(item,index,arr);
    });


    var otherWindow;
    var test = document.getElementById("test");
    test.onclick = function () {

        otherWindow = open("other.html","other","width=300px,height=200px,left=300px,top=50px");
        // location.href = "other.html";
    };

    var closeButton = document.getElementById("close");
    closeButton.onclick = function () {
        if (otherWindow){

            if (!otherWindow.closed){
                otherWindow.close();
            }
        }
    };
    /*
     * true 触发顺序 在 false 之前
     * 多个均为 true 则由外到内
     * 多个均为 false 则由内到外
     * */
    var x=300;
    var y=50;
    document.body.addEventListener("keydown",function (event) {
        if (otherWindow){
            console.log(event.key);

            switch (event.key){
                case "ArrowUp":
                    y-=10;
                    break;
                case "ArrowDown":
                    y+=10;
                    break;
                case "ArrowLeft":
                    x-=10;
                    break;
                case "ArrowRight":
                    x+=10;
                    break;
                default:
            }
            x = x<0?0:x;
            y = y<0?0:y;
            otherWindow.moveTo(x,y);
        }

    },true);
    var width = 300;
    var height = 200;
    document.body.onkeydown = function (event) {
        switch (event.key){
            case "d":
                width+=10;
                height+=10;
                break;
            case "x":
                width-=10;
                height-=10;
                break;
            default:
        }
        otherWindow.resizeTo(width,height);
    };

    var timer;
    document.getElementById("scroll").onclick = function (event) {
        var y = event.y;
        timer = setInterval(function () {
            y-=50;
            if (y<=0){
                y=0;
                clearInterval(timer);
            }
            window.scrollTo(0,y);
            console.log(y);
        },200);
    };

    document.body.onmousewheel = function () {
        if (timer){
            clearInterval(timer);
        }
    };

    console.log(navigator.appCodeName);
    console.log(navigator.appName);
    console.log(navigator.appVersion);
    console.log(navigator.cookieEnabled);

    if (navigator.cookieEnabled){
        document.cookie = "name=222";
        document.cookie = "age=11";
    }
    console.log(navigator.platform);
    console.log(navigator.userAgent);

    console.log(navigator.onLine);

    var list = [{name:"home",content:"<div style='height: 400px;width: 300px;background: rebeccapurple'></div>"},{name:"find",content:"<div style='height: 400px;width: 300px;background: #ff46ea'></div>"},{name:"setting",content:"<div style='height: 400px;width: 300px;background: #649bff'></div>"}];

    var changes = document.getElementsByClassName("change");
    var show = document.getElementById("show");

    for (var i=0;i<changes.length;i++){
        (function (index) {
            changes[index].onclick = function () {
                location.hash = list[index].name;
                show.innerHTML = list[index].content;
            };
        })(i);
    }


    document.getElementById("dumpto").onclick = function () {
        location.href = "#close";
        // location.hash = "close";
        // location.href = "other.html";
        // location.href = "https://www.baidu.com";
    };

    function getLocation() {

//    判断浏览器是否支持 获取位置信息
        if (navigator.geolocation){
            alert("支持");

            //获得用户位置信息
            // navigator.geolocation.getCurrentPosition(success,fail);

            //    观察用户位置 会有一个number类型的返回值
            var watchID = navigator.geolocation.watchPosition(success,fail);

            //清除观察用户的位置
            // navigator.geolocation.clearWatch(watchID);

        }else {
            alert("不支持 定位");
        }
    }

//获取位置成功的回调
    function success(position) {
        console.log(position);
//    经纬度
        console.log(position.coords.longitude,position.coords.latitude,position.coords.altitude);

        var date = new Date();
        date.getDate(position.timestamp);
        console.log(date);
    }

//获取用户位置 失败的时候的回调
    function fail(error) {
        /*
         PERMISSION_DENIED: number;
         POSITION_UNAVAILABLE: number;
         TIMEOUT: number;*/
        // console.log(error.code);
        switch (error.code){
            case PERMISSION_DENIED:
                alert("用户未授权");
                break;
            case POSITION_UNAVAILABLE:
                alert("位置的位置");
                break;
            case TIMEOUT:
                alert("超时");
                break;
        }
    }

    getLocation();
    

})();