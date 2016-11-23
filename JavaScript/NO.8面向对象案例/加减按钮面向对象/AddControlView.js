/**
 * Created by liuyujing on 2016/11/9.
 */
(function () {

    function AddControlView(_min,_max,superEle) {
        this.min = _min;
        this.max = _max;
        this.chooseNum = 0;

        this.showView = function () {
            var bgView = document.createElement("div");
            var lessView = document.createElement("p");
            var resultView = document.createElement("p");
            var moreView = document.createElement("p");
            lessView.className = "content";
            resultView.className = "content";
            moreView.className = "content";

            bgView.appendChild(lessView);
            bgView.appendChild(resultView);
            bgView.appendChild(moreView);

            superEle.appendChild(bgView);

            lessView.textContent = "-";
            resultView.textContent = this.chooseNum;
            moreView.textContent = "+";

            var self = this;
            lessView.onclick = function () {
                // this
                if (self.chooseNum == self.min){
                    self.chooseNum = self.min+1;
                }
                resultView.textContent = --self.chooseNum;
            };

            moreView.onclick = function () {
                if (self.chooseNum == self.max){
                    self.chooseNum = self.max-1;
                }
                resultView.textContent = ++self.chooseNum;
            };

        }
    }

    window.AddControlView = AddControlView;
})();


