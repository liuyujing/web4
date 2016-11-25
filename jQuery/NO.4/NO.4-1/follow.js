/**
 * Created by liuyujing on 2016/11/25.
 */
(function () {
    $.fn.follow = function () {
        var self = $(this);
        self.css({position: "absolute"});
        function move(event) {
            console.log(event);
            var width = parseFloat(self.css("width"));
            var height = parseFloat(self.css("height"));
            console.log(width);
            self.css({left: event.clientX-width/2,top:event.clientY-height/2});
        }

        var doucment = $(document.body);
        function stopMove() {
            console.log("....");
            doucment.unbind("mousemove",move);
        }
        doucment.bind({"mousemove":move,"dblclick":stopMove});

    }
})();