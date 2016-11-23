/**
 * Created by liuyujing on 2016/11/1.
 */
"use strict";

//var i=0; 初始化变量i 并且赋值0
//i<30; 当满足这个条件的时候  才继续循环
//i++ 每循环一次 让i做一次改变

//1.初始化变量i  判断i是不是小于30 -> 符合 -> 执行花括号内的代码 -> i++
//2.判断i是不是小于30 -> 符合 -> 执行花括号内的代码 -> i++
//3.判断i是不是小于30 -> 符合 -> 执行花括号内的代码 -> i++
//....判断i是不是小于30 -> 不符合 -> 跳出循环

// for (var i=0;i<30;i++){
//     console.log(i);
// }

//1. i=0
//2. i=1

// 1-100的和
// +



// function a() {
//     var b = 10;
// }

// var r = 0;
// for (var i=1;i<=100;i++){
//     // console.log(i);
//     r += i;
// }
// console.log(r);



//注意：
//1.变量的作用域
//2.循环语句 会不断的执行  循环代码


//通过for 循环 计算 0 - 100 （每一个数字相隔5 ）的和
//0 5 10 15 20 25 ... 100 的和

// var r = 0;
// for (var i=0;i<=100;i+=5){
//     r += i;
// }
// console.log(r);

//帮 买煎饼的大妈 计算下  一天 可以赚多少钱
//1个煎饼 5元 成本3元   +蛋1元 0.5元  +肠2元 1元
//每天固定 10个人买 每人买1张


// var a = 5;//煎饼价格
// var b = 3;//煎饼的成本
//
// var r = 0;//总共的毛利
//
// for (var i=0;i<10;i++){
//
//     var c = a-b;
//     r += c;
// }
//
// console.log(r);
/*
var r = 0;//总共毛利
var all = 0;//总共流水
for (var i=0;i<10;i++){
    var m = prompt("加蛋？加肠？全加？");//要哪一种
    var p = 0;//单价
    var c = 0;//成本
    switch (m){
        case "加蛋":
            p = 5 + 1;
            c = 3 + 0.5;
            break;
        case "加肠":
            p = 5 + 2;
            c = 3 + 1;
            break;
        case "全加":
            p = 5 + 1 + 2;
            c = 3 + 0.5 + 1;
            break;
        default:
            console.log("没有这种选择");
    }

    all += p;
    r += (p-c);
}
console.log("流水："+all+"毛利:"+r);
*/

// continue 继续 跳过这一次  继续循环执行
// 作用  控制 第几次  不去循环

// for (var i=0;i<10;i++){
//     if (i==5){
//         continue;//从这个位置开始  只跳过 循环代码里面的这一次 跳过之后 继续执行
//     }
//     console.log(i);
// }

//输出1-1000 所有的数字（不包含 可以被5整除的）
// 1%5 == 0
// for (var i=0;i<1000;i++){
//     if (i%5 == 0){
//         continue;
//     }
//     console.log(i);
// }

// break 跳出 整个循环
// for (var i=0;i<10;i++){
//     if (i==5){
//         break;//从这个位置开始  完全跳出循环 跳过之后 不再继续执行
//     }
//     console.log(i);
// }

//公式：while (判断条件){循环代码}
//while 循环  当不知道 循环条件的时候  使用

// var i = false;
// while (i==false){
//     var a = prompt("明白了?");
//     console.log(a);
//     if (a == "明白了"){
//         i = true;
//     }
// }

// var i=0;
// while (i<10){
//     console.log(i);
//     i+=5;
// }

// 输出 用户输入的 两个值 相减 当值是0的时候  不再循环让用户输入
// 0 false
// var a = parseFloat(prompt("a"));
// var b = parseFloat(prompt("b"));
//
// while ((a-b)!==0){
//     a = parseFloat(prompt("a"));
//     b = parseFloat(prompt("b"));
// }
//
// while (!(a-b)){
//     a = parseFloat(prompt("a"));
//     b = parseFloat(prompt("b"));
// }

// var r = true;
// while (r){
//     var a = parseFloat(prompt("a"));
//     var b = parseFloat(prompt("b"));
//     if ((a-b)==0){
//         r = false;
//     }
// }

// do while 不管循环条件 是不是满足  都会先去执行一次（如果满足 也会 记录在总共的循环次数里面）  也是在 不知道循环次数的时候 使用
// 公式 do {循环代码} while(循环条件)

// var r = false;
// do {
//     var a = prompt("明白了?");
//     if (a == "明白了"){
//         r = false;
//     }
// }while(r);

