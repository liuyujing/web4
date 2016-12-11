/**
 * Created by liuyujing on 2016/12/5.
 */
window.audioPlayer = window.audioPlayer||{};

(function () {

    function Audio(_file) {
        this.file = _file;
        this.audioView = document.createElement("li");
        this.audioView.innerHTML = this.file.name;
        this.addListeners();
    }

    Audio.prototype.addListeners = function (event) {
        this.audioView.onclick = event;
    };


    audioPlayer.Audio = Audio;
})();
