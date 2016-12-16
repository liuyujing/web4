/**
 * Created by liuyujing on 2016/12/16.
 */
(function () {

    function PhotoWall(canvas,photos) {
        this.context = canvas.getContext("2d");
        this.photos = photos;

        this.showPhotoWall();
    }

    //加载图片
    PhotoWall.prototype.createImage = function (url,callback) {
        var image = new Image();
        image.src = url;
        image.onload = function () {
            callback(this);
        };
    };


    PhotoWall.prototype.addImage = function () {

        var self = this;

        if (this.index >= this.photos.length){
            //如果 加载完了 图片数组中的  元素
            //跳出递归调用
            return;
        }

        this.createImage(this.photos[this.index],function (image) {
            self.context.save();
            self.context.translate(10,50);
            self.context.scale(0.95,0.95);
            self.context.rotate(20*Math.PI/180);
            self.context.drawImage(image,0,0,100,40);

            //每一次 加载完图片
            //渲染到 画布上面
            //让图片数组的下标 自加
            self.index++;

            self.addImage();
        });
    };


    PhotoWall.prototype.showPhotoWall = function () {

        var self = this;
        //指定 照片墙 起始的位置
        //200,200 可以是 画布 宽和高的 一半
        self.context.translate(300,200);

        //图片的下标
        this.index = 0;

        this.addImage();


        // for (var i=0;i<this.photos.length;i++){
        //     this.createImage(this.photos[i],function (image) {
        //         self.context.save();
        //         self.context.translate(10,50);
        //         self.context.scale(0.95,0.95);
        //         self.context.rotate(20*Math.PI/180);
        //         self.context.drawImage(image,0,0,100,40);
        //     });
        // }

    };


    window.PhotoWall = PhotoWall;

})();
