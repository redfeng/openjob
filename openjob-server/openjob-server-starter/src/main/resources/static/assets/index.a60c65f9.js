import{_ as T}from"./preload-helper.101896b7.js";import{J as V}from"./index.4ac74e37.js";import{ay as E}from"./index.070d5527.js";import{h as b,ap as $,r as A,K as M,o as O,a9 as s,ac as U,j as c,k as j,l as f,D as a,x as n,B as i,y as F,v as u,u as H}from"./vue.543fafcc.js";import{_ as I}from"./_plugin-vue_export-helper.c27b6911.js";import"./index.3b68140d.js";const L={class:"system-role-container layout-padding"},P={class:"system-role-padding layout-padding-auto layout-padding-view"},J={class:"system-user-search mb15"},K=b({name:"systemRole"}),q=b({...K,setup(G){const v=$(()=>T(()=>import("./dialog.04b2ff9a.js"),["assets/dialog.04b2ff9a.js","assets/vue.543fafcc.js","assets/_plugin-vue_export-helper.c27b6911.js","assets/dialog.5926acda.css"])),m=A(),t=M({tableData:{data:[],total:0,loading:!1,param:{search:"",pageNum:1,pageSize:10}}}),p=()=>{t.tableData.loading=!0;const l=[];for(let e=0;e<20;e++)l.push({roleName:e===0?"超级管理员":"普通用户",roleSign:e===0?"admin":"common",describe:`测试角色${e+1}`,sort:e,status:!0,createTime:new Date().toLocaleString()});t.tableData.data=l,t.tableData.total=t.tableData.data.length,setTimeout(()=>{t.tableData.loading=!1},500)},y=l=>{m.value.openDialog(l)},D=(l,e)=>{m.value.openDialog(l,e)},w=l=>{V.confirm(`此操作将永久删除角色名称：“${l.roleName}”，是否继续?`,"提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(()=>{p(),E.success("删除成功")}).catch(()=>{})},h=l=>{t.tableData.param.pageSize=l,p()},x=l=>{t.tableData.param.pageNum=l,p()};return O(()=>{p()}),(l,e)=>{const z=s("el-input"),C=s("ele-Search"),_=s("el-icon"),d=s("el-button"),k=s("ele-FolderAdd"),r=s("el-table-column"),g=s("el-tag"),N=s("el-table"),S=s("el-pagination"),R=U("loading");return c(),j("div",L,[f("div",P,[f("div",J,[a(z,{modelValue:t.tableData.param.search,"onUpdate:modelValue":e[0]||(e[0]=o=>t.tableData.param.search=o),size:"default",placeholder:"请输入角色名称",style:{"max-width":"180px"}},null,8,["modelValue"]),a(d,{size:"default",type:"primary",class:"ml10"},{default:n(()=>[a(_,null,{default:n(()=>[a(C)]),_:1}),i(" 查询 ")]),_:1}),a(d,{size:"default",type:"success",class:"ml10",onClick:e[1]||(e[1]=o=>y("add"))},{default:n(()=>[a(_,null,{default:n(()=>[a(k)]),_:1}),i(" 新增角色 ")]),_:1})]),F((c(),u(N,{data:t.tableData.data,style:{width:"100%"}},{default:n(()=>[a(r,{type:"index",label:"序号",width:"60"}),a(r,{prop:"roleName",label:"角色名称","show-overflow-tooltip":""}),a(r,{prop:"roleSign",label:"角色标识","show-overflow-tooltip":""}),a(r,{prop:"sort",label:"排序","show-overflow-tooltip":""}),a(r,{prop:"status",label:"角色状态","show-overflow-tooltip":""},{default:n(o=>[o.row.status?(c(),u(g,{key:0,type:"success"},{default:n(()=>[i("启用")]),_:1})):(c(),u(g,{key:1,type:"info"},{default:n(()=>[i("禁用")]),_:1}))]),_:1}),a(r,{prop:"describe",label:"角色描述","show-overflow-tooltip":""}),a(r,{prop:"createTime",label:"创建时间","show-overflow-tooltip":""}),a(r,{label:"操作",width:"100"},{default:n(o=>[a(d,{disabled:o.row.roleName==="超级管理员",size:"small",text:"",type:"primary",onClick:B=>D("edit",o.row)},{default:n(()=>[i("修改")]),_:2},1032,["disabled","onClick"]),a(d,{disabled:o.row.roleName==="超级管理员",size:"small",text:"",type:"primary",onClick:B=>w(o.row)},{default:n(()=>[i("删除")]),_:2},1032,["disabled","onClick"])]),_:1})]),_:1},8,["data"])),[[R,t.tableData.loading]]),a(S,{onSizeChange:h,onCurrentChange:x,class:"mt15","pager-count":5,"page-sizes":[10,20,30],"current-page":t.tableData.param.pageNum,"onUpdate:current-page":e[2]||(e[2]=o=>t.tableData.param.pageNum=o),background:"","page-size":t.tableData.param.pageSize,"onUpdate:page-size":e[3]||(e[3]=o=>t.tableData.param.pageSize=o),layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},null,8,["current-page","page-size","total"])]),a(H(v),{ref_key:"roleDialogRef",ref:m,onRefresh:e[4]||(e[4]=o=>p())},null,512)])}}});const ae=I(q,[["__scopeId","data-v-1003e97a"]]);export{ae as default};