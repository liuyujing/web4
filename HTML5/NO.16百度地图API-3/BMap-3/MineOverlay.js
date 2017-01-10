/**
 * Created by liuyujing on 2017/1/10.
 */
(function () {

    function MineOverlay(point,text) {
        this._point = point;
        this.text = text;
    }

    MineOverlay.prototype = new BMap.Overlay();

    //用于初始化覆盖物，当调用map.addOverlay时，API将调用此方法。自定义覆盖物时需要实现此方法。自定义覆盖物时需要将覆盖物对应的HTML元素返回
    MineOverlay.prototype.initialize = function (map) {

        var div = document.createElement("div");
        div.textContent = this.text;
        map.getPanes().labelPane.appendChild(div);

        div.style.position = "absolute";
        div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
        div.style.backgroundColor = "#EE5D5B";
        div.style.border = "1px solid #BC3B3A";
        div.style.color = "white";

        this.map = map;
        this.container = div;

        return div;
    };

    MineOverlay.prototype.draw = function () {
        /*
        * Map
        * pixelToPoint(pixel: Pixel)	Point	像素坐标转换为经纬度坐标
         pointToPixel(point: Point)	Pixel	经纬度坐标转换为像素坐标
        * */

        var pixel = this.map.pointToPixel(this._point);
        console.log(pixel);
        this.container.style.left = pixel.x+"px";
        this.container.style.top =  pixel.y+"px";
    };

    window.MineOverlay = MineOverlay;

})();