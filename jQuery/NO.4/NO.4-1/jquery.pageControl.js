/**
 * Created by liuyujing on 2016/11/25.
 */
(function () {

    $.fn.PageControl = function (pageNums,callback) {
        var pages = pageNums||9;
        var curIndex = 0;
        //初始化标题数组
        var titles = function () {
            var list = ["←","首页"];

            for (var i=1;i<=pages;i++){
                list.push(i);
            }
            list = list.concat(["末页","→"]);
            return list;
        };


        var container = function () {

            var titleList = titles();

            //创建容器
            var pageContainer = $("<ul class='pageControl'></ul>");

            for (var i=0;i<titleList.length;i++){

                var item = $("<li><a>"+titleList[i]+"</a></li>");
                if (i==2){
                    item.addClass("pageControl-active");
                }
                pageContainer.append(item);
                if (i<titleList.length-2&&i>=2){
                    //添加移入移出事件
                    item.hover(function () {
                        $(this).addClass("pageControl-pointer");
                    },function () {
                        $(this).removeClass("pageControl-pointer");
                    });

                    //添加点击事件
                    item.click(function () {
                        changeSelectedStatus($(this));
                        curIndex = parseInt($(this).text())-1;
                        console.log(curIndex);
                    });
                }
            }

            //上一页
            pageContainer.children(":first").click(function () {
                console.log(curIndex);

                if (curIndex>0){
                    --curIndex;
                    var index = curIndex+2;
                    changeSelectedStatus(pageContainer.children(":eq("+index+")"));
                }
            });

            //下一页
            pageContainer.children(":last").click(function () {
                if (curIndex<titleList.length-5){
                    ++curIndex;
                    var index = curIndex+2;
                    changeSelectedStatus(pageContainer.children(":eq("+index+")"));
                }
            });

            //首页
            pageContainer.children(":eq(1)").click(function () {
                curIndex = 0;
                var index = curIndex+2;
                changeSelectedStatus(pageContainer.children(":eq("+index+")"));

            });

            var toLastIndex = titleList.length-2;
            //末页
            pageContainer.children(":eq("+toLastIndex+")").click(function () {
                curIndex = titleList.length-5;
                var index = curIndex+2;
                changeSelectedStatus(pageContainer.children(":eq("+index+")"));

            });

            function changeSelectedStatus(ele) {
                pageContainer.find("li").removeClass("pageControl-active");
                ele.addClass("pageControl-active");
                if (callback){
                    callback(curIndex);
                }
            }
            return pageContainer;
        };



        this.html(container());
    }

})();
