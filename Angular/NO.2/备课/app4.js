/**
 * Created by liuyujing on 2017/2/8.
 */
(function () {

    var app = angular.module("app",["ngRoute"]);
    app.config(function ($routeProvider,$locationProvider) {
        $locationProvider.hashPrefix("");
        $routeProvider.when("/home",{
            template:"home"
        });
        $routeProvider.when("/find",{
            template:"find"
        });
        $routeProvider.otherwise({redirectTo:"/home"});
    });

})();