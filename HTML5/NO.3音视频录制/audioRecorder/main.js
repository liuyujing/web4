/**
 * Created by liuyujing on 2016/12/8.
 */
(function () {


    var audioPlayer = document.getElementById("audioPlayer");

    var startRecorderButton = document.getElementById("startRecorderButton");
    var pauseRecorderButton = document.getElementById("pauseRecorderButton");
    var stopRecorderButton = document.getElementById("stopRecorderButton");
    var downButton = document.getElementById("downButton");

    //盛放 音频流的数组
    var buffers = [];

    function init() {

        navigator.getUserMedia = (navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia);


        if (navigator.getUserMedia){

            console.log("浏览器支持！");

        //    开始捕获 音频流
        //    {audio:true} 设置 获得媒体的 内容
            navigator.getUserMedia({audio:true},onSuccess,onError);


        }else {
            console.log("浏览器不支持！");
        }

    }

    //获得媒体成功的回调
    function onSuccess(stream) {
        //成功后 会捕获到 用户媒体设备的流（捕获到的 音视频 数据）
        console.log(stream);

        var recorder = new MediaRecorder(stream);

        startRecorderButton.onclick = function () {
            if (recorder.state != "recording"){
                recorder.start();
            }
        };

        pauseRecorderButton.onclick = function () {
            if (pauseRecorderButton.textContent == "暂停"){
                pauseRecorderButton.textContent = "继续";
                recorder.pause();
            }else {
                pauseRecorderButton.textContent = "暂停";
                recorder.resume();
            }

        };

        stopRecorderButton.onclick = function () {
            if (recorder.state == "recording"){
                recorder.stop();
            }

        };

        downButton.onclick = function (event) {
            event.preventDefault();

            //把音频流数组 转换成 二进制对象
            var blob = new Blob(buffers,{type:"audio/mp3"});

            //    把二进制对象 转换成URL
            var url = URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'test.mp3';
            a.click();

        };

        recorder.onstart = function () {
            //录制完成 清空数组
            buffers = [];
        };

        //录制完成的回调
        recorder.onstop = function () {
            console.log("录制完成");

            //把音频流数组 转换成 二进制对象
            var blob = new Blob(buffers,{type:"audio/mp3"});

        //    把二进制对象 转换成URL
            var url = URL.createObjectURL(blob);

            audioPlayer.src = url;

            console.log(url);


        };

        //当获得到 有效的数据的时候  触发
        recorder.ondataavailable = function (bufferEvent) {
            //BlobEvent
            //把得到流  存入到 数组中
            buffers.push(bufferEvent.data);
        };

        recorder.onerror = function (error) {
            console.log(error);
        };

        recorder.onpause = function () {
            console.log("暂停");
        };

        recorder.onresume = function () {
            console.log("继续");
        };

        recorder.onstart = function () {
            console.log("开始");
        };
    }

    //获得媒体失败的回调
    function onError(error) {
        console.log(error);
    }

    init();

})();
