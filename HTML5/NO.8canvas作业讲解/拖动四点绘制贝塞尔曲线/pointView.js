/**
 * Created by liuyujing on 2016/12/13.
 */
(function () {

    function PoinerView(point) {
        this.point = point;

        this.pointViewContainer = document.createElement("div");
        this.pointViewContainer.className = "pointViewContainer";
        this.pointViewContainer.style.left = point.x;
        this.pointViewContainer.style.top = point.y;
        this.pointViewContainer.textContent = ""+point.x+","+point.y+"";
    }

    PoinerView.prototype.addLinstener = function (callback) {
        var self = this;
        function updateLocation(event) {
            var x = event.pageX-25;
            var y = event.pageY-25;

            self.pointViewContainer.style.left = x+"px";
            self.pointViewContainer.style.top = y+"px";
            self.pointViewContainer.textContent = ""+ x +","+ y +"";

        }
        self.pointViewContainer.onmousedown = function (event) {
            document.addEventListener("mousemove",updateLocation);
        };
        self.pointViewContainer.onmouseup = function (event) {
            document.removeEventListener("mousemove",updateLocation);
            if (callback){
                var x = event.pageX-25;
                var y = event.pageY-25;
                self.point = {x:x,y:y};
                callback({x:x,y:y});
            }
        }
    };

    this.PoinerView = PoinerView;
})();
