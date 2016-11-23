/**
 * Created by liuyujing on 2016/11/9.
 */
(function () {


    var a = 2;
    var b = 3;

    if (a>10&&b<2){

    }
    if (a>10||b<2){

    }

    var isSuccess = false;

    if (!isSuccess){
        alert("");
    }


    if (1){

    }else {

    }

    if (1){

    }
    if (1){

    }

    if (1){

    }else if(1){

    }else {

    }

    function a1() {

    }

    function a2() {

    }

    var aa  = a1;

    switch (aa){

        case a1:
            alert("a1");
            break;

        case a2:
            alert("a2");
            break;
        default:
            console.log("当所有条件 都不满足的时候 才会去执行")
    }

    // for (var i=0;i<19;i+=5){
    //
    // }

    // for(xx in xx){
    //
    // }

    // while
    // while (1){
    //
    // }

    // do while
    // do {
    //
    // }while (1);


    var a = 20;
    var str1 = ""+a+"";
    var str = "a";

    // str.length

    var loc = str.indexOf("a");
    str[0] = "bb";
    loc = str[0];
    loc = str.charAt(0);
    str.replace("a","#");

    console.log(str.slice(0,1));
    str = "a b c d";
    var list = str.split(" ");

    var list1 = [[1,2,3],[2,3,4],[5,67,8,9]];
    console.log(list[1][2]);

    var list2 = [
        {
            name:"xxx",
            paly:[
                {name:"x1"},
                {name:"x2"},
                {name:"x3"}
                ]
        },{
            name:"xxx2",
            paly:[
                {name:"x1"},
                {name:"x2"},
                {name:"x3"}
                ]
        },{
            name:"xxx3",
            paly:[
                {name:"x1"},
                {name:"x2"},
                {name:"x3"}
                ]
        }];
    // list2[1].name
    // list2[2].paly[1].name



    //使用函数的时候 就相当于是 在使用 这一大段代码
    //函数声明实现后 不会立刻执行
    //只有当使用的时候  才会去执行
    //并且可以多次执行
    //可以把功能相同的代码  放到 同一个函数中

    /*
    * 使用函数的时候  不同的需求
    * 1.只希望 函数代表一大段 代码 里面的内容是固定的->无返回值  无参数
    * 2.函数代表一大段 代码 可以根据不同的需求 生成不同的内容 -> 无返回值  带参数的函数
    * 3.函数代表一大段 代码 但是 希望通过函数 得到一个结果 -> 有返回值的函数 -> 函数最终就是 得到结果
    * */
    // function aaa() {
    // }
    //
    // aaa();



    function createView() {

        var div = document.createElement("div");
        var p = document.createElement("p");
        var img = document.createElement("img");

        div.textContent = "123";
        document.body.appendChild(div);

    }





    function showView(color,superEle) {

        var div = document.createElement("div");
        div.style.color = color;
        div.textContent = "1232";
        superEle.appendChild(div);

    }



    showView("red",document.body);
    showView("red",document.body);
    showView("red",document.body);
    showView("red",document.body);



    //开关按钮 逻辑都是 开或者关
    //只是显示的文字不一样 开始/结束  播放/暂停
    /*
    * info
    * {nor:"",selected:""}
    * */
    function createButton(info,superEle) {
        var button = document.createElement("button");
        button.textContent = info.nor;
        superEle.appendChild(button);

        button.onclick = function () {
            this.textContent = this.textContent == info.nor?info.selected:info.nor;
        };
    }

    createButton({nor:"开始",selected:"结束"},document.body);
    createButton({nor:"播放",selected:"暂停"},document.body);createButton({nor:"开始",selected:"结束"},document.body);
    createButton({nor:"播放",selected:"暂停"},document.body);createButton({nor:"开始",selected:"结束"},document.body);
    createButton({nor:"播放",selected:"暂停"},document.body);

    createView();



    // function sum(a,b) {
    //     // return false;
    //     return a+b;
    // }
    //
    // var r = sum(10,10)*15;

    // if (sum(10,10)){
    //
    // }else {
    //
    // }

/*
    function sum(a,b) {
        if ((a+b)>20){
            return "和大于20";
        }
        return "和小于20";
    }

    console.log(sum(10,20));
*/

    function ccc(info) {
        var button = document.createElement("button");
        button.textContent = info.nor;

        button.onclick = function () {
            this.textContent = this.textContent == info.nor?info.selected:info.nor;
        };
        return button;
        // return 1;
    }

    var r = ccc({nor:"播放",selected:"暂停"})+20;
    console.log(r);

    // document.getElementById("xxx").appendChild(ccc({nor:"播放",selected:"暂停"}));

    // document.body.appendChild(ccc({nor:"播放",selected:"暂停"}));



})();
