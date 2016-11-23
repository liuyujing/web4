/**
 * Created by liuyujing on 2016/11/4.
 */
//数组
var e = document.createElement("div");
var array = ["123", 12, 22, 56, "98", e];
var arr1 = new Array(4);//创建一个长度是4的空数组
console.log(arr1);

var arr2 = [];
arr2.push(45);//在数组的最后一个元素的 后面  添加一个新的元素
console.log(arr2);


var li = document.createElement("li");
var arr3 = [];
arr3.push(li);

//创建10个li 放到数组中
var arr4 = [];

for (var i=0;i<10;i++){
    var liEle = document.createElement("li");
    arr4.push(liEle);
}
console.log(arr4);

var arr5 = [33,55,12,67];
arr5.pop();
console.log(arr5);

//点击添加按钮  添加一个数字 到数组 并输出
//点击删除按钮  输出最后一个元素 到数组 并输出

var addButton = document.querySelector("#add");
var removeButton = document.querySelector("#remove");

var arr6 = [];
addButton.onclick = function () {
    var num = prompt("请输入一个数字");
    arr6.push(num);
    console.log(arr6);
};

removeButton.onclick = function () {
    if (arr6.length==0){
        alert("删完了！");
        return;
    }
    arr6.pop();
    console.log(arr6);
};

/*
var time = 60;
var scores = [];
var score = 0;
var timer = setInterval(function () {
    time--;
    if (time==0){
        clearInterval(timer);
        time = 60;
        scores.push(score);
    }
},1000);
*/

//开始按钮 点击《开始》 开启定时器  点击结束《清除定时器》

//随机 出现 《点我》 《不要点》（可以放到数组中  根据随机数 取数组中的值） 字体颜色是红色都不可以点 字体颜色是蓝色并且文字是《点我》可以点
//60秒为一局
//记录用户的分数

var controlButton = document.getElementById("control");
var content = document.getElementById("content");

var titles = ["点我","不要点"];
var colors = ["#CE0015","#36A1FF"];

var timer;//定时器变量
var time = 60;//默认是60秒
var score = 0;//分数
var scoreArray = [];//记录分数的数组

controlButton.onclick = function () {
    var selected = this.innerHTML=="开始";
    if (selected){
        this.innerHTML = "结束";
    //    开启定时器
        timer = setInterval(function () {
            time--;
            if (time<0){
                time = 60;
                clearInterval(timer);
                controlButton.innerHTML = "开始";

                scoreArray.push(score);//记录分数到数组
                console.log("结束",scoreArray);
                score = 0;//记录完毕 还原 分数
                return;
            }
            var titleRand = parseInt(Math.random()*10)%2;
            var colorRand = parseInt(Math.random()*10)%2;
            content.innerHTML = titles[titleRand];
            content.style.color = colors[colorRand];
        },1000);
    }else {
        this.innerHTML = "开始";
    //    清除定时器
        clearInterval(timer);
        time = 60;

        scoreArray.push(score);
        console.log("结束",scoreArray);
        score = 0;//记录完毕 还原 分数
    }
};

content.onclick = function () {
    if (time<=60&&time>=0){

        if (this.innerHTML=="点我"&&getComputedStyle(content).color=="rgb(54, 161, 255)"){
            score++;
            console.log(score);
        }
    }
};


var arr7 =[12,33,55,78,33];
// arr7.unshift(99);
// console.log(arr7);

// arr7.shift();
// console.log(arr7);

// arr7[1] = 45;
// console.log(arr7);

// var newList = arr7.reverse();
// console.log(newList);


// var str = arr7.join("..");
// console.log(str);

var num = arr7.indexOf(33);
console.log(num);
console.log(arr7.lastIndexOf(33));


var arr8 = [2,44,61,2,50];
// console.log(arr8.indexOf(2));
console.log(arr8.lastIndexOf(2));

var arr9 = [33,55,68,50];
// var newArr = arr9.splice(0,2);
// console.log(newArr);
// console.log(arr9);
arr9.splice(1,2,44,43);
console.log(arr9);


var arr10 = ["你好","很好","不错"];
arr10.splice(1,2,"123","345","11","222");
console.log(arr10);

