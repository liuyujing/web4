/**
 * Created by liuyujing on 2017/2/8.
 */
(function () {

    var app = angular.module("app",[]);
    app.controller("homeController",function ($scope) {

        $scope.name = "小明";

        setTimeout(function () {
            // $scope.name = "小红";

            //$apply 用于传输 model中的内容 可以让数据与界面 同步
            $scope.$apply(function () {
                $scope.name = "小红";
            })

        },3000);

        //$watch 用于观察数据模型  只要发生改变 就可以 立即监听到
        $scope.$watch("name",function (newValue,oldValue) {
            console.log(oldValue,newValue);
        });


        // $timeout(function () {
        //     $scope.name = "小红";
        // },3000);

    });

})();