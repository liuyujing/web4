/**
 * Created by liuyujing on 2016/11/8.
 */
(function () {

    function createView(row) {
        row = row||2;
        var SPACE = 5;//小色块之间的间距
        var WIDTH = 600;
        //获得所有间距的宽度 SPACE*(row+1)
        //每一个小色块的宽度 (总共宽度-所有间距的宽度)/行数
        var itemWidth = (WIDTH-SPACE*(row+1))/row;

        var bgView = document.createElement("div");
        bgView.className = "bg-view";

        for (var i=0;i<row*row;i++){
            var itemView = document.createElement("div");
            itemView.className = "item-view";
            itemView.style.cssText = "width:"+itemWidth+"px;height:"+itemWidth+"px;background:red;float:left;margin:"+SPACE+"px 0 0 "+SPACE+"px";
            bgView.appendChild(itemView);
            
            itemView.onclick = function () {
                document.body.removeChild(bgView);
                document.body.appendChild(createView(++row));
            }
        }

        return bgView;
    }

    function init() {
        document.body.appendChild(createView());
    }

    init();

})();