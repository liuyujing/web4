/**
 * Created by liuyujing on 2016/11/9.
 */
(function () {

    function AddControlView(_min,_max,superEle) {
        this.min = _min;
        this.max = _max;
        this.chooseNum = 0;//用户选择的数量
        var bgView;
        this.showControlView = function () {
            //创建控制按钮的 底部视图
            bgView = document.createElement("div");
            //把整个控制视图 放到了 传过来的位置
            superEle.appendChild(bgView);

            var lessButton = document.createElement("p");
            var showResultLable = document.createElement("p");
            var moreButton = document.createElement("p");

            lessButton.className = "show-control-view";
            showResultLable.className = "show-control-view";
            moreButton.className = "show-control-view";

            bgView.className = "bg-view";

            bgView.appendChild(lessButton);
            bgView.appendChild(showResultLable);
            bgView.appendChild(moreButton);

            lessButton.textContent = "-";
            moreButton.textContent = "+";
            showResultLable.textContent = this.chooseNum;

            var self = this;
            //lessButton.onclick 这里面的this
            //与外面的this(通过AddControlView创建出来的对象) 不是同一个对象
            lessButton.onclick = function () {
                // this
                if (self.chooseNum == self.min){
                    self.chooseNum = self.min+1;
                }
                showResultLable.textContent = --self.chooseNum;
            };

            moreButton.onclick = function () {
                if (self.chooseNum == self.max){
                    self.chooseNum = self.max-1;
                }
                showResultLable.textContent = ++self.chooseNum;
            };
        }
        this.removeView = function () {
            superEle.removeChild(bgView);
        }
    }

    window.AddControlView = AddControlView;
})();
