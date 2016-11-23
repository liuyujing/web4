/**
 * Created by liuyujing on 2016/11/9.
 */
(function () {
    function Animal(_name) {
        this.name = _name;
        this.move = function () {
            alert("in");
        };
        this.mm = [];
    }
    Animal.prototype.tt = [];
    Animal.prototype.run
     = function () {
        alert("out"+this.name);
    };
    Animal.att = function () {
        alert(this.name);
    };

    window.Animal = Animal;
})();