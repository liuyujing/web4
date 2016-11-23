/**
 * Created by liuyujing on 2016/11/23.
 */

(function () {

    function doSomething() {
        console.log("doSomething");
    }

    function action(func) {
        setTimeout(function () {
            func();
        },5000);
        console.log("action");
    }

    action(doSomething);


    var image = $(".image");

    image.on("load",function () {
        $(this).fadeTo(1000,0.7);
        console.log("111");
    });
    console.log("123");

    $(".worker").click(function () {

        var worker = new Worker("asy.js");

        worker.onmessage = function (message) {
            console.log(message.data);
        };

        console.log("....");

    });




    // var container = $(".container");
    //
    // var requestButton = $(".requestData-button");
    //
    // requestButton.click(function () {
    //
    //     var request;
    //
    //     //XMLHttpRequest:创建请求对象
    //     //ActiveXObject:IE5 IE6
    //     if (XMLHttpRequest){
    //         request = new XMLHttpRequest();
    //     }else {
    //         request = new ActiveXObject();
    //     }
    //
    //     //onreadystatechange 通信状态的改变
    //     request.onreadystatechange = function (state) {
    //         // console.log(request);
    //
    //         //请求回调的 状态码
    //         if (request.status == 200){
    //             // console.log(request.response);
    //
    //             //request.response : 得到 服务端 回应的数据 -> string
    //             //parseJSON:把字符串 转换成 json对象
    //             // var xiaoMing = {name:"小明",age:20};
    //             var info = $.parseJSON(request.response);
    //
    //             //获得info对象中的 data属性
    //             var list = info.data;
    //
    //             //获得到数组中 对应的内容 加载到页面中
    //             container.html("<h3>"+list[0].title+"</h3><p>"+list[0].content+"</p>");
    //
    //         }
    //     };
    //
    //     //配置 请求对象
    //     //open("HTTP请求的方法","url")
    //     //必传
    //     // 1.http请求的方法
    //     // 2.请求的接口（url）
    //     request.open("GET","package.json");
    //
    //     //send 发送请求
    //     request.send();
    // });

    var container = $(".container");

    var requestButton = $(".requestData-button");

    requestButton.click(function () {

        //创建 请求对象
        var request = XMLHttpRequest?new XMLHttpRequest():new ActiveXObject();

        request.onreadystatechange = function (event) {
            console.log(request);
        //      可以通过request里的status 来判断 是否是请求成功
            if (request.status == 200){

            //    获得请求成功的数据 -> 字符串类型
                var data = request.response;

            //    把字符串类型的数据转成json对象
                if (data){
                    var info = $.parseJSON(data);
                    var list = info.data;
                    var obj = list[0];

                    container.html("<h3>"+obj.title+"</h3><p>"+obj.content+"</p>");
                }

            }
        };

    //    配置请求对象
    //    必传：
    //    HTTP请求的方法
    //    接口 url
        request.open("GET","package.json");

    //    开始发送请求
        request.send();
    });



    var storyButton = $(".requestStory-button");

    var pageInde = 1;
    storyButton.click(function () {

        var request = XMLHttpRequest ? new XMLHttpRequest():new ActiveXObject();

        request.onreadystatechange = function () {

            if (request.status == 200){

                var data = request.response;

                if (data){


                    var info = $.parseJSON(data);

                    if (info.errNum == 300202){
                        console.log("没有传apikey");
                        return;
                    }
                    var storyList = info.showapi_res_body.contentlist;
                    console.log(storyList);
                }

            }else {
                // alert(request.statusText);
                console.log(request);
            }

        };

        //两个页面之间传值一样
        // 主机地址/接口名?page=1
        request.open("GET","http://apis.baidu.com/showapi_open_bus/showapi_joke/joke_text?page="+ pageInde++ +"");
        //设置请求头
        request.setRequestHeader("apikey","800df6eb77392d2205b55cfccbcc1662");

        request.send();
    });

})();


