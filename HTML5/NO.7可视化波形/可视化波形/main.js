/**
 * Created by liuyujing on 2016/12/14.
 */
(function () {


    function init() {

        var button = document.querySelector(".control");

        var player = new Player("丑八怪.mp3");

        button.onclick = function () {

            if (this.textContent == "播放"){

                player.play();

                this.textContent = "暂停";
            }else {

                player.pause();

                this.textContent = "播放";
            }

        };
    }

    init();

})();
