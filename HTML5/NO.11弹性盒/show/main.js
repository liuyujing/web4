/**
 * Created by liuyujing on 2016/12/21.
 */
(function () {


    // $.post({url:"http://datainfo.duapp.com/shopdata/userinfo.php",data:{status:"register",userID:"wntv",password:"123456"}}).done(function (data) {
    //     console.log(data);
    // });

    // $.post({url:"http://datainfo.duapp.com/shopdata/userinfo.php",data:{status:"login",userID:"wntv",password:"123456"}}).done(function (data) {
    //     var dataInfo = $.parseJSON(data);
    //     console.log(dataInfo);
    // });


    // var container = $(".nav-container");
    //
    // $.post({url:"http://datainfo.duapp.com/shopdata/getuser.php",data:{userID:"wntv"},dataType:"jsonp"}).done(function (data) {
    //     console.log(data);
    //     container.append("<img src="+data[0]["userimg_url"]+">");
    // });

    var navContainer = $(".nav-container");

    $.get("http://datainfo.duapp.com/shopdata/getclass.php").done(function (data) {
        var nav = $("<ul class='top-nav'></ul>");
        navContainer.append(nav);

        var dataInfo = $($.parseJSON(data));
        console.log(dataInfo);

        dataInfo.each(function () {
            var item = new Itme(this);
            nav.append(item.view);
            
            item.view.click(function () {
                alert(item.info.classID);
            });
            
        });

    });


    function Itme(object) {
        this.info = object;
        this.view = $("<li>"+object.className+"</li>");
    }

})();