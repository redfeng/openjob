import{_ as S}from"./preload-helper.101896b7.js";import{u as de}from"./vue-i18n.cjs.f888bd5c.js";import{L as E}from"./storage.b628b270.js";import{h as N,aH as ie,r as I,ap as B,K as j,o as ce,a9 as s,ac as ue,j as w,k as V,l as $,D as o,x as t,u as m,F as fe,Z as _e,B as i,C as d,y as ge,v as P}from"./vue.543fafcc.js";import{a as be}from"./index.e3bd8398.js";import{b as ye}from"./formatTime.057ac5b9.js";import{d as we}from"./data.dd299cb7.js";import{J as ve}from"./index.4ac74e37.js";import{ay as he}from"./index.070d5527.js";import{_ as De}from"./_plugin-vue_export-helper.c27b6911.js";import"./_commonjsHelpers.35101cd5.js";import"./request.c84c4c3e.js";import"./index.a654b9cd.js";import"./index.18e5bded.js";import"./themeConfig.ab165958.js";import"./index.3867ec69.js";import"./header.9390c1c5.js";import"./index.3b68140d.js";const xe={class:"system-role-container layout-padding"},Te={class:"system-role-padding layout-padding-auto layout-padding-view"},Ie={class:"system-user-search mb15"},je=N({name:"systemRole"}),Ce=N({...je,setup(ke){const A=ie(),{t:n}=de(),v=be(),h=I(),M=B(()=>S(()=>import("./dialog.b070a30e.js"),["assets/dialog.b070a30e.js","assets/preload-helper.101896b7.js","assets/vue.543fafcc.js","assets/vue-i18n.cjs.f888bd5c.js","assets/_commonjsHelpers.35101cd5.js","assets/data.dd299cb7.js","assets/index.3867ec69.js","assets/request.c84c4c3e.js","assets/storage.b628b270.js","assets/index.a654b9cd.js","assets/index.18e5bded.js","assets/themeConfig.ab165958.js","assets/index.4ac74e37.js","assets/index.070d5527.js","assets/index.3b68140d.js","assets/header.9390c1c5.js","assets/index.e3bd8398.js","assets/_plugin-vue_export-helper.c27b6911.js","assets/dialog.5422317f.css"])),L=B(()=>S(()=>import("./drawer.9303cf6f.js"),["assets/drawer.9303cf6f.js","assets/preload-helper.101896b7.js","assets/vue.543fafcc.js","assets/vue-i18n.cjs.f888bd5c.js","assets/_commonjsHelpers.35101cd5.js","assets/index.3243f535.js","assets/request.c84c4c3e.js","assets/storage.b628b270.js","assets/index.a654b9cd.js","assets/index.18e5bded.js","assets/themeConfig.ab165958.js","assets/index.4ac74e37.js","assets/index.070d5527.js","assets/index.3b68140d.js","assets/header.9390c1c5.js","assets/index.e3bd8398.js","assets/formatTime.057ac5b9.js","assets/data.dd299cb7.js","assets/index.3867ec69.js"])),C=I(),b=I(),k=j({list:[]}),p=j({form:{appId:"",namespaceId:E.get("nid"),name:""},rules:{}}),r=j({tableData:{data:[],total:0,loading:!1,param:{pageNum:1,pageSize:20}}}),c=async()=>{r.tableData.loading=!0;let a=await v.getList({namespaceId:E.get("nid"),appId:p.form.appId,name:p.form.name,page:r.tableData.param.pageNum,size:r.tableData.param.pageSize});r.tableData.data=[],a.list.forEach(function(e){r.tableData.data.push({id:e.id,namespaceId:e.namespaceId,appId:e.appId,appName:e.appName,workflowId:e.workflowId,name:e.name,description:e.description,processorType:e.processorType,processorInfo:e.processorInfo,shellProcessorType:e.shellProcessorType,shellProcessorInfo:e.shellProcessorInfo,kettleProcessorType:e.kettleProcessorType,kettleProcessorInfo:e.kettleProcessorInfo,shardingParams:e.shardingParams,executeType:e.executeType,paramsType:e.paramsType,params:e.params,extendParamsType:e.extendParamsType,extendParams:e.extendParams,timeExpressionType:e.timeExpressionType,timeExpression:e.timeExpression,timeExpressionValue:e.timeExpressionValue,executeStrategy:e.executeStrategy,failRetryTimes:e.failRetryTimes,failRetryInterval:e.failRetryInterval,concurrency:e.concurrency,status:e.status===1,createTime:ye(e.createTime)})}),r.tableData.total=a.total,setTimeout(()=>{r.tableData.loading=!1},500)},J=async(a,e)=>{const D=a?1:2;await v.updateStatus({id:e.id,status:D})},R=a=>{!a||a.validate(e=>{if(e)c();else return!1})},U=()=>{p.form.name="",p.form.appId="",c()},O=(a,e)=>{if(a==="execute"){C.value.openDialog(e);return}if(a==="copy"){b.value.openDrawer("copy",p.form.appId,e);return}if(a==="delete"){K(e);return}},F=a=>{b.value.openDrawer(a,p.form.appId)},H=(a,e)=>{b.value.openDrawer(a,p.form.appId,e)},q=a=>{A.push({path:"/admin/job-instance/list",query:{id:a.id,appId:a.appId}})},K=a=>{ve.confirm(n("message.job.job.deleteTitle")+`(${a.name})?`,n("message.commonMsg.tip"),{confirmButtonText:n("message.commonBtn.confirm"),cancelButtonText:n("message.commonBtn.cancel"),type:"warning"}).then(async()=>{await v.delete({id:a.id}),await c(),he.success(n("message.commonMsg.deleteSuccess"))}).catch(()=>{})},Z=a=>{r.tableData.param.pageSize=a,c()},G=a=>{r.tableData.param.pageNum=a,c()};return ce(async()=>{k.list=await we(),await c()}),(a,e)=>{const D=s("el-option"),Q=s("el-select"),z=s("el-form-item"),x=s("el-col"),W=s("el-input"),X=s("ele-Search"),_=s("el-icon"),g=s("el-button"),Y=s("ele-RefreshRight"),ee=s("ele-FolderAdd"),y=s("el-row"),oe=s("el-form"),u=s("el-table-column"),ae=s("el-switch"),te=s("ele-Edit"),le=s("ele-Monitor"),T=s("el-dropdown-item"),se=s("el-dropdown-menu"),ne=s("el-dropdown"),re=s("el-table"),pe=s("el-pagination"),me=ue("loading");return w(),V("div",xe,[$("div",Te,[$("div",Ie,[o(oe,{ref_key:"tableSearchRef",ref:h,model:p.form,rules:p.rules},{default:t(()=>[o(y,null,{default:t(()=>[o(x,{xs:8,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:t(()=>[o(z,{label:m(n)("message.app.name"),prop:"appName"},{default:t(()=>[o(Q,{modelValue:p.form.appId,"onUpdate:modelValue":e[1]||(e[1]=l=>p.form.appId=l),filterable:"",placeholder:m(n)("message.commonMsg.all"),size:"default",style:{width:"90%"}},{default:t(()=>[(w(!0),V(fe,null,_e(k.list,l=>(w(),P(D,{key:l.id,label:l.label,value:l.id,onClick:e[0]||(e[0]=f=>R(h.value))},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),o(x,{xs:8,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:t(()=>[o(z,{label:m(n)("message.job.job.name"),prop:"name"},{default:t(()=>[o(W,{modelValue:p.form.name,"onUpdate:modelValue":e[2]||(e[2]=l=>p.form.name=l),size:"default",style:{width:"95%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),o(x,{xs:8,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:t(()=>[o(g,{size:"default",type:"primary",class:"ml10",onClick:e[3]||(e[3]=l=>R(h.value))},{default:t(()=>[o(_,null,{default:t(()=>[o(X)]),_:1}),i(" "+d(a.$t("message.commonBtn.query")),1)]),_:1}),o(g,{size:"default",type:"primary",class:"ml10",onClick:e[4]||(e[4]=l=>U())},{default:t(()=>[o(_,null,{default:t(()=>[o(Y)]),_:1}),i(" "+d(a.$t("message.commonBtn.reset")),1)]),_:1}),o(g,{size:"default",type:"success",class:"ml10",onClick:e[5]||(e[5]=l=>F("add"))},{default:t(()=>[o(_,null,{default:t(()=>[o(ee)]),_:1}),i(" "+d(a.$t("message.commonBtn.add")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),ge((w(),P(re,{data:r.tableData.data,style:{width:"100%"}},{default:t(()=>[o(u,{prop:"appName",label:m(n)("message.job.job.application"),"show-overflow-tooltip":""},null,8,["label"]),o(u,{prop:"name",label:m(n)("message.job.job.name"),"show-overflow-tooltip":""},null,8,["label"]),o(u,{prop:"processorInfo",label:m(n)("message.job.job.processorInfo"),"show-overflow-tooltip":""},null,8,["label"]),o(u,{prop:"executeType",label:m(n)("message.job.job.processorAndExecuteType"),"show-overflow-tooltip":""},{default:t(l=>[o(y,null,{default:t(()=>[i("["+d(l.row.processorType)+"] "+d(l.row.executeType),1)]),_:2},1024)]),_:1},8,["label"]),o(u,{prop:"timeExpression",label:m(n)("message.job.job.expressionAndType"),"show-overflow-tooltip":""},{default:t(l=>[o(y,{style:{"font-weight":"bold"}},{default:t(()=>[i(d(l.row.timeExpressionType),1)]),_:2},1024),o(y,null,{default:t(()=>[i(d(l.row.timeExpression),1)]),_:2},1024)]),_:1},8,["label"]),o(u,{prop:"status",label:m(n)("message.job.job.status"),"show-overflow-tooltip":""},{default:t(l=>[o(ae,{modelValue:l.row.status,"onUpdate:modelValue":f=>l.row.status=f,class:"ml-2",size:"default",onChange:f=>J(f,l.row),style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"}},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1},8,["label"]),o(u,{prop:"createTime",label:m(n)("message.job.job.createTime"),"show-overflow-tooltip":""},null,8,["label"]),o(u,{label:m(n)("message.commonMsg.operation"),width:"360"},{default:t(l=>[o(g,{type:"primary",size:"default",onClick:f=>H("update",l.row)},{default:t(()=>[o(_,null,{default:t(()=>[o(te)]),_:1}),i(" "+d(a.$t("message.commonBtn.update")),1)]),_:2},1032,["onClick"]),o(g,{type:"success",size:"default",onClick:f=>q(l.row)},{default:t(()=>[o(_,null,{default:t(()=>[o(le)]),_:1}),i(" "+d(a.$t("message.commonBtn.instance")),1)]),_:2},1032,["onClick"]),o(ne,{"split-button":"",type:"info",size:"default",style:{"margin-left":"12px"},onCommand:f=>O(f,l.row)},{dropdown:t(()=>[o(se,null,{default:t(()=>[o(T,{command:"execute"},{default:t(()=>[i(d(a.$t("message.job.job.executeOnce")),1)]),_:1}),o(T,{command:"copy"},{default:t(()=>[i(d(a.$t("message.commonBtn.copy")),1)]),_:1}),o(T,{command:"delete"},{default:t(()=>[i(d(a.$t("message.commonBtn.delete")),1)]),_:1})]),_:1})]),default:t(()=>[i(d(a.$t("message.commonBtn.more"))+" ",1)]),_:2},1032,["onCommand"])]),_:1},8,["label"])]),_:1},8,["data"])),[[me,r.tableData.loading]]),o(pe,{onSizeChange:Z,onCurrentChange:G,class:"mt15","pager-count":5,"page-sizes":[10,20,30],"current-page":r.tableData.param.pageNum,"onUpdate:current-page":e[6]||(e[6]=l=>r.tableData.param.pageNum=l),background:"","page-size":r.tableData.param.pageSize,"onUpdate:page-size":e[7]||(e[7]=l=>r.tableData.param.pageSize=l),layout:"total, sizes, prev, pager, next, jumper",total:r.tableData.total},null,8,["current-page","page-size","total"])]),o(m(M),{ref_key:"nsDialogRef",ref:C,onRefresh:e[8]||(e[8]=l=>c())},null,512),o(m(L),{ref_key:"JobDrawerRef",ref:b,onRefresh:e[9]||(e[9]=l=>c())},null,512)])}}});const Ke=De(Ce,[["__scopeId","data-v-4af200eb"]]);export{Ke as default};
