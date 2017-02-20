/**
 * Created by liuyujing on 2017/2/13.
 */


angular.module("app.controller",[])
  .controller("homeController",function ($scope,getHomeList) {
      $scope.list = getHomeList.homeList;
  })
  .controller("homeDetaileController",function ($scope,getHomeList) {

    var urlList = location.href.split("/");
    var id = urlList[urlList.length-1];

    getHomeList.homeList.forEach(function (item) {
      console.log(item);

      if (item.id == id){
          $scope.info = item;
          return;
      }

    })

  })
  .controller("circleController",function ($scope) {

  })
  .controller("messageController",function ($scope) {

  })
  .controller("userController",function ($scope) {

  })
  .controller("userPostsController",function ($scope,$ionicNavBarDelegate) {

    $scope.back = function () {
      $ionicNavBarDelegate.back();
      // window.history.back();
    }

  })
  .controller("registerController",function ($scope,register) {

    $scope.user = {
      userInput:"",
      passwordInput:"",
      passwordInputAgain:"",
      birthdayInput:"",
      sex:false,
      phoneInput:""
    };

    //注册按钮 触发的方法
    $scope.toRegister = function () {
      var user = {
        username:$scope.user.userInput,
        password:$scope.user.passwordInputAgain,
        sex:$scope.user.sex,
        phone:$scope.user.phoneInput,
        birthday:$scope.user.birthdayInput
      };
      //调用 register 服务中  注册的方法
      register.gotoRegister(user);
    };

  });
