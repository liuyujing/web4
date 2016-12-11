/**
 * Created by liuyujing on 2016/12/8.
 */
(function () {

    /*
    function init() {
        var canvas = document.getElementById("canvas");

        canvas.width = 800;
        canvas.height = 800;

        var context = canvas.getContext("2d");

        context.lineCap = "round";
        context.lineWidth = 3;
        context.lineJoin = "round";

        drowLine(context,{x:0,y:50},{x:500,y:50},"red");
        drowLine(context,{x:0,y:150},{x:500,y:150},"green");
        drowLine(context,{x:0,y:250},{x:500,y:250},"green");

        drowCircle(context,{x:500,y:500},100,"black",true,"red");

        drowRectangle(context,{x:200,y:200},{width:80,height:90},"red",true,"yellow");

        drowText(context,"fwefiwuho",{x:30,y:400},200);

        drawImage(context,"bd_logo1.png",{x:300,y:300},{width:300,height:200},{x:0,y:0},{width:300,height:200});

        saveToImage(canvas,"test");

    }

    function drowLine(context,begin,end,lineColor) {
        context.strokeStyle = lineColor;
        context.beginPath();
        context.lineTo(begin.x,begin.y);
        context.lineTo(end.x,end.y);
        context.stroke();

    }

    function drowCircle(context,begin,radius,lineColor,isFill,fillColor) {
        context.strokeStyle = lineColor;
        if (fillColor){
            context.fillStyle = fillColor;
        }
        context.beginPath();
        context.arc(begin.x,begin.y,radius,0,Math.PI*2,true);
        if (isFill){
            context.fill();
        }
        context.stroke();

    }

    function drowRectangle(context,origin,size,lineColor,isFill,fillColor) {
        context.strokeStyle = lineColor;
        if (fillColor){
            context.fillStyle = fillColor;
        }
        context.strokeRect(origin.x,origin.y,size.width,size.height);
        if (isFill){
            context.fill();
        }
        context.stroke();

    }

    function drowText(context,text,origin,maxWidth,lineColor) {
        if (lineColor){
            context.fillStyle = lineColor;
        }
        context.restore();
        context.fillText(text,origin.x,origin.y,maxWidth);

    }

    function drawImage(context,imagePath,origin,size,cutOrigin,cutSize) {
        cutOrigin = cutOrigin||{x:0,y:0};
        cutSize = cutSize||{width:0,height:0};
        var image = new Image();
        image.src = imagePath;
        image.onload = function () {
            context.drawImage(image,cutOrigin.x,cutOrigin.y,cutSize.width,cutSize.height,origin.x,origin.y,size.width,size.height);
        }
    }


    function saveToImage(target,imageName) {
        var a = document.createElement("a");
        a.href = target.toDataURL();
        a.download = imageName;
        a.click();
    }

    init();
*/

    function init() {
        var eraser = document.querySelector(".eraser");
        var lineColor = document.querySelector(".lineColor");
        var canvas = document.getElementById("canvas");
        canvas.width = 800;
        canvas.height = 800;

        var painter = new Painter(canvas);
        painter.drowLine();

        eraser.onmousedown = function () {
            painter.eraser(this);
        };

        lineColor.onchange = function () {
            painter.setLineColor(this.value);
        }
    }


    init();
})();