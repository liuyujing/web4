/**
 * Created by liuyujing on 2016/12/11.
 */

window.audioPlayer = window.audioPlayer || {};

(function () {

    /*
    * 音乐播放 操作相关的类
    * */
    function AudioPlayer(audioEle,superView) {

        this.audioEle = audioEle;

        var audioListView = new audioPlayer.AudioFileListView(audioEle,superView);

        this.audioListView = audioListView;

        this.audios = this.audioListView.audios;

        this.loopType = "0";
    }


    //更新界面
    AudioPlayer.prototype.update = function () {

        var cell = this.audios[this.audioListView.audioIndex];
        document.querySelector(".audioName").textContent = cell.file.name;
        var self = this;
        var reader = new FileReader();
        reader.onload = function () {
            self.audioEle.src = reader.result;
        };
        reader.readAsDataURL(cell.file);

    };

    //上一曲
    AudioPlayer.prototype.pre = function () {

        if(this.loopType == "2"){

            var rand = parseInt(Math.random()*10000)%this.audios.length;

            this.audioListView.audioIndex = rand;

        }else {
            if (this.audioListView.audioIndex == 0){
                this.audioListView.audioIndex = this.audios.length-1;
            }else {
                --this.audioListView.audioIndex;
            }
        }

        this.update();
    };

    //下一曲
    AudioPlayer.prototype.next = function () {

        if(this.loopType == "2"){

            var rand = parseInt(Math.random()*10000)%this.audios.length;

            this.audioListView.audioIndex = rand;

        }else {
            if (this.audioListView.audioIndex == this.audios.length-1){
                this.audioListView.audioIndex = 0;
            }else {
                ++this.audioListView.audioIndex;
            }

        }


        this.update();

    };

    /*
    * 音乐播放结束之后的操作
    * type 音乐循环播放的类型
    * */
    AudioPlayer.prototype.audioEndListener = function (type) {

        var self = this;
        if (type == "1"){

            this.audioEle.onended = function () {
                self.next();
            };

        }else if (type == "2"){

            this.audioEle.onended = function () {

                var rand = parseInt(Math.random()*10000)%self.audios.length;

                self.audioListView.audioIndex = rand;

                self.update();
            };
        }

    };

    /*
    * 循环播放类型
    * 0 单曲循环
    * 1 顺序播放
    * 2 随机播放
    * */
    AudioPlayer.prototype.setLoopType = function (type) {

        this.loopType = type;

        switch (type){
            case "0":
                this.audioEle.loop = true;
                break;
            case "1":
                this.audioEle.loop = false;
                this.audioEndListener(type);
                break;
            case "2":
                this.audioEle.loop = false;
                this.audioEndListener(type);
                break;
            default:
        }

    };

    audioPlayer.AudioPlayer = AudioPlayer;

})();
