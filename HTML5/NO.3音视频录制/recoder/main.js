/**
 * Created by liuyujing on 2016/12/7.
 */
(function () {

    function init() {
        var audioPlayer = document.getElementById("audioPlayer");
        var videoPlayer = document.getElementById("videoPlayer");
        var recoderButton = document.getElementById("recoderButton");
        var stopButton = document.getElementById("stopButton");
        var resumeButon = document.getElementById("resume");

        navigator.getUserMedia = (navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia);

        if (navigator.getUserMedia){
            console.log("浏览器支持");

            var buffers = [];

            function onSuccess(stream) {
                var video = document.createElement('video');
                video.src = URL.createObjectURL(stream);
                video.controls = true;
                video.muted = true;
                // video.volume = 0.5;
                video.play();

                document.body.appendChild(video);

                var recorder = new MediaRecorder(stream);
                recorder.mimeType = "video/webm";
                recoderButton.onclick = function () {
                    if (recoderButton.textContent == "录制"){
                        recoderButton.textContent = "暂停";

                        recorder.start();
                    }else {
                        recoderButton.textContent = "录制";
                        recorder.pause();
                    }
                };

                stopButton.onclick = function () {
                    recoderButton.textContent = "录制";
                    recorder.stop();
                };

                resumeButon.onclick = function () {
                    recorder.resume();
                };

                recorder.ondataavailable = function (event) {
                    buffers.push(event.data);
                };

                recorder.onstop = function (event) {
                    var blob = new Blob(buffers);
                    var url = URL.createObjectURL(blob);
                    // audioPlayer.src = url;
                    videoPlayer.src = url;

                };

            }

            function onError(error) {
                console.log(error);
            }

            navigator.getUserMedia({audio:true,video:true},onSuccess,onError);

        }else {
            console.log("浏览器不支持");
        }

    }

    init();
})();
