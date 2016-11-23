/**
 * Created by liuyujing on 2016/11/8.
 */

(function () {

    var lastOpen;
    function createItemViwe(title,content,isShow) {
        isShow = isShow||"none";

        var bgView = document.createElement("div");
        var titleItem = document.createElement("h3");
        var contentItem = document.createElement("p");

        titleItem.innerHTML = title;
        contentItem.innerHTML = content;

        contentItem.style.display = isShow;

        bgView.appendChild(titleItem);
        bgView.appendChild(contentItem);

        bgView.onclick = function () {
            if (lastOpen){
                lastOpen.childNodes[1].style.display = "none";
            }
            var dis = this.childNodes[1].style.display;
            this.childNodes[1].style.display = dis=="none"?"block":"none";
            lastOpen = this;
        };

        return bgView;
    }

    function createView(list) {
        for (var i=0;i<list.length;i++){
            var info = list[i];
            document.body.appendChild(createItemViwe(info.title,info.content));
        }
    }

    function init() {
        var list = [{title:"标题1",content:"内容部分内容部分内容部分内容部分内容部分内容部分内容部分内容部分"},{title:"标题1",content:"内容部分内容部分内容部分内容部分内容部分内容部分内容部分内容部分"},{title:"标题1",content:"内容部分内容部分内容部分内容部分内容部分内容部分内容部分内容部分"}];
        createView(list);
    }

    init();
})();