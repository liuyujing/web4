/**
 * Created by liuyujing on 2017/2/8.
 */
(function () {

    var app = angular.module("app",[]);

    //在控制器中 注入$scope,$http服务
    app.controller("homeController",function ($scope,$http) {

        var promise = $http.get("package.json");
        promise.then(function (data) {
            console.log(data);
            $scope.list = data.data.data;
        });

    });



})();