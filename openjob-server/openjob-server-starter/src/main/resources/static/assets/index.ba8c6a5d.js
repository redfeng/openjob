import{u as Z}from"./vue-i18n.cjs.f888bd5c.js";import{u as V}from"./index.4e2d66ad.js";import{J as U}from"./index.4ac74e37.js";import{ay as A}from"./index.070d5527.js";import{h as D,r as j,K as B,o as z,a9 as p,j as i,k as b,D as l,x as a,u as d,F as _,Z as v,B as M,v as c}from"./vue.543fafcc.js";import{_ as R}from"./_plugin-vue_export-helper.c27b6911.js";import"./_commonjsHelpers.35101cd5.js";import"./request.514e0871.js";import"./storage.b628b270.js";import"./index.40b52e29.js";import"./index.18e5bded.js";import"./themeConfig.ab165958.js";import"./index.3b68140d.js";const C={class:"system-config-container"},T=D({name:"systemRoleDialog"}),I=D({...T,emits:["refresh"],setup(E,{emit:N}){const{t:o}=Z(),F=j(),e=B({selectDays:[{value:1,label:"1天"},{value:7,label:"1周"},{value:30,label:"1月"},{value:90,label:"3月"},{value:180,label:"6月"},{value:365,label:"1年"},{value:1095,label:"3年"}],fromRules:{},ruleForm:{version:"",maxSlot:"256",clusterVersion:"",clusterDelayVersion:"",workerSupervisorSlot:"",delayZsetSlot:"",delayFailZsetSlot:"",delayAddListSlot:"",delayStatusListSlot:"",delayDeleteListSlot:"",jobKeepDays:"",delayKeepDays:"",serverKeepDays:"",workerKeepDays:""}}),x=async r=>{!r||await r.validate(t=>{if(t)g();else return!1})},g=async()=>{U.confirm(o("message.server.system.updateTitle"),o("message.commonMsg.tip"),{confirmButtonText:o("message.commonBtn.confirm"),cancelButtonText:o("message.commonBtn.cancel"),type:"warning"}).then(async()=>{await V().updateSystem({delayZsetSlot:e.ruleForm.delayZsetSlot,delayFailZsetSlot:e.ruleForm.delayFailZsetSlot,delayAddListSlot:e.ruleForm.delayAddListSlot,delayStatusListSlot:e.ruleForm.delayStatusListSlot,delayDeleteListSlot:e.ruleForm.delayDeleteListSlot,jobKeepDays:e.ruleForm.jobKeepDays,delayKeepDays:e.ruleForm.delayKeepDays,serverKeepDays:e.ruleForm.serverKeepDays,workerKeepDays:e.ruleForm.workerKeepDays,maxSlot:e.ruleForm.maxSlot}),A.success(o("message.commonMsg.updateSuccess"))}).catch(()=>{})},w=async()=>{let r=await V().getSystemInfo({});e.ruleForm.version=r.version,e.ruleForm.maxSlot=r.maxSlot,e.ruleForm.clusterVersion=r.clusterVersion,e.ruleForm.clusterDelayVersion=r.clusterDelayVersion,e.ruleForm.workerSupervisorSlot=r.workerSupervisorSlot,e.ruleForm.delayZsetSlot=r.delayZsetSlot,e.ruleForm.delayFailZsetSlot=r.delayFailZsetSlot,e.ruleForm.delayAddListSlot=r.delayAddListSlot,e.ruleForm.delayStatusListSlot=r.delayStatusListSlot,e.ruleForm.delayDeleteListSlot=r.delayDeleteListSlot,e.ruleForm.jobKeepDays=r.jobKeepDays,e.ruleForm.delayKeepDays=r.delayKeepDays,e.ruleForm.serverKeepDays=r.serverKeepDays,e.ruleForm.workerKeepDays=r.workerKeepDays};return z(()=>{w()}),(r,t)=>{const n=p("el-input"),m=p("el-form-item"),u=p("el-col"),y=p("el-row"),f=p("el-option"),S=p("el-select"),K=p("el-button"),L=p("el-form"),k=p("el-card");return i(),b("div",C,[l(k,{shadow:"never",header:"配置信息"},{default:a(()=>[l(L,{ref_key:"appDialogFormRef",ref:F,model:e.ruleForm,"label-width":"150px",rules:e.fromRules,size:"default"},{default:a(()=>[l(y,null,{default:a(()=>[l(u,{xs:12,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[l(m,{label:d(o)("message.server.system.version"),prop:"description"},{default:a(()=>[l(n,{modelValue:e.ruleForm.version,"onUpdate:modelValue":t[0]||(t[0]=s=>e.ruleForm.version=s),disabled:"",clearable:"",style:{width:"96%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1}),l(y,null,{default:a(()=>[l(u,{xs:12,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[l(m,{label:d(o)("message.server.system.maxSlot"),prop:"name"},{default:a(()=>[l(n,{modelValue:e.ruleForm.maxSlot,"onUpdate:modelValue":t[1]||(t[1]=s=>e.ruleForm.maxSlot=s),disabled:"",clearable:"",style:{width:"96%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),l(u,{xs:12,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[l(m,{label:d(o)("message.server.system.workerSupervisorSlot"),prop:"name"},{default:a(()=>[l(n,{modelValue:e.ruleForm.workerSupervisorSlot,"onUpdate:modelValue":t[2]||(t[2]=s=>e.ruleForm.workerSupervisorSlot=s),disabled:"",clearable:"",style:{width:"96%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1}),l(y,null,{default:a(()=>[l(u,{xs:12,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[l(m,{label:d(o)("message.server.system.clusterVersion"),prop:"name"},{default:a(()=>[l(n,{modelValue:e.ruleForm.clusterVersion,"onUpdate:modelValue":t[3]||(t[3]=s=>e.ruleForm.clusterVersion=s),disabled:"",clearable:"",style:{width:"96%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),l(u,{xs:12,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[l(m,{label:d(o)("message.server.system.clusterDelayVersion"),prop:"name"},{default:a(()=>[l(n,{modelValue:e.ruleForm.clusterDelayVersion,"onUpdate:modelValue":t[4]||(t[4]=s=>e.ruleForm.clusterDelayVersion=s),disabled:"",clearable:"",style:{width:"96%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1}),l(y,null,{default:a(()=>[l(u,{xs:12,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[l(m,{label:d(o)("message.server.system.delayZsetSlot"),prop:"name"},{default:a(()=>[l(n,{modelValue:e.ruleForm.delayZsetSlot,"onUpdate:modelValue":t[5]||(t[5]=s=>e.ruleForm.delayZsetSlot=s),clearable:"",style:{width:"96%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),l(u,{xs:12,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[l(m,{label:d(o)("message.server.system.delayAddListSlot"),prop:"name"},{default:a(()=>[l(n,{modelValue:e.ruleForm.delayAddListSlot,"onUpdate:modelValue":t[6]||(t[6]=s=>e.ruleForm.delayAddListSlot=s),clearable:"",style:{width:"96%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1}),l(y,null,{default:a(()=>[l(u,{xs:12,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[l(m,{label:d(o)("message.server.system.delayStatusListSlot"),prop:"name"},{default:a(()=>[l(n,{modelValue:e.ruleForm.delayStatusListSlot,"onUpdate:modelValue":t[7]||(t[7]=s=>e.ruleForm.delayStatusListSlot=s),clearable:"",style:{width:"96%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),l(u,{xs:12,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[l(m,{label:d(o)("message.server.system.delayDeleteListSlot"),prop:"name"},{default:a(()=>[l(n,{modelValue:e.ruleForm.delayDeleteListSlot,"onUpdate:modelValue":t[8]||(t[8]=s=>e.ruleForm.delayDeleteListSlot=s),clearable:"",style:{width:"96%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1}),l(y,null,{default:a(()=>[l(u,{xs:12,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[l(m,{label:d(o)("message.server.system.delayFailZsetSlot"),prop:"name"},{default:a(()=>[l(n,{modelValue:e.ruleForm.delayFailZsetSlot,"onUpdate:modelValue":t[9]||(t[9]=s=>e.ruleForm.delayFailZsetSlot=s),clearable:"",style:{width:"96%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1}),l(y,null,{default:a(()=>[l(u,{xs:12,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[l(m,{label:d(o)("message.server.system.jobKeepDays"),prop:"name"},{default:a(()=>[l(S,{modelValue:e.ruleForm.jobKeepDays,"onUpdate:modelValue":t[10]||(t[10]=s=>e.ruleForm.jobKeepDays=s),filterable:"",class:"m-2",style:{width:"60%"},placeholder:"Select",size:"default"},{default:a(()=>[(i(!0),b(_,null,v(e.selectDays,s=>(i(),c(f,{key:s.value,label:s.label,value:s.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1}),l(u,{xs:12,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[l(m,{label:d(o)("message.server.system.delayKeepDays"),prop:"name"},{default:a(()=>[l(S,{modelValue:e.ruleForm.delayKeepDays,"onUpdate:modelValue":t[11]||(t[11]=s=>e.ruleForm.delayKeepDays=s),filterable:"",class:"m-2",style:{width:"60%"},placeholder:"Select",size:"default"},{default:a(()=>[(i(!0),b(_,null,v(e.selectDays,s=>(i(),c(f,{key:s.value,label:s.label,value:s.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1}),l(y,null,{default:a(()=>[l(u,{xs:12,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[l(m,{label:d(o)("message.server.system.serverKeepDays"),prop:"name"},{default:a(()=>[l(S,{modelValue:e.ruleForm.serverKeepDays,"onUpdate:modelValue":t[12]||(t[12]=s=>e.ruleForm.serverKeepDays=s),filterable:"",class:"m-2",style:{width:"60%"},placeholder:"Select",size:"default"},{default:a(()=>[(i(!0),b(_,null,v(e.selectDays,s=>(i(),c(f,{key:s.value,label:s.label,value:s.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1}),l(u,{xs:12,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[l(m,{label:d(o)("message.server.system.workerKeepDays"),prop:"name"},{default:a(()=>[l(S,{modelValue:e.ruleForm.workerKeepDays,"onUpdate:modelValue":t[13]||(t[13]=s=>e.ruleForm.workerKeepDays=s),filterable:"",class:"m-2",style:{width:"60%"},placeholder:"Select",size:"default"},{default:a(()=>[(i(!0),b(_,null,v(e.selectDays,s=>(i(),c(f,{key:s.value,label:s.label,value:s.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1}),l(y,null,{default:a(()=>[l(u,null,{default:a(()=>[l(K,{type:"primary",onClick:t[14]||(t[14]=s=>x(F.value)),size:"default",style:{"margin-left":"150px"}},{default:a(()=>[M(" 更新配置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})])}}});const le=R(I,[["__scopeId","data-v-0041f9d9"]]);export{le as default};
