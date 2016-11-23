/**
 * Created by liuyujing on 2016/11/10.
 */
(function () {

    // function Hero(_name,_blood,_power,_weapon) {
    function Hero(_weapon) {
        //让Hero类去调用Animal类的构造器
        //this:通过Hero创建出来的对象
        Animal.apply(this,arguments);
        if (arguments.length==4){
            this.weapon = arguments[arguments.length-1];
        }
        this.att = function () {
            alert("111");
        };

    }
    //被后面 重新赋值的 new Animal() 替换了 prototype 的值
    //Hero.prototype.nick = "123";

    Hero.prototype = Object.create(Animal.prototype);
    // Hero.prototype = new Animal();



    Hero.prototype.eat = function () {

    };

    Hero.prototype.nick = "123";

    Hero.prototype.likes = [];

    Hero.type = "英雄类";
    Hero.better = function () {
        console.log("进化");
    };

    window.Hero = Hero;
})();

