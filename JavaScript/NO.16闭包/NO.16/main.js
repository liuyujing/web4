/**
 * Created by liuyujing on 2016/11/20.
 */
// window.qq = window.qq||{};
// window._ = window.qq;

(function () {
/*
    function mm() {
        var a = 20;
        return function () {
            console.log(a);
        }
    }

    mm()();


    function changeColor(color) {

        return function () {
            this.style.background = color;
        }
    }
    var div = document.getElementById("test");
    div.addEventListener("click",changeColor("red"));

    var items = document.getElementsByClassName("item");
    for (var i=0;i<items.length;i++){
        items[i].onclick = function (index) {

            return function () {
                alert(index);
            }
        }(i);
    }

    function throttling(func,delay) {
        var timer = null;
        return function () {
            clearTimeout(timer);
            var self = this;
            timer = setTimeout(function () {
                func.apply(self,arguments);
            },delay);
        }
    }

    window.onresize = throttling(function () {
        console.log("move");
    },500);


    $("div").click(function () {
        alert(this);
    });
    $("#test").hover(function () {
        $("ul").show();
    },function () {
        $("ul").hide();
    });
*/

    // $("body *").css({"background":"red"});
    // $("div.item").css({"background":"yellow"});
    // $(".vvv:last").css({"background":"yellow"});
    // $("li:first-child").css({"color":"yellow"});
    // $("li:even").css({"color":"yellow"});
    // $("li:gt(2)").css({"color":"yellow"});
    // $(":header").css({"color":"red"});
    // function an() {
    //     $(".vvv:last").animate({"width":"200px"},"show");
    //
    // }
    // an();
    // $("body").click(function () {
    //     $(":animated").css({"background":"red"});
    // });
    //
    // var cc = $("<div>1232131</div>");
    // $("body").append(cc);
    // // cc.remove();
    // $("body").empty();

    var cc = $("<div>1232131</div>");
    cc.text("25345342");
    cc.html("<p>fffff</p>");
    $("body").append(cc);

    $(".class1").click(function () {
        // $(this).toggleClass("class2");
        // $(this).hide(1000,function () {
        //     $(this).show(1000);
        // });
        // $(cc).toggle(1000);
        // $(cc).fadeOut(1000,function () {
        //        $(this).fadeIn(1000);
        // });
        // $(cc).fadeTo(1000,0.2,"swing");
        // $(cc).fadeOut(3000);
        // $(cc).slideUp(3000);
        $(cc).animate({width:"3px"},3000,"swing",function () {
            $(this).remove();
        });
    });

    // $(cc).click(function () {
    //     $(this).stop(true,true);
    // });

    // $(cc).bind("click","red",function (event) {
    //     console.log(event);
    //     $(this).stop();
    //     $(this).css({background:event.data});
    // });



    // $("#ul1").delegate("li","click","red",function (event) {
    //
    //     $(this).css({color:event.data});
    // });


    // $("#ul1").on("click","li","red",function (event) {
    //
    //     $(this).css({color:event.data});
    // });

    $("#ul1").one("click","li","red",function (event) {

        $(this).css({color:event.data});
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

