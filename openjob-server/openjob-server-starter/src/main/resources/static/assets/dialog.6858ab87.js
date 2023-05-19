import{h as C,r as Z,K as $,a9 as u,j as f,k as y,D as o,x as a,l as H,B as I,C as V,u as m,F as v,Z as R,y as K,E as P,v as S}from"./vue.543fafcc.js";import{u as h}from"./vue-i18n.cjs.f888bd5c.js";import{u as G}from"./index.09070dff.js";import{L as O}from"./storage.b628b270.js";import{u as Q}from"./index.5394589b.js";import{a as W}from"./index.620f2b56.js";import{g as X}from"./header.9390c1c5.js";import{_ as Y}from"./_plugin-vue_export-helper.c27b6911.js";import"./_commonjsHelpers.35101cd5.js";import"./request.514e0871.js";import"./index.40b52e29.js";import"./index.18e5bded.js";import"./themeConfig.ab165958.js";import"./index.4ac74e37.js";import"./index.070d5527.js";import"./index.3b68140d.js";const ee={class:"system-role-dialog-container"},le={class:"dialog-footer"},oe=C({name:"systemRoleDialog"}),ae=C({...oe,emits:["refresh"],setup(re,{expose:k,emit:z}){const{t}=h(),j=G(),w=Q(),F=W(),g=Z(),e=$({rowState:{failConcurrency:!0},fromRules:{topic:{required:!1,message:t("message.app.validateName"),pattern:/^[0-9a-zA-Z_.-]*$/,trigger:"blur"},desc:{required:!0,message:t("message.app.desc"),trigger:"blur"}},namespaceList:[],appList:[],ruleForm:{namespaceId:"",appId:"",id:0,pid:0,cid:0,name:"",topic:"",description:"",processorInfo:"",failTopicEnable:!0,failTopicConcurrency:1,failRetryTimes:3,failRetryInterval:3,concurrency:1,blockingSize:8,executeTimeout:60},menuData:[],menuProps:{children:"children",label:"label"},dialog:{isShowDialog:!1,type:"",title:"",submitTxt:""}}),D=async(i,l)=>{var p;(p=g.value)==null||p.clearValidate(),await B(),await N(),i==="update"||i=="copy"?(e.ruleForm.name=l.name,e.ruleForm.pid=l.pid,e.ruleForm.cid=l.cid,e.ruleForm.description=l.description,e.ruleForm.id=l.id,e.ruleForm.namespaceId=l.namespaceId,e.ruleForm.appId=l.appId,e.ruleForm.processorInfo=l.processorInfo,e.ruleForm.topic=l.topic,e.ruleForm.failTopicEnable=l.failTopicEnable==1,e.ruleForm.failTopicConcurrency=l.failTopicConcurrency,e.ruleForm.failRetryTimes=l.failRetryTimes,e.ruleForm.failRetryInterval=l.failRetryInterval,e.ruleForm.concurrency=l.concurrency,e.ruleForm.blockingSize=l.blockingSize,e.ruleForm.executeTimeout=l.executeTimeout,e.dialog.submitTxt=t("message.commonBtn.update"),e.rowState.failConcurrency=e.ruleForm.failTopicEnable,i=="update"?e.dialog.title=t("message.delay.job.updateJobTitle"):e.dialog.title=t("message.delay.job.copyJobTitle")):(e.ruleForm.name="",e.ruleForm.description="",e.ruleForm.namespaceId="",e.ruleForm.appId="",e.ruleForm.processorInfo="",e.ruleForm.topic="",e.ruleForm.failTopicEnable=!0,e.ruleForm.failTopicConcurrency=1,e.ruleForm.failRetryTimes=3,e.ruleForm.failRetryInterval=3,e.ruleForm.concurrency=1,e.ruleForm.blockingSize=8,e.ruleForm.executeTimeout=60,e.ruleForm.namespaceId=O.get("nid"),e.dialog.title=t("message.delay.job.addJobTitle"),e.dialog.submitTxt=t("message.commonBtn.add"),e.rowState.failConcurrency=!0),e.dialog.type=i,e.dialog.isShowDialog=!0},_=()=>{e.dialog.isShowDialog=!1},E=()=>{_()},L=async i=>{!i||await i.validate(l=>{if(l)U();else return!1})},U=async()=>{let i=e.ruleForm.failTopicEnable?1:2;e.dialog.type==="update"?await F.update({id:e.ruleForm.id,pid:e.ruleForm.pid,cid:e.ruleForm.cid,namespaceId:e.ruleForm.namespaceId,description:e.ruleForm.description,appId:e.ruleForm.appId,topic:e.ruleForm.topic,processorInfo:e.ruleForm.processorInfo,failRetryTimes:e.ruleForm.failRetryTimes,failRetryInterval:e.ruleForm.failRetryTimes,concurrency:e.ruleForm.concurrency,blockingSize:e.ruleForm.blockingSize,failTopicEnable:i,failTopicConcurrency:e.ruleForm.failTopicConcurrency,name:e.ruleForm.name,executeTimeout:e.ruleForm.executeTimeout}):await F.add({namespaceId:e.ruleForm.namespaceId,description:e.ruleForm.description,appId:e.ruleForm.appId,topic:e.ruleForm.topic,processorInfo:e.ruleForm.processorInfo,failRetryTimes:e.ruleForm.failRetryTimes,failRetryInterval:e.ruleForm.failRetryTimes,concurrency:e.ruleForm.concurrency,blockingSize:e.ruleForm.blockingSize,name:e.ruleForm.name,failTopicEnable:i,failTopicConcurrency:e.ruleForm.failTopicConcurrency,executeTimeout:e.ruleForm.executeTimeout}),_(),z("refresh")},A=async i=>{e.rowState.failConcurrency=i},B=async()=>{let i=await j.getList({page:1,size:30});e.namespaceList=[],i.list.forEach(function(l){e.namespaceList.push({id:l.id,name:l.name})})},N=async()=>{let i=await w.getList({namespaceId:X(),page:1,size:30});e.appList=[],i.list.forEach(function(l){e.appList.push({id:l.id,label:l.name})})};return k({openDialog:D}),(i,l)=>{const p=u("el-option"),T=u("el-select"),s=u("el-form-item"),n=u("el-col"),d=u("el-row"),b=u("el-input"),J=u("el-switch"),c=u("el-input-number"),q=u("el-form"),x=u("el-button"),M=u("el-dialog");return f(),y("div",ee,[o(M,{title:e.dialog.title,modelValue:e.dialog.isShowDialog,"onUpdate:modelValue":l[15]||(l[15]=r=>e.dialog.isShowDialog=r),width:"769px"},{footer:a(()=>[H("span",le,[o(x,{type:"primary",onClick:l[14]||(l[14]=r=>L(g.value)),size:"default"},{default:a(()=>[I(V(m(t)("message.commonBtn.confirm")),1)]),_:1}),o(x,{onClick:E,size:"default"},{default:a(()=>[I(V(m(t)("message.commonBtn.cancel")),1)]),_:1})])]),default:a(()=>[o(q,{ref_key:"appDialogFormRef",ref:g,model:e.ruleForm,"label-width":"100px",rules:e.fromRules,size:"default"},{default:a(()=>[o(d,null,{default:a(()=>[o(n,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[o(s,{label:m(t)("message.app.namespace"),prop:"namespaceName"},{default:a(()=>[o(T,{modelValue:e.ruleForm.namespaceId,"onUpdate:modelValue":l[0]||(l[0]=r=>e.ruleForm.namespaceId=r),class:"m-2",placeholder:m(t)("message.commonMsg.emptySelect"),style:{width:"100%"}},{default:a(()=>[(f(!0),y(v,null,R(e.namespaceList,r=>(f(),S(p,{key:r.id,label:r.name,value:r.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),o(n,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[o(s,{label:m(t)("message.delay.job.appName"),prop:"appId"},{default:a(()=>[o(T,{modelValue:e.ruleForm.appId,"onUpdate:modelValue":l[1]||(l[1]=r=>e.ruleForm.appId=r),class:"m-2",filterable:"",placeholder:m(t)("message.commonMsg.emptySelect"),style:{width:"100%"}},{default:a(()=>[(f(!0),y(v,null,R(e.appList,r=>(f(),S(p,{key:r.id,label:r.label,value:r.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})]),_:1}),o(d,null,{default:a(()=>[o(n,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[o(s,{label:m(t)("message.delay.job.name"),prop:"name"},{default:a(()=>[o(b,{modelValue:e.ruleForm.name,"onUpdate:modelValue":l[2]||(l[2]=r=>e.ruleForm.name=r),clearable:""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1}),o(d,null,{default:a(()=>[o(n,{xs:20,sm:20,md:20,lg:20,xl:20,class:"mb20"},{default:a(()=>[o(s,{label:m(t)("message.delay.job.description"),prop:"description"},{default:a(()=>[o(b,{modelValue:e.ruleForm.description,"onUpdate:modelValue":l[3]||(l[3]=r=>e.ruleForm.description=r),type:"textarea",rows:"3",clearable:""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1}),o(d,null,{default:a(()=>[o(n,{xs:20,sm:20,md:20,lg:20,xl:20,class:"mb20"},{default:a(()=>[o(s,{label:m(t)("message.delay.job.topic"),prop:"topic"},{default:a(()=>[o(b,{modelValue:e.ruleForm.topic,"onUpdate:modelValue":l[4]||(l[4]=r=>e.ruleForm.topic=r),clearable:""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1}),o(d,null,{default:a(()=>[o(n,{xs:20,sm:20,md:20,lg:20,xl:20,class:"mb20"},{default:a(()=>[o(s,{label:m(t)("message.delay.job.processorInfo"),prop:"processorInfo"},{default:a(()=>[o(b,{modelValue:e.ruleForm.processorInfo,"onUpdate:modelValue":l[5]||(l[5]=r=>e.ruleForm.processorInfo=r),clearable:""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1}),o(d,null,{default:a(()=>[o(n,{xs:20,sm:20,md:20,lg:20,xl:20,class:"mb20"},{default:a(()=>[o(s,{label:m(t)("message.delay.job.failTopicEnable"),prop:"failTopicEnable"},{default:a(()=>[o(J,{modelValue:e.ruleForm.failTopicEnable,"onUpdate:modelValue":l[6]||(l[6]=r=>e.ruleForm.failTopicEnable=r),"inline-prompt":"","active-text":"on","inactive-text":"off",onChange:l[7]||(l[7]=r=>A(r))},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1}),K(o(d,null,{default:a(()=>[o(n,{xs:20,sm:20,md:20,lg:20,xl:20,class:"mb20"},{default:a(()=>[o(s,{label:m(t)("message.delay.job.failTopicConcurrency"),prop:"failTopicConcurrency"},{default:a(()=>[o(c,{modelValue:e.ruleForm.failTopicConcurrency,"onUpdate:modelValue":l[8]||(l[8]=r=>e.ruleForm.failTopicConcurrency=r),clearable:""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1},512),[[P,e.rowState.failConcurrency]]),o(d,null,{default:a(()=>[o(n,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[o(s,{label:m(t)("message.delay.job.failRetryTimes"),prop:"failRetryTimes"},{default:a(()=>[o(c,{modelValue:e.ruleForm.failRetryTimes,"onUpdate:modelValue":l[9]||(l[9]=r=>e.ruleForm.failRetryTimes=r),clearable:""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),o(n,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[o(s,{label:m(t)("message.delay.job.failRetryInterval"),prop:"failRetryInterval"},{default:a(()=>[o(c,{modelValue:e.ruleForm.failRetryInterval,"onUpdate:modelValue":l[10]||(l[10]=r=>e.ruleForm.failRetryInterval=r),clearable:""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1}),o(d,null,{default:a(()=>[o(n,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[o(s,{label:m(t)("message.delay.job.concurrency"),prop:"concurrency"},{default:a(()=>[o(c,{modelValue:e.ruleForm.concurrency,"onUpdate:modelValue":l[11]||(l[11]=r=>e.ruleForm.concurrency=r),clearable:""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),o(n,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[o(s,{label:m(t)("message.delay.job.blockingSize"),prop:"blockingSize"},{default:a(()=>[o(c,{modelValue:e.ruleForm.blockingSize,"onUpdate:modelValue":l[12]||(l[12]=r=>e.ruleForm.blockingSize=r),clearable:""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1}),o(d,null,{default:a(()=>[o(n,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[o(s,{label:m(t)("message.delay.job.executeTimeout"),prop:"executeTimeout"},{default:a(()=>[o(c,{modelValue:e.ruleForm.executeTimeout,"onUpdate:modelValue":l[13]||(l[13]=r=>e.ruleForm.executeTimeout=r),clearable:""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"])])}}});const xe=Y(ae,[["__scopeId","data-v-8ccb67c2"]]);export{xe as default};
