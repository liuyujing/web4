/**
 * Created by liuyujing on 2016/11/7.
 */

(function () {

    var colors = ["red","green","#DF4194","#36A1FF"];
    var isStart = false;
    var viewIndex = 0;
    var isReturn = false;
    var timer;
    //创建霓虹灯 界面的方法
    function createViews() {
        //底部背景元素
        var bgView = document.createElement("div");
        bgView.className = "bg-view";
        document.body.appendChild(bgView);

        for (var i=0;i<10;i++){
            var view = document.createElement("div");
            view.className = "view";
            bgView.appendChild(view);

            view.onclick = function () {
                isStart = !isStart;
                isStart?start():pasue();
            }
        }

    }


    function start() {
        var views = document.getElementsByClassName("view");

        timer = setInterval(function () {
            var rand = parseInt(Math.random()*100)%colors.length;

            views[isReturn?viewIndex--:viewIndex++].style.background = colors[rand];
            console.log(viewIndex);

            if (viewIndex==9){
                isReturn = true;
            }else if (viewIndex==0){
                isReturn = false;
            }
        },500);

    }

    function pasue() {
        clearInterval(timer);
    }

    //初始化
    function init() {
        createViews();
    }

    init();

})();



