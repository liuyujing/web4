/**
 * Created by liuyujing on 2016/11/9.
 */
(function () {

    /*
     * AddView 创建加减按钮的 类（构造器）
     * _min 可以选择的最小值
     * _max 可以选择的最大值
     * superEle 把创建好的 加减按钮 这个控件  放到的位置
     * */
    function AddView(_min,_max,superEle) {
        //？为什么写一些属性 去接收这些 参数
        //咱们希望在 创建好 对象之后 可以再去改变最大值和最小值
        this.min = _min;
        this.max = _max;

        //让通过AddView这个类 创建出来的对象
        //具备创建界面的功能
        this.createView = function () {

        };
    }

    var addView = new AddView(0,10,document.body);
    // addView.min = 3;
    addView.max = 1;
})();
