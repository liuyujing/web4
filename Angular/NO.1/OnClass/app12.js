/**
 * Created by liuyujing on 2017/2/7.
 */
(function () {

    var app = angular.module("app",[]);

    //directive 可以扩展html的标签
    //参数 1.模板的名字 2.第二个参数 模板中的内容
    app.directive("web4",function () {
        return {
            template:"<div><h3>goole</h3><img src='https://www.google.co.jp/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt=''></div>"
        }
    });

    app.directive("hi",function () {
        return {
            templateUrl:"view.html"
        }
    });

})();
