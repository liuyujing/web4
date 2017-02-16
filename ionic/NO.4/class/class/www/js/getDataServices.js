/**
 * Created by liuyujing on 2017/2/13.
 */

angular.module("app.getDataServices",[])
  .service("getHomeList",function ($http) {

    $http.post("http://localhost:3000/users/regsiter").then(function (respone) {
      console.log(respone);
    });

    this.homeList = [{headerIcon:'http://img3.duitang.com/uploads/item/201408/25/20140825082917_LaGy4.thumb.224_0.jpeg',name:'小明',time:'2分钟前',des:'一些动态的内容！这是不错的',id:3560},{headerIcon:'http://www.qqtouxiang.com/d/file/qinglv/20170211/cb0fcf0ac3e60e1420295c8917bd3eac.jpg',name:'小李',time:'30分钟前',des:'30分钟前30分钟前30分钟前30分钟前30分钟前',id:3559},{headerIcon:'http://img2.imgtn.bdimg.com/it/u=1886788019,3761437645&fm=21&gp=0.jpg',name:'小张',time:'30分钟前',des:'30分钟前30分钟前30分钟前30分钟前',id:3558},{headerIcon:'http://img2.imgtn.bdimg.com/it/u=1886788019,3761437645&fm=21&gp=0.jpg',name:'小红',time:'30分钟前',des:'3333一些动态的内容！这是不错的',id:35556},{headerIcon:'http://img2.imgtn.bdimg.com/it/u=1886788019,3761437645&fm=21&gp=0.jpg',name:'小谎',time:'30分钟前',des:'111一些动态的内容！这是不错的',id:3555}];

  });
