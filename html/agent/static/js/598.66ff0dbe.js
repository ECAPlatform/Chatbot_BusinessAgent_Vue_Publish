"use strict";(self["webpackChunkchatbot_IM"]=self["webpackChunkchatbot_IM"]||[]).push([[598],{2598:function(e,t,a){a.r(t),a.d(t,{default:function(){return C}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"wrapper"},[t("MainLayout",{ref:"mainLayout",staticStyle:{"backgroud-color":"#ffffff","border-radius":"50px"},attrs:{idx:0}},[t("el-container",{staticClass:"full-height newstyleCorner",attrs:{slot:"container"},slot:"container"},[t("el-aside",{staticClass:"aside-box",attrs:{width:"240px"}},[t("el-container",{staticClass:"full-height",attrs:{direction:"vertical"}},[t("el-header",{staticClass:"top-menu"},[t("div",{staticClass:"top-menu-item"},[t("div",{staticClass:"top-menu-item-box active"},[t("p",[e._v("会话")]),t("p",{staticClass:"box-tag"},[e._v("(0)")])]),t("div",{staticClass:"top-menu-item-box"},[t("p",[e._v("排队")]),t("p",{staticClass:"box-tag"},[e._v("(0)")])]),t("div",{staticClass:"top-menu-item-box"},[t("p",[e._v("客服")]),t("p",{staticClass:"box-tag"},[e._v("(0)")])])])]),t("el-header",{staticClass:"m-menu"},[t("div",{staticClass:"m-menu-item"},[t("div",{staticClass:"m-menu-item-box"},[t("span",[e._v("沟通中：")]),t("span",{staticClass:"m-box-tag"},[e._v("0")])]),t("div",{staticClass:"m-menu-item-box"},[t("span",[e._v("已结束：")]),t("span",{staticClass:"m-box-tag"},[e._v("0")])]),t("div",{staticClass:"m-menu-item-box"},[t("span",[e._v("已离开：")]),t("span",{staticClass:"m-box-tag"},[e._v("0")])])])]),t("el-header",{staticClass:"header",attrs:{height:"60px"}},[t("div",{staticClass:"from-search"},[t("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"搜索好友",size:"small"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1)]),t("el-header",{directives:[{name:"show",rawName:"v-show",value:1==e.loadStatus&&e.topItems.length>0,expression:"loadStatus == 1 && topItems.length > 0"}],staticClass:"subheader",class:{shadow:e.subHeaderShadow},attrs:{height:e.subHeaderPx}},e._l(e.topItems,(function(a){return t("div",{key:a.index_name,staticClass:"top-item",on:{click:function(t){return e.clickTab(a.index_name)},contextmenu:function(t){return t.preventDefault(),e.topItemsMenu(a,t)}}},[t("el-tooltip",{attrs:{effect:"dark",placement:"top-start",content:(a.name,a.name)}},[t("div",{staticClass:"avatar"},[t("span",{directives:[{name:"show",rawName:"v-show",value:!a.face,expression:"!item.face"}]},[e._v(" "+e._s((a.name,a.name).substr(0,1))+" ")]),a.face?t("img",{directives:[{name:"show",rawName:"v-show",value:a.face,expression:"item.face"}],attrs:{src:a.face,onerror:e.$store.state.defaultAvatar}}):t("face-null",{attrs:{text:a.name}})],1)]),t("div",{staticClass:"name",class:{active:e.index_name===a.id}},[e._v(" "+e._s((a.name,a.name))+" ")])],1)})),0),t("el-scrollbar",{ref:"menusScrollbar",staticClass:"full-height newstyle",staticStyle:{"backgroud-color":"red"},attrs:{tag:"section",native:!1}},[t("el-main",{staticClass:"main"},[t("p",{directives:[{name:"show",rawName:"v-show",value:0===e.loadStatus,expression:"loadStatus === 0"}],staticClass:"empty-data"},[t("i",{staticClass:"el-icon-loading"}),e._v(" 数据加载中... ")]),t("p",{directives:[{name:"show",rawName:"v-show",value:1===e.loadStatus&&0===e.talkNum,expression:"loadStatus === 1 && talkNum === 0"}],staticClass:"empty-data"},[e._v(" 暂无聊天消息 ")]),t("p",{directives:[{name:"show",rawName:"v-show",value:1===e.loadStatus&&e.talkNum>0,expression:"loadStatus === 1 && talkNum > 0"}],staticClass:"main-menu"},[t("span",{staticClass:"title"},[e._v("对话记录("+e._s(e.talkNum)+")")])]),1===e.loadStatus?e._l(e.userTalkItem,(function(a,s){return t("div",{key:a.id,staticClass:"talk-item pointer",class:{active:e.activeIndex==s},on:{click:function(t){return e.clickTab(a.userId,a,s)}}},[t("div",{staticClass:"avatar-box"},[a.face?t("face",{attrs:{text:a.face}}):t("face-null",{attrs:{text:a.name}}),t("div",{directives:[{name:"show",rawName:"v-show",value:0==a.is_top,expression:"item.is_top == 0"}],staticClass:"top-mask",on:{click:function(t){return t.stopPropagation(),e.topChatItem(a)}}},[t("i",{staticClass:"el-icon-top"})])],1),t("div",{staticClass:"card-box"},[t("div",{staticClass:"title"},[t("div",{staticClass:"card-name"},[t("p",{staticClass:"nickname"},[e._v(" "+e._s(a.remark_name?a.remark_name:a.name)+" ")]),t("div",{directives:[{name:"show",rawName:"v-show",value:a.unread,expression:"item.unread"}],staticClass:"larkc-tag"},[e._v(" "+e._s(a.unread)+"条未读 ")]),t("div",{directives:[{name:"show",rawName:"v-show",value:a.is_top,expression:"item.is_top"}],staticClass:"larkc-tag top"},[e._v(" TOP ")]),t("div",{directives:[{name:"show",rawName:"v-show",value:a.is_robot,expression:"item.is_robot"}],staticClass:"larkc-tag top"},[e._v(" BOT ")]),t("div",{directives:[{name:"show",rawName:"v-show",value:2==a.talk_type,expression:"item.talk_type == 2"}],staticClass:"larkc-tag group"},[e._v(" 群组 ")]),t("div",{directives:[{name:"show",rawName:"v-show",value:a.is_disturb,expression:"item.is_disturb"}],staticClass:"larkc-tag disturb"},[t("i",{staticClass:"iconfont icon-xiaoximiandarao"})])]),t("div",{staticClass:"card-time"},[e._v(" "+e._s(e.beautifyTime(a.lastTalkTime))+" ")])]),t("div",{staticClass:"talk-message"},["MESSAGE"===a.lastMessageType?t("span",[e._v(e._s(a.lastTalkMessage))]):e._e(),"GOODS"===a.lastMessageType?t("span",[e._v("[商品链接]")]):e._e(),"ORDER"===a.lastMessageType?t("span",[e._v("[订单链接]")]):e._e()]),t("div",{staticClass:"content"},[e.index_name!=a.index_name&&a.draft_text?[t("span",{staticClass:"draft-color"},[e._v("[草稿]")]),t("span",[e._v(e._s(a.draft_text))])]:[0==a.is_robot?[1==a.talk_type?t("span",{class:{"online-color":1==a.is_online}},[e._v(" ["+e._s(1==a.is_online?"在线":"离线")+"] ")]):t("span",[e._v("[群消息]")])]:e._e(),t("span",[e._v(e._s(a.msg_text))])]],2)])])})):e._e()],2)],1)],1)],1),t("el-main",{staticClass:"main-box ov-hidden full-height no-padding flex",staticStyle:{"backgroud-color":"#f2f2f2"}},[null==e.index_name?t("WelcomeModule",{staticClass:"flex-8"}):e.params.talkId?t("TalkPanel",{staticClass:"full-height flex-8",attrs:{params:e.params,goodsParams:e.goodsParams,"is-online":e.isFriendOnline},on:{"change-talk":e.changeTalk,"close-talk":e.closeTalk}}):e._e()],1)],1)],1),t("UserSearch",{ref:"searchUsers"})],1)},i=[],n=a(26294),l=a(61966),o=a(98321),r=a(3134),c=a(82872),m=a(7360),d=a(86137),u=a(61372),_=a(90357),h=a(95190),p=a(88318);const v=document.title;var k={name:"MessagePage",components:{MainLayout:l.Z,TalkPanel:r.Z,UserSearch:c.Z,OtherLink:m.Z,WelcomeModule:o.Z},data(){return{activeIndex:9999999,subHeaderShadow:!1,launchGroupShow:!1,params:{talk_type:0,receiver_id:0,nickname:"",clickFlag:!0},goodsParams:{goodsId:"",skuId:""},input:"",subMenu:!1,loadStatus:0,interval:null,userTalkItem:[]}},computed:{...(0,n.mapGetters)(["topItems","talkItems","unreadNum","talkNum"]),...(0,n.mapState)({face:e=>e.user.face,name:e=>e.user.name,talks:e=>e.talks.items,id:e=>e.user.id,index_name:e=>e.dialogue.index_name,monitorFriendsStatus:e=>e.notify.friendStatus,myUnreadNum:e=>e.notify.unreadNum,toUser:e=>e.user.toUser}),subHeaderPx(){const e=7,t=this.topItems.length;let a=60;return t>e&&(a=(Math.floor(t/e)+(t%e>0?1:0))*a),`${a}px`}},watch:{talkItems(e){e&&this.$set(this,"userTalkItem",e)},input(e,t){if(console.log(e,t),e){let t=["",...e,""].join(".*"),a=new RegExp(t);this.userTalkItem=this.talkItems.filter((e=>a.test(e.name)))}else this.userTalkItem=this.talkItems},unreadNum(e){clearInterval(this.interval),this.$store.commit("SET_UNREAD_NUM",e),e>0?this.interval=setInterval((()=>{document.title=document.title==v?`【新消息】${v}`:v}),2e3):document.title=v}},beforeRouteUpdate(e,t,a){let s=(0,h.UR)();s&&this.clickTab(s),a()},beforeCreate(){(0,p.o4)(this.$route.query.token)},async created(){await this.initialize(),await this.loadUserSetting()},mounted(){this.scrollEvent()},destroyed(){document.title=v,clearInterval(this.interval),this.clearTalk()},methods:{beautifyTime:_.eh,async createTalk(e){await(0,d.Fe)(e),await this.loadChatList()},closeSubMenu(){this.subMenu=!1},clearTalk(){this.params={talk_type:0,receiver_id:0,nickname:"",clickFlag:!0},this.$store.commit("UPDATE_DIALOGUE_MESSAGE",{talk_type:0,receiver_id:0,is_robot:0})},triggerSubMenu(e){this.closeSubMenu(),1==e?this.launchGroupShow=!0:this.$refs.searchUsers.open()},scrollEvent(){let e=this.$refs.menusScrollbar.wrap;e.onscroll=()=>{this.subHeaderShadow=e.scrollTop>0}},loadChatList(){this.loadStatus=0==this.talkNum?0:1,(0,d.k8)().then((({code:e,result:t})=>{if(200!==e)return!1;if(this.$store.commit("SET_UNREAD_NUM",0),this.$store.commit("SET_TALK_ITEMS",{items:t.map((e=>(0,h.fj)(e)))}),this.$route.query.id){let e,a;console.log("用户result",t),this.talkItems.forEach(((t,s)=>{t.userId==this.$route.query.id&&(e=t,a=s)})),this.$nextTick((()=>this.clickTab(this.$route.query.id,e,a)))}})).finally((()=>{this.loadStatus=1}))},clickTab(e,t,a){if(!e)return;this.activeIndex=a;let s=this.talks.find((t=>t.userId==e))||{};this.$store.state.user.toUser=t;let i=s.name;this.params={talk_type:1,receiver_id:s.userId,nickname:i,is_robot:s.is_robot,talkId:s.id,clickFlag:!0},this.$store.commit("UPDATE_DIALOGUE_MESSAGE",{talk_type:1,receiver_id:s.userId,is_robot:s.is_robot}),this.$nextTick((()=>{e==this.index_name.split("_")[1]&&this.$store.commit("UPDATE_TALK_ITEM",{userId:e,index_name:"MESSAGE_"+this.index_name.split("_")[1],unread:0})}))},changeTalk(e){console.log("修改当前对话",e),sessionStorage.setItem("send_message_index_name",e),this.loadChatList()},closeTalk(){this.$store.commit("UPDATE_DIALOGUE_MESSAGE",{talk_type:0,receiver_id:0,is_robot:0}),this.loadChatList()},talkItemsMenu(e,t){let a={items:[{label:"好友信息",icon:"el-icon-user",disabled:2==e.talk_type||1==e.is_robot,onClick:()=>{this.$user(e.receiver_id)}},{label:"修改备注",icon:"el-icon-edit-outline",disabled:2==e.talk_type||1==e.is_robot,onClick:()=>{this.editFriendRemarks(e)}},{label:0==e.is_top?"会话置顶":"取消置顶",icon:"el-icon-top",onClick:()=>{this.topChatItem(e)}},{label:0==e.is_disturb?"消息免打扰":"开启消息提示",icon:0==e.is_disturb?"el-icon-close-notification":"el-icon-bell",disabled:1==e.is_robot,onClick:()=>{this.setNotDisturb(e)}},{label:"移除会话",icon:"el-icon-remove-outline",divided:!0,onClick:()=>{this.delChatItem(e)}},{label:1==e.talk_type?"删除好友":"退出群聊",icon:"el-icon-delete",disabled:1==e.is_robot,onClick:()=>{let t=1==e.talk_type?"删除好友":"退出群聊";this.$confirm(`此操作将 <span style="color:red;font-size:16px;">${t}</span>, 是否继续?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0,dangerouslyUseHTMLString:!0}).then((()=>{1==e.talk_type&&this.removeFriend(e)}))}}],event:t,zIndex:3};return this.$contextmenu(a),!1},topItemsMenu(e,t){return this.$contextmenu({items:[{label:0==e.is_top?"会话置顶":"取消置顶",icon:"el-icon-top",onClick:()=>{this.topChatItem(e)}}],event:t,zIndex:3}),!1},topChatItem(e){(0,d.C9)({list_id:e.id,type:0==e.is_top?1:2}).then((({code:t})=>{200==t&&this.$store.commit("UPDATE_TALK_ITEM",{index_name:e.index_name,is_top:0==e.is_top?1:0})}))},setNotDisturb(e){(0,d.DD)({talk_type:e.talk_type,receiver_id:e.receiver_id,is_disturb:0==e.is_disturb?1:0}).then((({code:t})=>{200==t&&this.$store.commit("UPDATE_TALK_ITEM",{index_name:e.index_name,is_disturb:0==e.is_disturb?1:0})}))},delChatItem(e){(0,d.S4)({list_id:e.id}).then((({code:t})=>{200==t&&(this.clearTalk(),this.$store.commit("REMOVE_TALK_ITEM",e.index_name))}))},removeFriend(e){(0,u.zo)({friend_id:e.receiver_id}).then((({code:t})=>{200==t&&(this.index_name==e.index_name&&this.clearTalk(),this.$store.commit("REMOVE_TALK_ITEM",e.index_name))}))},editFriendRemarks(e){let t=`您正在设置【${e.name}】好友的备注信息`;e.remark_name&&(t+=`，当前备注为【${e.remark_name}】`),this.$prompt(t,"修改备注",{confirmButtonText:"确定",cancelButtonText:"取消",customClass:"border-radius0",inputPlaceholder:"请设置好友备注信息",inputValue:e.remark_name?e.remark_name:e.name,inputValidator(e){return null!=e&&""!=e||"好友备注不能为空"}}).then((({value:t})=>{if(t==e.remark_name)return!1;(0,u.RJ)({friend_id:e.receiver_id,remarks:t}).then((a=>{200==a.code?(this.$store.commit("UPDATE_TALK_ITEM",{index_name:e.index_name,remark_name:t}),this.$notify({title:"成功",message:"好友备注修改成功...",type:"success"})):this.$notify({title:"消息",message:"好友备注修改失败，请稍后再试...",type:"warning"})}))})).catch((()=>{}))}}},x=k,b=a(43736),f=(0,b.Z)(x,s,i,!1,null,"e75943ca",null),C=f.exports}}]);