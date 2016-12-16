/**
 * Created by liuyujing on 2016/12/16.
 */
(function () {

    function init() {
        var waitingView = new WatingView(2,document.body);
        waitingView.startWating(waitingView.context);


        setTimeout(function () {
            waitingView.stopWating();
        },50000);
    }


    init();
})();
