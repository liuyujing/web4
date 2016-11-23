/**
 * Created by liuyujing on 2016/11/23.
 */
(function () {

    var done = $(".done");
    var button = $(".start-button");

    function step1(func) {
        console.log("step1");
        setTimeout(function () {
            func();
        },2000);
    }

    function step2() {
        console.log("step2");
    }


    button.click(function () {
        step1(step2);
    });
    var image = $(".image");
    image.on("load",function () {
        $(this).fadeTo(1000,0.5);
    });
    image.on("error",function () {
       alert("error");
    });
    alert("");

    var content = $(".content");
    done.click(function () {
        console.log(111);
        var worker = new Worker("other.js");
        worker.onmessage = function (event) {
            content.text(event.data);
        }
    });


    // $(".request").click(function () {
    //     var request = new XMLHttpRequest();
    //     request.onreadystatechange = function () {
    //         console.log(request.response);
    //         content.text(request.response);
    //     };
    //     request.open("GET","package.json",true);
    //
    //     // request.open("GET","http://apis.baidu.com/tngou/food/classify",true);
    //     // request.setRequestHeader("apikey","800df6eb77392d2205b55cfccbcc1662");
    //     request.send();
    // });


    var def = new $.Deferred();
    console.log(def);
    $(".request").click(function () {
        // $.ajax({url:"package.json",method:"GET",complete:function (data) {
        //     console.log(data);
        // }});



        $.ajax({url:"package.json",method:"GET",cache:true,complete:function (data) {
            console.log(data);
        },dataFilter:function (data) {
            console.log("dataFilter",data);
            def.resolve(data);
        }});

    });

    def.done(function (data) {
        console.log("done",data);
    });

    $(".rand").click(function () {

        var chooseIndex = parseInt(Math.random()*100)%11;
        $(this).html(chooseIndex);
    });




})();
