/**
 * Created by liuyujing on 2016/11/11.
 */

//window._ = "123"; 给window添加了一个123的属性
//window._||{} 如果window._有值 就使用window._的值
//如果没有 就是创建一个空对象{}

//给一个插件 添加一个统一的接口
window._ = window._||{};

(function () {
    // this.tuPianLuJingShuZu :["1.jpg",2.jpg];
    function LunBoTu(_tuPianLuJingShuZu,_fuYuanSu) {
        this.tuPianLuJingShuZu = _tuPianLuJingShuZu;
        this.beiJingTu = null;
        this.fuYuanSu = _fuYuanSu;
        this.index = 0;//显示哪一个界面的下标
        this.timer = null;
    }
    // LunBoTu.prototype.tuPianLuJingShuZu = [];

    //创建单一页面的方法
    //需要 提供给 使用这个函数的位置  一个创建好的 整体元素
    LunBoTu.prototype.jianDanShiTu = function (luJing) {
        var danShiTu = document.createElement("a");
        danShiTu.innerHTML = "<img src="+luJing+">";
        danShiTu.className = "lunBoTu-danShiTu";
        return danShiTu;
    };

    //创建 图片元素的数组  里面是 所有需要显示在 界面上的 图片元素
    LunBoTu.prototype.tuPianShuZu = function () {
        //用来盛放 创建好的单一视图的数组
        var tuPianYuanSuShuZu = [];

        //instanceof 判断 对象 是否 属于 某一个类型
        if (this.tuPianLuJingShuZu instanceof Array){
            var self = this;

            this.tuPianLuJingShuZu.forEach(function (tuPianLuJing) {
                var tuPian = self.jianDanShiTu(tuPianLuJing);

                tuPianYuanSuShuZu.push(tuPian);
                //给图片元素 添加 移入移除 事件
                self.tianJiaShiJian(tuPian);
            });

            return tuPianYuanSuShuZu;
        }
    };

    //显示默认的第一个页面
    //传一个默认显示元素的下标 （显示数组中的哪一个元素）:i
    LunBoTu.prototype.diYiGeYeMian = function (i) {
        this.index = i;//同步默认页面 图片的 初始位置

        this.beiJingTu = document.createElement("div");
        this.beiJingTu.className = "lunBoTu-beiJingTu";
        //this.tuPianShuZu() 获得 图片元素的数组
        this.beiJingTu.appendChild(this.tuPianShuZu()[this.index]);

        this.fuYuanSu.appendChild(this.beiJingTu);

        this.tianJiaAnNiu();
        this.startTimer();
    };

    LunBoTu.prototype.tianJiaAnNiu = function () {
        var zuo = document.createElement("p");
        var you = document.createElement("p");
        zuo.className = "lunBoTu-kongZhi lunBoTu-kongZhi-zuo";
        you.className = "lunBoTu-kongZhi lunBoTu-kongZhi-you";

        zuo.textContent = "<";
        you.textContent = ">";

        this.beiJingTu.appendChild(zuo);
        this.beiJingTu.appendChild(you);

        var self = this;
        //调用onclick的对象 是左面的按钮
        zuo.onclick = function () {
            // this 谁调用这个方法  this就代表 谁
            self.shangYiYe();
            // console.log(this);
        };

        you.onclick = function () {
            self.xiaYiYe();
        };

        this.tianJiaShiJian(zuo);
        this.tianJiaShiJian(you);
    };

    //上一页
    LunBoTu.prototype.shangYiYe = function () {
        --this.index;
        this.index = this.index==-1?this.tuPianShuZu().length-1:this.index;
        this.shuaXin();
    };

    //下一页
    LunBoTu.prototype.xiaYiYe = function () {
        ++this.index;
        this.index = this.index==this.tuPianShuZu().length?0:this.index;
        console.log(this.index);
        this.shuaXin();
    };

    //刷新页面的方法
    LunBoTu.prototype.shuaXin = function () {
        //删除正在显示的 单视图
        this.beiJingTu.removeChild(document.querySelector(".lunBoTu-danShiTu"));
        this.beiJingTu.appendChild(this.tuPianShuZu()[this.index]);
    };

    //开始定时器
    LunBoTu.prototype.startTimer = function () {
        var self = this;
        if (this.timer){
            this.stopTimer();
        }
        this.timer = setInterval(function () {
            self.xiaYiYe();
        },3000);
    };

    //结束定时器
    LunBoTu.prototype.stopTimer = function () {
        clearInterval(this.timer);
    };

    //添加鼠标移入 鼠标移出的事件
    LunBoTu.prototype.tianJiaShiJian = function (yuanSu) {
        // yuanSu.onmouseover
        // yuanSu.onmouseenter
        var self = this;
        yuanSu.onmouseover = function () {
            self.stopTimer();
        };
        // yuanSu.onmouseout
        // yuanSu.onmouseleave
        yuanSu.onmouseout = function () {
            self.startTimer();
        };
    };

    _.LunBoTu = LunBoTu;

})();

//作业：
//轮播图的底部添加 所有轮播图片的缩略图
//并且 使用不同颜色的边框 标记当前显示的 图片
