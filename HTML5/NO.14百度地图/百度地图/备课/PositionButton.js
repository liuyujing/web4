/**
 * Created by liuyujing on 2017/1/5.
 */
(function () {

    function PositionButton(map) {
        this.map = map;
        this.init();
        this.addEventListener();
    }

    PositionButton.prototype = new BMap.Control();

    PositionButton.prototype.init = function () {
        this.button = document.createElement("button");
        document.body.appendChild(this.button);

        this.button.textContent = "定位";
        this.button.className = "location-button";
    };

    PositionButton.prototype.addEventListener = function () {
        this.button.onclick = function () {
            this.getPosition();
        }.bind(this);
    };

    PositionButton.prototype.getPosition = function () {
        navigator.geolocation.getCurrentPosition(function (p) {
            var loc = new BMap.Point(p.coords.longitude,p.coords.altitude);
            this.map.centerAndZoom(loc, 8);
            this.map.panTo(loc);
        }.bind(this));
    };

    window.PositionButton = PositionButton;
})();
