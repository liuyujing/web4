/**
 * Created by liuyujing on 2016/12/10.
 */
(function () {

    function AudioPlayer(audioNode,superView) {
        this.audioPlayer = audioNode;
        this.audioListView = new AudioListView(audioNode,superView);
        this.audioList = this.audioListView.audios;
    }

    AudioPlayer.prototype.title = function () {
        return this.audioList[this.audioListView.curAudioIndex].audioFileView.textContent;
    };

    AudioPlayer.prototype.next = function () {
        var self = this;

        var reader = new FileReader();
        reader.onload = function () {
            self.audioPlayer.src = reader.result;
        };
        reader.readAsDataURL(this.audioList[++this.audioListView.curAudioIndex].file);

    };

    AudioPlayer.prototype.pre = function () {

    };


    AudioPlayer.prototype.loopType = function (type) {
        var self = this;

        switch (type){
            case "0":
                this.audioPlayer.loop = true;
                break;
            case "1":
                this.audioPlayer.loop = false;
                this.audioPlayer.onstop = function () {
                      self.next();
                };
                break;
            case "2":
                this.audioPlayer.loop = false;
                break;
            default:
        }
    };

    window.AudioPlayer = AudioPlayer;

})();
