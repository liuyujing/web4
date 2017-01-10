/**
 * Created by liuyujing on 2017/1/5.
 */

(function () {

    function Map() {
        this.showMap();
        this.addControls();
    }

    //显示地图
    Map.prototype.showMap = function () {
        // Point 经纬度的类
        var point = new BMap.Point(116.214022,39.907565);

        //minZoom：设置地图缩放的最小值
        //maxZoom：设置地图的最大值
        //enableMapClick 关闭地图默认的POI(Point of Interest)事件
        this.map = new BMap.Map("map",{minZoom:4,maxZoom:15,enableMapClick:false});
        //设置 地图的中心点  和 缩放比例
        //缩放比例越大  内容越详细
        // this.map.centerAndZoom(point,13);
        this.map.centerAndZoom("北京",4);
        //禁用双击放大
        // this.map.disableDoubleClickZoom();

        //设置地图的类型
        this.map.setMapType(BMAP_PERSPECTIVE_MAP);

        setTimeout(function () {
            //设置 缩放比例
            this.map.setZoom(15);

            var bounds = this.map.getBounds();
            console.log(bounds);

            alert(bounds.containsPoint(point));

            var point2 = new BMap.Point(116.216022,39.907565);
            //获得两点 之间的 距离
            alert(this.map.getDistance(point,point2));

            //获得 地图的中心点
            alert(""+this.map.getCenter().lng+""+this.map.getCenter().lat+"");

            //Overlay:是所有覆盖物的抽象基类，所有覆盖物均Overlay。此类不可实例化 如果自定义 覆盖物也需要继承Overlay
            //Marker：是Overlay的子类 用于显示 标记图像

            //添加覆盖物的步骤
            //1.创建覆盖物对象
            //2.地图对象调用addOverlay去添加覆盖物对象
            var marker = new BMap.Marker(point);
            console.log(marker);
            this.map.addOverlay(marker);

            //隐藏覆盖物
            // marker.hide();


            var imageSize = new BMap.Size(100,100);
            //Icon(图片的路径,显示图片的可视范围) 创建图标对象的构造函数
            var icon = new BMap.Icon("icon.png",imageSize);
            //setImageSize：设置图片的大小
            icon.setImageSize(imageSize);

            marker.setIcon(icon);

            //给marker对象 添加一个click的监听事件
            marker.addEventListener("click",function () {

                // 点击修改 图标的图片路径
                icon.setImageUrl("icon2.png");
                marker.setIcon(icon);
            });

            this.map.panTo(point);

        }.bind(this),5000);

        // this.moveToCurrentPosition();

    };

    //定位当前的位置
    Map.prototype.moveToCurrentPosition = function () {

        // var position = new BMap.Geolocation();
        // position.getCurrentPosition(function (point) {
        //    console.log("定位到当前位置:",point);
        //     this.map.panTo(point.point);
        // }.bind(this));

        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("定位到当前位置:",position);

            this.map.panTo(new BMap.Point(position.coords.longitude,position.coords.latitude));

        }.bind(this));
    };

    // 给地图 添加  控件
    Map.prototype.addControls = function () {

        var size = new BMap.Size(300,100);
        var navControl = new BMap.NavigationControl();
        this.map.addControl(navControl);

        navControl.setAnchor(BMAP_ANCHOR_TOP_RIGHT);
        navControl.setOffset(size);
        navControl.hide();

        var controlButton = new ControlButton(this.map,navControl);
        this.map.addControl(controlButton);
        controlButton.setAnchor(BMAP_ANCHOR_BOTTOM_RIGHT);

        var overviewMap = new BMap.OverviewMapControl();
        overviewMap.changeView();
        overviewMap.setSize(new BMap.Size(400,400));
        overviewMap.addEventListener("viewchanged",function (event) {
            console.log(event);
            if (event.isOpen){
                alert("打开了");
            }
        });
        this.map.addControl(overviewMap);
        this.map.addControl(new BMap.ScaleControl());
        this.map.addControl(new BMap.MapTypeControl());
        this.map.addControl(new BMap.CopyrightControl());
        this.map.addControl(new BMap.GeolocationControl());
    };

    window.Map = Map;

})();