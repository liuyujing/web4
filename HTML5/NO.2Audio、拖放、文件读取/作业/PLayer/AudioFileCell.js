/**
 * Created by liuyujing on 2016/12/11.
 */

window.audioPlayer = window.audioPlayer || {};

(function () {

    /*
    * AudioFileCell 创建音频文件 界面
    * file 音频文件
    * */
    function AudioFileCell(file) {
        this.file = file;
        this.audioCell = document.createElement("li");
        this.audioCell.textContent = file.name;

    }

    //给AudioFileCell 对象 添加单击事件
    AudioFileCell.prototype.click = function (clickEvent) {
        this.audioCell.onclick = clickEvent;
    };

    audioPlayer.AudioFileCell = AudioFileCell;

})();
