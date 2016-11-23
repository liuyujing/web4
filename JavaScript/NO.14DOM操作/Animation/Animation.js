/**
 * Created by liuyujing on 2016/11/16.
 */
(function () {
    function move(duration,beginX,toX,target,callback) {
        //(Frames Per Second)
        var fps = 50;
        var frameDuration = Math.round(1000/fps);
        var frames = Math.round(duration/frameDuration);

        var frameIndex = 0;
        var x = beginX;
        var speed = (toX-beginX)/frames;
        var timer = setInterval(function () {
            frameIndex++;
            x+=speed;
            if (frameIndex>=frames){
                clearInterval(timer);
                x = toX;

                if (callback){
                    callback(target);
                }
            }
            target.style.left = x+"px";
        },frameDuration);
    }

    function moveInLeft() {

    }
    window.move = move;
})();
