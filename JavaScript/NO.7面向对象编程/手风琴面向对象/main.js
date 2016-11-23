/**
 * Created by liuyujing on 2016/11/8.
 */
(function () {

    // var ItemView = function () {
    //
    // }


    function ItemView (title,content,_isShow) {
        this.bgView = document.createElement("div");
        this.titleView = document.createElement("h3");
        this.contentView = document.createElement("p");
        this.titleView.innerHTML = title;
        this.contentView.innerHTML = content;

        this.bgView.appendChild(this.titleView);
        this.bgView.appendChild(this.contentView);
        this.isShow = _isShow;

        this.contentView.style.display = this.isShow?"block":"none";

        var self = this;
        //外面的this是通过 ItemView创建出来的对象
        console.log(this);
        this.bgView.onclick = function () {

            //里面的this 是调用onclick的对象（bgView）
            console.log(this);
            console.log(self);

            self.isShow = !self.isShow;
            self.contentView.style.display = self.isShow?"block":"none";
        };

    }

    var itemView = new ItemView("标题","内容",false);
    document.body.appendChild(itemView.bgView);
    itemView.contentView.innerHTML = "一些内容";
    itemView.titleView.innerHTML = "这是个标题";


    
})();
