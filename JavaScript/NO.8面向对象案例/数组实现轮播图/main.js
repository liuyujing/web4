/**
 * Created by liuyujing on 16/10/10.
 */
(function () {

    //图片视图的数组
    var list;
    //获取显示哪一个视图的下标
    var index = 0;
    //定时器
    var timer;

    // 封装轮播视图的方法
    /*
    * imageView 封装 轮播视图中 单个视图的方法
    * imagePath 图片资源的路径
    * toUrl 跳转到另一个页面的 链接地址
    * */
    function imageView(imagePath,toUrl) {
        //创建一个背景图（a）  承载图片
        var backgroundImageView = document.createElement("a");
        backgroundImageView.href = toUrl;
        var image = document.createElement("img");
        image.src = imagePath;
        backgroundImageView.appendChild(image);

        backgroundImageView.className = "imageView";

        return backgroundImageView;
    }

    //装载 所有轮播视图的数组
    function imageViewList() {
        //图片资源的数组(数据)
        var datas = [{imagePath:"images/1.jpg",toUrl:"https://www.baidu.com"},{imagePath:"images/2.jpg",toUrl:"https://www.baidu.com"},{imagePath:"images/3.jpg",toUrl:"https://www.baidu.com"}];

        if (!list){
            //如果数组不存在 初始化数组
            list = [];
            for (var i=0;i<datas.length;i++){
                //创建图片视图 包含数据的 元素
                var item = imageView(datas[i].imagePath,datas[i].toUrl);
                //添加到 盛放图片视图的数组中
                list.push(item);
            }
        }

        return list;
    }

    //默认显示的界面
    function showImageView() {

        //获取数组中的某一个视图元素
        var item = imageViewList()[index];

        //content 轮播图的容器
        var content = document.getElementById("carouselContent");

        //把视图元素 放到容器中
        content.appendChild(item);

    //    给下一页 上一页 按钮 添加 响应事件
        document.querySelector("#carousel .nextButton").onclick = function () {
            next();
        };
        document.querySelector("#carousel .preButton").onclick = function () {
            pre();
        };
    }

    //下一页
    function next() {
        //点击下一页  让图片数组的下标自加  -> 可以查找到下一个元素
        index++;
        //如果 下标和图片数组的元素 个数相同  就表示  没有下一个元素
        if (index===imageViewList().length){
            //让下标 回到 第一个元素
            index = 0;
        }
        //移除 添加到 图片视图内容上的  元素
        var preItem = document.getElementsByClassName("imageView")[0];
        var content = document.getElementById("carouselContent");
        content.removeChild(preItem);
        //把 新的视图 放到 容器里面
        content.appendChild(imageViewList()[index]);
    }

    // 上一页
    function pre() {
        index--;
        if (index===-1){
            index = imageViewList().length-1;
        }
        var preItem = document.getElementsByClassName("imageView")[0];
        var content = document.getElementById("carouselContent");
        content.removeChild(preItem);
        content.appendChild(imageViewList()[index]);
    }

    // 开启定时器
    function startTimer() {
        //如果有定时器  清除定时器
        if (timer){
            clearInterval(timer);
        }
        //开启定时器
        timer = setInterval(next,3000);
    }

    // 初始化 整个视图的方法
    function init() {
        showImageView();
        startTimer();
    }

    init();
})();
