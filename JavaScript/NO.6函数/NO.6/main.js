/**
 * Created by liuyujing on 2016/11/7.
 */

//复习周五部分
/*
var list = [1,2,34,577];
//可以判断 数组 是不是 一个空的数组
if (list.length!=0){
    for (var i=0;i<list.length;i++){

    }
}
//数组越界
console.log(list[4]);

//在数组中添加一个元素

list.push(500);

list.pop();

list.unshift(45);

list.shift();

//合并两个数组
var newList = list.concat([99,88]);

newList.reverse();

var str = newList.join("~");

var r = newList.slice(0,2);

var s = newList.splice(0,3);

newList.splice(0,3,66,77);

// [1,4,66,77,66,89];
var l = newList.indexOf(66);
var l1 = newList.lastIndexOf(66);

var list2 = newList.sort(function (a,b) {
    // return a>b;
    return a.localeCompare(b);
});

newList.forEach(function (item,index,arr) {
    console.log(item,index,arr);
});


function funcName(a) {

}

funcName(10);
funcName(15);
funcName(20);
*/

/*-----------------------*/

//新课部分
/*
function sum(a,b) {
    var r = a+b;
    console.log(r);
}
sum(10,20);
// console.log(sum(10.20));
*/

/*
function sum(a,b) {
    var r = a+b;

    return r;
}

console.log(sum(10,20)+20);

//封装一个 拼接 字符串的函数
// 拼接"hello" "world" -> hello world

//并且 封装 把字符串 转成数组的函数 -> 数组


function appendStr(a,b) {
    return a+" "+b;
}

var s = appendStr("hello","world");
console.log(s);


function toArr(str) {
    return str.split(" ");
}

var list = toArr(s);

console.log(list.length);

list.forEach(function (a) {
   console.log(a);
});
*/
//封装 英雄 攻击怪物 的方法
//需要传 攻击的技能 1，2，3

// var hero = 1000;
// var monser = 2000;
//
// function xx(x) {
//     区分那种技能 攻击力不同
// }

/*
//得到怪物剩余的血量
function attToMonster(monster,attType) {

    switch (attType){
        case "1":
            monster -= 30;
            break;
        case "2":
            monster -= 50;
            break;
        case "3":
            monster -= 100;
            break;
    }

    return monster;
}

var monsterBlood = 2000;

// console.log("攻击之后 怪物的血量",attToMonster(monsterBlood,"2"));

monsterBlood = attToMonster(monsterBlood,"2");
monsterBlood = attToMonster(monsterBlood,"2");
*/

/*
//计算器 + - * / =
// 1 + 1 * 5 = 结果

var titles = ["1","2","3","4"..."+","-","结果"]
for (var i=0;i<titles.length;i++){
    var div = document.createElement("div");

    document.body.appendChild(div);
}
*/

/*
var titles = ["0","1","2","3","4","5","6","7","8","9","+","-","*","/","=","结果"];

var list = [];
for (var i=0;i<titles.length;i++){
    var div = document.createElement("div");
    div.innerHTML = titles[i];
    document.body.appendChild(div);

//    需要把 = 和显示结果的元素 区分出来
    if (i<titles.length-2){
        div.onclick = function () {
            if (list.length>=3){
            //    让计算的结果 继续继续添加到 数组里面  清除上一个数组
                var resultNum = result();
                list = [];
                list.push(resultNum);

            }
            list.push(this.innerHTML);
            console.log(list);
        };
    }
    if (i==titles.length-2){
        div.onclick = function () {
        //    点击等号 直接获得到 计算的结果

            showResult(result());
            list = [];
        }
    }
    if (i==titles.length-1){
        div.id = "result";
    }
}

function showResult(r) {
    document.getElementById("result").innerHTML = r;
}

function result() {
//    具体计算结果
    var num1 = parseInt(list[0]);
    var num2 = parseInt(list[2]);

    //计算出来的结果
    var r = 0;

    //list[1] 运算符号
    switch (list[1]){
        case "+":
            r = num1+num2;
            break;
        case "-":
            r = num1-num2;
            break;
        case "*":
            r = num1*num2;
            break;
        case "/":
            r = num1/num2;
            break;

        default:
            alert("输入错误");
    }

    return r;
}

*/

/*----------------------*/
//下午
//变量的作用域
var a = 20;
b = 30;
/*
* 全局变量：在整个文件中 都可以使用
* 局部变量：只要指定位置 可以使用
* */

/*
* js中 允许 创建变量的时候  不使用var
* 如果不使用var 创建出来的变量 是一个全局变量
*
* */

// var bb = 20;
/*
function mmm() {
    // console.log(a,b);
    var c = 20;//局部变量 只在声明的位置开始 到函数结束起作用
    //避免 省略var的形式
    d += c;
}

function vvv() {
    console.log(c);
}

// var c = 20;
console.log(c);

mmm();
mmm();
mmm();

console.log(d);
*/


// function mmm(a,b,c) {
//     //给参数默认值
//     /*
//     a=a||0;
//     b=b||0;
//     c=c||0;
//     */
//
//     a = a?a:0;
//     b = b?b:0;
//     c = c?c:0;
//
//     var r = a+b+c;
//     console.log(r);
// }
//
// mmm(1);

// var list = [];
// list.splice(0,1,3,5,6,7,8);

// function mmm() {
//     // arguments
// }
//
// mmm();


/*
function mmm(a,b) {
    console.log(arguments);
}
mmm(10,20);
*/

/*
//前两个参数 忽略
//计算 从第三个参数 开始 的和
function mmm() {
    console.log(arguments);

    var r = 0;
    for (var i=0;i<arguments.length;i++){
        console.log(arguments[i]);
        if (i>1){
            r += parseFloat(arguments[i]);
        }
    }

    console.log(r);
}

mmm(20,30,40,50,60);
*/

/*
function 函数名() {}

var 函数名 = function () {}
*/

// var 函数名 = new Function("参数","参数","函数体");
/*
var mmm = function (a,b) {

};
mmm(10,20);
*/

// var mm = new Function("a","b","console.log(a+b);");
// mm(10,20);


// var mm = new Function("a","b","return a+b;");
// console.log(mm(10,20));


// .value
//输入代码  点击运行按钮   得到执行效果

var input = document.getElementById("input");
var button = document.getElementById("start");

button.onclick = function () {
    console.log(input.value);
    var runFunc = new Function(input.value);
    runFunc();
};

// var a = 10;
// var b = 20;

// (function () {
//
// })();
//
// (function () {}());

// var a = 20;

// function aaaa() {
//     console.log(123);
// }

// (function () {
//
//     console.log(123);
//
// })();
