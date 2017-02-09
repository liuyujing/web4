/**
 * Created by liuyujing on 2017/2/8.
 */
(function () {
    var app = angular.module("app",[]);
    app.service("arr",function () {
        this.search = function (s,list) {
            var result = "未查找到";
            list.forEach(function (item) {

            if (item == s){
                result = item;
            }
            });
            return result;
        }
    });
    app.controller("cc",function ($scope,arr,$rootScope) {
        $scope.result = arr.search("vvv",["rrr","vvv","yyy"]);
        // console.log(arr.search("vvv",["rrr","vvv","yyy"]));
        console.log($rootScope.ttt);
    });
    app.controller("cc2",function ($scope,$rootScope) {
        $rootScope.ttt = "111";
    });
})();