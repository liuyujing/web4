/**
 * Created by liuyujing on 2016/11/10.
 */
(function () {

    /*
    function Person(_name) {
        this.name = _name;
        this.age = 30;
    }

    function China(_name) {
        this.name = _name;
    }
    China.prototype = new Person();

    // var xiaoMing = new Person("小明");
    // console.log(xiaoMing);


    var xiaoMing = new China("小明");
    console.log(xiaoMing.age);
*/


    var daNiu = new Hero("大牛",1000,200,"武器");
    console.log(daNiu);
    var niuTou = new Monster("牛头",1000,100);
    console.log(niuTou);

    // daNiu.att(niuTou);

    console.log(niuTou.blood);


    console.log(Hero.type);
    Hero.better();

//    英雄 和怪物 都继承 动物类（_name,_blood,_power 和att攻击的行为（攻击的对象，技能对象））技能类（name,power）
//  让英雄 怪物 互相攻击 直到有一方血量 小等于0
//






    var h1 = new Hero();
    var h2 = new Hero();

    console.log(h1.nick);
    console.log(h2.nick);

    h1.likes.push("打游戏");

    console.log(h2.likes);
    console.log(h2);

    var a = new Animal();
    console.log(a.__proto__.constructor);

    var h3 = new Hero();
    // h3.att(h2);
    console.log(h3);
    h3.__proto__.att(h2);


})();




