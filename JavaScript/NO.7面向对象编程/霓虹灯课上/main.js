/**
 * Created by liuyujing on 2016/11/8.
 */
(function () {

    var isStart = false;//判断是否开始
    var timer;//更改颜色的定时器
    var index = 0;//霓虹灯的下标
    var colors = ["#C80014","#0EBF94","#36A1FF","#FFE10C","#FF0070"];//霓虹灯颜色数组
    var isReturn = false;//是否需要返回去更改色块的颜色

    //有返回值的函数  返回值是一个div元素
    //可以把这个函数 当成div元素 来使用
    function createViews() {
        var bgView = document.createElement("div");
        bgView.className = "bg-view";

        for (var i=0;i<10;i++){
            var item = document.createElement("div");
            item.className = "item-view";
            bgView.appendChild(item);

            item.onclick = function () {
                isStart = !isStart;
                isStart?start():pause();
            }
        }

        return bgView;
    }

    function start() {
        timer = setInterval(function () {

            var items = document.getElementsByClassName("item-view");
            //
            items[isReturn?index--:index++].style.background = colors[parseInt(Math.random()*1000)%colors.length];

            //如果index是色块的第一个元素的下标就是从前往后 去变换
            if (index==0){
                isReturn = false;
            }else if (index==items.length-1){
                //如果是最后一个元素的下标 就需要从后往前执行
                isReturn = true;
            }

        },500);
    }

    function pause() {
        clearInterval(timer);
    }

    function init() {
        document.body.appendChild(createViews());
    }

    init();

})();
