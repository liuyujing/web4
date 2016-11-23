/**
 * Created by liuyujing on 2016/11/9.
 */
(function () {

    //需要最小值 最大值 来控制 选择的区间
    //需要把创建好的元素  放到哪一个位置
    function AddView(_min,_max,superEle) {
        this.min = _min;
        this.max = _max;
        this.chooseNum = 0;

        this.createView = function () {
            var bgView = document.createElement("div");
            var lessButton = document.createElement("p");
            var numLabel = document.createElement("p");
            var moreButton = document.createElement("p");
            lessButton.className = "content";
            numLabel.className = "content";
            moreButton.className = "content";

            bgView.appendChild(lessButton);
            bgView.appendChild(numLabel);
            bgView.appendChild(moreButton);

            numLabel.textContent = this.chooseNum;
            lessButton.textContent = "-";
            moreButton.textContent = "+";
            superEle.appendChild(bgView);

            var self = this;

            lessButton.onclick = function () {
                if (self.chooseNum==self.min){
                    self.chooseNum = self.min+1;
                }
                numLabel.textContent = --self.chooseNum;
            };

            moreButton.onclick = function () {
                if (self.chooseNum==self.max){
                    self.chooseNum = self.max-1;
                }
                numLabel.textContent = ++self.chooseNum;
            };
        }
    }


    var addView = new AddView(0,5,document.body);
    addView.createView();

})();