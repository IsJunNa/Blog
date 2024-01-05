const disabled = () => {
    console.log('禁止脚本，运行成功');
    const config = {
        rightKey: false, // 是否开启右键菜单
        controller: false, // 是否开启控制台
        print: false, // 是否允许打印
        savePage: false, // 是否允许 ctrl + s 保存网页 乌发禁用菜单保存
    }

    function loadStyleString(cssText) {
        var style = document.createElement("style");
        style.type = "text/css";
        try {
            // firefox、safari、chrome和Opera
            style.appendChild(document.createTextNode(cssText));
        } catch (ex) {
            // IE早期的浏览器 ,需要使用style元素的stylesheet属性的cssText属性
            style.styleSheet.cssText = cssText;
        }
        document.getElementsByTagName("head")[0].appendChild(style);
    }

    // disabeld
    // 禁用部分功能
    // 右键禁用
    if (!config.rightKey) document.oncontextmenu = () => false;
    // 打印
    if (!config.print) {
        let cssIndex = Array(...document.styleSheets).findIndex(item => item.href == null)
        // 禁止打印 添加媒体查询 css 打印时隐藏所有内容
        loadStyleString(`
            @media print {
                body {
                    display: none;
                } 
                html::after {
                    content: "禁止打印!";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 80px;
                    letter-spacing: 15px;
                    color: brown;
                }
            }
        `);
    }

    // 禁用 ctrl + s 和 F12 控制台
    window.addEventListener("keydown", function (e) {
        if (e.keyCode == 123 && !config.controller) {
            e.preventDefault()
            return false
            // alert('禁止打开控制台')
        }
        //可以判断是不是mac，如果是mac,ctrl变为花键
        //event.preventDefault() 方法阻止元素发生默认的行为。
        if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) && !config.savePage) {
            e.preventDefault();
            return false
            // Process event...
            alert('禁止保存网页')
        }
    }, false);

    // 控制台
    if (!config.controller) {
        var threshold = 200;
        var widthThreshold = window.outerWidth - window.innerWidth > threshold;
        var heightThreshold = window.outerHeight - window.innerHeight > threshold;
        function exit() {
            loadStyleString(`
                    body {
                        display: none;
                    } 
                    html::after {
                        content: "请关闭控制台，并F5重新刷新页面!";
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 50px;
                        letter-spacing: 15px;
                        color: brown;
                    }
            `);
        }
        //   
        (function () {
            var re = /x/;
            var i = 0;
            console.log(re);
            re.toString = function () {
                exit()
            };
        })();
        // 
        if (widthThreshold || heightThreshold) {
            exit()
        }
    }
}
window.addEventListener('load', disabled)
