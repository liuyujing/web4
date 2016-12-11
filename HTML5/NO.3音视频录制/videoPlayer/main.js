/**
 * Created by liuyujing on 2016/12/8.
 */
(function () {

    function init() {
        var videoPlayer = document.getElementById("videoPlayer");

        var videoControl = document.getElementById("videoControl");

        var changeVolume = document.getElementById("changeVolume");
        //设置 默认音量 滑杆所在的位置
        changeVolume.value = videoPlayer.volume*100;

        videoControl.onclick = function () {

            if (videoControl.textContent == "播放"){
                videoControl.textContent = "暂停";
                videoPlayer.play();
            }else {
                videoControl.textContent = "播放";
                videoPlayer.pause();
            }

        };

        changeVolume.onchange = function () {
            videoPlayer.volume = changeVolume.value/100;
        };

    }

    init();

})();
