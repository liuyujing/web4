/**
 * Created by liuyujing on 2016/11/24.
 */
(function () {

    var loginButton = $("#done");
    var status = $("#result");
    var userInput = $("#userName");
    var passwordInput = $("#password");
    loginButton.click(function (event) {
        event.preventDefault();
        var name = userInput.val();
        var password = passwordInput.val();
        // $.ajax({url:"http://localhost:3000/login?user="+name+"&password="+password+"",type:"GET",dataType:"jsonp"}).done(function (data) {
        //     status.html(data.data);
        // });

        // $.ajax({url:"http://localhost:3000/toLogin",type:"POST",dataType:"jsonp",data:{user:name,password:password}}).done(function (data) {
        //     status.html(data.data);
        // });

        // $.post({url:"http://localhost:3000/toLogin",data:{user:name,password:password}
        //     }).done(function (data) {
        //     status.html(data.data);
        // });

        var def = $.Deferred();

        $.post({url:"http://localhost:3000/toLogin",data:{user:name,password:password}
        }).done(function (data) {
            def.resolve(data);
        });

        def.done(function (data) {
            status.html(data.data);
        });

    });
})();
