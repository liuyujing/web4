/**
 * Created by liuyujing on 2016/11/28.
 */
(function () {

    $(".effect").click(function () {
        // $(this).addClass("effectAction",1000,"easeInOutBounce");
        $(this).addClass("effectAction2",1000,"easeInOutBounce",function () {
            $(this).remove();
        });

    });

    $(".control").click(function () {
        // $(".blind").toggle("blind");
        // $(".blind").effect("blind",{direction:"horizontal"});
        // $(".blind").toggle("bounce",{times: 3});
        // $(".blind").effect("bounce",{times: 6,distance:50});
        // $(".blind").effect("explode",{pieces:16});
        $(".blind").toggle("explode",{pieces:16});

    });



    //让元素  可以拖拽
    //{axis:"x"}
    $(".dragView").draggable({grid:[100,100],scope:"num1",start:function () {
        console.log("开始");
    }});

    //让元素  可以放置
    $(".dropView").droppable({scope:"num1",drop:function () {
        alert("drop");
    },out:function () {
        alert("out");
    },activate:function () {
        $(this).css({"background-color":"red"});
    }});

//    图书分类
//    1.数学课本 2.web前端开发 3.天龙八部 4.英语课本 5.IT技术杂谈
//    书的类别：1.教科书  2.IT技术 3.小说
//    把对应类型的书  拖至到  对应列表 删除拖动的书
//    拖动的时候  书的类别元素 提醒 可放置的位置

    $(".mathBook").draggable({scope:"book"});
    $(".webBook").draggable({scope:"it"});
    $(".tianLongBaBu").draggable({scope:"story"});
    $(".englishBook").draggable({scope:"book"});
    $(".itTall").draggable({scope:"story"});

    var list = [{className:".book",scope:"book"},{className:".IT",scope:"it"},{className:".story",scope:"story"}];

    $(list).each(function () {
        $(this.className).droppable({scope:this.scope,drop:function (event,ui) {
            console.log(ui);
            ui.draggable.remove();
            $(this).css({border:""});
        },activate:function () {
            $(this).css({border:"1px solid #FF5831"});
        }});
    });

    /*
    $(".book").droppable({scope:"book",drop:function (event,ui) {
        console.log(ui);
        ui.draggable.remove();
        $(this).css({border:""});
    },activate:function () {
        $(this).css({border:"1px solid #FF5831"});
    }});

    $(".IT").droppable({scope:"it",drop:function (event,ui) {
        console.log(ui);
        ui.draggable.remove();
        $(this).css({border:""});
    },activate:function () {
        $(this).css({border:"1px solid #FF5831"});
    }});

    $(".story").droppable({scope:"story",drop:function (event,ui) {
        console.log(ui);
        ui.draggable.remove();
        $(this).css({border:""});
    },activate:function () {
        $(this).css({border:"1px solid #FF5831"});
    }});
*/

    //折叠面板
    $(".accordion").accordion({active:2,animate: "easeInOutBounce",activate:function (event,ui) {
        console.log(ui.newHeader.text(),ui.newPanel.text());
        console.log(ui.oldHeader.text(),ui.oldPanel.text());
    }});

    //自动完成控件
    $("#input").autocomplete({source:["aaa","att","aff","bbb","bte"],select:function (event,ui) {
        console.log(ui);
    }});


    $("#date").datepicker();


    $(".tabsContainer").tabs();

})();
