/**
 * Created by liuyujing on 2016/12/8.
 */
(function () {

    function init() {
        var playControl = document.getElementById("playControl");
        var recorderControl = document.getElementById("recorderControl");
        var saveButton = document.getElementById("saveButton");

        var videoPlayer = new VideoPlayer("videoPlayer");

        playControl.onclick = function () {
            if (playControl.textContent == "播放"){
                playControl.textContent = "停止";
                videoPlayer.videoPlay();
            }else {
                playControl.textContent = "播放";
                videoPlayer.videoStop();
            }
        };

        recorderControl.onclick = function () {
            if (recorderControl.textContent == "录制"){
                recorderControl.textContent = "停止";
                videoPlayer.recorderStart();
            }else {
                recorderControl.textContent = "录制";
                videoPlayer.recorderStop();
            }
        };

        saveButton.onclick = function () {
            videoPlayer.videoDownLoad();
        };

    }

    init();

})();
