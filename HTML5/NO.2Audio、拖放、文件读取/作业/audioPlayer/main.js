/**
 * Created by liuyujing on 2016/12/10.
 */
(function () {

    function init() {

        var titleLabel = document.querySelector(".audioTitle");
        var preButton = document.querySelector(".pre");
        var nextButton = document.querySelector(".next");
        var loopType = document.querySelector(".loopType");
        var audio = document.querySelector(".audioPlayer");

        var audioPlayer = new AudioPlayer(audio,document.body);

        preButton.onclick = function () {
            // audio.src =
            console.log(audio.loop)
        };

        nextButton.onclick = function () {
            audioPlayer.next();
            titleLabel.textContent = audioPlayer.title();
        };

        loopType.onchange = function () {

        };
    }

    init();

})();
