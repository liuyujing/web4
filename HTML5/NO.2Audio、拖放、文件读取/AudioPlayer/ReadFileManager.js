/**
 * Created by liuyujing on 2016/12/5.
 */
window.audioPlayer = window.audioPlayer||{};

(function () {

    function ReadFile() {
        this.filesView = document.getElementById("musicListContainer");
        this.audioPlayer = document.getElementById("audioPlayer");
        this.audios = [];
        this.addListeners();
    }

    ReadFile.prototype.selectFile = function (file) {
        var self = this;
        return function () {
            var reader = new FileReader();
            reader.onload = function () {
                self.audioPlayer.src = this.result;
            };
            reader.readAsDataURL(file);
        }
    };

    ReadFile.prototype.handleDropFiles = function (files) {
        for (var i=0;i<files.length;i++){
            var file = files[i];
            console.log(file);
            if (file.type == "audio/mp3"){
                var audio = new audioPlayer.Audio(files[i]);
                audio.addListeners(this.selectFile(files[i]));
                this.audios.push(audio);
                this.createFileList();
            }
        }
    };

    ReadFile.prototype.createFileList = function () {
        if (this.fileListView){
            this.filesView.removeChild(this.fileListView);
        }
        this.fileListView = document.createElement("ul");
        this.fileListView.id = "fileListView";
        for (var i=0;i<this.audios.length;i++){
            this.fileListView.appendChild(this.audios[i].audioView);
        }
        this.filesView.appendChild(this.fileListView);
    };

    ReadFile.prototype.addListeners = function () {

        var self = this;
        document.ondragover = function (event) {
            event.preventDefault();
        };

        document.ondrop = function (event) {
            event.preventDefault();
            self.handleDropFiles(event.dataTransfer.files);
        }

    };

    audioPlayer.ReadFile = ReadFile;

})();
