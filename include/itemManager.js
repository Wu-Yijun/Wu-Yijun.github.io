const MyStaticConsts = {
    Layout: {
        NoMoreFoot: {
            height: 0,
            speed: 0,
            force: 0,
            factorForce: 0.2,
            factorSpring: 1,
            animateFrame: null,
            lastT: 0,
        },
    },
    tag: null,
};

class TagManager {
    constructor(url = "./include/tags.json") {
        // 申明一个XMLHttpRequest
        var request = new XMLHttpRequest();
        // 设置请求方法与路径
        request.open("get", url);
        // 不发送数据到服务器
        request.send(null);
        //XHR对象获取到返回信息后执行
        var that = this;
        request.onload = function () {
            // 返回状态为200，即为数据获取成功
            if (request.status == 200) {
                var data = JSON.parse(request.responseText);
                console.log(data);
                // this.tags = data;
                that.tags = data;

            }
        };
    }

    static loadTags() {

        // 获取文本宽度
        function getActualWidthOfChars(text, fontFamily = "Sans-serif") {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            ctx.font = "100px " + fontFamily;
            // ctx.font = `${size}px ${family}`;
            const metrics = ctx.measureText(text);
            const actual = Math.abs(metrics.actualBoundingBoxLeft) + Math.abs(metrics.actualBoundingBoxRight);
            return Math.max(metrics.width, actual) / 100;
        }
        // 创建含指定文本、样式和颜色的DIV的函数
        function createTag(text, colorInner = "#7773", colorStroke = "black", fontSize = "0.6em", strokeSize = "1") {
            // 创建容器元素
            var container = document.createElement('div');
            container.className = 'tag-container';

            var container1 = document.createElement('div');
            container1.className = "tag-svg";

            var container2 = document.createElement('div');
            container2.className = "tag-contents";
            container2.innerText = text;
            container2.style.fontSize = fontSize;
            const fontHWRatio = getActualWidthOfChars(text);
            const SvgLength = Math.max(3 + fontHWRatio * 26 + 10 - 5, 70);

            const xmlns = "http://www.w3.org/2000/svg";
            var tag = document.createElementNS(xmlns, "svg");
            tag.setAttributeNS(null, "version", "1.1");
            tag.setAttributeNS(null, "width", "100%");
            tag.setAttributeNS(null, "height", "100%");
            tag.setAttributeNS(null, "viewBox", `0 0 ${23 + SvgLength + 7} 46`);
            // tag.setAttributeNS(null, "preserveAspectRatio", "none");

            // tag.width = "100%";
            tag.innerHTML = `<path 
                                style="fill: ${colorInner}; 
                                stroke: ${colorStroke}; 
                                stroke-miterlimit: 10; 
                                stroke-width: ${strokeSize}" 
                                d ="M 2,23
                                    a 5 5 0 0 0 1,3
                                    l 12,16
                                    a 5 5 0 0 0 4,2
                                    l ${SvgLength},0
                                    a 5 5 0 0 0 5,-5
                                    l 0,-32
                                    a 5 5 0 0 0 -5,-5
                                    l -${SvgLength},0
                                    a 5 5 0 0 0 -4,2
                                    l -12,16
                                    a 5 5 0 0 0 -1,3
                                    Z
                                    m 10,0
                                    a 3 3 0 1 1 7,0
                                    a 3 3 0 1 1 -7,0
                                    Z" />`;

            container.appendChild(container1);
            container1.appendChild(tag);
            container.appendChild(container2);

            return container;
        }


        document.getElementById("test2").appendChild(createTag('标签1', "#7f7f7f30"));
        document.getElementById("test2").appendChild(createTag('标签2'));
        document.getElementById("test2").appendChild(createTag('标签3'));
        document.getElementById("test2").appendChild(createTag('标签4'));
        document.getElementById("test2").appendChild(createTag('标签5'));
        document.getElementById("test2").appendChild(createTag('标签6'));
        document.getElementById("test2").appendChild(createTag('标签7'));
        document.getElementById("test2").appendChild(createTag('标签8'));
        document.getElementById("test2").appendChild(createTag('标签9'));
        document.getElementById("test2").appendChild(createTag('标签10'));

    }

}

