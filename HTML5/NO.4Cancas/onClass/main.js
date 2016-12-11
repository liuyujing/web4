/**
 * Created by liuyujing on 2016/12/9.
 */
(function () {

    function init() {

    //    三角形
    //    正方形


        var canvasContainer = document.querySelector(".drawContainer");
        canvasContainer.width = 800;
        canvasContainer.height = 800;

        var context = canvasContainer.getContext("2d");


        var origin = {x:100,y:100};
        var WIDTH = 100;

        //正方形
        // drawLine(context,origin,{x:origin.x+WIDTH,y:origin.y});
        // drawLine(context,{x:origin.x+WIDTH,y:origin.y},{x:origin.x+WIDTH,y:origin.y+WIDTH});
        // drawLine(context,{x:origin.x,y:origin.y+WIDTH},{x:origin.x+WIDTH,y:origin.y+WIDTH});
        // drawLine(context,origin,{x:origin.x,y:origin.y+WIDTH});


    //    三角形
        /*origin = {x:400,y:400};
        drawLine(context,origin,{x:origin.x+WIDTH,y:origin.y});
        drawLine(context,{x:origin.x+WIDTH,y:origin.y},{x:origin.x+WIDTH,y:origin.y+WIDTH});
        drawLine(context,origin,{x:origin.x+WIDTH,y:origin.y+WIDTH});*/


        // triangle(context,{x:400,y:400},400);
        // triangle(context,{x:20,y:200},50);
        // triangle(context,{x:600,y:200},80);
        //
        //
        // rect(context,{x:0,y:0},{width:300,height:200});
        // rect(context,{x:190,y:0},{width:100,height:200});


        // drawLineWithColor(context,{x:0,y:0},"red","green");
        // drawLineWithColor(context,{x:400,y:0},"red","green");
        // drawLineWithColor(context,{x:400,y:400},"red","green");


        // test2(context);

        // test3(context);


        //清除 绘制的内容
        //x,y原点
        //w,h清除区域的宽度 和高度
        // context.clearRect(100,100,700,700);


        // test4(context);

        test5(context);
    }


    function test4(context) {

        /*
        * 绘制文本
        *
        * text 文本
        * x,y 原点
        * maxWidth 限制文本的宽度
        * */
        // context.fillText("21345678",10,10,40);
        context.fillStyle = "red";
        context.fillText("21345678",10,10);

        context.stroke();

    }


    function test5(context) {

        var image = new Image();
        image.src = "123.jpg";

        /*
        * img_elem 图片元素
        * dx_or_sx,dy_or_sy 剪切图片的原点
        * dw_or_sw,dh_or_sh 剪切图片的宽高
        * dx,dy 放置的起始点
        * dw,dh 放置的宽度高度
        * */
        image.onload = function () {
            context.drawImage(image,100,100,400,400,50,50,300,300);
            context.stroke();
        };


        // var url = context.toDataURL();
    }


    function test3(context) {

        /*
        * x,y 原点
        * radius 弧线的半径
        * startAngle,endAngle 起始的弧度 和结束的弧度
        * anticlockwise 顺时针false 逆时针true 去画弧
        * */
        context.arc(400,400,200,0,Math.PI*2,false);

        context.stroke();
    }


    //作业1：画太极图 -> 并保存成图片



    function test2(context) {
        context.strokeStyle = "red";
        context.fillStyle = "green";

        //  绘制矩形
        // x,y:原点
        // w,h:矩形的尺寸
        context.rect(0,0,100,200);
        context.closePath();
        context.fill();//填充内容的颜色
        context.stroke();

    }



    /*
    * 矩形的函数
    *
    * origin 原点 x,y
    * size 尺寸 width height
    * */
    function rect(context,origin,size) {
        drawLine(context,origin,{x:origin.x+size.width,y:origin.y});
        drawLine(context,{x:origin.x+size.width,y:origin.y},{x:origin.x+size.width,y:origin.y+size.height});
        drawLine(context,{x:origin.x,y:origin.y+size.height},{x:origin.x+size.width,y:origin.y+size.height});
        drawLine(context,origin,{x:origin.x,y:origin.y+size.height});
    }

    /*
    * 三角形函数
    *
    * origin原点
    * lineLenth 三角形 边线的长度
    * */
    function triangle(context,origin,lineLenth) {
        drawLine(context,origin,{x:origin.x+lineLenth,y:origin.y});
        drawLine(context,{x:origin.x+lineLenth,y:origin.y},{x:origin.x+lineLenth,y:origin.y+lineLenth});
        drawLine(context,origin,{x:origin.x+lineLenth,y:origin.y+lineLenth});

    }

    /*
    * context 绘图的上下文
    * begin x , y
    * end x , y
    * */
    function drawLine(context,begin,end) {

        //开始绘制路径
        context.beginPath();

        //lineTo 直接去划线  笔尖不离开画布
        //moveTo 移动到某个点 笔尖 离开画布 到某个点
        context.moveTo(begin.x,begin.y);
        context.lineTo(end.x,end.y);

        //闭合路径的方法 -> 会把剩余的两个点 连接起来
        context.closePath();

        context.stroke();

    }


    function drawLineWithColor(context,point,lineColor,fillColor) {

        //笔画的颜色
        context.strokeStyle = lineColor;
        //填充的颜色
        context.fillStyle = fillColor;

        context.lineTo(point.x,point.y);

        context.fill();
        context.stroke();
    }


    function test() {
        //1.创建画布 找到画布
        var canvasContainer = document.querySelector(".drawContainer");
        canvasContainer.width = 800;
        canvasContainer.height = 800;

        //    2.根据画布 获得上下文 -> 所有的 操作 都是通过上下文 进行操作的 -> (承上启下)
        var context = canvasContainer.getContext("2d");

        //    3.具体的设置
        //    设置笔画的宽度 lineWidth
        context.lineWidth = 3;

        //    4.绘制的内容
        //    两个点  确定 一条线 lineTo(x,y)
        context.lineTo(50,50);
        context.lineTo(600,50);

        //    绘制到画布上面
        context.stroke();
    }

    init();

})();
