/**
 * Created by liuyujing on 2016/11/10.
 */
(function () {

    function Monster() {
        Animal.apply(this,arguments);
    }

    Monster.prototype = new Animal();

    window.Monster = Monster;

})();
