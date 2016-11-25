/**
 * Created by liuyujing on 2016/11/24.
 */
(function () {

    // var a = 2;
    //
    // var b = 30;
    //
    // if (a>b){
    //
    // }
    //
    $(".move").click(function () {
        $(this).follow();
    });
    //
    // $(".show").click(function () {
    //     $(this).showContent();
    // });
    //
    // try {
    //
    //     if (a<30){
    //         throw "代码异常";
    //     }
    // }catch (error) {
    //     alert(error);
    // }
    // var drage = $(".drage");
    // drage.draggable({appendTo:$(this)});
    // var drop = $(".drop");
    // drop.droppable({drop:function (event,ui) {
    //     alert("");
    // }});








    $("#pageControl").PageControl(10,function (index) {
        console.log(index);
    });


})();
