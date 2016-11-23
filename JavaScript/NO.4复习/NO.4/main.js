/**
 * Created by liuyujing on 2016/11/3.
 */

var isStart = false;
var timer;
var time = 60;
var score = 0;
var colors = ["#FF0007","#5c5c5c","white"];
var texts = ["红色","黑色","白色"];

var controlButton = document.getElementById("control-button");
var scoreLabel = document.getElementById("score-label");
var timeLable = document.getElementById("time-lable");
var guessView = document.getElementById("guess-view");

controlButton.onclick = start;


function start() {
    isStart = !isStart;
    controlButton.innerHTML = isStart?"停止":"开始";
    if (isStart){
        run();
    }else {
        stop();
    }
}

function run() {
    timer = setInterval(function () {
        changeGuessView();
        timeLable.innerHTML = ""+ --time +"秒";
        if (time==0){
            stop();
        }
    },1000);
}

function stop() {
    clearInterval(timer);
    time = 60;
    score = 0;
    isStart = false;
    scoreLabel.innerHTML = ""+score+"分";
    timeLable.innerHTML = ""+time+"秒";
    controlButton.innerHTML = "开始";
}

function changeGuessView() {

    var colorRand = parseInt(Math.random()*10)%colors.length;
    var textRand = parseInt(Math.random()*10)%colors.length;
    guessView.style.cssText = "color:"+colors[colorRand]+"";
    console.log(guessView);
    guessView.innerHTML = texts[textRand];
}

function addEvent() {
    var eles = document.getElementsByClassName("anser-view");
    for (var i=0;i<eles.length;i++){
        eles[i].onclick = click;
    }
}

addEvent();

function click() {
    console.log(this);
    if (this.innerHTML == guessView.innerHTML){
        scoreLabel.innerHTML = ""+ ++score +"分";
    }else {
        if (confirm("最终得分"+score+"!是否重新开始")){
            stop();
        }
        scoreLabel.innerHTML = ""+score+"分";

    }
}