/**
 * Created by liuyujing on 2017/1/6.
 */
(function () {

    function Marker(map) {
        this.map = map;
    }

    Marker.prototype.addMarker = function (point) {
        this.marker = new BMap.Marker(point);
        this.map.addOverlay(this.marker);
        this.marker.enableDragging();
        this.marker.setAnimation(BMAP_ANIMATION_DROP);
        this.addEventListener();
    };

    Marker.prototype.addEventListener = function () {
        this.marker.addEventListener("dragend", function (event) {
            console.log(event.point);
        })
    };

    window.Marker = Marker;
})();