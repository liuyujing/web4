/**
 * Created by liuyujing on 2016/11/17.
 */

window.animte = window.animte||{};

(function () {

    function Animation(_width) {
        this.width = _width;
    }

    //frame per sec 每秒的帧率 fps

    /*
     * move 动画的函数
     * duration :动画的持续时间
     * fromX 动画的起始位置
     * toX 动画的结束位置
     * 通过 toX fromX 来计算 每一帧动画 执行的速度 var speed = (toX-fromX)/frames;
     * element 让哪一个元素 有动画效果
     * callback function类型的参数 动画执行完成调用的方法
     * */
    Animation.prototype.move = function (duration,fromX,toX,element,callback) {
        //每秒刷新40帧
        var fps = 40;
//    获得每帧 执行的时间
        var frameDuration = Math.round(1000/fps);
//    动画执行完成 所需要的帧数 -> 控制 停止定时器 控制动画的完成时间
        var frames = Math.round(duration/frameDuration);

        //判断执行完毕 所有桢
        var frameIndex = 0;

        var x = fromX;
        //获得到 每帧移动的速度(每帧移动的距离)
        var speed = (toX-fromX)/frames;

        //一帧刷新一次 通过frameDuration（每一帧 执行完成所用的时间）
        var timer = setInterval(function () {

                //每执行一次  让帧数 增加一次
                ++frameIndex;
                //同时更新x的值
                x += speed;
                //如果frameIndex 是最后一帧 就表示动画执行完成了
                if (frameIndex == frames) {
                    //停止定时器
                    clearInterval(timer);
                    //纠正 移动的错误偏差
                    x = toX;
                    //动画完成之后 让回调函数执行（传到是什么函数 就让什么函数去执行）
                    if (callback){
                        callback();
                    }
                }
                //更新界面样式
                element.style.left = x+"px";
            }
            ,frameDuration);
    };

    //从左面移出
    Animation.prototype.moveOutToLeft = function (element,callback) {
        this.move(300,0,-this.width,element,callback);
    };

    //从左面移入
    Animation.prototype.moveInFromLeft = function (element,callback) {
        element.style.left = -this.width+"px";
        this.move(300,-this.width,0,element,callback);
    };

    //从右面移出
    Animation.prototype.moveOutToRight = function (element,callback) {
        this.move(300,0,this.width,element,callback);
    };

    //从右面移入
    Animation.prototype.moveInFromRight = function (element,callback) {
        element.style.left = this.width+"px";
        this.move(300,this.width,0,element,callback);
    };

    animte.Animation = Animation;

})();
