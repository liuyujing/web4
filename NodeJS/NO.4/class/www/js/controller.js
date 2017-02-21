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
  .controller("registerController",function ($scope,$ionicActionSheet,register,$http,$cordovaCamera,$cordovaImagePicker) {

    $scope.user = {
      userInput:"",
      passwordInput:"",
      passwordInputAgain:"",
      birthdayInput:"",
      sex:false,
      phoneInput:""
    };


    $scope.uploadImage = function () {

        var srcType = Camera.PictureSourceType.CAMERA;
        var options = setOptions(srcType);

        navigator.camera.getPicture(function cameraSuccess(imageUri) {

          displayImage(imageUri);

        }, function cameraError(error) {
          console.debug("Unable to obtain picture: " + error, "app");

        }, options);





      // var options = {
      //   maximumImagesCount: 10,
      //   width: 800,
      //   height: 800,
      //   quality: 80
      // };
      //
      // $scope.image_list = [];
      // $cordovaImagePicker.getPictures(options)
      //   .then(function (results) {
      //     $scope.image_list = results;
      //   }, function(error) {
      //     // error getting photos
      //     alert("error"+error);
      //   });

      // var hideSheet = $ionicActionSheet.show({
        //   buttons: [{
        //     text: '相册'
        //   }, {
        //     text: '拍照'
        //   }
        //   ],
        //   titleText: '选择图片',
        //   cancelText: '取消',
        //   cancel: function() {
        //     // add cancel code..
        //
        //     $http.get(HOST+"/pages/goods").then(function (result) {
        //
        //       console.log(result);
        //     });
        //
        //   },
        //   buttonClicked: function(index) {
        //     $cordovaCamera.camera.getPicture(cameraSuccess, cameraError, {
        //       sourceType: index
        //     }); //调用系统相册、拍照
        //   }
        // });

    };

    function cameraSuccess(img) {
      $scope.img = img;//这里返回的img是选择的图片的地址，可以直接赋给img标签的src，就能显示了
      window.resolveLocalFileSystemURL(img, function success(fileEntry) {
        upload(fileEntry.toInternalURL());//将获取的文件地址转换成file transfer插件需要的绝对地址
      }, function() {
        alert("上传失败");
      });
    }

    function cameraError(img) {
      alert("上传失败");
    }

    function upload(fileURL) {//上传图片
      var win = function(r) {//成功回调方法
        var response = JSON.parse(r.response);//你的上传接口返回的数据
        if(response.datas.state){
          alert("修改成功");
        }else {
          alert(response.datas.error);
        }
      }
      var fail = function(error) {//失败回调方法
        alert("上传失败");
      }

      var options = new FileUploadOptions();
      options.fileKey = "pic";//这是你的上传接口的文件标识，服务器通过这个标识获取文件
      options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
      options.mimeType = "image/gif";//图片

      var ft = new FileTransfer();
      ft.upload(fileURL, encodeURI('uploadurl'), win, fail, options);//开始上传，uoloadurl是你的上传接口地址
    }

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
