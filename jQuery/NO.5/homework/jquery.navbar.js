/**
 * Created by liuyujing on 2016/11/27.
 */
(function () {

    $.fn.navbar = function (list,callback) {
        var bar = $("<ul class='navbar-container'></ul>");
        $(list).each(function () {
            var data = this;
           var item = $("<li>"+this.name+"</li>");
            bar.append(item);
            item.hover(function () {
                $(this).addClass("navbar-heighlight");
            },function () {
                $(this).removeClass("navbar-heighlight");
            });
            item.click(function () {
                $(this).parent().find(".navbar-active").removeClass("navbar-active");
                $(this).addClass("navbar-active");
                if (callback){
                    callback(data);
                }
            });
        });
        this.append(bar);
    }

})();