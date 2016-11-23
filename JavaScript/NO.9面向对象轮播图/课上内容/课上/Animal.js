/**
 * Created by liuyujing on 2016/11/10.
 */
(function () {

    function Animal(_name,_blood,_power) {
        this.name = _name;
        this.blood = _blood;
        this.power = _power;

        //this：通过Animal创建出来的对象
        this.att = function (obj) {
            obj.blood -= this.power;
        }
    }


    window.Animal = Animal;
})();
