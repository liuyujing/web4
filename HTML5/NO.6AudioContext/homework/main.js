/**
 * Created by liuyujing on 2016/12/13.
 */
(function () {

    function init() {

        var canvas = document.querySelector(".painter");
        var context = canvas.getContext("2d");
        // rotate(context);

        var watingView = new WatingView(2,document.body);
        // watingView.rotate(watingView.context);
        watingView.startWating(watingView.context);

        setTimeout(function () {
            watingView.stopWating();
        },10000);
    }
    /*
        
        var bPoinerView = new PoinerView({x:100,y:100});
        document.body.appendChild(bPoinerView.pointViewContainer);

        bPoinerView.addLinstener(function (point) {
             drawBezerLine(context,point,ePoinerView.point,mPoinerView1.point,mPoinerView2.point);
        });

        var ePoinerView = new PoinerView({x:100,y:100});
        document.body.appendChild(ePoinerView.pointViewContainer);
        ePoinerView.addLinstener(function (point) {
            drawBezerLine(context,bPoinerView.point,point,mPoinerView1.point,mPoinerView2.point);
        });
        var mPoinerView1 = new PoinerView({x:100,y:100});
        document.body.appendChild(mPoinerView1.pointViewContainer);
        mPoinerView1.addLinstener(function (point) {
            drawBezerLine(context,bPoinerView.point,ePoinerView.point,point,mPoinerView2.point);
        });
        var mPoinerView2 = new PoinerView({x:100,y:100});
        document.body.appendChild(mPoinerView2.pointViewContainer);
        mPoinerView2.addLinstener(function (point) {
            drawBezerLine(context,bPoinerView.point,ePoinerView.point,mPoinerView1.point,point);
        });

    }

    function drawBezerLine(context,begin,end,m1,m2) {
        context.clearRect(0,0,800,800);
        context.beginPath();
        context.moveTo(begin.x,begin.y);
        console.log(begin.x,begin.y);
        console.log(m1.x,m1.y);
        console.log(m2.x,m2.y);
        context.bezierCurveTo(m1.x,m1.x,m2.x,m2.y,end.x,end.y);

        context.stroke();
    }
*/

    init();

})();
