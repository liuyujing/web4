/**
 * Created by liuyujing on 2017/1/10.
 */
(function () {

    function Map() {

        this.showMap();
        this.addEventListener();
        this.autoComplete();
        // this.addWalkingRoute();
        // this.addDrivingRoute();
        this.addTransitRoute();
        this.addPanoramaControl();
        this.addPanorama();
    }

    Map.prototype.showMap = function () {
        this.map = new BMap.Map("map");
        this.map.centerAndZoom("北京",15);
    };

    Map.prototype.addSearchInfoWindow = function (point) {
        /*
        * 包含在 BMapLib 中
        * SearchInfoWindow 构造函数
        * map
        * 显示的内容
        * 可选项
        * */

        var searchInfoWindow = new BMapLib.SearchInfoWindow(this.map, "信息窗口", {
            title: "信息框1", //标题
            panel : "panel", //检索结果面板
            enableAutoPan : true, //自动平移
            searchTypes :[
                BMAPLIB_TAB_FROM_HERE, //从这里出发
                BMAPLIB_TAB_SEARCH   //周边检索
            ]
        });

        var marker = new BMap.Marker(point,{title:"检索的信息窗口"});
        this.map.addOverlay(marker);

        marker.addEventListener("mouseover",function () {
            searchInfoWindow.open(this);
        });
    };

    Map.prototype.addEventListener = function () {

        this.map.addEventListener("click",function (event) {
        //    type, target, point, pixel, overlay

            // this.addSearchInfoWindow(event.point);

            // this.addMineOverlay(event.point,"xxx");

            // this.geoCoder("实兴大街","北京");

            this.geoDecoder(event.point);

        }.bind(this));

    };

    Map.prototype.addMineOverlay = function (point,text) {
        var mineOverlay = new MineOverlay(point,text);
        this.map.addOverlay(mineOverlay);
        // this.map.panTo(point);
    };

    Map.prototype.geoCoder = function (address,cityName) {
        var coder = new BMap.Geocoder();
        coder.getPoint(address,function (result) {

            console.log(result);
            var marker = new BMap.Marker(result,{title:address});
            this.map.addOverlay(marker);
            this.map.panTo(result);

        }.bind(this),cityName);

    };

    //把地理位置（坐标点）-> 字符串
    //反地理编码  逆地理编码
    Map.prototype.geoDecoder = function (point) {

        var decoder = new BMap.Geocoder();
        decoder.getLocation(point,function (result) {
            console.log(result);

            var marker = new BMap.Marker(result.point,{title:result.address});
            this.map.addOverlay(marker);
            this.map.panTo(result.point);

            var info = result.addressComponents;
            var content = "<h3>"+info.street+""+info.streetNumber+"</h3><p>"+info.province+"<br>"+info.city+"<br>"+info.district+"</p>";
            var infoWindow = new BMap.InfoWindow(content);

            marker.addEventListener("rightclick",function () {
                marker.openInfoWindow(infoWindow);
            });

        }.bind(this));
    };

    //添加自动完成
    Map.prototype.autoComplete = function () {
        var auto = new BMap.Autocomplete({location:"北京",input:"searchInput",onSearchComplete:function (result) {
            console.log(result);
        }});

    };


    //步行规划
    Map.prototype.addWalkingRoute = function () {

        //{onSearchComplete:function (result) {}}
        //,autoViewport:true :LocalCity无效
        var route = new BMap.WalkingRoute("北京",{renderOptions:{map:this.map,panel:"showRouteResult"}});
        //发起搜索 起始点  结束点
        route.search("实兴大街","天安门");
        route.setSearchCompleteCallback(function (results) {
            console.log(results);
        });
    };

    //添加 驾车路线规划
    Map.prototype.addDrivingRoute = function () {

        var route = new BMap.DrivingRoute(this.map,{policy:BMAP_DRIVING_POLICY_LEAST_TIME,renderOptions:{map:this.map,panel:"showRouteResult"},onSearchComplete:function (result) {
            if (result.taxiFare) {
                console.log(result);
                var m = result.taxiFare.distance/1000;
                var money = result.taxiFare.day.totalFare;
                alert(m+"km,"+money+"元");
            }
        }});
        route.search("北京","西安");

    };

    Map.prototype.addTransitRoute = function () {

        var route = new BMap.TransitRoute(this.map,{renderOptions:{map:this.map,panel:"showRouteResult"},policy:BMAP_TRANSIT_POLICY_LEAST_TIME});
        route.search("实兴大街","北京西站");
    };


    Map.prototype.addPanoramaControl = function () {

        var panoramaControl = new BMap.PanoramaControl();

        this.map.addControl(panoramaControl);
    };

    Map.prototype.addPanorama = function () {
        var panorama = new BMap.Panorama("panorama-container");

        var coder = new BMap.Geocoder();
        coder.getPoint("实兴大街",function (point) {
            panorama.setPosition(point);
        });

    };

    window.Map = Map;
})();