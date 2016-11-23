/**
 * Created by liuyujing on 2016/11/9.
 */
(function () {
    /*
    * 创建 界面元素
    * min 最小的区间
    * max 最大的区间
    * superEle 创建出来的控件 放到哪一个元素上
    * */
    function createViews(min,max,superEle) {
        //选择 数量的值
        var chooseNum = 0;

        //控件的背景图
        var bgView = document.createElement("div");
        superEle.appendChild(bgView);

        //减号按钮
        var lessButton = document.createElement("p");
        //显示 选择数量的值
        var showResultLable = document.createElement("p");
        //加号按钮
        var moreButton = document.createElement("p");

        bgView.appendChild(lessButton);
        bgView.appendChild(showResultLable);
        bgView.appendChild(moreButton);

        //textContent 设置元素中文字的内容
        lessButton.textContent = "-";
        showResultLable.textContent = chooseNum;
        moreButton.textContent = "+";

        //设置元素 类选择器的名字
        lessButton.className = "show-control-view";
        showResultLable.className = "show-control-view";
        moreButton.className = "show-control-view";

        //给减号按钮 添加点击事件
        lessButton.onclick = function () {
            //当减少到 最小区间值 的时候
            if (chooseNum==min){
                // 把选择的值  固定成最小的值
                //后面 是先自减 后赋值 这里面给最小值加1 防止超出 最小值的范围
                chooseNum = min+1;
            }
            showResultLable.textContent = --chooseNum;
        };

        //给加号按钮 添加  点击事件
        moreButton.onclick = function () {
            if (chooseNum==max){
                chooseNum = max-1;
            }
            showResultLable.textContent = ++chooseNum;
        };

    }

    //调用创建控件的方法
    createViews(0,5,document.body);

})();
