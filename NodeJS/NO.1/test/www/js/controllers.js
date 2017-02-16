angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope, $http) {

    $scope.user = {
      userName: "",
      age: 0,
      phone: 0,
      sex: 0
    };

    console.log($scope.user);

    $scope.register = function () {

      $http({
        method: "POST",
        url: "http://localhost:3000/users/register",
        data: $scope.user,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        transformRequest: function (obj) {
          var str = [];
          for (var p in obj) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          }
          return str.join("&");
        }
      }).then(function (result) {
        console.log(result);
        if (result.data.result.code == 200){
          alert(result.data.result.message);

        }else {
          alert(result.data.result.message);
        }
      });

    }

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

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
