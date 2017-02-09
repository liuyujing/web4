/**
 * Created by liuyujing on 2017/2/7.
 */
(function () {

    var app = angular.module("app",[]);

//    1.在模块中 定义控制器
//    参数 1.控制器的名字 2.回调函数 控制器中执行的方法
    app.controller("homeController",function ($scope) {

    //    每一个控制器 都有 一个 独立的 $scope 作用域
        $scope.name = "小明";

        $scope.waring = function () {
            alert("注意！");
        };


        $scope.loadData = function () {
            var request = new XMLHttpRequest();
            request.open("GET","package.json");
            request.onload = function () {

                var responseObj = JSON.parse(request.response);
                $scope.list = responseObj.data;

                console.log(responseObj.data);
            };
            request.send();
        };

    });


    // window.controller("",function () {
    //
    // });
    // function controller(a,callback) {
    //     callback();
    // }
})();
