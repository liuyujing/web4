/**
 * Created by liuyujing on 2016/12/16.
 */
(function () {

    function init() {

        var canvas = document.querySelector("canvas");
        new DrawTable(canvas,{row:10,data:[190,190,44,190,276,44,190,440,300,463,22,180]});
    }

    init();

})();
