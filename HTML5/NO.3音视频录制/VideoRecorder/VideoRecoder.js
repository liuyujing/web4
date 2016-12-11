/**
 * Created by liuyujing on 2016/12/8.
 */
(function () {

    function VideoPlayer(playerID) {

        this.videoRecorder = null;

        this.videoPlayer = document.getElementById(playerID);

        //盛放 流 的数组
        this.buffers = [];

        console.log(this.getUserMedia());
    }

    VideoPlayer.prototype.getUserMedia = function () {

        var self = this;

        if (navigator.getUserMedia){

            navigator.getUserMedia({audio:true,video:true},function (stream) {

                self.videoRecorder = new MediaRecorder(stream);

                self.videoRecorder.onstop = function () {

                    var blob = new Blob(self.buffers,{type:"video/webm"});

                    self.videoURL = URL.createObjectURL(blob);
                    self.videoPlayer.src = self.videoURL;
                };

                self.videoRecorder.onstart = function () {
                    //再次点击开始的时候 清空数组中的数据
                    self.buffers = [];
                };

                self.videoRecorder.ondataavailable = function (blobEvent) {
                    self.buffers.push(blobEvent.data);
                };

            },this.onError);

            return "浏览器支持";
        }else {

            return "浏览器不支持";
        }

    };

    VideoPlayer.prototype.onError = function (error) {
        console.log(error);
    };

    //播放
    VideoPlayer.prototype.videoPlay = function () {

        if (this.videoURL){
            this.videoPlayer.play();
        }

    };

    VideoPlayer.prototype.videoStop = function () {
        if (this.videoURL){
            this.videoPlayer.pause();
        }
    };

    //暂停播放
    VideoPlayer.prototype.videoPause = function () {
        if (this.videoURL&&this.videoPlayer.paused!=true&&this.videoPlayer.playing==true){
            this.videoPlayer.pause();
        }
    };

    //继续播放
    VideoPlayer.prototype.videoResume = function () {
        if (this.videoURL&&this.videoPlayer.paused==true){
            this.videoPlayer.resume();
        }
    };

    //下载视频
    VideoPlayer.prototype.videoDownLoad = function () {
        var videoName = prompt("请输入视频的名字","video");

        console.log(this.videoURL);
        var a = document.createElement("a");
        a.href = this.videoURL;
        a.download = videoName;
        a.click();

    };

    //开始录制
    VideoPlayer.prototype.recorderStart = function () {
        console.log("start:",this.videoRecorder);
        if (this.videoRecorder){

            this.videoRecorder.start();
        }
    };

    //停止录制
    VideoPlayer.prototype.recorderStop = function () {
        if (this.videoRecorder){
            this.videoRecorder.stop();
        }
    };

    //暂停录制
    VideoPlayer.prototype.recorderPause = function () {
        if (this.videoRecorder&&this.videoRecorder.state!="paused"){
            this.videoRecorder.pause();
        }
    };

    //继续录制
    VideoPlayer.prototype.recorderResume = function () {
        if (this.videoRecorder&&this.videoRecorder.state=="paused"){
            this.videoRecorder.resume();
        }
    };


    window.VideoPlayer = VideoPlayer;
})();


/*
* 音视频播放器
* 可以录制  播放
* 下载  删除（录制完 在列表中显示录制的文件） 点击录制的文件播放
* */