//计算输入两个数字的差 如果差 负数 就不在去循环
// var r = false;
// do {
//     var a = parseFloat(prompt("a"));
//     var b = parseFloat(prompt("b"));
//     // if ((a-b)<0){
//     //     r = false;
//     // }else {
//     //     r = true;
//     // }
//     r = (a-b)<0?false:true;
// }while (r);



/*
for 在知道循环次数的时候 使用
    for(初始变量;循环条件;变量值更改){循环代码}
continue 跳过本次循环  继续执行
break 跳出循环  不再执行
while 在不知道  循环次数的时候  使用
do while 在 不管 是不是  满足 循环条件  都先去 执行一次的时候 时候
    */


// 石头0 剪子1 布2
// 用户:0 0 0
// 电脑:0 1 2

/*
*  用户 - 电脑 = 结果
*  用户 0  0  0  1 1 1   2   2  2
*  电脑 0  1  2  0 1 2   0   1  2
*  结果 平 赢 输 输 平 赢  赢  输  平
*      0 -1       0 -1   2      0
* */

// //用户
// var a = parseInt(prompt("石头:0 剪子:1 布:2"));
// a = a>2||a<0?0:a;//添加 超出范围的判断 超出范围就是  默认的石头
// //电脑
// var b = parseInt(Math.random()*10)%3;
// //结果
// var r = a-b;
// if (r==0){
//     alert("用户:"+a+"VS电脑:"+b+"平局");
// } else if (r==-1||r==2){
//     alert("用户:"+a+"VS电脑:"+b+"赢");
// }else {
//     alert("用户:"+a+"VS电脑:"+b+"输");
// }

//随机数函数:Math.random()
// console.log(parseInt(Math.random()*10)%4);

//函数：函数  是一段代码块
// 1.函数公式：function 函数名字 (){代码}  声明
//特点：定义完函数之后  不会去主动执行
//2.调用函数 函数名(); 让函数  执行的过程   调用

function v (){

    //通过 ID  去得到 一个元素
    var userEle = document.getElementById("user");
    var resultEle = document.getElementById("result");
    var computerEle = document.getElementById("computer");
    // console.log(e);
    // userEle.innerHTML = "石头";

    //用户
    var a = parseInt(prompt("石头:0 剪子:1 布:2"));
    a = a>2||a<0?0:a;//添加 超出范围的判断 超出范围就是  默认的石头
//电脑
    var b = parseInt(Math.random()*10)%3;
//结果
    var r = a-b;
    if (r==0){
        userEle.innerHTML = a;
        computerEle.innerHTML = b;

        resultEle.innerHTML = "用户:"+a+"VS电脑:"+b+"平局";
        // alert("用户:"+a+"VS电脑:"+b+"平局");
    } else if (r==-1||r==2){

        userEle.innerHTML = a;
        computerEle.innerHTML = b;
        resultEle.innerHTML = "用户:"+a+"VS电脑:"+b+"赢";
    }else {
        userEle.innerHTML = a;
        computerEle.innerHTML = b;
        resultEle.innerHTML = "用户:"+a+"VS电脑:"+b+"输";
    }
}



// v();






var cc = document.getElementById("c");
// cc.innerHTML = "123";
console.log(cc.innerHTML);


document.write("<br>");




//shitou0 jianzi1 bu2

// r:0 ping
// r:-1 ying
// r:-2 shu
// r:1 shu
// r:2 ying

// 1. 石头剪子布 逻辑
// for (var i=0;i<10;i++){
//     var user = parseInt(prompt(""));
//     var conputer = parseInt(Math.random()*10)%3;
//     var r = user-conputer;
//     if (r==-1||r==2){
//         alert(user+":"+conputer+"ying");
//     }else if (r==0){
//         alert(user+":"+conputer+"ping");
//     }else {
//         alert(user+":"+conputer+"shu");
//     }
// }

function start() {
    var user = parseInt(prompt(""));
    var conputer = parseInt(Math.random()*10)%3;
    var r = user-conputer;

    var userEle = document.getElementById("user");
    var reusltEle = document.getElementById("result");
    var computerEle = document.getElementById("conputer");

    if (r==-1||r==2){
        userEle.innerHTML = result(user);
        reusltEle.innerHTML = user+":"+conputer+"ying";
        computerEle.innerHTML = result(conputer);
    }else if (r==0){
        reusltEle.innerHTML = user+":"+conputer+"ping";
        userEle.innerHTML = result(user);
        computerEle.innerHTML = result(conputer);
    }else {
        reusltEle.innerHTML = user+":"+conputer+"shu";
        userEle.innerHTML = result(user);
        computerEle.innerHTML = result(conputer);
    }
}

function result(value) {
    switch (value){
        case 0:
            return "石头";
            break;
        case 1:
            return "剪子";
            break;
        case 2:
            return "布";
            break;
    }
}

