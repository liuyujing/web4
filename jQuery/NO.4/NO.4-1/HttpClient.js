/**
 * Created by liuyujing on 2016/11/25.
 */
(function () {

    function HttpClient() {
        var def = $.Deferred;

        this.post = function (url) {
            $.post("http://localhost:3000/register").done(function (data) {
                def.resolve(data);
            });
        }

    }

})();
