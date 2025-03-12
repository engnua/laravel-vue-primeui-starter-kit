import{_ as H,a as W}from"./AppLogoIcon.vue_vue_type_script_setup_true_lang-DtUDpxA_.js";import{B as K,a as i,o as a,j as m,b as o,k as u,s as I,g as G,d as M,v as P,r as S,ag as X,x as U,q as _,n as h,f as y,t as g,u as $,P as L,w as k,V as Z,y as z,F as x,af as N,a8 as J,e as f,W as O,X as Q,c as D,z as E}from"./app-BHFLiKzk.js";import{e as B,s as Y,g as ee,R as te,b as ae,_ as ne,S as re,a as ie}from"./AppearanceSelector.vue_vue_type_script_setup_true_lang-2jSUHK3m.js";var se=({dt:e})=>`
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
`,oe={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},le=K.extend({name:"card",style:se,classes:oe}),ue={name:"BaseCard",extends:B,style:le,provide:function(){return{$pcCard:this,$parentInstance:this}}},V={name:"Card",extends:ue,inheritAttrs:!1};function ce(e,t,n,p,s,r){return a(),i("div",u({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(a(),i("div",u({key:0,class:e.cx("header")},e.ptm("header")),[I(e.$slots,"header")],16)):m("",!0),o("div",u({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(a(),i("div",u({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(a(),i("div",u({key:0,class:e.cx("title")},e.ptm("title")),[I(e.$slots,"title")],16)):m("",!0),e.$slots.subtitle?(a(),i("div",u({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[I(e.$slots,"subtitle")],16)):m("",!0)],16)):m("",!0),o("div",u({class:e.cx("content")},e.ptm("content")),[I(e.$slots,"content")],16),e.$slots.footer?(a(),i("div",u({key:1,class:e.cx("footer")},e.ptm("footer")),[I(e.$slots,"footer")],16)):m("",!0)],16)],16)}V.render=ce;const de=(e,t)=>{const n=e.__vccOpts||e;for(const[p,s]of t)n[p]=s;return n},me={},pe={class:"layout-footer"};function be(e,t){return a(),i("div",pe,t[0]||(t[0]=[G(" SAKAI by "),o("a",{href:"https://primevue.org",target:"_blank",rel:"noopener noreferrer",class:"text-primary font-bold hover:underline"},"PrimeVue",-1)]))}const ve=de(me,[["render",be]]),fe={key:0,class:"layout-menuitem-root-text"},he=["href","target"],ge={class:"layout-menuitem-text"},ye={key:0,class:"pi pi-fw pi-angle-down layout-submenu-toggler"},$e={class:"layout-menuitem-text"},ke={key:0,class:"pi pi-fw pi-angle-down layout-submenu-toggler"},Ce={class:"layout-submenu"},we=M({__name:"AppMenuItem",props:{item:{type:Object,default:()=>({})},index:{type:Number,default:0},root:{type:Boolean,default:!0},parentItemKey:{type:String,default:null}},setup(e){const{layoutState:t,setActiveMenuItem:n,toggleMenu:p}=P(),s=e,r=S(!1),b=S(null);X(()=>{b.value=s.parentItemKey?s.parentItemKey+"-"+s.index:String(s.index);const l=t.activeMenuItem;r.value=l===b.value||l?l.startsWith(b.value+"-"):!1}),U(()=>t.activeMenuItem,l=>{r.value=l===b.value||l.startsWith(b.value+"-")});function A(l,c){if(c.disabled){l.preventDefault();return}(c.to||c.url)&&(t.staticMenuMobileActive||t.overlayMenuActive)&&p(),c.command&&c.command({originalEvent:l,item:c});const v=c.items?r.value?s.parentItemKey:b:b.value;n(v)}function C(l){return route.path===l.to}return(l,c)=>{const v=_("app-menu-item",!0);return a(),i("li",{class:h({"layout-root-menuitem":e.root,"active-menuitem":r.value})},[e.root&&e.item.visible!==!1?(a(),i("div",fe,g(e.item.label),1)):m("",!0),(!e.item.to||e.item.items)&&e.item.visible!==!1?(a(),i("a",{key:1,href:e.item.url,onClick:c[0]||(c[0]=d=>A(d,e.item,e.index)),class:h(e.item.class),target:e.item.target,tabindex:"0"},[o("i",{class:h([e.item.icon,"layout-menuitem-icon"])},null,2),o("span",ge,g(e.item.label),1),e.item.items?(a(),i("i",ye)):m("",!0)],10,he)):m("",!0),e.item.to&&!e.item.items&&e.item.visible!==!1?(a(),y($(L),{key:2,onClick:c[1]||(c[1]=d=>A(d,e.item,e.index)),class:h([e.item.class,{"active-route":C(e.item)}]),tabindex:"0",href:e.item.to},{default:k(()=>[o("i",{class:h([e.item.icon,"layout-menuitem-icon"])},null,2),o("span",$e,g(e.item.label),1),e.item.items?(a(),i("i",ke)):m("",!0)]),_:1},8,["class","href"])):m("",!0),e.item.items&&e.item.visible!==!1?(a(),y(Z,{key:3,name:"layout-submenu"},{default:k(()=>[z(o("ul",Ce,[(a(!0),i(x,null,N(e.item.items,(d,w)=>(a(),y(v,{key:d,index:w,item:d,parentItemKey:b.value,root:!1},null,8,["index","item","parentItemKey"]))),128))],512),[[J,e.root?!0:r.value]])]),_:1})):m("",!0)],2)}}}),Ie={class:"layout-menu"},xe={key:1,class:"menu-separator"},Ae=M({__name:"AppMenu",setup(e){const t=S([{label:"Home",items:[{label:"Dashboard",icon:"pi pi-fw pi-home",to:route("dashboard")}]},{label:"Get Started",items:[{label:"View Source",icon:"pi pi-fw pi-github",url:"https://github.com/engnua/laravel-vue-primeui-starter-kit",target:"_blank"}]}]);return(n,p)=>(a(),i("ul",Ie,[(a(!0),i(x,null,N(t.value,(s,r)=>(a(),i(x,{key:s},[s.separator?m("",!0):(a(),y(we,{key:0,item:s,index:r},null,8,["item","index"])),s.separator?(a(),i("li",xe)):m("",!0)],64))),128))]))}}),Se={class:"layout-sidebar"},Me=M({__name:"AppSidebar",setup(e){return(t,n)=>(a(),i("div",Se,[f(Ae)]))}});var ze=({dt:e})=>`
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
`,Le={root:function(t){var n=t.props;return["p-avatar p-component",{"p-avatar-image":n.image!=null,"p-avatar-circle":n.shape==="circle","p-avatar-lg":n.size==="large","p-avatar-xl":n.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},Be=K.extend({name:"avatar",style:ze,classes:Le}),_e={name:"BaseAvatar",extends:B,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Be,provide:function(){return{$pcAvatar:this,$parentInstance:this}}},T={name:"Avatar",extends:_e,inheritAttrs:!1,emits:["error"],methods:{onError:function(t){this.$emit("error",t)}}},Oe=["aria-labelledby","aria-label"],Ke=["src","alt"];function Pe(e,t,n,p,s,r){return a(),i("div",u({class:e.cx("root"),"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},e.ptmi("root")),[I(e.$slots,"default",{},function(){return[e.label?(a(),i("span",u({key:0,class:e.cx("label")},e.ptm("label")),g(e.label),17)):e.$slots.icon?(a(),y(O(e.$slots.icon),{key:1,class:h(e.cx("icon"))},null,8,["class"])):e.icon?(a(),i("span",u({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):e.image?(a(),i("img",u({key:3,src:e.image,alt:e.ariaLabel,onError:t[0]||(t[0]=function(){return r.onError&&r.onError.apply(r,arguments)})},e.ptm("image")),null,16,Ke)):m("",!0)]})],16,Oe)}T.render=Pe;function Ne(e){if(!e)return"";const t=e.trim().split(" ");return t.length===0?"":t.length===1?t[0].charAt(0).toUpperCase():`${t[0].charAt(0)}${t[t.length-1].charAt(0)}`.toUpperCase()}const Re={class:"relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-none cursor-pointer transition-colors duration-200"},Ue={class:"inline-flex flex-col items-start"},De={class:"font-bold"},Ee={class:"text-sm overflow-hidden truncate"},Ve=["href","target"],Te=M({__name:"UserButton",setup(e){const t=Q(),n=D(()=>t.props.auth),p=S(),s=S([{separator:!0},{label:"Settings",icon:"pi pi-cog",route:route("profile.edit")},{label:"Logout",icon:"pi pi-sign-out",route:route("logout"),method:"post"}]),r=b=>{p.value.toggle(b)};return(b,A)=>{const C=Y,l=T,c=ee,v=te;return a(),i(x,null,[f(C,{type:"button",icon:$(E).USER,rounded:"",severity:"secondary",onClick:r,"aria-haspopup":"true","aria-controls":"user_menu"},null,8,["icon"]),f(c,{ref_key:"dropdown",ref:p,id:"user_menu",model:s.value,popup:!0},{start:k(()=>{var d,w,R;return[z((a(),i("span",Re,[f(l,{label:$(Ne)((d=n.value.user)==null?void 0:d.name),class:"mr-2",shape:"circle"},null,8,["label"]),o("span",Ue,[o("span",De,g((w=n.value.user)==null?void 0:w.name),1),o("span",Ee,g((R=n.value.user)==null?void 0:R.email),1)])])),[[v]])]}),item:k(({item:d,props:w})=>[d.route?(a(),i(x,{key:0},[d.method?z((a(),y($(L),u({key:0,method:d.method,href:d.route},w.action),{default:k(()=>[o("span",{class:h(d.icon)},null,2),o("span",null,g(d.label),1)]),_:2},1040,["method","href"])),[[v]]):z((a(),y($(L),u({key:1,href:d.route},w.action),{default:k(()=>[o("span",{class:h(d.icon)},null,2),o("span",null,g(d.label),1)]),_:2},1040,["href"])),[[v]])],64)):m("",!0),d.url?z((a(),i("a",u({key:1,href:d.url,target:d.target,class:"flex items-center"},w.action),[o("span",{class:h(d.icon)},null,2),o("span",null,g(d.label),1)],16,Ve)),[[v]]):m("",!0)]),_:1},8,["model"])],64)}}}),je={class:"layout-topbar"},qe={class:"layout-topbar-logo-container"},Fe={class:"mb-1 flex h-9 w-9 items-center justify-center rounded-md"},He={class:"layout-topbar-actions"},We={class:"layout-config-menu"},Ge={class:"relative"},Xe={type:"button",class:"layout-topbar-action layout-topbar-action-highlight"},Ze={class:"relative"},Je=M({__name:"AppTopbar",props:{breadcrumbs:{}},setup(e){const{toggleMenu:t}=P(),n="Laravel";return(p,s)=>{const r=re;return a(),i("div",je,[o("div",qe,[o("button",{class:"layout-menu-button layout-topbar-action",onClick:s[0]||(s[0]=(...b)=>$(t)&&$(t)(...b))},s[1]||(s[1]=[o("i",{class:"pi pi-bars"},null,-1)])),f($(L),{href:p.route("dashboard"),class:"layout-topbar-logo"},{default:k(()=>[o("div",Fe,[f(H,{class:"size-9 fill-current text-[var(--foreground)] dark:text-white"})]),o("span",null,g($(n)),1)]),_:1},8,["href"])]),o("div",He,[o("div",We,[o("div",Ge,[z((a(),i("button",Xe,s[2]||(s[2]=[o("i",{class:"pi pi-palette"},null,-1)]))),[[r,{selector:"@next",enterFromClass:"hidden",enterActiveClass:"animate-scalein",leaveToClass:"hidden",leaveActiveClass:"animate-fadeout",hideOnOutsideClick:!0}]]),f(ae)]),f(ne),o("div",Ze,[f(Te)])])])])}}});var j={name:"ChevronRightIcon",extends:ie};function Qe(e,t,n,p,s,r){return a(),i("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[o("path",{d:"M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",fill:"currentColor"},null,-1)]),16)}j.render=Qe;var Ye=({dt:e})=>`
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
`,et={root:"p-breadcrumb p-component",list:"p-breadcrumb-list",homeItem:"p-breadcrumb-home-item",separator:"p-breadcrumb-separator",separatorIcon:"p-breadcrumb-separator-icon",item:function(t){var n=t.instance;return["p-breadcrumb-item",{"p-disabled":n.disabled()}]},itemLink:"p-breadcrumb-item-link",itemIcon:"p-breadcrumb-item-icon",itemLabel:"p-breadcrumb-item-label"},tt=K.extend({name:"breadcrumb",style:Ye,classes:et}),at={name:"BaseBreadcrumb",extends:B,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:tt,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},q={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:B,props:{item:null,templates:null,index:null},methods:{onClick:function(t){this.item.command&&this.item.command({originalEvent:t,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var t=this.item,n=t.to,p=t.url,s=typeof window<"u"?window.location.pathname:"";return n===s||p===s?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var t=this;return{action:u({class:this.cx("itemLink"),"aria-current":this.isCurrentUrl(),onClick:function(p){return t.onClick(p)}},this.ptm("itemLink",this.ptmOptions)),icon:u({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:u({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},nt=["href","target","aria-current"];function rt(e,t,n,p,s,r){return r.visible()?(a(),i("li",u({key:0,class:[e.cx("item"),n.item.class]},e.ptm("item",r.ptmOptions)),[n.templates.item?(a(),y(O(n.templates.item),{key:1,item:n.item,label:r.label(),props:r.getMenuItemProps},null,8,["item","label","props"])):(a(),i("a",u({key:0,href:n.item.url||"#",class:e.cx("itemLink"),target:n.item.target,"aria-current":r.isCurrentUrl(),onClick:t[0]||(t[0]=function(){return r.onClick&&r.onClick.apply(r,arguments)})},e.ptm("itemLink",r.ptmOptions)),[n.templates&&n.templates.itemicon?(a(),y(O(n.templates.itemicon),{key:0,item:n.item,class:h(e.cx("itemIcon",r.ptmOptions))},null,8,["item","class"])):n.item.icon?(a(),i("span",u({key:1,class:[e.cx("itemIcon"),n.item.icon]},e.ptm("itemIcon",r.ptmOptions)),null,16)):m("",!0),n.item.label?(a(),i("span",u({key:2,class:e.cx("itemLabel")},e.ptm("itemLabel",r.ptmOptions)),g(r.label()),17)):m("",!0)],16,nt))],16)):m("",!0)}q.render=rt;var F={name:"Breadcrumb",extends:at,inheritAttrs:!1,components:{BreadcrumbItem:q,ChevronRightIcon:j}};function it(e,t,n,p,s,r){var b=_("BreadcrumbItem"),A=_("ChevronRightIcon");return a(),i("nav",u({class:e.cx("root")},e.ptmi("root")),[o("ol",u({class:e.cx("list")},e.ptm("list")),[e.home?(a(),y(b,u({key:0,item:e.home,class:e.cx("homeItem"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("homeItem")),null,16,["item","class","templates","pt","unstyled"])):m("",!0),(a(!0),i(x,null,N(e.model,function(C,l){return a(),i(x,{key:C.label+"_"+l},[e.home||l!==0?(a(),i("li",u({key:0,class:e.cx("separator"),ref_for:!0},e.ptm("separator")),[I(e.$slots,"separator",{},function(){return[f(A,u({"aria-hidden":"true",class:e.cx("separatorIcon"),ref_for:!0},e.ptm("separatorIcon")),null,16,["class"])]})],16)):m("",!0),f(b,{item:C,index:l,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}F.render=it;const st={class:"text-primary font-semibold ml-2"},ot=["href","target"],lt={class:"text-surface-700 dark:text-surface-0"},ut=M({__name:"Breadcrumbs",props:{breadcrumbs:{}},setup(e){const t=S({icon:E.HOME,route:route("dashboard")});return(n,p)=>{const s=V;return a(),y(s,{class:"mb-4"},{content:k(()=>[f($(F),{home:t.value,model:n.breadcrumbs},{item:k(({item:r,props:b})=>[r.route?(a(),y($(L),{key:0,href:r.route,custom:""},{default:k(()=>[o("span",{class:h([r.icon,"text-color"])},null,2),o("span",st,g(r.title),1)]),_:2},1032,["href"])):(a(),i("a",u({key:1,href:r.url,target:r.target},b.action),[o("span",{class:h([r.icon,"text-color"])},null,2),o("span",lt,g(r.title),1)],16,ot))]),_:1},8,["home","model"])]),_:1})}}}),ct={class:"layout-main-container"},dt={class:"layout-main"},vt=M({__name:"AppLayout",props:{breadcrumbs:{default:()=>[]}},setup(e){const{layoutConfig:t,layoutState:n,isSidebarActive:p}=P(),s=S(null);U(p,l=>{l?b():A()});const r=D(()=>({"layout-overlay":t.menuMode==="overlay","layout-static":t.menuMode==="static","layout-static-inactive":n.staticMenuDesktopInactive&&t.menuMode==="static","layout-overlay-active":n.overlayMenuActive,"layout-mobile-active":n.staticMenuMobileActive}));function b(){s.value||(s.value=l=>{C(l)&&(n.overlayMenuActive=!1,n.staticMenuMobileActive=!1,n.menuHoverActive=!1)},document.addEventListener("click",s.value))}function A(){s.value&&(document.removeEventListener("click",s.value),s.value=null)}function C(l){const c=document.querySelector(".layout-sidebar"),v=document.querySelector(".layout-menu-button");return!(c!=null&&c.isSameNode(l.target)||c!=null&&c.contains(l.target)||v!=null&&v.isSameNode(l.target)||v!=null&&v.contains(l.target))}return(l,c)=>{const v=W;return a(),i(x,null,[o("div",{class:h(["layout-wrapper",r.value])},[f(Je),f(Me),o("div",ct,[o("div",dt,[l.breadcrumbs&&l.breadcrumbs.length>0?(a(),y(ut,{key:0,breadcrumbs:l.breadcrumbs},null,8,["breadcrumbs"])):m("",!0),I(l.$slots,"default")]),f(ve)]),c[0]||(c[0]=o("div",{class:"layout-mask animate-fadein"},null,-1))],2),f(v,{position:"top-center",group:"tc"})],64)}}});export{vt as _,j as a,V as s};
