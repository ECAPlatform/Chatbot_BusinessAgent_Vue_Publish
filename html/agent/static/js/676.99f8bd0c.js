(self["webpackChunkchatbot_IM"]=self["webpackChunkchatbot_IM"]||[]).push([[676],{63676:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return je}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"sc-crHmcD fvvtrT"},[t("div",{staticClass:"login",on:{click:function(t){e.$refs.verify.show=!1}}},[t("div",{staticClass:"login-content"},[t("div",{staticClass:"sc-gKclnd hjbBpk"},[t("div",{staticClass:"wrapper"},[t("div",{staticClass:"password-and-mobile-method method"},[t("Row",{staticClass:"method",attrs:{type:"flex"},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitLogin.apply(null,arguments)}}},[t("Col",{staticStyle:{width:"300px"}},[t("Row",{staticStyle:{"flex-direction":"column",display:"flex","justify-content":"center","align-items":"center"}},[t("h2",{staticStyle:{"text-align":"center",color:"black"}},[e._v(" 企业客服平台（客服端） ")]),t("div",{staticStyle:{"text-align":"center",color:"#a4b0be","margin-top":"5px"}},[e._v(" Version: 1.1.7 ")]),e.canChangeLoginType?t("Tabs",{staticStyle:{"margin-top":"5px"},model:{value:e.loginType,callback:function(t){e.loginType=t},expression:"loginType"}},[t("Tab-pane",{attrs:{label:"账号密码登录",name:"passwordLogin"}},[t("Form",{ref:"usernameLoginForm",staticClass:"form",attrs:{model:e.form,rules:e.rules}},[t("FormItem",{attrs:{prop:"username"}},[t("Input",{attrs:{prefix:"ios-contact",size:"large",clearable:"",placeholder:"请输入用户名",autocomplete:"off"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),t("FormItem",{attrs:{prop:"password"}},[t("Input",{attrs:{type:"password",prefix:"ios-lock",size:"large",password:"",placeholder:"请输入密码",autocomplete:"off"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),t("FormItem",{attrs:{prop:"loginCode"}},[t("div",{staticClass:"input-with-image"},[t("Input",{attrs:{prefix:"ios-contact",size:"large",clearable:"",placeholder:"请输入验证码",autocomplete:"off"},model:{value:e.form.loginCode,callback:function(t){e.$set(e.form,"loginCode",t)},expression:"form.loginCode"}}),t("img",{staticStyle:{width:"100px","vertical-align":"middle",display:"inline-block",cursor:"pointer"},attrs:{id:"canvas",src:e.imgCode},on:{click:e.clickimgCode}})],1)])],1),t("Row",["passwordLogin"==e.loginType?t("div",{staticClass:"login-btn",attrs:{type:"primary",size:"large",loading:e.loading,long:""},on:{click:e.submitLogin}},[e.loading?t("span",[e._v("登录中")]):t("span",[e._v("登录")])]):e._e()])],1),t("Tab-pane",{attrs:{label:"企业微信登录",name:"weChatLogin"}},[t("div",{staticClass:"WeChatLogin",staticStyle:{"text-align":"center"}},[t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.onThirdLogin("wechat_enterprise")}}},[t("img",{staticStyle:{width:"160px",height:"80px","object-fit":"contain"},attrs:{src:n(87853)}})]),t("div",{staticStyle:{"text-align":"center",color:"#a4b0be","margin-top":"5px"}},[e._v(" 点击上方图标扫码登录 ")])],1)])],1):t("div",[t("Tabs",{staticStyle:{"margin-top":"5px"},model:{value:e.loginType,callback:function(t){e.loginType=t},expression:"loginType"}},[t("Tab-pane",{attrs:{label:"企业微信登录",name:"weChatLogin"}},[t("div",{staticClass:"WeChatLogin"},[t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.onThirdLogin("wechat_enterprise")}}},[t("img",{staticClass:"wechat-icon",attrs:{src:n(87853)}})]),t("div",{staticStyle:{"text-align":"center",color:"#a4b0be","margin-top":"5px"}},[e._v(" 点击上方图标扫码登录 ")])],1)])],1)],1)],1),t("verify",{ref:"verify",staticClass:"verify-con",attrs:{verifyType:"LOGIN"},on:{change:e.verifyChange}}),t("div",{staticClass:"third-party-login-wrap"})],1)],1)],1)])])])])])},o=[],s=(n(70560),n(60203)),i=n(40614);function a(){return(0,i.A_)(`${i.qe}/common/common/site`)}function c(e){return(0,i.A_)(`${i.qe}/common/common/sms/${e.verificationEnums}/${e.mobile}`,e)}n(36808);var l=function(){var e=this,t=e._self._c;return t("div",[t("Row",{staticClass:"header"},[t("img",{staticClass:"logo",attrs:{src:e.storeSideLogo}})])],1)},u=[],d={data(){return{storeSideLogo:n(27442)}},methods:{init(){if(localStorage.getItem("sellersiteName")&&localStorage.getItem("sellerlogoImg")&&localStorage.getItem("sellerIconImg")&&localStorage.getItem("seller_expiration_time")){if(new Date>localStorage.getItem("seller_expiration_time"))return;{this.storeSideLogo=localStorage.getItem("sellerlogoImg"),window.document.title=localStorage.getItem("sellersiteName");let e=document.querySelector("link[rel*='icon']")||document.createElement("link");e.type="image/x-icon",e.href=localStorage.getItem("sellerIconImg"),e.rel="shortcut icon",document.getElementsByTagName("head")[0].appendChild(e)}}else;},getSite(){a().then((e=>{if(e.success&&e.result.settingValue){let n=JSON.parse(e.result.settingValue);var t=(new Date).setHours((new Date).getHours()+1);localStorage.setItem("seller_expiration_time",t),localStorage.setItem("sellersiteName",n.siteName),localStorage.setItem("sellerlogoImg",n.storeSideLogo),localStorage.setItem("sellerIconImg",n.storeSideIcon),console.log(n,"datadadada"),window.document.title=n.siteName;let r=document.querySelector("link[rel*='icon']")||document.createElement("link");r.type="image/x-icon",r.href=n.storeSideIcon,r.rel="shortcut icon",document.getElementsByTagName("head")[0].appendChild(r)}}))}},mounted(){this.init()}},g=d,m=n(43736),f=(0,m.Z)(g,l,u,!1,null,"36ac7806",null),h=f.exports,p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"foot"},[t("Row",{staticClass:"help",attrs:{type:"flex",justify:"space-around"}},[t("a",{staticClass:"item",attrs:{href:e.config.website,target:"_blank"}},[e._v("帮助")]),t("a",{staticClass:"item",attrs:{href:e.config.website,target:"_blank"}},[e._v("隐私")]),t("a",{staticClass:"item",attrs:{href:e.config.website,target:"_blank"}},[e._v("条款")])]),t("Row",{staticClass:"copyright",attrs:{type:"flex",justify:"center"}},[e._v(" Copyright © "+e._s(e.year)+" - Present "),t("a",{staticClass:"href",staticStyle:{margin:"0 5px"},attrs:{href:e.config.website,target:"_blank"}},[e._v(e._s(e.config.title))])])],1)},v=[];const y=n(76863);var w={data(){return{config:y,year:(new Date).getFullYear()}}},b=w,k=(0,m.Z)(b,p,v,!1,null,"f461712e",null),C=k.exports,_=n(10698),x=function(){var e=this,t=e._self._c;return e.show?t("div",{staticClass:"verify-content",on:{mousemove:e.mouseMove,mouseup:e.mouseUp,click:function(e){e.stopPropagation()}}},[t("div",{staticClass:"imgBox",style:{width:e.data.originalWidth+"px",height:e.data.originalHeight+"px"}},[t("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.data.backImage,alt:""}}),t("img",{staticClass:"slider",style:{left:e.distance+"px",top:e.data.randomY+"px"},attrs:{src:e.data.slidingImage,width:e.data.sliderWidth,height:e.data.sliderHeight,alt:""}}),t("Icon",{staticClass:"refresh",attrs:{type:"md-refresh"},on:{click:e.init}})],1),t("div",{staticClass:"handle",style:{width:e.data.originalWidth+"px"}},[t("span",{staticClass:"bgcolor",style:{width:e.distance+"px",background:e.bgColor}}),t("span",{staticClass:"swiper",style:{left:e.distance+"px"},on:{mousedown:e.mouseDown}},[t("Icon",{attrs:{type:"md-arrow-round-forward"}})],1),t("span",{staticClass:"text"},[e._v(e._s(e.verifyText))])])]):e._e()},S=[];const T=e=>(0,i.W4)(`${i.qe}/common/common/slider/${e}`),I=e=>(0,i.$A)(`${i.qe}/common/common/slider/${e.verificationEnums}`,e);var M={props:{verifyType:{defalut:"LOGIN",type:String}},data(){return{show:!1,type:"LOGIN",data:{backImage:"",slidingImage:"",originalHeight:150,originalWidth:300,sliderWidth:60,sliderHeight:60},distance:0,flag:!1,downX:0,bgColor:"#04ad11",verifyText:"拖动滑块解锁"}},methods:{mouseDown(e){this.downX=e.clientX,this.flag=!0},mouseMove(e){if(this.flag){let t=e.clientX-this.downX;t>this.data.originalWidth-43?this.distance=this.data.originalWidth-43:this.distance=t<0?0:t}},mouseUp(){if(!this.flag)return!1;this.flag=!1;let e={verificationEnums:this.type,xPos:this.distance};I(e).then((e=>{if(e.success)if(e.result)this.bgColor="green",this.verifyText="解锁成功",this.$emit("change",{status:!0,distance:this.distance});else{this.bgColor="red",this.verifyText="解锁失败";let e=this;setTimeout((()=>{e.init()}),1e3),this.$emit("change",{status:!1,distance:this.distance})}else this.init()})).catch((()=>{this.init()}))},init(){this.flag=!1,this.downX=0,this.distance=0,this.bgColor="#04ad11",this.verifyText="拖动滑块解锁",T(this.type).then((e=>{e.result?(this.data=e.result,this.show=!0):this.$Message.warning("请求失败请重试！")}))}},watch:{verifyType:{immediate:!0,handler:function(e){this.type=e}}}},L=M,$=(0,m.Z)(L,x,S,!1,null,"6f6fee7b",null),A=$.exports;var P,O=n(70258),R=n(49022),q="undefined"!==typeof window?window:void 0,E="undefined"!==typeof document?document:void 0,W="undefined"!==typeof navigator?navigator:void 0,B="undefined"!==typeof location?location:void 0;function N(){return(null==B?void 0:B.href)||""}var j=(null==W?void 0:W.userAgent)||"",Q=(null==W?void 0:W.platform)||"",F=null==(P=null==j?void 0:j.match(/wxwork\/([\d.]+)/i))?void 0:P[1],D=!!F,V=(!D&&/micromessenger/i.test(j),/\bAndroid\b/i.test(j),/Win/i.test(Q),H());V.isIOS,V.isMac;function H(){var e,t=null!=(e=null==W?void 0:W.maxTouchPoints)?e:1,n=/Mac/i.test(Q);return n&&t>2?{isMac:!1,isIOS:!0}:{isMac:n,isIOS:/\b(iPhone|iPad|iPod)\b/i.test(j)}}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Z(e,t){if(e){if("string"===typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(e,t):void 0}}function z(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=Z(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}for(var X,J={config:"preVerifyJsApi",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareWechat:"menu:share:wechat",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress",getBrandWCPayRequest:"getBrandWCPayRequest"},K={},G=z(Object.keys(J));!(X=G()).done;){var Y=X.value;K[J[Y]]=Y}N();var ee=!!(null==q?void 0:q.WeixinJSBridge);Promise.resolve();function te(e,t){return te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},te(e,t)}function ne(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&te(e,t)}function re(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function oe(e,t,n){return oe=re()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=Function.bind.apply(e,r),s=new o;return n&&te(s,n.prototype),s},oe.apply(null,arguments)}function se(e){return se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},se(e)}function ie(e){return-1!==Function.toString.call(e).indexOf("[native code]")}function ae(e){var t="function"===typeof Map?new Map:void 0;return ae=function(e){var n=function(){return oe(e,arguments,se(this).constructor)};if(null===e||!ie(e))return e;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,n)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),te(n,e)},ae(e)}ee||new Promise((function(e){null==E||E.addEventListener("WeixinJSBridgeReady",(function(){ee=!0,e()}))}));var ce,le,ue,de,ge,me,fe,he,pe,ve,ye,we,be,ke,Ce,_e,xe,Se,Te,Ie,Me,Le,$e;ae(Error);(function(e){e["CLProximityUnknown"]="0",e["CLProximityImmediate"]="1",e["CLProximityNear"]="2",e["CLProximityFar"]="3"})(ce||(ce={})),function(e){e["wgs84"]="wgs84",e["gcj02"]="gcj02"}(le||(le={})),function(e){e["wifi"]="wifi",e["network2g"]="2g",e["network3g"]="3g",e["network4g"]="4g",e["none"]="none",e["unknown"]="unknown"}(ue||(ue={})),function(e){e["original"]="original",e["compressed"]="compressed"}(de||(de={})),function(e){e["album"]="album",e["camera"]="camera"}(ge||(ge={})),function(e){e["normal"]="normal",e["batch"]="batch",e["front"]="front",e["batch_front"]="batch_front"}(me||(me={})),function(e){e[e["common"]=0]="common",e[e["corp_training"]=1]="corp_training",e[e["edu_normal_class"]=2]="edu_normal_class",e[e["edu_small_class"]=3]="edu_small_class"}(fe||(fe={})),function(e){e[e["normal"]=0]="normal",e[e["scan"]=1]="scan"}(he||(he={})),function(e){e[e["chat"]=0]="chat",e[e["qrcode"]=1]="qrcode"}(pe||(pe={})),function(e){e["contact_profile"]="contact_profile",e["single_chat_tools"]="single_chat_tools",e["group_chat_tools"]="group_chat_tools",e["chat_attachment"]="chat_attachment",e["single_kf_tools"]="single_kf_tools",e["chain_single_chat_tools"]="chain_single_chat_tools",e["chain_group_chat_tools"]="chain_group_chat_tools",e["normal"]="normal"}(ve||(ve={})),function(e){e["release"]="release",e["trial"]="trial",e["develop"]="develop"}(ye||(ye={})),function(e){e[e["internal"]=1]="internal",e[e["external"]=2]="external"}(we||(we={})),function(e){e[e["mediaid"]=1]="mediaid",e[e["url"]=2]="url",e[e["localId"]=4]="localId"}(be||(be={})),function(e){e["None"]="None",e["HWOpenTalk"]="HWOpenTalk",e["VoIP"]="VoIP",e["SystemCall"]="SystemCall"}(ke||(ke={})),function(e){e["qrCode"]="qrCode",e["barCode"]="barCode"}(Ce||(Ce={})),function(e){e["single"]="single",e["multi"]="multi"}(_e||(_e={})),function(e){e["department"]="department",e["user"]="user"}(xe||(xe={})),function(e){e["single"]="single",e["multi"]="multi"}(Se||(Se={})),function(e){e["department"]="department",e["user"]="user"}(Te||(Te={})),function(e){e[e["all"]=0]="all",e[e["unselected"]=1]="unselected"}(Ie||(Ie={})),function(e){e["single"]="single",e["multi"]="multi"}(Me||(Me={})),function(e){e["create_approval"]="10001",e["view_approval"]="10002"}(Le||(Le={})),function(e){e["link"]="link",e["text"]="text"}($e||($e={}));var Ae,Pe,Oe,Re,qe,Ee="1.4.5";(function(e){e["serviceApp"]="ServiceApp",e["corpApp"]="CorpApp"})(Ae||(Ae={})),function(e){e["zh"]="zh",e["en"]="en"}(Pe||(Pe={})),function(e){e["top"]="top",e["callback"]="callback",e["self"]="self"}(Oe||(Oe={})),function(e){e["middle"]="middle",e["small"]="small"}(Re||(Re={}));qe={},qe[Re.middle]=["480px","416px"],qe[Re.small]=["320px","380px"];n(34155);var We={destroyed(){window.removeEventListener("message",this.receiveMessage,!1)},components:{Header:h,Footer:C,verify:A},data(){return{receiveMessage:null,weChatUrl:"https://sd01.novonordiskchina.cn/admin/sys/thirdLogin/render/wechat_enterprise",imgCode:"/",checkKey:(new Date).getTime(),saveLogin:!0,loading:!1,verifyStatus:!1,time:60,loginType:"weChatLogin",canChangeLoginType:!1,form:{mobile:"",password:"",code:"",loginCode:""},formSms:{mobile:"",code:""},rules:{mobile:[{required:!0,message:"手机号不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}]},ruleInline:{username:[{required:!0,message:"请输入用户名"}],password:[{required:!0,message:"请输入密码"},{type:"string",min:6,message:"密码不能少于6位"}]},codeMsg:"发送验证码"}},created(){console.log("ww.SDK_VERSION",Ee)},mounted(){this.getCode(),console.log(this.$route.fullPath)},methods:{getCode(){(0,s.Cq)(this.checkKey).then((e=>{0==e.code&&(this.imgCode=e.result)}))},clickimgCode(){this.getCode()},onThirdLogin(e){window.open(this.weChatUrl,`login ${e}`,"height=500, width=500, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");let t=this;this.receiveMessage&&(console.log("receiveMessage",this.receiveMessage),window.removeEventListener("message",this.receiveMessage,!1)),this.receiveMessage=function(e){console.log("event为",e);var n=e.origin;console.log("origin",n);let r=e.data;console.log("event",e),"登录失败"===r?t.$message.warning(r):r&&"object"===typeof r?console.log("未登录！"):"string"===typeof r?(0,s.qn)(r).then((e=>{console.log("getLoginUser",e),window.removeEventListener("message",this.receiveMessage,!1),t.afterLogin(e)})).catch((()=>{t.$message.warning("登录失败,请稍后再试!")})):console.log("未登录：收到未知的数据结构",r)},window.addEventListener("message",this.receiveMessage,!1)},loginSuccess(){this.$router.push({name:"message2"}).catch((()=>{console.log("登录跳转Home Page出错,这个错误从哪里来的")}))},requestFailed(e){this.$notification["error"]({message:"登录失败",description:((e.response||{}).data||{}).message||e.message||"请求出现错误，请稍后再试",duration:4}),this.loginBtn=!1},afterLogin(e){console.log("res.result",e.result);let t=e.result.token;(0,R.PQ)("accessToken",t);let n=e.result.userInfo.username;(0,R.PQ)("username",n);let r=e.result.userInfo.id;(0,R.PQ)("id",r);let o=e.result.userInfo.avatar;o||(o="kefu.png"),(0,R.PQ)("face",o),(0,R.PQ)("checkStatus","logoff"),this.$store.state.user.name=n,this.$store.state.user.id=r,this.$store.state.user.face=o,_.Z.initRouter(this),this.$router.push({name:"message2"})},sendCode(){if(60===this.time){if(""===this.formSms.mobile)return void this.$Message.warning("请先填写手机号");if(!this.verifyStatus)return void this.$Message.warning("请先完成安全验证");let e={mobile:this.formSms.mobile,verificationEnums:"LOGIN"};c(e).then((e=>{if(e.success){this.$Message.success("验证码发送成功");let e=this;this.interval=setInterval((()=>{e.time--,0===e.time?(e.time=60,e.codeMsg="重新发送",e.verifyStatus=!1,clearInterval(e.interval)):e.codeMsg=e.time}),1e3)}else this.$Message.warning(e.message)}))}},submitLogin(){this.$refs.usernameLoginForm.validate((e=>{if(!e)return this.$Message.error("请补全登录信息！"),!1;if("passwordLogin"==this.loginType){let e={captcha:this.form.loginCode,checkKey:this.checkKey,password:this.form.password,username:this.form.username};(0,s.C6)(e).then((e=>{console.log("res",e),e&&200===e.code&&(this.$Message.success("登录成功"),this.afterLogin(e))}))}}))},doLogin(){this.loading=!0;let e=new FormData;e.append("username",this.form.username),e.append("password",(0,O.md5)(this.form.password)),login(e).then((e=>{e&&200===e.code?this.afterLogin(e):this.loading=!1})).catch((()=>{this.loading=!1}))},verifyChange(e){if(e.status){if("passwordLogin"==this.loginType){this.loading=!0;let e=new FormData;e.append("username",this.form.username),e.append("password",(0,O.md5)(this.form.password)),login(e).then((e=>{this.loading=!1,e&&e.success&&this.afterLogin(e)})).catch((()=>{this.loading=!1}))}this.verifyStatus=!0,this.$refs.verify.show=!1}},verifyBtnClick(){this.verifyStatus||this.$refs.verify.init()}}},Be=We,Ne=(0,m.Z)(Be,r,o,!1,null,"15e3ef6a",null),je=Ne.exports},34155:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function a(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:s}catch(e){n=s}})();var c,l=[],u=!1,d=-1;function g(){u&&c&&(u=!1,c.length?l=c.concat(l):d=-1,l.length&&m())}function m(){if(!u){var e=i(g);u=!0;var t=l.length;while(t){c=l,l=[];while(++d<t)c&&c[d].run();d=-1,t=l.length}c=null,u=!1,a(e)}}function f(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||u||i(m)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},60203:function(e,t,n){"use strict";n.d(t,{BK:function(){return g},C6:function(){return s},CF:function(){return d},Cq:function(){return o},L0:function(){return a},Mf:function(){return m},Tm:function(){return i},Wy:function(){return f},go:function(){return u},hm:function(){return c},oJ:function(){return l},qn:function(){return h}});var r=n(40614);const o=e=>(0,r.W4)("https://sd01.novonordiskchina.cn/admin/sys/randomImage/"+e),s=e=>(0,r.so)("https://sd01.novonordiskchina.cn/admin/sys/login",e),i=e=>(0,r.Ap)("https://sd01.novonordiskchina.cn/admin/sys/common/upload",e),a=e=>(0,r.A_)("https://sd01.novonordiskchina.cn/admin/chat/chatMessage/listByUserId",e),c=e=>(0,r.A_)("https://sd01.novonordiskchina.cn/admin/chat/chatQuickReply/list",e),l=e=>(0,r.Qi)("https://sd01.novonordiskchina.cn/admin/chat/chatQuickReply/add",e),u=e=>(0,r.Jl)("https://sd01.novonordiskchina.cn/admin/chat/chatQuickReply/delete",e),d=e=>(0,r.Mt)("https://sd01.novonordiskchina.cn/admin/chat/chatQuickReply/edit",e),g=e=>(0,r.A_)("https://sd01.novonordiskchina.cn/admin/report/agentOplog/queryALLAgentStatus",e),m=e=>(0,r.A_)("https://sd01.novonordiskchina.cn/admin/report/agentOplog/list",e),f=e=>(0,r.Qi)("https://sd01.novonordiskchina.cn/admin/report/agentOplog/add",e),h=e=>(0,r.W4)("https://sd01.novonordiskchina.cn/admin/sys/thirdLogin/getLoginUser/"+e)},40614:function(e,t,n){"use strict";n.d(t,{$A:function(){return C},A_:function(){return p},Ap:function(){return b},Jl:function(){return y},Mt:function(){return v},Qi:function(){return w},W4:function(){return k},qe:function(){return u},so:function(){return _}});n(70560);var r=n(47467),o=n.n(r),s=n(49022),i=n(93364),a=n(67434),c=(n(36808),n(55877)),l=n(29698);const u=l.Z.BASE_COMMON,d=(l.Z.BASE_SELLER,"X-Access-Token"),g=o().create({withCredentials:!0,timeout:8e3,baseURL:"/"});var m=0;const f=h();function h(){let e=!1,t=!1;return function(){if(!e){e=!0;let n=(0,s.bh)("refreshToken");handleRefreshToken(n).then((n=>{if(n.success){let{accessToken:r,refreshToken:o}=n.result;(0,s.PQ)("accessToken",r),(0,s.PQ)("refreshToken",o),t=!0,e=!1}else t=!1,e=!1,i.N.push("/login")})).catch((n=>{t=!1,e=!1}))}return new Promise((n=>{const r=setInterval((()=>{e||(clearInterval(r),n(t?"success":"fail"))}),500)}))}}g.interceptors.request.use((e=>{"get"==e.method&&(e.params={_t:Date.parse(new Date)/1e3,...e.params});let t=(0,s.bh)("uuid");return t||(t=(0,c.v4)(),(0,s.PQ)("uuid",t)),e.headers["uuid"]=t,e}),(e=>(a.Message.error("请求超时"),Promise.reject(e)))),g.interceptors.response.use((e=>{const t=e.data;switch(200===!t.code&&t.msg&&a.Message.error(t.msg),t.code){case 400:null!==t.msg?a.Message.error(t.msg):a.Message.error("系统异常");break;case 20004:case 203:return console.log("code 203"),(0,s.kr)("accessToken"),"login"!=i.N.history.current.name&&(null!==t.msg?a.Message.error(t.msg):a.Message.error("未知错误，请重新登录"),i.N.push("/login")),t;case 204:if(console.log("---data---",t),t.msg.password)return(0,s.kr)("accessToken"),null!==t.msg?a.Message.error("用户名或密码错误"):a.Message.error("未知错误，请重新登录"),i.N.push("/login"),t;null!==t.msg?a.Message.error(t.msg):a.Message.error("系统异常");break;case 206:return null!==t.msg?a.Message.error(t.msg):a.Message.error("您没有相关权限！"),t;case 500:null!==t.msg&&void 0!==t.msg?a.Message.error(t.msg):null!==t.message?a.Message.error(t.message):a.Message.error("系统异常");break;default:return t.success=!0,t}}),(async e=>{if(e.response)if(401===e.response.status);else if(404===e.response.status);else if(403===e.response.status||20004===e.response.data.code){if(m++,1===m){const t=await f();if("success"===t){if(1===m)return e.response.config.headers.accessToken=(0,s.bh)("accessToken"),g(e.response.config);i.N.go(0)}else i.N.push("/login");m=0}}else a.Message.error(e.response.data.msg);return i.N.push("/login"),Promise.resolve(e)}));const p=(e,t)=>{let n=(0,s.bh)("accessToken");return g({method:"get",url:`${e}`,params:t,headers:{[d]:n}})},v=(e,t)=>{let n=(0,s.bh)("accessToken");return g({method:"put",url:`${e}`,data:t,headers:{[d]:n}})},y=(e,t)=>{let n=(0,s.bh)("accessToken");return g({method:"delete",url:`${e}`,params:t,headers:{[d]:n}})},w=(e,t)=>{let n=(0,s.bh)("accessToken");return g({method:"post",url:`${e}`,data:t,headers:{[d]:n}})},b=(e,t)=>{let n=(0,s.bh)("accessToken");return g({method:"post",url:`${e}`,data:t,headers:{[d]:n,"Content-Type":"multipart/form-data"}})},k=(e,t)=>g({method:"get",url:`${e}`,params:t}),C=(e,t)=>g({method:"post",url:`${e}`,params:t}),_=(e,t)=>g({method:"post",url:`${e}`,data:t})},70258:function(e){function t(e,t){var n=(65535&e)+(65535&t),r=(e>>16)+(t>>16)+(n>>16);return r<<16|65535&n}function n(e,t){return e<<t|e>>>32-t}function r(e,r,o,s,i,a){return t(n(t(t(r,e),t(s,a)),i),o)}function o(e,t,n,o,s,i,a){return r(t&n|~t&o,e,t,s,i,a)}function s(e,t,n,o,s,i,a){return r(t&o|n&~o,e,t,s,i,a)}function i(e,t,n,o,s,i,a){return r(t^n^o,e,t,s,i,a)}function a(e,t,n,o,s,i,a){return r(n^(t|~o),e,t,s,i,a)}function c(e){for(var n=1732584193,r=-271733879,c=-1732584194,l=271733878,u=0;u<e.length;u+=16){var d=n,g=r,m=c,f=l;n=o(n,r,c,l,e[u+0],7,-680876936),l=o(l,n,r,c,e[u+1],12,-389564586),c=o(c,l,n,r,e[u+2],17,606105819),r=o(r,c,l,n,e[u+3],22,-1044525330),n=o(n,r,c,l,e[u+4],7,-176418897),l=o(l,n,r,c,e[u+5],12,1200080426),c=o(c,l,n,r,e[u+6],17,-1473231341),r=o(r,c,l,n,e[u+7],22,-45705983),n=o(n,r,c,l,e[u+8],7,1770035416),l=o(l,n,r,c,e[u+9],12,-1958414417),c=o(c,l,n,r,e[u+10],17,-42063),r=o(r,c,l,n,e[u+11],22,-1990404162),n=o(n,r,c,l,e[u+12],7,1804603682),l=o(l,n,r,c,e[u+13],12,-40341101),c=o(c,l,n,r,e[u+14],17,-1502002290),r=o(r,c,l,n,e[u+15],22,1236535329),n=s(n,r,c,l,e[u+1],5,-165796510),l=s(l,n,r,c,e[u+6],9,-1069501632),c=s(c,l,n,r,e[u+11],14,643717713),r=s(r,c,l,n,e[u+0],20,-373897302),n=s(n,r,c,l,e[u+5],5,-701558691),l=s(l,n,r,c,e[u+10],9,38016083),c=s(c,l,n,r,e[u+15],14,-660478335),r=s(r,c,l,n,e[u+4],20,-405537848),n=s(n,r,c,l,e[u+9],5,568446438),l=s(l,n,r,c,e[u+14],9,-1019803690),c=s(c,l,n,r,e[u+3],14,-187363961),r=s(r,c,l,n,e[u+8],20,1163531501),n=s(n,r,c,l,e[u+13],5,-1444681467),l=s(l,n,r,c,e[u+2],9,-51403784),c=s(c,l,n,r,e[u+7],14,1735328473),r=s(r,c,l,n,e[u+12],20,-1926607734),n=i(n,r,c,l,e[u+5],4,-378558),l=i(l,n,r,c,e[u+8],11,-2022574463),c=i(c,l,n,r,e[u+11],16,1839030562),r=i(r,c,l,n,e[u+14],23,-35309556),n=i(n,r,c,l,e[u+1],4,-1530992060),l=i(l,n,r,c,e[u+4],11,1272893353),c=i(c,l,n,r,e[u+7],16,-155497632),r=i(r,c,l,n,e[u+10],23,-1094730640),n=i(n,r,c,l,e[u+13],4,681279174),l=i(l,n,r,c,e[u+0],11,-358537222),c=i(c,l,n,r,e[u+3],16,-722521979),r=i(r,c,l,n,e[u+6],23,76029189),n=i(n,r,c,l,e[u+9],4,-640364487),l=i(l,n,r,c,e[u+12],11,-421815835),c=i(c,l,n,r,e[u+15],16,530742520),r=i(r,c,l,n,e[u+2],23,-995338651),n=a(n,r,c,l,e[u+0],6,-198630844),l=a(l,n,r,c,e[u+7],10,1126891415),c=a(c,l,n,r,e[u+14],15,-1416354905),r=a(r,c,l,n,e[u+5],21,-57434055),n=a(n,r,c,l,e[u+12],6,1700485571),l=a(l,n,r,c,e[u+3],10,-1894986606),c=a(c,l,n,r,e[u+10],15,-1051523),r=a(r,c,l,n,e[u+1],21,-2054922799),n=a(n,r,c,l,e[u+8],6,1873313359),l=a(l,n,r,c,e[u+15],10,-30611744),c=a(c,l,n,r,e[u+6],15,-1560198380),r=a(r,c,l,n,e[u+13],21,1309151649),n=a(n,r,c,l,e[u+4],6,-145523070),l=a(l,n,r,c,e[u+11],10,-1120210379),c=a(c,l,n,r,e[u+2],15,718787259),r=a(r,c,l,n,e[u+9],21,-343485551),n=t(n,d),r=t(r,g),c=t(c,m),l=t(l,f)}return[n,r,c,l]}function l(e){for(var t="0123456789abcdef",n="",r=0;r<4*e.length;r++)n+=t.charAt(e[r>>2]>>r%4*8+4&15)+t.charAt(e[r>>2]>>r%4*8&15);return n}function u(e){for(var t=1+(e.length+8>>6),n=new Array(16*t),r=0;r<16*t;r++)n[r]=0;for(r=0;r<e.length;r++)n[r>>2]|=(255&e.charCodeAt(r))<<r%4*8;return n[r>>2]|=128<<r%4*8,n[16*t-2]=8*e.length,n}function d(e){return l(c(u(e)))}e.exports={md5:d}},55877:function(e,t,n){var r=n(23570),o=n(71171),s=o;s.v1=r,s.v4=o,e.exports=s},45327:function(e){for(var t=[],n=0;n<256;++n)t[n]=(n+256).toString(16).substr(1);function r(e,n){var r=n||0,o=t;return[o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]]].join("")}e.exports=r},85217:function(e){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var n=new Uint8Array(16);e.exports=function(){return t(n),n}}else{var r=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;return r}}},23570:function(e,t,n){var r,o,s=n(85217),i=n(45327),a=0,c=0;function l(e,t,n){var l=t&&n||0,u=t||[];e=e||{};var d=e.node||r,g=void 0!==e.clockseq?e.clockseq:o;if(null==d||null==g){var m=s();null==d&&(d=r=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==g&&(g=o=16383&(m[6]<<8|m[7]))}var f=void 0!==e.msecs?e.msecs:(new Date).getTime(),h=void 0!==e.nsecs?e.nsecs:c+1,p=f-a+(h-c)/1e4;if(p<0&&void 0===e.clockseq&&(g=g+1&16383),(p<0||f>a)&&void 0===e.nsecs&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");a=f,c=h,o=g,f+=122192928e5;var v=(1e4*(268435455&f)+h)%4294967296;u[l++]=v>>>24&255,u[l++]=v>>>16&255,u[l++]=v>>>8&255,u[l++]=255&v;var y=f/4294967296*1e4&268435455;u[l++]=y>>>8&255,u[l++]=255&y,u[l++]=y>>>24&15|16,u[l++]=y>>>16&255,u[l++]=g>>>8|128,u[l++]=255&g;for(var w=0;w<6;++w)u[l+w]=d[w];return t||i(u)}e.exports=l},71171:function(e,t,n){var r=n(85217),o=n(45327);function s(e,t,n){var s=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null),e=e||{};var i=e.random||(e.rng||r)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var a=0;a<16;++a)t[s+a]=i[a];return t||o(i)}e.exports=s},27442:function(e,t,n){"use strict";e.exports=n.p+"static/img/logo.d466ab0b.png"},87853:function(e,t,n){"use strict";e.exports=n.p+"static/img/wchat.a568fd6d.png"}}]);