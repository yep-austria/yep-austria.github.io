var at=Object.defineProperty,ot=Object.defineProperties;var lt=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var G=(n,t,e)=>t in n?at(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,$=(n,t)=>{for(var e in t||(t={}))J.call(t,e)&&G(n,e,t[e]);if(V)for(var e of V(t))W.call(t,e)&&G(n,e,t[e]);return n},X=(n,t)=>ot(n,lt(t));var x=(n,t)=>{var e={};for(var s in n)J.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&V)for(var s of V(n))t.indexOf(s)<0&&W.call(n,s)&&(e[s]=n[s]);return e};import{S as ct,i as ut,s as ft,e as ht,c as dt,a as _t,d as k,b as D,f as S,t as pt,g as gt,h as mt,j as A,k as wt,l as v,m as H,n as yt,o as O,p as M,q as B,r as I,u as E,v as T,w as C,x as m,y as bt,z as vt,A as Et,B as K,C as Y}from"./chunks/vendor-6029d7dd.js";function F(n){let t,e,s;const r=[n[2]||{}];var a=n[0][1];function i(o){let l={$$slots:{default:[kt]},$$scope:{ctx:o}};for(let c=0;c<r.length;c+=1)l=K(l,r[c]);return{props:l}}return a&&(t=new a(i(n))),{c(){t&&A(t.$$.fragment),e=v()},l(o){t&&H(t.$$.fragment,o),e=v()},m(o,l){t&&O(t,o,l),S(o,e,l),s=!0},p(o,l){const c=l&4?M(r,[B(o[2]||{})]):{};if(l&521&&(c.$$scope={dirty:l,ctx:o}),a!==(a=o[0][1])){if(t){I();const u=t;E(u.$$.fragment,1,0,()=>{T(u,1)}),C()}a?(t=new a(i(o)),A(t.$$.fragment),m(t.$$.fragment,1),O(t,e.parentNode,e)):t=null}else a&&t.$set(c)},i(o){s||(t&&m(t.$$.fragment,o),s=!0)},o(o){t&&E(t.$$.fragment,o),s=!1},d(o){o&&k(e),t&&T(t,o)}}}function Q(n){let t,e,s;const r=[n[3]||{}];var a=n[0][2];function i(o){let l={};for(let c=0;c<r.length;c+=1)l=K(l,r[c]);return{props:l}}return a&&(t=new a(i())),{c(){t&&A(t.$$.fragment),e=v()},l(o){t&&H(t.$$.fragment,o),e=v()},m(o,l){t&&O(t,o,l),S(o,e,l),s=!0},p(o,l){const c=l&8?M(r,[B(o[3]||{})]):{};if(a!==(a=o[0][2])){if(t){I();const u=t;E(u.$$.fragment,1,0,()=>{T(u,1)}),C()}a?(t=new a(i()),A(t.$$.fragment),m(t.$$.fragment,1),O(t,e.parentNode,e)):t=null}else a&&t.$set(c)},i(o){s||(t&&m(t.$$.fragment,o),s=!0)},o(o){t&&E(t.$$.fragment,o),s=!1},d(o){o&&k(e),t&&T(t,o)}}}function kt(n){let t,e,s=n[0][2]&&Q(n);return{c(){s&&s.c(),t=v()},l(r){s&&s.l(r),t=v()},m(r,a){s&&s.m(r,a),S(r,t,a),e=!0},p(r,a){r[0][2]?s?(s.p(r,a),a&1&&m(s,1)):(s=Q(r),s.c(),m(s,1),s.m(t.parentNode,t)):s&&(I(),E(s,1,1,()=>{s=null}),C())},i(r){e||(m(s),e=!0)},o(r){E(s),e=!1},d(r){s&&s.d(r),r&&k(t)}}}function Rt(n){let t,e,s=n[0][1]&&F(n);return{c(){s&&s.c(),t=v()},l(r){s&&s.l(r),t=v()},m(r,a){s&&s.m(r,a),S(r,t,a),e=!0},p(r,a){r[0][1]?s?(s.p(r,a),a&1&&m(s,1)):(s=F(r),s.c(),m(s,1),s.m(t.parentNode,t)):s&&(I(),E(s,1,1,()=>{s=null}),C())},i(r){e||(m(s),e=!0)},o(r){E(s),e=!1},d(r){s&&s.d(r),r&&k(t)}}}function Z(n){let t,e=n[5]&&tt(n);return{c(){t=ht("div"),e&&e.c(),this.h()},l(s){t=dt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var r=_t(t);e&&e.l(r),r.forEach(k),this.h()},h(){D(t,"id","svelte-announcer"),D(t,"aria-live","assertive"),D(t,"aria-atomic","true"),D(t,"class","svelte-1j55zn5")},m(s,r){S(s,t,r),e&&e.m(t,null)},p(s,r){s[5]?e?e.p(s,r):(e=tt(s),e.c(),e.m(t,null)):e&&(e.d(1),e=null)},d(s){s&&k(t),e&&e.d()}}}function tt(n){let t;return{c(){t=pt(n[6])},l(e){t=gt(e,n[6])},m(e,s){S(e,t,s)},p(e,s){s&64&&mt(t,e[6])},d(e){e&&k(t)}}}function $t(n){let t,e,s,r;const a=[n[1]||{}];var i=n[0][0];function o(c){let u={$$slots:{default:[Rt]},$$scope:{ctx:c}};for(let h=0;h<a.length;h+=1)u=K(u,a[h]);return{props:u}}i&&(t=new i(o(n)));let l=n[4]&&Z(n);return{c(){t&&A(t.$$.fragment),e=wt(),l&&l.c(),s=v()},l(c){t&&H(t.$$.fragment,c),e=yt(c),l&&l.l(c),s=v()},m(c,u){t&&O(t,c,u),S(c,e,u),l&&l.m(c,u),S(c,s,u),r=!0},p(c,[u]){const h=u&2?M(a,[B(c[1]||{})]):{};if(u&525&&(h.$$scope={dirty:u,ctx:c}),i!==(i=c[0][0])){if(t){I();const f=t;E(f.$$.fragment,1,0,()=>{T(f,1)}),C()}i?(t=new i(o(c)),A(t.$$.fragment),m(t.$$.fragment,1),O(t,e.parentNode,e)):t=null}else i&&t.$set(h);c[4]?l?l.p(c,u):(l=Z(c),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null)},i(c){r||(t&&m(t.$$.fragment,c),r=!0)},o(c){t&&E(t.$$.fragment,c),r=!1},d(c){t&&T(t,c),c&&k(e),l&&l.d(c),c&&k(s)}}}function St(n,t,e){let{stores:s}=t,{page:r}=t,{components:a}=t,{props_0:i=null}=t,{props_1:o=null}=t,{props_2:l=null}=t;bt("__svelte__",s),vt(s.page.notify);let c=!1,u=!1,h=null;return Et(()=>{const f=s.page.subscribe(()=>{c&&(e(5,u=!0),e(6,h=document.title||"untitled page"))});return e(4,c=!0),f}),n.$$set=f=>{"stores"in f&&e(7,s=f.stores),"page"in f&&e(8,r=f.page),"components"in f&&e(0,a=f.components),"props_0"in f&&e(1,i=f.props_0),"props_1"in f&&e(2,o=f.props_1),"props_2"in f&&e(3,l=f.props_2)},n.$$.update=()=>{n.$$.dirty&384&&s.page.set(r)},[a,i,o,l,c,u,h,s,r]}class Lt extends ct{constructor(t){super();ut(this,t,St,$t,ft,{stores:7,page:8,components:0,props_0:1,props_1:2,props_2:3})}}const qt="modulepreload",et={},Ut="/_app/",q=function(t,e){return!e||e.length===0?t():Promise.all(e.map(s=>{if(s=`${Ut}${s}`,s in et)return;et[s]=!0;const r=s.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":qt,r||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),r)return new Promise((o,l)=>{i.addEventListener("load",o),i.addEventListener("error",l)})})).then(()=>t())},_=[()=>q(()=>import("./pages/__layout.svelte-4458c22f.js"),["pages/__layout.svelte-4458c22f.js","assets/pages/__layout.svelte-169346d4.css","chunks/vendor-6029d7dd.js"]),()=>q(()=>import("./error.svelte-d828974b.js"),["error.svelte-d828974b.js","chunks/vendor-6029d7dd.js"]),()=>q(()=>import("./pages/index.svelte-6e5aa81c.js"),["pages/index.svelte-6e5aa81c.js","assets/pages/index.svelte-a81f2a22.css","chunks/vendor-6029d7dd.js"]),()=>q(()=>import("./pages/impressum.svelte-efa9a3f1.js"),["pages/impressum.svelte-efa9a3f1.js","chunks/vendor-6029d7dd.js"]),()=>q(()=>import("./pages/privacy.svelte-b61e40ac.js"),["pages/privacy.svelte-b61e40ac.js","chunks/vendor-6029d7dd.js"]),()=>q(()=>import("./pages/reports.svelte-b7261e02.js"),["pages/reports.svelte-b7261e02.js","assets/pages/reports.svelte-f15ad9cb.css","chunks/vendor-6029d7dd.js"]),()=>q(()=>import("./pages/about.svelte-e9f4ff80.js"),["pages/about.svelte-e9f4ff80.js","assets/pages/about.svelte-d709c7ff.css","chunks/vendor-6029d7dd.js"])],At=[[/^\/$/,[_[0],_[2]],[_[1]]],[/^\/impressum\/?$/,[_[0],_[3]],[_[1]]],[/^\/privacy\/?$/,[_[0],_[4]],[_[1]]],[/^\/reports\/?$/,[_[0],_[5]],[_[1]]],[/^\/about\/?$/,[_[0],_[6]],[_[1]]]],Ot=[_[0](),_[1]()];function Tt(n){let t=n.baseURI;if(!t){const e=n.getElementsByTagName("base");t=e.length?e[0].href:n.URL}return t}let st="";function jt(n){st=n.base,n.assets}function z(){return{x:pageXOffset,y:pageYOffset}}function rt(n){for(;n&&n.nodeName.toUpperCase()!=="A";)n=n.parentNode;return n}function it(n){return n instanceof SVGAElement?new URL(n.href.baseVal,document.baseURI):new URL(n.href)}class Pt{constructor({base:t,routes:e,trailing_slash:s,renderer:r}){this.base=t,this.routes=e,this.trailing_slash=s,this.navigating=0,this.renderer=r,r.router=this,this.enabled=!0,document.body.setAttribute("tabindex","-1"),history.replaceState(history.state||{},"",location.href)}init_listeners(){"scrollRestoration"in history&&(history.scrollRestoration="manual"),addEventListener("beforeunload",()=>{history.scrollRestoration="auto"}),addEventListener("load",()=>{history.scrollRestoration="manual"});let t;addEventListener("scroll",()=>{clearTimeout(t),t=setTimeout(()=>{const a=X($({},history.state||{}),{"sveltekit:scroll":z()});history.replaceState(a,document.title,window.location.href)},200)});const e=a=>{const i=rt(a.target);i&&i.href&&i.hasAttribute("sveltekit:prefetch")&&this.prefetch(it(i))};let s;const r=a=>{clearTimeout(s),s=setTimeout(()=>{e(a)},20)};addEventListener("touchstart",e),addEventListener("mousemove",r),addEventListener("click",a=>{if(!this.enabled||a.button||a.which!==1||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.defaultPrevented)return;const i=rt(a.target);if(!i||!i.href)return;const o=it(i),l=o.toString();if(l===location.href){location.hash||a.preventDefault();return}const c=(i.getAttribute("rel")||"").split(/\s+/);if(i.hasAttribute("download")||c&&c.includes("external")||(i instanceof SVGAElement?i.target.baseVal:i.target)||!this.owns(o))return;const u=i.hasAttribute("sveltekit:noscroll"),h=l.indexOf("#"),f=location.href.indexOf("#"),w=h>=0?l.substring(0,h):l,b=f>=0?location.href.substring(0,f):location.href;history.pushState({},"",o.href),w===b&&window.dispatchEvent(new HashChangeEvent("hashchange")),this._navigate(o,u?z():null,!1,[],o.hash),a.preventDefault()}),addEventListener("popstate",a=>{if(a.state&&this.enabled){const i=new URL(location.href);this._navigate(i,a.state["sveltekit:scroll"],!1,[])}})}owns(t){return t.origin===location.origin&&t.pathname.startsWith(this.base)}parse(t){if(this.owns(t)){const e=t.pathname.slice(this.base.length)||"/",s=decodeURI(e),r=this.routes.filter(([o])=>o.test(s)),a=new URLSearchParams(t.search);return{id:`${e}?${a}`,routes:r,path:e,decoded_path:s,query:a}}}async goto(t,{noscroll:e=!1,replaceState:s=!1,keepfocus:r=!1,state:a={}}={},i){const o=new URL(t,Tt(document));return this.enabled&&this.owns(o)?(history[s?"replaceState":"pushState"](a,"",t),this._navigate(o,e?z():null,r,i,o.hash)):(location.href=o.href,new Promise(()=>{}))}enable(){this.enabled=!0}disable(){this.enabled=!1}async prefetch(t){const e=this.parse(t);if(!e)throw new Error("Attempted to prefetch a URL that does not belong to this app");return this.renderer.load(e)}async _navigate(t,e,s,r,a){const i=this.parse(t);if(!i)throw new Error("Attempted to navigate to a URL that does not belong to this app");if(this.navigating||dispatchEvent(new CustomEvent("sveltekit:navigation-start")),this.navigating++,i.path!=="/"){const o=i.path.endsWith("/");(o&&this.trailing_slash==="never"||!o&&this.trailing_slash==="always"&&!(i.path.split("/").pop()||"").includes("."))&&(i.path=o?i.path.slice(0,-1):i.path+"/",history.replaceState({},"",`${this.base}${i.path}${location.search}`))}await this.renderer.handle_navigation(i,r,!1,{hash:a,scroll:e,keepfocus:s}),this.navigating--,this.navigating||dispatchEvent(new CustomEvent("sveltekit:navigation-end"))}}function nt(n){return n instanceof Error||n&&n.name&&n.message?n:new Error(JSON.stringify(n))}function It(n){let t=5381,e=n.length;if(typeof n=="string")for(;e;)t=t*33^n.charCodeAt(--e);else for(;e;)t=t*33^n[--e];return(t>>>0).toString(36)}function Ct(n){const t=n.status&&n.status>=400&&n.status<=599&&!n.redirect;if(n.error||t){const e=n.status;if(!n.error&&t)return{status:e||500,error:new Error};const s=typeof n.error=="string"?new Error(n.error):n.error;return s instanceof Error?!e||e<400||e>599?(console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500'),{status:500,error:s}):{status:e,error:s}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof s}"`)}}if(n.redirect){if(!n.status||Math.floor(n.status/100)!==3)return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if(typeof n.redirect!="string")return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}if(n.context)throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');return n}function Nt(n){const t=Y(n);let e=!0;function s(){e=!0,t.update(i=>i)}function r(i){e=!1,t.set(i)}function a(i){let o;return t.subscribe(l=>{(o===void 0||e&&l!==o)&&i(o=l)})}return{notify:s,set:r,subscribe:a}}function Vt(n,t){const e=typeof n=="string"?n:n.url;let s=`script[data-type="svelte-data"][data-url=${JSON.stringify(e)}]`;t&&typeof t.body=="string"&&(s+=`[data-body="${It(t.body)}"]`);const r=document.querySelector(s);if(r&&r.textContent){const a=JSON.parse(r.textContent),{body:i}=a,o=x(a,["body"]);return Promise.resolve(new Response(i,o))}return fetch(n,t)}class Dt{constructor({Root:t,fallback:e,target:s,session:r,host:a}){this.Root=t,this.fallback=e,this.host=a,this.router,this.target=s,this.started=!1,this.session_id=1,this.invalid=new Set,this.invalidating=null,this.current={page:null,session_id:0,branch:[]},this.cache=new Map,this.loading={id:null,promise:null},this.stores={page:Nt({}),navigating:Y(null),session:Y(r)},this.$session=null,this.root=null;let i=!1;this.stores.session.subscribe(async o=>{if(this.$session=o,!i||!this.router)return;this.session_id+=1;const l=this.router.parse(new URL(location.href));l&&this.update(l,[],!0)}),i=!0}async start({status:t,error:e,nodes:s,page:r}){const a=[];let i={},o,l;try{for(let c=0;c<s.length;c+=1){const u=c===s.length-1,h=await this._load_node({module:await s[c],page:r,stuff:i,status:u?t:void 0,error:u?e:void 0});if(a.push(h),h&&h.loaded)if(h.loaded.error){if(e)throw h.loaded.error;l={status:h.loaded.status,error:h.loaded.error,path:r.path,query:r.query}}else h.loaded.stuff&&(i=$($({},i),h.loaded.stuff))}o=l?await this._load_error(l):await this._get_navigation_result_from_branch({page:r,branch:a})}catch(c){if(e)throw c;o=await this._load_error({status:500,error:nt(c),path:r.path,query:r.query})}if(o.redirect){location.href=new URL(o.redirect,location.href).href;return}this._init(o)}async handle_navigation(t,e,s,r){this.started&&this.stores.navigating.set({from:{path:this.current.page.path,query:this.current.page.query},to:{path:t.path,query:t.query}}),await this.update(t,e,s,r)}async update(t,e,s,r){var j;const a=this.token={};let i=await this._get_navigation_result(t,s);if(a!==this.token)return;if(this.invalid.clear(),i.redirect)if(e.length>10||e.includes(t.path))i=await this._load_error({status:500,error:new Error("Redirect loop"),path:t.path,query:t.query});else{this.router?this.router.goto(i.redirect,{replaceState:!0},[...e,t.path]):location.href=new URL(i.redirect,location.href).href;return}i.reload?location.reload():this.started?(this.current=i.state,this.root.$set(i.props),this.stores.navigating.set(null)):this._init(i);const{hash:o,scroll:l,keepfocus:c}=r||{};c||((j=getSelection())==null||j.removeAllRanges(),document.body.focus());const u=Math.round(pageYOffset),h=document.documentElement.scrollHeight-innerHeight;await 0;const f=Math.round(pageYOffset),w=document.documentElement.scrollHeight-innerHeight;if(f===Math.min(u,w)||h-u==w-f){const L=o&&document.getElementById(o.slice(1));l?scrollTo(l.x,l.y):L?L.scrollIntoView():scrollTo(0,0)}if(this.loading.promise=null,this.loading.id=null,!this.router)return;const R=i.state.branch[i.state.branch.length-1];R&&R.module.router===!1?this.router.disable():this.router.enable()}load(t){return this.loading.promise=this._get_navigation_result(t,!1),this.loading.id=t.id,this.loading.promise}invalidate(t){return this.invalid.add(t),this.invalidating||(this.invalidating=Promise.resolve().then(async()=>{const e=this.router&&this.router.parse(new URL(location.href));e&&await this.update(e,[],!0),this.invalidating=null})),this.invalidating}_init(t){this.current=t.state;const e=document.querySelector("style[data-svelte]");e&&e.remove(),this.root=new this.Root({target:this.target,props:$({stores:this.stores},t.props),hydrate:!0}),this.started=!0}async _get_navigation_result(t,e){if(this.loading.id===t.id&&this.loading.promise)return this.loading.promise;for(let s=0;s<t.routes.length;s+=1){const r=t.routes[s];let a=s+1;for(;a<t.routes.length;){const o=t.routes[a];if(o[0].toString()===r[0].toString())o[1].forEach(l=>l()),a+=1;else break}const i=await this._load({route:r,info:t},e);if(i)return i}return await this._load_error({status:404,error:new Error(`Not found: ${t.path}`),path:t.path,query:t.query})}async _get_navigation_result_from_branch({page:t,branch:e}){const s=e.filter(Boolean),r=s.find(l=>l.loaded&&l.loaded.redirect),a={redirect:r&&r.loaded?r.loaded.redirect:void 0,state:{page:t,branch:e,session_id:this.session_id},props:{components:s.map(l=>l.module.default)}};for(let l=0;l<s.length;l+=1){const c=s[l].loaded;a.props[`props_${l}`]=c?await c.props:null}(!this.current.page||t.path!==this.current.page.path||t.query.toString()!==this.current.page.query.toString())&&(a.props.page=t);const i=s[s.length-1],o=i.loaded&&i.loaded.maxage;if(o){const l=`${t.path}?${t.query}`;let c=!1;const u=()=>{this.cache.get(l)===a&&this.cache.delete(l),f(),clearTimeout(h)},h=setTimeout(u,o*1e3),f=this.stores.session.subscribe(()=>{c&&u()});c=!0,this.cache.set(l,a)}return a}async _load_node({status:t,error:e,module:s,page:r,stuff:a}){const i={module:s,uses:{params:new Set,path:!1,query:!1,session:!1,stuff:!1,dependencies:[]},loaded:null,stuff:a},o={};for(const c in r.params)Object.defineProperty(o,c,{get(){return i.uses.params.add(c),r.params[c]},enumerable:!0});const l=this.$session;if(s.load){const{started:c}=this,u={page:{host:r.host,params:o,get path(){return i.uses.path=!0,r.path},get query(){return i.uses.query=!0,r.query}},get session(){return i.uses.session=!0,l},get stuff(){return i.uses.stuff=!0,$({},a)},fetch(f,w){const b=typeof f=="string"?f:f.url,{href:R}=new URL(b,new URL(r.path,document.baseURI));return i.uses.dependencies.push(R),c?fetch(f,w):Vt(f,w)}};e&&(u.status=t,u.error=e);const h=await s.load.call(null,u);if(!h)return;i.loaded=Ct(h),i.loaded.stuff&&(i.stuff=i.loaded.stuff)}return i}async _load({route:t,info:{path:e,decoded_path:s,query:r}},a){const i=`${s}?${r}`;if(!a){const d=this.cache.get(i);if(d)return d}const[o,l,c,u]=t,h=u?u(o.exec(s)):{},f=this.current.page&&{path:e!==this.current.page.path,params:Object.keys(h).filter(d=>this.current.page.params[d]!==h[d]),query:r.toString()!==this.current.page.query.toString(),session:this.session_id!==this.current.session_id},w={host:this.host,path:e,query:r,params:h};let b=[],R={},j=!1,L=200,P;l.forEach(d=>d());t:for(let d=0;d<l.length;d+=1){let p;try{if(!l[d])continue;const y=await l[d](),g=this.current.branch[d];if(!g||y!==g.module||f.path&&g.uses.path||f.params.some(U=>g.uses.params.has(U))||f.query&&g.uses.query||f.session&&g.uses.session||g.uses.dependencies.some(U=>this.invalid.has(U))||j&&g.uses.stuff){p=await this._load_node({module:y,page:w,stuff:R});const U=d===l.length-1;if(p&&p.loaded){if(p.loaded.error&&(L=p.loaded.status,P=p.loaded.error),p.loaded.redirect)return{redirect:p.loaded.redirect,props:{},state:this.current};p.loaded.stuff&&(j=!0)}else if(U&&y.load)return}else p=g}catch(y){L=500,P=nt(y)}if(P){for(;d--;)if(c[d]){let y,g,N=d;for(;!(g=b[N]);)N-=1;try{if(y=await this._load_node({status:L,error:P,module:await c[d](),page:w,stuff:g.stuff}),y&&y.loaded&&y.loaded.error)continue;b=b.slice(0,N+1).concat(y);break t}catch{continue}}return await this._load_error({status:L,error:P,path:e,query:r})}else p&&p.loaded&&p.loaded.stuff&&(R=$($({},R),p.loaded.stuff)),b.push(p)}return await this._get_navigation_result_from_branch({page:w,branch:b})}async _load_error({status:t,error:e,path:s,query:r}){const a={host:this.host,path:s,query:r,params:{}},i=await this._load_node({module:await this.fallback[0],page:a,stuff:{}}),o=[i,await this._load_node({status:t,error:e,module:await this.fallback[1],page:a,stuff:i&&i.loaded&&i.loaded.stuff||{}})];return await this._get_navigation_result_from_branch({page:a,branch:o})}}async function Bt({paths:n,target:t,session:e,host:s,route:r,spa:a,trailing_slash:i,hydrate:o}){const l=new Dt({Root:Lt,fallback:Ot,target:t,session:e,host:s}),c=r?new Pt({base:n.base,routes:At,trailing_slash:i,renderer:l}):null;jt(n),o&&await l.start(o),c&&(a&&c.goto(location.href,{replaceState:!0},[]),c.init_listeners()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Bt as start};
