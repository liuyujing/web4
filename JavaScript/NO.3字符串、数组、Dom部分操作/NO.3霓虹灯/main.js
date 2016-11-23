/**
 * Created by liuyujing on 2016/11/2.
 */

//得到一个元素 得到 黑色的div容器
var containerEle = document.getElementById("container");

//创建一个标签名 叫button 的元素
// <button></button>
var button = document.createElement("button");
//<button>开始</button>
button.innerHTML = "开始";
//把button这个元素 放到了 某一个元素里（黑色背景的元素）
containerEle.appendChild(button);


//创建颜色数组
var colors = ["#794EFF","#FFA670","#6590FF","#9B37FF","#58FFFA","#A24CFF","#FF2ADB","#F3FF63","#B4FF11","#0CFF95"];


for (var i=0;i<2;i++){
    //创建div
    //<div></div>
    var colorEle = document.createElement("div");
    //给div添加了 类选择器的名字
    //<div class="color-ele"></div>
    colorEle.className = "color-ele";
    //设置div的样式
    //<div class="color-ele" style="background=xxx"></div>
    colorEle.style.background = colors[i];
    //把创建好的元素 放到 黑色背景的元素中
    containerEle.appendChild(colorEle);
}


var timer;
button.onclick = function () {

    var selected = this.innerHTML == "开始";
    if (selected){
        this.innerHTML = "暂停";
        timer = setInterval(function () {
            var color = colors[parseInt(Math.random()*100)%colors.length];

            //通过getElementsByClassName
            //得到一组 类选择器名字是color-ele的元素
            var eles = document.getElementsByClassName("color-ele");
            var r = parseInt(Math.random()*10)%eles.length;
            eles[r].style.background = color;
        },100);
    }else {
        this.innerHTML = "开始";
        clearInterval(timer);
    }

};
