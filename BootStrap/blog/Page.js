/**
 * Created by liuyujing on 2017/1/13.
 */
(function () {

    function Page(data) {

        /*<div class="list-group">
         <a href="" class="list-group-item">1111</a>
         </div>*/

        this.data = data;

        this.showListView();
    }

    Page.prototype.showListView = function () {
        var listView = $("<div class='list-group'></div>");

        $(this.data).each(function () {
            var info = this.pageContent;

            var item = $("<a class='list-group-item'><h3>"+info.title+"</h3><p>"+info.des+"</p></a>");
            listView.append(item);
        });

        $(".container").append(listView);
    };

    window.Page = Page;




})();