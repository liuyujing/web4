/**
 * Created by liuyujing on 2016/11/22.
 */
(function () {

    // 通过选择器 查询元素 -> jQuery对象
    // jQuery对象 -> dom ：jQuery对象[0]
    // dom -> jQuery对象  $(dom)

    // $(".class1")
    // jQuery(".class1")

    var image = $("<img src='shitou.png'>");

    //添加元素
    $(".class1").append(image);

    // 移除对象
    // image.remove();

    //click 添加事件 事件函数名 是去掉on 并且 触发函数 以回调函数 形式传进去的
    image.click(function () {

    });

    function changeImage(event) {
        //attr 设置属性 (属性名,属性值)
        $(this).attr("src",event.data);
        //prop 设置属性 (属性名,属性值)
        // $(this).prop("src",event.data);

        // this.setAttribute("src",event.data);
        // this.src = event.data;
    }

    //给元素  绑定事件  bind(事件名,参数,回调函数)
    image.bind("mouseover","jiandao.png",changeImage);

    //解除绑定事件 unbind(事件名,回调函数)
    //解除绑定事件
    image.unbind("mouseover",changeImage);

    //delegate 委托/代理 去绑定
    //绑定某一个元素中的  子元素
    function addEvent(event) {
        $(this).css("background",event.data);
    }
    var listView = $(".list");

    //delegate 委托/代理的形式  去绑定
    //可以通过父元素  给子元素 绑定事件(选择器,事件名,数据,回调函数)
    // listView.delegate("li","click","red",addEvent);
    //undelegate(选择器,事件名,回调函数)
    // listView.undelegate("li","click",addEvent);

//    把 1 4 9 的 li 添加事件  更改成红色

    //listView[0]转换成了dom对象
    // console.log(listView[0]);
    // // $("<div></div>");//把dom元素 转换成 jquery对象
    // var div = document.createElement("div");
    // console.log($(div));

    var div2 = $(".class1");
    function show() {
        alert("");
    }
    //on (事件名 选择器 数据 回调函数)
    // div2.on("click","img",show);
    // div2.off("click","img",show);

    //只添加 一次 响应事件
    div2.one("click","img",show);


    listView.delegate(".selected","click","red",function (event) {
        //data 是event对象中的一个属性
        //通过delegate这个方法  把"red" 赋值给了 event对象中的data属性
        //就可以通过 event来找到data中的值
        $(this).css("background",event.data);

        console.log(event);
    });

    //toggleClass 选择器的开关
    //如果有当前的选择器  就删除
    //如果没有 就添加
    // $(".nor").click(function () {
    //     $(this).toggleClass("hightLight");
    // });

    $(".nor").bind("click",function () {
        $(this).toggleClass("hightLight");
    });

    var selecteds = [];
    var timer = null;
    $(".change-position").delegate("li","click",function () {
        var self = $(this);
        selecteds.push(self);
        self.css("opacity","0.7");

        if (selecteds.length>=2){
            clearTimeout(timer);
            timer = setTimeout(function () {
                var temp = selecteds[0].html();

                selecteds[0].html(selecteds[1].html());
                selecteds[1].html(temp);

                selecteds.forEach(function (item) {
                    item.css("opacity","1.0");
                });

                selecteds = [];
            },300);

        }

    });

    // $("input").prop("checked");

    var checkBox = $(".options");
    $(".all").click(function () {
        var self = $(this);
        if (self.text()=="全选"){
            checkBox.prop("checked",true);
            self.text("取消");
        }else {
            checkBox.prop("checked",false);
            self.text("全选");
        }
    });

    $(".inrever").click(function () {
        console.log(checkBox);
        // var isChecked = checkBox.prop("checked");
        // checkBox.prop("checked",!isChecked);

        checkBox.each(function () {
            var self = $(this);
            var isChecked = self.prop("checked");
            self.prop("checked",!isChecked);
        })
    });


    //hide 隐藏(动画的持续时间,回调函数)
    //show 显示(动画的持续时间,回调函数)

    //fadeIn 淡入(动画的持续时间,回调函数);
    //fadeOut 淡出(动画的持续时间,回调函数);
    //fadeTo 淡入淡出的程度 (动画的持续时间,不透明度的值,变化的方式,回调方法)
    // linear 匀速进行动画
    // swing 曲线的进行动画 动画的每一帧 都不是平均的速度
    //fadeToggle 淡入淡出的开关 显示的时候（opacity） 执行淡出 不显示的时候（opacity） 执行淡入
    //slideUp 向上回收动画 (动画的持续时间,回调函数)
    //slideDown 向下弹出动画 (动画的持续时间,回调函数)
    //slideToggle 向上向下动画 (动画的持续时间,回调函数)
    //animate 可以自己去设置动画改变的属性 （需要产生动画的属性，动画的持续时间，变化方式，回调方法）


    // $(".animate").css("opacity",0.1);
    $(".animate").click(function () {
        // $(this).hide(1000,function () {
        //     // alert("死了");
        //     $(this).show(1000);
        // });

        // $(this).fadeOut(1000,function () {
        //     $(this).fadeIn(1000);
        // });

        $(this).fadeTo(3000,0.9,"swing",function () {
            $(this).css("border-radius","100px");
        });
    });

    $(".fadeButton").click(function () {
        $(".animate").fadeToggle(1000);
    });

    $(".slide").click(function () {
        $(this).slideUp(1000);
    });

    $(".slide-control").click(function () {
        // $(".slideView").slideUp(1000,function () {
        //     $(this).slideDown(1000);
        // });
        // $(".slideView").slideToggle(1000);
        //prop, speed, easing, callback
        $(".slideView").animate({width:0},5000,"swing",function () {
           alert("");
        });

        $(".slideView").slideUp(5000);
    });

    $(".stop-animate").click(function () {
        $(".slideView").stop(true,true);
        // $(".slideView").start();
    });

    $(".card").click(function () {
        $(this).animate({width:0},1000,function () {
            $(this).animate({width:200},1000);
        })
    });


})();
