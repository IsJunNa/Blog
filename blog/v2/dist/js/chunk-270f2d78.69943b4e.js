(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-270f2d78"],{"9ead":function(t,o,i){"use strict";i.r(o);var n=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",[i("div",{staticClass:"travel-container"},[i("div",{staticClass:"travel-header my-animation-slide-top"},[i("video",{staticClass:"index-video",attrs:{autoplay:"autoplay",muted:"muted",loop:"loop",src:t.$constant.favoriteVideo},domProps:{muted:!0}}),t._m(0),i("div",{staticStyle:{position:"absolute",left:"20px",bottom:"40px",margin:"10px"}},[t._v(" 每一张照片都是一次美好的记忆。 ")])]),i("div",{staticClass:"travel-content my-animation-slide-bottom"},[t.$common.isEmpty(t.photoTitleList)?t._e():i("div",{staticClass:"photo-title-warp"},t._l(t.photoTitleList,(function(o,n){return i("div",{key:n,class:{isActive:t.photoPagination.classify===o.classify},on:{click:function(i){return t.changePhotoTitle(o.classify)}}},[i("proTag",{staticStyle:{margin:"12px"},attrs:{info:o.classify+" "+o.count,color:t.$constant.before_color_list[Math.floor(6*Math.random())]}})],1)})),0),i("div",{staticClass:"photo-title"},[t._v(" "+t._s(t.photoPagination.classify)+" ")]),i("photo",{attrs:{resourcePathList:t.photoList}}),i("div",{staticClass:"pagination-wrap"},[t.photoPagination.total!==t.photoList.length?i("div",{staticClass:"pagination",on:{click:function(o){return t.pagePhotos()}}},[t._v(" 下一页 ")]):i("div",{staticStyle:{"user-select":"none"}},[t._v(" ~~到底啦~~ ")])])],1)]),i("div",{staticStyle:{background:"var(--favoriteBg)"}},[i("myFooter")],1)])},a=[function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",{staticStyle:{position:"absolute",left:"20px",top:"20px"}},[i("div",{staticStyle:{margin:"10px"}},[i("div",[t._v(" 旅拍集 ")]),i("div",{staticStyle:{"font-size":"36px","font-weight":"bold","line-height":"1.5","margin-top":"20px"}},[t._v(" 这里是我的旅拍哦 ")])])])}],e=(i("d3b7"),i("3ca3"),i("ddb0"),i("99af"),function(){return i.e("chunk-1545ba9e").then(i.bind(null,"68e4"))}),s=function(){return i.e("chunk-3c44ac4f").then(i.bind(null,"a1af"))},c=function(){return i.e("chunk-52863968").then(i.bind(null,"2c18"))},h={components:{photo:s,proTag:c,myFooter:e},data:function(){return{photoPagination:{current:1,size:10,total:0,resourceType:"lovePhoto",classify:""},photoTitleList:[],photoList:[]}},computed:{},watch:{},created:function(){this.getPhotoTitles()},mounted:function(){},methods:{getPhotoTitles:function(){var t=this;this.$http.get(this.$constant.baseURL+"/webInfo/listAdminLovePhoto").then((function(o){t.$common.isEmpty(o.data)||(t.photoTitleList=o.data,t.photoPagination={current:1,size:10,total:0,resourceType:"lovePhoto",classify:t.photoTitleList[0].classify},t.changePhoto())})).catch((function(o){t.$message({message:o.message,type:"error"})}))},changePhotoTitle:function(t){t!==this.photoPagination.classify&&(this.photoPagination={current:1,size:10,total:0,resourceType:"lovePhoto",classify:t},this.photoList=[],this.changePhoto())},pagePhotos:function(){this.photoPagination.current=this.photoPagination.current+1,this.changePhoto()},changePhoto:function(){var t=this;this.$http.post(this.$constant.baseURL+"/webInfo/listResourcePath",this.photoPagination).then((function(o){t.$common.isEmpty(o.data)||(t.photoList=t.photoList.concat(o.data.records),t.photoPagination.total=o.data.total)})).catch((function(o){t.$message({message:o.message,type:"error"})}))}}},l=h,r=(i("f728"),i("2877")),p=Object(r["a"])(l,n,a,!1,null,"581c8a54",null);o["default"]=p.exports},f715:function(t,o,i){},f728:function(t,o,i){"use strict";i("f715")}}]);