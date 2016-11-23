/**
 * Created by liuyujing on 2016/11/11.
 */
(function () {

    function CarouselView(_imagePaths,_superEle) {
        this.imagePaths = _imagePaths;
        this.views = [];
        this.pageIndex = 0;
        this.timer = null;
        this.superEle = _superEle;
        this.backgroundView = null;
        this.curPage = null;
    }

    //创建单一页面的函数 （创建的轮播图上显示的 每一个小内容）
    CarouselView.prototype.createSingleView = function (imagePath) {
        var bgView = document.createElement("a");
        bgView.innerHTML = "<img src="+imagePath+">";
        bgView.className = "carowselView-contentView";
        return bgView;
    };

    //把单独的视图  放到数组中
    CarouselView.prototype.getViews = function () {
        var self = this;
        if (this.imagePaths instanceof Array){
            this.imagePaths.forEach(function (path) {
                //self.views 盛放图片元素的数组
                self.views.push(self.createSingleView(path));
            });
        }
    };
    //显示第一个页面的函数
    //pageIndex 让使用插件的人  自己设置默认显示第几个图片
    CarouselView.prototype.showFirstPage = function (pageIndex) {
        this.getViews();
        this.backgroundView = document.createElement("div");
        this.backgroundView.className = "carowselView-bacfgroundView";
        if (this.views.length>0){
            this.curPage = this.views[pageIndex];
            this.backgroundView.appendChild(this.curPage);
        }
    };

    //显示控制按钮
    CarouselView.prototype.showControlButton = function (isShowControl) {
        isShowControl = isShowControl|true;
        if (!isShowControl){
            return;
        }
        var preButton = document.createElement("p");
        var nextButton = document.createElement("p");
        preButton.className = "carowselView-controlButton carowselView-pre";
        nextButton.className = "carowselView-controlButton carowselView-next";
        preButton.textContent = "<";
        nextButton.textContent = ">";
        this.backgroundView.appendChild(preButton);
        this.backgroundView.appendChild(nextButton);
        var self = this;
        preButton.onclick = function () {
            self.prePage();
        };
        nextButton.onclick = function () {
            self.nextPage();
        };
    };

    //显示轮播图的方法
    //所有初始化的工作  都在这个方法中
    CarouselView.prototype.showCarowselView = function (defautPageIndex,isShowControl) {
        this.pageIndex = defautPageIndex||0;
        this.showFirstPage(this.pageIndex);
        this.showControlButton(isShowControl);
        if (this.backgroundView instanceof Node){
            this.superEle.appendChild(this.backgroundView);
        }
        this.addMouseLisinter(this.backgroundView);
        var buttons = document.getElementsByClassName("carowselView-controlButton");
        for (var i=0;i<buttons.length;i++){
            this.addMouseLisinter(buttons[i]);
        }
        this.startTimer();
    };

    CarouselView.prototype.prePage = function () {
        --this.pageIndex;
        this.pageIndex = this.pageIndex==-1?this.views.length-1:this.pageIndex;
        this.updatePage();
    };

    CarouselView.prototype.nextPage = function () {
        ++this.pageIndex;
        this.pageIndex = this.pageIndex==this.views.length?0:this.pageIndex;
        this.updatePage();
    };

    //更新函数
    //移除之前的this.curPage
    //更新成 当前的页面
    //添加到容器中
    CarouselView.prototype.updatePage = function () {
        this.backgroundView.removeChild(this.curPage);
        this.curPage = this.views[this.pageIndex];
        this.backgroundView.appendChild(this.curPage);
    };

    CarouselView.prototype.addMouseLisinter = function (ele) {
        var self = this;
        ele.onmouseover = function () {
            self.stopTimer();
        };
        ele.onmouseout = function () {
            self.startTimer();
        };
    };
    CarouselView.prototype.startTimer = function () {
        var self = this;
        if (this.timer){
            this.stopTimer();
        }
        this.timer = setInterval(function () {
            self.nextPage();
        },3000);
    };

    CarouselView.prototype.stopTimer = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };

    window.CarouselView = CarouselView;

})();
