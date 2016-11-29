/**
 * Created by liuyujing on 2016/11/27.
 */
(function () {
    
    $.fn.contentList = function (list,callback) {

        var container = $("<ul class='contentList'></ul>");

        $(list).each(function () {
            var data = this;
            var item = $("<li><img src=http://tnfs.tngou.net/img"+data.img+" alt=''><h3>《"+data.name+"》</h3><span>"+data.author+"</span><p>"+data.summary+"</p></li>");
            item.click(function () {
                if (callback){
                    callback(data);
                }
            });
            container.append(item);
        });

        this.append(container);
    }
    
})();