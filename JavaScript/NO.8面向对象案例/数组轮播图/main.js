/**
 * Created by liuyujing on 2016/11/9.
 */
(function () {

    var images = [];
    var index = 0;
    function imageView(imageURL,linkUrl) {
        linkUrl = linkUrl||"www.ucai.cn";
        var imageBgView = document.createElement("a");
        imageBgView.href = linkUrl;
        var imageView = document.createElement("img");
        imageView.src = imageURL;
        imageBgView.appendChild(imageView);
        imageBgView.className = "image-view";

        return imageBgView;
    }

    function createBaseView(superEle) {
        var bgView = document.createElement("div");
        var leftButton = document.createElement("p");
        var rightButton = document.createElement("p");
        bgView.appendChild(leftButton);
        bgView.appendChild(rightButton);
        superEle.appendChild(bgView);

        bgView.className = "carousel-bg-view";
        leftButton.className = "carousel-left-control";
        rightButton.className = "carousel-right-control";
        leftButton.textContent = "<";
        rightButton.textContent = ">";

        leftButton.onclick = pre;
        rightButton.onclick = next;

        bgView.appendChild(images[index]);
    }

    function changeImage() {
        var lastView = document.querySelector(".image-view");
        var bgView = document.querySelector(".carousel-bg-view");
        bgView.removeChild(lastView);
    }

    function pre() {
        changeImage();
        if (index==0){
            index = images.length;
        }
        document.querySelector(".carousel-bg-view").appendChild(images[--index]);

    }

    function next() {
        changeImage();

        document.querySelector(".carousel-bg-view").appendChild(images[++index]);
        if (index==images.length-1){
            index=-1;
        }
    }

    function addImages(datas) {
        for (var i=0;i<datas.length;i++){
            images.push(imageView(datas[i].imageURL,datas[i].linkURL));
        }
    }

    function init() {

        var datas = [{imageURL:"images/1.jpg",linkURL:"https://www.baidu.com"},{imageURL:"images/2.jpg",linkURL:"https://www.baidu.com"},{imageURL:"images/3.jpg",linkURL:"https://www.baidu.com"}];
        addImages(datas);

        createBaseView(document.body);

    }

    init();

})();