var arr11 = [44,66,32,67];
var r = arr11.slice(1,3);
console.log(r);

var arr12 = [33,44,55];
var arr13 = [123,456];
var r2 = arr12.concat(arr13);
console.log(r2);


var arr14 = [33,2,56,11,15,30,50,66,1];
// var r3 = arr14.sort();
// console.log(r3);
var r4 = arr14.sort(function (a,b) {
    return a<b;
});
console.log(r4);

var arr15 = ["zhangSan","liSi","xiaoBai","aHuang","daBai"];
var r5 = arr15.sort(function (a,b) {
   return a>b;
});
console.log(r5);

var arr16 = ["三丰","阿毛","丁宇","雪若宬","逄守政","张皓","刘新花"];

var r6 = arr16.sort(function (a,b) {
    return a.localeCompare(b);
});
console.log(r6);


arr16.forEach(function (item,index,array) {
   console.log(item,index,array);
});

// "hello world"
var str = "hello world";
str = str.split(" ").reverse().join(" ");
console.log(str);

createLiEle();
createLiEle();
createLiEle();
createLiEle();
loadData();




function createLiEle() {
    console.log("好");
}

function loadData() {
    
}


function mmm() {
    var a = 10;
    var b = 20;
    console.log(a+b);
}

mmm();

//形参：在函数小括号中 写的 标识 他没有实际意义 a b 占位符
//实参：实际传到 函数中的值 2 5

//为什么要使用带参的函数？
//当函数内 有需要 被改变的内容的时候  可以选择 使用 带参的函数

/*
* 形参
* 没有实际意义
* 占位符
* 在函数里面  会代表 传进来的内容
* */

/*
* 实参
* 具体的值
* */

function vvv(a,b) {
    console.log(a+b);
}
var cc =2;
vvv(cc,5);

// function www() {
//
// }
//
// www(123432);


// function 函数名(形参,形参...) {
//
// }

function fff(a) {
    console.log(a);
}

fff(10);


function addText(a) {
    document.getElementById("test").innerHTML = a;
}

addText("内容");
addText("内容2");


var list = [1,55,33,97,65];

/*
console.log("获得数组的长度",list.length);

list.push(77);
console.log("在数组的最后一个元素 后面 添加一个新的元素",list);

list.unshift(5);
console.log("在数组第一个元素的前面 添加一个新的元素",list);

list.pop();
console.log("删除数组中的最后一个元素",list);

list.shift();
console.log("删除数组中的第一个元素",list);
*/

/*
list.splice(1,2);
console.log("从下标是1的位置开始  删除两个元素",list);
*/

/*
console.log("获得从下标是1的位置 开始  到长度是2的位置的元素",list.splice(1,2));
*/

/*
list.splice(1,2,80,70);
console.log("从下标是1的位置开始  删除两个元素 并添加 80 70 ",list);
*/

/*
console.log("从下标是0的位置开始  截取到 下标是3 这个位置之前的内容",list.slice(0,3));
*/

/*
console.log("获得33在数组中 所在的位置 indexOf是从前面开始搜索33的位置",list.indexOf(33));
console.log("获得33在数组中 所在的位置 lastIndexOf是从后面开始搜索33的位置",list.lastIndexOf(33));
*/

/*
list.reverse();
console.log("reverse 翻转数组",list);
*/

/*
console.log("把数组转成 字符串 可以使用一个分隔符分隔开",list.join(" "));
*/

/*
console.log("合并两个数组",list.concat([333,444,555]));
*/

/*
list.forEach(function (a,b,c) {
    console.log("forEach 遍历数组 回调函数中 第一个参数 是得到的元素； 第二个参数 是元素的下标；第三个参数 是遍历的数组 ",a,b,c);
});
*/

/*
list.sort(function (a,b) {
    return a>b;
});
console.log("sort 对数组进行排序 需要传一个比较的函数",list);
*/

/*
var list2 = ["小明","阿三","悟空"];
list2.sort(function (a,b) {
    return a.localeCompare(b);
});
console.log("如果是中文 需要使用localeCompare 去比较",list2);
*/

function sum(a,b) {
    console.log(a,b);
}

sum(20,40);
