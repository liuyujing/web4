/**
 * Created by liuyujing on 2016/11/9.
 */
(function () {

    function Person(_name) {
        this.name = _name;
    }

    Person.prototype.typeName = "人类";

    var xiaoMing = new Person("小明");

    var xx = {};
    console.log(xiaoMing.hasOwnProperty("typeName"));
    console.log(xiaoMing.hasOwnProperty("name"));

    console.log(Person.prototype.isPrototypeOf(xx));

    console.log("name" in xiaoMing);

    var a = new Animal("123");
    var b = new Animal("222");
    a.tt.push(1);
    a.mm.push(2);
    console.log(b.tt);
    console.log(b.mm);
    console.log(b);
    console.log(b.__proto__);
    console.log(Animal.prototype);
    console.log(Animal.prototype.constructor);
    console.log(b.__proto__.constructor);

    // a.move();
    // a.run();
    // Animal.att();
    //
    // for (var p in a){
    //     console.log(p);
    // }
    
    
    
    function chooseNum(_mix,_max) {
        this.mix = _mix;
        this.max = _max;

    }
    
})();