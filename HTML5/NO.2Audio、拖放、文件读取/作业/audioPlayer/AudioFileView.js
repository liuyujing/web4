/**
 * Created by liuyujing on 2016/12/10.
 */
(function () {

    function AudioFileView(file) {
        this.file = file;
        var audioFileView = document.createElement("li");
        audioFileView.textContent = file.name;

        this.audioFileView = audioFileView;
    }

    AudioFileView.prototype.click = function (listener) {
        this.audioFileView.onclick = listener;
    };

    AudioFileView.prototype.dblclick = function (listener) {
        this.audioFileView.ondblclick = listener;
    };


    window.AudioFileView = AudioFileView;
})();
