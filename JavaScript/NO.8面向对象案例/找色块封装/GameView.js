/**
 * Created by liuyujing on 16/10/9.
 */

(function () {

    function GameView() {

        var controlView = new findColor.ControlView();

        //初始的行数
        var rowNum = 2;
        //游戏的背景图
        var backgroundView;

        function createView() {
            backgroundView = document.createElement("div");
            backgroundView.id = "backgroundView";
            document.body.appendChild(backgroundView);

            // 颜色的数组
            var colors = ["#9E413B", "#33539E", "#9E1A8D", "#259E2D"];
            //随机抽选颜色
            var arcColorIndex = parseInt(Math.random() * 100) % colors.length;

            //色块的数量：行数*行数
            var colorViewNum = rowNum * rowNum;

            // 随机的色块标识
            var specialColorViewID = parseInt(Math.random() * 10000) % colorViewNum;

            for (var i = 0; i < colorViewNum; i++) {
                //创建色块
                var colorView = ColorView(rowNum, colors[arcColorIndex], controlView.opacity);
                backgroundView.appendChild(colorView);

                //找到特殊的色块 给他一个点击事件
                if (i === specialColorViewID) {
                    colorView.style.opacity = controlView.specialOpacity();
                    colorView.onclick = function () {
                        success();
                    };
                } else {
                    // 普通色块的点击事件
                    colorView.onclick = function () {
                        failed();
                    };
                }
            }


        }

        //成功
        function success() {
            controlView.isPlaying = true;
            controlView.step++;

            switch (controlView.preSelectedItem.textContent){
                case "难":
                    controlView.opacitySpace-=0.02;
                    controlView.opacitySpace = controlView.opacitySpace===0.1?0.1:controlView.opacitySpace;
                    rowNum++;
                    break;
                case "中":
                    if (controlView.step%3===0){
                        rowNum++;
                        controlView.opacitySpace-=0.01;
                        controlView.opacitySpace = controlView.opacitySpace===0.1?0.1:controlView.opacitySpace;
                    }
                    break;
                case "易":
                    controlView.opacitySpace = 0.3;
                    if (controlView.step%5===0){
                        controlView.opacitySpace-=0.01;
                        opacitySpace = opacitySpace===0.1?0.1:opacitySpace;
                        rowNum++;
                    }
                    break;
                default:
            }

            // 等级 每成功五次增加一级
            if (controlView.step%5===0){
                controlView.level++;
            }

            finish();
        }
        //失败
        function failed() {
            controlView.isPlaying = false;
            // 让行数重置
            rowNum = 2;
            controlView.step = 0;
            controlView.level = 0;
            finish();
        }
        //游戏完成
        function finish() {

            document.getElementById("levelTitle").textContent = "等级:"+controlView.level+"级";
            document.getElementById("stepTitle").textContent = "步数:"+controlView.step+"步";
            // 替换上一个界面
            //移除
            document.body.removeChild(backgroundView);
            //重新加载游戏界面
            createView();
        }
        createView();
    }

    findColor.GameView = GameView;
})();
