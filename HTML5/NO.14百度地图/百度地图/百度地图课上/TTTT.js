/**
 * Created by liuyujing on 2017/1/5.
 */
(function () {


    function Bounds() {

    }

    Bounds.prototype.containsBounds = function (bounds) {

        return true;
    };

    var bounds = new Bounds();
    if (bounds.containsBounds(111)){
        alert("111在这个范围之内");
    }

})();