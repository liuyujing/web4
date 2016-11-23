/**
 * Created by liuyujing on 2016/11/14.
 */
(function () {

    (function () {

        var hourPointer, minPointer, secPointer;

        function getPointers() {
            hourPointer = document.querySelector(".hour-pointer");
            minPointer = document.querySelector(".min-pointer");
            secPointer = document.querySelector(".sec-pointer");
        }

        function showTime() {
            var d = new Date();

            var secValue = d.getSeconds() * 6;
            var minValue = d.getMinutes() * 6;
            var hourValue = (d.getHours() % 12) * 30 + minValue / 360 * 30;

            secPointer.style.transform = "rotate(" + secValue + "deg)";
            minPointer.style.transform = "rotate(" + minValue + "deg)";
            hourPointer.style.transform = "rotate(" + hourValue + "deg)";
        }

        function init() {
            getPointers();

            showTime();

            setInterval(showTime, 1000);
        }

        init();

    })();

})();
