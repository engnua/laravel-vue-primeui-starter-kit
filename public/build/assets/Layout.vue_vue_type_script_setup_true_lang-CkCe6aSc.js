import{a as u,o as r,b as c,k as l,B as C,p as W,I as D,a9 as k,aa as m,U as P,y as B,s as v,f,w as h,W as _,n as K,ab as w,ac as H,O as U,ad as y,N as M,ae as A,j as g,d as L,t as $,r as j,z as T,c as q,e as x,af as Z,F as G,u as J,P as Q}from"./app-BHFLiKzk.js";import{a as X,s as Y}from"./AppLayout.vue_vue_type_script_setup_true_lang-CplRfLLN.js";import{a as tt,R as V,e as N}from"./AppearanceSelector.vue_vue_type_script_setup_true_lang-2jSUHK3m.js";var I={name:"ChevronLeftIcon",extends:tt};function et(t,e,a,n,i,s){return r(),u("svg",l({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[c("path",{d:"M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",fill:"currentColor"},null,-1)]),16)}I.render=et;var at={root:function(e){var a=e.instance,n=e.props;return["p-tab",{"p-tab-active":a.active,"p-disabled":n.disabled}]}},nt=C.extend({name:"tab",classes:at}),st={name:"BaseTab",extends:N,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:nt,provide:function(){return{$pcTab:this,$parentInstance:this}}},O={name:"Tab",extends:st,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break}},onArrowRightKey:function(e){var a=this.findNextTab(e.currentTarget);a?this.changeFocusedTab(e,a):this.onHomeKey(e),e.preventDefault()},onArrowLeftKey:function(e){var a=this.findPrevTab(e.currentTarget);a?this.changeFocusedTab(e,a):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var a=this.findFirstTab();this.changeFocusedTab(e,a),e.preventDefault()},onEndKey:function(e){var a=this.findLastTab();this.changeFocusedTab(e,a),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.findLastTab()),e.preventDefault()},onPageUpKey:function(e){this.scrollInView(this.findFirstTab()),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findNextTab:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=a?e:e.nextElementSibling;return n?m(n,"data-p-disabled")||m(n,"data-pc-section")==="inkbar"?this.findNextTab(n):k(n,'[data-pc-name="tab"]'):null},findPrevTab:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=a?e:e.previousElementSibling;return n?m(n,"data-p-disabled")||m(n,"data-pc-section")==="inkbar"?this.findPrevTab(n):k(n,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.content.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.content.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(e,a){D(a),this.scrollInView(a)},scrollInView:function(e){var a;e==null||(a=e.scrollIntoView)===null||a===void 0||a.call(e,{block:"nearest"})}},computed:{active:function(){var e;return W((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tab_").concat(this.value)},ariaControls:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tabpanel_").concat(this.value)},attrs:function(){return l(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}}},directives:{ripple:V}};function it(t,e,a,n,i,s){var o=P("ripple");return t.asChild?v(t.$slots,"default",{key:1,class:K(t.cx("root")),active:s.active,a11yAttrs:s.a11yAttrs,onClick:s.onClick}):B((r(),f(_(t.as),l({key:0,class:t.cx("root"),onClick:s.onClick},s.attrs),{default:h(function(){return[v(t.$slots,"default")]}),_:3},16,["class","onClick"])),[[o]])}O.render=it;var rt={root:"p-tablist",content:function(e){var a=e.instance;return["p-tablist-content",{"p-tablist-viewport":a.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},ot=C.extend({name:"tablist",classes:rt}),lt={name:"BaseTabList",extends:N,props:{},style:ot,provide:function(){return{$pcTabList:this,$parentInstance:this}}},z={name:"TabList",extends:lt,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(e){e?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var e=this;setTimeout(function(){e.updateInkBar()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(e){this.showNavigators&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,a=this.getVisibleButtonWidths(),n=w(e)-a,i=Math.abs(e.scrollLeft),s=n*.8,o=i-s,b=Math.max(o,0);e.scrollLeft=A(e)?-1*b:b},onNextButtonClick:function(){var e=this.$refs.content,a=this.getVisibleButtonWidths(),n=w(e)-a,i=Math.abs(e.scrollLeft),s=n*.8,o=i+s,b=e.scrollWidth-n,p=Math.min(o,b);e.scrollLeft=A(e)?-1*p:p},bindResizeObserver:function(){var e=this;this.resizeObserver=new ResizeObserver(function(){return e.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var e;(e=this.resizeObserver)===null||e===void 0||e.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var e=this.$refs,a=e.content,n=e.inkbar,i=e.tabs,s=k(a,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(n.style.height=U(s)+"px",n.style.top=y(s).top-y(i).top+"px"):(n.style.width=M(s)+"px",n.style.left=y(s).left-y(i).left+"px")},updateButtonState:function(){var e=this.$refs,a=e.list,n=e.content,i=n.scrollTop,s=n.scrollWidth,o=n.scrollHeight,b=n.offsetWidth,p=n.offsetHeight,d=Math.abs(n.scrollLeft),S=[w(n),H(n)],F=S[0],R=S[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=i!==0,this.isNextButtonEnabled=a.offsetHeight>=p&&parseInt(i)!==o-R):(this.isPrevButtonEnabled=d!==0,this.isNextButtonEnabled=a.offsetWidth>=b&&parseInt(d)!==s-F)},getVisibleButtonWidths:function(){var e=this.$refs,a=e.prevButton,n=e.nextButton,i=0;return this.showNavigators&&(i=((a==null?void 0:a.offsetWidth)||0)+((n==null?void 0:n.offsetWidth)||0)),i}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0}},components:{ChevronLeftIcon:I,ChevronRightIcon:X},directives:{ripple:V}},ct=["aria-label","tabindex"],ut=["aria-orientation"],dt=["aria-label","tabindex"];function bt(t,e,a,n,i,s){var o=P("ripple");return r(),u("div",l({ref:"list",class:t.cx("root")},t.ptmi("root")),[s.showNavigators&&i.isPrevButtonEnabled?B((r(),u("button",l({key:0,ref:"prevButton",class:t.cx("prevButton"),"aria-label":s.prevButtonAriaLabel,tabindex:s.$pcTabs.tabindex,onClick:e[0]||(e[0]=function(){return s.onPrevButtonClick&&s.onPrevButtonClick.apply(s,arguments)})},t.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(r(),f(_(s.templates.previcon||"ChevronLeftIcon"),l({"aria-hidden":"true"},t.ptm("prevIcon")),null,16))],16,ct)),[[o]]):g("",!0),c("div",l({ref:"content",class:t.cx("content"),onScroll:e[1]||(e[1]=function(){return s.onScroll&&s.onScroll.apply(s,arguments)})},t.ptm("content")),[c("div",l({ref:"tabs",class:t.cx("tabList"),role:"tablist","aria-orientation":s.$pcTabs.orientation||"horizontal"},t.ptm("tabList")),[v(t.$slots,"default"),c("span",l({ref:"inkbar",class:t.cx("activeBar"),role:"presentation","aria-hidden":"true"},t.ptm("activeBar")),null,16)],16,ut)],16),s.showNavigators&&i.isNextButtonEnabled?B((r(),u("button",l({key:1,ref:"nextButton",class:t.cx("nextButton"),"aria-label":s.nextButtonAriaLabel,tabindex:s.$pcTabs.tabindex,onClick:e[2]||(e[2]=function(){return s.onNextButtonClick&&s.onNextButtonClick.apply(s,arguments)})},t.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(r(),f(_(s.templates.nexticon||"ChevronRightIcon"),l({"aria-hidden":"true"},t.ptm("nextIcon")),null,16))],16,dt)),[[o]]):g("",!0)],16)}z.render=bt;var pt=({dt:t})=>`
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    display: flex;
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: ${t("tabs.tablist.background")};
    border-style: solid;
    border-color: ${t("tabs.tablist.border.color")};
    border-width: ${t("tabs.tablist.border.width")};
}

.p-tablist-content {
    flex-grow: 1;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute !important;
    flex-shrink: 0;
    inset-block-start: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${t("tabs.nav.button.background")};
    color: ${t("tabs.nav.button.color")};
    width: ${t("tabs.nav.button.width")};
    transition: color ${t("tabs.transition.duration")}, outline-color ${t("tabs.transition.duration")}, box-shadow ${t("tabs.transition.duration")};
    box-shadow: ${t("tabs.nav.button.shadow")};
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: ${t("tabs.nav.button.focus.ring.shadow")};
    outline: ${t("tabs.nav.button.focus.ring.width")} ${t("tabs.nav.button.focus.ring.style")} ${t("tabs.nav.button.focus.ring.color")};
    outline-offset: ${t("tabs.nav.button.focus.ring.offset")};
}

.p-tablist-nav-button:hover {
    color: ${t("tabs.nav.button.hover.color")};
}

.p-tablist-prev-button {
    inset-inline-start: 0;
}

.p-tablist-next-button {
    inset-inline-end: 0;
}

.p-tablist-prev-button:dir(rtl),
.p-tablist-next-button:dir(rtl) {
    transform: rotate(180deg);
}


.p-tab {
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-style: solid;
    white-space: nowrap;
    background: ${t("tabs.tab.background")};
    border-width: ${t("tabs.tab.border.width")};
    border-color: ${t("tabs.tab.border.color")};
    color: ${t("tabs.tab.color")};
    padding: ${t("tabs.tab.padding")};
    font-weight: ${t("tabs.tab.font.weight")};
    transition: background ${t("tabs.transition.duration")}, border-color ${t("tabs.transition.duration")}, color ${t("tabs.transition.duration")}, outline-color ${t("tabs.transition.duration")}, box-shadow ${t("tabs.transition.duration")};
    margin: ${t("tabs.tab.margin")};
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: ${t("tabs.tab.focus.ring.shadow")};
    outline: ${t("tabs.tab.focus.ring.width")} ${t("tabs.tab.focus.ring.style")} ${t("tabs.tab.focus.ring.color")};
    outline-offset: ${t("tabs.tab.focus.ring.offset")};
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: ${t("tabs.tab.hover.background")};
    border-color: ${t("tabs.tab.hover.border.color")};
    color: ${t("tabs.tab.hover.color")};
}

.p-tab-active {
    background: ${t("tabs.tab.active.background")};
    border-color: ${t("tabs.tab.active.border.color")};
    color: ${t("tabs.tab.active.color")};
}

.p-tabpanels {
    background: ${t("tabs.tabpanel.background")};
    color: ${t("tabs.tabpanel.color")};
    padding: ${t("tabs.tabpanel.padding")};
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: ${t("tabs.tabpanel.focus.ring.shadow")};
    outline: ${t("tabs.tabpanel.focus.ring.width")} ${t("tabs.tabpanel.focus.ring.style")} ${t("tabs.tabpanel.focus.ring.color")};
    outline-offset: ${t("tabs.tabpanel.focus.ring.offset")};
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    inset-block-end: ${t("tabs.active.bar.bottom")};
    height: ${t("tabs.active.bar.height")};
    background: ${t("tabs.active.bar.background")};
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`,ht={root:function(e){var a=e.props;return["p-tabs p-component",{"p-tabs-scrollable":a.scrollable}]}},ft=C.extend({name:"tabs",style:pt,classes:ht}),vt={name:"BaseTabs",extends:N,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:ft,provide:function(){return{$pcTabs:this,$parentInstance:this}}},E={name:"Tabs",extends:vt,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e}},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isVertical:function(){return this.orientation==="vertical"}}};function gt(t,e,a,n,i,s){return r(),u("div",l({class:t.cx("root")},t.ptmi("root")),[v(t.$slots,"default")],16)}E.render=gt;const $t={class:"mb-0.5 text-base font-medium"},mt={key:0,class:"text-sm text-muted-foreground"},St=L({__name:"HeadingSmall",props:{title:{},description:{}},setup(t){return(e,a)=>(r(),u("header",null,[c("h3",$t,$(e.title),1),e.description?(r(),u("p",mt,$(e.description),1)):g("",!0)]))}}),yt={class:"mb-8 space-y-0.5"},wt={class:"text-xl font-semibold tracking-tight"},Tt={key:0,class:"text-sm text-muted-foreground"},xt=L({__name:"Heading",props:{title:{},description:{}},setup(t){return(e,a)=>(r(),u("div",yt,[c("h2",wt,$(e.title),1),e.description?(r(),u("p",Tt,$(e.description),1)):g("",!0)]))}}),kt={class:"px-4 py-6"},Bt={class:"flex-1 md:max-w-2xl p-10"},_t={class:"max-w-xl space-y-12"},At=L({__name:"Layout",setup(t){const e=j([{title:"Profile",route:route("profile.edit"),icon:T.USER},{title:"Password",route:route("password.edit"),icon:T.LOCK},{title:"Appearance",route:route("appearance"),icon:T.PALETTE}]),a=q(()=>window.location.href);return(n,i)=>{const s=O,o=z,b=E,p=Y;return r(),f(p,null,{content:h(()=>[c("div",kt,[x(xt,{title:"Settings",description:"Manage your profile and account settings"}),x(b,{value:a.value,scrollable:""},{default:h(()=>[x(o,null,{default:h(()=>[(r(!0),u(G,null,Z(e.value,d=>(r(),f(s,{key:d.title,value:d.route},{default:h(()=>[d.route?(r(),f(J(Q),{key:0,href:d.route,custom:""},{default:h(()=>[c("span",{class:K([d.icon,"mr-2"])},null,2),c("span",null,$(d.title),1)]),_:2},1032,["href"])):g("",!0)]),_:2},1032,["value"]))),128))]),_:1})]),_:1},8,["value"]),c("div",Bt,[c("section",_t,[v(n.$slots,"default")])])])]),_:3})}}});export{At as _,St as a};
