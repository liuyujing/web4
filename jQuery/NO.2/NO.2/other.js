/**
 * Created by liuyujing on 2016/11/23.
 */
(function () {
    for(var i=0;i<1000000000;i++){
        if (i%10000==0){
            postMessage(Math.round(i/10000000)+"%");
        }

    }
    postMessage("done");
})();
