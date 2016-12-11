/**
 * Created by liuyujing on 2016/12/10.
 */
(function () {

    function AudioListView(audioPlayer,superView) {
        this.audios = [];
        this.curAudioIndex = 0;
        this.audioPlayer = audioPlayer;
        this.superView = superView;
        this.dropAction();
    }

    AudioListView.prototype.createListView = function () {
        if (this.audioListView){
            this.superView.removeChild(this.audioListView);
        }

        this.audioListView = document.createElement("ul");

        this.superView.appendChild(this.audioListView);

        for (var i=0;i<this.audios.length;i++){
            this.audioListView.appendChild(this.audios[i].audioFileView);
        }
    };

    AudioListView.prototype.getNodeIndex = function (node) {
        var parent = this.audioListView;
        var childs = parent.getElementsByTagName("li");
        for (var i=0;i<childs.length;i++){
            console.log(childs[i]);
            if (node===childs[i]){
                return i;
            }
        }
        return -1;
    };

    AudioListView.prototype.selectFileAction = function (file,item) {
        var self = this;
        return function () {

            var reader = new FileReader();
            reader.onload = function () {
                self.audioPlayer.src = reader.result;
                self.curAudioIndex = self.getNodeIndex(item.audioFileView);
            };

            reader.readAsDataURL(file);

        }
    };

    AudioListView.prototype.dropHandle = function (files) {

        for (var i=0;i<files.length;i++){
            var file = files[i];
            var audioFileView = new AudioFileView(file);
            audioFileView.click(this.selectFileAction(file,audioFileView));
            this.audios.push(audioFileView);
        }

        this.createListView();
    };

    AudioListView.prototype.dropAction = function () {
        var self = this;

        document.ondragover = function (event) {
            event.preventDefault();
        };

        document.ondrop = function (event) {
            event.preventDefault();
            self.dropHandle(event.dataTransfer.files);
        };
    };

    window.AudioListView = AudioListView;
})();
