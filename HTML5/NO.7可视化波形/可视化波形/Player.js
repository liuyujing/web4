/**
 * Created by liuyujing on 2016/12/14.
 */
(function () {

    function Player(url) {

        this.audioContext = new AudioContext();
        this.bufferSource = this.audioContext.createBufferSource();
        this.analyser = this.audioContext.createAnalyser();

        this.canvasContext = document.querySelector(".visualView").getContext("2d");

        this.playerInit(url);

        this.bufferSource.onended = function (e) {
            console.log("播放完毕",e);
        }

    }

    Player.prototype.reload = function () {
        if (this.bufferSource){
            this.audioContext.stop();
            this.bufferSource = null;
        }
        this.bufferSource = this.audioContext.createBufferSource();
        this.analyser = this.audioContext.createAnalyser();
    };


    Player.prototype.loadAnalyserArray = function () {

        this.analyser.fftSize = 1024;
        var array = new Uint8Array(this.analyser.frequencyBinCount);
        this.analyser.getByteTimeDomainData(array);

        return array;
    };

    Player.prototype.draw = function () {

        var self = this;

        var array = this.loadAnalyserArray();

        this.canvasContext.clearRect(0,0,800,600);

        var itemWidth = 10;
        var itemSpace = 5;
        var WIDTH = 800;
        var HEIGHT = 600;

        //计算 画布内 可以绘制 多少 小方块
        var canDrawNum = WIDTH/(itemWidth+itemSpace);

        //计算 每隔多少个 挑选一个 array数组中的元素
        var step = parseInt(array.length/canDrawNum);

        for (var i=0;i<canDrawNum;i++){
            var itemHeight = array[i*step];

            self.canvasContext.fillStyle = "red";

            self.canvasContext.fillRect((itemWidth+itemSpace)*i,HEIGHT-itemHeight,itemWidth,itemHeight);

        }

        setTimeout(function () {
            self.draw();
        },100);
    };

    Player.prototype.playerInit = function (url) {

        var self = this;
        this.loadAudio(url,function (arrayBuffer) {

            self.audioContext.decodeAudioData(arrayBuffer,function (buffer) {
                self.bufferSource.loop = true;
                self.bufferSource.buffer = buffer;

                self.bufferSource.connect(self.analyser);

                self.analyser.connect(self.audioContext.destination);

            });

        });


    };

    Player.prototype.loadAudio = function (url,callback) {

        var request = new XMLHttpRequest();
        request.responseType = "arraybuffer";
        request.open("GET",url,true);
        request.onload = function () {
            if (callback){
                callback(request.response);
            }
        };
        request.send();
    };


    Player.prototype.play = function () {
        if (this.audioContext.state != "suspended"){
            this.bufferSource.start();
        }else {
            this.audioContext.resume();
        }

        this.draw();
    };

    Player.prototype.pause = function () {
        this.audioContext.suspend();
    };

    window.Player = Player;

})();
