/**
 * Created by liuyujing on 2016/11/8.
 */
(function () {


    function createView(row) {
        var SPACE = 5;
        var width = (600-(row+1)*SPACE)/row;
        var bgView = document.createElement("div");
        bgView.className = "bg-view";

        for (var i=0;i<row*row;i++){
            var item = document.createElement("div");
            item.className = "item";
            item.style.cssText = "width:"+width+"px;height:"+width+"px;background:red;margin: "+SPACE+"px 0 0 "+SPACE+"px;float:left";
            bgView.appendChild(item);

            item.onclick = function () {
                document.body.removeChild(bgView);
                document.body.appendChild(createView(++row));
            }
        }

        return bgView;
    }

    function init() {
        document.body.appendChild(createView(2));
    }

    init();

})();