/**
 * Created by liuyujing on 2016/11/27.
 */
(function () {

    function getData() {
        var id = location.search.replace("?id=","");
        // console.log("http://apis.baidu.com/tngou/book/show?id="+id+"");
        var httpClient = new HTTPClient();
        httpClient.get("http://apis.baidu.com/tngou/book/show?id="+id+"",function (data) {
            var container = $("<div></div>");
            var title = $("<h1>"+data.name+"</h1>");
            var sub = $("<p>"+data.summary+"</p>");

            var list = $(data.list);
            var content = $("<ul></ul>");


            list.each(function () {
               var item = $("<li></li>");
                var title = $("<h1>"+this.title+"</h1>");

                var detail = $("<p></p>");

                detail.append($(this.message));
                item.append(detail);
                item.append(title);
                content.append(item);
            });

            container.append(title);
            container.append(sub);
            container.append(content);
            $(document.body).append(container);
            console.log(data);
        });


    }


    getData();

})();