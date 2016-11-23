/**
 * Created by liuyujing on 2016/11/21.
 */
(function () {

    // Array.prototype.each = function (callback) {
    //     for (var i=0;i<this.length;i++){
    //         if (callback){
    //             callback(this[i],i,this);
    //         }
    //     }
    // };
    // var list = [33,55,77,88];
    //
    // list.each(function (item,index,array) {
    //     console.log(item,index,array);
    // });

    // Array.prototype.isEmpty = function () {
    //     return this.length<=0;
    // };
    // console.log(list.isEmpty());



    $(document).ready(function () {

        var checks = $(".choose");

        $(".all").click(function () {
            var selected = checks.prop("checked");
            checks.prop("checked",!selected);
        });

        $(".inverse").click(function () {
            checks.each(function () {
                var selected = $(this).prop("checked");
                $(this).prop("checked",!selected);
            })
        });

    });

    $("#list-container").hover(function () {
        $(".list").slideDown(300);
        $(".list li").hover(function () {
            $(this).css({opacity: 0.5});
            $(this).click(function () {
                $(this).parent().slideUp(300);
                $("#list-container span").text($(this).text());
            });
        },function () {
            $(this).css({opacity: 1.0});
        });
    },function () {
        $(".list").slideUp(300);
    });


    $(".card").click(function () {
        $(this).animate({width:"0"},500,function () {
            $(this).animate({width:"200"},500);

        });
    });


    var items = [];

    $(".change").delegate("li","click",true,function () {
        items.push($(this));
        $(this).css({opacity:0.5});
        if (items.length>=2){
            var temp = items[1].html();
            items[1].html(items[0].html());
            items[0].html(temp);
            items.forEach(function (item) {
                item.css({opacity:1.0});
            });
            items=[];
        }
    });

})();
