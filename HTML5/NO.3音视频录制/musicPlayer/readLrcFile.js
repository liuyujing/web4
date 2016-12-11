/**
 * Created by liuyujing on 2016/12/8.
 */

(function () {

    function ReadLRCFile() {
        this.lrc = {};
    }

    ReadLRCFile.prototype.loadFile = function (lrcFileName,callback) {
        var self = this;
        $.get(""+lrcFileName+".lrc").done(function (data) {
            var result = self.pareLrc(data);
            callback(result);
        });
    };

    ReadLRCFile.prototype.pareLrc = function (data) {
        var lrc = {};

        var regExp = /\[(\d{2}):(\d{2})\.(\d{2})\](.*)/g;

        console.log(regExp.exec(data));
        while (1){
            var result = regExp.exec(data);

            if (result){
                lrc[parseInt(result[1]) * 60 + parseInt(result[2])]=result[4];
            }else {
                break;
            }
        }

        return lrc;
    };

    window.ReadLRCFile = ReadLRCFile;
})();