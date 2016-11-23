/**
 * Created by liuyujing on 16/10/14.
 */

window.corouselView = window.corouselView||{};

(function () {

    /*
    * 创建轮播图
    * _datas:图片数据的数组
    * 必须{imagePath:"",toUrl:""}的数据格式
    * */
    function Init(_superView,_datas) {
        this.datas = _datas;
        this.views = [];
        this.backgroundView = _superView;
        this.pageIndex = 0;
        this.timer = null;
    }

    /*
    * 创建单个视图
    * imagePath:图片路径
    * toUrl:要跳转的URL
    * */
    Init.prototype.createSingleView = function (imagePath,toUrl) {
        var backgroundImageView = document.createElement("a");
        backgroundImageView.href = toUrl;
        var image = document.createElement("img");
        image.src = imagePath;
        backgroundImageView.appendChild(image);
        backgroundImageView.className = "imageView";
        return backgroundImageView;
    };

    /*
    * 获得盛放单一视图元素的数组
    * */
    Init.prototype.getSingleViews = function () {
        //判断是否传入了图片的数据
        if (this.datas&&this.datas.length!=0){
            if (this.views.length===0){
                for (var i=0;i<this.datas.length;i++){
                    var info = this.datas[i];
                    this.views.push(this.createSingleView(info.imagePath,info.toUrl));
                }
                return this.views;
            }else {
                return this.views;
            }
        }else {
            return [];
        }
    };

    /*
    * 显示第一个初始页面
    * */
    Init.prototype.showFirstPage = function (pageNum) {
        if (pageNum<this.datas.length){
            this.backgroundView.appendChild(this.getSingleViews()[pageNum]);
        }else {
            console.log("超过总共的页数了~");
        }
    };

    /*
    * 创建控制上一页 下一页的按钮
    * */
    Init.prototype.createControlButton = function () {
        var preButton = document.createElement("div");
        preButton.textContent = "<";
        var nextButton = document.createElement("div");
        nextButton.textContent = ">";
        preButton.className = "preButton";
        nextButton.className = "nextButton";
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

    Init.prototype.nextPage = function () {
        this.pageIndex++;
        this.pageIndex = this.pageIndex==this.datas.length?0:this.pageIndex;
        this.updataPage();
    };

    Init.prototype.prePage = function () {
        this.pageIndex--;
        this.pageIndex = this.pageIndex==-1?this.datas.length-1:this.pageIndex;
        this.updataPage();
    };

    /*
    * 更新切换后的界面
    * */
    Init.prototype.updataPage = function () {
        var lastPage = document.querySelector("#"+this.backgroundView.getAttribute("id")+" .imageView");
        console.log(lastPage);
        this.backgroundView.removeChild(lastPage);
        this.backgroundView.appendChild(this.getSingleViews()[this.pageIndex]);
    };

    /*
    * 开启定时器
    * */
    Init.prototype.startTimer = function (delay) {
        if (this.timer){
            clearInterval(this.timer);
        }
        var self = this;
        this.timer = setInterval(function () {
            self.nextPage();
        },delay);
    };

    /*
     * 停止定时器
     * */
    Init.prototype.stopTimer = function () {
        if (this.timer){
            clearInterval(this.timer);
        }
    };

    /*
    * 创建轮播图界面
    * 返回创建好的整个界面
    * */
    Init.prototype.createCarouselView = function () {
        //显示第一个页面
        this.showFirstPage(0);
        //显示添加控制按钮
        this.createControlButton();
    };

    /*
    * putSuperView:把轮播图添加到父视图
    * superView:父视图
    * */
    Init.prototype.putSuperView = function () {
        this.backgroundView.style.cssText = "position:relative;overflow:hidden";
        this.createCarouselView();
    };

    corouselView.Init = Init;
})();
