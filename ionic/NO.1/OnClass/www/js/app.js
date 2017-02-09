

var app = angular.module("app",["ionic"]);

app.controller("controller",function ($scope,$http) {

  $http.get("img/package.json").then(function (response) {

    if (response.status == 200){
      $scope.settingList = response.data.data;
      console.log(response.data.data);
    }

  });

});

app.controller("settingController",function ($scope,$http) {

  $http.get("img/group.json").then(function (response) {
    if (response.status == 200){
      console.log(response);
      $scope.settingList = response.data;
    }
  });

});
