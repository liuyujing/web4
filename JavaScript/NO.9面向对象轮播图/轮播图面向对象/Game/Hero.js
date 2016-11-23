/**
 * Created by liuyujing on 2016/11/10.
 */
(function () {

    function Hero() {
        Animal.apply(this,arguments);
    }

    Hero.prototype = new Animal();


    window.Hero = Hero;
})();
