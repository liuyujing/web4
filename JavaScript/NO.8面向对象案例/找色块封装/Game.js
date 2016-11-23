/**
 * Created by liuyujing on 16/10/8.
 */
/*
(function () {

    function Game() {
        //初始的行数
        var rowNum = 2;
        //游戏的背景图
        var backgroundView;
        //步数
        var step = 0;
        //等级
        var level = 0;
        //难度选择的上一个按钮
        var preSelectedItem;
        //初始色块的不透明度
        var opacity = 1.0;
        //特殊色块与其他色块 不透明度的差值
        var opacitySpace = 0.3;
        //特殊色块的不透明度
        var specialOpacity = function () {
            return opacity-opacitySpace;
        };
        //判断是否正在游戏
        var isPlaying = false;

        //控制界面
        function controlView() {
            //创建控制视图的背景图
            var controlBackgroundView = document.createElement("div");
            controlBackgroundView.id = "controlBackgroundView";
            document.body.appendChild(controlBackgroundView);

            //显示等级的元素
            var levelTitle = document.createElement("h1");
            levelTitle.id = "levelTitle";
            levelTitle.textContent = "等级:"+level+"级";
            controlBackgroundView.appendChild(levelTitle);

        //    难度的按钮
            var degreeBackgroundView = document.createElement("ul");
            controlBackgroundView.appendChild(degreeBackgroundView);
            var degreeTitles = ["易","中","难"];
            for (var i=0;i<degreeTitles.length;i++){
                var item = document.createElement("li");
                item.textContent = degreeTitles[i];
                degreeBackgroundView.appendChild(item);
                //默认选择的难度
                if (i===degreeTitles.length-1){
                    item.style.background = "#25aeff";
                    preSelectedItem = item;
                }
                item.onclick = function () {
                    if(isPlaying){
                        alert("正在游戏中不可调节难度！");
                        return;
                    }
                    //设置选择难度 不透明度的初始值
                    switch (this.textContent){
                        case "难":
                            opacity = 1.0;
                            opacitySpace = 0.3;
                            break;
                        case "中":
                            opacity = 0.8;
                            opacitySpace = 0.5;
                            break;
                        case "易":
                            opacity = 0.8;
                            opacitySpace = 0.7;
                            break;
                        default:
                    }

                    //重新加载界面
                    finish();

                    preSelectedItem.style.background = "#ffffff";
                    this.style.background = "#25aeff";
                    preSelectedItem = this;
                }
            }

        //    步数
            var stepTitle = document.createElement("p");
            stepTitle.textContent = "步数:"+step+"步";
            stepTitle.id = "stepTitle";
            controlBackgroundView.appendChild(stepTitle);
        }

        //创建游戏界面
        function createView() {

            backgroundView = document.createElement("div");
            backgroundView.id = "backgroundView";
            document.body.appendChild(backgroundView);

            // 颜色的数组
            var colors = ["#9E413B","#33539E","#9E1A8D","#259E2D"];
            //随机抽选颜色
            var arcColorIndex = parseInt(Math.random()*100)%colors.length;

            //色块的数量：行数*行数
            var colorViewNum = rowNum*rowNum;

            // 随机的色块标识
            var specialColorViewID = parseInt(Math.random()*10000)%colorViewNum;

            for (var i=0;i<colorViewNum;i++){
                //创建色块
                var colorView = ColorView(rowNum,colors[arcColorIndex],opacity);
                backgroundView.appendChild(colorView);

                //找到特殊的色块 给他一个点击事件
                if (i===specialColorViewID){
                    colorView.style.opacity = specialOpacity();
                    colorView.onclick = function () {
                        success();
                    };
                }else {
                    // 普通色块的点击事件
                    colorView.onclick = function () {
                        failed();
                    };
                }
            }
        }

        //成功
        function success() {
            isPlaying = true;
            // 让行数+1
            // rowNum++;

            // 难：rowNum++;
            // 中：step%3===0 rowNum++;
            // 易：step%5===0 rowNum++;

            // 每成功一次 步数增加一次
            step++;

            // var rand = Math.random()+0.01;
            // opacity = rand<0.3?0.3:rand;
            //难度选择与界面关联
            //根据选择的li 上面的文字去判断
            switch (preSelectedItem.textContent){
                case "难":
                    opacitySpace-=0.02;
                    opacitySpace = opacitySpace===0.1?0.1:opacitySpace;
                    rowNum++;
                    break;
                case "中":
                    if (step%3===0){
                        rowNum++;
                        opacitySpace-=0.01;
                        opacitySpace = opacitySpace===0.1?0.1:opacitySpace;
                    }
                    break;
                case "易":
                    opacitySpace = 0.3;
                    if (step%5===0){
                        opacitySpace-=0.01;
                        opacitySpace = opacitySpace===0.1?0.1:opacitySpace;
                        rowNum++;
                    }
                    break;
                default:
            }

            console.log(opacity,opacitySpace,specialOpacity());
           // 等级 每成功五次增加一级
            if (step%5===0){
                level++;
            }

           finish();
        }
        //失败
        function failed() {
            isPlaying = false;
            // 让行数重置
            rowNum = 2;
            step = 0;
            level = 0;
            finish();
        }
        //游戏完成
        function finish() {

            // document.querySelector("#controlBackgroundView p")
            document.getElementById("levelTitle").textContent = "等级:"+level+"级";
            document.getElementById("stepTitle").textContent = "步数:"+step+"步";
            // 替换上一个界面
            //移除
            document.body.removeChild(backgroundView);
            //重新加载游戏界面
            createView();
        }

        controlView();
        createView();
    }

    window.Game = Game;
})();
*/
/*
* 作业1：把游戏界面 和控制界面 都单独封装一个js
* */

(function () {

    function Game() {
        findColor.GameView();
    }

    findColor.Game = Game;
})();
