/**
 * Created by liuyujing on 2016/12/16.
 */

(function () {

    /*
     * {row:10,heights:[100,30,20,500]}
     * row 表格的行数
     * heights 需要显示 数据的数组
     * */
    function DrawTable(canvas, info) {
        this.tableInfo = info;

        this.context = canvas.getContext("2d");

        this.lineWidth = 2;
        //设置表格的宽高
        this.height = canvas.height - this.lineWidth;
        this.width = canvas.width - this.lineWidth;

        this.row = info.row;
        //每一行的行高
        this.lineHeight = this.height/this.row;

        //设置 矩形的宽度
        this.itemWidth = 20;

        //列数
        this.column = this.tableInfo.heights.length;
        //计算 矩形之间的间距
        this.itemSpace = (this.width-this.itemWidth*this.column)/this.column;

        this.drawTable();
    }


    DrawTable.prototype.addLine = function (beginPoint,endPoint) {

        this.context.beginPath();
        this.context.lineWidth = this.lineWidth;
        this.context.moveTo(beginPoint.x+this.lineWidth/2,beginPoint.y+this.lineWidth/2);
        this.context.lineTo(endPoint.x+this.lineWidth/2,endPoint.y+this.lineWidth/2);

        this.context.stroke();

    };

    DrawTable.prototype.drawRect = function (x,height) {

        this.context.beginPath();

        var color = this.context.createLinearGradient(0,0,0,this.height);
        color.addColorStop(0,"red");
        color.addColorStop(0.5,"#FFB100");
        color.addColorStop(1,"#28FF84");

        this.context.fillStyle = color;

        var y = this.height - height;
        this.context.fillRect(x,y,this.itemWidth,height);

    };

    DrawTable.prototype.drawTable = function () {

        this.addLine({x:0,y:0},{x:0,y:this.height});
        this.addLine({x:this.width,y:0},{x:this.width,y:this.height});

        for (var i=0;i<=this.row;i++){
            this.addLine({x:0,y:this.lineHeight*i},{x:this.width,y:this.lineHeight*i});
        }

        var heights = this.tableInfo.heights;
        for (var j=0;j<heights.length;j++){

            this.drawRect(this.itemSpace/2+(this.itemWidth+this.itemSpace)*j,heights[j]);

        }

    };

    window.DrawTable = DrawTable;

})();
