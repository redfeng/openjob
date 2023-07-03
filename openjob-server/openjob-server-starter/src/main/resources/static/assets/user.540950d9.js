import{_ as L}from"./preload-helper.101896b7.js";import{h as D,ap as M,aH as le,ar as N,r as re,K as O,a as ae,o as A,a9 as p,j as $,k as P,D as n,x as o,F as ie,Z as ue,v as ce,B as r,C as m,l as u,u as w,n as q,q as de}from"./vue.543fafcc.js";import{u as me}from"./vue-i18n.cjs.f888bd5c.js";import{u as fe}from"./userInfo.2fef1b52.js";import{u as ge}from"./themeConfig.ab165958.js";import{o as pe}from"./other.e7474a16.js";import{e as _e}from"./mitt.7f99bbc0.js";import{L as g,S as be}from"./storage.b628b270.js";import{u as he}from"./index.4fcb57a0.js";import{f as we}from"./index.3b68140d.js";import{u as ve}from"./index.3243f535.js";import{ay as Ce}from"./index.070d5527.js";import{J as Se}from"./index.4ac74e37.js";import{_ as Ee}from"./_plugin-vue_export-helper.c27b6911.js";import"./_commonjsHelpers.35101cd5.js";import"./index.f4471638.js";import"./index.18e5bded.js";import"./keepAliveNames.cf66da55.js";import"./routesList.76e57b72.js";import"./loading.7efee3a8.js";import"./tagsViewRoutes.92636029.js";import"./request.c84c4c3e.js";import"./index.a654b9cd.js";import"./toolsValidate.7cb139e2.js";const x=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],_=(()=>{if(typeof document>"u")return!1;const l=x[0],a={};for(const s of x)if((s==null?void 0:s[1])in document){for(const[h,v]of s.entries())a[l[h]]=v;return a}return!1})(),R={change:_.fullscreenchange,error:_.fullscreenerror};let c={request(l=document.documentElement,a){return new Promise((s,b)=>{const h=()=>{c.off("change",h),s()};c.on("change",h);const v=l[_.requestFullscreen](a);v instanceof Promise&&v.then(h).catch(b)})},exit(){return new Promise((l,a)=>{if(!c.isFullscreen){l();return}const s=()=>{c.off("change",s),l()};c.on("change",s);const b=document[_.exitFullscreen]();b instanceof Promise&&b.then(s).catch(a)})},toggle(l,a){return c.isFullscreen?c.exit():c.request(l,a)},onchange(l){c.on("change",l)},onerror(l){c.on("error",l)},on(l,a){const s=R[l];s&&document.addEventListener(s,a,!1)},off(l,a){const s=R[l];s&&document.removeEventListener(s,a,!1)},raw:_};Object.defineProperties(c,{isFullscreen:{get:()=>Boolean(document[_.fullscreenElement])},element:{enumerable:!0,get:()=>document[_.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>Boolean(document[_.fullscreenEnabled])}});_||(c={isEnabled:!1});const z=c,ke={class:"layout-navbars-breadcrumb-user-icon"},Fe={class:"layout-navbars-breadcrumb-user-icon"},ye=["title"],ze={class:"layout-navbars-breadcrumb-user-icon"},Ie=["title"],Be=["title"],$e={class:"layout-navbars-breadcrumb-user-icon"},Te=["title"],Le={class:"layout-navbars-breadcrumb-user-link"},Me=["src"],Ne=D({name:"layoutBreadcrumbUser"}),Oe=D({...Ne,setup(l){const a=he(),s=ve(),b=M(()=>L(()=>import("./userNews.03515ef2.js"),["assets/userNews.03515ef2.js","assets/vue.543fafcc.js","assets/_plugin-vue_export-helper.c27b6911.js","assets/userNews.a45651b4.css"])),h=M(()=>L(()=>import("./search.195b2504.js"),["assets/search.195b2504.js","assets/vue.543fafcc.js","assets/vue-i18n.cjs.f888bd5c.js","assets/_commonjsHelpers.35101cd5.js","assets/tagsViewRoutes.92636029.js","assets/storage.b628b270.js","assets/_plugin-vue_export-helper.c27b6911.js","assets/search.3305851d.css"])),{locale:v,t:S}=me(),V=le(),H=fe(),U=ge(),{userInfos:I}=N(H),{themeConfig:E}=N(U),T=re(),C=O({current:"default",list:[]}),d=O({isScreenfull:!1,disabledI18n:"zh-cn",disabledSize:"large"}),j=ae(()=>{let e="";const{layout:f,isClassicSplitMenu:i}=E.value;return["defaults","columns"].includes(f)||f==="classic"&&!i?e="1":e="",e});A(()=>{Q()});const J=()=>{if(!z.isEnabled)return Ce.warning("暂不不支持全屏"),!1;z.toggle(),z.on("change",()=>{z.isFullscreen?d.isScreenfull=!0:d.isScreenfull=!1})},K=()=>{_e.emit("openSetingsDrawer")},Z=e=>{e==="logOut"?Se({closeOnClickModal:!1,closeOnPressEscape:!1,title:S("message.user.logOutTitle"),message:S("message.user.logOutMessage"),showCancelButton:!0,confirmButtonText:S("message.user.logOutConfirm"),cancelButtonText:S("message.user.logOutCancel"),buttonSize:"default",beforeClose:(f,i,t)=>{f==="confirm"?(i.confirmButtonLoading=!0,i.confirmButtonText=S("message.user.logOutExit"),setTimeout(()=>{t(),setTimeout(()=>{i.confirmButtonLoading=!1},300)},700)):t()}}).then(async()=>{await a.logout(),be.clear(),window.location.reload()}).catch(()=>{}):e==="wareHouse"?window.open("https://gitee.com/lyt-top/vue-next-admin"):V.push(e)},G=()=>{T.value.openSearch()},Q=async()=>{let e=await s.getList({page:1,size:30});C.list=[];let f=0,i=g.get("nid");e.list.forEach(function(t){f===0&&i==null&&(C.current=t.name,g.set("nid",t.id)),C.list.push({id:t.id,name:t.name,status:t.status===1,uniqueId:t.uuid,createTime:t.createTime}),i!=null&&i===t.id&&(C.current=t.name),f++})},W=e=>{g.remove("nid"),g.set("nid",e),window.location.reload()},X=e=>{g.remove("themeConfig"),E.value.globalComponentSize=e,g.set("themeConfig",E.value),k("globalComponentSize","disabledSize"),window.location.reload()},Y=e=>{g.remove("themeConfig"),E.value.globalI18n=e,g.set("themeConfig",E.value),v.value=e,pe.useTitle(),k("globalI18n","disabledI18n")},k=(e,f)=>{d[f]=g.get("themeConfig")[e]};return A(()=>{g.get("themeConfig")&&(k("globalComponentSize","disabledSize"),k("globalI18n","disabledI18n"))}),(e,f)=>{const i=p("el-icon"),t=p("el-dropdown-item"),F=p("el-dropdown-menu"),y=p("el-dropdown"),ee=p("ele-Search"),ne=p("ele-Bell"),oe=p("el-badge"),te=p("el-popover"),se=p("ele-ArrowDown");return $(),P("div",{class:"layout-navbars-breadcrumb-user pr15",style:de({flex:w(j)})},[n(y,{"show-timeout":70,"hide-timeout":50,trigger:"click",onCommand:W},{dropdown:o(()=>[n(F,null,{default:o(()=>[($(!0),P(ie,null,ue(C.list,B=>($(),ce(t,{key:B.id,command:B.id},{default:o(()=>[r(m(B.name),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:o(()=>[u("div",ke,[r(m(C.current)+" ",1),n(i,{class:"el-icon--right"},{default:o(()=>[n(w(we))]),_:1})])]),_:1}),n(y,{"show-timeout":70,"hide-timeout":50,trigger:"click",onCommand:X},{dropdown:o(()=>[n(F,null,{default:o(()=>[n(t,{command:"large",disabled:d.disabledSize==="large"},{default:o(()=>[r(m(e.$t("message.user.dropdownLarge")),1)]),_:1},8,["disabled"]),n(t,{command:"default",disabled:d.disabledSize==="default"},{default:o(()=>[r(m(e.$t("message.user.dropdownDefault")),1)]),_:1},8,["disabled"]),n(t,{command:"small",disabled:d.disabledSize==="small"},{default:o(()=>[r(m(e.$t("message.user.dropdownSmall")),1)]),_:1},8,["disabled"])]),_:1})]),default:o(()=>[u("div",Fe,[u("i",{class:"iconfont icon-ziti",title:e.$t("message.user.title0")},null,8,ye)])]),_:1}),n(y,{"show-timeout":70,"hide-timeout":50,trigger:"click",onCommand:Y},{dropdown:o(()=>[n(F,null,{default:o(()=>[n(t,{command:"zh-cn",disabled:d.disabledI18n==="zh-cn"},{default:o(()=>[r("简体中文")]),_:1},8,["disabled"]),n(t,{command:"en",disabled:d.disabledI18n==="en"},{default:o(()=>[r("English")]),_:1},8,["disabled"]),n(t,{command:"zh-tw",disabled:d.disabledI18n==="zh-tw"},{default:o(()=>[r("繁體中文")]),_:1},8,["disabled"])]),_:1})]),default:o(()=>[u("div",ze,[u("i",{class:q(["iconfont",d.disabledI18n==="en"?"icon-fuhao-yingwen":"icon-fuhao-zhongwen"]),title:e.$t("message.user.title1")},null,10,Ie)])]),_:1}),u("div",{class:"layout-navbars-breadcrumb-user-icon",onClick:G},[n(i,{title:e.$t("message.user.title2")},{default:o(()=>[n(ee)]),_:1},8,["title"])]),u("div",{class:"layout-navbars-breadcrumb-user-icon",onClick:K},[u("i",{class:"icon-skin iconfont",title:e.$t("message.user.title3")},null,8,Be)]),u("div",$e,[n(te,{placement:"bottom",trigger:"click",transition:"el-zoom-in-top",width:300,persistent:!1},{reference:o(()=>[n(oe,{"is-dot":!0},{default:o(()=>[n(i,{title:e.$t("message.user.title4")},{default:o(()=>[n(ne)]),_:1},8,["title"])]),_:1})]),default:o(()=>[n(w(b))]),_:1})]),u("div",{class:"layout-navbars-breadcrumb-user-icon mr10",onClick:J},[u("i",{class:q(["iconfont",d.isScreenfull?"icon-tuichuquanping":"icon-fullscreen"]),title:d.isScreenfull?e.$t("message.user.title6"):e.$t("message.user.title5")},null,10,Te)]),n(y,{"show-timeout":70,"hide-timeout":50,onCommand:Z},{dropdown:o(()=>[n(F,null,{default:o(()=>[n(t,{command:"/home"},{default:o(()=>[r(m(e.$t("message.user.dropdown1")),1)]),_:1}),n(t,{command:"wareHouse"},{default:o(()=>[r(m(e.$t("message.user.dropdown6")),1)]),_:1}),n(t,{command:"/personal"},{default:o(()=>[r(m(e.$t("message.user.dropdown2")),1)]),_:1}),n(t,{command:"/404"},{default:o(()=>[r(m(e.$t("message.user.dropdown3")),1)]),_:1}),n(t,{command:"/401"},{default:o(()=>[r(m(e.$t("message.user.dropdown4")),1)]),_:1}),n(t,{divided:"",command:"logOut"},{default:o(()=>[r(m(e.$t("message.user.dropdown5")),1)]),_:1})]),_:1})]),default:o(()=>[u("span",Le,[u("img",{src:w(I).photo,class:"layout-navbars-breadcrumb-user-link-photo mr5"},null,8,Me),r(" "+m(w(I).userName===""?"common":w(I).userName)+" ",1),n(i,{class:"el-icon--right"},{default:o(()=>[n(se)]),_:1})])]),_:1}),n(w(h),{ref_key:"searchRef",ref:T},null,512)],4)}}});const rn=Ee(Oe,[["__scopeId","data-v-794c44d6"]]);export{rn as default};
