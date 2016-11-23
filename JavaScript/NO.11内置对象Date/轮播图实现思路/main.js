/**
 * Created by liuyujing on 2016/11/14.
 */
(function () {

    var index = 0;//显示当前元素的下标
    var images = getViews(["images/1.jpg","images/2.jpg","images/3.jpg"]);//获得图片元素的数组
    var curImage = images[index];//当前显示的图片视图

    /*
    *
    * 创建  图片视图的 数组
    * paths: 图片路径数组
    * */
    function getViews(paths) {
        //放图片元素的数组
        var eles = [];
        paths.forEach(function (path) {
            var view = document.createElement("a");
            view.className = "carousel-item";
            view.innerHTML = "<img src="+path+">";
            eles.push(view);
        });

        return eles;
    }


    function pre() {
        --index;
        if (index<=0){
            index = images.length-1;
        }
        var node = document.querySelector(".carousel-container");
        node.removeChild(curImage);
        curImage = images[index];
        node.appendChild(curImage);
    }

    function next() {
        ++index;

        if (index>=images.length){
            index = 0;
        }

        var node = document.querySelector(".carousel-container");
        node.removeChild(curImage);
        curImage = images[index];
        node.appendChild(curImage);
    }

    function init() {
        var node = document.querySelector(".carousel-container");
        node.appendChild(curImage);

        document.querySelector(".preButton").onclick = pre;
        document.querySelector(".nextButton").onclick = next;

    }

    init();

})();





