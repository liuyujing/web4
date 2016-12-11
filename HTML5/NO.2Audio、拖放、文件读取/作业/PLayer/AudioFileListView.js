/**
 * Created by liuyujing on 2016/12/11.
 */

window.audioPlayer = window.audioPlayer || {};

(function () {

    /*
    * 创建 文件拖动过来 生成播放列表
    * audioEle audio标签
    * superView 音频播放列表 存放到的父元素
    * */
    function AudioFileListView(audioEle,superView) {
        this.audioEle = audioEle;
        this.superView = superView;

        //用来盛放 所有音频文件界面（audioFileCell）的 数组
        this.audios = [];

        //当前播放音频的下标
        this.audioIndex = 0;

        this.dropFilesListener();
    }

    //创建 播放列表 界面的方法
    AudioFileListView.prototype.createListView = function () {

        if (this.audioListView){
            this.superView.removeChild(this.audioListView);
        }

        this.audioListView = document.createElement("ul");

        this.superView.appendChild(this.audioListView);

        for (var i=0;i<this.audios.length;i++){

            this.audioListView.appendChild(this.audios[i].audioCell);

        }

    };

    //点击audioCell播放音频
    AudioFileListView.prototype.selectAction = function (file) {

        var self = this;

        return function () {

            //获得点击音频下标
            var cells = self.audioListView.getElementsByTagName("li");
            for (var i=0;i<cells.length;i++){
                if (cells[i].textContent == file.name){
                    self.audioIndex = i;
                }
            }

            console.log(self.audioIndex);

            document.querySelector(".audioName").textContent = file.name;
            /*
            * FileReader 文件读取的类
            *
            * readAsDataURL 读取成URL
            * result 读取完之后的结果 URL
            *
            * 读取文件的时候 有可能比较耗时
            * 检测 什么时候 读取完成 onload
            * */

            //文件读取
            var reader = new FileReader();

            reader.onload = function () {

                if (file.type == "audio/mp3"){
                    self.audioEle.src = reader.result;
                }
            };

            reader.readAsDataURL(file);
        }
    };

    //拖拽完成之后  操作的方法
    AudioFileListView.prototype.dropHandle = function (files) {

        var self = this;

        for (var i=0;i<files.length;i++){

            var file =  files[i];
            var audioCell = new audioPlayer.AudioFileCell(file);
            audioCell.click(self.selectAction(file));

            this.audios.push(audioCell);

        }

        this.createListView();

    };

    //放置文件的监听者
    AudioFileListView.prototype.dropFilesListener = function () {

        var self = this;
        document.ondragover = function (event) {
            event.preventDefault();
        };

        document.ondrop = function (event) {
            event.preventDefault();

            self.dropHandle(event.dataTransfer.files);

        }

    };

    audioPlayer.AudioFileListView = AudioFileListView;

})();
