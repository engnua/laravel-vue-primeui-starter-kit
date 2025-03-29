import{f as O,c as ee,s as K,h as q,R as te,b as ae,_ as ne,S as re,a as se}from"./AppearanceSelector.vue_vue_type_script_setup_true_lang-CnSxzxmo.js";import{B as N,a as i,o as a,j as p,b as l,k as m,s as z,g as H,d as M,v as E,r as S,ag as ie,X as U,x as W,q as R,n as f,f as v,t as g,u as k,P as B,w,V as oe,y as x,F as _,af as P,a8 as le,e as h,W as j,c as T,z as G}from"./app-DupsMls6.js";import{_ as ue,a as ce}from"./AppLogoIcon.vue_vue_type_script_setup_true_lang-BdjDqTte.js";var de=({dt:e})=>`
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
`,me={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},pe=N.extend({name:"card",style:de,classes:me}),be={name:"BaseCard",extends:O,style:pe,provide:function(){return{$pcCard:this,$parentInstance:this}}},fe={name:"Card",extends:be,inheritAttrs:!1};function he(e,t,n,b,s,r){return a(),i("div",m({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(a(),i("div",m({key:0,class:e.cx("header")},e.ptm("header")),[z(e.$slots,"header")],16)):p("",!0),l("div",m({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(a(),i("div",m({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(a(),i("div",m({key:0,class:e.cx("title")},e.ptm("title")),[z(e.$slots,"title")],16)):p("",!0),e.$slots.subtitle?(a(),i("div",m({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[z(e.$slots,"subtitle")],16)):p("",!0)],16)):p("",!0),l("div",m({class:e.cx("content")},e.ptm("content")),[z(e.$slots,"content")],16),e.$slots.footer?(a(),i("div",m({key:1,class:e.cx("footer")},e.ptm("footer")),[z(e.$slots,"footer")],16)):p("",!0)],16)],16)}fe.render=he;const V=(e,t)=>{const n=e.__vccOpts||e;for(const[b,s]of t)n[b]=s;return n},ve={},ye={class:"layout-footer"};function ge(e,t){return a(),i("div",ye,t[0]||(t[0]=[H(" SAKAI by "),l("a",{href:"https://primevue.org",target:"_blank",rel:"noopener noreferrer",class:"text-primary font-bold hover:underline"},"PrimeVue",-1)]))}const $e=V(ve,[["render",ge]]),ke={key:0,class:"layout-menuitem-root-text"},we=["href","target"],Ce={class:"layout-menuitem-text"},_e={key:0,class:"pi pi-fw pi-angle-down layout-submenu-toggler"},Ae={class:"layout-menuitem-text"},Ie={key:0,class:"pi pi-fw pi-angle-down layout-submenu-toggler"},Se={class:"layout-submenu"},X=M({__name:"AppMenuItem",props:{item:{type:Object,default:()=>({})},index:{type:Number,default:0},root:{type:Boolean,default:!0},parentItemKey:{type:String,default:null}},setup(e){const{layoutState:t,setActiveMenuItem:n,toggleMenu:b}=E(),s=e,r=S(!1),y=S(null);ie(()=>{y.value=s.parentItemKey?`${s.parentItemKey}-${s.index}`:String(s.index);const u=U().url;C(s.item,u)&&(n(y.value),r.value=!0)});function C(u,o){return u.href&&u.href.replace(/^https?:\/\/[^/]+/,"")===o?!0:u.items?u.items.some($=>C($,o)):!1}W(()=>t.activeMenuItem,u=>{r.value=A(u,y.value)});function A(u,o){return!u||!o?!1:u===o?!0:u.startsWith(`${o}-`)||u.includes(`${o}-`)}function d(u,o){if(o.disabled){u.preventDefault();return}(o.href||o.url)&&(t.staticMenuMobileActive||t.overlayMenuActive)&&b(),o.command&&o.command({originalEvent:u,item:o});const $=o.items&&r.value?null:y.value;n($)}function c(u){const o=U().url,$=u.href.replace(/^https?:\/\/[^/]+/,"");return o===$}return(u,o)=>{const $=R("AppMenuItem",!0);return a(),i("li",{class:f({"layout-root-menuitem":e.root,"active-menuitem":r.value})},[e.root&&e.item.visible!==!1?(a(),i("div",ke,g(e.item.label),1)):p("",!0),(!e.item.href||e.item.items)&&e.item.visible!==!1?(a(),i("a",{key:1,href:e.item.url,onClick:o[0]||(o[0]=I=>d(I,e.item)),class:f(e.item.class),target:e.item.target,tabindex:"0"},[l("i",{class:f([e.item.icon,"layout-menuitem-icon"])},null,2),l("span",Ce,g(e.item.label),1),e.item.items?(a(),i("i",_e)):p("",!0)],10,we)):p("",!0),e.item.href&&!e.item.items&&e.item.visible!==!1?(a(),v(k(B),{key:2,onClick:o[1]||(o[1]=I=>d(I,e.item)),class:f([e.item.class,{"active-route":c(e.item)}]),tabindex:"0",href:e.item.href},{default:w(()=>[l("i",{class:f([e.item.icon,"layout-menuitem-icon"])},null,2),l("span",Ae,g(e.item.label),1),e.item.items?(a(),i("i",Ie)):p("",!0)]),_:1},8,["class","href"])):p("",!0),e.item.items&&e.item.visible!==!1?(a(),v(oe,{key:3,name:"layout-submenu"},{default:w(()=>[x(l("ul",Se,[(a(!0),i(_,null,P(e.item.items,(I,D)=>(a(),v($,{key:I.key||D,index:D,item:I,parentItemKey:y.value??"",root:!1},null,8,["index","item","parentItemKey"]))),128))],512),[[le,e.root?!0:r.value]])]),_:1})):p("",!0)],2)}}}),Me={class:"layout-menu"},ze={key:1,class:"menu-separator"},Be=M({__name:"AppMenu",setup(e){const t=S([{label:"Home",items:[{label:"Dashboard",icon:"pi pi-fw pi-home",href:route("dashboard")}]}]);return(n,b)=>(a(),i("ul",Me,[(a(!0),i(_,null,P(t.value,(s,r)=>(a(),i(_,{key:s},[s.separator?p("",!0):(a(),v(X,{key:0,item:s,index:r},null,8,["item","index"])),s.separator?(a(),i("li",ze)):p("",!0)],64))),128))]))}}),xe=V(Be,[["__scopeId","data-v-4e14b557"]]),Le={class:"mt-3"},Pe={key:1,class:"menu-separator"},Oe=M({__name:"AppMenuFooter",setup(e){const t=S([{label:"Get Started",items:[{label:"View Source",icon:"pi pi-fw pi-github",url:"https://github.com/engnua/laravel-vue-primeui-starter-kit",target:"_blank"}]}]);return(n,b)=>(a(),i("div",Le,[l("ul",{class:f(["layout-menu",{"border-t dark:border-surface-700":t.value.length>0}])},[(a(!0),i(_,null,P(t.value,(s,r)=>(a(),i(_,{key:s},[s.separator?p("",!0):(a(),v(X,{key:0,item:s,index:r},null,8,["item","index"])),s.separator?(a(),i("li",Pe)):p("",!0)],64))),128))],2)]))}}),Ue=V(Oe,[["__scopeId","data-v-33345bed"]]),Re={class:"layout-sidebar w-64 bg-white flex flex-col h-screen shadow-lg"},je=M({__name:"AppSidebar",setup(e){return(t,n)=>(a(),i("div",Re,[h(xe,{class:"flex-1 overflow-y-auto"}),h(Ue,{class:"mt-auto"})]))}});var Ne=({dt:e})=>`
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
`,Ee={root:function(t){var n=t.props;return["p-avatar p-component",{"p-avatar-image":n.image!=null,"p-avatar-circle":n.shape==="circle","p-avatar-lg":n.size==="large","p-avatar-xl":n.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},Te=N.extend({name:"avatar",style:Ne,classes:Ee}),Ve={name:"BaseAvatar",extends:O,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Te,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function L(e){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(e)}function F(e,t,n){return(t=De(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function De(e){var t=Fe(e,"string");return L(t)=="symbol"?t:t+""}function Fe(e,t){if(L(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var b=n.call(e,t);if(L(b)!="object")return b;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Z={name:"Avatar",extends:Ve,inheritAttrs:!1,emits:["error"],methods:{onError:function(t){this.$emit("error",t)}},computed:{dataP:function(){return ee(F(F({},this.shape,this.shape),this.size,this.size))}}},Ke=["aria-labelledby","aria-label","data-p"],qe=["data-p"],He=["data-p"],We=["src","alt","data-p"];function Ge(e,t,n,b,s,r){return a(),i("div",m({class:e.cx("root"),"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},e.ptmi("root"),{"data-p":r.dataP}),[z(e.$slots,"default",{},function(){return[e.label?(a(),i("span",m({key:0,class:e.cx("label")},e.ptm("label"),{"data-p":r.dataP}),g(e.label),17,qe)):e.$slots.icon?(a(),v(j(e.$slots.icon),{key:1,class:f(e.cx("icon"))},null,8,["class"])):e.icon?(a(),i("span",m({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon"),{"data-p":r.dataP}),null,16,He)):e.image?(a(),i("img",m({key:3,src:e.image,alt:e.ariaLabel,onError:t[0]||(t[0]=function(){return r.onError&&r.onError.apply(r,arguments)})},e.ptm("image"),{"data-p":r.dataP}),null,16,We)):p("",!0)]})],16,Ke)}Z.render=Ge;function Xe(e){if(!e)return"";const t=e.trim().split(" ");return t.length===0?"":t.length===1?t[0].charAt(0).toUpperCase():`${t[0].charAt(0)}${t[t.length-1].charAt(0)}`.toUpperCase()}const Ze={class:"relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-none cursor-pointer transition-colors duration-200"},Je={class:"inline-flex flex-col items-start"},Qe={class:"font-bold"},Ye={class:"text-sm overflow-hidden truncate"},et=["href","target"],tt=M({__name:"UserButton",setup(e){const t=U(),n=T(()=>t.props.auth),b=S(),s=S([{separator:!0},{label:"Settings",icon:"pi pi-cog",route:route("profile.edit")},{label:"Logout",icon:"pi pi-sign-out",route:route("logout"),method:"post"}]),r=y=>{b.value.toggle(y)};return(y,C)=>{const A=K,d=Z,c=q,u=te;return a(),i(_,null,[h(A,{type:"button",icon:k(G).USER,rounded:"",severity:"secondary",onClick:r,"aria-haspopup":"true","aria-controls":"user_menu"},null,8,["icon"]),h(c,{ref_key:"dropdown",ref:b,id:"user_menu",model:s.value,popup:!0},{start:w(()=>{var o,$,I;return[x((a(),i("span",Ze,[h(d,{label:k(Xe)((o=n.value.user)==null?void 0:o.name),class:"mr-2",shape:"circle"},null,8,["label"]),l("span",Je,[l("span",Qe,g(($=n.value.user)==null?void 0:$.name),1),l("span",Ye,g((I=n.value.user)==null?void 0:I.email),1)])])),[[u]])]}),item:w(({item:o,props:$})=>[o.route?(a(),i(_,{key:0},[o.method?x((a(),v(k(B),m({key:0,method:o.method,href:o.route},$.action),{default:w(()=>[l("span",{class:f(o.icon)},null,2),l("span",null,g(o.label),1)]),_:2},1040,["method","href"])),[[u]]):x((a(),v(k(B),m({key:1,href:o.route},$.action),{default:w(()=>[l("span",{class:f(o.icon)},null,2),l("span",null,g(o.label),1)]),_:2},1040,["href"])),[[u]])],64)):p("",!0),o.url?x((a(),i("a",m({key:1,href:o.url,target:o.target,class:"flex items-center"},$.action),[l("span",{class:f(o.icon)},null,2),l("span",null,g(o.label),1)],16,et)),[[u]]):p("",!0)]),_:1},8,["model"])],64)}}}),at={class:"layout-topbar"},nt={class:"layout-topbar-logo-container"},rt={class:"mb-1 flex h-9 w-9 items-center justify-center rounded-md"},st={class:"layout-topbar-actions"},it={class:"layout-config-menu"},ot={class:"relative"},lt={type:"button",class:"layout-topbar-action layout-topbar-action-highlight"},ut={class:"relative"},ct=M({__name:"AppTopbar",setup(e){const{toggleMenu:t}=E(),n="Laravel";return(b,s)=>{const r=re;return a(),i("div",at,[l("div",nt,[l("button",{class:"layout-menu-button layout-topbar-action",onClick:s[0]||(s[0]=(...y)=>k(t)&&k(t)(...y))},s[1]||(s[1]=[l("i",{class:"pi pi-bars"},null,-1)])),h(k(B),{href:b.route("dashboard"),class:"layout-topbar-logo"},{default:w(()=>[l("div",rt,[h(ue,{class:"size-9 fill-current text-[var(--foreground)] dark:text-white"})]),l("span",null,g(k(n)),1)]),_:1},8,["href"])]),l("div",st,[l("div",it,[l("div",ot,[x((a(),i("button",lt,s[2]||(s[2]=[l("i",{class:"pi pi-palette"},null,-1)]))),[[r,{selector:"@next",enterFromClass:"hidden",enterActiveClass:"animate-scalein",leaveToClass:"hidden",leaveActiveClass:"animate-fadeout",hideOnOutsideClick:!0}]]),h(ae)]),h(ne),l("div",ut,[h(tt)])])])])}}});var J={name:"ChevronRightIcon",extends:se};function dt(e,t,n,b,s,r){return a(),i("svg",m({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[l("path",{d:"M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",fill:"currentColor"},null,-1)]),16)}J.render=dt;var mt=({dt:e})=>`
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
`,pt={root:"p-breadcrumb p-component",list:"p-breadcrumb-list",homeItem:"p-breadcrumb-home-item",separator:"p-breadcrumb-separator",separatorIcon:"p-breadcrumb-separator-icon",item:function(t){var n=t.instance;return["p-breadcrumb-item",{"p-disabled":n.disabled()}]},itemLink:"p-breadcrumb-item-link",itemIcon:"p-breadcrumb-item-icon",itemLabel:"p-breadcrumb-item-label"},bt=N.extend({name:"breadcrumb",style:mt,classes:pt}),ft={name:"BaseBreadcrumb",extends:O,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:bt,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},Q={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:O,props:{item:null,templates:null,index:null},methods:{onClick:function(t){this.item.command&&this.item.command({originalEvent:t,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var t=this.item,n=t.to,b=t.url,s=typeof window<"u"?window.location.pathname:"";return n===s||b===s?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var t=this;return{action:m({class:this.cx("itemLink"),"aria-current":this.isCurrentUrl(),onClick:function(b){return t.onClick(b)}},this.ptm("itemLink",this.ptmOptions)),icon:m({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:m({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},ht=["href","target","aria-current"];function vt(e,t,n,b,s,r){return r.visible()?(a(),i("li",m({key:0,class:[e.cx("item"),n.item.class]},e.ptm("item",r.ptmOptions)),[n.templates.item?(a(),v(j(n.templates.item),{key:1,item:n.item,label:r.label(),props:r.getMenuItemProps},null,8,["item","label","props"])):(a(),i("a",m({key:0,href:n.item.url||"#",class:e.cx("itemLink"),target:n.item.target,"aria-current":r.isCurrentUrl(),onClick:t[0]||(t[0]=function(){return r.onClick&&r.onClick.apply(r,arguments)})},e.ptm("itemLink",r.ptmOptions)),[n.templates&&n.templates.itemicon?(a(),v(j(n.templates.itemicon),{key:0,item:n.item,class:f(e.cx("itemIcon",r.ptmOptions))},null,8,["item","class"])):n.item.icon?(a(),i("span",m({key:1,class:[e.cx("itemIcon"),n.item.icon]},e.ptm("itemIcon",r.ptmOptions)),null,16)):p("",!0),n.item.label?(a(),i("span",m({key:2,class:e.cx("itemLabel")},e.ptm("itemLabel",r.ptmOptions)),g(r.label()),17)):p("",!0)],16,ht))],16)):p("",!0)}Q.render=vt;var Y={name:"Breadcrumb",extends:ft,inheritAttrs:!1,components:{BreadcrumbItem:Q,ChevronRightIcon:J}};function yt(e,t,n,b,s,r){var y=R("BreadcrumbItem"),C=R("ChevronRightIcon");return a(),i("nav",m({class:e.cx("root")},e.ptmi("root")),[l("ol",m({class:e.cx("list")},e.ptm("list")),[e.home?(a(),v(y,m({key:0,item:e.home,class:e.cx("homeItem"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("homeItem")),null,16,["item","class","templates","pt","unstyled"])):p("",!0),(a(!0),i(_,null,P(e.model,function(A,d){return a(),i(_,{key:A.label+"_"+d},[e.home||d!==0?(a(),i("li",m({key:0,class:e.cx("separator"),ref_for:!0},e.ptm("separator")),[z(e.$slots,"separator",{},function(){return[h(C,m({"aria-hidden":"true",class:e.cx("separatorIcon"),ref_for:!0},e.ptm("separatorIcon")),null,16,["class"])]})],16)):p("",!0),h(y,{item:A,index:d,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}Y.render=yt;const gt={class:"text-primary font-semibold ml-2 hidden md:inline-block"},$t=["href","target"],kt={class:"text-surface-700 dark:text-surface-0"},wt=M({__name:"Breadcrumbs",props:{breadcrumbs:{}},setup(e){const t=S({icon:G.HOME,route:route("dashboard")});return(n,b)=>n.breadcrumbs.length?(a(),v(k(Y),{key:0,home:t.value,model:n.breadcrumbs},{item:w(({item:s,props:r})=>[s.route?(a(),v(k(B),{key:0,href:s.route,custom:""},{default:w(()=>[l("span",{class:f([s.icon,"text-color"])},null,2),l("span",gt,g(s.title),1)]),_:2},1032,["href"])):(a(),i("a",m({key:1,href:s.url,target:s.target},r.action),[l("span",{class:f([s.icon,"text-color"])},null,2),l("span",kt,g(s.title),1)],16,$t))]),_:1},8,["home","model"])):p("",!0)}}),Ct={class:"layout-sub-topbar"},_t={class:"layout-sub-topbar-breadcrumbs"},At={key:0,class:"p-[1.58rem]"},It={key:0,class:"layout-sub-topbar-actions hidden lg:flex space-x-2"},St={class:"lg:hidden"},Mt=["href","target"],zt=M({__name:"AppSubTopbar",props:{breadcrumbs:{default:()=>[]},actions:{default:()=>[]}},setup(e){const t=e,n=S(),b=T(()=>t.actions.map(r=>({label:r.title,icon:r.icon,route:r.route,url:r.url,target:r.target,command:r.command})));console.log(t.actions);const s=r=>{n.value.toggle(r)};return(r,y)=>{var d;const C=K,A=q;return a(),i("div",Ct,[l("div",{class:f(["layout-sub-topbar-content",{"justify-end":r.breadcrumbs.length===0,"justify-between":r.breadcrumbs.length>0}])},[l("div",_t,[h(wt,{breadcrumbs:r.breadcrumbs},null,8,["breadcrumbs"]),r.breadcrumbs.length===0?(a(),i("div",At)):p("",!0)]),(d=r.actions)!=null&&d.length?(a(),i("div",It,[(a(!0),i(_,null,P(r.actions,(c,u)=>(a(),i(_,{key:u},[c.route?(a(),v(C,{key:`btn-route-${u}`,asChild:"",class:"inline-block",severity:"secondary"},{default:w(o=>[h(k(B),{href:c.route,class:f(o.class)},{default:w(()=>[c.icon?(a(),i("span",{key:0,class:f(c.icon)},null,2)):p("",!0),H(" "+g(c.title),1)]),_:2},1032,["href","class"])]),_:2},1024)):c.url?(a(),v(C,{key:`btn-url-${u}`,as:"a",label:c.title,icon:c.icon,href:c.url,target:c.target||"_self",severity:"secondary"},null,8,["label","icon","href","target"])):(a(),v(C,{key:`btn-command-${u}`,label:c.title,icon:c.icon,onClick:c.command,severity:"secondary"},null,8,["label","icon","onClick"]))],64))),128))])):p("",!0),l("div",St,[h(C,{severity:"secondary",icon:"pi pi-ellipsis-v",onClick:s,text:""}),h(A,{ref_key:"mobileMenuRef",ref:n,model:b.value,popup:""},{item:w(({item:c,props:u})=>[c.route?(a(),v(k(B),m({key:0,href:c.route},u.action),{default:w(()=>[c.icon?(a(),i("span",{key:0,class:f(c.icon)},null,2)):p("",!0),l("span",null,g(c.label),1)]),_:2},1040,["href"])):(a(),i("a",m({key:1,href:c.url,class:"flex items-center",target:c.target},u.action),[c.icon?(a(),i("span",{key:0,class:f(c.icon)},null,2)):p("",!0),l("span",null,g(c.label),1)],16,Mt))]),_:1},8,["model"])])],2)])}}}),Bt={class:"layout-main"},Ot=M({__name:"AppLayout",props:{breadcrumbs:{default:()=>[]},actions:{default:()=>[{title:"Packagist",icon:"pi pi-github",url:"https://packagist.org/packages/engnua/laravel-vue-primeui-starter-kit",target:"_blank"}]}},setup(e){const{layoutConfig:t,layoutState:n,isSidebarActive:b}=E(),s=S(null);W(b,d=>{d?y():C()});const r=T(()=>({"layout-overlay":t.menuMode==="overlay","layout-static":t.menuMode==="static","layout-static-inactive":n.staticMenuDesktopInactive&&t.menuMode==="static","layout-overlay-active":n.overlayMenuActive,"layout-mobile-active":n.staticMenuMobileActive}));function y(){s.value||(s.value=d=>{A(d)&&(n.overlayMenuActive=!1,n.staticMenuMobileActive=!1,n.menuHoverActive=!1)},document.addEventListener("click",s.value))}function C(){s.value&&(document.removeEventListener("click",s.value),s.value=null)}function A(d){const c=document.querySelector(".layout-sidebar"),u=document.querySelector(".layout-menu-button");return!(c!=null&&c.isSameNode(d.target)||c!=null&&c.contains(d.target)||u!=null&&u.isSameNode(d.target)||u!=null&&u.contains(d.target))}return(d,c)=>{const u=ce;return a(),i(_,null,[l("div",{class:f(["layout-wrapper",r.value])},[h(ct,{class:f({"border-b dark:border-surface-700":d.breadcrumbs.length||d.actions.length})},null,8,["class"]),d.breadcrumbs.length||d.actions.length?(a(),v(zt,{key:0,breadcrumbs:d.breadcrumbs,actions:d.actions},null,8,["breadcrumbs","actions"])):p("",!0),h(je,{class:f({"layout-sidebar-margin-default":!d.breadcrumbs.length||!d.actions.length,"layout-sidebar-margin-topsubbar":d.breadcrumbs.length||d.actions.length})},null,8,["class"]),l("div",{class:f(["layout-main-container",{"layout-main-container-padding-default":!d.breadcrumbs.length||!d.actions.length,"layout-main-container-padding-topsubbar":d.breadcrumbs.length||d.actions.length}])},[l("div",Bt,[z(d.$slots,"default")]),h($e)],2),c[0]||(c[0]=l("div",{class:"layout-mask animate-fadein"},null,-1))],2),h(u,{position:"top-center",group:"tc"})],64)}}});export{Ot as _,J as a,fe as s};
