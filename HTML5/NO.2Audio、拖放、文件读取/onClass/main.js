/**
 * Created by liuyujing on 2016/11/28.
 */
(function () {

    var timer = null;

    function init() {

        $(".container").tabs({activate:function (event,ui) {
            clearTimeout(timer);
            timer = null;
            ui.oldPanel.find(".startAnimation").removeClass("startAnimation");
        }});

        choose(".student",["林向南","部亚洲","王世强","王少腾"]);
        choose(".test",["第一题","第二题","第三题","第四题"]);

        var list = ["林向南","部亚洲","王世强","王少腾"];

        // list = list.sort(function(item1,item2){
        //     return  item1.localeCompare(item2);
        // });
        //
        // console.log(list);


        // function chooseName() {
        //     var list = ["林向南","部亚洲","王世强","王少腾"];
        //     var rand = parseInt(Math.random()*100)%list.length;
        //
        //     return list[rand];
        // }
        //
        // console.log(chooseName());

        // var list = 0;

        // if (undefined){
        //     alert("");
        // }

        // var a = 10;
        // var b = 20;
        // var success = true;
        // if (success){
        //
        // }
    }
    


    //给抽选的圆圈按钮  添加事件
    function choose(className,list) {

        try {
            if (!list){
                throw "必须传一个数组";
            }
        }catch (error){
            alert(error);
        }


        $(className).click(function () {

            var self = $(this);
            self.addClass("startAnimation");

            var randTime = (parseInt(Math.random()*100)+1)%7*1000;
            if (timer){
                clearTimeout(timer);
                timer = null;
            }
            timer = setTimeout(function () {
                var rand = parseInt(Math.random()*100)%list.length;
                self.text(list[rand]);

                self.removeClass("startAnimation");

                self.toggle("explode",{pieces:36},1000,function () {
                    self.toggle("explode",{pieces:36},500);
                });

            },randTime);

        });

    }

    init();

})();
