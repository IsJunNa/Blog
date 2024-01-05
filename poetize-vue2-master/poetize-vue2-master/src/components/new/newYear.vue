<!-- 灯笼组件 -->
<template>
    <div class="root">
        <div class="dengl">
            <div class="deng-box2">
                <div class="deng">
                    <div class="xian"></div>
                    <div class="deng-a">
                        <div class="deng-b">
                            <div class="deng-t">年</div>
                        </div>
                    </div>
                    <div class="shui shui-a">
                        <div class="shui-c"></div>
                        <div class="shui-b"></div>
                    </div>
                </div>
            </div>
            <div class="deng-box3">
                <div class="deng">
                    <div class="xian"></div>
                    <div class="deng-a">
                        <div class="deng-b">
                            <div class="deng-t">新</div>
                        </div>
                    </div>
                    <div class="shui shui-a">
                        <div class="shui-c"></div>
                        <div class="shui-b"></div>
                    </div>
                </div>
            </div>
            <div class="deng-box1">
                <div class="deng">
                    <div class="xian"></div>
                    <div class="deng-a">
                        <div class="deng-b">
                            <div class="deng-t">乐</div>
                        </div>
                    </div>
                    <div class="shui shui-a">
                        <div class="shui-c"></div>
                        <div class="shui-b"></div>
                    </div>
                </div>
            </div>
            <div class="deng-box">
                <div class="deng">
                    <div class="xian"></div>
                    <div class="deng-a">
                        <div class="deng-b">
                            <div class="deng-t">快</div>
                        </div>
                    </div>
                    <div class="shui shui-a">
                        <div class="shui-c"></div>
                        <div class="shui-b"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'newYear'
}
</script>

<style>
@media only screen and (max-width: 760px) {

    .deng-box,
    .deng-box1 {
        display: none;
    }
}

.deng-box {
    position: fixed;
    top: -40px;
    right: 150px;
    z-index: 9999;
    pointer-events: none;
}

.deng-box1 {
    position: fixed;
    top: -30px;
    right: 10px;
    z-index: 9999;
    pointer-events: none
}

.deng-box2 {
    position: fixed;
    top: -40px;
    left: 150px;
    z-index: 9999;
    pointer-events: none
}

.deng-box3 {
    position: fixed;
    top: -30px;
    left: 10px;
    z-index: 9999;
    pointer-events: none
}

.deng-box1 .deng,
.deng-box3 .deng {
    position: relative;
    width: 120px;
    height: 90px;
    margin: 50px;
    background: #d8000f;
    background: rgba(255, 0, 0);
    border-radius: 50% 50%;
    -webkit-transform-origin: 50% -100px;
    -webkit-animation: swing 5s infinite ease-in-out;
    box-shadow: -5px 5px 30px 4px #fc903d
}

.deng {
    position: relative;
    width: 120px;
    height: 90px;
    margin: 50px;
    background: #d8000f;
    background: rgba(255, 0, 0);
    border-radius: 50% 50%;
    -webkit-transform-origin: 50% -100px;
    -webkit-animation: swing 3s infinite ease-in-out;
    box-shadow: -5px 5px 50px 4px #fa6c00
}

.deng-a {
    width: 100px;
    height: 90px;
    background: #d8000f;
    background: rgba(216, 0, 15, .1);
    margin: 12px 8px 8px 8px;
    border-radius: 50% 50%;
    border: 2px solid #dc8f03
}

.deng-b {
    width: 45px;
    height: 90px;
    background: #d8000f;
    background: rgba(216, 0, 15, .1);
    margin: -4px 8px 8px 26px;
    border-radius: 50% 50%;
    border: 2px solid #dc8f03
}

.xian {
    position: absolute;
    top: -20px;
    left: 60px;
    width: 2px;
    height: 20px;
    background: #dc8f03
}

.shui-a {
    position: relative;
    width: 5px;
    height: 20px;
    margin: -5px 0 0 59px;
    -webkit-animation: swing 4s infinite ease-in-out;
    -webkit-transform-origin: 50% -45px;
    background: orange;
    border-radius: 0 0 5px 5px
}

.shui-b {
    position: absolute;
    top: 14px;
    left: -2px;
    width: 10px;
    height: 10px;
    background: #dc8f03;
    border-radius: 50%
}

.shui-c {
    position: absolute;
    top: 18px;
    left: -2px;
    width: 10px;
    height: 35px;
    background: orange;
    border-radius: 0 0 0 5px
}

.deng:before {
    position: absolute;
    top: -7px;
    left: 29px;
    height: 12px;
    width: 60px;
    content: " ";
    display: block;
    z-index: 999;
    border-radius: 5px 5px 0 0;
    border: solid 1px #dc8f03;
    background: orange;
    background: linear-gradient(to right, #dc8f03, orange, #dc8f03, orange, #dc8f03)
}

.deng:after {
    position: absolute;
    bottom: -7px;
    left: 10px;
    height: 12px;
    width: 60px;
    content: " ";
    display: block;
    margin-left: 20px;
    border-radius: 0 0 5px 5px;
    border: solid 1px #dc8f03;
    background: orange;
    background: linear-gradient(to right, #dc8f03, orange, #dc8f03, orange, #dc8f03)
}

.deng-t {
    font-size: 2rem;
    color: #ffeb3be6;
    font-weight: 700;
    line-height: 85px;
    text-align: center
}

.night .deng-box,
.night .deng-box1,
.night .deng-t {
    background: 0 0 !important
}

@-moz-keyframes swing {
    0% {
        -moz-transform: rotate(-10deg)
    }

    50% {
        -moz-transform: rotate(10deg)
    }

    100% {
        -moz-transform: rotate(-10deg)
    }
}

@-webkit-keyframes swing {
    0% {
        -webkit-transform: rotate(-10deg)
    }

    50% {
        -webkit-transform: rotate(10deg)
    }

    100% {
        -webkit-transform: rotate(-10deg)
    }
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    font-family: 'WeezerFont';
}

.idcicon {
    font-family: "idcicon" !important;
    font-size: 36px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}

@media (min-width: 767px) {

    .headerwap.auto-width,
    .containerwap,
    ul.mui-table-view.mui-grid-view.mui-grid-9,
    .mobileNoneannouncement,
    .mobileNoneAG,
    .mobileNoneCP,
    .mobileNoneCPgn,
    .footerwap,
    .mobileNonecooperation,
    .mobileNoneBGP {
        display: none;
    }
}

@media (max-width: 767px) {
    .fix-item,
    .zdsju-main.zdsjumain,
    .wy__common-width.wy__cloudProtection-partner,
    .package,
    .menu-wrap,
    .slider-main.auto-width,
    ul#slider-back,
    .header.auto-width,
    .footerweb,
    .personal-center-container,
    .product-activity,
    .wy-container.index-bar.wow.fadeInUp.mobileNone.animated,
    .Characteristic-no,

    /*灯笼*/
    .dengl {
        display: none;
    }

    .swiper-container {
        max-width: 100%;
        height: auto;
        border-radius: 3px;
    }

    .swiper-container img {
        max-width: 100%;
    }

    .swiper-container {
        margin-top: 10px;
    }
}
</style>