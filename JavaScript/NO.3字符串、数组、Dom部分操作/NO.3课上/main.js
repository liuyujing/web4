/**
 * Created by liuyujing on 2016/11/2.
 */
/*
for (var i=0;i<10;i+=5){
    console.log(i);
}

var r = true;
while (r){
    r = false;
}

do {
    console.log("不管是否满足循环条件  都先去执行一次");
}while (r);

// continue  只跳过  本次 下次继续循环
// break 直接跳出循环

//获取HTML中的元素对象
//通过ID获得 HTML中的元素对象
var div = document.getElementById("id");
div.innerHTML = "123";
div.innerHTML = "<p>4556</p>";
console.log(div.innerHTML);

function 函数() {
    console.log("123");
}
函数();

*/

/*
var s = "字符串";
var s1 = '字符串';

var s2 = "我是一个'字符串'！";
console.log(s2);

//\是转义符
var s3 = "我是一个\"双引号\"！";
console.log(s3);

console.log(s.length);

//从0开始
console.log(s.charAt(1));

//获得指定字符的位置
console.log(s.indexOf("符串"));

//查询字符串 在另一个字符串中的位置
console.log(s2.search("'字符串'"));

//在查询字符串的内容的时候   如果查找不到  就会返回给 咱们一个-1

var s4 = "小明,小李,小亮";
//通过指定字符 分割字符串 -> 数组
console.log(s4.split(","));

/*
* substr(起始的位置,长度)
* start 起始的位置
* length 长度
* */
// console.log(s4.substr(1,3));
//
// var s5 = "我是一个好人！";
// console.log(s5.substr(0,4));

/*
* substring(起始位置,结束的位置) 截取字符串
* start 起始位置
* end 结束的位置
* */
// console.log(s5.substring(2,4));

//把字符串 转成 大写 或者小写
// var s6 = "hello world";
// //全部转成大写
// console.log(s6.toUpperCase());
// //全部转成小写
// console.log(s6.toLowerCase());

/*
* replace 替换字符串
* searchValue 需要替换的内容
* replaceValue 替换成的内容
* */
// s6.replace("hello","你好");
// var newS = s6.replace("hello","你好");
// s6 = s6.replace("hello","你好");
// console.log(s6.replace("hello","你好"));

//所有的 字符串的这些方法  都不会去改变 原有的字符串
//都会生成一个新值

// var s = "['小明','小李','小张']";
// // '小明','小李','小张'
// //{'name':'小明'}
//
// // var ss = s.replace(","," ").substr(0,3);
//
// var r = s.substr(1,s.length-2);
// var r1 = r.substr(0,4);
// r1 = "{'name':"+r1+"}";
// console.log(r1);


//数组 -> 容器 -> 里面按照顺序  排列着一些值
//里面的每一个值  都是有 序号的（从0开始）
//序号：下标
//可以通过 下标 来找到  数组中值
//数组用[]表示 里面的每一个值 使用 逗号 隔开
//数组中 可以盛放  任何内容

var l = ["小明","小李","小花","小刘","小亮"];
//取数组的值 数组名[下标];

console.log(l[0]);
console.log(l[1]);
console.log(l[2]);

//获得数组的长度 是统计数组有多少个元素 length
console.log(l.length);

//可以通过循环  逐个取出 数组中的每一个元素 -> 遍历
for (var i=0;i<l.length;i++){
    console.log(l[i]);
}
//如果超出  数组的 范围 去 取值 -> 数组越界
console.log(l[100]);

var a = 0;
while (a<l.length){
    console.log(l[a]);
    a++;
}

//1.创建元素
var p = document.createElement("p");
//获得body document.body
//2.把创建好的元素  放到一个 父元素中
document.body.appendChild(p);
//3.指定元素的样式
// p.style.width = "100px";
// p.style.background = "red";
p.style.cssText = "width:100px;height:100px;background:red";

//1.10个div 宽800 高5
//2.把数组中的颜色 添加给每一个元素的背景颜色
var colors = ["#794EFF","#FFA670","#6590FF","#9B37FF","#58FFFA","#A24CFF","#FF2ADB","#F3FF63","#B4FF11","#0CFF95"];

//在字符串中  拼接一个变量 "   "+变量名+"  "
for (var i=0;i<colors.length;i++){
    var d = document.createElement("div");
    // d.className = "类选择器的名字";
    document.body.appendChild(d);
    d.style.cssText = "width:800px;height:20px; background:"+colors[i]+"";
    // console.log(colors[i]);
}

var s11 = "12345";
console.log(s11[0]);
console.log(s11.charAt(0));

// var button = document.createElement("div");
// button.innerHTML = "播放";
// document.body.appendChild(button);
// console.log(button.innerHTML);
// button.onclick = function () {
//     // var r = this.innerHTML == "播放";
//     // var s = r?"暂停":"播放";
//     var s = this.innerHTML == "播放"?"暂停":"播放";
//     alert(s);
//     this.innerHTML = s;
//     // this.innerHTML = "暂停";
// };

/*
* 定时器
* 开启定时器：
* setInterval(回调函数,毫秒数); 重复执行
* setTimeout(回调函数,毫秒数); 只会执行一次
*
* 清除定时器：
* clearInterval(定时器的名字)
* clearTimeout(定时器的名字)
* */


var timerButton = document.createElement("button");
timerButton.className = "timer-button";
timerButton.innerHTML = "开始";
document.body.appendChild(timerButton);

var timer;
timerButton.onclick = function () {
    var selected = this.innerHTML == "开始";
    this.innerHTML = selected?"结束":"开始";
    // if (selected){
    //     this.innerHTML = "结束";
    // }else {
    //     this.innerHTML = "开始";
    // }

    if (selected){
        timer = setInterval(function () {
            var rand = parseInt(Math.random()*100)%colors.length;
            timerButton.style.background = colors[rand];
        },1000);
    }else {
        clearInterval(timer);
        timerButton.style.background = "";
    }
};


//霓虹灯
//按钮 控制  开启关闭 霓虹灯
//DOM:
//通过类选择器 获得 一组元素
// var eles = document.getElementsByClassName("color-ele");
// console.log(eles);

// for (){
//     var colorEle = document.createElement("div");
//     XX.appendChild(colorEle);
// }


