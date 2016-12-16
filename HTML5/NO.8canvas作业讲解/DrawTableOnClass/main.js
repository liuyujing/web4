/**
 * Created by liuyujing on 2016/12/16.
 */
(function () {

    function init() {

        var canvas = document.querySelector("canvas");

        new DrawTable(canvas,{row:10,heights:[100,30,20,500,300,400,50,100,30,20,500,300,400,50]});

    }

    init();

})();
