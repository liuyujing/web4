/**
 * Created by liuyujing on 2016/11/16.
 */

window._ = window._||{};

(function () {

    /*
    * 定义轮播图的类
    * _imagePaths 图片路径的数组
    * _superEle 把轮播图放到哪一个父元素上面
    * */
    function CarouselView(_imagePaths,_superEle) {
        this.imagePaths = _imagePaths;
        this.superEle = _superEle;

    //    指示视图的背景元素
        this.pointerBackgroundView = null;

    //    定时器对象
        this.timer = null;

    //    盛放所有图片元素的数组
        this.imageElements = [];
    //    找到显示哪一个 图片元素的 下标 -> 用来控制 显示数组中哪一个图片的
        this.imageIndex = 0;
    //    当前显示的图片元素
        this.curImage = null;

    //    轮播图的背景元素
        this.backgroundElement = document.createElement("div");
        this.backgroundElement.className = "carouselView-backgroundElement";

    //    记录上一次选中的 指示视图
        this.curPointerView = null;
    //    盛放所有指示视图的 数组
        this.pointerViews = [];
    }

    //创建 图片元素的函数
    CarouselView.prototype.imageElement = function (imagePath) {
        var bgView = document.createElement("a");
        bgView.innerHTML = "<img src="+imagePath+">";
        bgView.className = "carouselView-imageElement";

        // 给图片元素 添加 移入移出事件
        this.addMouseLinister(bgView);

        return bgView;
    };

    //盛放图片元素的数组
    CarouselView.prototype.getImageElements = function () {
        if (this.imagePaths instanceof  Array){

            var self = this;
            this.imagePaths.forEach(function (path) {
                //创建单个图片元素
                var image = self.imageElement(path);
                //把创建好的 图片元素 放到 数组中
                self.imageElements.push(image);
            });
        }
    };

    /*
    * showFirstPage 显示第一个页面的函数
    * defaultPageIndex 默认显示页面的下标
    * */
    CarouselView.prototype.showFirstPage = function (defaultPageIndex) {
        this.getImageElements();
        //更新当前显示页面的下标
        // this.imageIndex = defaultPageIndex>=this.imageElements.length?0:defaultPageIndex||0;
        this.imageIndex = defaultPageIndex||0;
        //更新当前显示的页面
        //this.imageElements 盛放图片元素的数组
        this.curImage = this.imageElements[this.imageIndex];
        this.backgroundElement.appendChild(this.curImage);

        //把轮播图放到指定的 父元素中
        this.superEle.appendChild(this.backgroundElement);

        //添加控制按钮
        this.addControlButton();

        // 开启定时器  自动轮播
        this.startTimer();

        //显示底部的 指示视图
        this.addPointerView();

        //实现 默认选择的 轮播图指示视图
        this.curPointerView = this.pointerViews[this.imageIndex];
        this.curPointerView.className = "carouselView-pointer carouselView-pointer-selected";
    };

    //添加  控制按钮
    CarouselView.prototype.addControlButton = function () {
        var preButton = document.createElement("p");
        var nextButton = document.createElement("p");
        preButton.textContent = "<";
        nextButton.textContent = ">";

        preButton.className = "carouselView-controlButton carouselView-preButton";
        nextButton.className = "carouselView-controlButton carouselView-nextButton";

        this.backgroundElement.appendChild(preButton);
        this.backgroundElement.appendChild(nextButton);

        var self = this;
        preButton.onclick = function () {
            self.pre();
        };

        nextButton.onclick = function () {
            self.next();
        };

        //给上一个按钮 和下一页按钮  添加  鼠标移入移出事件
        this.addMouseLinister(preButton);
        this.addMouseLinister(nextButton);
    };

    //上一页
    CarouselView.prototype.pre = function () {
        --this.imageIndex;
        //如果 图片元素的下标  是-1 就让下标是 图片元素数组的 最后一个元素的下标
        if (this.imageIndex==-1){
            this.imageIndex = this.imageElements.length-1;
        }
        this.update();
    };
    //下一页
    CarouselView.prototype.next = function () {
        ++this.imageIndex;
        if (this.imageIndex==this.imageElements.length){
            this.imageIndex = 0;
        }
        this.update();
    };

    //更新 轮播图 显示内容的函数
    CarouselView.prototype.update = function () {
        //移除上一次显示的图片元素
        this.backgroundElement.removeChild(this.curImage);
        // 更新this.curImage的值
        this.curImage = this.imageElements[this.imageIndex];
        // 把新的图片元素  添加到背景元素上
        this.backgroundElement.appendChild(this.curImage);

        if (this.curPointerView){
            this.curPointerView.className = "carouselView-pointer carouselView-pointer-nor";
        }
        this.curPointerView = this.pointerViews[this.imageIndex];
        this.curPointerView.className = "carouselView-pointer carouselView-pointer-selected";
    };

    //开启定时器
    CarouselView.prototype.startTimer = function () {
        var self = this;
        this.timer = setInterval(function () {
            self.next();
        },3000);
    };

    //结束定时器
    CarouselView.prototype.stopTimer = function () {
        if (this.timer){
            clearInterval(this.timer);
        }
    };

    // 给元素添加 开启定时器的事件
    CarouselView.prototype.addMouseLinister = function (ele) {

        var self = this;

        //鼠标移入事件
        ele.onmouseover = function () {
            self.stopTimer();
        };

        // 鼠标移出事件
        ele.onmouseout = function () {
            self.startTimer();
        };
    };

    //添加指示视图
    CarouselView.prototype.addPointerView = function () {
        this.pointerBackgroundView = document.createElement("div");
        this.pointerBackgroundView.className = "carouselView-pointerBackgroundView";

        var self = this;
        //index 来确定 点击的是哪一个图片元素
        this.imagePaths.forEach(function (path,index) {
            var pointer = document.createElement("img");
            pointer.src = path;
            pointer.className = "carouselView-pointer carouselView-pointer-nor";
            self.pointerBackgroundView.appendChild(pointer);

            self.pointerViews.push(pointer);

            pointer.onclick = function () {
                console.log(index);
                //判断 有没有 上一次记录的 指示视图
                if (self.curPointerView){
                    //如果有  把指示视图 的样式  更改成普通的样式
                    self.curPointerView.className = "carouselView-pointer carouselView-pointer-nor";
                }
                // 刷新 当前的指示 视图  为 点击的视图
                self.curPointerView = this;
                //更改 当前指示视图的样式
                self.curPointerView.className = "carouselView-pointer carouselView-pointer-selected";

            //    关联轮播图显示的图片
            //     通过 this.imageIndex 和index进行关联
                self.imageIndex = index;
                //刷新显示的视图
                self.update();
            };
        });

        //给指示视图 添加 鼠标移入移出事件
        this.addMouseLinister(this.pointerBackgroundView);
        this.superEle.appendChild(this.pointerBackgroundView);

    };

    _.CarouselView = CarouselView;
})();
