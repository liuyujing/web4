/**
 * Created by liuyujing on 2016/11/25.
 */
(function () {

    $(".container").PageControl(9,function (pageIndex) {
        console.log(pageIndex);
    });


    $(".showContent").click(function () {
        $(this).showContent();
    });

    $(".move").mousedown(function () {
        $(this).FollowMe();
    });


    $(".showPageControl").page(9);

})();
