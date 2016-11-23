/**
 * Created by liuyujing on 2016/11/16.
 */
(function () {

    onload = function () {
        var paths = ["images/0.jpg","images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg"];

        var carouselView = new _.CarouselView(paths,document.body);
        carouselView.showFirstPage(2);

    }

})();




