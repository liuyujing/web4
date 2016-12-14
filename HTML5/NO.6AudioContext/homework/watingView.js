/**
 * Created by liuyujing on 2016/12/13.
 */
(function () {

    function WatingView(row,superView) {
        this.row = row;
        this.view = document.createElement("div");
        this.view.className = "watingView";
        superView.appendChild(this.view);

        var canvas = document.createElement("canvas");
        canvas.width = 100;
        canvas.height = 100;
        this.view.appendChild(canvas);
        this.context = canvas.getContext("2d");
    }

    WatingView.prototype.addRact = function (context) {
        for (var i=0;i<this.row;i++){
            for (var j=0;j<this.row;j++){
                context.beginPath();
                context.save();
                context.fillStyle = "#ff5831";
                if (i==0&&j==0){
                    context.fillStyle = "red";
                }
                var width = 100/this.row;
                context.translate(i*width,j*width);
                context.rect(0,0,width,width);
                context.fill();
                context.stroke();
                context.restore();

            }
        }
    };

    WatingView.prototype.stopWating = function () {
          this.stop = true;
    };

    WatingView.prototype.startWating = function (context) {

        var self = this;
        self.rotate(context);

        timer = setTimeout(function () {
            if (self.stop){
                clearTimeout(timer);
                context.clearRect(0,0,100,100);
                return;
            }
            self.startWating(context);
        },1000);
    };

    WatingView.prototype.rotate = function (context) {

        context.clearRect(0,0,100,100);

        var x = 100/2;
        var y = 100/2;

        context.translate(x,y);
        //angle:弧度

        context.rotate(90*Math.PI/180);
        context.translate(-x,-y);

        this.addRact(context);
        context.restore();

    };
    window.WatingView = WatingView;

})();
