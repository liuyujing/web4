/**
 * Created by liuyujing on 2016/11/21.
 */
(function () {

    function createView() {
        var list = ["images/shitou.png","images/jiandao.png","images/bu.png"];
        var superEle = $(document.body);
        var timer = null;

        function computer() {
            var computer = $("<div class='computer'><img src='images/shitou.png' alt=''></div>");
            superEle.append(computer);
        }
        function user() {
            var user = $("<div class='user'></div>");
            list.forEach(function (item,index) {
                var view = $("<img class='unselected' src="+item+" alt=''>");
                user.append(view);
                (function (index) {
                    view.click(function () {
                        $(this).addClass("selected");
                        $(".user img:not(.selected)").css({opacity: 0.5});
                        clearInterval(timer);
                        $(".control").text("开始");
                    })
                })(index);
            });
            superEle.append(user);
        }

        function controlButton() {
            var control = $("<div class='control'>开始</div>");
            superEle.append(control);
            control.click(function () {
                var result = control.text()=="开始";
                if (result){
                    $(".user img").removeClass("selected").css({opacity: 1.0});
                    control.text("结束");
                    timer = setInterval(function () {
                        var rand = parseInt(Math.random()*100)%list.length;
                    $(".computer img").attr("src",list[rand]);
                    },200);

                }else {

                    control.text("开始");
                    clearInterval(timer);
                }

            });
        }
        computer();
        user();
        controlButton();
    }
    createView();

})();
