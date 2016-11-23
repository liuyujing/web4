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

    CarouselView.prototype.createSingleView = function (imagePath) {
        var bgView = document.createElement("a");
        bgView.innerHTML = "<img src="+imagePath+">";
        bgView.className = "carowselView-contentView";
        return bgView;
    };

    CarouselView.prototype.getViews = function () {
        var self = this;
        if (this.imagePaths instanceof Array){
            this.imagePaths.forEach(function (path) {
                self.views.push(self.createSingleView(path));
            });
        }
    };

    CarouselView.prototype.showFirstPage = function (pageIndex) {
        this.getViews();
        this.backgroundView = document.createElement("div");
        this.backgroundView.className = "carowselView-bacfgroundView";
        if (this.views.length>0){
            this.curPage = this.views[pageIndex];
            this.backgroundView.appendChild(this.curPage);
        }
    };

    CarouselView.prototype.showControlButton = function () {
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

    CarouselView.prototype.showCarowselView = function (defautPageIndex) {
        this.pageIndex = defautPageIndex||0;
        this.showFirstPage(this.pageIndex);
        this.showControlButton();
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

    CarouselView.prototype.updatePage = function () {
        var self = this;

        move(400,0,-500,this.curPage,function (target) {
            self.backgroundView.removeChild(target);
            self.curPage = self.views[self.pageIndex];
        });


        this.views[this.pageIndex].style.left = 500+"px";
        self.backgroundView.appendChild(this.views[this.pageIndex]);
        move(400,500,0,this.views[this.pageIndex]);

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
