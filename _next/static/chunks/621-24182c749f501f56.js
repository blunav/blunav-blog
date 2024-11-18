(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[621],{8951:function(e,t){"use strict";var n=Symbol.for("react.element"),r=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref")),o=(Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),a=Object.assign,i={};function l(e,t,n){this.props=e,this.context=t,this.refs=i,this.updater=n||o}function u(){}function s(e,t,n){this.props=e,this.context=t,this.refs=i,this.updater=n||o}l.prototype.isReactComponent={},l.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},l.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},u.prototype=l.prototype;var c=s.prototype=new u;c.constructor=s,a(c,l.prototype),c.isPureReactComponent=!0;var d=Object.prototype.hasOwnProperty,f={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,r){var o,a={},i=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)d.call(t,o)&&!f.hasOwnProperty(o)&&(a[o]=t[o]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2];a.children=s}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===a[o]&&(a[o]=u[o]);return{$$typeof:n,type:e,key:i,ref:l,props:a,_owner:null}},t.forwardRef=function(e){return{$$typeof:r,render:e}}},8872:function(e,t,n){"use strict";e.exports=n(8951)},1612:function(e){e.exports={style:{fontFamily:"'__Inter_d65c78', '__Inter_Fallback_d65c78', Inter, Roboto, Helvetica Neue, Arial Nova, Nimbus Sans, Arial, sans-serif",fontStyle:"normal"},className:"__className_d65c78",variable:"__variable_d65c78"}},888:function(e,t,n){"use strict";n.d(t,{VY:function(){return ei},h4:function(){return eo},ck:function(){return er},fC:function(){return en},xz:function(){return ea}});var r=n(9585),o=n(9933),a=n(3864),i=n(4492),l=n(4495),u=n(7178),s=n(8378),c=n(1523),d=n(5622),f=n(7321),p=n(7573),v="Collapsible",[m,g]=(0,o.b)(v),[h,w]=m(v),b=r.forwardRef((e,t)=>{let{__scopeCollapsible:n,open:o,defaultOpen:a,disabled:i,onOpenChange:l,...c}=e,[d=!1,v]=(0,u.T)({prop:o,defaultProp:a,onChange:l});return(0,p.jsx)(h,{scope:n,disabled:i,contentId:(0,f.M)(),open:d,onOpenToggle:r.useCallback(()=>v(e=>!e),[v]),children:(0,p.jsx)(s.WV.div,{"data-state":M(d),"data-disabled":i?"":void 0,...c,ref:t})})});b.displayName=v;var y="CollapsibleTrigger",x=r.forwardRef((e,t)=>{let{__scopeCollapsible:n,...r}=e,o=w(y,n);return(0,p.jsx)(s.WV.button,{type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":M(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled,...r,ref:t,onClick:(0,l.M)(e.onClick,o.onOpenToggle)})});x.displayName=y;var R="CollapsibleContent",j=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,o=w(R,e.__scopeCollapsible);return(0,p.jsx)(d.z,{present:n||o.open,children:e=>{let{present:n}=e;return(0,p.jsx)(C,{...r,ref:t,present:n})}})});j.displayName=R;var C=r.forwardRef((e,t)=>{let{__scopeCollapsible:n,present:o,children:a,...l}=e,u=w(R,n),[d,f]=r.useState(o),v=r.useRef(null),m=(0,i.e)(t,v),g=r.useRef(0),h=g.current,b=r.useRef(0),y=b.current,x=u.open||d,j=r.useRef(x),C=r.useRef();return r.useEffect(()=>{let e=requestAnimationFrame(()=>j.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,c.b)(()=>{let e=v.current;if(e){C.current=C.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();g.current=t.height,b.current=t.width,j.current||(e.style.transitionDuration=C.current.transitionDuration,e.style.animationName=C.current.animationName),f(o)}},[u.open,o]),(0,p.jsx)(s.WV.div,{"data-state":M(u.open),"data-disabled":u.disabled?"":void 0,id:u.contentId,hidden:!x,...l,ref:m,style:{"--radix-collapsible-content-height":h?"".concat(h,"px"):void 0,"--radix-collapsible-content-width":y?"".concat(y,"px"):void 0,...e.style},children:x&&a})});function M(e){return e?"open":"closed"}var N=n(1004),E="Accordion",_=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[D,I,T]=(0,a.B)(E),[k,A]=(0,o.b)(E,[T,g]),P=g(),S=r.forwardRef((e,t)=>{let{type:n,...r}=e;return(0,p.jsx)(D.Provider,{scope:e.__scopeAccordion,children:"multiple"===n?(0,p.jsx)(z,{...r,ref:t}):(0,p.jsx)(L,{...r,ref:t})})});S.displayName=E;var[F,O]=k(E),[V,W]=k(E,{collapsible:!1}),L=r.forwardRef((e,t)=>{let{value:n,defaultValue:o,onValueChange:a=()=>{},collapsible:i=!1,...l}=e,[s,c]=(0,u.T)({prop:n,defaultProp:o,onChange:a});return(0,p.jsx)(F,{scope:e.__scopeAccordion,value:s?[s]:[],onItemOpen:c,onItemClose:r.useCallback(()=>i&&c(""),[i,c]),children:(0,p.jsx)(V,{scope:e.__scopeAccordion,collapsible:i,children:(0,p.jsx)(U,{...l,ref:t})})})}),z=r.forwardRef((e,t)=>{let{value:n,defaultValue:o,onValueChange:a=()=>{},...i}=e,[l=[],s]=(0,u.T)({prop:n,defaultProp:o,onChange:a}),c=r.useCallback(e=>s(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[...t,e]}),[s]),d=r.useCallback(e=>s(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.filter(t=>t!==e)}),[s]);return(0,p.jsx)(F,{scope:e.__scopeAccordion,value:l,onItemOpen:c,onItemClose:d,children:(0,p.jsx)(V,{scope:e.__scopeAccordion,collapsible:!0,children:(0,p.jsx)(U,{...i,ref:t})})})}),[K,H]=k(E),U=r.forwardRef((e,t)=>{let{__scopeAccordion:n,disabled:o,dir:a,orientation:u="vertical",...c}=e,d=r.useRef(null),f=(0,i.e)(d,t),v=I(n),m="ltr"===(0,N.gm)(a),g=(0,l.M)(e.onKeyDown,e=>{var t;if(!_.includes(e.key))return;let n=e.target,r=v().filter(e=>{var t;return!(null===(t=e.ref.current)||void 0===t?void 0:t.disabled)}),o=r.findIndex(e=>e.ref.current===n),a=r.length;if(-1===o)return;e.preventDefault();let i=o,l=a-1,s=()=>{(i=o+1)>l&&(i=0)},c=()=>{(i=o-1)<0&&(i=l)};switch(e.key){case"Home":i=0;break;case"End":i=l;break;case"ArrowRight":"horizontal"===u&&(m?s():c());break;case"ArrowDown":"vertical"===u&&s();break;case"ArrowLeft":"horizontal"===u&&(m?c():s());break;case"ArrowUp":"vertical"===u&&c()}null===(t=r[i%a].ref.current)||void 0===t||t.focus()});return(0,p.jsx)(K,{scope:n,disabled:o,direction:a,orientation:u,children:(0,p.jsx)(D.Slot,{scope:n,children:(0,p.jsx)(s.WV.div,{...c,"data-orientation":u,ref:f,onKeyDown:o?void 0:g})})})}),q="AccordionItem",[B,Y]=k(q),$=r.forwardRef((e,t)=>{let{__scopeAccordion:n,value:r,...o}=e,a=H(q,n),i=O(q,n),l=P(n),u=(0,f.M)(),s=r&&i.value.includes(r)||!1,c=a.disabled||e.disabled;return(0,p.jsx)(B,{scope:n,open:s,disabled:c,triggerId:u,children:(0,p.jsx)(b,{"data-orientation":a.orientation,"data-state":et(s),...l,...o,ref:t,disabled:c,open:s,onOpenChange:e=>{e?i.onItemOpen(r):i.onItemClose(r)}})})});$.displayName=q;var G="AccordionHeader",X=r.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,o=H(E,n),a=Y(G,n);return(0,p.jsx)(s.WV.h3,{"data-orientation":o.orientation,"data-state":et(a.open),"data-disabled":a.disabled?"":void 0,...r,ref:t})});X.displayName=G;var Z="AccordionTrigger",J=r.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,o=H(E,n),a=Y(Z,n),i=W(Z,n),l=P(n);return(0,p.jsx)(D.ItemSlot,{scope:n,children:(0,p.jsx)(x,{"aria-disabled":a.open&&!i.collapsible||void 0,"data-orientation":o.orientation,id:a.triggerId,...l,...r,ref:t})})});J.displayName=Z;var Q="AccordionContent",ee=r.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,o=H(E,n),a=Y(Q,n),i=P(n);return(0,p.jsx)(j,{role:"region","aria-labelledby":a.triggerId,"data-orientation":o.orientation,...i,...r,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});function et(e){return e?"open":"closed"}ee.displayName=Q;var en=S,er=$,eo=X,ea=J,ei=ee},7905:function(e,t,n){"use strict";n.d(t,{Dx:function(){return en},VY:function(){return et},aV:function(){return ee},dk:function(){return er},fC:function(){return Z},h_:function(){return Q},x8:function(){return eo},xz:function(){return J}});var r=n(9585),o=n(4495),a=n(4492),i=n(9933),l=n(7321),u=n(7178),s=n(7256),c=n(2142),d=n(153),f=n(5622),p=n(8378),v=n(307),m=n(4494),g=n(7130),h=n(8828),w=n(7573),b="Dialog",[y,x]=(0,i.b)(b),[R,j]=y(b),C=e=>{let{__scopeDialog:t,children:n,open:o,defaultOpen:a,onOpenChange:i,modal:s=!0}=e,c=r.useRef(null),d=r.useRef(null),[f=!1,p]=(0,u.T)({prop:o,defaultProp:a,onChange:i});return(0,w.jsx)(R,{scope:t,triggerRef:c,contentRef:d,contentId:(0,l.M)(),titleId:(0,l.M)(),descriptionId:(0,l.M)(),open:f,onOpenChange:p,onOpenToggle:r.useCallback(()=>p(e=>!e),[p]),modal:s,children:n})};C.displayName=b;var M="DialogTrigger",N=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,i=j(M,n),l=(0,a.e)(t,i.triggerRef);return(0,w.jsx)(p.WV.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":q(i.open),...r,ref:l,onClick:(0,o.M)(e.onClick,i.onOpenToggle)})});N.displayName=M;var E="DialogPortal",[_,D]=y(E,{forceMount:void 0}),I=e=>{let{__scopeDialog:t,forceMount:n,children:o,container:a}=e,i=j(E,t);return(0,w.jsx)(_,{scope:t,forceMount:n,children:r.Children.map(o,e=>(0,w.jsx)(f.z,{present:n||i.open,children:(0,w.jsx)(d.h,{asChild:!0,container:a,children:e})}))})};I.displayName=E;var T="DialogOverlay",k=r.forwardRef((e,t)=>{let n=D(T,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=j(T,e.__scopeDialog);return a.modal?(0,w.jsx)(f.z,{present:r||a.open,children:(0,w.jsx)(A,{...o,ref:t})}):null});k.displayName=T;var A=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=j(T,n);return(0,w.jsx)(m.Z,{as:h.g7,allowPinchZoom:!0,shards:[o.contentRef],children:(0,w.jsx)(p.WV.div,{"data-state":q(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),P="DialogContent",S=r.forwardRef((e,t)=>{let n=D(P,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=j(P,e.__scopeDialog);return(0,w.jsx)(f.z,{present:r||a.open,children:a.modal?(0,w.jsx)(F,{...o,ref:t}):(0,w.jsx)(O,{...o,ref:t})})});S.displayName=P;var F=r.forwardRef((e,t)=>{let n=j(P,e.__scopeDialog),i=r.useRef(null),l=(0,a.e)(t,n.contentRef,i);return r.useEffect(()=>{let e=i.current;if(e)return(0,g.Ry)(e)},[]),(0,w.jsx)(V,{...e,ref:l,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,o.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,o.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,o.M)(e.onFocusOutside,e=>e.preventDefault())})}),O=r.forwardRef((e,t)=>{let n=j(P,e.__scopeDialog),o=r.useRef(!1),a=r.useRef(!1);return(0,w.jsx)(V,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r,i;null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,t),t.defaultPrevented||(o.current||null===(i=n.triggerRef.current)||void 0===i||i.focus(),t.preventDefault()),o.current=!1,a.current=!1},onInteractOutside:t=>{var r,i;null===(r=e.onInteractOutside)||void 0===r||r.call(e,t),t.defaultPrevented||(o.current=!0,"pointerdown"!==t.detail.originalEvent.type||(a.current=!0));let l=t.target;(null===(i=n.triggerRef.current)||void 0===i?void 0:i.contains(l))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&a.current&&t.preventDefault()}})}),V=r.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:o,onOpenAutoFocus:i,onCloseAutoFocus:l,...u}=e,d=j(P,n),f=r.useRef(null),p=(0,a.e)(t,f);return(0,v.EW)(),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(c.M,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:i,onUnmountAutoFocus:l,children:(0,w.jsx)(s.XB,{role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":q(d.open),...u,ref:p,onDismiss:()=>d.onOpenChange(!1)})}),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(G,{titleId:d.titleId}),(0,w.jsx)(X,{contentRef:f,descriptionId:d.descriptionId})]})]})}),W="DialogTitle",L=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=j(W,n);return(0,w.jsx)(p.WV.h2,{id:o.titleId,...r,ref:t})});L.displayName=W;var z="DialogDescription",K=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=j(z,n);return(0,w.jsx)(p.WV.p,{id:o.descriptionId,...r,ref:t})});K.displayName=z;var H="DialogClose",U=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,a=j(H,n);return(0,w.jsx)(p.WV.button,{type:"button",...r,ref:t,onClick:(0,o.M)(e.onClick,()=>a.onOpenChange(!1))})});function q(e){return e?"open":"closed"}U.displayName=H;var B="DialogTitleWarning",[Y,$]=(0,i.k)(B,{contentName:P,titleName:W,docsSlug:"dialog"}),G=e=>{let{titleId:t}=e,n=$(B),o="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return r.useEffect(()=>{t&&!document.getElementById(t)&&console.error(o)},[o,t]),null},X=e=>{let{contentRef:t,descriptionId:n}=e,o=$("DialogDescriptionWarning"),a="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(o.contentName,"}.");return r.useEffect(()=>{var e;let r=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&r&&!document.getElementById(n)&&console.warn(a)},[a,t,n]),null},Z=C,J=N,Q=I,ee=k,et=S,en=L,er=K,eo=U},1001:function(e,t,n){"use strict";n.d(t,{f:function(){return l}});var r=n(9585),o=n(8378),a=n(7573),i=r.forwardRef((e,t)=>(0,a.jsx)(o.WV.label,{...e,ref:t,onMouseDown:t=>{var n;t.target.closest("button, input, select, textarea")||(null===(n=e.onMouseDown)||void 0===n||n.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));i.displayName="Label";var l=i},4915:function(e,t,n){"use strict";n.d(t,{Content:function(){return eb},Indicator:function(){return ew},Item:function(){return em},Link:function(){return eh},List:function(){return ev},Root:function(){return ep},Trigger:function(){return eg},Viewport:function(){return ey}});var r=n(9585),o=n(3458),a=n(9933),i=n(4495),l=n(8378),u=n(7178),s=n(4492),c=n(1004),d=n(5622),f=n(7321),p=n(3864),v=n(7256),m=n(1403),g=n(1523),h=n(523),w=n(3336),b=n(7573),y="NavigationMenu",[x,R,j]=(0,p.B)(y),[C,M,N]=(0,p.B)(y),[E,_]=(0,a.b)(y,[j,N]),[D,I]=E(y),[T,k]=E(y),A=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:o,onValueChange:a,defaultValue:i,delayDuration:d=200,skipDelayDuration:f=300,orientation:p="horizontal",dir:v,...m}=e,[g,h]=r.useState(null),w=(0,s.e)(t,e=>h(e)),y=(0,c.gm)(v),x=r.useRef(0),R=r.useRef(0),j=r.useRef(0),[C,M]=r.useState(!0),[N="",E]=(0,u.T)({prop:o,onChange:e=>{let t=f>0;""!==e?(window.clearTimeout(j.current),t&&M(!1)):(window.clearTimeout(j.current),j.current=window.setTimeout(()=>M(!0),f)),null==a||a(e)},defaultProp:i}),_=r.useCallback(()=>{window.clearTimeout(R.current),R.current=window.setTimeout(()=>E(""),150)},[E]),D=r.useCallback(e=>{window.clearTimeout(R.current),E(e)},[E]),I=r.useCallback(e=>{N===e?window.clearTimeout(R.current):x.current=window.setTimeout(()=>{window.clearTimeout(R.current),E(e)},d)},[N,E,d]);return r.useEffect(()=>()=>{window.clearTimeout(x.current),window.clearTimeout(R.current),window.clearTimeout(j.current)},[]),(0,b.jsx)(S,{scope:n,isRootMenu:!0,value:N,dir:y,orientation:p,rootNavigationMenu:g,onTriggerEnter:e=>{window.clearTimeout(x.current),C?I(e):D(e)},onTriggerLeave:()=>{window.clearTimeout(x.current),_()},onContentEnter:()=>window.clearTimeout(R.current),onContentLeave:_,onItemSelect:e=>{E(t=>t===e?"":e)},onItemDismiss:()=>E(""),children:(0,b.jsx)(l.WV.nav,{"aria-label":"Main","data-orientation":p,dir:y,...m,ref:w})})});A.displayName=y;var P="NavigationMenuSub";r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:r,onValueChange:o,defaultValue:a,orientation:i="horizontal",...s}=e,c=I(P,n),[d="",f]=(0,u.T)({prop:r,onChange:o,defaultProp:a});return(0,b.jsx)(S,{scope:n,isRootMenu:!1,value:d,dir:c.dir,orientation:i,rootNavigationMenu:c.rootNavigationMenu,onTriggerEnter:e=>f(e),onItemSelect:e=>f(e),onItemDismiss:()=>f(""),children:(0,b.jsx)(l.WV.div,{"data-orientation":i,...s,ref:t})})}).displayName=P;var S=e=>{let{scope:t,isRootMenu:n,rootNavigationMenu:o,dir:a,orientation:i,children:l,value:u,onItemSelect:s,onItemDismiss:c,onTriggerEnter:d,onTriggerLeave:p,onContentEnter:v,onContentLeave:g}=e,[w,y]=r.useState(null),[R,j]=r.useState(new Map),[C,M]=r.useState(null);return(0,b.jsx)(D,{scope:t,isRootMenu:n,rootNavigationMenu:o,value:u,previousValue:(0,m.D)(u),baseId:(0,f.M)(),dir:a,orientation:i,viewport:w,onViewportChange:y,indicatorTrack:C,onIndicatorTrackChange:M,onTriggerEnter:(0,h.W)(d),onTriggerLeave:(0,h.W)(p),onContentEnter:(0,h.W)(v),onContentLeave:(0,h.W)(g),onItemSelect:(0,h.W)(s),onItemDismiss:(0,h.W)(c),onViewportContentChange:r.useCallback((e,t)=>{j(n=>(n.set(e,t),new Map(n)))},[]),onViewportContentRemove:r.useCallback(e=>{j(t=>t.has(e)?(t.delete(e),new Map(t)):t)},[]),children:(0,b.jsx)(x.Provider,{scope:t,children:(0,b.jsx)(T,{scope:t,items:R,children:l})})})},F="NavigationMenuList",O=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,o=I(F,n),a=(0,b.jsx)(l.WV.ul,{"data-orientation":o.orientation,...r,ref:t});return(0,b.jsx)(l.WV.div,{style:{position:"relative"},ref:o.onIndicatorTrackChange,children:(0,b.jsx)(x.Slot,{scope:n,children:o.isRootMenu?(0,b.jsx)(er,{asChild:!0,children:a}):a})})});O.displayName=F;var V="NavigationMenuItem",[W,L]=E(V),z=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:o,...a}=e,i=(0,f.M)(),u=r.useRef(null),s=r.useRef(null),c=r.useRef(null),d=r.useRef(()=>{}),p=r.useRef(!1),v=r.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"start";if(u.current){d.current();let t=ei(u.current);t.length&&el("start"===e?t:t.reverse())}},[]),m=r.useCallback(()=>{if(u.current){let e=ei(u.current);e.length&&(d.current=(e.forEach(e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}),()=>{e.forEach(e=>{let t=e.dataset.tabindex;e.setAttribute("tabindex",t)})}))}},[]);return(0,b.jsx)(W,{scope:n,value:o||i||"LEGACY_REACT_AUTO_VALUE",triggerRef:s,contentRef:u,focusProxyRef:c,wasEscapeCloseRef:p,onEntryKeyDown:v,onFocusProxyEnter:v,onRootContentClose:m,onContentFocusOutside:m,children:(0,b.jsx)(l.WV.li,{...a,ref:t})})});z.displayName=V;var K="NavigationMenuTrigger",H=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,disabled:o,...a}=e,u=I(K,e.__scopeNavigationMenu),c=L(K,e.__scopeNavigationMenu),d=r.useRef(null),f=(0,s.e)(d,c.triggerRef,t),p=ec(u.baseId,c.value),v=ed(u.baseId,c.value),m=r.useRef(!1),g=r.useRef(!1),h=c.value===u.value;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(x.ItemSlot,{scope:n,value:c.value,children:(0,b.jsx)(ea,{asChild:!0,children:(0,b.jsx)(l.WV.button,{id:p,disabled:o,"data-disabled":o?"":void 0,"data-state":es(h),"aria-expanded":h,"aria-controls":v,...a,ref:f,onPointerEnter:(0,i.M)(e.onPointerEnter,()=>{g.current=!1,c.wasEscapeCloseRef.current=!1}),onPointerMove:(0,i.M)(e.onPointerMove,ef(()=>{o||g.current||c.wasEscapeCloseRef.current||m.current||(u.onTriggerEnter(c.value),m.current=!0)})),onPointerLeave:(0,i.M)(e.onPointerLeave,ef(()=>{o||(u.onTriggerLeave(),m.current=!1)})),onClick:(0,i.M)(e.onClick,()=>{u.onItemSelect(c.value),g.current=h}),onKeyDown:(0,i.M)(e.onKeyDown,e=>{let t={horizontal:"ArrowDown",vertical:"rtl"===u.dir?"ArrowLeft":"ArrowRight"}[u.orientation];h&&e.key===t&&(c.onEntryKeyDown(),e.preventDefault())})})})}),h&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(w.f,{"aria-hidden":!0,tabIndex:0,ref:c.focusProxyRef,onFocus:e=>{let t=c.contentRef.current,n=e.relatedTarget,r=n===d.current,o=null==t?void 0:t.contains(n);(r||!o)&&c.onFocusProxyEnter(r?"start":"end")}}),u.viewport&&(0,b.jsx)("span",{"aria-owns":v})]})]})});H.displayName=K;var U="navigationMenu.linkSelect",q=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,active:r,onSelect:o,...a}=e;return(0,b.jsx)(ea,{asChild:!0,children:(0,b.jsx)(l.WV.a,{"data-active":r?"":void 0,"aria-current":r?"page":void 0,...a,ref:t,onClick:(0,i.M)(e.onClick,e=>{let t=e.target,n=new CustomEvent(U,{bubbles:!0,cancelable:!0});if(t.addEventListener(U,e=>null==o?void 0:o(e),{once:!0}),(0,l.jH)(t,n),!n.defaultPrevented&&!e.metaKey){let e=new CustomEvent(J,{bubbles:!0,cancelable:!0});(0,l.jH)(t,e)}},{checkForDefaultPrevented:!1})})})});q.displayName="NavigationMenuLink";var B="NavigationMenuIndicator",Y=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,a=I(B,e.__scopeNavigationMenu),i=!!a.value;return a.indicatorTrack?o.createPortal((0,b.jsx)(d.z,{present:n||i,children:(0,b.jsx)($,{...r,ref:t})}),a.indicatorTrack):null});Y.displayName=B;var $=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...o}=e,a=I(B,n),i=R(n),[u,s]=r.useState(null),[c,d]=r.useState(null),f="horizontal"===a.orientation,p=!!a.value;r.useEffect(()=>{var e;let t=null===(e=i().find(e=>e.value===a.value))||void 0===e?void 0:e.ref.current;t&&s(t)},[i,a.value]);let v=()=>{u&&d({size:f?u.offsetWidth:u.offsetHeight,offset:f?u.offsetLeft:u.offsetTop})};return eu(u,v),eu(a.indicatorTrack,v),c?(0,b.jsx)(l.WV.div,{"aria-hidden":!0,"data-state":p?"visible":"hidden","data-orientation":a.orientation,...o,ref:t,style:{position:"absolute",...f?{left:0,width:c.size+"px",transform:"translateX(".concat(c.offset,"px)")}:{top:0,height:c.size+"px",transform:"translateY(".concat(c.offset,"px)")},...o.style}}):null}),G="NavigationMenuContent",X=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,o=I(G,e.__scopeNavigationMenu),a=L(G,e.__scopeNavigationMenu),l=(0,s.e)(a.contentRef,t),u=a.value===o.value,c={value:a.value,triggerRef:a.triggerRef,focusProxyRef:a.focusProxyRef,wasEscapeCloseRef:a.wasEscapeCloseRef,onContentFocusOutside:a.onContentFocusOutside,onRootContentClose:a.onRootContentClose,...r};return o.viewport?(0,b.jsx)(Z,{forceMount:n,...c,ref:l}):(0,b.jsx)(d.z,{present:n||u,children:(0,b.jsx)(Q,{"data-state":es(u),...c,ref:l,onPointerEnter:(0,i.M)(e.onPointerEnter,o.onContentEnter),onPointerLeave:(0,i.M)(e.onPointerLeave,ef(o.onContentLeave)),style:{pointerEvents:!u&&o.isRootMenu?"none":void 0,...c.style}})})});X.displayName=G;var Z=r.forwardRef((e,t)=>{let{onViewportContentChange:n,onViewportContentRemove:r}=I(G,e.__scopeNavigationMenu);return(0,g.b)(()=>{n(e.value,{ref:t,...e})},[e,t,n]),(0,g.b)(()=>()=>r(e.value),[e.value,r]),null}),J="navigationMenu.rootContentDismiss",Q=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:o,triggerRef:a,focusProxyRef:l,wasEscapeCloseRef:u,onRootContentClose:c,onContentFocusOutside:d,...f}=e,p=I(G,n),m=r.useRef(null),g=(0,s.e)(m,t),h=ec(p.baseId,o),w=ed(p.baseId,o),y=R(n),x=r.useRef(null),{onItemDismiss:j}=p;r.useEffect(()=>{let e=m.current;if(p.isRootMenu&&e){let t=()=>{var t;j(),c(),e.contains(document.activeElement)&&(null===(t=a.current)||void 0===t||t.focus())};return e.addEventListener(J,t),()=>e.removeEventListener(J,t)}},[p.isRootMenu,e.value,a,j,c]);let C=r.useMemo(()=>{let e=y().map(e=>e.value);"rtl"===p.dir&&e.reverse();let t=e.indexOf(p.value),n=e.indexOf(p.previousValue),r=o===p.value,a=n===e.indexOf(o);if(!r&&!a)return x.current;let i=(()=>{if(t!==n){if(r&&-1!==n)return t>n?"from-end":"from-start";if(a&&-1!==t)return t>n?"to-start":"to-end"}return null})();return x.current=i,i},[p.previousValue,p.value,p.dir,y,o]);return(0,b.jsx)(er,{asChild:!0,children:(0,b.jsx)(v.XB,{id:w,"aria-labelledby":h,"data-motion":C,"data-orientation":p.orientation,...f,ref:g,disableOutsidePointerEvents:!1,onDismiss:()=>{var e;let t=new Event(J,{bubbles:!0,cancelable:!0});null===(e=m.current)||void 0===e||e.dispatchEvent(t)},onFocusOutside:(0,i.M)(e.onFocusOutside,e=>{var t;d();let n=e.target;(null===(t=p.rootNavigationMenu)||void 0===t?void 0:t.contains(n))&&e.preventDefault()}),onPointerDownOutside:(0,i.M)(e.onPointerDownOutside,e=>{var t;let n=e.target,r=y().some(e=>{var t;return null===(t=e.ref.current)||void 0===t?void 0:t.contains(n)}),o=p.isRootMenu&&(null===(t=p.viewport)||void 0===t?void 0:t.contains(n));(r||o||!p.isRootMenu)&&e.preventDefault()}),onKeyDown:(0,i.M)(e.onKeyDown,e=>{let t=e.altKey||e.ctrlKey||e.metaKey;if("Tab"===e.key&&!t){let t=ei(e.currentTarget),r=document.activeElement,o=t.findIndex(e=>e===r);if(el(e.shiftKey?t.slice(0,o).reverse():t.slice(o+1,t.length)))e.preventDefault();else{var n;null===(n=l.current)||void 0===n||n.focus()}}}),onEscapeKeyDown:(0,i.M)(e.onEscapeKeyDown,e=>{u.current=!0})})})}),ee="NavigationMenuViewport",et=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,o=!!I(ee,e.__scopeNavigationMenu).value;return(0,b.jsx)(d.z,{present:n||o,children:(0,b.jsx)(en,{...r,ref:t})})});et.displayName=ee;var en=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,children:o,...a}=e,u=I(ee,n),c=(0,s.e)(t,u.onViewportChange),f=k(G,e.__scopeNavigationMenu),[p,v]=r.useState(null),[m,g]=r.useState(null),h=p?(null==p?void 0:p.width)+"px":void 0,w=p?(null==p?void 0:p.height)+"px":void 0,y=!!u.value,x=y?u.value:u.previousValue;return eu(m,()=>{m&&v({width:m.offsetWidth,height:m.offsetHeight})}),(0,b.jsx)(l.WV.div,{"data-state":es(y),"data-orientation":u.orientation,...a,ref:c,style:{pointerEvents:!y&&u.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":h,"--radix-navigation-menu-viewport-height":w,...a.style},onPointerEnter:(0,i.M)(e.onPointerEnter,u.onContentEnter),onPointerLeave:(0,i.M)(e.onPointerLeave,ef(u.onContentLeave)),children:Array.from(f.items).map(e=>{let[t,{ref:n,forceMount:r,...o}]=e,a=x===t;return(0,b.jsx)(d.z,{present:r||a,children:(0,b.jsx)(Q,{...o,ref:(0,s.F)(n,e=>{a&&e&&g(e)})})},t)})})}),er=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,o=I("FocusGroup",n);return(0,b.jsx)(C.Provider,{scope:n,children:(0,b.jsx)(C.Slot,{scope:n,children:(0,b.jsx)(l.WV.div,{dir:o.dir,...r,ref:t})})})}),eo=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],ea=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,o=M(n),a=I("FocusGroupItem",n);return(0,b.jsx)(C.ItemSlot,{scope:n,children:(0,b.jsx)(l.WV.button,{...r,ref:t,onKeyDown:(0,i.M)(e.onKeyDown,e=>{if(["Home","End",...eo].includes(e.key)){let t=o().map(e=>e.ref.current);if(["rtl"===a.dir?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(e.key)&&t.reverse(),eo.includes(e.key)){let n=t.indexOf(e.currentTarget);t=t.slice(n+1)}setTimeout(()=>el(t)),e.preventDefault()}})})})});function ei(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function el(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}function eu(e,t){let n=(0,h.W)(t);(0,g.b)(()=>{let t=0;if(e){let r=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(n)});return r.observe(e),()=>{window.cancelAnimationFrame(t),r.unobserve(e)}}},[e,n])}function es(e){return e?"open":"closed"}function ec(e,t){return"".concat(e,"-trigger-").concat(t)}function ed(e,t){return"".concat(e,"-content-").concat(t)}function ef(e){return t=>"mouse"===t.pointerType?e(t):void 0}var ep=A,ev=O,em=z,eg=H,eh=q,ew=Y,eb=X,ey=et},1403:function(e,t,n){"use strict";n.d(t,{D:function(){return o}});var r=n(9585);function o(e){let t=r.useRef({value:e,previous:e});return r.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}},3336:function(e,t,n){"use strict";n.d(t,{T:function(){return i},f:function(){return l}});var r=n(9585),o=n(8378),a=n(7573),i=r.forwardRef((e,t)=>(0,a.jsx)(o.WV.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));i.displayName="VisuallyHidden";var l=i},2708:function(e,t,n){"use strict";n.d(t,{j:function(){return a}});let r=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,o=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(r&&(r+=" "),r+=t);return r},a=(e,t)=>n=>{var a;if((null==t?void 0:t.variants)==null)return o(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:i,defaultVariants:l}=t,u=Object.keys(i).map(e=>{let t=null==n?void 0:n[e],o=null==l?void 0:l[e];if(null===t)return null;let a=r(t)||r(o);return i[e][a]}),s=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{});return o(e,u,null==t?void 0:null===(a=t.compoundVariants)||void 0===a?void 0:a.reduce((e,t)=>{let{class:n,className:r,...o}=t;return Object.entries(o).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...l,...s}[t]):({...l,...s})[t]===n})?[...e,n,r]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)}}}]);