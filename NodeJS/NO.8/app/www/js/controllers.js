angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$cordovaImagePicker,$cordovaCamera,$cordovaCapture) {






  // $scope.image_list = [];
  // $scope.pictureLibrary=function(){
  //    var options = {
  //      maximumImagesCount: 10,
  //      width: 800,
  //      height: 800,
  //      quality: 80
  //    };
  //    $cordovaImagePicker.getPictures(options)
  //      .then(function (results) {
  //        $scope.image_list = results;
  //      }, function(error) {
  //        // error getting photos
  //        alert("error"+error);
  //      });
  //
  //
  //   console.log("111111");
  //
  //
  //
  // };
  //
  // $scope.filePicture = function(){
  //   var options = {
  //     maximumImagesCount: 10,
  //     width: 800,
  //     height: 800,
  //     quality: 80
  //   };
  //   $cordovaImagePicker.getPictures(options)
  //     .then(function (results) {
  //       $scope.filePath = results[0];
  //       $scope.logtext = $scope.logtext + $scope.filePath+"选择图片\n";
  //     }, function(error) {
  //       // error getting photos
  //     });
  // }
  // $scope.uploadFile = function(){
  //   var server  = prompt("输入你的服务器地址","");
  //   if(server){
  //     $cordovaFileTransfer.upload(server, $scope.filePath, {})
  //       .then(function(result) {
  //         // Success!
  //         $scope.logtext = $scope.logtext +"上传成功\n";
  //       }, function(err) {
  //         // Error
  //       }, function (progress) {
  //         // constant progress updates
  //         $scope.uploadProgress =parseInt((progress.loaded / progress.total) * 100);
  //       });
  //
  //   }
  // }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope,$cordovaImagePicker,$cordovaSms) {
  $scope.openPhothLibary = function () {

    alert("open");
    var options = {
      maximumImagesCount: 10,
      width: 200,
      quality: 80
    };

    $cordovaImagePicker.getPictures(options)
      .then(function (results) {
        for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
          $scope.imageList = results;
        }
      }, function(error) {
        // error getting photos
      });
  }

  $scope.send = function () {
    $cordovaSms
      .send('13370116152', 'hello', options)
      .then(function() {
        console.log("successs");
        // Success! SMS was sent
      }, function(error) {
        console.log("error");
        // An error occurred
      });
  }
});
