/**
 * Created by liuyujing on 2016/12/13.
 */
(function () {

    function AudioPlayer(url) {
        var self = this;
        this.audioShowContext = document.querySelector(".audioShow").getContext("2d");

        this.audioContext = new AudioContext();
        this.source = this.audioContext.createBufferSource();
        this.analyser = this.audioContext.createAnalyser();

        this.loadAudio(url,function (arrayBuffer) {
            self.audioContext.decodeAudioData(arrayBuffer,function (buffer) {

                self.source.buffer = buffer;
                self.source.connect(self.analyser);
                self.analyser.connect(self.audioContext.destination);

            });

        });

    }

    AudioPlayer.prototype.draw = function () {
        var self = this;

        var width = 800;
        var heiht = 600;

        var itemWidth = 10;
        var space = 3;

        var itemNum = width/(itemWidth+space);
        self.audioShowContext.clearRect(0,0,800,600);

        var array = this.getAnalyserArray(this.analyser);

        var step = parseInt(array.length/itemNum);
        this.audioShowContext.fillStyle = "#FF5831";


        for (var i=0;i<itemNum;i++){
            var h = array[i*step]-100;
            this.audioShowContext.fillRect(i*(itemWidth+space),heiht-h,itemWidth,heiht);
        }
        id = requestAnimationFrame(function () {
            console.log(self.source);

            self.draw();
            // cancelAnimationFrame(id);
        });
    };

    AudioPlayer.prototype.getAnalyserArray = function (analyser) {
        analyser.fftSize = 1024;
        var bufferLength = analyser.fftSize;
        var dataArray = new Uint8Array(bufferLength);
        analyser.getByteTimeDomainData(dataArray);
        return dataArray;
    };

    AudioPlayer.prototype.play = function () {
        if (this.audioContext.state == "suspended"){
            this.audioContext.resume();
        }else {
            this.source.start();
        }
        this.draw();
    };

    AudioPlayer.prototype.stop = function () {

        this.audioContext.suspend();
    };

    AudioPlayer.prototype.loadAudio = function (url,callback) {
        var request = new XMLHttpRequest();
        request.open("GET",url);
        request.responseType = "arraybuffer";
        request.onload = function () {
            if (callback){
                callback(request.response);
            }
        };
        request.send();
    };

    window.AudioPlayer = AudioPlayer;
})();
