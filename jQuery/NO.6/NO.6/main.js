/**
 * Created by liuyujing on 2016/11/28.
 */
(function () {

    var studentList = ["林向南","部亚洲","王世强","王少腾"];
    var testList = ["第一题","第二题","第三题","第四题"];
    function createUI() {
        $(".container").tabs();
    }

    function choose(target,list) {
        $(target).click(function () {
            var self = $(this);
            $(this).addClass("animateAction");
            var randTime = (parseInt(Math.random()*100)%7+1)*1000;
            setTimeout(function () {
                self.removeClass("animateAction");
                self.toggle("explode",{pieces:36},1000,function () {
                    var chooseIndex = parseInt(Math.random()*100)%list.length;
                    self.text(list[chooseIndex]);
                    self.toggle("explode",{pieces:36},800);
                });
            },randTime);
        });
    }

    createUI();

    choose(".student",studentList);
    choose(".test",testList);

})();
