/**
 * Created by liuyujing on 2016/11/10.
 */
(function () {
    
    function Person(_name) {
        this.name = _name;
        this.move = function () {
            alert("11");
        };
    }
    Person.prototype.age = 20;
    Person.prototype.ll = [];
    // Person.prototype.move = function () {
    //     alert("11");
    // };


    var pp = new Person("xiaom");
    pp.name = "xxx";
    // pp.age = 20;
    pp.ll.push(12);

    var p1 = new Person("111");
    // p1.age = 19;
    console.log(p1.ll);

    function China() {
        Person.apply(this,arguments);
        this.move = function () {
            alert("22");
        };
    }
    // China.prototype.move = function () {
    //     alert("22");
    // };
    China.prototype = new Person();
    var c = new China("xx");
    var c2 = new China("xx");
    console.log(c);
    c.move();
    c.__proto__.move();

    console.log(c instanceof China);
    console.log(c instanceof Person);
    console.log(c instanceof Object);
    console.log(c instanceof Array);
    console.log(c.constructor);
    console.log(Person.prototype.isPrototypeOf(c2));
    console.log(c.hasOwnProperty("name"));
    console.log("name" in c);

})();