/**
 * Created by liuyujing on 2016/11/3.
 */
/*
var a = b = {m:1};
console.log(a);
console.log(b);
a.x = a ={m:2};
console.log(a);
console.log(b);
*/

var a = b = {m:1};

// a = {m:2};
// console.log(a);
// console.log(b);
//都是在栈里分配的  a={m:2} 是修改了a栈里的值 b在栈里值 不会改变 依然是{m:1}


a.x = a = {m:2};//a.x 变量a与b是同一个内存 相当于给b也添加了一个x 值为{m:2}
// a = {m:2};//重新定义了一个变量a 前面的变量a失效
console.log(a.x);//新定义的a与b不是同一个地址 所以没有变量x undefind
console.log(b.x.m);//2

// window.onload = function () {
//     var div = document.getElementById("id");
//
// //Uncaught TypeError: Cannot set property 'xxx' of null(…)
//     console.log(div);
//
//     div.onclick = function () {
//
//     };
// };

// <div id="id"></div>
var div = document.getElementById("id");

//Uncaught TypeError: Cannot set property 'xxx' of null(…)
console.log(div);

// div.onclick = function () {
//     alert("");
// };
// alert("");

// function aa() {
//     alert("");
// }
//
// aa();

//p ul li ...
// document.body.onclick = e;

function e() {
    alert("");
}
// e(); 调用函数
//e 函数名
// console.log(e);

// e  一个叫e 的 函数名
// "e" 字符串
//'e' 字符串

var a = 20;
console.log(a);//变量 代表20的
console.log("a");//一个字符串 a



// var id = document.getElementById("id");
//
// id.onclick = function () {
//     alert("");
// };
//
// document.getElementById("id").onclick = function () {
//     alert("");
// };


// 对于这个 onclick = e  一点击就相当于执行了 e（） 他们有点懵

//js 提供了 一个在特殊情况下 才会去执行的  一个方法

//onclick ->单击的情况   当监测用户点击 指定元素的时候  才会去调用  传过去的方法


// var e = function () {
//
// };
//
// var e = 10;

// div.onclick = e;
//
// function e() {
//
// }
// e();


// ----------------分支结构--------------
var result = true;

//! 取反
// !result;//他表示false
// result = !result;//把上一次 result的值 取反 如果上一次是真的  这次取反赋值给自己

//如果result是真的 就执行if后面的花括号
//假的 就执行else后面的花括号
// if (result){
//     result = !result;
// }else {
//     result = !result;
// }

//-------------
if (result){
    result = !result;
}
if (!result){
    result = !result;
}
console.log(result);
//=============
if (result){
    result = !result;
}else if (!result){
    result = !result;
}
console.log(result);
//------------

//如果1 输出1
//2 输出2
// 3 输出3
var a1 = 1;
if (a1==1){
    console.log(a1);
} else if(a1==2){
    console.log(a1);
}else {
    console.log(a1);
}

//练习：
//1.点击元素 每点击一次  随机1-100的数字 当时5的倍数的时候  让背景颜色是红色 其余是黑色
//点击切换图片
// var image = document.createElement("img");
// image.src = "1.jpg";

console.log(parseInt(Math.random()*100));
//0.9996750692995271
//40
//1
//0.12
//99.123
document.getElementById("num1").onclick = function () {
    var rand = parseInt(Math.random()*100)+1;//1-100的随机数
    // = 赋值
    // ==
    // === 判断左右的值 是不是相等
    var color;
    if (rand%5 == 0){
        color = "red";
    }else {
        color = "#2c2c2c";
    }

    this.style.background = color;
    this.innerHTML = rand;
};

// var id = document.getElementById("num1");
// id.onclick = function(){
//     var rand = parseInt( Math.random()*100)+1;
// };
//
// document.getElementById("num1").onclick = function(){
//     var rand = parseInt( Math.random()*100)+1;
// };

// var a =  document.getElementById("id");
// a.onclick = function () {
//     if(parseInt(Math.random()*100+1)%5==0) {
//         document.getElementById("id").style.background ="red";
//     }
//     //到这个位置 是红色
//     //再继续执行的时候 又符合下一个条件了
//     //会继续变成黑色
//     if(document.getElementById("id").style.background =="red"){
//         document.getElementById("id").style.background ="black";
//     }
// };


