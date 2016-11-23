/**
 * Created by liuyujing on 2016/11/14.
 */
window._ = window._||{};
(function () {

    function Animtaion() {

        var BG_WIDTH = 700;
        var BG_HEIGHT = 500;

        function moveTo(target,duration,fromX,toX,fromY,toY,completeHandler) {
            var fps = 50;
            var frameDuration = Math.round(1000/fps);//每帧需要多长时间
            var frames = Math.round(duration/frameDuration);//完成动画所需要的帧数
            var frameIndex = 0;
            var x = fromX;
            var y = fromY;
            var x_speed = (toX-fromX)/frames;
            var y_speed = (toY-fromY)/frames;

            var timer = setInterval(function () {
                x += x_speed;
                y += y_speed;

                frameIndex++;

                if (frameIndex>=frames){
                    clearInterval(timer);
                    x = toX;
                    y = toY;

                    if (completeHandler){
                        completeHandler(target);
                    }
                }

                target.style.cssText = "left:"+x+"px;top:"+y+"px";
            },frameDuration);
        }

        this.moveInFromLeft = function (target,duration,completeHandeler) {
            target.style.left = -BG_WIDTH+"px";
            moveTo(target,duration,-BG_WIDTH,0,0,0,completeHandeler);
        };

        this.moveInFromRight = function (target,duration,completeHandeler) {
            target.style.left = BG_WIDTH+"px";
            moveTo(target,duration,BG_WIDTH,0,0,0,completeHandeler);
        };

        this.moveInFromTop = function (target,duration,completeHandeler) {
            target.style.top = -BG_HEIGHT + "px";
            moveTo(target,duration,0,0,-BG_HEIGHT,0,completeHandeler);
        };

        this.moveInFromBottom = function (target,duration,completeHandeler) {
            target.style.top = BG_HEIGHT + "px";
            target.style.opacity = 1;
            moveTo(target,duration,0,0,BG_HEIGHT,0,completeHandeler);
        };

        this.moveOutToLeft = function (target,duration,completeHandeler) {
            moveTo(target,duration,0,-BG_WIDTH,0,0,completeHandeler);
        };

        this.moveOutToRight = function (target,duration,completeHandeler) {
            moveTo(target,duration,0,BG_WIDTH,0,0,completeHandeler);
        };

        this.moveOutToTop = function (target,duration,completeHandeler) {
            moveTo(target,duration,0,0,0,-BG_HEIGHT,completeHandeler);
        };

        this.moveOutToBottom = function () {
            moveTo(target,duration,0,0,0,BG_HEIGHT,completeHandeler);
        };
    }

    _.Animtaion = Animtaion;
})();
