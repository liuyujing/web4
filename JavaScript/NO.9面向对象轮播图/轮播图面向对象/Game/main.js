/**
 * Created by liuyujing on 2016/11/10.
 */
(function () {

    //加载 英雄 和 怪物 技能 数据的 函数
    //{heroSkills：[],monsterSkills:[]}
    function loadData() {
        return {heroSkills:[{name:"xxx",power:100},{name:"xxx2",power:200},{name:"xxx3",power:300}],monsterSkills:[{name:"ttt",power:100},{name:"ttt1",power:150}]};
    }


    //开始游戏的函数
    function startGame() {

        //初始化 英雄和怪物
        var daNiu = new Hero("大牛",1000,200);
        var niuTou = new Monster("牛头",1000,100);

        //加载英雄的技能数组
        // daNiu.skills = loadData().heroSkills;
        loadData().heroSkills.forEach(function (skill) {
            var heroSkill = new Skill(skill.name,skill.power);
            daNiu.skills.push(heroSkill);
        });
        //加载怪物技能数组的方法
        // niuTou.skills = loadData().monsterSkills;
        loadData().monsterSkills.forEach(function (skill) {
            var monsterSkill = new Skill(skill.name,skill.power);
            niuTou.skills.push(monsterSkill);
        });

        //开始 互相攻击  只要血量 大于0 就继续攻击
        while (daNiu.blood>0&&niuTou.blood>0){
            //让用户选择技能（技能数组的下标）
            var chooseHeroSkillIndex = parseInt(prompt("请选择技能：0 1 2"));
            //随机选择怪物的技能（怪物技能数组的下标）
            var chooseMonsterSkillIndex = parseInt(Math.random()*10)%niuTou.skills.length;

            //英雄攻击怪物
            // daNiu.skills 英雄技能数组
            //chooseHeroSkillIndex 技能数组的下标
            daNiu.att(niuTou,daNiu.skills[chooseHeroSkillIndex]);
            //怪物攻击英雄
            niuTou.att(daNiu,niuTou.skills[chooseMonsterSkillIndex]);

            //防止血量 出现负数的情况
            daNiu.blood = daNiu.blood<0?0:daNiu.blood;
            niuTou.blood = niuTou.blood<0?0:niuTou.blood;

            //显示结果状态
            console.log(daNiu.name+"使用"+daNiu.skills[chooseHeroSkillIndex].name+"攻击了"+niuTou.name+"还剩"+niuTou.blood+"滴血");
            console.log(niuTou.name+"使用"+niuTou.skills[chooseMonsterSkillIndex].name+"攻击了"+daNiu.name+"还剩"+daNiu.blood+"滴血");

        }
    }

    startGame();

})();
