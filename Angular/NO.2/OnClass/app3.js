/**
 * Created by liuyujing on 2017/2/8.
 */
(function () {

    var app = angular.module("app",[]);
    app.controller("homeController",function ($scope,$http) {

        $http.get("package.json").then(function (response) {
            $scope.list = response.data.data;
        });

    });
    
})();