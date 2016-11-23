/**
 * Created by liuyujing on 16/10/8.
 */
/*
* 封装色块的类
* */
(function () {
    function ColorView(rowNum,color,opacity) {

        //边距
        var space = 5;
        //游戏界面的总宽度
        var gameViewWidth = 400;
        //色块的宽度
        //总共有多少个边距 = 行数+1
        var spaceNum = rowNum+1;
        // 总边距：总共有多少个边距*边距
        var allSpaceWidth = spaceNum*space;
        // 所有色块所占的宽度 = 总宽度-总边距
        var allColorWidth = gameViewWidth-allSpaceWidth;
        // 每一个色块的宽度 = 所有色块所占的宽度/行数
        var width = allColorWidth/rowNum;

    //    创建色块
        var colorView = document.createElement("div");

        colorView.style.cssText = "width:"+width+"px;height:"+width+"px;background:"+color+";opacity:"+opacity+";float:left;margin:"+space+"px 0 0 "+space+"px";
        // colorView.style.width = width+"px";

        // var age = 20;
        // var string = "年龄："+age+"";

        return colorView;
    }
    window.ColorView = ColorView;
})();
