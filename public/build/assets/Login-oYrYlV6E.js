import{a as S,s as z}from"./AppearanceSelector.vue_vue_type_script_setup_true_lang-2jSUHK3m.js";import{a as v,o as s,b as c,k as l,B as I,l as V,p as P,q as y,s as T,f as h,j as k,n as A,d as G,C as F,w as u,e as d,u as a,m as N,t as f,i as O,g as p}from"./app-BHFLiKzk.js";import{s as q}from"./AppLogoIcon.vue_vue_type_script_setup_true_lang-DtUDpxA_.js";import{b as L,a as j,s as M}from"./index-DaKwtoGJ.js";import{s as E}from"./index-BpyevxFT.js";import{_ as $}from"./TextLink.vue_vue_type_script_setup_true_lang-CTi08pPs.js";import{_ as U}from"./AuthLayout.vue_vue_type_script_setup_true_lang-CSZxK4X8.js";import"./FloatingConfigurator.vue_vue_type_script_setup_true_lang-Bxmjr8_i.js";var w={name:"MinusIcon",extends:S};function H(e,n,t,r,o,i){return s(),v("svg",l({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),n[0]||(n[0]=[c("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"},null,-1)]),16)}w.render=H;var R=({dt:e})=>`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: ${e("checkbox.border.radius")};
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${e("checkbox.border.radius")};
    border: 1px solid ${e("checkbox.border.color")};
    background: ${e("checkbox.background")};
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
    transition: background ${e("checkbox.transition.duration")}, color ${e("checkbox.transition.duration")}, border-color ${e("checkbox.transition.duration")}, box-shadow ${e("checkbox.transition.duration")}, outline-color ${e("checkbox.transition.duration")};
    outline-color: transparent;
    box-shadow: ${e("checkbox.shadow")};
}

.p-checkbox-icon {
    transition-duration: ${e("checkbox.transition.duration")};
    color: ${e("checkbox.icon.color")};
    font-size: ${e("checkbox.icon.size")};
    width: ${e("checkbox.icon.size")};
    height: ${e("checkbox.icon.size")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: ${e("checkbox.hover.border.color")};
}

.p-checkbox-checked .p-checkbox-box {
    border-color: ${e("checkbox.checked.border.color")};
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
    border-color: ${e("checkbox.checked.hover.border.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.hover.color")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.focus.border.color")};
    box-shadow: ${e("checkbox.focus.ring.shadow")};
    outline: ${e("checkbox.focus.ring.width")} ${e("checkbox.focus.ring.style")} ${e("checkbox.focus.ring.color")};
    outline-offset: ${e("checkbox.focus.ring.offset")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.checked.focus.border.color")};
}

.p-checkbox.p-invalid > .p-checkbox-box {
    border-color: ${e("checkbox.invalid.border.color")};
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.filled.background")};
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: ${e("checkbox.disabled.background")};
    border-color: ${e("checkbox.checked.disabled.border.color")};
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: ${e("checkbox.icon.disabled.color")};
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: ${e("checkbox.sm.width")};
    height: ${e("checkbox.sm.height")};
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: ${e("checkbox.icon.sm.size")};
    width: ${e("checkbox.icon.sm.size")};
    height: ${e("checkbox.icon.sm.size")};
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: ${e("checkbox.lg.width")};
    height: ${e("checkbox.lg.height")};
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: ${e("checkbox.icon.lg.size")};
    width: ${e("checkbox.icon.lg.size")};
    height: ${e("checkbox.icon.lg.size")};
}
`,D={root:function(n){var t=n.instance,r=n.props;return["p-checkbox p-component",{"p-checkbox-checked":t.checked,"p-disabled":r.disabled,"p-invalid":t.$pcCheckboxGroup?t.$pcCheckboxGroup.$invalid:t.$invalid,"p-variant-filled":t.$variant==="filled","p-checkbox-sm p-inputfield-sm":r.size==="small","p-checkbox-lg p-inputfield-lg":r.size==="large"}]},box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},W=I.extend({name:"checkbox",style:R,classes:D}),Z={name:"BaseCheckbox",extends:L,props:{value:null,binary:Boolean,indeterminate:{type:Boolean,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:W,provide:function(){return{$pcCheckbox:this,$parentInstance:this}}};function J(e){return Y(e)||X(e)||Q(e)||K()}function K(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q(e,n){if(e){if(typeof e=="string")return g(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?g(e,n):void 0}}function X(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Y(e){if(Array.isArray(e))return g(e)}function g(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var C={name:"Checkbox",extends:Z,inheritAttrs:!1,emits:["change","focus","blur","update:indeterminate"],inject:{$pcCheckboxGroup:{default:void 0}},data:function(){return{d_indeterminate:this.indeterminate}},watch:{indeterminate:function(n){this.d_indeterminate=n}},methods:{getPTOptions:function(n){var t=n==="root"?this.ptmi:this.ptm;return t(n,{context:{checked:this.checked,indeterminate:this.d_indeterminate,disabled:this.disabled}})},onChange:function(n){var t=this;if(!this.disabled&&!this.readonly){var r=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value,o;this.binary?o=this.d_indeterminate?this.trueValue:this.checked?this.falseValue:this.trueValue:this.checked||this.d_indeterminate?o=r.filter(function(i){return!P(i,t.value)}):o=r?[].concat(J(r),[this.value]):[this.value],this.d_indeterminate&&(this.d_indeterminate=!1,this.$emit("update:indeterminate",this.d_indeterminate)),this.$pcCheckboxGroup?this.$pcCheckboxGroup.writeValue(o,n):this.writeValue(o,n),this.$emit("change",n)}},onFocus:function(n){this.$emit("focus",n)},onBlur:function(n){var t,r;this.$emit("blur",n),(t=(r=this.formField).onBlur)===null||t===void 0||t.call(r,n)}},computed:{groupName:function(){return this.$pcCheckboxGroup?this.$pcCheckboxGroup.groupName:this.$formName},checked:function(){var n=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value;return this.d_indeterminate?!1:this.binary?n===this.trueValue:V(this.value,n)}},components:{CheckIcon:q,MinusIcon:w}},ee=["data-p-checked","data-p-indeterminate","data-p-disabled"],ne=["id","value","name","checked","tabindex","disabled","readonly","required","aria-labelledby","aria-label","aria-invalid","aria-checked"];function oe(e,n,t,r,o,i){var m=y("CheckIcon"),x=y("MinusIcon");return s(),v("div",l({class:e.cx("root")},i.getPTOptions("root"),{"data-p-checked":i.checked,"data-p-indeterminate":o.d_indeterminate||void 0,"data-p-disabled":e.disabled}),[c("input",l({id:e.inputId,type:"checkbox",class:[e.cx("input"),e.inputClass],style:e.inputStyle,value:e.value,name:i.groupName,checked:i.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,required:e.required,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,"aria-checked":o.d_indeterminate?"mixed":void 0,onFocus:n[0]||(n[0]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:n[1]||(n[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onChange:n[2]||(n[2]=function(){return i.onChange&&i.onChange.apply(i,arguments)})},i.getPTOptions("input")),null,16,ne),c("div",l({class:e.cx("box")},i.getPTOptions("box")),[T(e.$slots,"icon",{checked:i.checked,indeterminate:o.d_indeterminate,class:A(e.cx("icon"))},function(){return[i.checked?(s(),h(m,l({key:0,class:e.cx("icon")},i.getPTOptions("icon")),null,16,["class"])):o.d_indeterminate?(s(),h(x,l({key:1,class:e.cx("icon")},i.getPTOptions("icon")),null,16,["class"])):k("",!0)]})],16)],16,ee)}C.render=oe;const te={key:0,class:"mb-4 text-center text-sm font-medium text-green-600"},ie={class:"grid gap-6"},re={class:"grid gap-2"},ae={class:"grid gap-2"},ce={class:"flex items-center justify-between"},se={class:"flex items-center gap-2",tabindex:3},de={class:"text-center text-sm text-muted-foreground"},fe=G({__name:"Login",props:{status:{},canResetPassword:{type:Boolean}},setup(e){const n=F({email:"test@example.com",password:"password",remember:!1}),t=()=>{n.post(route("login"),{onFinish:()=>n.reset("password")})};return(r,o)=>{const i=j,m=M,x=E,_=C,B=z;return s(),h(U,{title:"Log in to your account",description:"Enter your email and password below to log in"},{default:u(()=>[d(a(N),{title:"Log in"}),r.status?(s(),v("div",te,f(r.status),1)):k("",!0),c("form",{onSubmit:O(t,["prevent"]),class:"flex flex-col gap-6"},[c("div",ie,[c("div",re,[o[3]||(o[3]=c("label",{for:"email"},"Email address",-1)),d(i,{id:"email",type:"email",required:"",autofocus:"",tabindex:1,autocomplete:"email",modelValue:a(n).email,"onUpdate:modelValue":o[0]||(o[0]=b=>a(n).email=b),placeholder:"email@example.com",invalid:!!a(n).errors.email,disabled:a(n).processing},null,8,["modelValue","invalid","disabled"]),a(n).errors.email?(s(),h(m,{key:0,severity:"error",size:"small",variant:"simple"},{default:u(()=>[p(f(a(n).errors.email),1)]),_:1})):k("",!0)]),c("div",ae,[c("div",ce,[o[5]||(o[5]=c("label",{for:"password"},"Password",-1)),r.canResetPassword?(s(),h($,{key:0,href:r.route("password.request"),class:"text-sm",tabindex:5},{default:u(()=>o[4]||(o[4]=[p(" Forgot password? ")])),_:1},8,["href"])):k("",!0)]),d(x,{inputId:"password",type:"password",required:"",tabindex:2,autocomplete:"current-password",modelValue:a(n).password,"onUpdate:modelValue":o[1]||(o[1]=b=>a(n).password=b),invalid:!!a(n).errors.password,style:{width:"100%"},inputStyle:{width:"100%"},placeholder:"Password",feedback:!1,toggleMask:"",disabled:a(n).processing},null,8,["modelValue","invalid","disabled"]),a(n).errors.password?(s(),h(m,{key:0,severity:"error",size:"small",variant:"simple"},{default:u(()=>[p(f(a(n).errors.password),1)]),_:1})):k("",!0)]),c("div",se,[d(_,{id:"remember",name:"remember",modelValue:a(n).remember,"onUpdate:modelValue":o[2]||(o[2]=b=>a(n).remember=b),value:a(n).remember,binary:"",tabindex:4},null,8,["modelValue","value"]),o[6]||(o[6]=c("label",{for:"remember",class:"flex items-center space-x-3"},"Remember me",-1))]),d(B,{type:"submit",class:"mt-4 w-full",label:"Log in",tabindex:4,loading:a(n).processing,"loading-icon":"pi pi-spinner",disabled:a(n).processing},null,8,["loading","disabled"])]),c("div",de,[o[8]||(o[8]=p(" Don't have an account? ")),d($,{href:r.route("register"),tabindex:5},{default:u(()=>o[7]||(o[7]=[p("Sign up")])),_:1},8,["href"])])],32)]),_:1})}}});export{fe as default};
