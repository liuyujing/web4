/**
 * Created by liuyujing on 2017/1/5.
 */
(function () {

    function Map() {
        this.showMap();
        // this.addDoms();
        // this.addEventListener();
        this.addControls();
    }

    Map.prototype.showMap = function () {

        this.map = new BMap.Map("map");
        var position = new BMap.Point(115.49481017,38.88656455);
        this.map.centerAndZoom(position,8);
    };

    Map.prototype.addDoms = function () {
        this.locationButton = document.querySelector(".location-button");
    };

    Map.prototype.addEventListener = function () {
        this.locationButton.onclick = function () {
            this.getPosition();
        }.bind(this);
    };

    Map.prototype.getPosition = function () {
        navigator.geolocation.getCurrentPosition(function (p) {
            var loc = new BMap.Point(p.coords.longitude,p.coords.altitude);
            this.map.centerAndZoom(loc, 8);
            this.map.panTo(loc);
        }.bind(this));
    };

    Map.prototype.addControls = function () {
        this.map.addControl(new BMap.NavigationControl());
        this.map.addControl(new BMap.OverviewMapControl());
        this.map.addControl(new BMap.ScaleControl());
        this.map.addControl(new BMap.MapTypeControl());
        this.map.addControl(new BMap.CopyrightControl());
        this.map.addControl(new BMap.GeolocationControl());
        this.map.addControl(new PositionButton(this.map));
    };

    window.Map = Map;
})();
