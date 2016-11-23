/**
 * Created by liuyujing on 2016/11/17.
 */
(function () {
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

    changes[0].onclick = function () {
        location.hash = list[0].name;
        show.innerHTML = list[0].content;
    };
    changes[1].onclick = function () {
        location.hash = list[1].name;
        show.innerHTML = list[1].content;
    };

    document.getElementById("dumpto").onclick = function () {
        location.href = "#close";
        // location.hash = "close";
        // location.href = "other.html";
        // location.href = "https://www.baidu.com";
    };

    
})();