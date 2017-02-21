/**
 * Created by liuyujing on 2017/2/13.
 */

var HOST = "http://localhost:3006";
var REGISTER = "/users/register";
var LOGIN = "/users/login";
var ALL_COOKPAGE = "/cookPage/getCook";
var TACK_GOOD = "/cookPage/good";

angular.module("app.getDataServices",[])
  .service("getHomeList",function ($http) {

    // $http.post("http://localhost:3000/users/regsiter").then(function (respone) {
    //   console.log(respone);
    // });

    this.homeList = [{headerIcon:'http://img3.duitang.com/uploads/item/201408/25/20140825082917_LaGy4.thumb.224_0.jpeg',name:'小明',time:'2分钟前',des:'一些动态的内容！这是不错的',id:3560},{headerIcon:'http://www.qqtouxiang.com/d/file/qinglv/20170211/cb0fcf0ac3e60e1420295c8917bd3eac.jpg',name:'小李',time:'30分钟前',des:'30分钟前30分钟前30分钟前30分钟前30分钟前',id:3559},{headerIcon:'http://img2.imgtn.bdimg.com/it/u=1886788019,3761437645&fm=21&gp=0.jpg',name:'小张',time:'30分钟前',des:'30分钟前30分钟前30分钟前30分钟前',id:3558},{headerIcon:'http://img2.imgtn.bdimg.com/it/u=1886788019,3761437645&fm=21&gp=0.jpg',name:'小红',time:'30分钟前',des:'3333一些动态的内容！这是不错的',id:35556},{headerIcon:'http://img2.imgtn.bdimg.com/it/u=1886788019,3761437645&fm=21&gp=0.jpg',name:'小谎',time:'30分钟前',des:'111一些动态的内容！这是不错的',id:3555}];

  })

  .service("register",function ($http) {

    this.gotoRegister = function (user) {


      $http({
        method:"POST",
        url:HOST+REGISTER,
        data:user,
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
      });
    }

  })

  .service("login",function ($http) {

    this.gotoLogin = function (loginInfo,callback) {
      $http({
        url:HOST+LOGIN,
        method:"POST",
        data:loginInfo,
        headers:{
          "Content-Type":"application/x-www-form-urlencoded"
        },
        transformRequest:function (obj) {

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
        callback(result);
      });
    }
  })

  .service("cookPage",function ($http) {
    this.searchAllCookPage = function (callback) {

      $http.get(HOST+ALL_COOKPAGE).then(function (result) {
        callback(result);
      });

    };

    this.takeGood = function (pageID,userID,callback) {
      $http.get(HOST+TACK_GOOD+"?pageID="+pageID+"&userID=1000&isGood=true").then(function (result) {
        callback(result);
      });
    };
  });
