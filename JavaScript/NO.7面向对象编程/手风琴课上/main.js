/**
 * Created by liuyujing on 2016/11/8.
 */
(function () {

    //创建 每一个 小的手风琴的函数
    function itemView(title,content,isShow) {

        title = title||"";
        content = content||"";
        isShow = isShow||false;

        var bgView = document.createElement("div");
        var titleView = document.createElement("h3");
        var contentView = document.createElement("p");
        titleView.innerHTML = title;
        contentView.innerHTML = content;
        contentView.style.display = isShow?"block":"none";

        bgView.onclick = function () {
            // console.log(bgView.childNodes[1]);
            contentView.style.display = contentView.style.display=="block"?"none":"block";
        };

        bgView.appendChild(titleView);
        bgView.appendChild(contentView);

        return bgView;
    }

    //创建所有 手风琴的函数
    function createView(list) {

        for (var i=0;i<list.length;i++) {
            var info = list[i];
            document.body.appendChild(itemView(info.title,info.content,false));
        }

    }

    function init() {

        var list = [{title:"标题",content:"内容"},{title:"标题",content:"内容"},{title:"标题",content:"内容"}];

        createView(list);
    }

    init();

})();
