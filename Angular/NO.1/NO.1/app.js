/**
 * Created by liuyujing on 2017/2/1.
 */
(function () {

    var module = angular.module("app",[]);
    module.controller("homeController",function ($scope) {
        $scope.deleteMessageLast = function (message) {
            if ($scope.message.length>0) {
                $scope.message = message.substring(0, message.length - 1);
            }
            console.log($scope.message);
        };
        
        $scope.start = function (target) {
            this.show = !this.show;
            target.textContent = target.textContent=="显示"?"隐藏":"显示";
        }
    });

/*
    module.directive("ucai",function () {
        return {
            template:"<p>{{3333}}</p>"
        }
    });*/


    module.config(['$routeProvider',function ($routeProvider) {
        $routeProvider.when("/home",{
            templateUrl:"home.html"
        }).when("/find",{
            templateUrl:"find.html"
        }).when("/setting",{
            templateUrl:"setting.html"
        }).otherwise({
            redirectTo:"/home"
        })
    }])

})();