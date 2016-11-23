/**
 * Created by liuyujing on 16/10/14.
 */
(function () {

    var datas = [{imagePath:"images/1.jpg",toUrl:"https://www.baidu.com"},{imagePath:"images/2.jpg",toUrl:"https://www.baidu.com"},{imagePath:"images/3.jpg",toUrl:"https://www.baidu.com"}];

    var view1 = document.getElementById("view1");
    var carouselView = new corouselView.Init(view1,datas);
    carouselView.putSuperView();
    carouselView.startTimer(3000);

    var view2 = document.getElementById("view2");
    var carouselView2 = new corouselView.Init(view2,datas);
    carouselView2.putSuperView();
    carouselView2.startTimer(5000);

})();
