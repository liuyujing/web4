/**
 * Created by liuyujing on 2016/12/8.
 */
(function () {

    function init() {
        var readLRC = new ReadLRCFile();
        readLRC.loadFile("董小姐",function (obj) {
           console.log(obj);
        });
    }
    
    init();
})();