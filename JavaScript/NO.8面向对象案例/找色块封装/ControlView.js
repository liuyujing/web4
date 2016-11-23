/**
 * Created by liuyujing on 16/10/9.
 */
(function () {
    //控制界面
    function ControlView() {
        var self = this;
        this.step = 0;
        this.level = 0;
        this.preSelectedItem = null;
        this.opacity = 1.0;
        this.opacitySpace = 0.3;
        this.specialOpacity = function () {
            return self.opacity-self.opacitySpace;
        };
        this.isPlaying = false;


        //创建控制视图的背景图
        var controlBackgroundView = document.createElement("div");
        controlBackgroundView.id = "controlBackgroundView";
        document.body.appendChild(controlBackgroundView);

        //显示等级的元素
        var levelTitle = document.createElement("h1");
        levelTitle.id = "levelTitle";
        levelTitle.textContent = "等级:"+self.level+"级";
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
                self.preSelectedItem = item;
            }
            item.onclick = function () {
                if(self.isPlaying){
                    alert("正在游戏中不可调节难度！");
                    return;
                }
                //设置选择难度 不透明度的初始值
                switch (this.textContent){
                    case "难":
                        self.opacity = 1.0;
                        self.opacitySpace = 0.3;
                        break;
                    case "中":
                        self.opacity = 0.8;
                        self.opacitySpace = 0.5;
                        break;
                    case "易":
                        self.opacity = 0.8;
                        self.opacitySpace = 0.7;
                        break;
                    default:
                }

                //重新加载界面
                // finish();

                self.preSelectedItem.style.background = "#ffffff";
                this.style.background = "#25aeff";
                self.preSelectedItem = this;
            }
        }

        //    步数
        var stepTitle = document.createElement("p");
        stepTitle.textContent = "步数:"+self.step+"步";
        stepTitle.id = "stepTitle";
        controlBackgroundView.appendChild(stepTitle);


    }

    findColor.ControlView = ControlView;
})();
