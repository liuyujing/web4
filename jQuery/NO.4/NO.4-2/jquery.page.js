/**
 * Created by liuyujing on 2016/11/25.
 */
(function () {

    $.fn.page = function (pageNum,callback) {
        pageNum = pageNum||5;

        var titles = function () {
            var list = ["←","首页"];
            for (var i=1;i<=pageNum;i++){
                list.push(i);
            }
            list = list.concat(["末页","→"]);

            return list;
        };

        var titleList = titles();

        //捕捉异常
        try {
            console.log(titleList);
        }catch (error){
            console.log(error);
        }

        var container = function () {
            var bgView = $("<ul class='pageControl'></ul>");

            $(titleList).each(function () {

                var item = $("<li><a>"+this+"</a></li>");

                bgView.append(item);
            });

            return bgView;
        };

        this.html(container());

    };

})();
