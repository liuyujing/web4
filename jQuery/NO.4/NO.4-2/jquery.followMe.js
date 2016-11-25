/**
 * Created by liuyujing on 2016/11/25.
 */

(function () {

    //单击 跟随鼠标移动
    //双击的时候  固定位置
    $.fn.FollowMe = function () {

        var self = $(this);

        self.css({position: "absolute","margin-top": 0,cursor:"move"});

        function move(event) {
            // a:herf
            // input
            //可以阻止元素的默认事件
            event.preventDefault();

            //获得到 添加followMe这个事件 元素的 宽高
            //让鼠标的指针 在元素的中心点
            var width = parseFloat(self.css("width"));
            var height = parseFloat(self.css("height"));

            var x = event.clientX - width/2;
            var y = event.clientY - height/2;

            self.css({left:x,top:y});
        }

        //绑定鼠标移动的事件
        $(document).bind("mousemove",move);

        //鼠标抬起的事件
        function up() {
            //解除绑定 鼠标移动的事件
            $(document).unbind("mousemove",move);
            self.css({cursor:"pointer"});
        }

        $(this).bind("mouseup",up);

    };

})();
