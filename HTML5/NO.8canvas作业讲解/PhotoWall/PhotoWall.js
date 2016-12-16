/**
 * Created by liuyujing on 2016/12/16.
 */
(function () {

    function PhotoWall(canvas,photos) {
        this.photos = photos;
        this.width = canvas.width;
        this.height = canvas.height;
        this.canvasContext = canvas.getContext("2d");
        this.addPhotos();
    }

    PhotoWall.prototype.add = function () {

        this.index++;
        var self = this;
        this.canvasContext.translate(30,40);
        this.canvasContext.scale(0.95,0.95);
        this.canvasContext.rotate(20*Math.PI/180);

        this.photoItem(this.photos[this.index],function (image) {
            self.canvasContext.drawImage(image, 0, 0, 100, 50);
            self.add();
        });

    };
    PhotoWall.prototype.addPhotos = function () {
        this.index = 0;
        var self = this;
        this.canvasContext.translate(this.width/2,this.height/2);
        this.photoItem(this.photos[0],function (image) {
            self.canvasContext.drawImage(image,0,0,100,50);
            self.add();
        });

    };

    PhotoWall.prototype.photoItem = function (path,callback) {
        var image = new Image();
        image.src = path;
        image.onload = function () {
            callback(image);
        }
    };

    window.PhotoWall = PhotoWall;

})();