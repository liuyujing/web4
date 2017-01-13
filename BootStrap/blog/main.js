/**
 * Created by liuyujing on 2017/1/13.
 */


(function () {


    function init() {

        loadData(function (result) {

            new Page(result.data);

        });

    }


    function loadData(callback) {

        var request = new XMLHttpRequest();
        request.open("GET","pageList.json");
        request.onload = function () {

            var obj = JSON.parse(request.response);
            console.log(obj);

            callback(obj);
        };
        request.send();

    }

    init();
})();
