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
        this.animation = new _.Animtaion();
        this.animating = false;
        this.lastPointerView = null;
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
        this.superEle.appendChild(this.addPointerView());
    };

    CarouselView.prototype.prePage = function () {
        --this.pageIndex;
        var self = this;
        this.pageIndex = this.pageIndex==-1?this.views.length-1:this.pageIndex;
        this.updatePage({out:self.animation.moveOutToRight,in:self.animation.moveInFromLeft});
    };

    CarouselView.prototype.nextPage = function () {
        ++this.pageIndex;
        var self = this;
        this.pageIndex = this.pageIndex==this.views.length?0:this.pageIndex;
        this.updatePage({out:self.animation.moveOutToLeft,in:self.animation.moveInFromRight});
    };

    CarouselView.prototype.switchImage = function(oldImage,newImage,animation,compaleter) {
        var self = this;
        animation.out(oldImage,400,function (target) {
            self.backgroundView.removeChild(target);
        });
        animation.in(newImage,400,function () {
            if (compaleter){
                compaleter();
            }
        });
        this.backgroundView.appendChild(newImage);
    };

    CarouselView.prototype.updatePage = function (animatObj) {
        var self = this;
        if (!this.animating){
            this.animating = true;
            this.switchImage(this.curPage,this.views[this.pageIndex],animatObj,function () {
                self.animating = false;
                self.curPage = self.views[self.pageIndex];

            });
        }

        var nodes = document.getElementsByClassName("carousel-thumb");
        console.log(nodes);

        if (self.lastPointerView){
            self.lastPointerView.className = "carousel-thumb carousel-pointerView-NorImage";
        }
        self.lastPointerView = nodes[self.pageIndex];
        self.lastPointerView.className = "carousel-thumb carousel-pointerView-selectedImage";
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

    CarouselView.prototype.addPointerView = function () {
        var pointerContainer = document.createElement("div");
        pointerContainer.className = "carousel-pointerView";

        this.addMouseLisinter(pointerContainer);

        var temp = document.createDocumentFragment();

        var self = this;

        this.imagePaths.forEach(function (item,index) {

            var img = document.createElement("img");
            img.src = item;
            img.width = 50;
            img.className = "carousel-thumb crousel-pointerView-NorImage";
            temp.appendChild(img);

            img.onclick = function () {

                self.pageIndex = index;
                self.updatePage({out:self.animation.moveOutToLeft,in:self.animation.moveInFromRight});
                console.log(self.pageIndex);
            };
        });
        pointerContainer.appendChild(temp);
        return pointerContainer;
    };

    window.CarouselView = CarouselView;
})();
