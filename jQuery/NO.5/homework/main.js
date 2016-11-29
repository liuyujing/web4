/**
 * Created by liuyujing on 2016/11/27.
 */
(function () {

    var index = 1;
    var id = 1;
    var httpClient = new HTTPClient();
    function loadData() {

        httpClient.get("http://apis.baidu.com/tngou/book/classify",function (data,error) {
            console.log(data,error);
            $(".header").navbar(data.tngou,function (data,error) {
                console.log("http://apis.baidu.com/tngou/book/list?id="+data.id+"&page="+index+"&rows=10");
                loadDeatail(data.id);

            })
        });
    }

    function loadDeatail(pageID) {

        if (id!=pageID){
            $(".content").empty();
        }
        id = pageID||id;

        httpClient.get("http://apis.baidu.com/tngou/book/list?id="+id+"&page="+ index++ +"&rows=10",function (data,error) {
            console.log("c",data,error);
            $(".content").contentList(data.list,function (data,error) {
                // console.log(data);
                location.href = "detailPage.html?id="+data.id+"";
            });
        });
    }

    $(window).scroll(function () {
        if ($(document).scrollTop()>=$(document).height()-$(window).height()){
            console.log("111");

            ++index;
            loadDeatail(index);
        }
    });
    loadData();
    loadDeatail(1);

})();
