/**
 * Created by liuyujing on 2016/11/14.
 */
(function () {

//    1.需要知道  时分秒 每秒更新（多少度？）
//    2.秒：6deg  -> 每秒 6deg
//    3.分针：6deg -> 获得到分钟/60*6 + (获得到分钟-(parseInt(获得到分钟/60)))*6
//    4.时针：30deg 6点30分   60/30分*30
//
//    获得弧度的公式：角度*Math.PI/180

    /*
    //创建界面的函数
    function createViews(superEle) {
        var clockView = document.createElement("div");
        clockView.className = "clock-clockView";

        var hourPointView = document.createElement("div");
        var minPointView = document.createElement("div");
        var secPointView = document.createElement("div");

        hourPointView.className = "clock-pointerView clock-hourPointView";
        minPointView.className = "clock-pointerView clock-minPointView";
        secPointView.className = "clock-pointerView clock-secPointView";

        clockView.appendChild(hourPointView);
        clockView.appendChild(minPointView);
        clockView.appendChild(secPointView);

        superEle.appendChild(clockView);

    }

    //更新时间的方法
    function update() {
        var date = new Date();
        //获得时分秒
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();

        var secAngle = sec*6;
        //整数的分钟数得到的弧度+剩余的分钟数的弧度
        var minAngle = min*6 + (sec/60)*6;
        var hourAngle = hour*30 + (min/60)*30;

        document.querySelector(".clock-hourPointView").style.transform = "rotate("+hourAngle+"deg)";
        document.querySelector(".clock-minPointView").style.transform = "rotate("+minAngle+"deg)";
        document.querySelector(".clock-secPointView").style.transform = "rotate("+secAngle+"deg)";

    }

    createViews(document.body);

    setInterval(update,1000);
*/


    function Clock() {

    }

    Clock.prototype.createViews = function (superEle) {
        var clockView = document.createElement("div");
        var hourPointerView = document.createElement("div");
        var minPointerView = document.createElement("div");
        var secPointerView = document.createElement("div");

        clockView.appendChild(hourPointerView);
        clockView.appendChild(minPointerView);
        clockView.appendChild(secPointerView);

        clockView.className = "clock-clockView";
        hourPointerView.className = "clock-pointerView clock-hourPointView";
        minPointerView.className = "clock-pointerView clock-minPointView";
        secPointerView.className = "clock-pointerView clock-secPointView";

        superEle.appendChild(clockView);

        var self = this;
        setInterval(function () {
            self.updateViews(hourPointerView,minPointerView,secPointerView);
        },1000);
    };

    Clock.prototype.updateViews = function (hourEle,minEle,secEle) {
        var date = new Date();
        var hourAngle = date.getHours()*30 + (date.getMinutes()/60)*30;
        var minAngle = date.getMinutes()*6 + (date.getSeconds()/60)*6;
        var secAngle = date.getSeconds()*6;

        hourEle.style.transform = "rotate("+hourAngle+"deg)";
        minEle.style.transform = "rotate("+minAngle+"deg)";
        secEle.style.transform = "rotate("+secAngle+"deg)";
    };

    var clock = new Clock();
    clock.createViews(document.body);

})();
