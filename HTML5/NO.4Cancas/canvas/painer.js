/**
 * Created by liuyujing on 2016/12/9.
 */
(function () {

    function Painter(target) {
        this.target = target;
        this.context = target.getContext("2d");
    }

    Painter.prototype.setLineColor = function (color) {
        this.context.strokeStyle = color;
    };

    Painter.prototype.setFillColor = function (color) {
        this.context.fillStyle = color;
    };

    Painter.prototype.setLineWidth = function (width) {
        this.context.lineWidth = width;
    };

    Painter.prototype.setLineCap = function (style) {
        this.context.lineCap = style;
    };

    Painter.prototype.drowLine = function () {

        var self = this;

        this.target.onmousedown = function (event) {
            self.context.beginPath();
            self.context.moveTo(event.pageX,event.pageY);

            self.target.addEventListener("mousemove",move);
        };

        function move(event) {
            self.context.lineTo(event.pageX-5,event.pageY-5);
            self.context.stroke();
        }
        this.target.onmouseup = function (event) {
            self.target.removeEventListener("mousemove",move);
        };

    };

    Painter.prototype.eraser = function (target) {
        var self = this;
        var eraserEle = target.cloneNode(true);
        document.body.appendChild(eraserEle);
        document.body.addEventListener("mousedown",mousedown);
        document.body.addEventListener("mouseup",mouseup);

        function mousedown(event) {
            event.stopPropagation();

            clear(event);
            document.body.addEventListener("mousemove",clear);
        }

        function clear(event) {
            event.stopPropagation();
            eraserEle.style.left = event.pageX-25+"px";
            eraserEle.style.top = event.pageY-25+"px";
            self.context.clearRect(event.pageX-25,event.pageY-25,50,50);
        }

        function mouseup() {
            document.body.removeChild(eraserEle);
            removeLisrener(document.body);
        }

        function removeLisrener(ele) {
            ele.removeEventListener("mouseup",mouseup);
            ele.removeEventListener("mousedown",mousedown);
            ele.removeEventListener("mousemove",clear);
        }
    };

    window.Painter = Painter;
})();