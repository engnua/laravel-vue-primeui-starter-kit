import{a as B,c as z,s as I}from"./AppearanceSelector.vue_vue_type_script_setup_true_lang-CnSxzxmo.js";import{a as v,o as s,b as c,k as l,B as V,l as T,p as A,q as $,s as j,f as u,j as m,n as G,d as N,C as O,w as h,e as d,u as a,m as F,t as g,i as q,g as p}from"./app-DupsMls6.js";import{s as L}from"./AppLogoIcon.vue_vue_type_script_setup_true_lang-BdjDqTte.js";import{b as E,a as M,s as U}from"./index-COQMFvpU.js";import{s as H}from"./index-BL5bHxv5.js";import{_ as w}from"./TextLink.vue_vue_type_script_setup_true_lang-DTZQpfw9.js";import{_ as R}from"./AuthLayout.vue_vue_type_script_setup_true_lang-BqNRmTZE.js";import"./FloatingConfigurator.vue_vue_type_script_setup_true_lang-F7wnnMqk.js";var C={name:"MinusIcon",extends:B};function D(e,n,o,r,t,i){return s(),v("svg",l({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),n[0]||(n[0]=[c("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"},null,-1)]),16)}C.render=D;var K=({dt:e})=>`
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
`,W={root:function(n){var o=n.instance,r=n.props;return["p-checkbox p-component",{"p-checkbox-checked":o.checked,"p-disabled":r.disabled,"p-invalid":o.$pcCheckboxGroup?o.$pcCheckboxGroup.$invalid:o.$invalid,"p-variant-filled":o.$variant==="filled","p-checkbox-sm p-inputfield-sm":r.size==="small","p-checkbox-lg p-inputfield-lg":r.size==="large"}]},box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},Z=V.extend({name:"checkbox",style:K,classes:W}),J={name:"BaseCheckbox",extends:E,props:{value:null,binary:Boolean,indeterminate:{type:Boolean,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Z,provide:function(){return{$pcCheckbox:this,$parentInstance:this}}};function k(e){"@babel/helpers - typeof";return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},k(e)}function Q(e,n,o){return(n=X(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function X(e){var n=Y(e,"string");return k(n)=="symbol"?n:n+""}function Y(e,n){if(k(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var r=o.call(e,n);if(k(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function ee(e){return ie(e)||te(e)||oe(e)||ne()}function ne(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oe(e,n){if(e){if(typeof e=="string")return y(e,n);var o={}.toString.call(e).slice(8,-1);return o==="Object"&&e.constructor&&(o=e.constructor.name),o==="Map"||o==="Set"?Array.from(e):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?y(e,n):void 0}}function te(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ie(e){if(Array.isArray(e))return y(e)}function y(e,n){(n==null||n>e.length)&&(n=e.length);for(var o=0,r=Array(n);o<n;o++)r[o]=e[o];return r}var _={name:"Checkbox",extends:J,inheritAttrs:!1,emits:["change","focus","blur","update:indeterminate"],inject:{$pcCheckboxGroup:{default:void 0}},data:function(){return{d_indeterminate:this.indeterminate}},watch:{indeterminate:function(n){this.d_indeterminate=n}},methods:{getPTOptions:function(n){var o=n==="root"?this.ptmi:this.ptm;return o(n,{context:{checked:this.checked,indeterminate:this.d_indeterminate,disabled:this.disabled}})},onChange:function(n){var o=this;if(!this.disabled&&!this.readonly){var r=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value,t;this.binary?t=this.d_indeterminate?this.trueValue:this.checked?this.falseValue:this.trueValue:this.checked||this.d_indeterminate?t=r.filter(function(i){return!A(i,o.value)}):t=r?[].concat(ee(r),[this.value]):[this.value],this.d_indeterminate&&(this.d_indeterminate=!1,this.$emit("update:indeterminate",this.d_indeterminate)),this.$pcCheckboxGroup?this.$pcCheckboxGroup.writeValue(t,n):this.writeValue(t,n),this.$emit("change",n)}},onFocus:function(n){this.$emit("focus",n)},onBlur:function(n){var o,r;this.$emit("blur",n),(o=(r=this.formField).onBlur)===null||o===void 0||o.call(r,n)}},computed:{groupName:function(){return this.$pcCheckboxGroup?this.$pcCheckboxGroup.groupName:this.$formName},checked:function(){var n=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value;return this.d_indeterminate?!1:this.binary?n===this.trueValue:T(this.value,n)},dataP:function(){return z(Q({invalid:this.$invalid,checked:this.checked,disabled:this.disabled,filled:this.$variant==="filled"},this.size,this.size))}},components:{CheckIcon:L,MinusIcon:C}},re=["data-p-checked","data-p-indeterminate","data-p-disabled","data-p"],ae=["id","value","name","checked","tabindex","disabled","readonly","required","aria-labelledby","aria-label","aria-invalid","aria-checked"],ce=["data-p"];function se(e,n,o,r,t,i){var x=$("CheckIcon"),f=$("MinusIcon");return s(),v("div",l({class:e.cx("root")},i.getPTOptions("root"),{"data-p-checked":i.checked,"data-p-indeterminate":t.d_indeterminate||void 0,"data-p-disabled":e.disabled,"data-p":i.dataP}),[c("input",l({id:e.inputId,type:"checkbox",class:[e.cx("input"),e.inputClass],style:e.inputStyle,value:e.value,name:i.groupName,checked:i.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,required:e.required,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,"aria-checked":t.d_indeterminate?"mixed":void 0,onFocus:n[0]||(n[0]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:n[1]||(n[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onChange:n[2]||(n[2]=function(){return i.onChange&&i.onChange.apply(i,arguments)})},i.getPTOptions("input")),null,16,ae),c("div",l({class:e.cx("box")},i.getPTOptions("box"),{"data-p":i.dataP}),[j(e.$slots,"icon",{checked:i.checked,indeterminate:t.d_indeterminate,class:G(e.cx("icon")),dataP:i.dataP},function(){return[i.checked?(s(),u(x,l({key:0,class:e.cx("icon")},i.getPTOptions("icon"),{"data-p":i.dataP}),null,16,["class","data-p"])):t.d_indeterminate?(s(),u(f,l({key:1,class:e.cx("icon")},i.getPTOptions("icon"),{"data-p":i.dataP}),null,16,["class","data-p"])):m("",!0)]})],16,ce)],16,re)}_.render=se;const de={key:0,class:"mb-4 text-center text-sm font-medium text-green-600"},le={class:"grid gap-6"},ue={class:"grid gap-2"},be={class:"grid gap-2"},he={class:"flex items-center justify-between"},pe={class:"flex items-center gap-2",tabindex:3},me={class:"text-center text-sm text-muted-foreground"},Ce=N({__name:"Login",props:{status:{},canResetPassword:{type:Boolean}},setup(e){const n=O({email:"test@example.com",password:"password",remember:!1}),o=()=>{n.post(route("login"),{onFinish:()=>n.reset("password")})};return(r,t)=>{const i=M,x=U,f=H,P=_,S=I;return s(),u(R,{title:"Log in to your account",description:"Enter your email and password below to log in"},{default:h(()=>[d(a(F),{title:"Log in"}),r.status?(s(),v("div",de,g(r.status),1)):m("",!0),c("form",{onSubmit:q(o,["prevent"]),class:"flex flex-col gap-6"},[c("div",le,[c("div",ue,[t[3]||(t[3]=c("label",{for:"email"},"Email address",-1)),d(i,{id:"email",type:"email",required:"",autofocus:"",tabindex:1,autocomplete:"email",modelValue:a(n).email,"onUpdate:modelValue":t[0]||(t[0]=b=>a(n).email=b),placeholder:"email@example.com",invalid:!!a(n).errors.email,disabled:a(n).processing},null,8,["modelValue","invalid","disabled"]),a(n).errors.email?(s(),u(x,{key:0,severity:"error",size:"small",variant:"simple"},{default:h(()=>[p(g(a(n).errors.email),1)]),_:1})):m("",!0)]),c("div",be,[c("div",he,[t[5]||(t[5]=c("label",{for:"password"},"Password",-1)),r.canResetPassword?(s(),u(w,{key:0,href:r.route("password.request"),class:"text-sm",tabindex:5},{default:h(()=>t[4]||(t[4]=[p(" Forgot password? ")])),_:1},8,["href"])):m("",!0)]),d(f,{inputId:"password",type:"password",required:"",tabindex:2,autocomplete:"current-password",modelValue:a(n).password,"onUpdate:modelValue":t[1]||(t[1]=b=>a(n).password=b),invalid:!!a(n).errors.password,style:{width:"100%"},inputStyle:{width:"100%"},placeholder:"Password",feedback:!1,toggleMask:"",disabled:a(n).processing},null,8,["modelValue","invalid","disabled"]),a(n).errors.password?(s(),u(x,{key:0,severity:"error",size:"small",variant:"simple"},{default:h(()=>[p(g(a(n).errors.password),1)]),_:1})):m("",!0)]),c("div",pe,[d(P,{id:"remember",name:"remember",modelValue:a(n).remember,"onUpdate:modelValue":t[2]||(t[2]=b=>a(n).remember=b),value:a(n).remember,binary:"",tabindex:4},null,8,["modelValue","value"]),t[6]||(t[6]=c("label",{for:"remember",class:"flex items-center space-x-3"},"Remember me",-1))]),d(S,{type:"submit",class:"mt-4 w-full",label:"Log in",tabindex:4,loading:a(n).processing,"loading-icon":"pi pi-spinner",disabled:a(n).processing},null,8,["loading","disabled"])]),c("div",me,[t[8]||(t[8]=p(" Don't have an account? ")),d(w,{href:r.route("register"),tabindex:5},{default:h(()=>t[7]||(t[7]=[p("Sign up")])),_:1},8,["href"])])],32)]),_:1})}}});export{Ce as default};
