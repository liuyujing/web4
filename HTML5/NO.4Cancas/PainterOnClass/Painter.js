/**
 * Created by liuyujing on 2016/12/9.
 */
(function () {


    function Painter(canvasEle,superEle) {

        this.superEle = superEle;

        this.canvasEle = canvasEle;

        this.context = this.canvasEle.getContext("2d");

    //    设置画笔 两头的样式
        this.context.lineCap = "round";
    //    设置拐角的样式
        this.context.lineJoin = "round";

    }

    //设置画笔的颜色
    Painter.prototype.setLineColor = function (color) {
        this.context.strokeStyle = color;
    };

    //清除画板中  所有的内容
    Painter.prototype.clearWindow = function () {
        this.context.clearRect(0,0,this.canvasEle.width,this.canvasEle.height);
    };

    //保存绘制的内容
    Painter.prototype.saveToImage = function () {
        var inputImageName = prompt("请输入图片的名字","image");
        if (inputImageName){
            var a = document.createElement("a");
            a.href = this.canvasEle.toDataURL();
            a.download = inputImageName;
            a.click();
        }
    };

    //橡皮擦
    Painter.prototype.eraser = function (eraserEle) {

        var tempEraserEle = eraserEle.cloneNode(true);
        this.superEle.appendChild(tempEraserEle);

        var self = this;

        function move(event) {
            tempEraserEle.style.left = event.pageX-25+"px";
            tempEraserEle.style.top = event.pageY-25+"px";
            self.context.clearRect(event.pageX-25,event.pageY-25,50,50);
        }

        function up(event) {

            clearEventListener();
            self.superEle.removeChild(tempEraserEle);
        }

        function down(event) {
            console.log(tempEraserEle);
            document.addEventListener("mousemove",move);

        }

        //清除 橡皮擦的 效果
        function clearEventListener() {
            document.removeEventListener("mousedown",down);
            document.removeEventListener("mousemove",move);
            document.removeEventListener("mouseup",up);
        }

        document.addEventListener("mousedown",down);

        document.addEventListener("mouseup",up);

    };

    Painter.prototype.drowLine = function () {

        var self = this;

        var offsetPoint = 5;
        //当鼠标在画板上 移动时候的 监听者
        function move(event) {
            self.context.lineTo(event.pageX-offsetPoint,event.pageY-offsetPoint);
            self.context.stroke();
        }

        this.canvasEle.onmousedown = function (event) {

            self.context.beginPath();
            self.context.moveTo(event.pageX-offsetPoint,event.pageY-offsetPoint);
            self.context.stroke();

            self.canvasEle.addEventListener("mousemove",move);
        };

        this.canvasEle.onmouseup = function (event) {
            this.removeEventListener("mousemove",move);

            self.context.save();
            self.context.closePath();
        };

    };


    window.Painter = Painter;

})();
