import{b as Y,d as W,e as X,f as J}from"./chunk-F2MSQYKY.js";import{A as ne,C,G as re,H as oe,b as V,c as G,d as U,e as Z,g as $,h as q,i as K,n as Q,o as ee,u as te,w as ae,z as ie}from"./chunk-OW7W6TXS.js";import{d as v}from"./chunk-PHPDIXGV.js";import{Ca as h,Kb as m,Ob as A,Rb as H,Ua as f,V as D,W as z,X as k,Xa as S,Xb as b,Ya as N,Z as w,_a as F,aa as r,ba as M,cb as p,db as O,eb as P,gb as T,la as L,nb as u,oa as B,pb as j,ra as g,ua as I,va as R,vb as o,wb as s,xb as l}from"./chunk-BB4PGFQO.js";var se=[{path:"",loadComponent:()=>import("./chunk-LNJOJVKH.js").then(i=>i.HomePage)},{path:"cart",loadComponent:()=>import("./chunk-2ZTMVDU4.js").then(i=>i.CartPage)},{path:"catalog",loadComponent:()=>import("./chunk-DLK27JBQ.js").then(i=>i.CatalogPage),children:[{path:"**",loadComponent:()=>import("./chunk-WIQCS7V3.js").then(i=>i.CategoryListPage)}]}];var fe="@",ue=(()=>{class i{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=r(L);loadingSchedulerFn=r(be,{optional:!0});_engine;constructor(e,t,n,d,c){this.doc=e,this.delegate=t,this.zone=n,this.animationType=d,this.moduleImpl=c}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-36CIWM4Y.js").then(n=>n),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(n=>{throw new D(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:d})=>{this._engine=n(this.animationType,this.doc);let c=new d(this.delegate,this._engine,this.zone);return this.delegate=c,c})}createRenderer(e,t){let n=this.delegate.createRenderer(e,t);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let d=new x(n);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(c=>{let he=c.createRenderer(e,t);d.use(he),this.scheduler??=this.injector.get(B,null,{optional:!0}),this.scheduler?.notify(11)}).catch(c=>{d.use(n)}),d}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){F()};static \u0275prov=z({token:i,factory:i.\u0275fac})}return i})(),x=class{delegate;replay=[];\u0275type=1;constructor(a){this.delegate=a}use(a){if(this.delegate=a,this.replay!==null){for(let e of this.replay)e(a);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(a,e){return this.delegate.createElement(a,e)}createComment(a){return this.delegate.createComment(a)}createText(a){return this.delegate.createText(a)}get destroyNode(){return this.delegate.destroyNode}appendChild(a,e){this.delegate.appendChild(a,e)}insertBefore(a,e,t,n){this.delegate.insertBefore(a,e,t,n)}removeChild(a,e,t){this.delegate.removeChild(a,e,t)}selectRootElement(a,e){return this.delegate.selectRootElement(a,e)}parentNode(a){return this.delegate.parentNode(a)}nextSibling(a){return this.delegate.nextSibling(a)}setAttribute(a,e,t,n){this.delegate.setAttribute(a,e,t,n)}removeAttribute(a,e,t){this.delegate.removeAttribute(a,e,t)}addClass(a,e){this.delegate.addClass(a,e)}removeClass(a,e){this.delegate.removeClass(a,e)}setStyle(a,e,t,n){this.delegate.setStyle(a,e,t,n)}removeStyle(a,e,t){this.delegate.removeStyle(a,e,t)}setProperty(a,e,t){this.shouldReplay(e)&&this.replay.push(n=>n.setProperty(a,e,t)),this.delegate.setProperty(a,e,t)}setValue(a,e){this.delegate.setValue(a,e)}listen(a,e,t,n){return this.shouldReplay(e)&&this.replay.push(d=>d.listen(a,e,t,n)),this.delegate.listen(a,e,t,n)}shouldReplay(a){return this.replay!==null&&a.startsWith(fe)}},be=new w("");function de(i="animations"){return R("NgAsyncAnimations"),M([{provide:S,useFactory:(a,e,t)=>new ue(a,e,t,i),deps:[v,U,g]},{provide:h,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var le={providers:[H({eventCoalescing:!0}),J(se),q($()),V(G()),de()]};var me="mat-badge-content",ve=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["ng-component"]],decls:0,vars:0,template:function(t,n){},styles:[".mat-badge{position:relative}.mat-badge.mat-badge{overflow:visible}.mat-badge-content{position:absolute;text-align:center;display:inline-block;transition:transform 200ms ease-in-out;transform:scale(0.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box;pointer-events:none;background-color:var(--mat-badge-background-color, var(--mat-sys-error));color:var(--mat-badge-text-color, var(--mat-sys-on-error));font-family:var(--mat-badge-text-font, var(--mat-sys-label-small-font));font-weight:var(--mat-badge-text-weight, var(--mat-sys-label-small-weight));border-radius:var(--mat-badge-container-shape, var(--mat-sys-corner-full))}.mat-badge-above .mat-badge-content{bottom:100%}.mat-badge-below .mat-badge-content{top:100%}.mat-badge-before .mat-badge-content{right:100%}[dir=rtl] .mat-badge-before .mat-badge-content{right:auto;left:100%}.mat-badge-after .mat-badge-content{left:100%}[dir=rtl] .mat-badge-after .mat-badge-content{left:auto;right:100%}@media(forced-colors: active){.mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-disabled .mat-badge-content{background-color:var(--mat-badge-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-error) 38%, transparent));color:var(--mat-badge-disabled-state-text-color, var(--mat-sys-on-error))}.mat-badge-hidden .mat-badge-content{display:none}.ng-animate-disabled .mat-badge-content,.mat-badge-content._mat-animation-noopable{transition:none}.mat-badge-content.mat-badge-active{transform:none}.mat-badge-small .mat-badge-content{width:var(--mat-badge-legacy-small-size-container-size, unset);height:var(--mat-badge-legacy-small-size-container-size, unset);min-width:var(--mat-badge-small-size-container-size, 6px);min-height:var(--mat-badge-small-size-container-size, 6px);line-height:var(--mat-badge-small-size-line-height, 6px);padding:var(--mat-badge-small-size-container-padding, 0);font-size:var(--mat-badge-small-size-text-size, 0);margin:var(--mat-badge-small-size-container-offset, -6px 0)}.mat-badge-small.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-small-size-container-overlap-offset, -6px)}.mat-badge-medium .mat-badge-content{width:var(--mat-badge-legacy-container-size, unset);height:var(--mat-badge-legacy-container-size, unset);min-width:var(--mat-badge-container-size, 16px);min-height:var(--mat-badge-container-size, 16px);line-height:var(--mat-badge-line-height, 16px);padding:var(--mat-badge-container-padding, 0 4px);font-size:var(--mat-badge-text-size, var(--mat-sys-label-small-size));margin:var(--mat-badge-container-offset, -12px 0)}.mat-badge-medium.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-container-overlap-offset, -12px)}.mat-badge-large .mat-badge-content{width:var(--mat-badge-legacy-large-size-container-size, unset);height:var(--mat-badge-legacy-large-size-container-size, unset);min-width:var(--mat-badge-large-size-container-size, 16px);min-height:var(--mat-badge-large-size-container-size, 16px);line-height:var(--mat-badge-large-size-line-height, 16px);padding:var(--mat-badge-large-size-container-padding, 0 4px);font-size:var(--mat-badge-large-size-text-size, var(--mat-sys-label-small-size));margin:var(--mat-badge-large-size-container-offset, -12px 0)}.mat-badge-large.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-large-size-container-overlap-offset, -12px)}"],encapsulation:2,changeDetection:0})}return i})(),ce=(()=>{class i{_ngZone=r(g);_elementRef=r(I);_ariaDescriber=r(te);_renderer=r(N);_animationMode=r(h,{optional:!0});_idGenerator=r(ne);get color(){return this._color}set color(e){this._setColor(e),this._color=e}_color="primary";overlap=!0;disabled;position="above after";get content(){return this._content}set content(e){this._updateRenderedContent(e)}_content;get description(){return this._description}set description(e){this._updateDescription(e)}_description;size="medium";hidden;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=r(ae);_document=r(v);constructor(){let e=r(Q);e.load(ve),e.load(ee)}isAbove(){return this.position.indexOf("below")===-1}isAfter(){return this.position.indexOf("before")===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let e=this._renderer.createElement("span"),t="mat-badge-active";return e.setAttribute("id",this._idGenerator.getId("mat-badge-content-")),e.setAttribute("aria-hidden","true"),e.classList.add(me),this._animationMode==="NoopAnimations"&&e.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(e),typeof requestAnimationFrame=="function"&&this._animationMode!=="NoopAnimations"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{e.classList.add(t)})}):e.classList.add(t),e}_updateRenderedContent(e){let t=`${e??""}`.trim();this._isInitialized&&t&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=t),this._content=t}_updateDescription(e){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!e||this._isHostInteractive())&&this._removeInlineDescription(),this._description=e,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,e):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(e){let t=this._elementRef.nativeElement.classList;t.remove(`mat-badge-${this._color}`),e&&t.add(`mat-badge-${e}`)}_clearExistingBadges(){let e=this._elementRef.nativeElement.querySelectorAll(`:scope > .${me}`);for(let t of Array.from(e))t!==this._badgeElement&&t.remove()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=P({type:i,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(t,n){t&2&&j("mat-badge-overlap",n.overlap)("mat-badge-above",n.isAbove())("mat-badge-below",!n.isAbove())("mat-badge-before",!n.isAfter())("mat-badge-after",n.isAfter())("mat-badge-small",n.size==="small")("mat-badge-medium",n.size==="medium")("mat-badge-large",n.size==="large")("mat-badge-hidden",n.hidden||!n.content)("mat-badge-disabled",n.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",b],disabled:[2,"matBadgeDisabled","disabled",b],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",b]},features:[T]})}return i})(),pe=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=O({type:i});static \u0275inj=k({imports:[ie,C,C]})}return i})();var ge=()=>({exact:!0}),y=class i{cart=r(K);static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["app-layout"]],decls:33,vars:5,consts:[[1,"flex","flex-col","min-h-[101vh]"],[1,""],[1,"md:container","px-4","md:px-0","flex","gap-9","items-center"],["routerLink","/"],["src","/logo.png","alt","",1,"h-[70px]"],["routerLink","/","routerLinkActive","active",1,"hidden","md:block",3,"routerLinkActiveOptions"],["routerLink","catalog","routerLinkActive","active",1,"hidden","md:block"],[1,"flex-1","hidden","md:block"],["routerLink","cart","routerLinkActive","active",1,"mt-3"],[3,"matBadge"],[1,"flex-1","block","md:hidden"],["for","mobile-menu",1,"relative","z-40","cursor-pointer","px-3","py-6","md:hidden"],["type","checkbox","id","mobile-menu",1,"peer","hidden"],[1,"relative","z-50","block","h-[1px]","w-7","bg-white","bg-transparent","content-['']","before:absolute","before:top-[-0.35rem]","before:z-50","before:block","before:h-full","before:w-full","before:bg-white","before:transition-all","before:duration-200","before:ease-out","before:content-['']","after:absolute","after:right-0","after:bottom-[-0.35rem]","after:block","after:h-full","after:w-full","after:bg-white","after:transition-all","after:duration-200","after:ease-out","after:content-['']","peer-checked:bg-transparent","before:peer-checked:top-0","before:peer-checked:w-full","before:peer-checked:rotate-45","before:peer-checked:transform","after:peer-checked:bottom-0","after:peer-checked:w-full","after:peer-checked:-rotate-45","after:peer-checked:transform"],[1,"fixed","inset-0","z-40","hidden","h-full","w-full","bg-black/50","backdrop-blur-sm","peer-checked:block"],[1,"fixed","top-0","right-0","z-40","h-full","w-full","translate-x-full","overflow-y-auto","overscroll-y-none","transition","duration-500","peer-checked:translate-x-0"],[1,"float-right","min-h-full","w-[85%]","bg-white","shadow-2xl"],[1,"bg-black","mb-4"],[1,"flex","flex-col","gap-9","px-6"],["routerLink","/","routerLinkActive","active",3,"routerLinkActiveOptions"],["routerLink","catalog","routerLinkActive","active"],[1,"flex-1"],[1,"md:container","px-4","md:px-0"],[1,"p-9","text-center"]],template:function(e,t){e&1&&(o(0,"div",0)(1,"header",1)(2,"div",2)(3,"a",3),l(4,"img",4),s(),o(5,"a",5),m(6,"About"),s(),o(7,"a",6),m(8,"Catalog"),s(),l(9,"span",7),o(10,"a",8)(11,"mat-icon",9),m(12,"shopping_cart"),s()(),l(13,"span",10),o(14,"label",11),l(15,"input",12)(16,"div",13),o(17,"div",14),m(18," \xA0 "),s(),o(19,"div",15)(20,"div",16)(21,"div",17),l(22,"img",4),s(),o(23,"menu",18)(24,"a",19),m(25,"About"),s(),o(26,"a",20),m(27,"Catalog"),s()()()()()()(),o(28,"main",21)(29,"div",22),l(30,"router-outlet"),s()(),o(31,"footer",23),m(32," \xA9 2025 Tecline.us All rights reserved! "),s()()),e&2&&(f(5),u("routerLinkActiveOptions",A(3,ge)),f(6),u("matBadge",t.cart.length()||null),f(13),u("routerLinkActiveOptions",A(4,ge)))},dependencies:[Y,W,X,oe,re,pe,ce],encapsulation:2})};var _=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["app-root"]],decls:1,vars:0,template:function(e,t){e&1&&l(0,"app-layout")},dependencies:[y],encapsulation:2})};Z(_,le).catch(i=>console.error(i));
