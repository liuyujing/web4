/**
 * Created by liuyujing on 2016/11/29.
 */
(function () {

    $.fn.imageNav = function (list) {
        var self = this;
        function createView() {
            var bgView = $("<div class='imageNav-bgView'></div>");
            $(list).each(function () {
                var item = $("<div class='imageNav-item'><img src="+this.image+" width=50> <span>"+this.title+"</span><p>"+this.message+"</p></div>");

                bgView.append(item);

                item.hover(function () {

                    $(this).find("p").toggle("clip",300);
                    $(this).addClass("imageNav-item-active",200);

                },function () {

                    $(this).find("p").toggle("clip",300);
                    $(this).removeClass("imageNav-item-active");


                });
            });
            return bgView;
        }


        this.append(createView());
    };

    $(".imageNav-container").imageNav([{
        image:"3437690_04.jpg",
        title:"京东",
        message:"限时特价"
    },{
        image:"3437690_04.jpg",
        title:"京东",
        message:"限时特价"
    },{
        image:"3437690_04.jpg",
        title:"京东",
        message:"限时特价"
    },{
        image:"3437690_04.jpg",
        title:"京东",
        message:"限时特价"
    },{
        image:"3437690_04.jpg",
        title:"京东",
        message:"限时特价"
    }])

})();
