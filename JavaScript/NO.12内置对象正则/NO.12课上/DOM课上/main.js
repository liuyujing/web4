/**
 * Created by liuyujing on 2016/11/15.
 */
(function () {

    var div = document.createElement("div");
    div.className = "container";
    document.body.appendChild(div);

    var p1 = document.createElement("p");
    p1.className = "num1";
    div.appendChild(p1);


    div.onclick = function () {
        var p2 = document.createElement("p");
        p2.className = "num2";

        //替换两个节点
        // replaceChild(新,旧)
        this.replaceChild(p2,p1);
    };

//    创建 createElement()
//    删除 removeChild()
//    添加 appendChild()
//    替换 replaceChild()
//    查找 get...id class    querySelector("#id")
//     document.getElementsByTagName("div");
//     document.getElementsByClassName("name");

//    在某一节点的前面去插入一个元素
    var p3 = document.createElement("p");
    p3.textContent = "123434";
    p3.className = "p3";

    //在某一个元素的前面 去插入一个元素
    //insertBefore(新,旧);
    div.insertBefore(p3,p1);


    //拷贝元素  cloneNode(boolean)
    //false:浅拷贝 只拷贝元素本身  不拷贝元素里面的内容
    //true:深拷贝 既拷贝元素本身 又拷贝元素中的内容
    var p4 = p3.cloneNode(false);
    p4.className = "p4";
    div.appendChild(p4);

    var p5 = p3.cloneNode(true);
    p5.className = "p4";
    div.appendChild(p5);

    //获得容器中的第一个 子节点
    console.log(div.firstChild);
    //获得最后一个子节点
    console.log(div.lastChild);

    div.firstChild.style.background = "red";


    var input = document.getElementById("www");
    //focus设置某个元素  为聚焦状态
    input.focus();

    //判断元素 是否有 某个属性
    console.log(input.hasAttribute("class"));
    //判断元素 是否有子元素
    console.log(input.hasChildNodes());

    //nodeType 判断节点元素类型 1元素 2属性 3文本元素
    console.log(input.nodeType);

    //nodeValue 获得节点中的值 （只能获得 文本节点中的值）
    console.log(input.nodeValue);

    //创建 文本节点
    var textNode = document.createTextNode("12343");
    console.log(textNode.nodeValue);
    console.log(textNode.nodeType);

    //获得到某一个元素的父元素
    console.log(p4.parentNode);
    console.log(input.parentNode);

//    移除 某个元素的 属性
    if (input.hasAttribute("id")){
        input.removeAttribute("id");
        console.log(input);
    }
    // input.id = "";
    // input.className = "";

//    创建属性节点
    var att = document.createAttribute("id");
    //可以通过value设置 节点的值
    att.value = "vvv";
    //setAttributeNode 设置属性节点
    input.setAttributeNode(att);
    //removeAttributeNode 移除属性节点
    // input.removeAttributeNode(att);


    var div5 = document.querySelector("#rrrr");
    // div5.onclick = function () {
    //     alert("");
    // };

    //事件名 是去掉on的 事件函数名
    // div5.addEventListener("click",function () {
    //     alert("");
    // });

    function active() {
        alert("");
    }
    //添加事件
    div5.addEventListener("mouseenter",active);

    //移除事件
    div5.removeEventListener("mouseenter",active);

    //设置元素的 属性
    div5.setAttribute("class","div5");

    console.log(div5);

    document.getElementById("qwert").addEventListener("mouseenter",function () {
        alert("");
    });






    // document.getElementById("doubleClick").ondblclick = function () {
    //   alert("双击");
    // };
    // document.getElementById("doubleClick").addEventListener("dblclick",function () {
    //
    // });


    var dd = document.getElementById("doubleClick");
    // dd.onmousedown = function () {
    //     alert("按下鼠标 就触发");
    // };

    // dd.onmouseup = function () {
    //     alert("松开鼠标 就触发");
    // };

    // dd.onmousemove = function () {
    //     console.log("只要鼠标 在元素上面  就不停的触发");
    // };


    dd.onclick = function (event) {
        console.log(event);
    };




    var input3 = document.getElementById("mmm");
    // input3.onkeydown = function () {
    //     alert("onkeydown");
    // };
    // input3.onkeyup = function () {
    //     alert("onkeyup");
    // };
    input3.onkeypress = function (event) {
        // alert("onkeypress");
        console.log(event);
    };

    //创建一个  节点碎片
    var temp = document.createDocumentFragment();

    for(var i=0;i<100;i++){
        var dddd = document.createElement("div");
        temp.appendChild(dddd);
    }
    document.body.appendChild(temp);


    var superEle = document.getElementById("oooo");
    var subEle = document.getElementById("pppp");

    superEle.onclick = function (event) {
        alert("superEle");
    };

    subEle.onclick = function (event) {
        alert("subEle");
        //阻止  事件冒泡
        event.stopPropagation();
    };


//    作业：
//    列表  ->
//    刘德华 红色 xxx绿色  范冰冰橙色
// ["刘德华","xxx","范冰冰","xxxx"]

//    2.点击两个元素  交换这个两个li的位置
//    3.只要交换过位置的  就给他一个特殊的边框颜色



})();
