/**
 * Created by liuyujing on 2017/2/8.
 */
(function () {

    var app = angular.module("app",[]);
    app.controller("homeController",function ($scope,$rootScope) {
        // $scope.list = ["mmm","vvv","fsdf","twds","opjsd"];
        $rootScope.list = ["mmm","vvv","fsdf","twds","opjsd"];
    });

    app.controller("findController",function ($scope,$timeout,$interval,$rootScope) {

        $scope.list = $rootScope.list;

        $scope.name = "";
        $timeout(function () {
            $scope.name = "XXXX";
        },3000);

        $interval(function () {
            var time = new Date();
            $scope.time = time.toTimeString();
        },1000);

    });


    app.service("num",function () {
        function sum(a,b) {
            return a+b;
        }

        function mmm(a,b) {
            return a-b;
        }

        this.sum = sum;
        this.mmm = mmm;
    });

    app.controller("settingController",function ($scope,num) {
      console.log(num.sum(200,30));
    });
    
})();