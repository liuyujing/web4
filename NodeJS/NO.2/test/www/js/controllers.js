
var HOST = "http://localhost:3000";
var RIGISTER = "/users/register";
var SEARCH_ALL_USER = "/users/getAllUsers";
var SEARCH_USER = "/users/searchUserForName";
var DELETE_USER = "/users/deleteUser";

angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope, $http) {

    $scope.user = {
      name:"",
      password:"",
      password1:""
    };

    $scope.register = function () {

      $http({
        url:HOST+RIGISTER,
        method:"POST",
        data:$scope.user,
        headers:{
          "Content-Type":"application/x-www-form-urlencoded"
        },
        transformRequest:function (obj) {

          //name=xiaoming&password=123456
          var valueList = [];

          for (key in obj){

            var keyString = encodeURIComponent(key);
            var valueString = encodeURIComponent(obj[key]);
            var resultString = keyString+"="+valueString;

            valueList.push(resultString);
          }

          return valueList.join("&");
        }

      }).then(function (result) {
          console.log(result);
        alert(result.data.message);
      });

    };

  })

  .controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope,$http) {

    $scope.searchMessage = {
      name:""
    };

    $http.get(HOST+SEARCH_ALL_USER).then(function (result) {
      console.log(result);
      $scope.users = result.data.data;
    });


    $scope.searchUser = function () {

      console.log($scope.searchMessage.name);
      $http.get(HOST+SEARCH_USER+"?name="+$scope.searchMessage.name+"").then(function (result) {
        console.log(result);
        $scope.users = result.data.data;
      });

    };

    $scope.deleteUser = function (user) {

        $http.get(HOST+DELETE_USER+"?name="+user.username+"").then(function (result) {
          console.log(result);
          if(result.data.code==200){
            var index = $scope.users.indexOf(user);
            $scope.users.splice(index,1);
          }

        });
    }

  });



