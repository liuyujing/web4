/**
 * Created by liuyujing on 2016/11/21.
 */


(function () {

//     var content = document.querySelector(".container");
//
//     var toolBarChilds = document.getElementsByClassName("item");
//
//     var datas = [{name:"home",content:"<div class='content' >首页的内容</div>"},{name:"find",content:"<div class='content' >发现的内容</div>"},{name:"setting",content:"<div class='content' >设置的内容</div>"}];
//
//     for (var i=0;i<toolBarChilds.length;i++){
//         (function (index) {
//             toolBarChilds[index].onclick = function () {
//                 alert(index);
//             };
//         })(i);
//     }
//
//
//
//
//
//     //自执行函数 是一个匿名函数 自己调用了自己
//     //自执行函数 也属于闭包
//     (function () {
//
//     })();
//
//     (function () {
//
//     }());
//
//     +function () {
//
//     }();
//
//     !function () {
//
//     }();
//
//     ~function () {
//
//     }();
//
//
//
//
//     function Person(_name) {
//         var name = _name;
//         //设置只读属性
//         this.getName = function () {
//             return name;
//         };
//         //只能写入
//         this.setName = function (_name) {
//             name = _name;
//         };
//     }
//
//     var xiaoMing = new Person("小明");
//     xiaoMing.setName("大明");
//     console.log(xiaoMing.getName());
//
//
//     var div = document.getElementById("addClick");
//
//
//     function listener(text) {
//
//         return function () {
//             div.innerHTML = text;
//         }
//     }
//
//     // div.onclick = listener();
//
//     /*
//     * div.addEventListener("click",listener());
//     *
//     * */
//
//     //如果 listener("123") 可以被看成 是一个监听者 listener（不调用的）
//     //listener("123") -> listener("123")()
//     div.addEventListener("click",listener("123"));
//
//     var images = ["images/0.jpg","images/1.jpg","images/2.jpg"];
//
//     //点击图片 切换数组中的图片
//
//
//     var image = document.getElementsByClassName("showImage");
//
//     // for (var i=0;i<images.length;i++){
//     //
//     //     function getPath(index) {
//     //         console.log(this);
//     //
//     //         return function () {
//     //             this.src = images[index];
//     //         }
//     //     }
//     //     // var fun1 = getPath(i);
//     //     //onclick调用 里面的函数getPath
//     //     //onclick == getPath返回值的函数
//     //     //getPath返回值的函数 里面的this 就代表 触发onclick的对象
//     //
//     //     image[i].onclick = getPath(i);
//     // }
//
//
// //    给一个元素(边框) 点击之后  添加边框增加宽度 改变颜色
//
//     var div = document.querySelector(".changeBorder");
//
//     function changeBorder(borderCSS) {
//         return function () {
//             this.style.border = borderCSS;
//         }
//     }
//
//     div.onclick = changeBorder("3px solid red");
//
//
//
//     //onresize 延迟执行
//     function fun(callback) {
//         //timer只初始化了一次
//         var timer = null;
//
//         //onresize 被调用的时候  会不断的 去执行 return中的函数
//         //把上一次的定时器 清除
//         return function () {
//             clearTimeout(timer);
//             timer = setTimeout(function () {
//
//                 if (callback){
//                     callback();
//                 }
//
//             },500);
//         };
//     }
//
//     //
//     // //可以检测 window窗口大小的改变
//     // // window.onresize = function () {
//     // //     console.log("change");
//     // // };
//     //
//
//     window.onresize = fun(function () {
//         console.log("change");
//     });
//
//
//
//
// /*
//     for (var i=0;i<images.length;i++){
//
//         image[i].onclick = function () {
//             this.src = images[i];
//         };
//     }
//
//     for (var i=0;i<images.length;i++){
//         function change(index) {
//
//             return function () {
//                 this.src = images[index];
//             }
//         }
//
//         image[i].onclick = change(i);
//     }
// */
//
//     // Element.prototype.on = function (callback) {
//     //     callback(event);
//     // }
//     // var ele = new Element();
//     // ele.onclick()
//
//
//     document.querySelector(".changeBorder").onclick = function () {
//         alert("");
//     };


    // $(".changeBorder").click(function () {
    //     alert("");
    // });

    //dom对象
    // jQuery(".changeBorder")
    // $("选择器")

//    调用事件的方式  全部是 去掉On的事件名

//    设置样式 元素(jquery).css()

//      ✭✭✭✭✭ jquery里面所有的方法 属性  都是 通过（jQuery对象）调用

//     var changeDiv = $(".changeBorder");
//     console.log(changeDiv[0]);
//
//     changeDiv.click(function () {
//         console.log(this);
//
//         // $(this).css("background","red");
//         $(this).css({background:"red",height:"200px"});
//     });
//
// //    jquery 与 元素 互相转换
// //     jQuery -> 元素 :jQuery对象[0]
// //    元素 -> jQuery : $(元素)
//
// //    css jquery中的方法
//
//     //创建jquery对象
//     var image = $("<img src='images/2.jpg'>");
// //    添加jQuery对象
//     changeDiv.append(image);
//
//
//     changeDiv.click(function () {
//         image.remove();
//     });
//
//     var image1 = $(".showImage:last");
//     image1.click(function () {
//         alert("last");
//     });
//
//     var image2 = $(".showImage:eq(1)");
//     image1.click(function () {
//         alert("222");
//     });

    // image1.dblclick();

    // $(".list li:even").css({background:"red"});
    // $(".list li:odd").css({background:"red"});
    // $(".list li:gt(1)").css({background:"red"});
    // $(".list li:lt(1)").css({background:"red"});
    // $(".list li:not(.item)").css({background:"red"});


    var div = $(".changeBorder");
    div.bind("dblclick",{color:"red"},function (event) {
        console.log(event.data);
        $(this).css({background:event.data.color});
    });


//    测人品 [{title:"好人",width:300px;height:300px,radius:150px,background:red},{title:"可以",width:300px;height:300px,radius:90px,background:green},{title:"坏人",width:300px;height:300px,radius:0,background:black}];

    var datas = [{title:"好人",width:"300px",height:"300px",radius:"150px",background:"red"},{title:"可以",width:"300px",height:"300px",radius:"90px",background:"green"},{title:"坏人",width:"300px",height:"300px",radius:0,background:"black"}];

    var content = $("<p>测测你的人品</p>");
    content.css({width:"300px",height:"300px",border:"1px solid gray","line-height":"300px",
    "text-align": "center"});

    $(document.body).append(content);

    content.bind("click",function () {
        var info = datas[parseInt(Math.random()*100)%datas.length];
        $(this).css({"border-radius":info.radius,background:info.background});
        $(this).text(info.title);
    });

//    猜拳
//    手风琴
//    加减按钮

})();


// function a() {
//     var m = 30;
//     function b() {
//         console.log(m);
//     }
// }a();

// function a(vv) {
//     var m = 30;
//     return function () {
//         console.log(m);
//     }
// }
// a();

// function a(b) {
//
//     return function () {
//         console.log(b);
//     }
// }
//
// var fun = a(123);
//
// fun();

// div.onclick = a(123);
