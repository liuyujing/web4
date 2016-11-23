/**
 * Created by liuyujing on 2016/11/17.
 */

var leftNum = 0;
function action() {

    var image = document.getElementsByTagName("a")[0];
    // var timer = setInterval(function () {
    //     leftNum-=20;
    //     if (leftNum==-550){
    //         clearInterval(timer);
    //     }ui
    //     image.style.left = leftNum+"px";
    // },200);

    // move(300,0,-550,image);

    var animation = new animte.Animation(600);
    // animation.moveOutToLeft(image);
    // animation.moveInFromLeft(image);
    // animation.moveOutToRight(image);
    animation.moveInFromRight(image);

}

//frame per sec 每秒的帧率 fps

/*
* move 动画的函数
* duration :动画的持续时间
* */
function move(duration,fromX,toX,element) {
    //每秒刷新40帧
    var fps = 40;
//    获得每帧 执行的时间
    var frameDuration = Math.round(1000/fps);
//    动画执行完成 所需要的帧数 -> 控制 停止定时器
    var frames = Math.round(duration/frameDuration);

    //判断执行完毕 所有桢
    var frameIndex = 0;

    var x = fromX;
    //获得到 每帧移动的速度
    var speed = (toX-fromX)/frames;
    var timer = setInterval(function () {

            ++frameIndex;
            x += speed;

            if (frameIndex == frames) {
                clearInterval(timer);
            //    纠正 移动的错误偏差
                element.style.left = toX+"px";
            }

            element.style.left = x+"px";
        }
    ,frameDuration);
}



(function () {

    var datas = ["images/0.jpg","images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg"];
    var view = new _.CarouselView(datas,document.body);
    view.showFirstPage(0);
    var show = document.getElementById("show");
    view.clickImageCallback = function (index) {
        console.log(index);

        show.innerHTML = "<img src="+datas[index]+">";
    }

})();



//
// function aaa() {
//     alert("");
// }
//
// function bbb(func) {
//     setTimeout(function () {
//         func();
//     },3000);
// }
//
// bbb(aaa);
