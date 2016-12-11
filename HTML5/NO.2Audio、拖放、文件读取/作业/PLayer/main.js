/**
 * Created by liuyujing on 2016/12/11.
 */
(function () {

    function init() {

        var audioEle = document.querySelector(".audioPlayer");
        var audioNameLable = document.querySelector(".audioName");
        var preButton = document.querySelector(".pre");
        var nextButton = document.querySelector(".next");
        var loopTypeButton = document.querySelector(".chooseLoopType");

        var superView = document.querySelector("section");

        var musicPlayer = new audioPlayer.AudioPlayer(audioEle,superView);

        nextButton.onclick = function () {

            musicPlayer.next();
        };

        preButton.onclick = function () {
            musicPlayer.pre();
        };

        loopTypeButton.onchange = function () {
            musicPlayer.setLoopType(this.value);
        };

    }

    init();

})();
