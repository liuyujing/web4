/**
 * Created by liuyujing on 2016/12/13.
 */
(function () {

    function init() {

        var control = document.querySelector(".control");
        var player = new AudioPlayer("丑八怪.mp3");

        control.onclick = function () {
            if (this.textContent == "播放"){
                this.textContent = "停止";
                player.play();
            }else {
                this.textContent = "播放";
                player.stop();
            }
        };
    }

    init();

})();