//
// var image = document.getElementById("num2");
//
// var selected = false;
// image.onclick = function () {
//
//     selected = !selected;
//
//     var imagePath = selected?"2.png":"1.jpg";
//
//     this.src = imagePath;
// };


var selected = false;
document.getElementById("image").onclick = function () {
    //更新  选中 图片的状态
    selected = !selected;
    //根据 选中的状态  去更新  图片
    var path = selected?"2.png":"1.jpg";
    this.src = path;
};

//点击 div 变成圆形  再次点击  变成方形
//红色
// <div id="box" style="width: 200px;height: 200px;background-color:#c80014;"></div>
document.getElementById("box").onclick = function () {

    // console.log(this.style.borderRadius);
    this.style.borderRadius = this.style.borderRadius==""?"100px":"";

};


//<div id="box1" style="width: 200px;height: 200px; background-color:#ffe10c;"></div>
//黄色
//return 跳出函数

// var box = document.getElementById("box1");
//
// box.onclick = function () {
//     var isBox = this.style.borderRadius=="";
//     if (isBox){
//         this.style.borderRadius = "100px";
//         return;
//     }
//     this.style.borderRadius = "";
// };

var box = document.getElementById("box1");
var isBox = true;
box.onclick = function () {


    // if (!isBox){
    //     this.style.borderRadius = "";
    // }else {
    //     this.style.borderRadius = "100px";
    // }

    var s = isBox?"100px":"";
    this.style.borderRadius = s;

    isBox = !isBox;
};




var b = document.getElementById("box");

b.onclick = function () {
    //默认情况 没有设置的样式  都是一个 空字符串
    //如果是未设置 的样式 方形
    var r = this.style.borderRadius == "";
    if (r){
        //改成圆形
        this.style.borderRadius = "100px";
        return;//跳出函数  不管后面有多少代码  都不再继续执行
    }
    this.style.borderRadius = "";
};

// var num = "1";
// switch (num){
//     case 1:
//         console.log("数字1");
//         break;
//     case "1":
//         console.log("字符串1");
//         break;
//     case 2:
//         break;
//     case "2":
//         break;
//     default:
// }

//四种登录方式
// "QQ" "Wechat" "weibo" "tiwer"

// var type = prompt("请输入登录方式:\"QQ\" \"Wechat\" \"weibo\" \"tiwwer\"");
//
// switch (type){
//     case "QQ":
//         alert("QQ登录成功");
//         break;
//     case "Wechat":
//         alert("Wechat登录成功");
//         break;
//     case "weibo":
//         alert("weibo登录成功");
//         break;
//     case "tiwwer":
//         alert("tiwwer登录成功");
//         break;
//     default:
//         alert("没有实现的登录方式");
// }


var list = ["111","222","333","444","32534","34534","3456456","456345","56467456","8679678","235234"];
// console.log(list[0]);
// var aaa = list[1];
// console.log(aaa);
// list[0]
// list[1]
// list[2]
// list[3]

var table = document.createElement("ul");
document.body.appendChild(table);
// var item;
for (var i=0;i<list.length;i++){
    var m = list[i];
    console.log(m);

    var item = document.createElement("li");
    item.innerHTML = m;
    table.appendChild(item);//添加多个li
}
// table.appendChild(item);//只会添加  最后一个li
// console.log(item);
/*
var hero = 1000;
var monster = 2000;
// while (1){
while (hero>=0 && monster>=0){

    var skill = prompt("请输入一个技能：快捷键：1 2 3");

    var rand = parseInt(Math.random()*1000);

    if (rand%5==0){
        alert("本次攻击失效");
        console.log("怪物还剩"+monster+"滴血");
        continue;
    }
    switch (skill){
        case "1":
            monster -= 10;
            break;
        case "2":
            monster -= 50;
            break;
        case "3":
            monster -= 1000;
            break;
        default:
            monster -= 1;
    }
    console.log("怪物还剩"+monster+"滴血");
    // if (monster<=0||hero<=0){
    //     break;
    // }

}
*/

console.log(Math.random()*1000);






document.getElementById("num5").onclick = function () {
    this.className = this.className == "sss"?"sss2":"sss";
};

var eles = document.getElementsByClassName("sss");
eles[0].style.border = "1px solid yellow";