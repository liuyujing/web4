/**
 * Created by liuyujing on 2016/11/1.
 */
// var selected = false;
// function start() {
//     selected = !selected;
//     var image = document.getElementById("image");
//     image.src = selected?"2.png":"1.jpg";
// }


function magic() {
    var box = document.getElementById("box");

    box.style.borderRadius = box.style.borderRadius == ""?"100px":"";
    box.style.border = box.style.border==""?"5px solid #3CC8FF":"";
    box.style.transform = box.style.transform == ""?"scale(0.5)":"";
    box.style.transition = box.style.transition==""?"border-radius 2s, transform 2s":"";
}

var string = "我是一个好人";
console.log(string.length);
console.log(string.indexOf("个"));
// string = string.replace("好人","坏人");
// string = string.substr(1,3);
// string = string.substring(1,3);

console.log(string.search("好人"));

// var list = [1,23,5,11,5,56];
// list.push("23");
// list.splice(1,2,"t","v");
// list = list.slice(2,4);
// list = list.concat(["y","u"]);
var list = ["小明","4大黄","阿毛","高","12"];
list.sort(function (a,b) {
    return a.localeCompare(b);
});
console.log(list);


var str = "hello world";
str = str.split(" ").reverse().join(" ");
console.log(str);

// for (var i=1;i<10;i++){
//     for (var j=1;j<=i;j++){
//         document.write(j+" * "+i+" = "+(j*i)+" ");
//     }
//     document.write("<br>")
// }

