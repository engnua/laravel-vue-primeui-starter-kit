import{s as x}from"./AppearanceSelector.vue_vue_type_script_setup_true_lang-2jSUHK3m.js";import{a as y,s as v}from"./index-DaKwtoGJ.js";import{d as w,C as k,f as d,o as a,w as l,e as i,a as p,j as m,b as o,u as s,m as V,t as n,i as B,g as u}from"./app-BHFLiKzk.js";import{_ as h}from"./TextLink.vue_vue_type_script_setup_true_lang-CTi08pPs.js";import{_ as C}from"./AuthLayout.vue_vue_type_script_setup_true_lang-CSZxK4X8.js";import"./AppLogoIcon.vue_vue_type_script_setup_true_lang-DtUDpxA_.js";import"./FloatingConfigurator.vue_vue_type_script_setup_true_lang-Bxmjr8_i.js";const E={key:0,class:"mb-4 text-center text-sm font-medium text-green-600"},N={key:1,class:"mb-4 text-center text-sm font-medium text-red-600"},$={class:"space-y-6"},F={class:"grid gap-2"},j={class:"my-6 flex items-center justify-start"},M={class:"space-x-1 text-center text-sm text-muted-foreground"},q=w({__name:"ForgotPassword",props:{status:{},error:{}},setup(S){const e=k({email:""}),c=()=>{e.post(route("password.email"))};return(r,t)=>{const f=y,_=v,g=x;return a(),d(C,{title:"Forgot password",description:"Enter your email to receive a password reset link"},{default:l(()=>[i(s(V),{title:"Forgot password"}),r.status?(a(),p("div",E,n(r.status),1)):m("",!0),r.error?(a(),p("div",N,n(r.error),1)):m("",!0),o("div",$,[o("form",{onSubmit:B(c,["prevent"])},[o("div",F,[t[1]||(t[1]=o("label",{for:"email"},"Email address",-1)),i(f,{id:"email",type:"email",name:"email",autocomplete:"off",modelValue:s(e).email,"onUpdate:modelValue":t[0]||(t[0]=b=>s(e).email=b),autofocus:"",placeholder:"email@example.com",disabled:s(e).processing},null,8,["modelValue","disabled"]),s(e).errors.email?(a(),d(_,{key:0,severity:"error",size:"small",variant:"simple"},{default:l(()=>[u(n(s(e).errors.email),1)]),_:1})):m("",!0)]),o("div",j,[i(g,{type:"submit",class:"w-full",label:"Email password reset link",loading:s(e).processing,disabled:s(e).processing},null,8,["loading","disabled"])])],32),o("div",M,[t[3]||(t[3]=o("span",null,"Or, return to",-1)),i(h,{href:r.route("login")},{default:l(()=>t[2]||(t[2]=[u("log in")])),_:1},8,["href"])])])]),_:1})}}});export{q as default};
