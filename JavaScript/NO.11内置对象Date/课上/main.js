/**
 * Created by liuyujing on 2016/11/14.
 */
(function () {

    /*
//    创建日期对象
    var date = new Date();

    //获得当天 在本月的天数
    console.log(date.getDate());
    //获得当天在 本周的第几天
    console.log(date.getDay());
    //获得当前的月份
    console.log(date.getMonth());
//    获得年份
    console.log(date.getFullYear());
//    获得小时
    console.log(date.getHours());
//    获得分钟
    console.log(date.getMinutes());
//    获得秒数
    console.log(date.getSeconds());
//    获得毫秒数
    console.log(date.getMilliseconds());

//    获得星期几
    var week = "";
    switch (date.getDay()){
        case 0:
            week = "星期日";
            break;
        case 1:
            week = "星期一";
            break;
        case 2:
            week = "星期二";
            break;
        case 3:
            week = "星期三";
            break;
        case 4:
            week = "星期四";
            break;
        case 5:
            week = "星期五";
            break;
        case 6:
            week = "星期六";
            break;
    }

    document.write(week);

//    数组：
    var weeks = ["周末","周一","周二","周三","周四","周五","周六"];
    document.write(weeks[date.getDay()]);

//    获得 上午 下午
    console.log(date.getHours()>=12?"下午":"上午");

//    2016年 11月 14号 周一 上午 09：01


    function dateFormate(date) {
        var weeks = ["周末","周一","周二","周三","周四","周五","周六"];
        var dateString = "";
        var year = date.getFullYear()+"年 ";
        var month = (date.getMonth()+1)+"月 ";
        var day = date.getDate()+"号 ";
        var week = weeks[date.getDay()];
        var apm = date.getHours()>=12?"下午":"上午";
        var hour = date.getHours()%12;
        dateString = year+month+day+week+apm+hour+":"+date.getMinutes();
        return dateString;
    }


    document.write(dateFormate(date));


    var hh = "12";
    var hh2 = "11";
    hh = hh.length==1?"0"+hh:hh;

    console.log(hh);
    console.log(hh2.length);
*/















//    数字版时钟
    var date = new Date();
    function dateFormate(date) {
        var weeks = ["周末","周一","周二","周三","周四","周五","周六"];
        var dateString = "";
        var year = date.getFullYear()+"年 ";
        var month = (date.getMonth()+1)+"月 ";
        var day = date.getDate()+"号 ";
        var week = weeks[date.getDay()];
        var apm = date.getHours()>=12?"下午":"上午";
        var hour = date.getHours()%12;
        dateString = year+month+day+week+apm+hour+":"+date.getMinutes();
        return dateString;
    }
    var timeNode = document.getElementById("time");
    timeNode.textContent = dateFormate(date);
    setInterval(function () {
        var curDate = new Date();
        timeNode.textContent = dateFormate(curDate);
    },1000);

//    使用面向对象 方式  实现 数字时钟
    function Clock() {
        // this.dateFormate = function () {
        //
        // };
        //显示数字时钟内容的元素
        this.timeView = document.createElement("div");
        this.timeView.className = "clock-timeView";
    }

    Clock.prototype.showClock = function (superEle) {
        superEle.appendChild(this.timeView);

        var self = this;
        setInterval(function () {
            var curDate = new Date();
            self.timeView.textContent = self.dateFormate(curDate);
        },1000);
    };

    Clock.prototype.dateFormate = function (date) {
        var weeks = ["周末","周一","周二","周三","周四","周五","周六"];
        var dateString = "";
        var year = date.getFullYear()+"年 ";
        var month = (date.getMonth()+1)+"月 ";
        var day = date.getDate()+"号 ";
        var week = weeks[date.getDay()];
        var apm = date.getHours()>=12?"下午":"上午";
        var hour = date.getHours()%12;
        dateString = year+month+day+week+apm+hour+":"+date.getMinutes();
        return dateString;
    };


    var clock = new Clock();
    clock.showClock(document.body);



//    获得当前时间的时间戳
    var date1  = new Date();
    //获得当前时间的时间戳
    //一般用于  把时间戳 (不是date对象) 提交给 服务端
    //单位是 毫秒
    //如果想以秒表示  再除以 1000
    console.log(date1.getTime());

//    把时间戳 转换成 date对象
//    单位  毫秒
    var date2 = new Date(1456889024000);
    console.log(date2);


//  获得本地时间  与 格林威治标准时间（GMT）的 时间差
    console.log(date2.getTimezoneOffset());


    var date3 = new Date();

    console.log(date3.getDay());

    date3.setDate(2);

    console.log(date3.getDay());

    date3.setHours(6);
    date3.setFullYear(2011);

    console.log(date3);

    console.log(date3.toString());
    console.log(date3.toTimeString());
    console.log(date3.toDateString());

})();
