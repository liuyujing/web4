/**
 * Created by liuyujing on 2016/12/9.
 */
(function () {

    function init() {

        var chooseColor = document.querySelector(".chooseColor");

        var canvasEle = document.querySelector(".painter");

        var allClearButton = document.querySelector(".allClearButton");

        var saveButton = document.querySelector(".saveButton");

        var eraserButton = document.querySelector(".eraserButton");

        var superEle = document.querySelector("section");

        var painter = new Painter(canvasEle,superEle);

        painter.drowLine();

        chooseColor.onchange = function () {
            painter.setLineColor(this.value);
        };

        allClearButton.onclick = function () {
            painter.clearWindow();
        };

        saveButton.onclick = function () {
            painter.saveToImage();
        };

        eraserButton.onmousedown = function () {
            painter.eraser(this);
        };
    }

    init();

})();
