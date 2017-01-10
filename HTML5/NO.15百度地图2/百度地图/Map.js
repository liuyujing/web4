/**
 * Created by liuyujing on 2017/1/6.
 */
(function () {

    function Map() {
        this.showMap();
        this.addEventListener();
    }

    Map.prototype.showMap = function () {
        this.map = new BMap.Map("map", {minZoom: 3});
        //禁用双击缩放
        this.map.disableDoubleClickZoom();

        this.moveToCurrentPosition();

        // this.addPointCollection();

        this.infoWindow();
    };

    Map.prototype.moveToCurrentPosition = function () {

        navigator.geolocation.getCurrentPosition(function (loc) {
            this.map.centerAndZoom(new BMap.Point(loc.coords.latitude, loc.coords.longitude), 5);

        }.bind(this));

    };

    Map.prototype.addEventListener = function () {

        this.map.addEventListener("click", function (event) {
            //type, target, point, pixel, overlay
            console.log(event.overlay);

            /*
            var marker = new BMap.Marker(event.point);

            //开启大头针拖拽的功能
            marker.enableDragging();
            event.target.addOverlay(marker);
            //给大头针 添加动画
            marker.setAnimation(BMAP_ANIMATION_DROP);

            marker.addEventListener("dragend", function (event) {
                console.log(event.point);
            })
            */

            new Marker(event.target).addMarker(event.point);

        });

        //右键双击事件
        this.map.addEventListener("rightdblclick", function (event) {
            //清除地图上的所有 覆盖物
            event.target.clearOverlays();
        });

        //地图的右键事件
        this.map.addEventListener("rightclick", function (event) {
            //移除覆盖物
            event.target.removeOverlay(event.overlay);
        });
    };

    //海量点
    Map.prototype.addPointCollection = function () {

        //PointCollection :继承Marker
        var points = [];
        data.data.forEach(function (item) {
            var p = new BMap.Point(item[0],item[1]);
            points.push(p);
        });

        var pointCollection = new BMap.PointCollection(points,{color:"red",shape:BMAP_POINT_SHAPE_WATERDROP});

        //禁用 clearOverlays 清除执行的 覆盖物
        pointCollection.disableMassClear();

        this.map.addOverlay(pointCollection);

    };

    //信息窗口
    Map.prototype.infoWindow = function () {

        var content = document.createElement("div");
        content.innerHTML = "<h3>tttt</h3><p>wertyui</p><a href='http://lbsyun.baidu.com/index.php?title=jspopular/guide/helloworld'>走你！</a>";

        // var infoWindow = new BMap.InfoWindow("12345");
        var infoWindow = new BMap.InfoWindow(content);

        var point = new BMap.Point(116.417854,39.921988);
        var marker = new BMap.Marker(point);
        marker.addEventListener("click",function () {
            this.map.openInfoWindow(infoWindow,point);

        }.bind(this));

        this.map.addOverlay(marker);

    };
    window.Map = Map;

})();