/**
 * Created by liuyujing on 2016/11/27.
 */
(function () {

    function HTTPClient() {

        var header = {"apikey":"800df6eb77392d2205b55cfccbcc1662"};

        this.get = function (url,callback) {
            $.get({url:url,headers:header}).done(function (data,error) {
                if (callback){
                    callback(data,error);
                }
            });
        }
    }

    window.HTTPClient = HTTPClient;
})();
