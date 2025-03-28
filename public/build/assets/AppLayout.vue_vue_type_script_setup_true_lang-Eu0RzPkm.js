import{_ as Q,a as Y}from"./AppLogoIcon.vue_vue_type_script_setup_true_lang-DqkDNT_h.js";import{B as j,a as s,o as n,j as m,b as l,k as c,s as A,g as ee,d as S,v as E,r as I,ag as te,X as U,x as K,q as N,n as h,f as y,t as $,u as k,P as B,w,V as ae,y as z,F as C,af as P,a8 as ne,e as f,W as R,c as T,z as q}from"./app-hMrowxp5.js";import{f as O,c as re,s as ie,h as se,R as oe,b as le,_ as ue,S as ce,a as de}from"./AppearanceSelector.vue_vue_type_script_setup_true_lang-uf_XmEgl.js";var me=({dt:e})=>`
.p-card {
    background: ${e("card.background")};
    color: ${e("card.color")};
    box-shadow: ${e("card.shadow")};
    border-radius: ${e("card.border.radius")};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${e("card.caption.gap")};
}

.p-card-body {
    padding: ${e("card.body.padding")};
    display: flex;
    flex-direction: column;
    gap: ${e("card.body.gap")};
}

.p-card-title {
    font-size: ${e("card.title.font.size")};
    font-weight: ${e("card.title.font.weight")};
}

.p-card-subtitle {
    color: ${e("card.subtitle.color")};
}
`,pe={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},be=j.extend({name:"card",style:me,classes:pe}),fe={name:"BaseCard",extends:O,style:be,provide:function(){return{$pcCard:this,$parentInstance:this}}},H={name:"Card",extends:fe,inheritAttrs:!1};function ve(e,t,a,d,i,r){return n(),s("div",c({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(n(),s("div",c({key:0,class:e.cx("header")},e.ptm("header")),[A(e.$slots,"header")],16)):m("",!0),l("div",c({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(n(),s("div",c({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(n(),s("div",c({key:0,class:e.cx("title")},e.ptm("title")),[A(e.$slots,"title")],16)):m("",!0),e.$slots.subtitle?(n(),s("div",c({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[A(e.$slots,"subtitle")],16)):m("",!0)],16)):m("",!0),l("div",c({class:e.cx("content")},e.ptm("content")),[A(e.$slots,"content")],16),e.$slots.footer?(n(),s("div",c({key:1,class:e.cx("footer")},e.ptm("footer")),[A(e.$slots,"footer")],16)):m("",!0)],16)],16)}H.render=ve;const V=(e,t)=>{const a=e.__vccOpts||e;for(const[d,i]of t)a[d]=i;return a},he={},ye={class:"layout-footer"};function ge(e,t){return n(),s("div",ye,t[0]||(t[0]=[ee(" SAKAI by "),l("a",{href:"https://primevue.org",target:"_blank",rel:"noopener noreferrer",class:"text-primary font-bold hover:underline"},"PrimeVue",-1)]))}const $e=V(he,[["render",ge]]),ke={key:0,class:"layout-menuitem-root-text"},we=["href","target"],Ce={class:"layout-menuitem-text"},_e={key:0,class:"pi pi-fw pi-angle-down layout-submenu-toggler"},xe={class:"layout-menuitem-text"},Ae={key:0,class:"pi pi-fw pi-angle-down layout-submenu-toggler"},Ie={class:"layout-submenu"},W=S({__name:"AppMenuItem",props:{item:{type:Object,default:()=>({})},index:{type:Number,default:0},root:{type:Boolean,default:!0},parentItemKey:{type:String,default:null}},setup(e){const{layoutState:t,setActiveMenuItem:a,toggleMenu:d}=E(),i=e,r=I(!1),b=I(null);te(()=>{b.value=i.parentItemKey?`${i.parentItemKey}-${i.index}`:String(i.index);const u=U().url;M(i.item,u)&&(a(b.value),r.value=!0)});function M(u,o){return u.href&&u.href.replace(/^https?:\/\/[^/]+/,"")===o?!0:u.items?u.items.some(v=>M(v,o)):!1}K(()=>t.activeMenuItem,u=>{r.value=x(u,b.value)});function x(u,o){return!u||!o?!1:u===o?!0:u.startsWith(`${o}-`)||u.includes(`${o}-`)}function p(u,o){if(o.disabled){u.preventDefault();return}(o.href||o.url)&&(t.staticMenuMobileActive||t.overlayMenuActive)&&d(),o.command&&o.command({originalEvent:u,item:o});const v=o.items&&r.value?null:b.value;a(v)}function g(u){const o=U().url,v=u.href.replace(/^https?:\/\/[^/]+/,"");return o===v}return(u,o)=>{const v=N("AppMenuItem",!0);return n(),s("li",{class:h({"layout-root-menuitem":e.root,"active-menuitem":r.value})},[e.root&&e.item.visible!==!1?(n(),s("div",ke,$(e.item.label),1)):m("",!0),(!e.item.href||e.item.items)&&e.item.visible!==!1?(n(),s("a",{key:1,href:e.item.url,onClick:o[0]||(o[0]=_=>p(_,e.item)),class:h(e.item.class),target:e.item.target,tabindex:"0"},[l("i",{class:h([e.item.icon,"layout-menuitem-icon"])},null,2),l("span",Ce,$(e.item.label),1),e.item.items?(n(),s("i",_e)):m("",!0)],10,we)):m("",!0),e.item.href&&!e.item.items&&e.item.visible!==!1?(n(),y(k(B),{key:2,onClick:o[1]||(o[1]=_=>p(_,e.item)),class:h([e.item.class,{"active-route":g(e.item)}]),tabindex:"0",href:e.item.href},{default:w(()=>[l("i",{class:h([e.item.icon,"layout-menuitem-icon"])},null,2),l("span",xe,$(e.item.label),1),e.item.items?(n(),s("i",Ae)):m("",!0)]),_:1},8,["class","href"])):m("",!0),e.item.items&&e.item.visible!==!1?(n(),y(ae,{key:3,name:"layout-submenu"},{default:w(()=>[z(l("ul",Ie,[(n(!0),s(C,null,P(e.item.items,(_,D)=>(n(),y(v,{key:_.key||D,index:D,item:_,parentItemKey:b.value??"",root:!1},null,8,["index","item","parentItemKey"]))),128))],512),[[ne,e.root?!0:r.value]])]),_:1})):m("",!0)],2)}}}),Se={class:"layout-menu"},Me={key:1,class:"menu-separator"},ze=S({__name:"AppMenu",setup(e){const t=I([{label:"Home",items:[{label:"Dashboard",icon:"pi pi-fw pi-home",href:route("dashboard")}]}]);return(a,d)=>(n(),s("ul",Se,[(n(!0),s(C,null,P(t.value,(i,r)=>(n(),s(C,{key:i},[i.separator?m("",!0):(n(),y(W,{key:0,item:i,index:r},null,8,["item","index"])),i.separator?(n(),s("li",Me)):m("",!0)],64))),128))]))}}),Be=V(ze,[["__scopeId","data-v-4e14b557"]]),Le={class:"mt-3"},Pe={key:1,class:"menu-separator"},Oe=S({__name:"AppMenuFooter",setup(e){const t=I([{label:"Get Started",items:[{label:"View Source",icon:"pi pi-fw pi-github",url:"https://github.com/engnua/laravel-vue-primeui-starter-kit",target:"_blank"}]}]);return(a,d)=>(n(),s("div",Le,[l("ul",{class:h(["layout-menu",{"border-t":t.value.length>0}])},[(n(!0),s(C,null,P(t.value,(i,r)=>(n(),s(C,{key:i},[i.separator?m("",!0):(n(),y(W,{key:0,item:i,index:r},null,8,["item","index"])),i.separator?(n(),s("li",Pe)):m("",!0)],64))),128))],2)]))}}),Ue=V(Oe,[["__scopeId","data-v-b5c0d3bf"]]),Ne={class:"layout-sidebar w-64 bg-white flex flex-col h-screen shadow-lg"},Re=S({__name:"AppSidebar",setup(e){return(t,a)=>(n(),s("div",Ne,[f(Be,{class:"flex-1 overflow-y-auto"}),f(Ue,{class:"mt-auto"})]))}});var je=({dt:e})=>`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${e("avatar.width")};
    height: ${e("avatar.height")};
    font-size: ${e("avatar.font.size")};
    background: ${e("avatar.background")};
    color: ${e("avatar.color")};
    border-radius: ${e("avatar.border.radius")};
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: ${e("avatar.icon.size")};
    width: ${e("avatar.icon.size")};
    height: ${e("avatar.icon.size")};
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: ${e("avatar.lg.width")};
    height: ${e("avatar.lg.width")};
    font-size: ${e("avatar.lg.font.size")};
}

.p-avatar-lg .p-avatar-icon {
    font-size: ${e("avatar.lg.icon.size")};
    width: ${e("avatar.lg.icon.size")};
    height: ${e("avatar.lg.icon.size")};
}

.p-avatar-xl {
    width: ${e("avatar.xl.width")};
    height: ${e("avatar.xl.width")};
    font-size: ${e("avatar.xl.font.size")};
}

.p-avatar-xl .p-avatar-icon {
    font-size: ${e("avatar.xl.icon.size")};
    width: ${e("avatar.xl.icon.size")};
    height: ${e("avatar.xl.icon.size")};
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-inline-start: ${e("avatar.group.offset")};
}

.p-avatar-group .p-avatar {
    border: 2px solid ${e("avatar.group.border.color")};
}

.p-avatar-group .p-avatar-lg + .p-avatar-lg {
    margin-inline-start: ${e("avatar.lg.group.offset")};
}

.p-avatar-group .p-avatar-xl + .p-avatar-xl {
    margin-inline-start: ${e("avatar.xl.group.offset")};
}
`,Ee={root:function(t){var a=t.props;return["p-avatar p-component",{"p-avatar-image":a.image!=null,"p-avatar-circle":a.shape==="circle","p-avatar-lg":a.size==="large","p-avatar-xl":a.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},Ve=j.extend({name:"avatar",style:je,classes:Ee}),De={name:"BaseAvatar",extends:O,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Ve,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function L(e){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(e)}function F(e,t,a){return(t=Fe(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Fe(e){var t=Ke(e,"string");return L(t)=="symbol"?t:t+""}function Ke(e,t){if(L(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var d=a.call(e,t);if(L(d)!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var G={name:"Avatar",extends:De,inheritAttrs:!1,emits:["error"],methods:{onError:function(t){this.$emit("error",t)}},computed:{dataP:function(){return re(F(F({},this.shape,this.shape),this.size,this.size))}}},Te=["aria-labelledby","aria-label","data-p"],qe=["data-p"],He=["data-p"],We=["src","alt","data-p"];function Ge(e,t,a,d,i,r){return n(),s("div",c({class:e.cx("root"),"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},e.ptmi("root"),{"data-p":r.dataP}),[A(e.$slots,"default",{},function(){return[e.label?(n(),s("span",c({key:0,class:e.cx("label")},e.ptm("label"),{"data-p":r.dataP}),$(e.label),17,qe)):e.$slots.icon?(n(),y(R(e.$slots.icon),{key:1,class:h(e.cx("icon"))},null,8,["class"])):e.icon?(n(),s("span",c({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon"),{"data-p":r.dataP}),null,16,He)):e.image?(n(),s("img",c({key:3,src:e.image,alt:e.ariaLabel,onError:t[0]||(t[0]=function(){return r.onError&&r.onError.apply(r,arguments)})},e.ptm("image"),{"data-p":r.dataP}),null,16,We)):m("",!0)]})],16,Te)}G.render=Ge;function Xe(e){if(!e)return"";const t=e.trim().split(" ");return t.length===0?"":t.length===1?t[0].charAt(0).toUpperCase():`${t[0].charAt(0)}${t[t.length-1].charAt(0)}`.toUpperCase()}const Ze={class:"relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-none cursor-pointer transition-colors duration-200"},Je={class:"inline-flex flex-col items-start"},Qe={class:"font-bold"},Ye={class:"text-sm overflow-hidden truncate"},et=["href","target"],tt=S({__name:"UserButton",setup(e){const t=U(),a=T(()=>t.props.auth),d=I(),i=I([{separator:!0},{label:"Settings",icon:"pi pi-cog",route:route("profile.edit")},{label:"Logout",icon:"pi pi-sign-out",route:route("logout"),method:"post"}]),r=b=>{d.value.toggle(b)};return(b,M)=>{const x=ie,p=G,g=se,u=oe;return n(),s(C,null,[f(x,{type:"button",icon:k(q).USER,rounded:"",severity:"secondary",onClick:r,"aria-haspopup":"true","aria-controls":"user_menu"},null,8,["icon"]),f(g,{ref_key:"dropdown",ref:d,id:"user_menu",model:i.value,popup:!0},{start:w(()=>{var o,v,_;return[z((n(),s("span",Ze,[f(p,{label:k(Xe)((o=a.value.user)==null?void 0:o.name),class:"mr-2",shape:"circle"},null,8,["label"]),l("span",Je,[l("span",Qe,$((v=a.value.user)==null?void 0:v.name),1),l("span",Ye,$((_=a.value.user)==null?void 0:_.email),1)])])),[[u]])]}),item:w(({item:o,props:v})=>[o.route?(n(),s(C,{key:0},[o.method?z((n(),y(k(B),c({key:0,method:o.method,href:o.route},v.action),{default:w(()=>[l("span",{class:h(o.icon)},null,2),l("span",null,$(o.label),1)]),_:2},1040,["method","href"])),[[u]]):z((n(),y(k(B),c({key:1,href:o.route},v.action),{default:w(()=>[l("span",{class:h(o.icon)},null,2),l("span",null,$(o.label),1)]),_:2},1040,["href"])),[[u]])],64)):m("",!0),o.url?z((n(),s("a",c({key:1,href:o.url,target:o.target,class:"flex items-center"},v.action),[l("span",{class:h(o.icon)},null,2),l("span",null,$(o.label),1)],16,et)),[[u]]):m("",!0)]),_:1},8,["model"])],64)}}}),at={class:"layout-topbar"},nt={class:"layout-topbar-logo-container"},rt={class:"mb-1 flex h-9 w-9 items-center justify-center rounded-md"},it={class:"layout-topbar-actions"},st={class:"layout-config-menu"},ot={class:"relative"},lt={type:"button",class:"layout-topbar-action layout-topbar-action-highlight"},ut={class:"relative"},ct=S({__name:"AppTopbar",props:{breadcrumbs:{}},setup(e){const{toggleMenu:t}=E(),a="Laravel";return(d,i)=>{const r=ce;return n(),s("div",at,[l("div",nt,[l("button",{class:"layout-menu-button layout-topbar-action",onClick:i[0]||(i[0]=(...b)=>k(t)&&k(t)(...b))},i[1]||(i[1]=[l("i",{class:"pi pi-bars"},null,-1)])),f(k(B),{href:d.route("dashboard"),class:"layout-topbar-logo"},{default:w(()=>[l("div",rt,[f(Q,{class:"size-9 fill-current text-[var(--foreground)] dark:text-white"})]),l("span",null,$(k(a)),1)]),_:1},8,["href"])]),l("div",it,[l("div",st,[l("div",ot,[z((n(),s("button",lt,i[2]||(i[2]=[l("i",{class:"pi pi-palette"},null,-1)]))),[[r,{selector:"@next",enterFromClass:"hidden",enterActiveClass:"animate-scalein",leaveToClass:"hidden",leaveActiveClass:"animate-fadeout",hideOnOutsideClick:!0}]]),f(le)]),f(ue),l("div",ut,[f(tt)])])])])}}});var X={name:"ChevronRightIcon",extends:de};function dt(e,t,a,d,i,r){return n(),s("svg",c({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[l("path",{d:"M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",fill:"currentColor"},null,-1)]),16)}X.render=dt;var mt=({dt:e})=>`
.p-breadcrumb {
    background: ${e("breadcrumb.background")};
    padding: ${e("breadcrumb.padding")};
    overflow-x: auto;
}

.p-breadcrumb-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: ${e("breadcrumb.gap")};
}

.p-breadcrumb-separator {
    display: flex;
    align-items: center;
    color: ${e("breadcrumb.separator.color")};
}

.p-breadcrumb-separator-icon:dir(rtl) {
    transform: rotate(180deg);
}

.p-breadcrumb::-webkit-scrollbar {
    display: none;
}

.p-breadcrumb-item-link {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: ${e("breadcrumb.item.gap")};
    transition: background ${e("breadcrumb.transition.duration")}, color ${e("breadcrumb.transition.duration")}, outline-color ${e("breadcrumb.transition.duration")}, box-shadow ${e("breadcrumb.transition.duration")};
    border-radius: ${e("breadcrumb.item.border.radius")};
    outline-color: transparent;
    color: ${e("breadcrumb.item.color")};
}

.p-breadcrumb-item-link:focus-visible {
    box-shadow: ${e("breadcrumb.item.focus.ring.shadow")};
    outline: ${e("breadcrumb.item.focus.ring.width")} ${e("breadcrumb.item.focus.ring.style")} ${e("breadcrumb.item.focus.ring.color")};
    outline-offset: ${e("breadcrumb.item.focus.ring.offset")};
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
    color: ${e("breadcrumb.item.hover.color")};
}

.p-breadcrumb-item-label {
    transition: inherit;
}

.p-breadcrumb-item-icon {
    color: ${e("breadcrumb.item.icon.color")};
    transition: inherit;
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {
    color: ${e("breadcrumb.item.icon.hover.color")};
}
`,pt={root:"p-breadcrumb p-component",list:"p-breadcrumb-list",homeItem:"p-breadcrumb-home-item",separator:"p-breadcrumb-separator",separatorIcon:"p-breadcrumb-separator-icon",item:function(t){var a=t.instance;return["p-breadcrumb-item",{"p-disabled":a.disabled()}]},itemLink:"p-breadcrumb-item-link",itemIcon:"p-breadcrumb-item-icon",itemLabel:"p-breadcrumb-item-label"},bt=j.extend({name:"breadcrumb",style:mt,classes:pt}),ft={name:"BaseBreadcrumb",extends:O,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:bt,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},Z={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:O,props:{item:null,templates:null,index:null},methods:{onClick:function(t){this.item.command&&this.item.command({originalEvent:t,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var t=this.item,a=t.to,d=t.url,i=typeof window<"u"?window.location.pathname:"";return a===i||d===i?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var t=this;return{action:c({class:this.cx("itemLink"),"aria-current":this.isCurrentUrl(),onClick:function(d){return t.onClick(d)}},this.ptm("itemLink",this.ptmOptions)),icon:c({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:c({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},vt=["href","target","aria-current"];function ht(e,t,a,d,i,r){return r.visible()?(n(),s("li",c({key:0,class:[e.cx("item"),a.item.class]},e.ptm("item",r.ptmOptions)),[a.templates.item?(n(),y(R(a.templates.item),{key:1,item:a.item,label:r.label(),props:r.getMenuItemProps},null,8,["item","label","props"])):(n(),s("a",c({key:0,href:a.item.url||"#",class:e.cx("itemLink"),target:a.item.target,"aria-current":r.isCurrentUrl(),onClick:t[0]||(t[0]=function(){return r.onClick&&r.onClick.apply(r,arguments)})},e.ptm("itemLink",r.ptmOptions)),[a.templates&&a.templates.itemicon?(n(),y(R(a.templates.itemicon),{key:0,item:a.item,class:h(e.cx("itemIcon",r.ptmOptions))},null,8,["item","class"])):a.item.icon?(n(),s("span",c({key:1,class:[e.cx("itemIcon"),a.item.icon]},e.ptm("itemIcon",r.ptmOptions)),null,16)):m("",!0),a.item.label?(n(),s("span",c({key:2,class:e.cx("itemLabel")},e.ptm("itemLabel",r.ptmOptions)),$(r.label()),17)):m("",!0)],16,vt))],16)):m("",!0)}Z.render=ht;var J={name:"Breadcrumb",extends:ft,inheritAttrs:!1,components:{BreadcrumbItem:Z,ChevronRightIcon:X}};function yt(e,t,a,d,i,r){var b=N("BreadcrumbItem"),M=N("ChevronRightIcon");return n(),s("nav",c({class:e.cx("root")},e.ptmi("root")),[l("ol",c({class:e.cx("list")},e.ptm("list")),[e.home?(n(),y(b,c({key:0,item:e.home,class:e.cx("homeItem"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("homeItem")),null,16,["item","class","templates","pt","unstyled"])):m("",!0),(n(!0),s(C,null,P(e.model,function(x,p){return n(),s(C,{key:x.label+"_"+p},[e.home||p!==0?(n(),s("li",c({key:0,class:e.cx("separator"),ref_for:!0},e.ptm("separator")),[A(e.$slots,"separator",{},function(){return[f(M,c({"aria-hidden":"true",class:e.cx("separatorIcon"),ref_for:!0},e.ptm("separatorIcon")),null,16,["class"])]})],16)):m("",!0),f(b,{item:x,index:p,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}J.render=yt;const gt={class:"text-primary font-semibold ml-2"},$t=["href","target"],kt={class:"text-surface-700 dark:text-surface-0"},wt=S({__name:"Breadcrumbs",props:{breadcrumbs:{}},setup(e){const t=I({icon:q.HOME,route:route("dashboard")});return(a,d)=>{const i=H;return n(),y(i,{class:"mb-4"},{content:w(()=>[f(k(J),{home:t.value,model:a.breadcrumbs},{item:w(({item:r,props:b})=>[r.route?(n(),y(k(B),{key:0,href:r.route,custom:""},{default:w(()=>[l("span",{class:h([r.icon,"text-color"])},null,2),l("span",gt,$(r.title),1)]),_:2},1032,["href"])):(n(),s("a",c({key:1,href:r.url,target:r.target},b.action),[l("span",{class:h([r.icon,"text-color"])},null,2),l("span",kt,$(r.title),1)],16,$t))]),_:1},8,["home","model"])]),_:1})}}}),Ct={class:"layout-main-container"},_t={class:"layout-main"},St=S({__name:"AppLayout",props:{breadcrumbs:{default:()=>[]}},setup(e){const{layoutConfig:t,layoutState:a,isSidebarActive:d}=E(),i=I(null);K(d,p=>{p?b():M()});const r=T(()=>({"layout-overlay":t.menuMode==="overlay","layout-static":t.menuMode==="static","layout-static-inactive":a.staticMenuDesktopInactive&&t.menuMode==="static","layout-overlay-active":a.overlayMenuActive,"layout-mobile-active":a.staticMenuMobileActive}));function b(){i.value||(i.value=p=>{x(p)&&(a.overlayMenuActive=!1,a.staticMenuMobileActive=!1,a.menuHoverActive=!1)},document.addEventListener("click",i.value))}function M(){i.value&&(document.removeEventListener("click",i.value),i.value=null)}function x(p){const g=document.querySelector(".layout-sidebar"),u=document.querySelector(".layout-menu-button");return!(g!=null&&g.isSameNode(p.target)||g!=null&&g.contains(p.target)||u!=null&&u.isSameNode(p.target)||u!=null&&u.contains(p.target))}return(p,g)=>{const u=Y;return n(),s(C,null,[l("div",{class:h(["layout-wrapper",r.value])},[f(ct),f(Re),l("div",Ct,[l("div",_t,[p.breadcrumbs&&p.breadcrumbs.length>0?(n(),y(wt,{key:0,breadcrumbs:p.breadcrumbs},null,8,["breadcrumbs"])):m("",!0),A(p.$slots,"default")]),f($e)]),g[0]||(g[0]=l("div",{class:"layout-mask animate-fadein"},null,-1))],2),f(u,{position:"top-center",group:"tc"})],64)}}});export{St as _,X as a,H as s};
