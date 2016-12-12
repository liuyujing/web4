/**
 * Created by liuyujing on 2016/12/12.
 */
(function () {

    function init() {

        var painterView = document.querySelector(".painterView");

        var context = painterView.getContext("2d");

    //    贝塞尔曲线:根据两个参考点 绘制曲线
        /*
        * cp1x,cp1y 第一个参考点
        * cp2x,cp2y 第二个参考点
        * x,y 结束点
        * */
        /*
        context.moveTo(100,100);
        context.bezierCurveTo(50,200,200,200,100,400);
        context.stroke();
*/
    //    双击 4个点 绘制一条曲线

        // addBezierLine(painterView);

        // linearGradient(context);



        // radialGradient(context);


        // var list = [{beginPoint:{x:500,y:100},endPoint:{x:600,y:200},radial:200,colors:["white","yellow","red"]},{beginPoint:{x:300,y:300},endPoint:{x:380,y:400},radial:200,colors:["white","yellow","red"]},{beginPoint:{x:100,y:300},endPoint:{x:110,y:325},radial:50,colors:["gray","#103E6C","black"]},{beginPoint:{x:10,y:400},endPoint:{x:50,y:420},radial:50,colors:["white","yellow","red"]},{beginPoint:{x:100,y:200},endPoint:{x:150,y:220},radial:100,colors:["#FFC919","#FF5831","red"]}];
        //
        // showRounds(context,list);


        // addText(context,"你好~同学们~",{x:100,y:100});
    //    让文字的颜色 渐变


        // pattern(context);

        // fillType(context);

        // saveAndRestore(context);

        // translate(context);

        // round(context);

        // rotate(context);

        // scale(context);

        animation(context,0);
    }


    //1.把画布中的内容清除掉
    //2.保存初始状态
    //3.进行动画的操作
    function animation(context,x) {

        context.clearRect(0,0,800,800);

        context.save();

        context.fillRect(x,100,50,50);

        ++x;

        //一秒60帧
        //执行完一帧之后  执行回调函数
        requestAnimationFrame(function () {

            if (x>=800-50){
                return;
            }
        //        递归调用
            animation(context,x);
            context.restore();

        });


    }

    function scale(context) {

        context.beginPath();
        context.fillStyle = "rgba(200,200,200,0.9)";

        context.save();

        var x = 200+200/2;
        var y = 200+200/2;

        context.translate(x,y);
        /*
        * x,y
        * */
        context.scale(0.5,0.5);
        context.translate(-x,-y);
        context.fillRect(200,200,200,200);

    }

    function rotate(context) {

        context.beginPath();
        context.fillStyle = "#1cbbff";

        context.save();

        var x = 100+200/2;
        var y = 100+200/2;

        context.translate(x,y);
        //angle:弧度
        context.rotate(60*Math.PI/180);

        context.translate(-x,-y);

        context.fillRect(100,100,200,200);

    }

    //通过 translate 创建一个九宫格的 小圆圈

    function round(context) {

        for(var i=0;i<3;i++){
            for (var j=0;j<3;j++){

                context.save();

                context.beginPath();
                context.strokeStyle = "#FF5831";
                context.translate(100+200*i,100+200*j);

                context.arc(0,0,100,0,Math.PI*2,true);
                context.stroke();

                context.restore();
            }
        }

    }


    function translate(context) {

        context.save();
        context.beginPath();
        context.fillRect(0,0,100,100);

        context.save();
        context.beginPath();
        context.translate(200,0);
        context.fillRect(0,0,100,100);
        context.restore();

        context.save();
        context.beginPath();
        context.translate(200,0);
        context.fillRect(0,0,100,100);
        context.restore();
    }


    function saveAndRestore(context) {
        context.save();

        context.fillStyle = "red";
        context.fillRect(100,100,200,200);
        context.save();

        context.fillStyle = "yellow";
        context.fillRect(100,300,200,200);
        context.save();

        context.restore();
        context.fillRect(300,100,200,200);

        context.restore();
        context.fillRect(300,300,200,200);

        context.restore();
        context.fillRect(100,500,200,200);


    }


    function fillType(context) {

        context.beginPath();
        context.fillStyle = "red";
        context.moveTo(400,400);
        context.arc(400,400,200,0,Math.PI*2,true);
        context.save();
        context.fill("evenodd");

        context.fillStyle = "yellow";
        context.moveTo(600,400);
        context.arc(600,400,200,0,Math.PI*360/180,true);
        context.save();
        context.fill("evenodd");

        context.moveTo(600,600);
        context.arc(600,600,200,0,Math.PI*360/180,true);
        context.restore();
        context.fill("evenodd");

    }




    function pattern(context) {

        context.beginPath();

        //设置 全局的不透明度
        context.globalAlpha = 0.8;

        var image = new Image();
        image.src = "111.png";

        image.onload = function () {

            /*
            * image 图片元素
            * repetition 重复的方式
            * "repeat" (both directions),
            * "repeat-x" (horizontal only),
            * "repeat-y" (vertical only),
            * "no-repeat" (neither).
            * */

            var pat = context.createPattern(this,"repeat");
            context.fillStyle = pat;

            context.fillRect(0,0,400,400);

            context.closePath();
        };

    }

    function addText(context,text,origin) {

        context.font = "50px 宋体";

        var gradient = context.createLinearGradient(origin.x,origin.y,55*text.length,origin.y);
        gradient.addColorStop(0,"#FF5831");
        gradient.addColorStop(0.5,"#FF09D8");
        gradient.addColorStop(1,"#FF5831");

        context.fillStyle = gradient;
        //shadowOffsetX 正数向右 负数向左
        //shadowOffsetY 正数向下 负数向上
        context.shadowOffsetX = 3;
        context.shadowOffsetY = -3;
        context.shadowColor = "gray";
        context.shadowBlur = 5;
        context.fillText(text,origin.x,origin.y);

    }

    function showRounds(context,rounds) {

        for (var i=0;i<rounds.length;i++){
            var roundInfo = rounds[i];
            addRound(context,roundInfo.beginPoint,roundInfo.endPoint,roundInfo.radial,roundInfo.colors);

        }
    }

    function addRound(context,beginPoint,endPoint,radial,colors) {

        context.beginPath();
        var gradient = context.createRadialGradient(beginPoint.x,beginPoint.y,radial/10,endPoint.x,endPoint.y,radial);

        gradient.addColorStop(0,colors[0]);
        gradient.addColorStop(0.5,colors[1]);
        gradient.addColorStop(1,colors[2]);

        context.fillStyle = gradient;

        context.arc(beginPoint.x,beginPoint.y,radial,0,Math.PI*2,true);

        context.fill();
    }


    function radialGradient(context) {

        /*
        * 径向渐变
        * x0,y0 径向渐变的起始点
        * r0 径向渐变起始点的半径
        * x1,y1 径向渐变的结束点
        * r1 径向渐变结束点的半径
        * */
        var gradient = context.createRadialGradient(130,100,80,150,200,200);
        gradient.addColorStop(0,"white");
        gradient.addColorStop(0.5,"yellow");
        gradient.addColorStop(1,"red");

        context.fillStyle = gradient;

        context.arc(200,200,200,0,Math.PI*2,true);

        context.fill();

    }


    function linearGradient(context) {
        /*
         * x0,y0 线性渐变的起始点
         * x1,y1 线性渐变的终点
         * */
        var gradient = context.createLinearGradient(80,80,540,540);
        //    添加渐变的颜色
        /*
         * offset 颜色位置的偏移量 0-1
         * color 设置的颜色
         * */
        gradient.addColorStop(0,"red");
        gradient.addColorStop(0.5,"blue");
        gradient.addColorStop(1,"gray");

        //设置颜色填充的样式
        context.fillStyle = gradient;

        /*
         * x,y 原点
         * w,h 宽高
         * */
        context.fillRect(100,100,400,400);
    }

    function addBezierLine(painterView) {

        var context = painterView.getContext("2d");

        context.beginPath();

        //用来存放 点击的点
        var points = [];

        painterView.ondblclick = function (event) {

            var point = {x:event.pageX,y:event.pageY};

            points.push(point);

            if (points.length>=4){

                context.moveTo(points[0].x,points[0].y);

                context.bezierCurveTo(points[1].x,points[1].y,points[2].x,points[2].y,points[3].x,points[3].y);

                // context.closePath();
                context.stroke();

                points = [];
            }

        };

    }


    init();
})();