class ItemEntry {
    constructor(name, description, src) {
        this.name = name;
        this.description = description;
        this.src = src;
    }
    createItem() {
        const item = document.createElement("div");
        item.classList.add("item-entry");
        item.innerHTML = `
        <date value = "${this.src}"></date>
        <div class = "item-header">${this.name}</div>
        <div class = "item-tag tag-list"></div>
        <div class = "item-description">${this.description}</div>
        `;
        document.getElementsByClassName("item-container")[0].appendChild(item);
        return item;
    }

    static ItemEntryTest() {
        const item = new ItemEntry("测试", "这是测试", "测试网页.html");
        for (let i = 0; i < 10; i++) {
            item.createItem();
        }
    }
}

function InitializeLayout() {

    ItemEntry.ItemEntryTest();
    MyStaticConsts.tag = new TagManager();

    // no-more-foot scroll to show
    // use friction force and spring model
    window.addEventListener("mousewheel", (ev) => {
        function animate(ts) {
            if (MyStaticConsts.Layout.NoMoreFoot.lastT == null) {
                MyStaticConsts.Layout.NoMoreFoot.lastT = ts / 1000 - 1 / 60;
            }
            dt = ts / 1000 - MyStaticConsts.Layout.NoMoreFoot.lastT;
            MyStaticConsts.Layout.NoMoreFoot.lastT = ts / 1000;

            // Spring force f = k * x
            MyStaticConsts.Layout.NoMoreFoot.force -= MyStaticConsts.Layout.NoMoreFoot.height * MyStaticConsts.Layout.NoMoreFoot.factorSpring;
            // v = a *dt
            MyStaticConsts.Layout.NoMoreFoot.speed += MyStaticConsts.Layout.NoMoreFoot.force * dt;
            MyStaticConsts.Layout.NoMoreFoot.force = 0;
            // x = v * dt
            MyStaticConsts.Layout.NoMoreFoot.height += MyStaticConsts.Layout.NoMoreFoot.speed;
            // if collasped then end loop
            if (MyStaticConsts.Layout.NoMoreFoot.height <= 0) {
                MyStaticConsts.Layout.NoMoreFoot.height = 0;
                MyStaticConsts.Layout.NoMoreFoot.speed = 0;
                MyStaticConsts.Layout.NoMoreFoot.animateFrame = null;
            }
            document.getElementsByClassName("no-more-foot")[0].style.height = MyStaticConsts.Layout.NoMoreFoot.height + "px";

            if (MyStaticConsts.Layout.NoMoreFoot.height > 0)
                MyStaticConsts.Layout.NoMoreFoot.animateFrame = requestAnimationFrame(animate);
        }
        // del animate
        if (ev.deltaY < 0 && MyStaticConsts.Layout.NoMoreFoot.height <= 0 && MyStaticConsts.Layout.NoMoreFoot.animateFrame != null) {
            cancelAnimationFrame(MyStaticConsts.Layout.NoMoreFoot.animateFrame);
            MyStaticConsts.Layout.NoMoreFoot.animateFrame = null;
            console.log("del");
            return;
        }
        if (document.documentElement.clientHeight <= document.documentElement.scrollHeight - document.documentElement.scrollTop)
            // add animate
            if (ev.deltaY > 20 && MyStaticConsts.Layout.NoMoreFoot.animateFrame == null) {
                console.log("new");
                MyStaticConsts.Layout.NoMoreFoot.lastT = null;
                MyStaticConsts.Layout.NoMoreFoot.animateFrame = requestAnimationFrame(animate);
            }
        // calculate force
        MyStaticConsts.Layout.NoMoreFoot.force += ev.deltaY * MyStaticConsts.Layout.NoMoreFoot.factorForce;
    });

    for (let el of document.getElementsByClassName("click-to-switch")) {
        el.addEventListener("click", () => {
            el.classList.toggle("hover");
        });
    }

    for (let el of document.getElementsByClassName("menu-icon")) {
        el.addEventListener("click", () => {
            for (let el2 of document.getElementsByClassName("tool-bar-container")) {
                el2.classList.toggle("hover");
            }
        });
    }

    // load background
    // for(let el of document.getElementsByClassName("background-container")){
    //     el.innerHTML = "";
    //     let ifm = document.createElement("iframe");
    //     ifm.src = "./assets/backgrounds/1/main.html";
    //     // ifm.crossorigin="amonymous";
    //     // ifm.style.width = 
    //     el.appendChild(ifm);
    //     setTimeout(()=>{
    //         ifm.document.Background1.refresh();
    //     },100);


    //     // Background1.refresh()
    // }

    TagManager.loadTags();
}
