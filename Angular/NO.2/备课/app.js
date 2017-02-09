/**
 * Created by liuyujing on 2017/2/7.
 */
(function () {

    var app = angular.module("app",[]);
    app.controller("homeController",function ($scope,$http) {

        $http.get("package.json").then(function (data) {
            console.log(data);
        });

    });
    
})();