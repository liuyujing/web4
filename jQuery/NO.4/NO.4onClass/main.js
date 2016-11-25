/**
 * Created by liuyujing on 2016/11/25.
 */
(function(){

    // $.get()
    // $.post()

//    如果只传一个参数 （URL） 可以传一个字符串
//    传多个参数 需要传对象 {}
//    done 请求完成之后的操作

    // $.get("url").done(function (data) {
    //
    // });
    // $.get({url:"url",headers:{}}).done(function (data) {
    //
    // });

    $.get({url:"http://localhost:3050/news?pageIndex=10",dataType:"jsonp"}).done(function (data) {
        console.log(data);
    });

    // $.post({url:"url",data:{}}).done(function (data) {
    //
    // });

    $.post({url:"http://localhost:3050/login",data:{name:"21345678765432"}}).done(function (data) {
        console.log(data);
    });


})();
