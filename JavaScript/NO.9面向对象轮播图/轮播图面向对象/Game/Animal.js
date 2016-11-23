/**
 * Created by liuyujing on 2016/11/10.
 */
(function () {

    function Animal(_name,_blood,_power) {
        this.name = _name;
        this.blood = _blood;
        this.power = _power;
        this.skills = [];

        /*
        * 攻击另一个对象的方法
        * attObj ：攻击目标（英雄对象 怪物对象）
        * skillObj：使用什么技能去攻击
        * */
        this.att = function (attObj,skillObj) {
            //攻击的时候
            //让被攻击的对象 血量减少
            //this.power 本身自带的攻击力
            //skillObj.power 技能的攻击力
            attObj.blood -= (this.power+skillObj.power);
        }
    }

    // function PPPP(_name) {
    //     this.name = _name;
    //     //this -> 通过PPPP创建出来的对象 （PPPP里面的方法属性 都是通过PPP创建出来的对象去调用的）
    //     var button = document.createElement("button");
    //     button.onclick = function () {
    //         // this -> button(调用onclick的对象)
    //     };
    // }

    window.Animal = Animal;
})();
