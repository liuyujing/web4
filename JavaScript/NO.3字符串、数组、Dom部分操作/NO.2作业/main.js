/**
 * Created by liuyujing on 2016/11/2.
 */

/*
var result = document.getElementById("result");
var user = document.getElementById("user");
var computer = document.getElementById("computer");

result.onclick = function () {
    startGuess();
};

function startGuess() {
    var list = ["石头","剪子","布"];
    var userNum = parseInt(prompt("石头：0 剪子：1 布：2"));
    var computerNum = parseInt(Math.random()*10)%3;
    var r = userNum - computerNum;

    if (r == 0){
        result.innerHTML = "平局";
        user.innerHTML = list[userNum];
        computer.innerHTML = list[computerNum];
    } else if (r==-1||r==2){
        result.innerHTML = "赢";
        user.innerHTML = list[userNum];
        computer.innerHTML = list[computerNum];
    }else {
        result.innerHTML = "输";
        user.innerHTML = list[userNum];
        computer.innerHTML = list[computerNum];
    }
}
*/
// switch (userNum){
//     case 0:
//         user.innerHTML = "石头";
//         break;
//     case 1:
//         user.innerHTML = "剪子";
//         break;
//     case 2:
//         user.innerHTML = "布";
//         break;
// }


// var button = document.createElement("div");
// button.innerHTML = "播放";
// document.body.appendChild(button);
//
// button.onclick = function () {
//     button.innerHTML = button.innerHTML=="播放"?"暂停":"播放";
//     // this.innerHTML = this.innerHTML=="播放"?"暂停":"播放";
// };

// function change() {
//     button.innerHTML = button.innerHTML=="播放"?"暂停":"播放";
// }

var c = "*";
for (var i=0;i<5;i++){
    console.log(c);
    c = c+"*";
}



for (var i=1;i<10;i++){
    for (var j=1;j<=i;j++){
        var r = j*i;
        document.write(j+"*"+i+"="+r+" ");
    }
    document.write("<br>");
}


