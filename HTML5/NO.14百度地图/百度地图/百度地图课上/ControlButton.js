/**
 * Created by liuyujing on 2017/1/5.
 */
(function () {

    /*
    * 自定义 控件 需要注意的事项
    * 1.必须继承Control类
    * 2.添加到 地图的容器中
    * 3.必须添加默认位置 和 默认的偏移量
    * 4.重写父类 initialize 初始化的函数 需要有一个 dom的返回值
    * */
    function ControlButton(map,control) {
        this.map = map;
        this.control = control;
        // this.init();
        this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
        this.defaultOffset = new BMap.Size(10, 10);
    }

    //✭✭✭✭✭自定义 控制控件 必须继承 Control类
    ControlButton.prototype = new BMap.Control();

    ControlButton.prototype.initialize = function () {
        this.button = document.createElement("button");
        var isShow = this.control.isVisible();
        this.button.textContent = isShow?"隐藏控件":"显示控件";
        this.map.getContainer().appendChild(this.button);

        this.button.onclick = function () {

            if (this.control.isVisible()){
                this.control.hide();
                this.button.textContent = "显示控件";
            }else {
                this.control.show();
                this.button.textContent = "隐藏控件";
            }

        }.bind(this);

        return this.button;
    };

    window.ControlButton = ControlButton;
    
})();