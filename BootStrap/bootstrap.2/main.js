/**
 * Created by liuyujing on 2017/1/12.
 */

    (function () {

        function init() {

            $(".alert").click(function (e) {
                e.preventDefault();
                $(this).alert("close");
            });

            $(".popover-button").popover();

            $(".tip").tooltip();

            $("#tabs a").click(function (e) {
                e.preventDefault();
                $(this).tab("show");
            });


            $('.scroll-content').scrollspy({target: '#scroll'});
            $('.test-contener').scrollspy({target: '#top-navbar'});

            var ss = "<div class='row'><div class='col-md-3'><img src='icon.png' alt=''><div class='caption'><h1>好产品</h1><p>好吃好吃好吃好吃</p></div></div><div class='col-md-3'><img src='icon.png' alt=''><div class='caption'><h1>好产品</h1><p>好吃好吃好吃好吃</p></div></div><div class='col-md-3'><img src='icon.png' alt=''><div class='caption'><h1>好产品</h1><p>好吃好吃好吃好吃</p></div></div><div class='col-md-3'><img src='icon.png' alt=''><div class='caption'><h1>好产品</h1><p>好吃好吃好吃好吃</p></div></div></div>";

            for (var i=0;i<5;i++){
                ss+=ss;
            }
            $("#goods-container").html(ss);

        }

        init();

    })();
