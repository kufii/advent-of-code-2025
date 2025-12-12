(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const q={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return L2(this.context.count)},getNextContextId(){return L2(this.context.count++)}};function L2(e){const t=String(e),n=t.length-1;return q.context.id+(n?String.fromCharCode(96+n):"")+t}function h3(e){q.context=e}const w4=!1,k4=(e,t)=>e===t,C3=Symbol("solid-proxy"),z2=typeof Proxy=="function",$4=Symbol("solid-track"),P3={equals:k4};let _2=E2;const Q=1,m3=2,q2={owned:null,cleanups:null,context:null,owner:null};var _=null;let v=null,j4=null,E=null,U=null,V=null,I3=0;function R3(e,t){const n=E,r=_,s=e.length===0,i=t===void 0?r:t,a=s?q2:{owned:null,cleanups:null,context:i?i.context:null,owner:i},o=s?e:()=>e(()=>G(()=>o3(a)));_=a,E=null;try{return e3(o,!0)}finally{E=n,_=r}}function I(e,t){t=t?Object.assign({},P3,t):P3;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(v&&v.running&&v.sources.has(n)?s=s(n.tValue):s=s(n.value)),P2(n,s));return[C2.bind(n),r]}function K(e,t,n){const r=s2(e,t,!1,Q);k3(r)}function f3(e,t,n){_2=F4;const r=s2(e,t,!1,Q),s=y3&&d3(y3);s&&(r.suspense=s),r.user=!0,V?V.push(r):k3(r)}function P(e,t,n){n=n?Object.assign({},P3,n):P3;const r=s2(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,k3(r),C2.bind(r)}function S4(e){return e3(e,!1)}function G(e){if(E===null)return e();const t=E;E=null;try{return e()}finally{E=t}}function n2(e,t,n){const r=Array.isArray(e);let s,i=n&&n.defer;return a=>{let o;if(r){o=Array(e.length);for(let c=0;c<e.length;c++)o[c]=e[c]()}else o=e();if(i)return i=!1,a;const l=G(()=>t(o,s,a));return s=o,l}}function n3(e){return _===null||(_.cleanups===null?_.cleanups=[e]:_.cleanups.push(e)),e}function r2(){return _}function F2(e,t){const n=_,r=E;_=e,E=null;try{return e3(t,!0)}catch(s){i2(s)}finally{_=n,E=r}}function A4(e){if(v&&v.running)return e(),v.done;const t=E,n=_;return Promise.resolve().then(()=>{E=t,_=n;let r;return y3&&(r=v||(v={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),r.done||(r.done=new Promise(s=>r.resolve=s)),r.running=!0),e3(e,!1),E=_=null,r?r.done:void 0})}const[d7,c2]=I(!1);function z4(e){V.push.apply(V,e),e.length=0}function w3(e,t){const n=Symbol("context");return{id:n,Provider:P4(n),defaultValue:e}}function d3(e){let t;return _&&_.context&&(t=_.context[e.id])!==void 0?t:e.defaultValue}function N3(e){const t=P(e),n=P(()=>Y3(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let y3;function _4(){return y3||(y3=w3())}function C2(){const e=v&&v.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===Q)k3(this);else{const t=U;U=null,e3(()=>O3(this),!1),U=t}if(E){const t=this.observers?this.observers.length:0;E.sources?(E.sources.push(this),E.sourceSlots.push(t)):(E.sources=[this],E.sourceSlots=[t]),this.observers?(this.observers.push(E),this.observerSlots.push(E.sources.length-1)):(this.observers=[E],this.observerSlots=[E.sources.length-1])}return e&&v.sources.has(this)?this.tValue:this.value}function P2(e,t,n){let r=v&&v.running&&v.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(r,t)){if(v){const s=v.running;(s||!n&&v.sources.has(e))&&(v.sources.add(e),e.tValue=t),s||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&e3(()=>{for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s],a=v&&v.running;a&&v.disposed.has(i)||((a?!i.tState:!i.state)&&(i.pure?U.push(i):V.push(i),i.observers&&O2(i)),a?i.tState=Q:i.state=Q)}if(U.length>1e6)throw U=[],new Error},!1)}return t}function k3(e){if(!e.fn)return;o3(e);const t=I3;R2(e,v&&v.running&&v.sources.has(e)?e.tValue:e.value,t),v&&!v.running&&v.sources.has(e)&&queueMicrotask(()=>{e3(()=>{v&&(v.running=!0),E=_=e,R2(e,e.tValue,t),E=_=null},!1)})}function R2(e,t,n){let r;const s=_,i=E;E=_=e;try{r=e.fn(t)}catch(a){return e.pure&&(v&&v.running?(e.tState=Q,e.tOwned&&e.tOwned.forEach(o3),e.tOwned=void 0):(e.state=Q,e.owned&&e.owned.forEach(o3),e.owned=null)),e.updatedAt=n+1,i2(a)}finally{E=i,_=s}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?P2(e,r,!0):v&&v.running&&e.pure?(v.sources.add(e),e.tValue=r):e.value=r,e.updatedAt=n)}function s2(e,t,n,r=Q,s){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:_,context:_?_.context:null,pure:n};return v&&v.running&&(i.state=0,i.tState=r),_===null||_!==q2&&(v&&v.running&&_.pure?_.tOwned?_.tOwned.push(i):_.tOwned=[i]:_.owned?_.owned.push(i):_.owned=[i]),i}function E3(e){const t=v&&v.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===m3)return O3(e);if(e.suspense&&G(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<I3);){if(t&&v.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let r=n.length-1;r>=0;r--){if(e=n[r],t){let s=e,i=n[r+1];for(;(s=s.owner)&&s!==i;)if(v.disposed.has(s))return}if((t?e.tState:e.state)===Q)k3(e);else if((t?e.tState:e.state)===m3){const s=U;U=null,e3(()=>O3(e,n[0]),!1),U=s}}}function e3(e,t){if(U)return e();let n=!1;t||(U=[]),V?n=!0:V=[],I3++;try{const r=e();return q4(n),r}catch(r){n||(V=null),U=null,i2(r)}}function q4(e){if(U&&(E2(U),U=null),e)return;let t;if(v){if(!v.promises.size&&!v.queue.size){const r=v.sources,s=v.disposed;V.push.apply(V,v.effects),t=v.resolve;for(const i of V)"tState"in i&&(i.state=i.tState),delete i.tState;v=null,e3(()=>{for(const i of s)o3(i);for(const i of r){if(i.value=i.tValue,i.owned)for(let a=0,o=i.owned.length;a<o;a++)o3(i.owned[a]);i.tOwned&&(i.owned=i.tOwned),delete i.tValue,delete i.tOwned,i.tState=0}c2(!1)},!1)}else if(v.running){v.running=!1,v.effects.push.apply(v.effects,V),V=null,c2(!0);return}}const n=V;V=null,n.length&&e3(()=>_2(n),!1),t&&t()}function E2(e){for(let t=0;t<e.length;t++)E3(e[t])}function F4(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:E3(r)}if(q.context){if(q.count){q.effects||(q.effects=[]),q.effects.push(...e.slice(0,n));return}h3()}for(q.effects&&(q.done||!q.count)&&(e=[...q.effects,...e],n+=q.effects.length,delete q.effects),t=0;t<n;t++)E3(e[t])}function O3(e,t){const n=v&&v.running;n?e.tState=0:e.state=0;for(let r=0;r<e.sources.length;r+=1){const s=e.sources[r];if(s.sources){const i=n?s.tState:s.state;i===Q?s!==t&&(!s.updatedAt||s.updatedAt<I3)&&E3(s):i===m3&&O3(s,t)}}}function O2(e){const t=v&&v.running;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(t?!r.tState:!r.state)&&(t?r.tState=m3:r.state=m3,r.pure?U.push(r):V.push(r),r.observers&&O2(r))}}function o3(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const i=s.pop(),a=n.observerSlots.pop();r<s.length&&(i.sourceSlots[a]=r,s[r]=i,n.observerSlots[r]=a)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)o3(e.tOwned[t]);delete e.tOwned}if(v&&v.running&&e.pure)M2(e,!0);else if(e.owned){for(t=e.owned.length-1;t>=0;t--)o3(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}v&&v.running?e.tState=0:e.state=0}function M2(e,t){if(t||(e.tState=0,v.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)M2(e.owned[n])}function C4(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function i2(e,t=_){throw C4(e)}function Y3(e){if(typeof e=="function"&&!e.length)return Y3(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=Y3(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function P4(e,t){return function(r){let s;return K(()=>s=G(()=>(_.context={..._.context,[e]:r.value},N3(()=>r.children))),void 0),s}}const E4=Symbol("fallback");function f2(e){for(let t=0;t<e.length;t++)e[t]()}function O4(e,t,n={}){let r=[],s=[],i=[],a=0,o=t.length>1?[]:null;return n3(()=>f2(i)),()=>{let l=e()||[],c=l.length,u,R;return l[$4],G(()=>{let b,S,p,y,$,L,f,d,x;if(c===0)a!==0&&(f2(i),i=[],r=[],s=[],a=0,o&&(o=[])),n.fallback&&(r=[E4],s[0]=R3(g=>(i[0]=g,n.fallback())),a=1);else if(a===0){for(s=new Array(c),R=0;R<c;R++)r[R]=l[R],s[R]=R3(h);a=c}else{for(p=new Array(c),y=new Array(c),o&&($=new Array(c)),L=0,f=Math.min(a,c);L<f&&r[L]===l[L];L++);for(f=a-1,d=c-1;f>=L&&d>=L&&r[f]===l[d];f--,d--)p[d]=s[f],y[d]=i[f],o&&($[d]=o[f]);for(b=new Map,S=new Array(d+1),R=d;R>=L;R--)x=l[R],u=b.get(x),S[R]=u===void 0?-1:u,b.set(x,R);for(u=L;u<=f;u++)x=r[u],R=b.get(x),R!==void 0&&R!==-1?(p[R]=s[u],y[R]=i[u],o&&($[R]=o[u]),R=S[R],b.set(x,R)):i[u]();for(R=L;R<c;R++)R in p?(s[R]=p[R],i[R]=y[R],o&&(o[R]=$[R],o[R](R))):s[R]=R3(h);s=s.slice(0,a=c),r=l.slice(0)}return s});function h(b){if(i[R]=b,o){const[S,p]=I(R);return o[R]=p,t(l[R],S)}return t(l[R])}}}function m(e,t){return G(()=>e(t||{}))}function _3(){return!0}const Q3={get(e,t,n){return t===C3?n:e.get(t)},has(e,t){return t===C3?!0:e.has(t)},set:_3,deleteProperty:_3,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:_3,deleteProperty:_3}},ownKeys(e){return e.keys()}};function K3(e){return(e=typeof e=="function"?e():e)?e:{}}function M4(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function b3(...e){let t=!1;for(let a=0;a<e.length;a++){const o=e[a];t=t||!!o&&C3 in o,e[a]=typeof o=="function"?(t=!0,P(o)):o}if(z2&&t)return new Proxy({get(a){for(let o=e.length-1;o>=0;o--){const l=K3(e[o])[a];if(l!==void 0)return l}},has(a){for(let o=e.length-1;o>=0;o--)if(a in K3(e[o]))return!0;return!1},keys(){const a=[];for(let o=0;o<e.length;o++)a.push(...Object.keys(K3(e[o])));return[...new Set(a)]}},Q3);const n={},r=Object.create(null);for(let a=e.length-1;a>=0;a--){const o=e[a];if(!o)continue;const l=Object.getOwnPropertyNames(o);for(let c=l.length-1;c>=0;c--){const u=l[c];if(u==="__proto__"||u==="constructor")continue;const R=Object.getOwnPropertyDescriptor(o,u);if(!r[u])r[u]=R.get?{enumerable:!0,configurable:!0,get:M4.bind(n[u]=[R.get.bind(o)])}:R.value!==void 0?R:void 0;else{const h=n[u];h&&(R.get?h.push(R.get.bind(o)):R.value!==void 0&&h.push(()=>R.value))}}}const s={},i=Object.keys(r);for(let a=i.length-1;a>=0;a--){const o=i[a],l=r[o];l&&l.get?Object.defineProperty(s,o,l):s[o]=l?l.value:void 0}return s}function T2(e,...t){const n=t.length;if(z2&&C3 in e){const s=n>1?t.flat():t[0],i=t.map(a=>new Proxy({get(o){return a.includes(o)?e[o]:void 0},has(o){return a.includes(o)&&o in e},keys(){return a.filter(o=>o in e)}},Q3));return i.push(new Proxy({get(a){return s.includes(a)?void 0:e[a]},has(a){return s.includes(a)?!1:a in e},keys(){return Object.keys(e).filter(a=>!s.includes(a))}},Q3)),i}const r=[];for(let s=0;s<=n;s++)r[s]={};for(const s of Object.getOwnPropertyNames(e)){let i=n;for(let l=0;l<t.length;l++)if(t[l].includes(s)){i=l;break}const a=Object.getOwnPropertyDescriptor(e,s);!a.get&&!a.set&&a.enumerable&&a.writable&&a.configurable?r[i][s]=a.value:Object.defineProperty(r[i],s,a)}return r}let T4=0;function I4(){return q.context?q.getNextContextId():`cl-${T4++}`}const I2=e=>`Stale read from <${e}>.`;function N4(e){const t="fallback"in e&&{fallback:()=>e.fallback};return P(O4(()=>e.each,e.children,t||void 0))}function W(e){const t=e.keyed,n=P(()=>e.when,void 0,void 0),r=t?n:P(n,void 0,{equals:(s,i)=>!s==!i});return P(()=>{const s=r();if(s){const i=e.children;return typeof i=="function"&&i.length>0?G(()=>i(t?s:()=>{if(!G(r))throw I2("Show");return n()})):i}return e.fallback},void 0,void 0)}function D4(e){const t=N3(()=>e.children),n=P(()=>{const r=t(),s=Array.isArray(r)?r:[r];let i=()=>{};for(let a=0;a<s.length;a++){const o=a,l=s[a],c=i,u=P(()=>c()?void 0:l.when,void 0,void 0),R=l.keyed?u:P(u,void 0,{equals:(h,b)=>!h==!b});i=()=>c()||(R()?[o,u,l]:void 0)}return i});return P(()=>{const r=n()();if(!r)return e.fallback;const[s,i,a]=r,o=a.children;return typeof o=="function"&&o.length>0?G(()=>o(a.keyed?i():()=>{if(G(n)()?.[0]!==s)throw I2("Match");return i()})):o},void 0,void 0)}function d2(e){return e}const B4=w3();function V4(e){let t=0,n,r,s,i,a;const[o,l]=I(!1),c=_4(),u={increment:()=>{++t===1&&l(!0)},decrement:()=>{--t===0&&l(!1)},inFallback:o,effects:[],resolved:!1},R=r2();if(q.context&&q.load){const S=q.getContextId();let p=q.load(S);if(p&&(typeof p!="object"||p.s!==1?s=p:q.gather(S)),s&&s!=="$$f"){const[y,$]=I(void 0,{equals:!1});i=y,s.then(()=>{if(q.done)return $();q.gather(S),h3(r),$(),h3()},L=>{a=L,$()})}}const h=d3(B4);h&&(n=h.register(u.inFallback));let b;return n3(()=>b&&b()),m(c.Provider,{value:u,get children(){return P(()=>{if(a)throw a;if(r=q.context,i)return i(),i=void 0;r&&s==="$$f"&&h3();const S=P(()=>e.children);return P(p=>{const y=u.inFallback(),{showContent:$=!0,showFallback:L=!0}=n?n():{};if((!y||s&&s!=="$$f")&&$)return u.resolved=!0,b&&b(),b=r=s=void 0,z4(u.effects),S();if(L)return b?p:R3(f=>(b=f,r&&(h3({id:r.id+"F",count:0}),r=void 0),e.fallback),R)})})}})}const U4=void 0,H4=["allowfullscreen","async","alpha","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected","adauctionheaders","browsingtopics","credentialless","defaultchecked","defaultmuted","defaultselected","defer","disablepictureinpicture","disableremoteplayback","preservespitch","shadowrootclonable","shadowrootcustomelementregistry","shadowrootdelegatesfocus","shadowrootserializable","sharedstoragewritable"],W4=new Set(["className","value","readOnly","noValidate","formNoValidate","isMap","noModule","playsInline","adAuctionHeaders","allowFullscreen","browsingTopics","defaultChecked","defaultMuted","defaultSelected","disablePictureInPicture","disableRemotePlayback","preservesPitch","shadowRootClonable","shadowRootCustomElementRegistry","shadowRootDelegatesFocus","shadowRootSerializable","sharedStorageWritable",...H4]),K4=new Set(["innerHTML","textContent","innerText","children"]),G4=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Z4=Object.assign(Object.create(null),{class:"className",novalidate:{$:"noValidate",FORM:1},formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1},adauctionheaders:{$:"adAuctionHeaders",IFRAME:1},allowfullscreen:{$:"allowFullscreen",IFRAME:1},browsingtopics:{$:"browsingTopics",IMG:1},defaultchecked:{$:"defaultChecked",INPUT:1},defaultmuted:{$:"defaultMuted",AUDIO:1,VIDEO:1},defaultselected:{$:"defaultSelected",OPTION:1},disablepictureinpicture:{$:"disablePictureInPicture",VIDEO:1},disableremoteplayback:{$:"disableRemotePlayback",AUDIO:1,VIDEO:1},preservespitch:{$:"preservesPitch",AUDIO:1,VIDEO:1},shadowrootclonable:{$:"shadowRootClonable",TEMPLATE:1},shadowrootdelegatesfocus:{$:"shadowRootDelegatesFocus",TEMPLATE:1},shadowrootserializable:{$:"shadowRootSerializable",TEMPLATE:1},sharedstoragewritable:{$:"sharedStorageWritable",IFRAME:1,IMG:1}});function X4(e,t){const n=Z4[e];return typeof n=="object"?n[t]?n.$:void 0:n}const J4=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Y4={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},q3=e=>P(()=>e());function Q4(e,t,n){let r=n.length,s=t.length,i=r,a=0,o=0,l=t[s-1].nextSibling,c=null;for(;a<s||o<i;){if(t[a]===n[o]){a++,o++;continue}for(;t[s-1]===n[i-1];)s--,i--;if(s===a){const u=i<r?o?n[o-1].nextSibling:n[i-o]:l;for(;o<i;)e.insertBefore(n[o++],u)}else if(i===o)for(;a<s;)(!c||!c.has(t[a]))&&t[a].remove(),a++;else if(t[a]===n[i-1]&&n[o]===t[s-1]){const u=t[--s].nextSibling;e.insertBefore(n[o++],t[a++].nextSibling),e.insertBefore(n[--i],u),t[s]=n[i]}else{if(!c){c=new Map;let R=o;for(;R<i;)c.set(n[R],R++)}const u=c.get(t[a]);if(u!=null)if(o<u&&u<i){let R=a,h=1,b;for(;++R<s&&R<i&&!((b=c.get(t[R]))==null||b!==u+h);)h++;if(h>u-o){const S=t[a];for(;o<u;)e.insertBefore(n[o++],S)}else e.replaceChild(n[o++],t[a++])}else a++;else t[a++].remove()}}}const x2="_$DX_DELEGATE";function e5(e,t,n,r={}){let s;return R3(i=>{s=i,t===document?e():j(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function A(e,t,n,r){let s;const i=()=>{const o=document.createElement("template");return o.innerHTML=e,o.content.firstChild},a=()=>(s||(s=i())).cloneNode(!0);return a.cloneNode=a,a}function L3(e,t=window.document){const n=t[x2]||(t[x2]=new Set);for(let r=0,s=e.length;r<s;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,L5))}}function i3(e,t,n){x3(e)||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function t5(e,t,n,r){x3(e)||(r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r))}function n5(e,t,n){x3(e)||(n?e.setAttribute(t,""):e.removeAttribute(t))}function r5(e,t){x3(e)||(t==null?e.removeAttribute("class"):e.className=t)}function s5(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=i=>s.call(e,n[1],i))}else e.addEventListener(t,n,typeof n!="function"&&n)}function i5(e,t,n={}){const r=Object.keys(t||{}),s=Object.keys(n);let i,a;for(i=0,a=s.length;i<a;i++){const o=s[i];!o||o==="undefined"||t[o]||(g2(e,o,!1),delete n[o])}for(i=0,a=r.length;i<a;i++){const o=r[i],l=!!t[o];!o||o==="undefined"||n[o]===l||!l||(g2(e,o,!0),n[o]=l)}return n}function o5(e,t,n){if(!t)return n?i3(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let s,i;for(i in n)t[i]==null&&r.removeProperty(i),delete n[i];for(i in t)s=t[i],s!==n[i]&&(r.setProperty(i,s),n[i]=s);return n}function M3(e,t={},n,r){const s={};return r||K(()=>s.children=v3(e,t.children,s.children)),K(()=>typeof t.ref=="function"&&a5(t.ref,e)),K(()=>l5(e,t,n,!0,s,!0)),s}function a5(e,t,n){return G(()=>e(t,n))}function j(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return v3(e,t,r,n);K(s=>v3(e,t(),s,n),r)}function l5(e,t,n,r,s={},i=!1){t||(t={});for(const a in s)if(!(a in t)){if(a==="children")continue;s[a]=h2(e,a,null,s[a],n,i,t)}for(const a in t){if(a==="children")continue;const o=t[a];s[a]=h2(e,a,o,s[a],n,i,t)}}function x3(e){return!!q.context&&!q.done&&(!e||e.isConnected)}function u5(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function g2(e,t,n){const r=t.trim().split(/\s+/);for(let s=0,i=r.length;s<i;s++)e.classList.toggle(r[s],n)}function h2(e,t,n,r,s,i,a){let o,l,c,u,R;if(t==="style")return o5(e,n,r);if(t==="classList")return i5(e,n,r);if(n===r)return r;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const h=t.slice(3);r&&e.removeEventListener(h,r,typeof r!="function"&&r),n&&e.addEventListener(h,n,typeof n!="function"&&n)}else if(t.slice(0,10)==="oncapture:"){const h=t.slice(10);r&&e.removeEventListener(h,r,!0),n&&e.addEventListener(h,n,!0)}else if(t.slice(0,2)==="on"){const h=t.slice(2).toLowerCase(),b=J4.has(h);if(!b&&r){const S=Array.isArray(r)?r[0]:r;e.removeEventListener(h,S)}(b||n)&&(s5(e,h,n,b),b&&L3([h]))}else if(t.slice(0,5)==="attr:")i3(e,t.slice(5),n);else if(t.slice(0,5)==="bool:")n5(e,t.slice(5),n);else if((R=t.slice(0,5)==="prop:")||(c=K4.has(t))||!s&&((u=X4(t,e.tagName))||(l=W4.has(t)))||(o=e.nodeName.includes("-")||"is"in a)){if(R)t=t.slice(5),l=!0;else if(x3(e))return n;t==="class"||t==="className"?r5(e,n):o&&!l&&!c?e[u5(t)]=n:e[u||t]=n}else{const h=s&&t.indexOf(":")>-1&&Y4[t.split(":")[0]];h?t5(e,h,t,n):i3(e,G4[t]||t,n)}return n}function L5(e){if(q.registry&&q.events&&q.events.find(([l,c])=>c===e))return;let t=e.target;const n=`$$${e.type}`,r=e.target,s=e.currentTarget,i=l=>Object.defineProperty(e,"target",{configurable:!0,value:l}),a=()=>{const l=t[n];if(l&&!t.disabled){const c=t[`${n}Data`];if(c!==void 0?l.call(t,c,e):l.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&i(t.host),!0},o=()=>{for(;a()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),q.registry&&!q.done&&(q.done=_$HY.done=!0),e.composedPath){const l=e.composedPath();i(l[0]);for(let c=0;c<l.length-2&&(t=l[c],!!a());c++){if(t._$host){t=t._$host,o();break}if(t.parentNode===s)break}}else o();i(r)}function v3(e,t,n,r,s){const i=x3(e);if(i){!n&&(n=[...e.childNodes]);let l=[];for(let c=0;c<n.length;c++){const u=n[c];u.nodeType===8&&u.data.slice(0,2)==="!$"?u.remove():l.push(u)}n=l}for(;typeof n=="function";)n=n();if(t===n)return n;const a=typeof t,o=r!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,a==="string"||a==="number"){if(i||a==="number"&&(t=t.toString(),t===n))return n;if(o){let l=n[0];l&&l.nodeType===3?l.data!==t&&(l.data=t):l=document.createTextNode(t),n=c3(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||a==="boolean"){if(i)return n;n=c3(e,n,r)}else{if(a==="function")return K(()=>{let l=t();for(;typeof l=="function";)l=l();n=v3(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[],c=n&&Array.isArray(n);if(e2(l,t,n,s))return K(()=>n=v3(e,l,n,r,!0)),()=>n;if(i){if(!l.length)return n;if(r===void 0)return n=[...e.childNodes];let u=l[0];if(u.parentNode!==e)return n;const R=[u];for(;(u=u.nextSibling)!==r;)R.push(u);return n=R}if(l.length===0){if(n=c3(e,n,r),o)return n}else c?n.length===0?p2(e,l,r):Q4(e,n,l):(n&&c3(e),p2(e,l));n=l}else if(t.nodeType){if(i&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=c3(e,n,r,t);c3(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function e2(e,t,n,r){let s=!1;for(let i=0,a=t.length;i<a;i++){let o=t[i],l=n&&n[e.length],c;if(!(o==null||o===!0||o===!1))if((c=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))s=e2(e,o,l)||s;else if(c==="function")if(r){for(;typeof o=="function";)o=o();s=e2(e,Array.isArray(o)?o:[o],Array.isArray(l)?l:[l])||s}else e.push(o),s=!0;else{const u=String(o);l&&l.nodeType===3&&l.data===u?e.push(l):e.push(document.createTextNode(u))}}return s}function p2(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function c3(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let i=!1;for(let a=t.length-1;a>=0;a--){const o=t[a];if(s!==o){const l=o.parentNode===e;!i&&!a?l?e.replaceChild(s,o):e.insertBefore(s,n):l&&o.remove()}else i=!0}}else e.insertBefore(s,n);return[s]}const N2=!1,D2=w3(),c5=["title","meta"],m2=[],y2=["name","http-equiv","content","charset","media"].concat(["property"]),b2=(e,t)=>{const n=Object.fromEntries(Object.entries(e.props).filter(([r])=>t.includes(r)).sort());return(Object.hasOwn(n,"name")||Object.hasOwn(n,"property"))&&(n.name=n.name||n.property,delete n.property),e.tag+JSON.stringify(n)};function R5(){if(!q.context){const n=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(n,r=>r.parentNode.removeChild(r))}const e=new Map;function t(n){if(n.ref)return n.ref;let r=document.querySelector(`[data-sm="${n.id}"]`);return r?(r.tagName.toLowerCase()!==n.tag&&(r.parentNode&&r.parentNode.removeChild(r),r=document.createElement(n.tag)),r.removeAttribute("data-sm")):r=document.createElement(n.tag),r}return{addTag(n){if(c5.indexOf(n.tag)!==-1){const i=n.tag==="title"?m2:y2,a=b2(n,i);e.has(a)||e.set(a,[]);let o=e.get(a),l=o.length;o=[...o,n],e.set(a,o);let c=t(n);n.ref=c,M3(c,n.props);let u=null;for(var r=l-1;r>=0;r--)if(o[r]!=null){u=o[r];break}return c.parentNode!=document.head&&document.head.appendChild(c),u&&u.ref&&u.ref.parentNode&&document.head.removeChild(u.ref),l}let s=t(n);return n.ref=s,M3(s,n.props),s.parentNode!=document.head&&document.head.appendChild(s),-1},removeTag(n,r){const s=n.tag==="title"?m2:y2,i=b2(n,s);if(n.ref){const a=e.get(i);if(a){if(n.ref.parentNode){n.ref.parentNode.removeChild(n.ref);for(let o=r-1;o>=0;o--)a[o]!=null&&document.head.appendChild(a[o].ref)}a[r]=null,e.set(i,a)}else n.ref.parentNode&&n.ref.parentNode.removeChild(n.ref)}}}}const f5=e=>{const t=R5();return m(D2.Provider,{value:t,get children(){return e.children}})},d5=(e,t,n)=>(x5({tag:e,props:t,setting:n,id:I4(),get name(){return t.name||t.property}}),null);function x5(e){const t=d3(D2);if(!t)throw new Error("<MetaProvider /> should be in the tree");K(()=>{const n=t.addTag(e);n3(()=>t.removeTag(e,n))})}const D3=e=>d5("title",e,{escape:!0,close:!0});function B2(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,i){if(n)return!(n=!1);const a={to:s,options:i,defaultPrevented:!1,preventDefault:()=>a.defaultPrevented=!0};for(const o of e)o.listener({...a,from:o.location,retry:l=>{l&&(n=!0),o.navigate(s,{...i,resolve:!1})}});return!a.defaultPrevented}return{subscribe:t,confirm:r}}let t2;function o2(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),t2=window.history.state._depth}o2();function g5(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function h5(e,t){let n=!1;return()=>{const r=t2;o2();const s=r==null?null:t2-r;if(n){n=!1;return}s&&t(s)?(n=!0,window.history.go(-s)):e()}}const p5=/^(?:[a-z0-9]+:)?\/\//i,m5=/^\/+|(\/)\/+$/g,V2="http://sr";function u3(e,t=!1){const n=e.replace(m5,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function F3(e,t,n){if(p5.test(t))return;const r=u3(e),s=n&&u3(n);let i="";return!s||t.startsWith("/")?i=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?i=r+s:i=s,(i||"/")+u3(t,!i)}function y5(e,t){if(e==null)throw new Error(t);return e}function b5(e,t){return u3(e).replace(/\/*(\*.*)?$/g,"")+u3(t)}function U2(e){const t={};return e.searchParams.forEach((n,r)=>{r in t?Array.isArray(t[r])?t[r].push(n):t[r]=[t[r],n]:t[r]=n}),t}function v5(e,t,n){const[r,s]=e.split("/*",2),i=r.split("/").filter(Boolean),a=i.length;return o=>{const l=o.split("/").filter(Boolean),c=l.length-a;if(c<0||c>0&&s===void 0&&!t)return null;const u={path:a?"":"/",params:{}},R=h=>n===void 0?void 0:n[h];for(let h=0;h<a;h++){const b=i[h],S=b[0]===":",p=S?l[h]:l[h].toLowerCase(),y=S?b.slice(1):b.toLowerCase();if(S&&G3(p,R(y)))u.params[y]=p;else if(S||!G3(p,y))return null;u.path+=`/${p}`}if(s){const h=c?l.slice(-c).join("/"):"";if(G3(h,R(s)))u.params[s]=h;else return null}return u}}function G3(e,t){const n=r=>r===e;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function w5(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,i)=>s+(i.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function H2(e){const t=new Map,n=r2();return new Proxy({},{get(r,s){return t.has(s)||F2(n,()=>t.set(s,P(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())},has(r,s){return s in e()}})}function W2(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return W2(r).reduce((i,a)=>[...i,...s.map(o=>o+a)],[])}const k5=100,K2=w3(),a2=w3(),B3=()=>y5(d3(K2),"<A> and 'use' router primitives can be only used inside a Route."),$5=()=>d3(a2)||B3().base,j5=e=>{const t=$5();return P(()=>t.resolvePath(e()))},S5=e=>{const t=B3();return P(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},A5=()=>B3().location,z5=()=>B3().params;function _5(e,t=""){const{component:n,preload:r,load:s,children:i,info:a}=e,o=!i||Array.isArray(i)&&!i.length,l={key:e,component:n,preload:r||s,info:a};return G2(e.path).reduce((c,u)=>{for(const R of W2(u)){const h=b5(t,R);let b=o?h:h.split("/*",1)[0];b=b.split("/").map(S=>S.startsWith(":")||S.startsWith("*")?S:encodeURIComponent(S)).join("/"),c.push({...l,originalPath:u,pattern:b,matcher:v5(b,!o,e.matchFilters)})}return c},[])}function q5(e,t=0){return{routes:e,score:w5(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const i=e[s],a=i.matcher(n);if(!a)return null;r.unshift({...a,route:i})}return r}}}function G2(e){return Array.isArray(e)?e:[e]}function Z2(e,t="",n=[],r=[]){const s=G2(e);for(let i=0,a=s.length;i<a;i++){const o=s[i];if(o&&typeof o=="object"){o.hasOwnProperty("path")||(o.path="");const l=_5(o,t);for(const c of l){n.push(c);const u=Array.isArray(o.children)&&o.children.length===0;if(o.children&&!u)Z2(o.children,c.pattern,n,r);else{const R=q5([...n],r.length);r.push(R)}n.pop()}}}return n.length?r:r.sort((i,a)=>a.score-i.score)}function Z3(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function F5(e,t,n){const r=new URL(V2),s=P(u=>{const R=e();try{return new URL(R,r)}catch{return console.error(`Invalid path ${R}`),u}},r,{equals:(u,R)=>u.href===R.href}),i=P(()=>s().pathname),a=P(()=>s().search,!0),o=P(()=>s().hash),l=()=>"",c=n2(a,()=>U2(s()));return{get pathname(){return i()},get search(){return a()},get hash(){return o()},get state(){return t()},get key(){return l()},query:n?n(c):H2(c)}}let l3;function C5(){return l3}function P5(e,t,n,r={}){const{signal:[s,i],utils:a={}}=e,o=a.parsePath||(C=>C),l=a.renderPath||(C=>C),c=a.beforeLeave||B2(),u=F3("",r.base||"");if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!s().value&&i({value:u,replace:!0,scroll:!1});const[R,h]=I(!1);let b;const S=(C,O)=>{O.value===p()&&O.state===$()||(b===void 0&&h(!0),l3=C,b=O,A4(()=>{b===O&&(y(b.value),L(b.state),x[1](H=>H.filter(t3=>t3.pending)))}).finally(()=>{b===O&&S4(()=>{l3=void 0,C==="navigate"&&X(b),h(!1),b=void 0})}))},[p,y]=I(s().value),[$,L]=I(s().state),f=F5(p,$,a.queryWrapper),d=[],x=I([]),g=P(()=>typeof r.transformUrl=="function"?Z3(t(),r.transformUrl(f.pathname)):Z3(t(),f.pathname)),w=()=>{const C=g(),O={};for(let H=0;H<C.length;H++)Object.assign(O,C[H].params);return O},z=a.paramsWrapper?a.paramsWrapper(w,t):H2(w),k={pattern:u,path:()=>u,outlet:()=>null,resolvePath(C){return F3(u,C)}};return K(n2(s,C=>S("native",C),{defer:!0})),{base:k,location:f,params:z,isRouting:R,renderPath:l,parsePath:o,navigatorFactory:M,matches:g,beforeLeave:c,preloadRoute:$3,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:x};function F(C,O,H){G(()=>{if(typeof O=="number"){O&&(a.go?a.go(O):console.warn("Router integration does not support relative routing"));return}const t3=!O||O[0]==="?",{replace:N,resolve:D,scroll:J,state:Y}={replace:!1,resolve:!t3,scroll:!0,...H},B=D?C.resolvePath(O):F3(t3&&f.pathname||"",O);if(B===void 0)throw new Error(`Path '${O}' is not a routable path`);if(d.length>=k5)throw new Error("Too many redirects");const j3=p();(B!==j3||Y!==$())&&(N2||c.confirm(B,H)&&(d.push({value:j3,replace:N,scroll:J,state:$()}),S("navigate",{value:B,state:Y})))})}function M(C){return C=C||d3(a2)||k,(O,H)=>F(C,O,H)}function X(C){const O=d[0];O&&(i({...C,replace:O.replace,scroll:O.scroll}),d.length=0)}function $3(C,O){const H=Z3(t(),C.pathname),t3=l3;l3="preload";for(let N in H){const{route:D,params:J}=H[N];D.component&&D.component.preload&&D.component.preload();const{preload:Y}=D;O&&Y&&F2(n(),()=>Y({params:J,location:{pathname:C.pathname,search:C.search,hash:C.hash,query:U2(C),state:null,key:""},intent:"preload"}))}l3=t3}}function E5(e,t,n,r){const{base:s,location:i,params:a}=e,{pattern:o,component:l,preload:c}=r().route,u=P(()=>r().path);l&&l.preload&&l.preload();const R=c?c({params:a,location:i,intent:l3||"initial"}):void 0;return{parent:t,pattern:o,path:u,outlet:()=>l?m(l,{params:a,location:i,data:R,get children(){return n()}}):n(),resolvePath(b){return F3(s.path(),b,u())}}}const O5=e=>t=>{const{base:n}=t,r=N3(()=>t.children),s=P(()=>Z2(r(),t.base||""));let i;const a=P5(e,s,()=>i,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(a),m(K2.Provider,{value:a,get children(){return m(M5,{routerState:a,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[q3(()=>(i=r2())&&null),m(T5,{routerState:a,get branches(){return s()}})]}})}})};function M5(e){const t=e.routerState.location,n=e.routerState.params,r=P(()=>e.preload&&G(()=>{e.preload({params:n,location:t,intent:C5()||"initial"})}));return m(W,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:s=>m(s,{params:n,location:t,get data(){return r()},get children(){return e.children}})})}function T5(e){const t=[];let n;const r=P(n2(e.routerState.matches,(s,i,a)=>{let o=i&&s.length===i.length;const l=[];for(let c=0,u=s.length;c<u;c++){const R=i&&i[c],h=s[c];a&&R&&h.route.key===R.route.key?l[c]=a[c]:(o=!1,t[c]&&t[c](),R3(b=>{t[c]=b,l[c]=E5(e.routerState,l[c-1]||e.routerState.base,v2(()=>r()[c+1]),()=>{const S=e.routerState.matches();return S[c]??S[0]})}))}return t.splice(s.length).forEach(c=>c()),a&&o?a:(n=l[0],l)}));return v2(()=>r()&&n)()}const v2=e=>()=>m(W,{get when(){return e()},keyed:!0,children:t=>m(a2.Provider,{value:t,get children(){return t.outlet()}})}),X3=e=>{const t=N3(()=>e.children);return b3(e,{get children(){return t()}})};function I5([e,t],n,r){return[e,r?s=>t(r(s)):t]}function N5(e){let t=!1;const n=s=>typeof s=="string"?{value:s}:s,r=I5(I(n(e.get()),{equals:(s,i)=>s.value===i.value&&s.state===i.state}),void 0,s=>(!t&&e.set(s),q.registry&&!q.done&&(q.done=!0),s));return e.init&&n3(e.init((s=e.get())=>{t=!0,r[1](n(s)),t=!1})),O5({signal:r,create:e.create,utils:e.utils})}function D5(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function B5(e,t){const n=e&&document.getElementById(e);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const V5=new Map;function U5(e=!0,t=!1,n="/_server",r){return s=>{const i=s.base.path(),a=s.navigatorFactory(s.base);let o,l;function c(p){return p.namespaceURI==="http://www.w3.org/2000/svg"}function u(p){if(p.defaultPrevented||p.button!==0||p.metaKey||p.altKey||p.ctrlKey||p.shiftKey)return;const y=p.composedPath().find(g=>g instanceof Node&&g.nodeName.toUpperCase()==="A");if(!y||t&&!y.hasAttribute("link"))return;const $=c(y),L=$?y.href.baseVal:y.href;if(($?y.target.baseVal:y.target)||!L&&!y.hasAttribute("state"))return;const d=(y.getAttribute("rel")||"").split(/\s+/);if(y.hasAttribute("download")||d&&d.includes("external"))return;const x=$?new URL(L,document.baseURI):new URL(L);if(!(x.origin!==window.location.origin||i&&x.pathname&&!x.pathname.toLowerCase().startsWith(i.toLowerCase())))return[y,x]}function R(p){const y=u(p);if(!y)return;const[$,L]=y,f=s.parsePath(L.pathname+L.search+L.hash),d=$.getAttribute("state");p.preventDefault(),a(f,{resolve:!1,replace:$.hasAttribute("replace"),scroll:!$.hasAttribute("noscroll"),state:d?JSON.parse(d):void 0})}function h(p){const y=u(p);if(!y)return;const[$,L]=y;s.preloadRoute(L,$.getAttribute("preload")!=="false")}function b(p){clearTimeout(o);const y=u(p);if(!y)return l=null;const[$,L]=y;l!==$&&(o=setTimeout(()=>{s.preloadRoute(L,$.getAttribute("preload")!=="false"),l=$},20))}function S(p){if(p.defaultPrevented)return;let y=p.submitter&&p.submitter.hasAttribute("formaction")?p.submitter.getAttribute("formaction"):p.target.getAttribute("action");if(!y)return;if(!y.startsWith("https://action/")){const L=new URL(y,V2);if(y=s.parsePath(L.pathname+L.search),!y.startsWith(n))return}if(p.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const $=V5.get(y);if($){p.preventDefault();const L=new FormData(p.target,p.submitter);$.call({r:s,f:p.target},p.target.enctype==="multipart/form-data"?L:new URLSearchParams(L))}}L3(["click","submit"]),document.addEventListener("click",R),e&&(document.addEventListener("mousemove",b,{passive:!0}),document.addEventListener("focusin",h,{passive:!0}),document.addEventListener("touchstart",h,{passive:!0})),document.addEventListener("submit",S),n3(()=>{document.removeEventListener("click",R),e&&(document.removeEventListener("mousemove",b),document.removeEventListener("focusin",h),document.removeEventListener("touchstart",h)),document.removeEventListener("submit",S)})}}function H5(e){const t=e.replace(/^.*?#/,"");if(!t.startsWith("/")){const[,n="/"]=window.location.hash.split("#",2);return`${n}#${t}`}return t}function W5(e){const t=()=>window.location.hash.slice(1),n=B2();return N5({get:t,set({value:r,replace:s,scroll:i,state:a}){s?window.history.replaceState(g5(a),"","#"+r):window.history.pushState(a,"","#"+r);const o=r.indexOf("#"),l=o>=0?r.slice(o+1):"";B5(l,i),o2()},init:r=>D5(window,"hashchange",h5(r,s=>!n.confirm(s&&s<0?s:t()))),create:U5(e.preload,e.explicitLinks,e.actionBase),utils:{go:r=>window.history.go(r),renderPath:r=>`#${r}`,parsePath:H5,beforeLeave:n}})(e)}var K5=A("<a>");function T3(e){e=b3({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=T2(e,["href","state","class","activeClass","inactiveClass","end"]),n=j5(()=>e.href),r=S5(n),s=A5(),i=P(()=>{const a=n();if(a===void 0)return[!1,!1];const o=u3(a.split(/[?#]/,1)[0]).toLowerCase(),l=decodeURI(u3(s.pathname).toLowerCase());return[e.end?o===l:l.startsWith(o+"/")||l===o,o===l]});return(()=>{var a=K5();return M3(a,b3(t,{get href(){return r()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!i()[0],[e.activeClass]:i()[0],...t.classList}},link:"",get"aria-current"(){return i()[1]?"page":void 0}}),!1,!1),a})()}var G5=A("<h1>Advent of Code 2025");function Z5(){return[m(D3,{children:"Advent of Code 2025"}),G5()]}const X5=e=>null;var J5=A("<h1>Page Not Found");function X2(){return[m(D3,{children:"Not Found"}),m(X5,{code:404}),J5()]}const J2=(e,t)=>{const n=[];for(let r=e;r<=t;r++)n.push(r);return n},Y5=(e,t)=>(e%t+t)%t,Z=(e,t)=>e+t,l2=(e,t)=>e*t,Q5=(e,t)=>t<e?t:e,Y2=e=>e.map(t=>t.join("")).join(`
`),Q2=(e,t)=>(e(),setInterval(e,t)),e1=(e,t)=>e.localeCompare(t),t1=(e,t)=>t.localeCompare(e),n1=(e,t)=>e-t,r1=(e,t)=>t-e,V3=(...e)=>(t,n)=>{for(const r of e){const[s,i]=r instanceof Function?[r,!1]:[r.cb,r.desc],a=s(t),o=s(n),l=typeof a=="number"&&typeof o=="number",c=i?l?r1(a,o):t1(a.toString(),o.toString()):l?n1(a,o):e1(a.toString(),o.toString());if(c!==0)return c}return 0},e4=e=>({desc:!0,cb:e}),t4=(e,t)=>{const n=new Set,r=[e];for(;r.length;){const s=r.pop();n.add(s),t(s).forEach(i=>{n.has(i)||r.push(i)})}return n},s1=`
R29
R6
L43
L6
R28
L42
L34
L32
L13
L15
R29
L50
R1
L26
L28
L16
L23
R11
L41
L37
R48
R21
L48
L15
L14
L2
L29
L30
R18
L6
R6
R7
R20
L23
L47
L11
L2
R34
L14
L7
L33
R10
R16
L9
R30
L49
R17
R35
L20
R49
L65
R65
R29
R10
R14
L54
L83
L75
L41
R44
L44
R54
R69
R43
R98
R36
R43
L43
R50
R50
L85
R61
R24
R97
L97
R96
R72
R32
R45
L45
R84
L84
R37
R63
L28
R13
L28
L39
L18
L21
R50
L69
L49
L21
R36
L26
L21
R5
L84
R41
R304
R29
L68
L6
R33
R89
L14
R718
L54
R74
L14
L32
L757
R62
R16
L21
L1
L99
L63
L829
R24
L32
L16
R95
L79
R14
R491
R7
L153
R3
L62
L247
R43
L770
R49
R30
R236
R770
L51
R41
R99
L90
R90
R36
R64
L95
R95
R25
R99
L94
R736
L314
R48
R11
L6
L5
R26
L26
L77
R77
L180
L20
L92
L8
L33
R33
L10
R10
R79
R73
L24
L70
L29
L69
L28
R68
R45
L12
R66
L26
R5
L478
L21
L679
L70
L99
L30
L1
R60
R38
L30
R32
L35
L12
L19
L789
L45
R33
L802
L75
L10
L21
L4
R44
R55
L940
L56
L9
L28
R77
L20
R10
R402
R233
L889
R60
L92
R5
L84
L78
L11
L86
L214
R59
R41
R22
L22
L28
L12
R24
R52
L41
L94
L32
L69
R34
R66
L49
L51
R9
R91
L68
R73
L81
R694
R15
R9
L9
L33
R86
R190
R320
L73
R12
R14
L95
L545
R36
L27
R94
R347
R56
L51
L64
R46
L73
R44
L17
L83
R2
L65
R46
L74
R35
L91
R36
L6
L780
R34
R74
L43
L85
R82
R18
L46
L26
L41
L89
L16
L39
R31
R8
L682
R359
R138
R63
L692
L12
R722
R38
L17
L99
R86
L886
L69
R69
L61
R33
R28
R29
R71
L937
L967
L96
L84
R95
R89
L49
R965
R84
R194
L11
L12
R29
R850
R50
R3
L703
L74
L26
R35
L135
R8
L71
R88
R31
R402
R42
R67
R81
L48
R84
R37
R390
R89
L77
R47
L85
L35
L7
R31
R26
R84
R16
L603
R17
R545
R76
L82
L16
L16
R612
R67
R793
R15
L8
L46
L27
L75
R94
L15
L62
L69
R37
L278
R41
R2
L21
L81
R13
R97
R43
L135
R98
R27
L26
R83
L94
R940
L340
R39
R55
L58
R58
R10
R21
R78
L328
R119
R30
R66
L740
L84
R90
L62
L92
L8
L38
R138
R375
R33
L8
L40
R11
R25
L28
L68
R17
R52
R75
L444
L92
L337
R29
R386
R14
L48
L52
R44
L22
L22
L531
R52
R35
R58
R48
L62
R59
L75
R17
L1
L7
R36
L11
R71
R11
L99
L554
R76
R51
L18
R44
L94
L6
R639
R37
R72
L84
R12
R72
L64
R16
R35
R765
L92
R92
R24
R14
L38
R523
R84
L698
R591
R74
L649
R75
R82
R80
R538
L32
R84
R79
L328
R823
R974
R96
R668
R55
R29
R52
R45
L45
L64
L36
L696
R96
R65
R56
L94
L27
R26
R74
R77
R823
L32
L3
L843
R78
L54
R75
L81
L88
R948
L17
R44
R73
R87
L6
R93
L71
R47
L12
R963
L51
R83
L90
R14
L57
R19
R92
R189
R93
L93
R75
R25
R31
R524
L984
L71
R68
R85
L53
R209
R86
R5
R21
L27
R97
R248
L58
R65
L32
R84
R76
R26
L10
L290
L68
R68
R8
R79
R23
L410
L993
R46
R715
R32
R18
L10
L749
R241
R286
R14
R63
R97
L60
R92
L392
L91
R91
L1
R11
L49
L61
L36
L90
L74
L38
R38
L8
L69
L89
R35
R31
R97
R63
R40
R11
R93
R980
R64
L548
L62
R62
R80
R78
L39
L19
R996
R862
L536
L64
R13
L51
L50
L70
L59
L920
L321
R81
R19
L85
L10
L27
L54
R76
R84
R79
R46
R376
L17
R94
L79
R317
L9
L91
L80
L920
L52
L48
L28
L72
L20
L745
L24
R89
L37
R137
R161
L361
L22
L848
R70
R73
L79
L94
L37
L583
L80
L537
R637
L6
L94
R698
L976
R78
R4
R773
L77
R12
R43
R18
L73
R85
L756
L44
R21
R82
L623
R3
R90
L4
L13
L91
L350
L54
L46
L70
R27
L62
R501
L32
L64
R3
R68
L71
L769
R31
L62
R812
R57
L69
L62
R43
R558
R61
L177
L83
R760
L36
L66
R50
R53
L35
L569
R39
L36
R57
L57
L55
L31
R32
R54
R99
R89
L88
R45
R55
R35
L90
R716
L14
L647
R74
L379
L27
L85
L333
R650
L1
L99
L80
L44
R54
R70
L2
R2
L8
R964
L62
R106
L71
R22
R20
L63
L49
R47
L6
R59
L27
R68
R32
L89
L13
L79
R41
L92
R51
R49
R11
R689
L12
R12
L71
L61
L875
L81
L12
R908
L8
L38
R38
R56
R62
R933
R49
L2
L326
R28
R773
L71
R282
L165
L22
L97
L788
L50
R814
L10
R34
L88
R95
R743
R577
R92
L71
L48
R44
L44
L3
R3
R71
L690
R19
L8
R31
L38
L49
L558
L46
R988
L1
R22
L41
L89
L635
L80
R88
L58
R56
L68
R86
R76
R24
L98
R82
R270
R227
R79
L65
R16
L11
L4
R17
R82
L95
R31
R92
R97
R80
L13
L92
R65
L60
R51
R49
R38
L38
L84
L716
R21
L721
R59
R741
R59
L75
R8
L192
R599
L99
R10
R90
L676
R76
L745
L55
L349
L73
L78
L40
R43
R42
L46
R87
R76
R68
L30
R79
R23
R98
L10
R54
R59
L81
L74
R49
R34
L825
R52
R242
R58
L58
R89
R28
L17
L35
R83
L13
R65
L72
R72
L98
R34
L49
R13
L9
R9
R14
L73
L41
L81
R81
L18
R818
L21
R21
R69
L4
L34
L4
R91
R42
L461
R559
L58
L60
R24
R36
L46
R33
R766
L53
L839
R39
R37
L937
R59
R41
L29
L81
L90
R832
L40
R8
R87
L694
R7
R64
R90
R43
L97
L11
R911
L75
R175
R5
L22
L83
L449
R662
L13
L61
L50
R77
L21
R55
L62
R36
R34
R14
L49
R21
L673
R72
L93
R84
R16
L59
L41
L75
L46
R52
R83
R7
L21
L48
L22
R70
L78
R778
R50
R71
L25
R83
R21
R47
L198
L28
R503
L85
R623
R50
R88
L624
L896
R20
R94
L94
R84
R16
R12
R288
L77
R5
R27
L3
L203
R51
L23
L508
L13
L10
R54
L1
R1
R48
L9
R34
L94
R21
L81
R968
R13
R91
L91
R48
L15
R499
L34
L98
R167
L19
R76
L22
R98
L48
R48
R43
L2
L29
R12
R24
R35
R17
R90
L90
R917
R39
L71
L885
R35
L35
R47
L88
L55
L33
L571
L389
R3
R47
R29
L59
L28
R56
L259
R405
R95
L4
R93
L89
R67
L93
L269
L47
L58
R54
L60
R6
L40
R91
L51
L79
R804
R74
L46
R16
L80
L46
L43
L90
R25
L35
R78
L78
R48
L98
R723
R27
R71
R42
R87
L341
L59
R29
R4
R64
R42
R68
L79
L9
R54
L618
L71
R916
L97
L3
R10
L10
L37
L58
L46
R28
L66
L63
R33
R770
L4
R43
L26
R59
R83
R84
R18
L35
R23
R94
L85
L15
R52
R60
L332
L98
L51
L29
L47
R5
L60
L5
R705
R7
R10
L5
L77
L60
R83
R542
L2
R2
R29
R71
R79
R292
L49
R18
L99
R459
L13
R13
L91
L7
L2
L44
R44
L98
L643
L40
L19
L40
L12
R52
R26
R18
L41
L3
R64
L64
R841
L164
L437
R60
L87
L10
R865
R84
L952
L4
R4
L62
R34
L18
R37
R76
L37
L30
L86
R84
R83
R19
L82
R82
R398
R2
R19
R81
R82
R290
R80
L52
L5
L95
L87
L37
R24
L60
R60
L71
L29
L32
R32
R66
L47
L21
R902
L18
L12
R30
L43
L22
R39
L74
R62
R38
L77
L22
L662
R46
R15
L31
L69
R47
L575
R82
L54
L36
L40
R76
R70
R30
L93
L27
R20
L28
R14
L822
L53
L11
L46
L54
R57
L157
R347
R96
L88
R45
R11
L81
L35
L88
R66
R68
R36
L83
L78
L98
L18
R42
L680
R273
L66
R31
R81
L75
L52
R94
L5
L43
R1
R52
L49
L69
R229
L650
L95
L19
L490
R92
R50
R25
L77
L2
R55
L87
R34
R99
R101
R225
L225
R181
R86
L67
L14
L44
R58
L72
R36
L57
R693
L55
R255
R857
L57
L41
L59
L66
L603
R69
L66
L81
L45
L94
R85
L999
R84
R58
R58
L44
R53
L17
L11
L81
L868
L932
L72
R43
R6
L77
L29
L25
L64
R82
L21
L43
L1
R54
R398
L14
R46
R17
R16
L80
R64
L362
L53
L74
R18
L29
R47
R77
R83
R95
R898
R27
R97
L89
L37
L84
L14
L99
L5
R41
L910
R73
R33
L37
L96
R94
R6
L14
R43
R90
R57
R6
R18
R68
R419
R21
L23
L85
L51
L12
L37
L70
R485
L44
R95
R34
R51
L351
R64
L64
R130
L309
L821
R64
R27
R109
R33
L33
R59
R69
L29
L55
L416
L55
R90
L63
R42
L942
R658
R70
L28
R2
L402
L48
R90
R58
L332
L43
L4
L85
R46
L682
R65
R35
L22
L30
L5
R57
L22
R522
R781
R519
L830
L259
L11
L53
L3
L99
L41
R11
L83
R568
L88
L512
L78
L96
L44
R18
R6
R94
R618
L244
L74
L10
R66
R87
R27
L70
L50
L90
L62
L27
L85
R70
R441
L97
R23
R84
R473
L44
L379
L6
L541
L42
L34
R451
L16
R88
L30
L27
L3
L86
L66
R1
L37
R737
L64
L57
L844
R19
L53
L9
R682
L20
R51
L51
L84
L6
R93
R52
R45
L692
R68
L67
R944
R824
R23
R943
R67
L27
L196
R23
R84
L91
L447
L793
L211
R48
L134
L66
L50
L50
L778
L49
L5
R48
L16
R191
R75
R22
R98
R652
R62
R22
L690
R68
L9
L7
R16
L93
R93
R945
R55
L86
R68
L25
L27
L7
L23
L93
L64
L166
L76
R99
L13
L31
R10
L24
L51
R89
R20
R16
L16
R15
R19
R79
R48
L339
L22
L742
R621
R21
L24
L18
R13
R29
R18
L16
L2
L19
L421
L78
L82
L12
R12
R36
R61
L97
R88
L99
R75
R36
L19
L81
R49
R22
L73
L33
R35
L88
L12
R31
R39
L70
L73
L27
R32
R186
R67
L797
L601
R57
L46
R36
L48
R14
L45
L12
L43
L867
L44
L89
R30
R865
R305
R42
L481
R39
R508
L990
L15
R570
L898
L4
R29
R56
R724
R40
L120
L33
R831
L27
R29
L51
L349
L91
L94
R65
R220
R8
L65
R57
L6
L94
L32
L68
R67
R33
R711
R96
L807
R9
R76
R315
L69
L31
R88
L61
R87
R86
R32
L48
R10
L13
R51
L27
L58
L74
L47
R69
L39
R34
L85
R289
L54
L49
L771
R50
R279
R60
L9
R37
L76
L776
L47
R57
R87
R85
R33
R663
L781
L43
R51
R759
L15
R631
L465
R67
L15
L252
L266
R66
L18
R818
R684
L19
R235
L46
L46
L5
R77
R20
L85
L1
L27
R6
L67
R74
L58
R77
L79
L7
R24
R79
L25
R54
L8
R6
L794
R82
L86
L65
L24
R224
R9
R91
L24
R824
L458
R58
L934
L19
L62
L85
L82
L18
L68
L353
R35
L14
R35
L35
R62
R4
R59
L15
R42
R48
R49
R51
R86
R55
L85
L90
L83
L89
L451
L23
L68
L52
L78
R48
R746
L16
R604
R658
L62
R40
R223
L86
R23
R20
L56
L683
L81
R227
R71
L279
L33
L80
R12
R82
R880
R20
R17
R83
R821
R79
R59
R72
L42
L93
L96
R378
L78
R89
L89
R65
L465
L80
L20
L811
R57
L67
R21
L62
R390
R70
L57
L41
L7
L93
R74
R93
L70
R3
R54
R96
R50
L47
L53
L124
L45
L65
R34
L25
R31
R994
R34
L20
L514
L198
R98
L50
R50
L502
R97
R91
L47
L25
L14
R57
R43
L42
L40
R282
R26
L26
R64
L64
L57
L35
R14
L22
R60
R813
L57
R53
R187
R632
R4
L86
L67
L63
L41
L11
R976
R44
R141
L85
R34
L34
R15
L9
R88
L57
R92
R171
L54
L34
R364
L23
L19
L16
L46
R40
R4
R52
L68
R78
L24
R46
R4
L4
R311
R89
R46
L646
L66
R2
R5
R78
R45
R704
L57
L77
L34
L95
L42
L95
R32
R60
L74
L26
L60
L814
L71
L15
R68
R68
L57
L79
R975
R99
L31
R66
R91
R39
R521
R40
R155
R332
R11
R8
L40
L33
L38
R48
L71
R61
R67
L26
R21
R67
R38
L56
L44
R23
R677
R11
L6
R440
R6
R72
R66
R43
L66
R37
L76
L27
L50
R50
R75
L97
L26
L89
R37
R45
L29
L16
L12
R85
L90
L183
R10
L10
R76
L93
L783
R40
L231
L78
L229
R98
L85
R63
R48
L26
L74
L80
R106
L52
R475
R25
L813
R93
L78
R30
R68
L36
L44
R82
L81
R52
R26
R94
R11
R96
R66
R12
L42
R27
R35
R74
L625
L96
L55
L31
R35
R73
R46
R587
R94
R19
L19
L46
R393
L39
R91
R44
L99
R20
R77
R17
L82
R454
L85
L133
L57
L863
R8
L39
R15
R21
L155
R80
L485
R63
L50
R79
R971
R405
R42
R59
R994
L202
L10
R42
R391
R801
R82
R76
L52
L64
R444
R90
L97
L756
R38
R1
L84
L82
R82
R70
L852
R19
L6
R75
R25
R57
R13
L83
L18
L2
L698
L67
L33
L308
L946
L46
L28
R28
L803
L91
R94
R28
R22
R50
R91
L73
R20
R723
L40
L21
L76
L52
L72
L364
R64
L987
R87
L20
L60
L20
R78
L353
L25
R85
L73
L12
R70
L470
L26
R26
R96
R53
L49
R439
L14
L14
R1
R96
R992
R29
R71
R468
L93
L19
L26
L25
L91
R86
R118
R82
L17
R450
R7
L440
L628
L52
R80
L25
L33
L42
L559
L929
L67
R97
L54
L88
R83
L14
R80
R851
R41
R58
L399
R625
L97
R7
R65
R75
L675
L75
R75
R372
L74
L68
L30
L84
R84
L79
L921
L91
L553
L41
R85
L42
R71
R71
R54
R699
R96
L41
L8
R12
L34
L90
L93
L53
L38
L42
R38
L41
L98
R89
R50
R396
R42
R62
L9
L112
R75
L54
L49
R20
R71
R585
L22
R10
L614
R1
L221
L65
L307
L9
L447
L925
L63
L65
R99
L99
L39
R346
L207
R58
L758
R37
R766
L638
L525
L40
L9
L85
L596
L706
L19
L22
L91
L14
L25
L20
L713
R343
L43
R2
L68
R41
R68
R22
L333
R968
R80
L63
L73
R56
L89
R889
L317
R17
L62
R129
R780
L64
L94
R11
R78
R78
L67
L8
R37
L70
R12
R62
L922
L28
R33
R95
R20
R80
L80
L40
R69
L49
L46
R61
L15
R20
L20
L81
R81
R89
R11
L65
L75
L50
L10
L78
R78
R38
R94
L732
R914
R86
L79
L21
L11
R107
R704
R54
R46
L669
L79
R130
L82
L28
R628
L63
L18
L19
R26
R74
L13
R13
L65
R9
R756
L33
L67
L178
R298
L914
L91
L915
R25
L31
R20
R51
R517
L82
L16
R85
R31
R35
L35
R91
L43
L67
L81
R888
L5
L18
L76
L757
L32
R99
R92
R9
R489
L89
L20
R120
R54
L77
L41
L39
L97
L64
L6
L30
L27
L47
L26
L867
R67
R123
L23
R77
R980
R69
L94
L84
L48
R446
L19
R24
L51
R13
R187
R555
R545
R97
L63
L639
R105
L95
L45
R40
R99
L16
R17
R538
R53
L123
L873
L95
L46
R46
R7
R622
L348
R33
L76
L38
R82
R829
L34
L29
L48
L453
L25
R78
R986
R14
R17
R13
L55
R625
L8
L92
L23
R23
L56
R56
L53
R732
L10
L4
R28
L93
R60
L60
R82
R14
R98
R813
L380
L1
L426
L80
R28
L48
R47
L49
R2
L69
L31
R897
R47
L7
L37
L413
R30
L65
R55
R457
R83
L590
R16
R96
L99
R92
L11
L51
R541
R59
R664
R16
R3
R742
L70
L95
R238
L598
R743
R57
L83
L3
R86
L35
R35
L89
R98
L9
L27
L474
R7
R94
R13
L75
R27
L28
L17
L17
R56
L4
R8
R76
R61
R1
L1
R20
R80
L15
R49
L67
R33
L4
R4
L9
R9
R252
L52
R83
L83
R598
L98
L89
L256
R90
R72
R92
L9
R74
L396
L84
L86
R230
L99
L47
R8
L78
L6
R38
R46
L39
R98
R66
L25
L31
R26
L995
L11
L85
L123
L32
R954
R7
R25
L779
L71
L498
L87
R93
R467
L81
R6
L895
R281
L634
L21
R184
L79
R305
L758
R736
L46
L7
L673
L3
L77
L98
R36
R85
R20
R5
L28
L18
L47
R47
L12
R12
L837
L96
R33
R49
L890
R6
L65
R93
L2
L24
L55
L35
R48
L63
R38
R37
R325
R126
L94
R6
L91
R919
R460
L94
L631
L63
R20
R6
R473
L55
L51
L636
R143
L692
R92
R444
L16
R52
L6
R40
L596
R23
L58
L83
R802
R98
L67
L62
L13
R28
R229
R547
R695
L57
R87
L47
R60
R65
L87
L278
R76
R24
L79
R823
L83
R2
L27
L5
L31
R19
L339
L80
R63
R37
R92
R755
L30
L97
L686
R49
L83
R84
R16
L27
L58
L24
R9
L48
L716
L13
R30
R47
R30
R13
R43
L34
R748
R134
L25
R54
R37
L60
R22
R38
R69
L75
L81
L13
L3
R22
R96
L68
R15
L62
L65
L835
R36
R64
L20
L80
L70
R70
L22
L878
L38
R38
L63
L13
L158
R34
L43
R43
L29
L244
R73
R952
L52
R14
R35
R53
L2
R50
L538
L59
L53
R40
R38
R22
R396
R66
R38
R764
R36
R19
L496
L23
R33
R65
L989
R699
L89
L34
R59
R53
R80
R59
L36
R41
R73
R79
R70
R27
L90
L62
L38
R27
L16
R830
L90
R479
L14
R81
L30
R831
L98
R819
R81
R89
R41
L14
R82
R702
R60
L60
L1
L7
R8
L88
R788
L999
R20
L24
R80
R23
L58
R58
R43
L143
L680
L45
L51
R88
L44
R71
R960
L99
R336
R6
L891
R14
R34
R4
L3
R217
R78
L302
L329
L264
R835
R34
L53
R5
L99
R9
R386
R494
R24
L77
R42
L382
L634
L84
L36
L64
R86
L93
L626
L343
R96
L20
R65
R33
L98
R68
L67
R8
R91
R43
L46
R303
R2
L2
R26
L90
R57
R307
L17
R717
R731
L31
L206
R6
L284
R84
R92
R8
R1
L1
R188
R89
L55
L22
L98
L2
R93
R77
L52
R48
R5
L71
L80
L97
R40
L345
R82
R27
R3
R59
R11
L48
L352
R23
R209
L930
L102
R34
R70
R96
R15
R50
L78
R59
L46
L73
L27
L28
L272
L35
R16
R19
L78
R278
R76
R22
L98
R91
R24
L307
R92
L29
L20
L71
R87
L438
R534
L63
L778
R16
L838
R664
L84
L221
R8
L367
R630
L33
R34
L61
R30
R48
R52
R12
R58
R30
R64
R732
L50
L21
R47
L372
L75
L959
L66
L848
R629
L81
L792
R92
R4
L4
L64
L99
L37
R51
R749
R854
R146
L89
R10
R48
R11
R620
R226
L624
L81
L21
R26
L96
R93
L58
R63
R19
L510
L7
L68
R83
L25
R86
L306
L22
R67
L45
L86
R614
R31
R268
L3
R86
R290
L83
R87
L90
L741
R9
L90
L44
R27
L275
R7
L7
L76
R76
L78
L71
L51
R15
L43
R62
R66
R25
L3
R78
L13
R77
L64
L65
L16
L39
R4
L14
L56
L81
L33
R39
R56
L95
L77
R28
R19
L174
L58
R50
L88
R4
R21
L72
R401
R13
L99
R39
L607
L698
L84
L723
R94
R39
L57
L39
L98
R266
R98
L46
L547
R63
R32
L90
L10
L86
R76
L64
L434
L92
L70
L39
L92
R1
L77
L39
L95
R911
R5
L803
L19
R29
R118
R90
R880
L65
R678
R87
R11
R89
L51
R51
R12
L364
R652
R245
R55
L1
L72
R142
L34
L757
L78
L333
R33
R70
R30
R42
L342
R96
R85
L81
L455
R39
L18
R98
R21
R49
L34
R25
R75
R64
R71
R89
R76
R5
R30
R65
R90
R33
L23
R9
R22
R536
R669
R64
L22
R53
L66
L65
R88
R12
L49
R11
R16
L989
R11
L89
R41
R73
R75
L476
R731
L455
R1
L51
R50
L61
R86
L29
R804
R45
L45
R695
R55
L66
L93
L291
R71
L40
L131
R16
L4
L894
L61
R80
R63
R431
R169
R68
R46
R86
L66
L34
L46
R46
R15
L15
R9
L30
L79
R49
R951
R15
L15
L75
L20
L3
L502
L27
R56
R3
R83
L15
R79
R23
R5
L7
R856
R44
R397
L92
R68
L39
L34
R67
R38
R95
R54
L64
L8
L98
R67
R15
L460
L44
R38
R126
R90
R57
L30
R33
L76
R8
L63
L45
R92
R8
R74
R26
R37
L73
L17
L20
L27
L79
L340
R68
R26
R25
R65
L65
R146
R21
L25
L934
L88
L520
R36
L36
L76
L24
R25
L25
L65
L22
L57
L44
R18
R670
L61
R61
L49
L65
L86
L46
L22
R6
R162
R497
L46
L51
L95
R55
R40
R796
L4
R36
L28
R18
L18
R43
R29
L72
R42
R358
R67
L1
R34
L31
R31
R86
R72
L69
R89
R28
L370
L3
R67
R53
L25
R75
L47
L776
L358
L4
L53
L47
L418
L88
L12
L954
R193
R661
R71
R44
R68
L14
L369
R38
L140
R37
L35
L23
R3
R20
L64
R70
L6
L51
R285
R89
L53
R83
L453
L810
L1
R602
L3
L88
R96
L17
L379
R95
R29
R55
L79
L282
R40
R42
R439
L74
L56
R52
R78
L39
R96
R77
L873
L41
L50
R91
L48
L361
R59
R12
L71
L822
L85
R90
R26
R50
R3
R12
L765
L98
L58
R68
R83
L8
L82
R58
L68
L94
L33
L80
L588
R1
L101
R29
R59
L151
L37
L69
R40
R29
L383
L58
L95
L264
L26
R79
L88
R5
L37
L98
R65
L26
L58
L16
R67
R366
R991
R39
R37
R34
L91
L143
R58
R46
R96
L833
R820
L733
R46
L142
L683
R25
L86
L56
R65
R83
R27
L16
L1
L16
R3
R36
R361
R42
L52
L90
L93
R49
R44
R91
L91
R65
L65
L577
L953
L754
R98
L83
L577
L54
L686
L921
R7
L31
R81
R930
L52
L14
L714
L99
L401
R64
L359
L18
L79
L16
R8
L33
L67
R11
R4
L649
L392
R73
L254
R85
L78
R52
L67
R33
R99
R83
L33
R833
L43
L94
L70
R7
R548
R53
L4
R12
L12
R458
R45
L97
R95
R2
L36
R36
L80
R516
R97
R23
L43
R58
R257
R19
L79
L63
R95
L34
L17
L7
L81
L61
R87
R13
R65
R72
R5
R95
L74
R768
R3
L13
L50
R81
R96
R51
R1
L82
L18
L1
R952
R2
R964
L13
R96
L93
R28
R79
L975
L10
R571
L40
L33
L410
R501
L53
L86
R4
R17
R98
L47
R94
L45
L3
R3
R9
L53
L56
R454
L32
R78
R68
R927
L595
R186
R219
R85
L690
R52
L49
R97
L40
R40
R61
R339
L54
R54
L25
R120
R5
R79
R21
R52
L63
R55
R94
L838
R84
L67
L37
L45
L756
L6
L15
L58
L39
R39
L52
L48
R59
R84
R57
L601
R446
L22
R27
R50
L83
L17
L43
L30
R11
R9
R28
L10
R16
L994
L87
R509
L39
R68
R24
R326
L788
L84
L662
R80
R67
R231
L32
R47
L75
L5
R34
R14
L24
L25
L14
R65
R34
L678
L673
L92
R54
R95
L64
R59
L77
R34
L16
R42
L533
R53
L659
L96
L59
R63
R96
R819
R81
L35
R93
L58
R54
R43
R3
L1
L70
L60
L1
L97
L71
R24
R68
R48
L14
R74
R51
R49
R27
L18
R59
L68
R133
L36
L97
L35
L30
R54
L38
R67
L46
L61
L740
L55
R915
R551
R18
R88
R12
R77
R23
L47
L45
R15
L144
R43
L85
R48
L85
L67
L33
L70
L99
L45
L5
L70
R39
L50
L98
R329
L67
R36
R47
L47
L98
L437
R63
R86
R86
L55
L45
R74
L56
L6
L6
L97
R715
L24
L12
R73
L59
L2
L7
L93
R53
R47
L499
L3
L77
R27
L3
L12
L33
R52
R30
R18
L39
R4
L665
R56
L77
L90
R711
L77
L65
R547
R895
L41
L59
R42
R32
R726
R27
L564
R65
R94
L297
L25
L10
L89
R99
R1
R99
L58
L71
R95
L66
R29
R72
L1
R19
L994
R604
R71
L72
L11
R21
L83
R954
L9
L541
L59
R58
L66
L92
R67
L67
L11
R70
L268
R63
R59
L74
L39
L66
R66
L567
L33
L698
R437
L894
L645
L6
L28
L66
L9
R44
L603
L32
R69
L69
R70
L970
L59
L41
R92
L8
L77
L7
L29
L271
L88
L48
R12
L99
L77
L32
L68
R9
L9
L69
R48
L476
R897
L88
L49
R40
R897
L355
R655
L11
L16
L73
L92
L8
L88
R88
R28
L82
R54
L69
R69
R94
R43
R88
L117
L8
L7
R81
L86
R24
L782
L79
R88
L918
L21
R356
L56
R96
R98
R706
R81
L81
R19
L519
L724
R97
R27
L20
R56
L9
R454
R19
L70
R64
L94
R37
R63
R69
L625
R56
R19
R481
L52
R52
R42
R1
R90
R67
R35
R612
L747
L50
R50
L17
L83
L71
L29
L38
L71
R9
L69
L177
R48
L2
L10
L26
R36
L74
L26
L17
R43
L726
L734
R37
L3
R45
L88
R76
R67
R36
R37
R84
L78
R21
R34
R66
R81
L75
L606
L466
R21
R35
L90
L94
R94
R5
R901
L6
L414
R70
L92
L12
L53
R205
R896
R59
L60
R1
R232
L932
R454
R2
L56
R943
L1
R594
R64
R3
R363
L34
L32
R22
R97
L19
R42
L42
L17
L49
R462
L1
L716
L79
R12
L24
R12
L398
R898
R3
R97
R57
L73
R52
R43
R6
R15
L70
R68
R35
R41
R26
L57
L44
R93
R8
R95
R5
R57
L14
L29
L84
L35
L937
R92
L20
L75
L55
R74
R26
L18
R18
R5
R60
L65
L142
L23
R684
L19
R34
L34
R65
L467
L98
R48
L35
L150
L74
R11
R74
L61
R9
R378
R41
L44
L85
L8
L20
L96
R12
R61
L99
R37
R32
R27
L33
R75
L97
L63
L353
L78
L44
L14
R549
R53
R24
L77
R84
L84
R31
R14
L57
L88
L53
L47
L754
L46
L9
L3
L601
L87
L556
L33
L411
L11
L89
R276
L276
R94
R354
L47
L82
R84
L76
R28
R609
R39
R510
L13
L76
L80
L993
R725
R81
L32
L25
R78
L78
L709
L97
L85
L75
L279
L42
R50
R7
R30
R481
L81
R39
L85
L54
L55
R55
L73
L38
L389
L899
L1
L515
L85
R711
L72
L11
L72
L59
R94
R9
R88
L88
L90
R25
R15
R50
R84
R93
L4
L63
L10
R424
R968
R31
L23
L29
R666
R32
R3
L72
L59
R59
L19
L335
L89
L77
L42
R62
L9
R93
R66
R24
R31
L5
R47
R14
R23
R16
L513
R88
L75
R14
R94
L68
L56
R16
L853
L17
L80
L67
L24
R89
L58
R310
R59
L135
R41
R35
R560
R40
R29
L51
R404
R28
R15
L25
L946
L54
R59
L51
R226
R40
L537
R51
R34
R20
R58
L36
L22
R58
L52
R552
R41
L632
R81
R10
R42
L27
R13
R69
R50
L47
R48
L70
R85
L5
R42
L44
L56
R47
R53
L8
L85
L84
L96
L227
R347
R58
L5
L62
L56
L82
L663
R20
R943
R45
R215
R40
L67
R38
L506
R37
L2
L10
L59
R819
L10
L91
L14
L992
L25
L424
L970
R76
R43
L83
R12
L72
L774
L39
R13
R42
R4
R79
R521
L46
L95
R54
L159
R67
R33
L181
R97
R584
L20
R25
R33
R62
R78
L730
L448
R43
L47
R204
L7
R79
R39
L12
R1
L18
L82
R74
R33
L45
R45
L886
L75
R1
R57
L4
L51
R451
R53
L54
R1
R19
R81
L503
L70
R44
R3
L29
L42
R97
L11
R56
R55
R50
L66
L84
R31
L31
R822
L28
R436
R70
R71
L59
R30
R56
R2
R6
L6
R32
L19
R187
R989
R11
L1
L73
R31
R453
R60
L92
R64
R63
L5
L88
L12
L495
L5
R10
L510
R76
L489
L87
R80
L80
L16
L84
L21
R48
L1
L25
L3
L15
L83
L620
R420
R92
R18
R60
R29
L812
L50
L56
R70
R49
L3
L97
R59
L40
L763
R87
L95
R52
L77
R271
L94
L52
R70
R50
R32
L46
R3
L57
R14
R35
L49
R58
R158
R18
L38
L96
R73
R70
L43
R881
L250
R37
L16
L79
R27
R63
R830
R64
L50
R93
R7
R94
L1
L63
R14
R6
R38
R303
L26
L972
R37
R17
R46
L33
R33
L21
R413
L92
R95
L95
L83
R37
L76
L78
L66
L734
R74
R615
L58
L94
R84
L47
L630
L99
L45
R22
R78
L963
L37
R56
R44
L5
L858
R63
L76
L24
R82
L96
R82
L25
R771
R86
L54
L46
R73
R27
L23
L67
R61
R29
R132
R608
R92
L22
L10
R79
L79
L6
R706
L49
R46
L1
R4
L7
R33
L8
R85
L821
R6
L64
L974
L16
R14
L48
L50
L28
L72
L50
L76
R3
R413
L40
L61
L43
R4
L68
L7
R62
R31
R1
L19
L63
R25
L90
L92
L73
L5
R31
R26
L97
R38
L73
L4
L13
L10
R83
L2
R19
L27
L70
L96
R20
L27
R91
R91
L37
L50
L95
R58
R42
L96
R51
R31
L86
R41
R79
L76
L83
R39
R45
R46
R8
L50
L40
R31
R3
L6
L33
R25
R7
R30
L10
R48
L44
R15
L49
L34
L44
R3
R32
R16
L28
L50
L19
R42
R49
R27
L40
L20
R3
L11
L35
R11
R44
L29
R20
L16
R50
L14
L17
L27
L3
R19
R24
R42
R45
L2
R27
L41
L46
R16
R30
R2
`.trim();var i1=A("<svg stroke-width=0>");function r3(e,t){const n=b3(e.a,t),[r,s]=T2(n,["src"]),[i,a]=I(""),o=P(()=>t.title?`${e.c}<title>${t.title}</title>`:e.c);return f3(()=>a(o())),n3(()=>{a("")}),(()=>{var l=i1();return M3(l,b3({get stroke(){return e.a?.stroke},get color(){return t.color||"currentColor"},get fill(){return t.color||"currentColor"},get style(){return{...t.style,overflow:"visible"}}},s,{get height(){return t.size||"1em"},get width(){return t.size||"1em"},xmlns:"http://www.w3.org/2000/svg",get innerHTML(){return i()}}),!0,!0),j(l,()=>N2),l})()}function o1(e){return r3({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M15 18 9 12 15 6"/>'},e)}function a1(e){return r3({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M9 18 15 12 9 6"/>'},e)}function l1(e){return r3({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>'},e)}function u1(e){return r3({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3 21 3 21 9"/><path d="M10 14 21 3"/>'},e)}function L1(e){return r3({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><path d="M1 1 23 23"/>'},e)}function c1(e){return r3({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><path d="M12 9A3 3 0 1 0 12 15 3 3 0 1 0 12 9z"/>'},e)}function R1(e){return r3({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M3 12 21 12"/><path d="M3 6 21 6"/><path d="M3 18 21 18"/>'},e)}function f1(e){return r3({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M23 4 23 10 17 10"/><path d="M1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>'},e)}var d1=A('<span class=answer-container><strong></strong><button type=button class="btn btn-compact">');function T(e){return(()=>{var t=d1(),n=t.firstChild,r=n.nextSibling;return j(n,()=>e.children),r.$$click=()=>navigator.clipboard?.writeText(e.children?.toString()??""),j(r,m(l1,{size:24})),t})()}L3(["click"]);var x1=A("<p>The password to open the door is <!>."),g1=A("<p>The password to open the door using 0x434C49434B is <!>.");const n4=()=>s1.split(`
`).map(e=>e.match(/(?<dir>[LR])(?<num>\d+)/iu).groups).map(({dir:e,num:t})=>e==="L"?Number(t)*-1:Number(t)),r4=(e,t=!1)=>{let n=50,r=0;for(let s of e)t&&(r+=Math.floor(Math.abs(s)/100),s%=100,n>0&&(s>0&&s+n>100||s<0&&s+n<0)&&r++),n=Y5(n+s,100),n===0&&r++;return r};function h1(){const e=r4(n4());return(()=>{var t=x1(),n=t.firstChild,r=n.nextSibling;return r.nextSibling,j(t,m(T,{children:e}),r),t})()}function p1(){const e=r4(n4(),!0);return(()=>{var t=g1(),n=t.firstChild,r=n.nextSibling;return r.nextSibling,j(t,m(T,{children:e}),r),t})()}const m1=Object.freeze(Object.defineProperty({__proto__:null,Part1:h1,Part2:p1},Symbol.toStringTag,{value:"Module"})),y1=`
3335355312-3335478020,62597156-62638027,94888325-95016472,4653-6357,54-79,1-19,314-423,472-650,217886-298699,58843645-58909745,2799-3721,150748-178674,9084373-9176707,1744-2691,17039821-17193560,2140045-2264792,743-1030,6666577818-6666739950,22946-32222,58933-81008,714665437-714803123,9972438-10023331,120068-142180,101-120,726684-913526,7575737649-7575766026,8200-11903,81-96,540949-687222,35704-54213,991404-1009392,335082-425865,196-268,3278941-3383621,915593-991111,32-47,431725-452205
`.trim();var b1=A("<p>The sum of all invalid ids is <!>."),v1=A("<p>The sum of all invalid ids using the new rules is <!>.");const s4=()=>y1.split(",").map(e=>e.split("-")).map(([e,t])=>({from:Number(e),to:Number(t)})),i4=(e,t,n=!1)=>{const r=[];for(let s=e;s<=t;s++){const i=s.toString(),a=new RegExp(`^(\\d+)\\1${n?"+":""}$`,"gu");i.match(a)&&r.push(s)}return r};function w1(){const e=s4().flatMap(({from:t,to:n})=>i4(t,n)).reduce(Z);return(()=>{var t=b1(),n=t.firstChild,r=n.nextSibling;return r.nextSibling,j(t,m(T,{children:e}),r),t})()}function k1(){const e=s4().flatMap(({from:t,to:n})=>i4(t,n,!0)).reduce(Z);return(()=>{var t=v1(),n=t.firstChild,r=n.nextSibling;return r.nextSibling,j(t,m(T,{children:e}),r),t})()}const $1=Object.freeze(Object.defineProperty({__proto__:null,Part1:w1,Part2:k1},Symbol.toStringTag,{value:"Module"})),j1=`
4942223224223134312221222433336324234433314222333723222642441142184541322622221421243432273241422334
4353554354133444633336743474444343443423455322434443443733352437452343433334433532333444533333344543
6494235656557395762237355445345462754746129544525363443552889473535435433434766333663533585486544578
4575437413355455333663534375455245465427458234151534536655743664553344545864333436556593466693743454
3333223332222323333233323322334332333223782633323333232353333333383143463332233623333137134223562532
3233214222227326232141314262243323243318437262233343312222332333243314323233332233231138344212222413
4322512724132232224424222213235322527453312212422232122252122223612232222222211222221512252123722443
6663342662463463428161854326454827243228634722353126355123657466364286544722233461473231447262766431
2322312443334215423341142422644412433353362122224363242329222224222352422222321422462421582414224122
3312232612432728242712333422233232222312394332423442613231243249335432242433332434512433194142243132
3122632263153322262222252222662253253259222562211212232432555522454236241422123212212223254322215552
6866242533424343343246514351436567632345348595253633543334552265414327342632443334413223244523114443
4222246263444442233444363332323342313745633259434423463433642234332252263212123353333313331612563234
3233232235322232133352122353221443223241132522654223333932232132551322323632222352232227221223153531
8444447346444842754874478452553683435486734244433244454544842543434436683424234444435584472954443232
7113431772572633751667657216244623772551222115664154571164617664753675772562646765442652241621323589
8467462841736658844223542625678266837542222464326215912221544733351254312684424525247541764517493643
4956345859977964655747659599766663569494975587463877555757868462282967447587999968557265784564748956
3256326435533467226337367273223926532882867174555873646539441455182593213218623246436762422426443523
4814644567415343385352751692333443546565348417354424443446433364463368833454344396675565826333336637
2223223242112422222222342222222121322132222212532122353222122213222222222222212212221522242222221122
3322224415221212324244223251421222422222274222222223242235313233321228123242442222441431214232333224
2323322233234332252223122222322121224233232242112231233233232222222223152223213222232215122336422326
4333523134351236232633233335433342342333333333525323334332334133235232444234322423453533344423233223
2322332412222622314121222323671235533233233231652725272614761215335221322622213242222123122422977513
2365152914522418424242445651292623223524126743732283446125222353243322373621142553754223256247439173
4232243235313442123523226222224561233273223222223122742254222452114574122142446242412432242444315241
6435251444334532243334523443545366243223333243753434413432424224232425334423343244532626322556235322
1323222423122232232122232222413322221725243111322214232222315221313232522232222426233358321212522442
4132532123332422212272222212333127231442534222322512332225212222313223142283242222322213223251123521
4342341414241244472423254532212352424424452273353446444424253534443333332255425434243444347544523254
1223234433244322722123322224225221425633233124122122532123123523225231324152331523242215252122454134
3599554833745933644614898657666948936754563296574554346795837542883363355343654544544356542483617999
3432223322222221243232196882521224121215222242232523221222236361412133127128423222434351912425871242
3223242336345666346333352563336343463333644632543365834353541332325239333653243333723335632358765873
3222732612292236112322312253223332232234312521162122233142213312333122123333124213642123312124335233
3342355342234323222563363523121242232331434323225243222423423332123323352434313433234442234321422333
3136332323213333224132332411524322363534321534236334213323263235333333336222533323232233533323321122
3332223333423331332322223223234333342232133323323332422213332324432313453322333322221422233325234323
3222242252343222223461433353224556254553344326362465237524624324323355252333354412323461342414254214
3425231791232292243643163322633213222445224223543195222364229933222227322242512323122314327322233176
1222521221222221322326123222722212345221252323222212222122212211122122232222882212212212254273222237
3333434344441332211423341322224245362424544341333432122253232322242321423234436234131243245341242533
8773367538234633355857568498895934885793367477872856685722887759764765569498434346383839335751783364
4324234312592433323343832443643252422647346356245641414142634224913323423512475753347723352372242645
3628224362452232344531422261253365232354212335246321322222932232243632484215322323823212221842251356
6455435432535352343343345553224552539374331314436674545385353545279432543373154436336372343561255489
1222226234221223252422232622222232222221212232212227222272272422222214421271332324342213223222224423
6574844427476484883465697645445558548368657446474426567563667555648484467467537545563673656335367554
2523526312223333215322125221222242326222322275232223222222565565252443223161232332632125222232222224
2222243222323336132221231332223322233222242322222222231223512132132122212224312124222243223222262311
7252254225663538948335523352256435222262443573455632224445554341334233359344245454552234442333433232
7323472232536122525324353425251265164522421233445344126353254445439433394324242647232234334352221254
4372424343244244342534443443344432234443344333445831434334735322334332242344414232444333243444434447
2123212222222272122322232331231222112822221322242121221221311322242222228212222212321222222222221622
2341554222584575666614356123154273356432223244433643543373667153252423375562115245362596512425525621
9677948566937576223387838478967696534888395693876558829635596238699945467586796577947525742296678546
4422337743543636262523249236315463411232472434433323323872223399342466515743873457321923233324334552
4322223812334323133222332122421212224332235222262232339442111224293222236322241523322122323322922572
6456447733177243544436545355213325244563444245253724415355823333585432453532334425342575433375635365
1212228232323322242222223221222222223222122121212121226122123127223222223212413232222162121212522242
2333333333343334323435344423343332423432233433234343333382443533444333533343452334343431344333543323
2322414243624222422273533243343242256123346327525433222364722522243342222146222235464822442425242532
2522221422235521443522812322243261232445452862229822124236152232232227252121221244142432544226321253
2222112242232222222231213122222433213212323222252223322121213222222133222332422222232121223111242352
2354624665225524536152535324342213274334352326652535225225324255556713332754453427125645534226612464
4323223334342423212332112212122132222112234244124363232225152454413128613232222111325223222332552118
2232131333332413366323323233328364437482132311313352233236323333123343322233343284322353266533343324
3671121743224223229232456331114583421251355342232322324414223422355627257262624722232343223325433472
3374222222456445422563532344243442442321133241142546215613422326354324251432323232312462612264215364
2332122222122423331632242532323223213234534522324332312123211241345111323224222232223223334224523323
2884338766656952395673622777657487357677165566325555825333465838367572982698847776762976777582857554
2144533142553353237346221314236344222114325223324342344313333212333456142353434132724334412145458413
1212221226222452222222222223223322222311124422322222233312222323523222123133221126322211211322234212
6332232432422468422234244447222121213228645528644237183536425443157244135441342315132632633247135622
5344232333124521221433134132222722313122333322323421423432223222422233432332234252422332243232225432
7734476576267589774637653765654553848574759553535672826365552767737428663465755785753555567583366257
4212324222232222232325434232251843124342337721112344423346242444422222331222236214222121344122424247
2224132218282264224222223332222123223242222222212412124228522241223221292223223523223542542222221122
4223243223233324234262244422393122222722222222142322435332222444431322341233322322423232322424222324
2472346212825254252112222453342122213325126454463143432432131633244424524511233674324227176222217332
5555535946545445445566554455528544445554954545354353335565335354645565554755546457554354545557545444
7264129377547747266643646413665145632372333447371422257444494672643462362372786744226392212852434672
5754732212398743335532333562563143526575383135455332313172358253522532652333333443224243322425425356
3333223123333333233213232331333313232214233232433252323333333333523231322333333313243233324363424334
3146452535342336142353424536134543334231333252432513341132433353241224223434525332443343322352214565
3777747776874575778767385666338255582757868445786775748767554669595755785756465676396837666745768666
3234223413221322242322122323211324432323232232133222333232334231323312222332232233332331323332333332
1123221324514261241245328232532242712222132225221321229232221225222212224872212222222222243223124222
5351743332544443445343552534454535144333646553423456246229455334753547943637538464544537343464343654
2256652355556544452236637343235435542245255585524524435458515242632747465265334341452524544373525664
7636855664543564542364255645336535556524434466754565645543544455645652254414335654533575535667626464
3437324334332332253242123234233446226132232364322122231223232213323432252322235634343222116126326222
1513132221123233332323332223422432213134433232612412233223332222422312222212322432211422373454612337
8344434758885387547546594664665883837466374758685845757563543654832558365558455945843446534344349777
4236756877333559563345628253763963549254523745655836635753588329637639561765348442533323632563923635
5325417433441844424343423344464353433824453443744423354655433243225543143334143345323444234432344424
4344341421232226264443443443143234524433342334342434434624244444323334442243323443134521223434452334
4568954558461468465752446724444486475643685859563452558764458338848524655965884655664755395547656745
3222311322222312121222222222232222722121222222122222132231222221221721533422222122242238622122131222
4167464636737436643832443268653385223834282253333511167453566972445436553562723746762555346647615554
2224433315344334443333234235323433643233343444333334433422455341333444337343333333354443434542244663
4121322342232322232122262322312222253336232345232335222231232222212223223322223222322425223222346422
4666341446372463465666633654464341436314647743244626662365233444735233464534436433626434654464245562
4324484116243444123443444364643224334354426342384321354423446461653334344444633332324413432244543444
4549659661263732333345391335457745364312685424364334225465427463633535236333344433453584336678644863
5352224223622234344313522132313123656235123354411552392232352332366243342221122222332653256233453245
2223232214145221323322223243322462334325312112422241312421212732222242222222222232244241612134523331
1122612222223222223222214322321222332222212221211232222222127148322222144242421262131222523112321235
4253443432255325334432314431412323332353524423332313222431434322353335554233244312331444624225244323
2214213224333244343235222336222346344332234344343522223232243323324235322233213332133442624131331315
5223635694344352843525469335335653364645943443366358358459433496853342133425437239464565747493477338
2322333851212552324352932111225331134532232526333227122237155321443622522232322246211335215224252223
9549477888567857851249829217837676598557853828234267286115457436898613533659678228637789216487763913
1222332122432122334332322433434343233533313222223222321235221332341233343342214324222132323223422232
7429547227239483322857422455767132695536457267963547554434491764459245134473274226254347473467284726
4623312322223423343324221243333314333352423145423342332343334227322233222232232312222233632321432242
2221331322821322124322227222332233322121222823622372219335332323222225243333131233253523312333132322
6134211522422236252888223151222314258332146213238641136142281362255525113725265546633336222251374442
2222221271122413714222144222225222122531422512461212212312211222312233332222522213224423221371552812
5524357523537235632333353433336235446623232326483552246363236356463354437363122634352353343243633435
2423212222462231231322322222222122122232343223224122222522656423245232322233252225422242323222228423
5222344422543245342524243643156321323122321222252223223144332244331324243221411242222222271114245324
6135225333345324665356564343335643146552534336454321344633423343244732232556447636646553653669265463
3362532334372543373983448392425333336245841444333355532344221843565153335313325323332435542846445867
3725365745614557545455235562474555435253328245555323165648534234553445526523336385585444476124655425
3233273624228682233433633362342542421324212244431643228223433224343537423253322287233224321224124333
2445443486745462452384734774646733765766467364449283666735236672654851355467463674564652473269525275
2222241421312123562422268224322233223211421264132242222222324222272322221211132222332375225224341223
4543134453537551554175542443462523243383734365255554314254432334533435333242335755634354242333624433
6665772724263363246346461423359345334777482343522256772521424423266252443135564773437462975665443384
4682698688357774856925593673865933866863532399633468639144498577635512524484595697395734533733443244
3626443444444242433434433645443634224432144464435434942434334442446337241443434435444432643643344424
3241344266334326533514665432232434433454693326467642235426633365663465474366162254335236453458458265
1122452433322224522132322333623323233122352312322322122251222232343314223323133332113232223133422242
6644444424433427534631343334445252224553434344245573433555357434333241244532353142443351463333541532
1533242352127443864424344623363634232232433533232433131226242233323323331241421332343213543733452433
3353324434234221612312332362235211524212322322223245431423471231226223223341231547252252225721232146
3651323123333212332232123333232212134522221322233513322122222222423232332243222331323136333332123222
2242133525512222282712142225222223323231132233332423323123223224221313122135332212433313422543435235
2211122225232222232222222222252122232523232222222212112222615122212212222221322222221212237221222122
3232456465363322454244452522435534241514555554244415655473144423237374426244423745623335643334245424
2233124213222222332212222222212222222332221122322522221412212222212223221322122424422412623222222223
8885586974497976564868556679874676725886798544777587986859786877845858874369869775787861875756878862
1222245443544433224433242133533424264743344497345324141425323442644227246633242324445424423244254244
7364644615656851376435537622356923457226276466537737377337677927364437565724773651276277666752482716
4338342334942145452233223433343393343434352242574433832751566355935433135421784725713834375362623936
2432222142422222242222222222224221225122222212322912132231443221321322322241222322322322122222221232
2888313145855285653525744565532735484664728456434362162876335775816323536465677228212124331576667569
5224443337435622312133421443341422433332325123432323433233323224243234243322532214234123333622321352
3352333335624234132134222323322333822332125352334312467363231322353451333212326323324234222412327262
4424547244322321328344444345564325445427485463457522347323333642372244422248133286523524574356664847
2232544234134443346363355444341335334312445212454223252353532532614444144642324566153535452346444542
5527433437335374433857213333642734748353443585393383663333741373742583333538536646437837233263764753
4344334453433341443333432434356445232324333233233435522633233341434532433532344533753574333243334553
2433323573233323395323355355513337234442532333334523643332333323338243435331523334323334395633343343
3115112246125241224232227341252145542231133332244454312123222239221354262212424521555113212134423422
2461126254564126265545425436556416621545563431212661353565432552531324413265341663225111314436224789
2974666557555662322659553643546462465262455257456525725365382455658674624352466233364525526436446454
2344237733343336433941333333342333323332422135324312246324223234244335334232433231192433427943433333
2232321425224332323333333222323322513222223131222323432123312112221525222223132622221232212333122222
5373343363343434434692343344144334339434323433131233293383366213434224333442443233454363362476333274
3443241332324423232344412422444343224312423421321143311424221413442211334133322441424111332421356789
3334255622615165224346626533452565342553524435453654635245442572423527563424243254245222132444444554
7344333553435387735334333446345342553456536665635555644845653553444765484553372334737164436777441376
2944544742663539824324329447882624742684257684519944239668832224754655495458257351244333445465622273
1722223321322223322332233122222332322323222132322322823332122223232123222332332113323322124232222217
7212122223122321241212222142192216322212321221522321144225112222223221252136122241221342121211261332
2433621235126342424512323424222212432231132244242522333253222522222244333223242425223223332216222233
7331223333232323223773233322732221333632633333272733433223233253344372532312332243332225335332223223
7153291222122122232723321174353223335232521622252322223223435522422221242532234242226211195125332411
3452623643344532154554547455535644454643462554345559444423323545432225534551353344435444442353325534
2333323321333312344332322444333242333234232224222643332211222332242333334332234433322233412233252332
3252534251524444454442242525326334245154544342332733324444434433453334348341543233452654442353442532
3231671466523253723224426133243333722224322247532623432514414229442442332232243464642222644242497346
2434243344425422334522643433342445434354454454543353335344232343432353434334332334533445333534443434
1322621222222334933232742333252323623443723246431222926275222222122453312131123432222132221184222225
3344345285445542232352624244524243422533212334243712425842232322843235475443125522253433334144423166
3445353122435435333253433233335566312333334313434333224342324443454547434434342354364333463353343455
4476525542314133314431445525145343354556512243454173543254521215564253576525644445666236444366434454
7566768977477565546384757565766657756578556975868768756466166526858647684755968668644665648576699665
2412334322122223313322446232232423522222625324123423132121232324333324342242432163232212243254421326
7222232212316122222223228212541225112214222422234522222423152222532428122321213133436122124512321272
1543523223667613178472662226224232226325325223222243531852222356732622726461174414252232861662528234
2542242226324552542229234712131447543122224281322624282379447411142275238522325122522443317914152124
5326935751212284264422242131563454844223644141344299463841944323341426213625642623365364241247424225
1415315325441432433425454244244134335225413351231431513343421312143122315125535455424153425331156789
7333232333314343334363633333334243323434333222332332133334633263334533322333433433425533333636333243
6444434346442343445244364234454423324243434577433247743642446466344464164434444447322433363344424454
2321363227632455614267472344256866763526272222252317332374727226746634722465247222512626512262439842
2393333223449343424233333763932124434124323336333295243234214313272242236233323334323343333442233442
3333633632353353326332523326333249633333233331333133337333438233233633233333333332332332223343334333
5355215454545343454443466652533337554635444333337364313434253343645554234735446454365442655445243354
5292882428649236756448672454333232153432357784212765664476232424321552449391444274244924755534564473
3542373153466322583543436434634253323433333324331353852543344246334232123365543534343443542343332235
3244234232241254234352224433234533313222323443321222313231324534234322233234331223334314434134342134
1213221111432155322122222121222222222222132111121221222121222222132221221222235232222521113221432221
5242311324332722116243322922224232246222221222131212213122131212223322332414232242223221222124332224
7454132511454322626252235385242574942547256245122541227462453323521243242398322842423455542762642213
3422625438535318655835453462742236454559673365563575346236243542284435538452836574856662875273434662
`.trim();var S1=A("<p>The maximum joltage when using 2 batteries is <!>."),A1=A("<p>The maximum joltage when using 12 batteries is <!>.");const o4=()=>j1.split(`
`).map(e=>e.split("").map(Number)),a4=(e,t)=>{let n=0,r="";for(let s=0;s<t;s++){const i=e.slice(n,e.length-t+s+1),a=Math.max(...i);n+=i.indexOf(a)+1,r+=a}return Number(r)};function z1(){const e=o4().map(t=>a4(t,2)).reduce(Z);return(()=>{var t=S1(),n=t.firstChild,r=n.nextSibling;return r.nextSibling,j(t,m(T,{children:e}),r),t})()}function _1(){const e=o4().map(t=>a4(t,12)).reduce(Z);return(()=>{var t=A1(),n=t.firstChild,r=n.nextSibling;return r.nextSibling,j(t,m(T,{children:e}),r),t})()}const q1=Object.freeze(Object.defineProperty({__proto__:null,Part1:z1,Part2:_1},Symbol.toStringTag,{value:"Module"})),F1=`
@@.@@@@..@@.@@@.@@@@@@@..@@.@.@@@@@@@.@@...@@@@...@@@@..@@@@..@...@@..@@@..@@@.@.@.@@@@@.@@@.@.@..@.@@.@@@..@...@@..@@.@@@@@@@.@@@@@@...@.@
...@.@@.@@@@@@@.@@@..@@..@@@@.@@@.@..@@..@.@.@..@@@@@@.@@@...@@@@.@@@@@.@@@@@@.@..@..@.@.@@@@.@.@@.@@@@...@@.@.@@@.@@@@@.@...@.@@@@@@.@.@..
@..@.@@@@.......@@@@@@@@.@@@.@.@@@@@@..@@@@..@...@.@@..@...@@.@@@@@@...@@@@@..@@@@...@.@@@@@@@@..@@@@.@..@@..@..@.@@@@.@@..@@.@@.@@@@@@.@@.
@@@@.@@@.@@@@.@@@@@@@.@@@@@..@@@@@@@.@@......@@@@.@.@@@.@@@....@@@@.@@@.@.@@.@..@..@@.@@.@.@@@@@@@@@@...@@..@@@@@@.......@@@..@@@@@.@@@@@.@
@@.@@@..@@@@@.@@@@@@@@@@@@...@@@.@@.@@.@@@@@..@@@@@.@@.@@@@@@.@@@.@@@..@@...@..@@@@@..@@@@@@@@.@@@@@@.@.@.@..@@@@@@@@@@@.@@@@@.@.@@@@.@..@@
@@@@@..@@..@@@@.@@@.@@@.@@@.@@.@@.@@.@@@..@.@@@@@.@@....@@@@@.@.@@@.@@@@@@@.@@..@@...@.@..@..@@@@@@@.@@@.@.@@..@.@.@@.@@.@.@@...@@@...@.@..
@.@@@@@@...@..@@@.@.@@@@@@.@..@.@@@.@@@..@@@@@@@.@@@@@@.@@@@@@@@@@.....@@.@@.@@..@@...@.@@@@@.@@@.@@@.@..@@@.@.@@@@@@...@@.@.@.@@.@.@@.@@@.
.@@@.@@@.@@@@@@.@@@..@@@@@.@@@@.@..@@@@.@@..@@@@@@@@@@@@@@@..@@@@@@.@...@@@@@@@.@@@@@...@@@..@.@@.@.@@...@@@.@.@.@.@...@.@@@@@@@@@@@@@@.@@@
@@@..@@@.@@.@@@.@.@@..@.@@@....@@.@@@...@....@@@.@@@.@@.@@@@..@@.@...@.@@@@@@@..@.@.@.@..@@@..@@.@@@.@@@.@@.@@@@.@@@@@@.@@@@.@.@@.@@@@@@@@.
@@@.@.@@@.@@@@..@.@.@..@@@@@.@@@@@@.@@@@@@@.@..@..@@..@@@@@@@@@..@.@@...@@@@.@@@@..@..@.@@@@.@.@..@@..@@@@.@@@@.@.@@@.@@.@@@@@@@.@@@@.@@...
@@@@@@@@@@@.@.@@.@...@@@.@@.@@..@@...@...@.@@@..@@...@@@@@@@.@@@.@@.@@@@.@.@.@@@@@.@.@@@@.@@@@@@@@@@@@@@@@.@@.@@@@@@@@...@@.@@@@.@.@@@@@.@@
...@.@@.@@..@@@.@.@.@.@@@@@@.@@.@@@@.@@.@..@@@@@@.@@@@.@@@@.@.@.@@@.@@..@.@@@.@@.@@@@.@....@@@@@@@.@@@@@@.@...@.@@@.@@@.@@@@.@@@@.@@@@.@@@.
@.@@@..@....@.@@.@..@@@@.@@@@.@@@@@@.@@.@@.@@@...@@.@@..@.@..@@@.@.@@..@@@@@@@@@@@@.@@@....@@.@@@.....@@@@@@@..@@..@@.@..@.@@@.@@@@.@@@..@@
@@@@.@@@@@@..@@@@@@@@@@@@.@@....@@@..@@@.@@@.@@@@.@.@@.@@@.@.@..@....@@@@@..@@@@@@@@..@@.@@@@@.@@.@.@@@@.@.@@@@@@@@@@@@@...@@@@@.@@@.@@.@@.
.@@@@@..@@@.@@@.@@..@....@@.....@@..@.@.@@..@...@@.@@.@.@@.@.@@@..@@.@.@@.@@@.@@.@...@@@.@@.@@@...@..@@.@@.@.@@@.@.@@@@@@@@..@@@@..@@@@@@.@
.@@@@@@@@@..@.@....@.@@@@.....@.@.@..@@@.@@@.@.@@@@@.@@.@.@@.@@@@.@@@@@..@.@@@.@.@@@.@.@@.@@...@.@@@@@.@....@@@.@@....@.@@@@@...@@.@@@.@..@
@.@@@.@.@@@@@@.....@.@@@@@@@@@..@@..@@.@..@.@@..@@@@@.@@..@.@@@@@@@@@@@@@.@..@@.@.@..@@@.@.@..@@@@@@...@..@@..@@@@.@.@@.@@@@@@...@@@.@@.@.@
@@...@@@.@@@...@.@@.@.@.@@@.@..@...@@@@@@@.@@...@...@.@@@@..@@.@@@.@...@@.@.@@.@@.@.@.@...@.@@@@@@.@@@..@@@@@...@@@@.@@@...@@@@@..@.@@@@@@.
@..@...@@@.@@.@@.@@@@@@@..@@@.@@...@@.@@@@@..@.@@@@..@@@@@@.@@@....@@.@@@@@@@@@.@..@..@@@.@.@@....@..@@.@@.@@..@@@..@@@.@.@....@@@@@@.@@@@.
@@@@@@..@@@@@.@.@@@@@@@.@@@@..@..@@.@@@.@@@@@@..@.@@@@@.@.@.@.@@@..@.@@@@@...@.@@@@..@...@@@..@@@@@.@@..@@@@@@@@@@.@..@@@..@.@@@@@@@@@@.@@@
@@@@@@@@.@.@..@@.@@...@.@@@@.@@.@@@@@@@...@@@@..@..@@@.@.@.@@@@@.@@@@@.@@...@.@@.@@@@@@@@@.@.@..@..@.@@.@@@@@@.@@@.@.....@@.@.@@..@@@..@@@@
@@@@.@@@...@.@.....@@@@@..@.....@.@@...@..@@@@@....@@@@@.@.@.@...@@@..@@@....@@@.@..@...@..@..@.@.@@@@@.@.@@@.@..@.@.@@.@@@@@@.@@@.@.@@.@@@
@@@.@@@@@@@.@@@.@.@@....@@@@@@..@@@@@@@@@..@@@@.@.@@@@@.@.@.@.@.@@@.@@@@...@@@.@....@.@..@@.@.@@.@@.@@.@@@@@..@@..@..@@@@.@@.@@.@@@.@@@@.@@
.@.@@@@@.@@.@@@@@.@.@..@@@..@..@@@@@@.@@@@@..@@...@.@@@@@...@@@@.@@.@@@.@..@.@@@.@@@@...@@@@@.@@@..@..@.@...@@@@@.@@...@.@.@@@@.@@@.@@@@@.@
..@@.@@.@@..@@@@.@@@@.@@@.@@@@@@@@@@..@@..@@@@@@.@.....@..@..@@@@@@@@..@@.....@@@....@@@@@.@..@@.@@@@@@@@@.@@@@@@.@.@@@..@.@@@@...@..@@...@
..@@@@@.@@....@@@..@.@.@.@@@.@@.@@.....@@@@@.@@@@@@@@..@.@@@@@...@.@.@@@@@.@@@@.@.@@@.@..@@@@@@@.@.@@.@@@.@@@..@@.@.@....@@.@@.@..@@@@@.@@@
@@@..@..@@@@..@@.@.@..@@.@@@.@@@.@.@@@...@@@@@.@@@@@@.@.@@@.@@@@.@@.@@@.@@.@@@@@@.@@.@@.@...@@.@..@@@.@.@@.@@@@@.@@@@@..@.@@@@@@.@@.@@..@@@
@@@.@@.@@..@.@..@@@@@.@.@@...@.@.@@@.@@@.@@.@@@.@@@@@@.@@@..@.@@.@@@@@@.@..@@@..@.@.@@@@@@@@@@@@@.@@@.@.@@@@..@@.@.@.@@@@...@.@@.@.....@@.@
@@@.@@.@.@@@@...@@@.@..@@@@..@@.@@@@@@@.@@@..@.@.@@..@@@@@@@.@.@@@@...@....@@..@@@.@@@@...@@.@@@@@@@.@@@@..@.........@@.@@.@.@.@@@.@.@@@@@@
@.@@@@@@.@@.@.@@@@@.@@.@@@@@@@.@.@@@@@@@@.@@@@.@.@@@@.@.@@.@@@@@@.@..@..@@@@.@.@@@.@@@@.@@@@.@..@@@..@@@@.@@@@@.@.@.@@@@@.@@@@@.@..@..@.@.@
@.@.....@@@.@.@.@@.@@..@@@@@@@@@@...@.@@.@...@..@@@@@.@.@.@@@@..@...@@.@@@@.@@@@.@.@.@.@..@.@@@@@@.@...@@@@@@@@..@@@@@.@.@.@...@...@@@@@@.@
.@@@..@...@@.@@@@..@@@@@@.....@..@@@@.@@@@@.@@@.@@.....@@@@@@@@@@.@@@@@@@@@..@.@@@@.@..@@@@.@@@@..@@@....@.@@.@@@@..@..@..@@@@@.@@.@@@.@@@@
.....@@@.@@@@@@..@@@...@.@..@@.@@.@.@.@@.@@@@.@@@@@@@.@@@@..@@.@..@@.....@.@@@@.@@@@...@@.@.@.@.@.@@...@@@@@@@@@.@...@..@@..@.@@@@@@@@@@@@.
.@@@@.@@@.@.@@@@@.@@.@....@@..@.@.@.@@.@..@@@@@@.@...@@..@..@...@@.@.@@.@.@@...@@..@@.@@.@...@...@@....@@.@@@@.@.@@.@.@.@@@.@@...@@@@@@.@.@
@@.@..@.@@@...@@@.@..@@.@@@..@.@.@....@.@@@.@@@@@@.@@@@@.@.@@@@@.@.@@..@.@@.@@.@@@.@@.@@@@@@@@@..@@@@.@@.@@..@.@@.@.@.....@@@@@@.@@.@@@@@@@
@@@..@@@@.@@@.@@@@@@@@.@@@..@.@@.@@.@@@.@.@.@@@@..@@@..@@@.@@@..@@@@@@.@@@...@@@@....@@.@@@@@@..@.@.@@.@.@@.@.@.@@@.@.@@@@@..@.@@@@.@@@.@@.
.@@@@.@@.@@@@@@@@@.@@@@.@.@@@@..@@@@.@@@@@@@@@@.@@@.@.@.@@@@@...@@@....@......@@@@@@...@@.@.@@@.@@..@@.@.@@@.@@@.@@@.@.@@..@@@.@@@.@.@@.@@@
@...@@..@@@@@@@...@....@.@@@@..@.@..@@.@@@.@@.@@@.@@@@@@@.@@.@.@.@@@@@...@.@@@.@@@@..@@@@@..@@@@..@...@.@@@@@@@@.@..@@.@.@@@.@@@@@.@@..@@@.
@@@@@@.@.@@..@.@..@..@...@..@@..@@.@@.@..@@@@.@@@.@@.@@.@@@@@@.@..@@.@..@@@.@@@@@@@..@@@.@@@@@....@@.@..@..@...@@@..@.@@.@.@@@.@@@@...@@@@@
...@...@@..@@.@..@@@.@.@....@@@@@@@@@@.@@..@@@@@@@@@@.@@@.@@@.@@.@@..@@@...@.@@@@@@@@@@....@.@...@@.@@@.@@...@@.@@@@@@@@@@@.@.@@@..@@.@@..@
@@.@@@@.@@@@@.@@@..@@@@@@@@@.@@@..@.@@.@.@@..@@...@@.@@@...@..@....@@@..@@@@@@@@.@@@@@@@.@@.@@@@..@.@@@@@@@@@@@@.@..@.@..@....@@..@@..@.@@.
@@.@@@@@@@.@.@.@@.@@.@.@@@@@...@@@@...@@@@.@@.@.@.@@@.@@@@@..@@..@@@@@....@.@@@@@@@..@@@...@.@.@@..@@@.@@.@@.@@@@@@@..@..@..@@.@@...@@@@.@@
@...@@@@@..@.@.@@@@@@@@@@@@@@...@@.@.@@..@@.@.@...@@.@@@.@.@.@.@@@.@@@.@.@@@@@.@..@@.@@.@@@..@@@@..@@@@.@@.@@......@@@.@@@.@@@@@@.@@.@@.@..
@@@@@@@@.@.@@@...@@@@@.@@.....@.@@@@@.@@@@@@.@.@@.@@@@@.@..@@.@@@.@@.@@.@@.@.@.@..@@.@@@@@@@@..@..@.@@.@.@.@@@@.@.@@@@.@@@@@@...@@..@@.@@.@
..@@@@.@@@@@@@@@.@.@@.@@.@...@@.@@.@.@@@..@.@@.@.@@..@.@@@.@@@@..@@..@@@@@@@.@@..@..@@.@..@@@..@..@@@@.@@@@@@..@.@@@.@.@@@@@.@@@@@@@...@@@@
..@@.@.@.@@@.@.@@@@.@@@.@@@@.@.....@@@@@@.@.@@@.@@.@@@.@.....@@@@..@.@...@@@@@@@@.@@.@@..@.@@.@....@@@@@@@..@@@...@@@..@.@...@@@@.@@@.@@.@@
@@@@.@.@@@@...@..@@@@@@@@@@@@@...@@@.@@..@@@@@@@@@@..@@.@...@@.@@@@@@.@@.@@@.@.@.@.@@@@@.@.@.@@@...@@@.@@.@@@@@@@@@@@@@@..@@@@@@@@@..@@..@@
@@@@@@.@@.@@..@@...@..@@@..@@@@..@@..@@.@....@....@@@@@@@@@.@.@@...@.@@@@@.@@.@...@@@.@@@..@.@.@@@.@.@@@@.@@@@@@.@..@@@@@@@@@...@@.@@.@@@@.
.@@@.@@@@..@@@..@@@.@@.@...@@@@@.@@.....@@.@@@@@@@.@..@@.@@..@..@@@@@....@@@@@@@@@@@@@@....@.@@@..@..@.@@@@@@.@..@@.@@@@@.@@.@.@...@@@@@@@@
@.@@@.@@...@@.@..@@@@.@@..@@@@@@.@@@.@.@@@@@.@@@@@@.@..@@..@..@@@@.@@@.@@@@@@@.@@.@@@@@@.@..@.@......@@@@.@@@.@.@@@@@@@@.@.@@@@@.@@.@.@@@@.
@@..@.@.@@@..@@@.@@@.@.@@@..@..@@..@.@.@.@.@@..@.@.@@@@@@.@.@@@@.@@.@@.@@@..@.@@@@..@@.@@@.@@@.@@@@@.@@@@@.@@@@@.@@@@.@@@@@@..@..@.@.@@@@.@
..@@@@@.@@@@@@.@@..@.@.@.@.@@@@@@@@@@@@@..@.@....@@@..@@@@@@@.@@..@@@.@@@..@@@..@@@@@@@@@..@@.@@@@@@.@..@@..@..@@@@@@@...@@@@..@@@@.@..@@@.
@@@@..@.@...@.@.@@@@.@@@.@@@@@@@@.@@@..@.@@@@..@@@.@@@@@.@@..@@.@..@@@@@@.@@@@..@.@.@@.@@@@@@.@@@@@@.@@@@@@.@..@.@....@@@@..@@@@..@.@@.@@@@
@@@@@@@.@@@@@@.@@@...@..@@.@@@..@.@@@@@...@@.@@@@.@@@....@@..@@@@@@..@.@.@@@@@.@.@@.@@@@@@@@@@.@@@@@.@.@@@..@@@@@@@.@@@.@@.@@@@.@..@.@..@@.
.@@@.@@@@@...@@.@.@.@@@@@@@@@@@.@@@.@@@@@..@...@@@@.@@@..@@@@@.@@@.@.@@@.@@@@...@@.@@@@@.@.@.@@@@@.@@.@@..@@@.@.@.@...@@@.@@@@@@@.@@....@.@
.@.@@.@@@...@@@.@@@@@@@.@@@.@..@@@@@@@@@...@..@@.@@...@@@@@.@@.@@.@@..@@@.@@@@..@@@@@@@@@@.@.@@@@@@.@.@@@@@@@@@@.@@@@@.@.@@@.@.@@@..@.@@@.@
.@@.@@.@.@@@@@@@@@@@..@@..@.@@@.@@.@@@@@.@@..@@@@@@@@@@@@.@.@..@@@@..@.@@@@@@@@.@..@@@@.@@..@.@.@.@@@@.@@@...@@@..@@@@..@@@@@@@....@@@@@..@
@@.@@..@@@@.@@@@..@@@.@.@@@@@@@@@@.....@@..@@@.@@@..@@@.@@@....@..@....@@@@@...@@@@.@@.....@@@..@@.@@.....@@@.@..@..@@@@@@.@@@..@..@.@@@@.@
.@@@....@@.@@@@@...@@..@@@...@..@.@@@@@.@@.@...@@@.@@@..@@@@@@@.@@....@@@@@@.@@@.@@@.@@@.@@@@.@.@..@@@@@@@@@.@@@@.....@..@@@..@@@@@@@@@@.@.
@.@@.@@.@@.@@@.@.@@..@@.@@@@@.@@@@@@...@.@.@.@.@@.@..@@@@@..@@.@@@@@...@@.@@.@@@..@@@@@@@@.@@...@@@@@@..@...@@.@@@@@@@@@..@@@.@@@@.@@@@@@@@
@@@@@.@..@.@@@..@@@@@@@@@@..@@.@@@@@@....@@@@@@@@@.@.@...@@@@@..@@@@@@..@...@@...@@...@..@@.@@@.@.@@@@@@@@@@@@@@@..@@@@...@.@@@@.@@@.@@..@@
..@.@@@.@@@.@@.@@.@....@@@@@.@..@.@.@@.@@@.@@.@.@@@@@@@@@@@@.@@@.@.@.@@@.@@@.@@@@@@@@.@.@@@@@@@@.@@@@@@@@@@..@@@@@@..@@@.@.@.@@..@@@@@@@.@.
@@.@.@@@@@@.@@@.@..@@@@..@...@@@@.@.@@@.@@.@@@@@@@@.@@@@@@.@@@@..@@@@@.@..@@@.@.@.@@.@.@.@..@..@@.@@.@@@.@@..@.@@..@@.@@@@@@@.@@.@..@.@@@@@
@@@@@@@.@....@@..@..@@@.@@@@.@@.@.@@@.@..@@@@@@@@.@.@.@.@@.@..@@.@@@.@@@@@.@..@@.@.@@@.@@.@@@..@@@.@@@@.@..@@@@@@@...@@@.@.@@@@@@.@@.@@.@..
.@.@.@@@.@@@...@@.@@@@@.@.@.@@@@@@@@@.@.@.@@.@.@@@...@..@@@@@@@@.@@@@@@.@@@.@.@@@@@@@@..@@@@..@@.....@@@.@@@.@@@@@@.@@@..@...@@.@@@@@@@@@@@
@@@.@..@.@@@@.@.@@@.@@.@@...@@.@@@@@@...@...@.@..@@@.@@@@@@....@@@@@@.@@....@.@@.@@@@@..@@@@@@@.@@@@.@@.@@.@@@@@.@@.@@...@@@@@...@@@@@@@@.@
@.@@.@@@.@.@@@@@@.@@@.@@@@.@.@.@.@.@@.@@.@..@@@@@.@@@....@@.@@..@@.@..@....@.@@.@.@.@@.@.@@@@@@@.@@...@@.@@@.@@@.@@@@@@@.@@.@@@@@@@@@@@@@@@
@@@.@@@@.....@@.@@@@@.@@..@@..@.....@@@@.@....@...@.@...@@.@.@@.@.......@@..@..@@@@@..@..@@..@@@@@@@....@@@..@...@@@@.@@@@@@@@..@@.@.@@@@.@
@@.@@@@@@.@@@@@@@....@.@@@@.@@@@.@@..@@@.@@.@@@@.@@@@@..@@.@@.@..@@@@.@@.@.@@.@.@@@.@....@@.@@..@@.@.@@.@.@@@.@.@....@@.@@@.@@@..@@@@.@@.@@
@@@@.@@.@.@@.@.@@.@.@..@@@.@@.@@@@.@@@@@@.@@@@@.@@@@..@@@.@.@.@@@..@@@.@@@.@.@@@@@@.@@@..@@.@@@.@@.@..@@@@..@.@@...@@..@@@@.@@@@@.@@.@.@@.@
@@..@..@.@.@@@@@@@...@@.@@@@.@@..@@@@..@@@@@@..@@.@.@@@@.@..@@@...@@.@...@@@@@.@.@.....@@@.@@.@...@@@@..@@@.@@.@..@@@@@.@..@@@.@.@.@..@@.@.
@@.@@@@@.@.@@@.@@@@@@@@.@@.@@.@@..@@@.@@@@@..@@@@.@@@@@@@.@.@@@..@@@.@.@@@@@@@@@@..@@@..@..@.@@..@@@@.@.@@@@..@@.@@..@@@@@@.@.@.@@@@@@@.@..
.@@@..@@....@@@@@.@.@.@@@.@@@.@..@.@@@@.@.@@.@@@@@.........@.@@@...@@@.@@...@.@...@@@.....@.@..@.@@.@@@.@.@@.....@.@@@@@.@.@.@@....@.@.@@..
@...@.@@@.@.@.@.@@@@@@@@...@@@...@.@@@@.@@@..@.@@@@@@.@@@.@@....@@@@@@@...@.@.@@.@.@@@.@@.@..@@@..@.@@@@@@@..@..@...@@.@.@@@.@.@@@..@.@@@.@
.@@@@@...@@.@....@.@@.@@.@.@@@..@@.@@@@..@.@....@@@.@@..@@@@@@.@@@@@@....@.@.@.@.@@@.@@@.@@.@@.@@@@.@@@.@@@@@@@@.@.@.@.@@@@@.@@@@@.@@@..@@@
.@@.@.@@..@@@@@@@.@@.@..@@@@.@@@@.@@@..@@.@@@..@@.@@@.@@@@.@@@..@@@...@@@.@.@..@@@...@@.....@@@.@@.@@@.@.@..@.@@....@@.@..@.@@@@.@.@@..@@.@
@@@@.@@..@.@@@@@@@@@.@@@.@@@@@.@@.@@@@@@@@@@@.@.@@@@.@.@@@.@@@@@@@@@.@@.@@.@@.@.@@..@.@@.@@@@@.@.@@...@@@..@@@@@.@@...@@@@..@@.@.@@..@@@@..
.@.@@..@@@@@.@@@.@@.@@@@@.@@@@.@@...@...@.@.@@@@@@@@@.@@.@@@@@@@.@@@@@@@...@@@@@@@@@@@@..@@@.@@.@@@@@@.@@.@@...@.@@@.@@@@.@@.@@@@.@@.@@.@@@
@...@@@@@..@.@..@.@@...@@.@..@@@@@@@..@..@@@.@@@@@..@@@@@@@.@@.@.@@@@@@@.@..@.@.@@@@@@..@@.@@@@@@..@@@.@....@@@@@@@@.@@@@@.@@@@@@.@@@@@@@@@
@@@@..@...@@@@@@@.@@@@@@@@.@@@.@@@@@@@@@@@.@.@..@@@@@@@@.@@@...@@@.@.....@@@@@@@@@..@@.@@@@.@..@.@@@@@@.@@.@@@.@@@@@@@..@@@.....@@@@@@@@@@@
..@.@@.@.@@.@@@.@@@@.....@..@.@.@.@.@@.@@@@.@@.@@.@@@@@...@@.@@.@.@@.@@.@@.@...@@.@...@@@..@@..@@@@.@@.@@@@@.@@@@.@@@.@..@@@.@@@.@.@@...@@@
@@@..@..@@.@@@@@..@@.@@@@@@@@@..@@@@@@...@@.@@@@@@@@@.@@..@....@@.@.@@@...@@@.@.@@@@@@@.@.@@@@@.....@@.@..@@.@@@@@@@@@@@..@@.@@.@@@@.@@@.@@
..@@..@@@.@@..@.@.@..@@@@.@.@@@@.@@@@@@@@@@.@.@@@@.@.@.@......@@....@@@.@.@.@.@@.@@@.@@@..@@@@@.@..@@@.@@@.@@.@@@.@@...@..@@@@@@@@.@@...@..
@.@@@.@.@.@.@@@@@@@@@@.@@..@.@@@..@@@@@@@@.@@@.@@@..@@@.@@@@@@@@@@.@..@@@@@.@@.@@@@..@.@.@@.@@@@@@..@@.@@.@.@.....@@@@@@@.@@..@.@@.@..@@@@@
.@@.@@@@..@@@@...@@@.@@@@.@@@@@@@.@@.@@@....@@@@@@.@@@.@@@@@@@.@...@.@@@@.@.@@@@@@@@..@.@.@@@.@...@@@....@@.@@@@@.@@..@@@@.@@.@.@..@..@@.@@
@@.@.@@@...@@@@@@@@@@.@...@@@@@@.@@@.@@@@@.@@.@@@@....@@.@@@@@@@..@.@@.@@.@@.@@@.@@@@..@@@@@@@..@@@.@@@@.@@@@@.@.@@@....@...@@.@@@@@@@.....
....@@@@.@@@.@.@.@@@@@@@.@@@@..@@@.@@.@@.@.@.@@.@@@.@.@@.@..@.@.@@@.@@.@.@@.@@....@@...@@.@..@@@@@@@.@.@.@@.@.....@.@@.@.@..@@..@@@.@@@@.@@
.@.@.@@.@@@.@@@@.@@@@.@@@@@.@@@...@@..@.@.@@@@...@.@@@@@.@.@.@@@@.@@..@@..@@@.@@@@@@@@@@@.@@...@@@@.....@@@.@@@..@@@@.@@@@@.@@@@.@.@@..@@@@
@@.@@@@.@@@@....@....@.@@.@@@@@.@@@@@@@@.@@.@@..@@@@@@@@..@@.@@.@.@@@..@.@@@.@@.@@@..@@@.@@@@@..@@@@@@@@@@@..@.@.@@@@@..@@.@.@@@.@@@@....@.
@@..@.@@.@@@..@.@@@..@.@@@.@.@.@@.@@.@@@@...@@@@@@@@.@.@@.@@...@.@@@@@@@@@@@@@.@.@@.@..@@.@.@@.@@@.@@.@@.@..@@@..@@.@.@@..@.@@..@@..@@@.@@.
.@@.@@.@@..@@@@..@..@@@@.@..@@..@@@@@....@.@@@..@@@@@@@@..@..@..@..@@@@.@@@@.@@@@@@.@@..@@.@@..@@.@@@@@@..@@@@@..@.@@@.....@..@.@.....@@@@.
@@@@.@.@...@@.@.....@@@@..@..@.@@@@@@.@@@.@.@.@@.@.@@@@@.@..@@.@@@@@@...@@@@@@@@@@.@@@@@@@..@@.@@@...@.@..@@..@@@@@..@@@...@@.@@@.@..@..@@@
...@.@.@@..@.....@@@@@@@@@.@@@@...@@@@@.@@.@.@@@..@@@.@.@@@@@@.@........@@@..@@@@@@@@@@...@@.@.@.@@@@@@..@@@.@...@@.@@@.@.@...@.@@@@@@..@.@
..@@@@@@@@@@.@.@.@@...@.@@@..@@@@.@.@@@..@@@@@@@@@@...@@.@@.@@.@@@@@.@@.@@.@@@@@..@@.@@.@.@...@@@@@@@@@.@@@@@@@@@@@@@.@@@.@@@.@@.@@.@@@....
@..@.@.@@@@.@@@@@@@@@@...@@@.@..@..@.@..@@@@@@..@@...@.@.@@.@@@@@.@...@@@@@....@.@..@@.@.@@.@@@@@.@.@..@@@.@@@@@.@@@@......@@.@@@@@...@@@.@
@@@.@@@@@.@@@@@@@@.@@@...@...@@....@@..@..@@@@@@@.@@..@@@.@.@@@.@@.@@@@.@.@@@@.@@.@.@.@...@.@@...@...@...@@@@@@@.....@@.....@@@@@@@.@@@..@.
@.@@@@@@@@@....@@@..@.@@@@.@.@@.@@@.@@@.@@@@@.@@@@@.@.@.@@..@@@...@@@@@@@@@.@...@.@@.@....@@.@@@@@@..@@...@@@@@@.@@..@@@@@@@..@@@@@@@@.@@@@
@@..@.@.@.@@@..@...@..@@.@.@@.@.@.@.@@.@@@.@.@..@@.@@.@@.@@.@@@.@..@.@@@.@@@@..@@@@.@..@.@@.@@@.@@@@@@@@@@@@@@@@@...@.@.@@...@@@@@@@@@@.@..
.@.@.@.@@.@.@@@.@@@.....@.@@@@@@.@@@.@@@@@.@..@@.@@@.@@..@..@@@.@@@.@..@@..@@@.@..@..@@.@.@@@..@@@@..@@.@@.@..@.@.@@.@@.@.@@@@.@@..@@@.@..@
.@.@@@.@@@@.@@@..@..@@@.@@@..@.@.@@.@@@..@@@@....@@@@@@.@..@@@.@.@...@@.@@..@@@@@@@..@....@@@@@@@@@..@@@@@@.@@..@.@...@@@@@.@@@@.@.@@@..@@@
.@@@@@@@.@@@..@@@..@..@@@.@@@@@...@@@@.@@@@.@@.@@@@..@@@....@.@@.@@@@..@@@..@..@@@.@..@@@.@@@@..@@@...@.@@@@...@@.@@.@@@@@@@@@..@@@@.@@.@@.
@@@@@@@@@@@@.@@.@@.@@..@@@@@@@@@.@.@@@@@@@@..@@@.@.@@@@@@...@@@@@.@..@@@@@.@@.@@.@@...@@.@...@@.@..@.@..@@.@@.@.@@@@@@@@@.@..@...@..@@..@@.
@.@@@.@@@@.@@@..@@.@..@@.@.@@@.@@.@@@@@@....@@@@@@..@@@.@@..@@@.@@@.@@@.@@@.@.@@@@@@@.@@.@@@@@.@@@.@.@@@@@.@@@@@..@@.@.@@@..@@@@.@@@@@@@@@@
@.@@@..@@@@@@@@.@.@@@@@..@@@@...@.@.@...@.@@@@@.@@@.@....@..@@@..@@@.@.@..@@.@@.@.@...@@@@..@@.@@@@@..@.@@@@@..@..@..@@@@...@@.@.@@@@@@@@.@
@....@@@@@.@@@.@@@..@.@@...@@@@@.@@@.@@.@@.@@@.@@.@@@@@@@...@@@@.@.@@@.@...@@@@@@@..@.@@.@@@@@.@@@...@.@..@@..@@@.@..@@.@@@@@@.@@..@@@@@@@@
@@@.@@@@@@@@@@..@@@..@@.@@@@@@.@@@@@@@@@@@.@..@@.@@@.@@@@@@@@@.@@.@@.@@.@@@@@.@@...@@.@@@@@@@@.....@..@.@..@@.@@@@@@.@.@@.@@@@@@@...@.@@@.@
.@@@.@@@@@@@@@@@@@@@@@@..@@@@@@@.@@@@@@@@.@@.@@@@@.@@.@@@@@@@@.@...@@.@@@@..@@..@@@.@@@@..@.@@..@@@@.@.@@@.@@.@.@@..@@.@@@@@@..@@@.@@@@@@@@
.@@.@...@.@@@@@..@@@.@.@@@@.@.@.@.@@@...@@@.@.@..@.@@@@@.@.@@.@@.@.@.@@@.@@.@..@@@@.@.@@@@.@.@.@@@@@@@@@@.@@@@..@@...@@@@.@@@.@@.@@.@@@@@@@
@@.@@.@.@..@@@..@@@@...@@@@..@...@@@@..@.@@@.@..@@.@@@@@@.@.@.@@@@.@@@.@@..@......@@.@.@@@@@.@@@@.@@@.@@.@@@@@.@@@@@..@@@@@.@@@@@@@@@@.@@@@
@@@@..@@@@@...@@@.@.@@@@.@.@@@@.@@@.@@@@.@.@.@@@.@@@@@...@@...@@.@@@@@@@@@.@@..@@@@@@@@@@.@..@@@@@@.@@@@.@@@@...@@@@@.@@@.@@..@@@@@.@@@@@..
@..@@@...@.@.@@@.@@.@....@@@@@.@..@@.@..@@@@.@..@@.@..@@...@.@.@.@.@@@.@@..@..@@@....@...@.@@@@@@.@@.@@@...@..@@@@@.....@.@..@.@..@@@@...@@
.@@@@..@@@@..@..@@.@@@@.@@.@@@@.@@..@.@@@.@@@.@@..@@@@@@.@@.@@@@.@.@@@...@@..@..@@@@@@@@@@@@@.@@.@..@@.@@@.@@@@.@@@@.@@@.@@@.@@@@@@@@.@@@@@
@@@@.@@@@@..@.@@@@...@@@.@@@@..@@@.@@@.@.@@@@@....@.@..@@@@@@@@@@@@@.@@@@@...@@.@.@.@..@.@@@@@.@@@@.@.@@.@@.........@@@.@@.@.@@@@@@@@.@@@@@
@@..@@@.@.@..@@...@.@.@@@...@@@.@..@....@@@@.@@.@@@@@@....@@..@...@..@@@@..@@@.@.@@@@.@@@....@@.@@@.@@@..@@@.@@@@.@@.@@@@@@@@@..@@.@@@@@...
@.@@@.@@@.@.@@@@@..@@@@@.@@@.@@@.@@.@.@.....@@...@@@.@..@..@@@....@@@@@@@....@@.@@@@.@..@@@....@@@@.@.@@.@@@@@@@.@@@@@@.@@.@@.@..@@@@.@@@@@
...@@@..@...@@@.@@@@@@@@@..@.@@...@@@@.@@@@@@.@.@@.@@@@@@.@@@@@@@@@@.@.@..@.@@....@@...@....@.@.@.@@@.@@......@@..@@.@@@@@@.@@@..@@@..@@@.@
@@@@.@..@@@@@@@@@@@@.@.@.@..@@@@@@..@.@@@..@@..@@@@@@@.@@..@.@.@..@@@.@..@..@.@@.@@.@@.@@@@@.@.@@@@@@@@@@.@.@@..@@.@...@@..@...@@@@@@@@@@@@
@@..@@.@@.@.@@@@.@@@@@@.@@.@@@@@@.@..@.@.@@@@@@.@.@@@@@@..@...@@@@@@..@@..@@@@@@@@.@@.@@.@.@@@.@@@@@..@@.@@@.@.@@@@.@@.@..@...@..@@...@..@.
@.@.@@@@@@..@.@@@@@@@.@@@.@@.@..@@.@..@@@@..@..@@@@.@@@...@..@@@@@@@...@..@@@@@...@@....@@.@@.@.@@@.@..@@.@@@@..@@@@@@.@@@.@.@@@.@@@@@@@@@@
@@.@.....@.@.@@@@.@@.@@@@@.@...@@.@....@@@..@..@@@@@@.@@.@...@@.@@.@@@@@@@@.@@@@.@@@.@@@.@.@@.@.@@@@@@@.@..@@@@.@@@.@..@..@@@@.@@@@@..@..@@
.@@.....@@@.@@@.@@@.@@.@...@@..@@@.@..@@.@.@.@@@@...@@.@.@.@@.@@...@@@@.@@@@@@@.@....@@@@..@@@...@@@@..@@...@@@@@..@@@@@@@.@.@@..@.@@..@@.@
@@.@@@@@@.@@.@...@@@@@.@@@@@@....@@@.@@..@@@...@@@@@.@@..@@@@@@@@@.@@.@@@@@@@.@@@...@@@@.@@...@@...@.@@@.@@@@.@@@@@@.@.@@@..@@@@@.@@.@@@@@@
@.@.@.@.@@@@..@@.@@@@..@.@@@@@@.@@..@.@@.@..@@@@@@@@@@.@@...@@@@.@@@@@@@.@@@..@@@@@.@@@@.@@@@@.@....@..@@@.@..@.@@.@@@@@.@@.@@@@@@.@@@.@.@@
@@@@....@@.@@@@@.@.@@@@@@.@@@@@.@@.@.@@@@.@.@....@.@@@@@@@@@@@..@@..@@.@@@....@.@.@@.@@.@..@@@.@@@@@@@@.@.@@.@...@.@...@@@..@.@@@...@@.@@..
@@.@.@...@..@..@@@..@@@@@@@@@@@@@.@@@.@@@@..@@.....@..@@.@@.@@@.@@@@@@@@.@@@....@@.@.@@@@.@.@@..@@@@@@@@@@@.@@.@@.@@@@@@.@@@@@@@@@@.@@...@@
@@@@@@@.@..@..@@..@@@@@@@@@.@@@@@.@@@@.@@@@@...@@.@..@@@.@@@.@@@.@..@@.@@@..@@@@@@@@@@@@.@..@@.@@@.@@@@..@@.@...@..@@.@.@@.@@@....@...@.@@@
@..@@@..@...@..@.@@.@.@@.@.@@.@@.@@@..@@@@@@@@..@@@@@.@.@@@@...@@.@@@@@@@@@@@.@@.@@@@.@.@.@@.@@@..@@@@.@@@.@@@@.@@..@@..@.@.@@@@@@..@.@@@@@
@@@.@..@@@.@@@@@@.@@@..@.@@@@@@@@.@@.@@@@..@@..@...@.@@@@@.@@@.@@@..@@@.@@@@.@@@.@@@@@@@@@.@....@@.@.@@@@@.@.@@@@@.@@@@@@@..@@@@@.@@.@@@@@@
.@@@..@.@@.@@..@.....@..@@.@@@@@..@@..@@@..@@@.@.@@@@@.@@@.@.@@@@@.@@@@@......@@.@.@.@.@.@@@.@@@@@..@.@@.@@@@.@@.....@..@...@@@...@@.@@.@..
@.@@@@.@@@@@.@@.@@@@.@@@@.@@@@@...@@@.@@@@@.@@...@@@@@...@@@@.@.@@..@@@@...@@.....@@.@..@@.@..@@.@@..@.@@..@@@@@.@@@@.@....@.@@@@@@.@..@@@@
@.@@....@@@@@@.@@@.@.@.@.@@@.@.@@@@@@@.@@@@.@.@@@..@@...@@@@@@@@@@@..@.@.@@@@@@.@@..@@@@.@@@@.@.@@@@@.@..@@@.@.@@.@@@@@....@@@@..@@..@.@@.@
@@@@.@@@@@@.@@.@@@@@@.@@@@@@@@.@@@@@@.@.@.@@@.@@@@.@@@.@@@.@@@@.@..@@@.@..@@.@@...@.@@.@.@.@@..@@..@.@@@@@@..@@..@@...@..@.@@@@...@@@@@@..@
@@.@@..@@@@@..@@@..@@@@@..@....@.@@@@...@@.@@.@.@..@..@@.@@@.@@@.@@@@...@@...@@.@.@.@@.@..@@.@@.@@@.@.@@@.@@@@.@@@@@@@@..@.@@.@@@@@..@@.@@@
@@@@@@@@@@@@@@@@@@.@..@@@@@@@.@.@@..@@.@@.@@@@.@@@.@..@.@@@.@@@@@@@@..@.@@.@.@@@.@@..@@@..@@@.@@@@@@@@@@.@...@@.@.@.@@@@@.@@....@@@@@@.@.@@
@@@.@@@@@@.@@.@.@@@@@@.@@@.@...@@@@@@@@..@..@@@..@@@...@@.@@.@.@.@@@@@@@@@@@@.@@.@@@@@@@@@@@@@@@@@@@@@@@@.@@@@..@.@@@@@@@.@.@@..@..@.@.@@.@
.@..@@@.@..@@@@@...@@...@.@@@@@@@@@@@@.@..@@@.@@.@@@@@@@@@@..@.@@.......@@@.@@@@..@@@@@.@.@@@.@.....@@@...@.@..@.@......@.@@.@@@@@@@.@.@@.@
.@@@...@@@@@.@@.@@@@@.@@@.@@@..@@.@@.@@@@@...@@@..@@@@@@...@.@..@..@@@.@@@@@@@.@.@.@.@@@@@..@@.@@..@@@.@@.@@.@@.@@@.@@@.@@@.@@@@@.@@@.@.@.@
@@.@..@@.@.@@@@@@@..@.@@@@..@@@.@.@@@@@@@@..@@..@.@@@.@@@@...@@.@....@@@@@@@.@..@@@@@@.@@@@@.@@.@@@@@@@@@@.@.@@@@.@@@@@@..@@@.@@.@.@@.@@@..
@.@.@@.@@@@@@@@@.@@@@.@..@@@.@..@@@@.@@.@@@@@..@@@@..@...@@@@@@@@......@.@@@@@@@@...@.@@@@.@..@@@.@@@@@@.@@@..@@@@@@@@@@@@.@@.@@@@.@@.@@@@.
`.trim();var C1=A('<button type=button class="btn btn-compact"> Visualization'),P1=A("<pre class=visualization>");function l4(e){return[(()=>{var t=C1(),n=t.firstChild;return t.$$click=()=>e.setShow(r=>!r),j(t,m(D4,{get children(){return[m(d2,{get when(){return e.show},get children(){return m(L1,{})}}),m(d2,{get when(){return!e.show},get children(){return m(c1,{})}})]}}),n),j(t,()=>e.show?"Hide":"Show",n),t})(),m(W,{get when(){return e.show},get children(){var t=P1();return j(t,()=>e.children),t}})]}L3(["click"]);var E1=A("<p> rolls of paper are accessible via forklift."),O1=A("<p>The elves can remove <!> rolls of paper.");const u4=()=>F1.split(`
`).map(e=>e.split("")),L4=e=>{const t=(r,s)=>[-1,0,1].flatMap(i=>[-1,0,1].filter(a=>Math.abs(i)+Math.abs(a)).map(a=>[r+i,s+a]).filter(([a,o])=>o>=0&&o<e.length&&a>=0&&a<e[o].length)),n=[];for(let r=0;r<e.length;r++)for(let s=0;s<e[r].length;s++){if(e[r][s]===".")continue;t(s,r).filter(([a,o])=>e[o][a]==="@").length<4&&n.push([s,r])}return n};function M1(){const e=L4(u4()).length;return(()=>{var t=E1(),n=t.firstChild;return j(t,m(T,{children:e}),n),t})()}function T1(){const[e,t]=I(null),[n,r]=I(""),[s,i]=I(!1);return f3(()=>{t(null);const a=u4();let o,l=0,c;const u=()=>(s()&&r(Y2(a)),o=L4(a),l+=o.length,o.forEach(([R,h])=>a[h][R]="."),o.length?!0:(t(l),clearInterval(c),!1));if(s())c=Q2(u,100);else for(;u(););n3(()=>clearInterval(c))}),[m(W,{get when(){return e()},get children(){var a=O1(),o=a.firstChild,l=o.nextSibling;return l.nextSibling,j(a,m(T,{get children(){return e()}}),l),a}}),m(l4,{get show(){return s()},setShow:i,get children(){return n()}})]}const I1=Object.freeze(Object.defineProperty({__proto__:null,Part1:M1,Part2:T1},Symbol.toStringTag,{value:"Module"})),N1=`
484155089502467-484512074248320
327626855857871-327839020372374
537199009780696-541029389615243
324153507327596-324355964932738
173465989350447-174041788222911
272663544666906-272663544666906
152868490671419-154360265852862
334565314570930-336048544225520
106674076603254-107536478616833
363046535191057-365733424846852
143852691024200-149853768977406
513247409695401-521804010955295
330373417143016-330956155155726
33228806536288-34781051094522
104978535117550-105727571504542
105727571504542-106382462636384
480181317870752-481376655879090
392619573203723-399658137237572
507064558575642-510928211367973
31269013157556-32964221268164
70746675484895-79383949442561
488384911502333-488739524722600
245264863918656-248440699812419
66108233250077-69763977702508
158354044192140-159602837769606
352968125118640-359903538807905
177637503356342-177768248104438
425225371783345-428185880910613
337517774842228-338699568015001
413116823808052-421482453687743
324355964932738-324787726958767
21031505924359-29336206500785
178762017395739-179306786525152
283124359892576-288153917955743
104238754491838-104978535117550
156665511220055-158040260496243
338247146166164-339788754907221
179536222619975-180228661508492
474667184537974-475812255497205
513247409695401-521804010955295
106887900874655-107536478616833
175392398092002-175732866298956
526139005782144-526139005782144
35410277445200-36916358845884
164076435824111-169840064957070
133425032733176-139934998714644
490674555618697-490885111740712
179786208538406-180553730844907
302346553875535-307433027610821
179974705855165-180553730844907
535002393179139-538558642399142
44042155826769-48485113111141
213624552370199-219348371651378
172619324074780-172877499427963
94528043269341-98873034317961
205261145714311-209868219379161
184779217941336-186667644665468
322101662480758-322234504977633
262039770461003-262039770461003
41875022229570-45906391518435
123353799692990-123353799692990
472616439285348-474000437648419
164076435824111-169840064957070
177768248104438-177966938826842
171117176820731-171869292146532
547332612003149-547332612003149
37424193557969-39105929131744
101571946459934-102315599870875
494764112303360-500892212366204
215878956252212-219348371651378
332071647060451-333275653431219
172223413862387-172619324074780
343059617550421-349658206244594
32398106302077-33821920045244
62268552683460-69763977702508
479178474644199-480641496160741
103399160626151-103679584369887
526139005782145-530329158936682
477382678085753-478659206508893
352968125118640-352968125118640
252193370768120-260075547729033
503954701580-6201080066693
6201080066694-7139048210272
491761166450629-491902594324657
324983512198420-325884415693302
316494299906814-320522086960363
467509841566778-471811317565211
154583318057153-156059831409040
307433027610822-309166768178612
241735356768237-245264863918655
106189609258943-106887900874655
113184461842736-113184461842736
157309114531452-158807509412759
405794282692748-410151465111344
322562853182400-323349337173519
329392752538402-329600089281791
416454584217619-418657627464396
476445154558831-477740195072234
52321883454900-57264044440557
285940653177318-290122783606908
139934998714644-139934998714644
104238754491838-104978535117550
435069087551255-438068571490810
106674076603254-106887900874655
494764112303360-498339466050479
488384911502333-488739524722600
433395071188269-441714193170789
483173469016124-483876364342976
382952029544932-382952029544932
272663544666907-278898829344501
30517568996683-31934161587780
446467331372924-449790867859745
480957198725802-482308516753345
340216156305507-341718829614154
335576964661675-337073420302056
171269045448034-171869292146532
322234504977633-322838357184566
328299411279389-329144168796675
36486032858102-37779434330475
482564738939348-483424624675311
329843762496517-330062103963728
343059617550421-346964428300776
141909036863330-147391313413681
327247289135445-327839020372374
10922455590682-18048485396100
339273504804747-340626526043886
453340687216566-461539243082300
24552273221200-26517533186483
374979031812261-378129333728028
510928211367974-510928211367974
478218077956627-479645063914504
174041788222911-174346031234314
559173122141199-562097848259759
113184461842737-118169846892007
382952029544933-390301071864488
81543407926368-84497261070632
105408705742278-106024442272978
491531238739012-491902594324657
428185880910613-428185880910613
260075547729034-260075547729034
313883655354623-320522086960363
174041788222911-174346031234314
191717416530192-199687058207157
336507649028291-337969660720965
153577994966155-155092017715908
103183231617090-103399160626151
70746675484895-76153416335407
57264044440558-57264044440558
332803389475321-334388906138526
171269045448034-171869292146532
38316177713166-40091262905581
84497261070634-87512083133515
106189609258943-106674076603254
378129333728029-378129333728029
547332612003149-548435610366690
410151465111344-410151465111344
486966262648163-487773819017583
464168729967780-467509841566777
173265729856132-173465989350447
155722135599830-156927657943610
473459660138827-475150269845108
333858227074656-335312735045959
487773819017583-488249317523391
330373417143016-330623658555129
94528043269341-98873034317961
392619573203723-399658137237572
203106437735893-205261145714309
232703951471611-239341944463919
172223413862387-173033171008712
182821432918211-190283971945510
151130743713884-152260090603062
475285443653571-476657816081333
199687058207157-199687058207157
221829521326154-229542350570658
159395463557657-160782166956609
179306786525152-179786208538406
174041788222911-174805432404479
262039770461003-269736060293387
554841339364567-559173122141197
123353799692990-128560306281572
444809669679604-449790867859745
101831951224850-102162268389164
365733424846854-370976617474324
34440576402312-36063022673365
152001032352489-153287102386040
292589544764606-298318988515383
232703951471611-234901660011328

465648994325263
485726374948528
475690590637294
196300608673016
325500055841075
200391175665352
17944830705256
319006389890415
151008315208808
330762627717238
540107358809277
56579943828298
304827419309353
218793968762758
558979672005912
463149947708692
207132310251074
27688126629980
410787718804716
266815787492858
349549957351422
453161293260865
440124194013821
224935111486614
458189929672612
222354803951091
385496645295297
159737743445676
435085730350147
339049336984817
108289691196866
63269002874293
6685408969929
560711096442918
447842282857842
384258392057600
418317339187012
526232998972781
318185626019900
173954241244574
76885713250977
138953839992455
38446781284879
2993091307541
89328498019533
287583058061187
253388687193171
65815885278170
143667792195956
56993769071203
158687367691714
315658700075614
158128483336434
222191777973717
272622212776187
545192047362089
376186038765117
242947268747893
471085877835535
129965216056599
207778752587957
252471880342054
262906375116580
534224313922897
413878652736777
197035964264903
279549224671724
44153866205768
25490437132400
456047749271344
460454825298853
269978250340095
25320286312005
273115319581907
150161800308438
110871266684605
319420592547997
345738432687570
305793320149559
148713889489739
499294517093216
31226367130878
172612656724594
430075577395089
539700736071107
248490622736321
357783308268551
265119880018962
231291290345527
226150538134399
510440855670848
557968955261200
366753606894739
548046875564109
487949898298134
508297681301651
85813530184312
26085582228207
248098174814414
74638591550079
308178419048394
95835736571751
275218649532607
394868159876364
10285869395759
465200373669687
286750097376153
420455004515755
338547854534866
348720612223320
12958774971518
245763283083902
332351236310594
276158906164860
59042749656947
451943792959362
330391629603314
48157493287167
398240465941344
414801973326926
378550285283921
22163595467061
480779429139335
556351665029871
559638909723239
347211750008710
324727023947861
177948083905540
62813318066679
339398092073741
400934619177864
86790992465901
15852914116516
154253986279527
42345202069561
107418220431964
327726786214697
479901768278245
490972852957601
501860254654435
187476104076465
515234099215970
105613677798811
76576992517982
63602685134794
370446294064094
125293600622010
348624405047279
229414892467206
550111725377520
253601022800835
246015599038208
26716224090075
106628682325906
149367265754691
344227585534865
414436225034212
373044568770668
508032292480710
538747633140176
239129875011217
267903056026239
269079461276087
390868090347716
138622100881942
38844613237894
322994927085853
454018508978606
311534498907291
329122626881814
180970002094700
376068250617145
177634058757307
490881830234258
7017946450359
410609014613452
358602206782982
230210485077799
166311033674041
254871960396830
479583246001450
418333891442833
13018415298209
110436931200781
377848248759981
37055407062199
395771536090537
285625857320076
457071547846483
454462175815748
243572281764729
493838152934481
136306603477083
272965132772929
359523134895474
218062604316076
196080099320404
62242223744221
147151311756565
146316101931905
146976702862809
510395092805891
131718330043246
449648193586388
435829963434261
440625359718663
365172596783271
540396006775329
234779165152900
264534238804314
66806025266187
275069701001412
366062798029719
244456093804383
527700086323868
166529351298605
362955521436431
482919085310378
283257341505810
153232880696306
394552242781153
343768049178508
333950895480298
551853617580089
143677863519490
74060167453409
456310322303431
134025061222202
408728099607080
34573640312491
193928098114300
490066275814021
86303373869837
245645106780938
52636102151296
297258182795550
278363025356332
119956165401884
39912089231581
427018367648629
487183658692128
223315477094328
517175429318316
68881075516914
33094051437104
388410883822250
531869844960512
256328382826175
175275083136438
83289029741724
465763280963667
31646298618953
333168648755117
366242861943763
75156722777953
508265614839503
98796946465642
559020601116488
5467108109577
105366513196271
164428413619744
83151142391341
185014262064857
497629158286618
31153262748994
298043610770489
283925378412319
28694803075972
455906018804610
151868806777935
363620235563789
36347910669144
196354303370134
388483018172112
360582809724943
232150072570533
96237634389515
505851323146100
168577897920329
268532747533171
414271786676737
510738155126151
42288604743357
464845452560036
350521576763663
2790553607883
286601432695738
68581668330233
497747478353430
488060165737320
210394112436035
531938419333390
235733370183364
499411335343391
406594297115866
534179913427567
141237867072244
518890750016543
25086593475095
276643782014667
103653487570393
33747448093872
85394611729114
180863610744209
230621930891177
65398129849574
106310501531592
105863422604792
378489487582599
331387514827061
6561622918944
432933925759374
499456656539730
222338928476450
394316775471077
306705011159801
517178697140196
148102225673100
55116866718253
301492363170310
424350017261844
104156598979714
6368571580028
145394106705778
517700100504249
455652082476752
421442262713380
373884444959820
420923707716902
529939677020279
263306921865810
415279461779662
158195109422211
554221248253924
193383508459957
217823095636530
441869358121903
286873626157484
34675944352140
274323027667503
264311656855279
387673053556249
82868052293172
316511965956741
151612982915105
425826466685883
491238761663825
350486059871862
413513421497176
236567477096492
408896153104255
467470679972033
164704456622599
63685936847397
390979670666774
474928971607942
135026465304050
359056540419958
66745809311184
126018096549244
305062744049016
194071199277840
501509723548996
476827185200581
275626747234735
430013005023040
518410150791484
72131242700198
340383414749962
477665601493098
535561806427643
407555137195755
217291279819907
557986608664834
16142893632580
182124459880116
404140756484309
296110516420275
171643098351907
486931627408613
207113534380670
524077154282500
228864907023232
383365617894903
70103795249694
50512979173728
397605945336496
26013092471759
395241421268710
465334300964440
261858369021755
527684923283476
427630216321229
198238026697491
457457910251150
401506984329048
349178450263450
546647139996296
184462947778898
306367401529528
539563594059532
39345489728847
103010746227197
98116787456608
386846358756692
104610778208354
26576694008613
156565542157075
192084240612390
259556465772815
15904195560740
236132852584233
434644090364311
99881487051684
426905232171523
522034565059278
314506139726295
299499714003961
183820232806506
206850974659307
135663766665821
102089365540214
425945138241774
414725338716582
84837001135774
226352656640955
288721160221131
116097857625794
468257741655738
349131393125042
97858344250848
475522348864872
472826892261099
69455870488880
131805399737993
216094584070180
58455712847916
366711602802177
357054615859808
78357619210085
152990852088797
342524073993073
450043621091613
201845269573400
142430583159100
556503021827212
85161652291815
290058445580149
178728724583453
418131998829096
427697703225770
25904543179754
105297352146790
418123737779902
383678551854912
468730983371397
124787414786575
308383651669639
53248099552727
171498826192589
376406135890811
445258595316244
263231728643009
324208810777119
388583324784949
458331277070896
148031092492796
382018948513853
136077295163143
308555646984109
14614285259270
461653649248830
158318118603163
435013238520636
326150076739969
475399121253465
156106959019712
208688809717157
29842605290273
202268072059860
282993801201526
153365611642795
540921552967436
320960886502819
469707792686103
105242779432445
479012505415829
118156584567709
70836294505690
528644756078017
102749524223928
343794580364717
556579065871742
38122311901867
312016631085668
505198292111546
144563040821956
406991234444632
160317680143063
350140714964482
66925480163405
232902001009144
536755664481759
21196120357836
173665364262475
5420853189190
101147507820255
284293797695935
461399398995401
464546187321105
541878525900454
279404587265427
550800427007755
235673928376398
452515441844173
509555045565249
481221087162142
415796518011797
555464484523481
245486050836754
1312729187484
461351154425133
446085579349094
539735263671492
324308812517461
267452870204054
179862138942359
87063631074434
77676965428230
47495874689531
83250190393567
287503596941017
396444990457477
124519706839242
157839982935656
495062791439310
154512214075405
208785614070698
418534616900849
487111934977198
116686672775696
17278207794169
297792271040321
545485324397541
26910544487003
227986077033638
331470468561325
396739005101185
420261747916524
60882138247537
314400885398908
507321940974182
479607363750629
274028634022721
290214480779409
255150656469724
406333418726889
209633642668851
82851650413018
174415875855808
347647962998358
142865843659110
346951844710054
145296662557462
370773076584528
126214747850220
547652353458667
1023351263968
169755175398654
518599429906635
33846742681732
168672976381620
224753538745291
484122613844692
204986873429997
548186280004784
151971816872087
2413001123517
215217411624094
252715157090472
246882536494029
314841111397180
45576108912322
274774894152420
364637463845199
158997318823023
467729730148300
364161875382173
27548860861942
118010407564078
153109272880074
341236750027155
548263482896529
354565236617873
426774118014985
203943800062495
364485490818434
347129355238045
389282748200872
402591881455477
37109245860638
322524359738963
23352577264101
60112554654836
99069004043586
335518138579949
557705378914003
332954879797108
159249252478289
192303686883130
84311997851419
323811763014534
397881987568871
41263853930161
314204432093487
94630391383561
125537195647648
455484220609279
275106701648714
161582427450661
136613479485433
196012947779387
498418367271002
343934545259218
2109961804682
225347192591111
187751534783876
62432768102721
90240593769245
243347328031763
180262096694629
400611561547347
68580731244073
448857492874889
162511353947722
174067633194412
174454835018391
6733952033973
512566408826733
196428147016599
173987768218259
438425145431191
98795447051414
562151356355741
511061394152804
464834443408759
258839398859279
63647412759537
500359969724673
414674931688430
486342755507303
383495876744797
247959228222071
478395383849061
335314989684365
401680212074279
54662260419310
195575312971134
329701660363513
557203258155487
303934913812278
549196383540217
316558010658840
388894303598071
508495705576650
365382037848947
434160208706186
490719268527649
22757508593407
74173060080537
394529116580444
198579420316664
218648394504284
250844719945739
519177115726079
210995283950867
478926704240966
322125338086841
222231141633906
24243547233806
475228412705872
538016030134645
539685388009141
112200167208259
34998189396523
242034427621752
481097694329618
162102242581143
171163156509241
417698127705874
289327511951933
150231091159121
86318216985599
212157894516578
211034711980000
352280810580118
215902883235127
501602712242483
275284982144704
228519292815627
255308739610203
388103293212389
11062160873834
211605059954128
409504977518037
166887900685401
269906845954803
242809833732335
70542864360841
29246218481549
28171334842885
408392861262973
25987925230493
69690389331629
64881435704887
538200095965370
464951259269603
62530051010143
481562836269822
275588779592943
121462168598953
294262042995506
362773254065101
185452277418500
253776377158625
553020845442987
450981282843183
482825359338299
92951712090079
401789488969013
82691587449395
460547332437770
550369009765200
204765006219353
383424935026763
411451885278109
544768399768969
354106107278808
351814733606870
345205736531054
553990438058685
234530753617837
142037700543505
166205529744183
282574350096660
349310470286847
461168096150528
174088527209052
273407649865353
560772075847388
373669265382428
527940044219641
526220055349415
61333301482305
277381088312766
398653996346101
537358286465034
420041777878728
190904884792541
414135951466143
307427122957800
175496838477939
224045469192409
396641535383079
12932297615290
29305595689889
320494881948653
35634989953013
463400091256918
364308441200109
287733984223493
286312417663097
14476535040100
72345157790618
467979218411243
398300177864406
509810162779476
86494614774768
337887243617068
183004315538293
301315508280444
32819467122530
364101460589897
272127482531487
14661880480118
558085063855258
477774912319456
149379002920977
182144611410986
261364167690385
297193844543228
368675600885719
217918407064700
250917765917926
485979592516414
27419266468566
281119855989076
53342876607506
168385081690418
68071599924640
295085841498947
433634500661453
98210283393150
417925823041044
118046126998437
125931519008518
54101783039771
296563685725698
125385974251141
140596318930571
297613888680909
556556247766534
77556654164724
520726672992536
527962296094224
314838704938152
104567359857678
229378218651487
535163096560007
421878548905206
22292022004456
226694762920368
325433562224972
350927689838638
68747614466057
278288373610990
123329215731971
127638721913602
262467205139544
439437567436922
33169828276782
365819063105421
107419826143114
159492842181615
245826906772378
33701292015819
111130590303550
143267425161404
88518370001945
99709748831684
507144340395665
17005295074631
394597409724205
456109774133764
220266796928414
194337113829451
168376744056032
196324880604945
316303815900806
260225614006305
126676005306073
287800426485627
296010450965831
452327757155989
386915979105242
12884154162742
178299434462745
289780425057671
524692852474367
8049748421905
287512776418562
497495353423812
356953912190227
105152422060130
75715726194756
449471922988083
178960727226775
16506135862435
380008863901350
484802537945341
487269642070212
257689206088793
437162197656802
167690406405337
295131584027702
423128589715610
247857337979598
447294653683025
528754659447288
197150348372392
85527781232882
325643026875656
85416649290624
343351960079471
222144605855719
95242848385552
418257702534682
479749851030221
439327119253406
216007727430876
159556006351623
285136231800700
266346349408836
213204893467649
132329408393058
167396552278400
13430771760342
272999234705345
2181291406670
354267124354129
3915477000394
275667302930232
355703471654279
171573697499122
476108734602434
250333255771422
284187391074728
542883247228251
268388512130581
348724909067450
560982897255963
82425178945262
36793327303651
472679026025886
533185603352637
440862633593872
314693292941017
377142702705622
146391068281354
436927110770106
195928939466611
464708458561253
534281577040719
112247600527291
76450436291102
297995326049950
13894251352689
124192647936767
459599244668614
283615760282882
431457068564814
514669417032595
393253024342883
303594090232073
216329092129347
451781660318266
538732013128567
51394498892905
97563862042322
555360678665621
77125009216030
6152085147952
479065478792799
106892288326794
425624436244334
364781708077558
23520178833448
52848164391780
216773473113383
64529056817782
366397062395405
533542103965367
506373117858768
204343504228015
126207040767367
245758805851139
255365791457351
403718281368516
431078684518872
136406177504001
14152106004280
481612673665150
5255589275675
556247473776668
146648767168484
534052369132154
255694301437722
174802115600729
85420697896041
9915837268881
356870117868642
312389014496808
526053044616034
368205286083856
216240149607142
204496240924157
533836527185372
376000060036219
552828975199029
53503756659340
185432188845668
524669951477891
455840130412128
5212891951706
442635246848462
459658055857457
163443771410584
12527116890639
344961051023748
117138982479414
198297242149820
283663699949587
424555341493375
435688311529195
342348741243927
38933572204739
554703298864698
395433357795370
93543372994982
495748168198728
`.trim();var D1=A("<p> of the available ingredient IDs are fresh."),B1=A("<p> ingredient IDs are considered fresh.");const c4=()=>{const[e,t]=N1.split(`

`);return{freshIds:e.split(`
`).map(n=>n.split("-").map(Number)),ingredients:t.split(`
`).map(Number)}},V1=(e,t)=>t.some(([n,r])=>e>=n&&e<=r),U1=e=>{const[t,...n]=e.sort(V3(([s])=>s,([,s])=>s)),r=[t];for(const[s,i]of n){const a=r.length-1,o=r[a][1];s<=o?r[a][1]=Math.max(o,i):r.push([s,i])}return r};function H1(){const{freshIds:e,ingredients:t}=c4(),n=t.filter(r=>V1(r,e)).length;return(()=>{var r=D1(),s=r.firstChild;return j(r,m(T,{children:n}),s),r})()}function W1(){const{freshIds:e}=c4(),t=U1(e).map(([n,r])=>r-n+1).reduce(Z);return(()=>{var n=B1(),r=n.firstChild;return j(n,m(T,{children:t}),r),n})()}const K1=Object.freeze(Object.defineProperty({__proto__:null,Part1:H1,Part2:W1},Symbol.toStringTag,{value:"Module"})),R4=`
6   25 26 18 71  23   9  444 224 56  69 132    3 179  3 53 97 75   325 1  61 18  9   57 53 11 3785  91  6 815 24 3  1238  1 241 77 56  754   43 48 6539 15 22 4   56 5  57 219 251 66 8198 3   5 74 62 4787 568 551 275 3   931 8  5139 531 992 6499  5   79 9889   29 2     8 44 14 897 58 8973 135 445 48 537 168  68 5  5   55   32 966 58 23 27 68   46 8836 14 49 2858    7  8 478 77 67 543  9  958 845 142 64 97  4 591 85   79 73 85 545 999  9 5   84 29 66   245 762 128 9  678 6  474 9338 84   83 564 964 195   63  66 38 6749 666 526 6561 26 76  6 27 254 31  4 44  9  78 5536 56 754 5   5122 94  4 961  3 53 618 991 89   57 468 682 72 47 916 35 5  7237 3    9 26  8  741 849 63  513 58 129 113 69 451 92 372 71  85 398  96 84 25 429  76 12   74  6 89 2  27   5 5125  1 6522 868 137 3496 8  537 92 314 34 71 492 25 989 1977 912 26   7 2938  23  21  784 572 842  99 558 6   316 63 57 1  47 6  15  1796 2  7   53 622 88 16   5  4   7 89 25   6 952  9  17 76 4  51 39   3 3     9 6353 435  86 8526 26 313  14  35 59 77 8    192 7353 76  7  728 5  114 99 3654 829  1 11   38 9648 52 9761 51  8   3   6 29  73   4 75 233   2 52   52 362  7 1269 375  18 795 13 66 33   8 465 35  347 43  75 343 6491 48  8 45 7  9567  471 559 165 86 1998 95    8 817   54 89 72 53 757 51  94  1424  6 1544 27 66  79 28   763 3  95   7  288   2 171 81  119 923  57 96 58 913 8869 42 35   8 49   2 78   2   6 261 87 34   414 553 9   53 13 41 7371  129   38  9 684 7356 357 249 21 77   19 454 698 13  93 976 83  758 28  5   79 17 25  48 5841 98 22 36 6  682 7932 289 67 72 858 692   9 52 26 13   7   527 74  39  56 43 811 55 4   778 7965 37 6957 74 526  96 4   56  284 53 7137  1 97 3412   3 385  87 39  8 63  1  6 86 13  62    5 34 71 69 3  27   948 9935 26 33 967  2    8 87 89 22 9     3 63    8 12   3   62 28 43 2  11  775 773  3   85 12 124 48 51 2321 213  9 83 4  38 4   32 75 84  38   5 225 63  9 66 1974 88 362   1 21  97 43 57 46 81 9    3813 127  78 66 3  181 451 163 315 3  44   18 617  12 822 8439 74 4   833 565  4 83 852 885 365 849 41 41 1884 27 561 24   2 92 75 376 3156 5151 86 322 2    1 19 65 618 3782 548 825 28 45 6935 47   9 46   1 1624 1138 869 57 165 3212 271 929 964 37 917 19 4   351 53 55 47 952 966  95 6  751 8986 116 5    948   29 71   8  85 14   87 58 8495 5431 852 35   91 94   3 487 548 87 76 5   145 26 48  18 1789 2     9 76  538  597 34  4 3  96   9  956  263 3  43  9 96 8438  5 4  63   41   3 699 39   578   19 259 454   89 969 857 281  1 6   164 36 57 57  1  345 399   2 33 188 976 6776 25 46 79 17  85  9 276 42 922 19 58 3955  7 5625 46 5392 5639 421 833 925  53 41   4  78 51 817 4627 9  49 559   925 85 11  85 6  5776 51 796 49   423  86 698 6   28 7835  49 7932 56 14 4219 386  8 987 348 468 14   114 42 1628 99 134 95 8   159   43  3 42 2316 249 63 358 97 29 966 826  651 6746 284 164 155 71   9 22  26 73  6  68 76 13  1   9 57  49 6  83 57 724  225 79 853 357   61 4988 74  58  8   4  73 627 171 846 79 6  188  67 6  76  2 7574 1  42   69 2648 64  28 92  3 31   6    25 8  26  6  37 458 2797 31 5   3234 87 475 2924 75 87 997 8954 396 532 76    4 7   129  36 675 12 7    713   62   7 17 823 71 27 7   933 25  9      6 6633 3567 35  31 63 133 456 421 51   99 35 235 16  7 766 425  147 3  761 248 296 292 6   811 4   99  94  75 7  272 355  63 239 666  1  326 38 69  63    8 668 45   24 936 773 4  23 5323 91  617 716 89 69 63 685  5 884 37  9 878 96 634 9  29 564   4 228 82   7  2522 556 12  19 44 822 67    71 4  286 87  92 19 2   61 63   79 9255    2 2331 63 35 324 5  78   187  18 21 96 53  156   6 64 8   24  7  114 326  146 73 56 97 42  978 9  85 71 24 33 29  329 748 63  629 75 4925 833 224 478  23 14 53 55 5     84 6246 6  42  893  85 6611  5 764  56 118 2388 24 63 6   329 672  62 27 949 143 62  2    88  8 5119 42 659 67  916 16   71 37   95
61  34 67 19 359 18  53  794 654 86 924 979  483 314  3 97 92 46   169 6  87 596 7   25 35 39 36   289 17 416 26 41 3411 71 979 37 49  792   84 34 4456 87 24 1   37 5  51  25 263 3  1197 33  7 93 68 7432 894 671 363 59  887 5  5556 592 947  166 86  946 5263  828 55  652 29 95 516 33 977  797 862 86 998 418  49 6  549 69 4849 639  3 54 75 57   32 2469 11 56 1587   78 61 868 64 95 443  98 273 782 163 64 15 12 436 855  78 68 12 959 216 98 4   55 32 3222 512 695  57 8   31 33 262 8878 33   95 589 756 564  429 762 59 7299 772 462 732  54 26  4 58 821 26 61 46  83 57  615 16  44 65  8315 37 99 118  4 52 883 388 88  541 743 933 75 28 144 77 21 7832 1  563 359 85 375 521 54  429 91 57  945 66 273 84 448 74  93 485  91 65 13 619 255 19   76 45 69 76 14  34  823 65 2776 933 96  5123 8  192 97 196 18 22 989 94 927 3333 531 94  24 6947  19 739 3352 819 852  87 178 477 325 56 17 1  14 2  957 8691 79 88  21 826 21 14  45 48  59 39 892 68 463 91  39 24 39 65 21  15 68  929 533  649  91 5834 45 1862 48  12 41 42 393  928 4253 95  5  834 29 427 42 8951 858 54 552  29 2749 94 198  92  7  37 125 69  55 129 97 799   2 854  94  85 74 7578 271  35 584 99 13 36 618 325 12  823 26 314 695 7666 89 16 55 42 3858 5436 486 81  65 4471 87  144 321  557 26 28 42 229 844 922 8761 58 6794 81 337 16 4597 775 7  8497 68 835  68 123 359 437 9878 98 96 38 978 8544 79 38  67 58 451 888  93 72 822 96 72  5774 324 54  87 7  54  347  965 6941 34 923 3777 266 856 41 515  7  496 582 95  18 858 96 6549 45  783 63 56 438 41 2519 76 25 57 8  839 2681  59 21 16 288 635 255 75 37 2263 64  883 29  81 396 98 812  5 2    23 3737 35  143 39 183  89 39  324 153 73 2477 89 62  993 114 946  82 85 64 39  7 68 27 447 28   88 38 62 87 1  3786 614 5524 42 13 569 39   82 96 42 95 462   3 223  19 65  76 1155 47 19 4  324 726 166 93  373 12 145  5 69 8416 973 49 89 38 63 6   17 33 57  72  99 41  25  6 12 8679 81 772 565 39  18 51 66 79 56 12   8614 638  87 36 17 882 771 354 47  63 34   79 2581 62 477 9571 16 84  851 59  29 35 118 176  46 961 73 45 7467 89 478 21 518 88 41 122 1745 2934 21 371 68  55 26 64 268 3519 659 425  5 57 778  22   9 81   9 7951 1364 822 95 539 7885 468 153 391 33 899 61 89  385 83 36 56 864 157 836 57 125 512  568 625  138  393 767  2  85 55  876 11 3236 8368 459 82  833 86  45 444 883 22  2 25  256 65 77 949 2799 12    3 58  9517 236 57  9 1  83   8 6731 4193 36 67  4 87 1685 77 58 8226 46  52 293 47   442   68 682 976   23 671 543 134  4 93  523 78 32 78  1  748 918  33 47 498 852 8552 34 75 99 18  64 44 941 45 842 91 32 1676  3 865  75 1747 3693 936 724 681  64 66  28 574 83 676 9246 8  95 4386 9153 56 227 86 9  1245 48 862 348  629 454 378 12  43 7377  98  723 92 35 5224 486 88 649 417 752 2971 675 71 3465 35 36  46 84  478 7671 12 27   23 841 42 145 24 48 593 3245 266 3656 928 939 676 31 425 41 283 81 77 615 33 21 85  98 86  22 83 72 89 172 2864 87 585 2293 167 4365 66  63  5   7 823 996 239 269 88 1  647 424 9  32  8 1727 77 91   35 5829 118 63 69 67 5486 365  34 5  31 98 495 183 3464 88 8   7983 21 712 6764 15 96 434 61   313 329 51   38 53  976 715 183 44 8   2745  397  67 48 535 77 73 632 296 22  97  7447 8252 7818 47 162 61 438 612 696 84  757 32 596 68  8 358 387 1277 9  171 795 273 393 218  21 135 262 22 185 9  923 6764 85 432 3844 3  973  9 26  77  886 995 661  63 588 926 6  48  597 572 665 779 84  4 34 134  1 81  77 46 528 95 171 11 27 752  57 457 3479 2  9241 241 28  48 27 68  4913  83 26 626 851 13 72 9  477 193  48 4957   53 2385 72 92 914 7  1955 419  53 5  96 28  627  72 23 46  553 2  398 4168 668 88 89 42 681 514 55 96 65 71 12 27 6144  78 893 987 72 6183 984 431  97  26 88 32 44 41   262 6464 9  82  8613 18 7171 93 761 511 662 1279 95 71 43  65  243  57 18 613 611 47  7  8536 14 2483 51 294 364 558 1712 52 855 171
32  79 35 6  654 52  12 7847 214 69 883 793 5716 821  5  3 99 7393 139 48 83 735 32  71 6  4  87   615 29  19 67 21 4147 98 455 79 865 954   62 26 8395 81 16 94  92 77 64  46  65 2  72   74 38 93 19 5866   2  92 673 675 339 14 4993  46 799    1 37 7413 9754 5163 64 5774 3  56 774 87 857  395 597 66 675 3943 86 68 537 22 1385 218  8  2  2 55  595  154 11 31 476  6795 35 489 84 13 7226 54 934 227 277 67  7 12 338 2774 82 48 41   1 798 78 3   97 22 3845 913 751  49 55  81 52 598 87   521 974 23   89 519 8819 632 69  664 187 225 362  51 76  5 62 811 77 37 87  58 66   79 25  75 563 2868 52 91 792  3 16 3   983 55 3198 552 169 65 54 49  33 81 26   36 899 446 27 222 177 547 915 33 37  221 47  66 24 917 14  94 394 482 69 13 279 253 98 4518 38 48 41 95 958  318 52 8771 227 46  117  96  54 88 579 94 42 127 28 637 5943 47  817 61  624 287 683 4274 3   31  657 772 673 958 16 5  52 75 42 768  776 94 44 326 141 16 768 94 25 187 35 975 41 834 64 728 81 35 79 414 48 225 921 98    44 475 3974  1 7378 47 567 97  7 6219 877 621  973 56 544 88 427  7 119  121 31 871  67 3278 79 335  88 95 149 659 65 578 152 28 34  428 2812 83  92 46 689  394  15 153 91 42 27 574 921 528 99  68 321 598 7466 36 46 55 38  753 3788 3   2   56 2162 99 8823 73   848  8 87 31 28  189 286 386  47 2848 75 937 65 4767 697 68 1252 76 973 674  75 392 962 3297 3  37 96  29 5673 99 355 67 5  321 527  83 94  33  7 358 4469 491 489 27 3  74  538 8945 5422 45 42  7897 7   18  41 2453 9  65  564 747 15 522 86 9879 667 376 64 12 913 59 7289 85 61  1 52 972 27    21 71 49 162 451 936 57 86 3836 714 392 644 18 985 25 968  5 266  57 1532 45  594 61 5798 32 283 366 23  89 963  22 22  951 556 24   32 49 14 22 25 79 77 651 65 7232 49 56 96 6  8195 361 5222 82 87 125 85 5215 93 6  23 3698 76 999 973 32  16 1751 33 73 72 237 814 656 82 1655 89 563  3 55 257   53 78 78 74 37 27 966 69 497 53 113 94  63 57 76 7515 84 89  358 1  299 94 43 21 48 2995 958  1532 66 63 78 675 129 886 78  22 494 894 2735 11 783 6543 1  61 7936 63  97 57 676 594  48 518 16 35  436 33 951 28 424 45 27 737 3799 6746 58 2   14 989 74 34 283 891   55 812  4 78 326  89 778 17 371 6129  387 755 55  82 9381 742  96 647 99 946 48 18  986 25 93 97 731 265 646 46 983 543    9 4263 898  694 4929 75  8 325 439 17 29   71   779 9  2534 29 746 127   4  6  6 314 895 86 61 459 847  24  838 697 1933 526 89 23 49 181 89 5277 5287 25 7  79 79 1519 21 99 8267 25  73  36 424    9 8273 592 9155 721 675  29 567 79 411 914 63 99 833 81 257 421 978 2  253 214 5444 87 65 16 832 85 45 463 56 95  35 53 1297 54 574  12 7637  616 696 521 892 147 47  17 882 25 225 2336 55 27 8151 6684 28 322 39 86  569 67 494 9253  45 977 655 249 8    15 575  857 81 72 6927 69  62 68  282 844 1849  23 43  255 18 17  39 46  58  2374 82 62   41 565 49 837 19 39 474 1219 78  98    11  54 863 92 923 65 417 98 52 786 63 36 38  88 772 81 21 38 17 87  3984 53 381 4497 922 5282 96  68  1  18 188 157 964 429 99 56 214 898 33 77 98 838  88 21  748 7835 539 2  29 17 3776 916  61 72 98 39 281 192   14 67 765 7897 39 741 1358 86 33  87 76   46  383 15 2994 196 46  524 825 41 653 6487 7457  63 16 817 94 6  652 524 232 444 6579 9359 8982 99 339 24  25 597 517 85  564 57  52 1  31  31 458 1781 22  59 753 783 848 842  13 194 359 47 574 38 552 9228  7 3   1885 5  76   6 1  743 3466 853 6425 13 337  68 1  82  454 227 681 287 41  8 38 441  1 5   23 66 432 88 534 47 74 892 392 851 9797 3  7123   5 819 93 47 18  4256 416 59 359 777 9  87 52 274 891  43 9653 7564 8681 37 17 99  9  2378 143 579 1  77 581  91 313 97 278 863 81 232 8384 389 41 96 88 179 618 29  4 62 58 58 64 9939  38 631 346 46 3685 98  415  78 633 41 83 82 672 5384 7844 97 592 5823 35 815  37 938 186 11  915  83 79 155 65  68  191 93 232 392 935 76 6443 99 7273 56 412 898 521 1581 69 434 873
56 487 56 3  128 43 437 6351   7 17 145 354 6554 614 49  2 69 3666   4 24 7  875 881 96 1  8  65   264 73  63 59 45 1469 81 455 84 179 37  6422 13   51 11 66 246 66 66 26  92  87 7  73   84 85 66 41 91     5  39  37 439  97 72    6  29  96    2 88 3165 1485 2645 25 8918 2  17 552 39 17   344  16  7 76  7434 24 12 796 89 4668 395  4  5  4 447 986  954 2  38 515  8976 33 649 11 33 1511 92  17  33 365  7  7 49 17  9768 17 26 52   6 53  86 99 698 54 7594 193 22   31 32  11 59 283 8    459 781 8     6 898 2436 721 47    9 613 922 768  15 88 46 89 417 37 55 754 29 86   69 99  32 791  141 97 79 986 24 96 7     4  6 2182 554 142 15 64 17  29 82 71   63 293 171 14 1   233 577 798 8  86  932 7   86  4 415 83 169 262 194 66 86 929 914 85 1816 86 17 37 44 578   71 83  188 213 22  721  77  57 98 693 55 8    1 45 26  9273 7   565 68  291 937 897 7575 8   63  359 741 734 297 28 1  47  8 29 696  493 84 65 577 237 29 479 87 47 582 91 153 34 747 28 466 55 61 33 518 66 235 367 74    28 987  525  9 3927  8 125 14  8 7744 611 588  957 63  43 32 418  3 78   1   15 7442  1 31   86 24   76 91 837 722 43 238 882 45 3   856 3699 72  42 49 85   2557 15 75  11 81 32 928 833 221 63   4 327  49   26 43 38  6 56   66 5482 7   6   46 42   73 5196 82  9583  1 65 45 95  389 228 4    57 8889 8  531  8 7555 143 77 2864 63  59 999  55 291   6 3989 3  1  26  42  793  2 153 44 6  583 6875 38 59  58  5 744 8968 174 747  2 3  5   346 7766 1274 97 42  854  1   35  53 2687 1  76  29  536 5  13  94 2882 145 966 97 55 418 67 219  95 22  3 41 57  6     69 28 97 21  556 443 83 78 6627 632 827 958 12 449 56 629  4 442   1  499 62   84 8  7985 6  127 641 91  5  135  15 22   11 341 61  766  6 37  5 97 27 38 763 56 2647 88 65 4  39 1194 617 993  47 53 591 24 8719 79 3   6 2267 13 556 661 22 547 2214 37 69 92 769 995 474 52 7439 11 61   8 16 1     77 22 37 24 2  78 898 55 583 71 153 77   4 23 35 94    2 3   718 8  794 13 73 9  9  1212 1    4563 41 8  78 39  939 319 75  85 864 523 5557 44  97 98   8  43 1744 92  18 95 432 6    21 252 54  1   48 28 283 13 774  5 94 363  513 52   13 3   24 568 63  2 626 8      7 825  1 19 18   4  624 8  657 93      2 246 16  32 752  99    9 4   45 534 32 651 5   53 33  3 778 353 546 39 296 42     5 8366 5819 751 7542 52  7 546 836 31 7    11   616 4  6251 11 777 13    9  9  5 442 495 93 8  431 86   83 3273 551 7852  43 3  35 39 757 27 3864 1262 27 6  24 71 8693 56 89 2683 58 265   2 5433   3 6621  47 5855 579  88   2 623 31 231  83 16  7 375 56 153 333 131 5  9   326 5427 34 97 7  329 63 43  62 65 3   58 73   13 47 225  66   78  139  29 392   6 277 1  365 646 79  68   36 75 11 4216 7425  6 438 89 99  974 83 953 4317  21 944  55 435 8     7 748   41 21 2  812  52  55 16  745 44  4288   5 81  436  1 45  36 847 6   6311 79 64    6 772 16 345 76  4 788 2968 38  41     8   6 256  5 149 69 682 38 18 379 35 5  37 188 482  8 17 34 36 4   9141  5 56  5978 431  626 545 57 38 166 525   9 255 956 17 37 356 866 48 3  41 7    79 19 6554 112  328 7  92 88 9515 1296 67 42 85 46 473  94    4 39 441   93 43 7   197  48 7    5 4    54  42  68 3667 835 95  662 598 48 441 8473 9641 194 99 927 45 6  967 965 582 568 8387 4454 461   2 155 2    5 421 445 6  4359 89   5 8  64  78 634 1227 67  68 567 776 81  587  43 447 297 87 429 21 36  2739  5 1   8376 39 35   8 2  952 4642 875 1624 42 732   6 16 82   15 385 331 539 44  9 11 539 47 9   4  83 46  56 949 14 83 58  167 787 5446 84 6559   2 294 78 1  81  4649 433 81 9   354 4  78 52 985 9932 84   84 4189    9 88 3  6   67 9929 542 984 9   3 332  66 579 67 755 183 36 95  9926 72  49 21 89 211  96 28  3 47  5 65 79 1996  28 193 66  54 5459 47   88   8 789 73 87 74 632 2176 4    28 324 6726 76 96   49 177 499 8   954  52 5  524 45  28  955 96  23 32  432 59 6364 33 25   66  73 632 231 6632 53 648 657
*  +   *  +  *   +  *   +    *   *  +   *   +    *   *  *  +  +    *   +  *  *   +   *  +  *  +    *   *  *   *  *  +    *  +   +  *   *   +    +  +    +  +  +   *  +  +  *   *   *  +    *  +  *  +  +    *   *   *   +   +   *  +    *   *   +    *  +    +    +    +  +    +  +  *   *  +    *   *   +  +   +    +  *  *   *  +    *   *  +  +  +   +   +    *  +  +    +    *  *   +  *  +    *  +   *   *   *  *  *  *   +    *  +  *  *   *   +  *  +   +  +    *   *   *   *  *   +  *   +    *   +   +   *   +   +    +   +  +    +   +   +    +  *  *  *  +   +  *  *   +  *  +    +  *   *   +    *  *  +   *  *  +   +   *  +    *   +   *  +  *   +  *  +    +  +   +   +  +   +   *   *   *  *   *   *  +   *  +   *  *   *   +   +  +  *   +   *  +    +  +  *  +  *   +    *  +    *   *   +    +  *   *  +   +  *  *   +  +   +    +   +   +  +    *   *   +    *   *   +   *   +   *   *  +  +  *  +  +   +    *  *  *   +   *  *   +  +  +   *  +   *  *   +  *   *  +  *  *   *  *   *   +    *   *   +    +  +    +  +   *  +  +    *   +    *   *  +   +  *   +  +    *   *  +    *  +    *  +    +  *  *   *   *  *   *   *  +   +   +    +  *   *  +    +    +  *   +  *  *  +   +   *   +   +  *   +   +    +  +  *  +  +    +    *   *   *  +    *  +    *   +    *  *  *  +   *   *   +    *  +    *  +   *  +    *   +  +    +  *   *   +   +   *   +    *  *  *  *   +    +  *   *  *  *   +    *  *  *   *  +   +    *   *   *  +  +  +    +    +    *  *   +    +   +   *  +    +  +   *   *   *  *   +  +    *   *   *  +  +   *  +    *  *  *  +  +   +    *   +  *  *   *   *   +  *  +    *   +   *   +  *   *  *   +  *   *   +    *  +    *  +    *  *   *   +   *  +    +  *  +    *   *   *   *  +  *  *  *  *  *   +  +    *  *  +  +  +    +   +    *  +  *   *  +    *  *  +  +    +  *   *   *  *   +    +  +  *  +   *   +   *  +    +  +   *  *  +    *   +  +  *  *  *  *   +  *   *  *   *   *  *  *  +    +  *   *   +  *   *  +  *  +  +    +    +    *  +  *  *   +   +   *   +  +   *   +    +  +   +    *  +  +    +   *  *  +   *   *   +   *  *  +    *  *   *  +   +  *  *   +    +    *  *   +  *   *  +  *   +    *   *   *  +  +    *  +   +  +   +    +    +   *  *   +    +   *   +   *  *   *  *   *   *  +  *  *   +   *   +  *   +    +   +    +    *   +    *  +  *   +   *  +    +    *   *  +    *  *   *   *   +  *  *   +   *  *  +   +    +  +    +   +    *   *  +  *  *   *  +    +    +  +  *  *  +    *  *  +    +  *   +   +    *   +    *   +    *   +   +   *   +  *   *   *  +  *   *  +   *   *   *  *   +   +    *  *  *  *   *  *  +   +  *   +  *  +    +  +    +  +    +    +   *   +   *   +  +   +   +  *   +    +  *  +    +    *  +   *  *  +    +  +   +    +   *   *   *   +  +    +   +    *  *  +    +   *  *   +   *   +    +   *  +    +  *   *  +   *   +    *  *  +    +   *  +   *  +  +   +    *   +    *   *   +   +  *   *  +   *  *  *   *  +  +  +   *   *  *  *  *  +   +    +  *   +    +   +    *   +  *  +   *   *   +   *   *  +  *   +   +  *  *  +    *  *  +    +    +   +  +  *  +    +    *  *  *  *  *   *   +    +  *   +    *  +   +    +  *  *   +    *   *   +  +    *   +   +   +   *  *   +    +    *   *  *   *  +  +   *   +   +   +    +    +    +  *   +  *   *   *   +  +    *  +   *  +  *   *   +    +  *   *   +   *   *   +   *   *   +  *   *  +   +    +  *   +    *  +   *  *  *   +    *   +    *  +   *   *  +  +    *   *   *   *  +  *  *   *  +   *  *  *   +  *   *  *  +   *   *   +    *  +    +   *   *  *  +   +    *   *  +   *   +  *  *  *   +    *  +    +    +    *  *  *   +  +    *   *   *  +  *   +   *   +  *   +   *  +   +    +   +  +  +  *   *   +  *  *  *  *  *  +    *   +   *   *  +    *   *   *   *   +  *  *  +   +    +    +  *   +    *  +    *  *   *   +   +    +  +  *   +   +   *   +  *   *   +   *  +    +  +    *  +   +   *   +    *  *   *  `.trimStart();var G1=A("<p>The grand total of all the problems is <!>."),Z1=A("<p>When using right to left columns, the grand total of all the problems is <!>.");const X1=()=>{const e=/\s+/gu,t=R4.split(`
`),n=t.pop().split(e).filter(Boolean);return{nums:t.map(r=>r.split(e).filter(Boolean).map(Number)),operators:n}},J1=()=>{const e=R4.split(`
`),t=e.pop().split(/([*+]+\s*)(?:\s|$)/gu).filter(Boolean);return{nums:e,operators:t}};function Y1(){const{nums:e,operators:t}=X1(),n=t.map((r,s)=>e.map(i=>i[s]).reduce(r==="+"?Z:l2)).reduce(Z);return(()=>{var r=G1(),s=r.firstChild,i=s.nextSibling;return i.nextSibling,j(r,m(T,{children:n}),i),r})()}function Q1(){const{nums:e,operators:t}=J1();let n=e[0].length-1,r=0;for(const s of t.reverse()){const i=[];for(let a=0;a<s.length;a++){const o=Number(e.map(l=>l[n]).join(""));i.push(o),n--}r+=i.reduce(s.trim()==="+"?Z:l2),n--}return(()=>{var s=Z1(),i=s.firstChild,a=i.nextSibling;return a.nextSibling,j(s,m(T,{children:r}),a),s})()}const e6=Object.freeze(Object.defineProperty({__proto__:null,Part1:Y1,Part2:Q1},Symbol.toStringTag,{value:"Module"})),t6=`
......................................................................S......................................................................
.............................................................................................................................................
......................................................................^......................................................................
.............................................................................................................................................
.....................................................................^.^.....................................................................
.............................................................................................................................................
....................................................................^.^.^....................................................................
.............................................................................................................................................
...................................................................^...^.^...................................................................
.............................................................................................................................................
..................................................................^...^.^.^..................................................................
.............................................................................................................................................
.................................................................^...^.^.^.^.................................................................
.............................................................................................................................................
................................................................^.^.^.....^.^................................................................
.............................................................................................................................................
...............................................................^...^.....^...^...............................................................
.............................................................................................................................................
..............................................................^.^.^.^...^.^.^.^..............................................................
.............................................................................................................................................
.............................................................^.....^...^.....^.^.............................................................
.............................................................................................................................................
............................................................^...^.^.^.^.......^.^............................................................
.............................................................................................................................................
...........................................................^.^.^.^...^.^.^.^...^.^...........................................................
.............................................................................................................................................
..........................................................^.....^.^.^.^.....^.^.^.^..........................................................
.............................................................................................................................................
.........................................................^.^.^.^.^...^.^.^.^...^...^.........................................................
.............................................................................................................................................
........................................................^.^...^.^.^.^.....^.^.^.....^........................................................
.............................................................................................................................................
.......................................................^...^...^...^.^.^.....^.....^.^.......................................................
.............................................................................................................................................
......................................................^.^.^...^.^.^.^.^.^.^.^...^.^.^.^......................................................
.............................................................................................................................................
.....................................................^.^.^.^.^.......^.^.^.^.^.^.^...^.^.....................................................
.............................................................................................................................................
....................................................^...^.^.^.^...^...^.^.....^.^.^.^.^.^....................................................
.............................................................................................................................................
...................................................^.^.^.^...^.^...^.^.^.^...^...^.^.^.^.^...................................................
.............................................................................................................................................
..................................................^.^.^.^.....^.^...^.^...^.^...^.^...^...^..................................................
.............................................................................................................................................
.................................................^...^.^.^.....^.^.^.....^.^.^...^.^.^.^.^.^.................................................
.............................................................................................................................................
................................................^.^.........^.^.^.^.^.^.^.......^.^...^.^.^.^................................................
.............................................................................................................................................
...............................................^.^.^.^...^.^.^.^.^.^.^.^.^.^.^.^.^.......^.^.^...............................................
.............................................................................................................................................
..............................................^.^.^.^.^.^.^.^.^.^.^.^.^.......^.^.^.^...^...^.^..............................................
.............................................................................................................................................
.............................................^.^.^.^.^.^.^.^...^.^.^.^.^.^.^.^.^.^.^.......^...^.............................................
.............................................................................................................................................
............................................^...^.^.^.^...^.^.^.^.^.^.^.^.....^.^.^.^.^...^.^...^............................................
.............................................................................................................................................
...........................................^.^.^...^.^.^.^...^.^.^.^...^.^.^.^.^.^...^.^.^...^.^.^...........................................
.............................................................................................................................................
..........................................^...^...^.^...^.^.^...^.^.^.^...^...^.^...^.^...^.^.^...^..........................................
.............................................................................................................................................
.........................................^.^...^...^.^...^.^...^.^.....^.^.^...^.^...^.^.^.^.^.....^.........................................
.............................................................................................................................................
........................................^.^.^...^.^.^.....^...^.^...^.^...^.^.^.^...........^.^.^.^.^........................................
.............................................................................................................................................
.......................................^.^.^.^...^...^...^.^.^.^...^.^.^.^.^.....^.^...^.^.^.........^.......................................
.............................................................................................................................................
......................................^.^.^.^.^...^.....^.^.^...^.......^.^...^.....^.^...^.^.^.^...^.^......................................
.............................................................................................................................................
.....................................^...^.^.^.^.^...^...^.^.....^...^...^...^.^.......^.^.^...^...^.^.^.....................................
.............................................................................................................................................
....................................^.^...^.^...^.^.....^.^.^.^...^.^.^.^.^.^.^.^...^.^.^.^.^.^...^...^.^....................................
.............................................................................................................................................
...................................^.^.^.^.^.^...^.^.^.^.^.^.^.^.^...^.^.^.^.....^.^.^...^...^.^...^.^...^...................................
.............................................................................................................................................
..................................^...^.^.^.^.^...^.^.^.........^.^.^...^.^.^.^.^.^.....^.^...^.^...^.....^..................................
.............................................................................................................................................
.................................^.^...^.^.^.^...^.^.^.^.^.^...^.^.^.^.^.^...^.^.^.^...^.^.^.^...^.....^...^.................................
.............................................................................................................................................
................................^.^.^.^.^.^.....^.^.^.^.^.....^.^...^...^...^...^.^.^...^.^.....^.^...^.....^................................
.............................................................................................................................................
...............................^...^...^.^...^.^.^.^.^...^.^.......^.^...^.^.^...^.^.^.^.^.^.^.^.^.^.....^...^...............................
.............................................................................................................................................
..............................^...^.......^.^.^...^.^...^.^...^.^.^.^.^.^.^.^.^.^.^.^...^...^.^.^.^.^.^.^.....^..............................
.............................................................................................................................................
.............................^.......^.^.^...^.^.^.^.^.^.^.^.........^.^...^.^.^.^.....^.....^...^.^.^...^.^.^.^.............................
.............................................................................................................................................
............................^.^.^.^.......^.....^.^.^.^...^.^...^.....^.....^...^...^.^.^.^...^.^.^...^.^.^.^.^.^............................
.............................................................................................................................................
...........................^...^.^.^.^.......^.^.^...^...^.^.^.^.^.^...^.....^.....^.^.^.^.^.^.^.^.^.^...^.^.^.^.^...........................
.............................................................................................................................................
..........................^.^.^.^.^.^.....^...^.^.^.^.^.....^.......^.....^.^.^.^.^...^.^.^.^.^.^.^.^.^.....^.^.^.^..........................
.............................................................................................................................................
.........................^.^...^...^.^...^.....^...^...^...^.^.^.....^.^.^...^...^.^.^.....^.^.^.^.^.^.^.^.^...^.^.^.........................
.............................................................................................................................................
........................^.^.^.^.^.^.^.^...^...........^...^.^.^.^.^.^.^...^...^.^.^.^.^.^.^.....^.^.^.^.^.^.^.^.^.^.^........................
.............................................................................................................................................
.......................^...^.^...^...^...^.^.^.^.^.^.^.^.^.^.^.^...^.^.^...^.^.^...^.^...^.^.^...^...^.^.....^.^...^.^.......................
.............................................................................................................................................
......................^.^...^.....^.^...^...^.^.....^.^.^...^...^...^.^.^.^.^.^...^...^.^.^.......^...^.^.^.^...^.^.^.^......................
.............................................................................................................................................
.....................^.^...^...^...^.^.^.^.^.^.^.^...^.^.^.^.^.^.^.^...^.....^.^.^.^...^.^...^.^.^...^.^...^.^.^...^.^.^.....................
.............................................................................................................................................
....................^.^.^...^.^...^.^.^.^.^.^.^.^...^.^...^.^.^.^...^.^.^...^.......^.^.....^.^.^...^.^.^...^.^.^.^.^.^.^....................
.............................................................................................................................................
...................^.^.....^.^.^.^.^.^.^.^.^...^.^.^...^...^.....^.^.^...^.....^.^.^...^.^...^.^.^.^...^.......^...^.^.^.^...................
.............................................................................................................................................
..................^.^.....^...^.^...^.^.^.^...^.^.^...^.^.^...^...^.^.....^...^.^.^.^.^.^...^.^.^.^...^.^.........^...^.^.^..................
.............................................................................................................................................
.................^...^.^.^.^.^.....^...^.^.^.^...^.^.^...^.^.^.^.^.^.......^.^.^.^.....^.........^...^.^...^.^.^.^.....^.^.^.................
.............................................................................................................................................
................^.^...^...^.^.^...^...^...^.^.^.^.^...^.....^.^.^...^.^.^.^...^.^.^.....^.^.^.^.....^...^.^.^.^.^...^.^.^.^.^................
.............................................................................................................................................
...............^.^.^...^...^.^.^.^...^.^.^.....^...^.^.^.^.^.^.^.^.^.^.........^...^.....^.^.^.^.^.^...^.^.^.^.^.......^.^...^...............
.............................................................................................................................................
..............^...^.^.^.^.^.^.^.^.^...^.^.^...^...^.^.^.^.^.^...^.^.^.^.^.^.^.^.^...^.^.^.^...^.^...^.^.....^.....^.....^...^.^..............
.............................................................................................................................................
.............^...^.....^.^.^...^.^...^...^.^.^.^...^...^.^.^.^...^...^.^.^.^...^...^.^.^...^...^...^...^.^...^...^.....^...^.^.^.............
.............................................................................................................................................
............^...^...^.^.^.^...^.^.^...^.^.....^...^.^...^.^.^.....^.....^.^.......^...^.^.^.^...^.^.^...^.^...^.^.^...^.^.^...^.^............
.............................................................................................................................................
...........^.^...^.....^.....^.^.^.....^.....^.^.^.^.^.........^.^.^.....^.^.^...^...^.^.^.^.^...^.^...^.^.^.^.....^...^.^.^...^.^...........
.............................................................................................................................................
..........^.^.^.^.^.^.^...^.^.^...^...^...^...^.^.^.^.^.^.^.^...^...^.^.^.^.^...^.^.^.^.^...^.^.^.^.^.^...^.^.^.^.....^.^.^...^.^.^..........
.............................................................................................................................................
.........^.....^...^.^.^...^.^...^.^...^...^...^.^.^...^.^.^.^...^.^.^...^.^.^.^.^...^.^.^.^.^.^.^.^.^...^.....^.^...^.^.^.^.^...^.^.........
.............................................................................................................................................
........^.^.^.^.^...^.^...^.^.^...^...^.^.^...^.....^.^.....^.^.^.^.^.^.^.^.^.^...^...^.....^.^.^.^.^.^.^.....^.^.^.^...^.^...^.^.^.^........
.............................................................................................................................................
.......^...^...^.^.^.....^.^.......^.^.^.^.^.^.......^.^...^.^.^.^.^.^.^.^.^.^.......^.^...^.^.^.^.^.^.^.^.^.^...^.....^.^.^.^.^.^.^.^.......
.............................................................................................................................................
......^...^.^.^.^.^...^.^...^...^.........^...^.^.^.^.^.^...^...^.^.^.^.....^.^.^.....^.^.^.^.^.^.^.^.^.^.^.^...^.^.^.^.^...^.^.^.^.^.^......
.............................................................................................................................................
.....^.^.^...^.^.^...^.^...^...^.^.^.^.^.^.^.^.^.^.^.^.^.^.....^.^.^...^.^...^.^.^.^.^.^.^...........^.^...^.^...^.^.^.^...^...^.^.^.^.^.....
.............................................................................................................................................
....^.^.^.^.^.^.^.^.^...^.^.^.^.^.^...^.^.^.^...^...^.....^.....^...^.^.^.^.....^.^.^.^.......^.^...^...^.^.^.^...^.^.^.^.^...^.^.^...^.^....
.............................................................................................................................................
...^.^.....^.^.^...^.^.^.....^.^.^.....^.^.^.....^...^.^.......^.^.^.^.....^.^.....^...^...^...^.^...^.^.^.^.^...^.^.^.^.^...^...^...^.^.^...
.............................................................................................................................................
..^.....^.^.^.^.^.^.^.^...^...^.^.....^.^.....^.......^.^.^.....^...^...^.^.^.^...^.....^.^.^.^.^.^.^.^.^.......^.^.^.....^...^.^.^...^.^.^..
.............................................................................................................................................
.^.^.^.^.^.....^.^.^.^.^.^.^.^.^...^.....^.^...^...^.^...^...^.....^...^.^.......^.^.....^.^...^.^.^.^.^.^.^.^.^.^.^.^.^.......^.^.^...^.^.^.
.............................................................................................................................................
`.trim();var n6=A("<p>The beam will be split <!> times."),r6=A("<p>The particle ends up on <!> different timelines.");const f4=()=>t6.split(`
`).map(e=>e.split("")),d4=function*(e){const t=e[0].indexOf("S"),n=new Map([[t,1]]);let r=0;for(let i=1;i<e.length;i++){const a=Array.from(n).filter(([,o])=>o>0);for(const[o,l]of a)e[i][o]==="^"?(n.set(o-1,(n.get(o-1)??0)+l),e[i][o-1]="|",n.set(o+1,(n.get(o+1)??0)+l),e[i][o+1]="|",n.set(o,0),r++):e[i][o]="|";yield{grid:e,numSplits:r,totalPaths:0}}const s=Array.from(n.values()).reduce(Z);yield{grid:e,numSplits:r,totalPaths:s}};function s6(){const[e,t]=I(""),[n,r]=I(null),[s,i]=I(!1);return f3(()=>{r(null),t("");const a=f4(),o=d4(a);if(s()){let l=0;const c=Q2(()=>{const{value:u,done:R}=o.next();u&&(l=u.numSplits,t(Y2(u.grid))),R&&(r(l),clearInterval(c))},100);n3(()=>clearInterval(c))}else{const{numSplits:l}=[...o].pop();r(l)}}),[m(W,{get when(){return n()},get children(){var a=n6(),o=a.firstChild,l=o.nextSibling;return l.nextSibling,j(a,m(T,{get children(){return n()}}),l),a}}),m(l4,{get show(){return s()},setShow:i,get children(){return e()}})]}function i6(){const e=f4(),{totalPaths:t}=[...d4(e)].pop();return(()=>{var n=r6(),r=n.firstChild,s=r.nextSibling;return s.nextSibling,j(n,m(T,{children:t}),s),n})()}const o6=Object.freeze(Object.defineProperty({__proto__:null,Part1:s6,Part2:i6},Symbol.toStringTag,{value:"Module"})),a6=`
61744,9180,64475
90632,13320,37182
18278,48762,4317
21198,64576,34277
77809,30942,42847
89476,12359,68352
45413,30949,76258
70328,66508,73705
8989,20263,34479
22113,30916,91064
77198,15185,95555
22448,21595,41663
25295,63155,54866
8943,66535,48698
20959,45905,76732
2891,4942,94197
9673,39102,79207
35262,99984,38753
78187,65460,99935
20402,7415,62145
85132,4885,23083
36498,97919,78859
80314,90616,22930
60881,2546,47044
6020,57492,76986
97786,11256,39875
8062,90525,18981
79315,33802,84339
67382,8259,21191
32601,29357,56142
42674,92124,52576
79833,4933,84896
12974,28520,55460
10478,87861,64779
55586,96121,24662
96556,48817,89712
2781,49589,9499
23589,80315,43658
62923,70192,12624
97908,78498,52190
87780,25615,52152
78455,63779,34242
82839,34999,16099
96027,76141,38043
21801,22553,61088
39928,60341,65686
15640,92009,2185
80031,62711,246
67537,48333,19114
36539,60047,72629
70963,83261,38147
28145,73278,20637
61578,23443,61238
11122,7074,95291
43579,75586,57514
27638,73144,90403
38385,35094,49085
99653,66904,8302
63385,33082,38714
23601,20348,38473
57986,66481,10887
80444,5739,77805
38474,69618,82304
75632,65631,73655
80183,32245,69015
21038,78001,45794
68332,49934,62472
65414,85213,27385
8736,36038,19322
81674,88458,79187
21724,55654,45795
25073,41925,17357
32569,42358,12174
12182,32686,59379
68139,27713,21282
45448,41696,76679
93877,85834,72544
8378,95001,78092
89078,95843,62330
41498,94152,41118
52212,32583,42240
9005,4091,17108
15330,69761,46215
57592,45434,71335
12440,32776,11887
4039,81804,34587
76928,86348,28962
64495,49126,24852
76899,26159,61876
58723,24390,38274
74885,27821,12489
50231,96646,30931
38187,65079,52510
8491,93117,67044
98111,72718,32575
24225,84202,62187
79734,26852,94227
51173,64068,15450
98363,44293,36894
15406,40664,20939
13577,90653,13279
12565,57068,51609
82370,39059,44738
45099,43923,52135
86314,37118,78632
27033,79399,94869
88664,65967,77528
31219,75532,73806
88995,92462,18286
98776,40234,25942
40661,97804,1113
35622,91036,50826
39142,26198,71527
63478,11581,5872
34297,29493,17652
97585,51323,78476
74222,32664,65959
81143,86984,30610
53500,81185,12724
16677,76799,43603
26863,84148,90125
65238,62094,61501
58845,60374,89416
13347,58007,77511
784,56810,44176
1798,84423,57488
61333,69208,78771
28086,13577,45419
51070,61954,79885
75805,81815,18055
45151,78149,89047
35016,7818,50971
97500,93229,99224
96122,30161,95020
9633,81989,64895
75285,77800,94697
80482,46423,27132
69809,96302,81485
54333,60667,52705
34136,23987,65505
57015,20946,42720
1493,38460,64882
73025,16780,76912
34286,63215,72250
41220,51449,75408
93054,46401,83024
67311,90008,1794
31216,50578,25779
18418,92079,3716
57440,491,33829
51185,21773,98056
23806,43135,52787
12706,24554,38184
81729,51926,15253
30892,81595,27970
29652,97835,83465
10380,41646,3281
27231,16449,57998
94572,70035,67584
78585,86066,81741
41400,69225,31545
16565,6671,23053
91719,86418,71318
2816,34066,36438
90280,99018,45706
62301,41232,74868
80310,27429,60361
17332,1574,64834
49123,69658,78293
51430,85360,81492
49581,54056,50414
1660,28509,87640
77795,31059,84271
31918,31193,344
17548,98347,80678
92620,72651,61741
99137,74872,59603
98938,87388,64649
56537,51301,30001
48697,39997,29291
16320,96975,30146
50659,47112,15113
17658,82415,8992
38291,57162,88642
91484,53990,11958
58022,58315,15732
30267,47702,60948
67173,33410,73638
2291,79503,30519
55941,58138,35463
17412,83962,37682
92453,14000,57179
89225,73617,85555
30323,18065,69588
38769,5220,97951
61477,90003,66450
1113,75781,46458
16832,2829,59115
92986,84194,1144
71239,29712,9474
29288,71788,95693
93378,84645,53781
49225,44432,93125
16544,58669,93698
18877,84578,12238
93764,96754,56471
49276,13373,46647
99728,88154,50357
45568,10863,10860
79181,13951,3877
16327,4371,78175
20006,72978,25638
21421,14088,56062
16521,31285,41789
12375,47181,5380
72237,39563,28853
27711,84044,30327
46618,79791,72459
14788,67067,84263
31278,33612,35493
86509,56491,7094
4966,85230,7366
93495,97607,7973
14251,86056,81200
56676,26840,10025
35619,93837,89587
97011,81264,7000
26542,27332,82459
41057,31842,5608
23557,69948,36687
29753,74262,45501
52731,8093,17333
97765,45834,98270
49529,12460,45016
80036,92503,4133
37746,22115,60503
73255,94539,71860
36495,49319,29821
41328,56985,5632
70409,10813,11744
93177,22540,42662
30295,96760,9482
35912,68926,15612
77290,43398,85650
19383,20755,74911
15643,18659,75964
75508,44914,14018
22872,70473,48029
79501,79895,26029
68482,83131,93687
76524,3643,19563
97959,98612,25025
6772,54665,75132
47988,91211,94107
35904,30867,83427
34862,9304,64167
60693,13111,82754
26975,84721,59351
87697,75378,83575
79962,76220,60838
88047,85167,93576
93410,27271,33179
19871,92980,17350
64178,22144,52723
94153,85131,37170
53384,79021,46794
78007,59389,38330
63589,1479,31833
27217,52997,87592
56892,49286,77823
8730,97962,30899
27913,20139,86659
96458,69875,92878
11769,43533,67979
65283,233,90174
57040,83952,3388
95586,50752,85276
62080,16485,45121
73846,72148,39849
26481,45487,67322
46064,93693,85980
79211,80092,32810
28169,87027,675
44387,41508,85574
4681,75309,51311
45226,84601,81106
76966,17741,28496
75999,46936,26427
53022,77160,96113
27102,18906,29671
1363,10168,94452
98407,32118,45845
44477,23459,23692
30023,50210,73828
55398,32174,38764
69053,88203,58483
80254,15341,87057
40682,15735,68824
91329,26253,11828
67200,68249,49919
8266,87315,74567
94769,74982,92003
91715,28485,26610
27705,90905,14130
37401,55088,23369
23467,49874,19248
34283,15096,99803
52027,28944,10555
70265,6141,9087
3514,2844,34968
73640,53904,7250
90868,89856,48187
26506,32714,81063
85597,96719,25808
10115,79177,33883
26726,21912,29523
38920,65723,23672
42464,22572,40654
52543,62540,58093
90729,1725,89044
99047,24518,38872
26998,86676,84451
64758,11824,83977
66332,82024,82984
37374,5262,99498
81984,89802,43753
8761,16139,67539
19889,78075,78065
85798,36233,1872
97411,72038,78125
79074,45586,80391
54207,23583,24846
63122,94963,8276
72832,5692,5981
28482,64301,8856
72239,30697,19256
84982,15307,71542
45923,5207,35662
54893,86987,350
23005,91527,66301
51205,85134,55535
83071,54687,54564
90407,92383,81381
56324,80908,80279
39975,12265,35357
62576,85232,69693
68235,47755,82031
55215,81496,32883
9546,99530,81654
89225,30889,63542
50746,21490,96165
30005,95161,96172
5454,44049,4991
63934,55131,77859
66004,96072,81324
23815,20204,2758
11139,52085,82768
51738,31419,95455
2286,533,89847
89761,26793,46746
90494,23236,85038
83201,29830,54227
55571,74123,16709
92707,16076,91832
15799,6834,2445
30662,66010,88223
67386,45267,29254
66763,88156,7655
78492,12492,3876
93523,3788,54749
56734,60314,99732
20183,5404,72419
54036,75981,80688
32799,24720,23705
65683,53547,19635
35113,28652,13498
57121,43375,84831
20577,28490,91979
52370,96113,22457
16522,31495,92777
37351,60503,29324
26092,60182,50451
75125,59719,51834
25221,92307,19068
46704,2767,79356
87335,62982,99976
87927,48261,69066
99157,3363,4799
62874,81543,32225
11114,77301,53594
79676,84145,17956
57280,73577,1996
92416,38745,24135
80116,85472,10405
30495,37403,36486
65493,86488,6404
55760,29066,45114
2855,81533,69573
68607,86284,91142
66119,81934,16542
84680,70634,21371
30578,10784,15347
5761,33824,88435
64456,80971,63926
40092,66857,92808
48765,17101,32577
20731,41588,3140
79474,64596,84164
92897,5236,75484
73250,87034,61165
85507,99934,28746
93347,42145,97811
48309,79897,31799
91149,28547,13112
72296,33643,63120
36783,22351,91743
40361,62905,50476
62545,45427,20976
99615,47582,63081
76257,95272,92411
70286,31511,62958
73509,2942,67019
29451,83571,43038
95100,86008,62974
12709,3203,40010
16833,49373,30910
94652,75972,23368
94554,89419,27465
6154,13401,42925
91295,95868,55534
45254,28633,8333
62576,351,72455
78737,10205,66982
288,33441,47293
56165,63156,56321
38410,25925,25046
21850,21783,53377
97806,11978,23673
37201,11298,98362
28143,88765,85345
10680,52408,50936
55596,38710,88230
53677,495,26325
31313,84096,61332
13101,77307,44894
95591,469,35224
74034,48737,58243
18691,44861,28261
21226,71261,122
62490,39102,63814
56171,85446,53783
46734,50849,7486
62163,25293,76551
72707,37268,58069
10331,20764,93051
11952,17394,29178
86620,75944,350
18209,13144,74236
1475,23222,2696
87834,41940,38250
22124,6038,23606
81573,98977,73328
93931,41681,56451
64673,21746,5624
99098,29884,84980
16597,47327,64617
85477,32527,45778
37082,80315,80568
85954,72549,23819
5921,88850,45979
14750,68311,98776
81380,24925,31315
87715,6809,79479
42476,60864,69153
66539,4577,71872
3101,71766,67579
91714,55036,77956
18451,52084,43143
3809,42698,84498
49139,11747,71669
64309,70800,19929
97227,17116,55431
56664,27992,58686
96833,89685,15809
81434,27808,11910
98331,16676,19144
28577,73487,45704
98172,47341,48216
90876,95806,47710
30242,34343,92382
94208,64872,14082
58264,49172,55173
69202,25010,46661
53539,16846,3716
64752,25000,66860
17071,5546,70965
26083,85543,82284
68941,27649,12261
62877,45561,91196
28497,16058,12612
83813,76662,7931
78289,98755,31421
55600,7262,96612
54527,34001,66157
91909,84445,70580
17522,5122,18434
38685,41025,6570
19868,58648,80730
33124,95980,39902
70472,72760,36337
97775,44002,54720
77134,74925,24579
6632,84525,4948
31386,4155,6479
10292,72729,36287
79088,9038,92771
90810,42793,66786
37947,62881,6533
17287,38654,46487
24773,55537,2740
57365,31503,91985
70427,88785,16149
28818,30094,32821
65050,56826,74563
31776,16084,72266
35997,12480,47583
20812,60861,13153
11433,4028,25740
34350,16509,41735
89882,35651,16298
705,85263,94769
73961,50888,52770
39770,91299,40012
954,35288,43582
26068,37805,34686
60062,35714,66511
19923,6928,30829
42428,14746,43650
41631,23934,33165
39916,34573,66832
80046,15032,18471
77139,53006,27603
90229,55846,61308
35123,89681,11375
17849,21616,74149
39497,21674,69549
60742,49340,11289
18753,86261,59459
70990,1021,40017
75801,34601,81514
67642,58553,81797
46006,78722,66500
23166,91762,17348
53491,40443,56430
42582,64271,90124
27235,80690,7298
1636,37161,38363
55550,48235,77292
37108,67126,40223
38308,44785,13832
69195,69072,37328
35634,10096,87686
39168,93126,88622
58129,26786,99646
26863,13290,68703
74117,54445,48684
45030,48551,88300
68188,88403,88450
46617,47740,9353
76644,34566,11006
76526,72485,66879
24643,74929,78625
28783,13991,42664
30822,8717,43055
13498,15485,7849
67639,63740,22078
69707,55832,67883
49217,13160,25936
18760,14597,61138
4994,20705,19138
61461,89527,44460
98200,3062,48720
62106,59975,57127
55454,878,79559
66890,45241,53621
42526,78912,71544
18398,33406,42186
59525,63076,51313
96599,21208,95960
29570,59469,22801
88915,531,85924
30039,33900,6678
96669,67282,1399
29481,13813,29524
14269,17383,33276
78829,2836,11791
60152,35101,86517
27102,93300,58832
49356,58877,27240
95925,77068,8516
35810,63282,82667
97446,63490,51917
17552,37419,10134
91740,91827,53256
94125,90003,78405
62081,91738,31870
62292,78953,8299
25970,2041,87840
54327,26179,72285
22442,99475,50892
52912,91446,13906
16854,65052,44123
93868,71870,40630
55537,1341,41762
59580,56219,30344
45636,26608,92631
81367,192,62127
75517,74470,50560
94790,10164,38075
80375,6206,52024
59213,67689,52639
53320,89523,42541
79618,60348,45295
44681,29817,50836
77520,80994,93759
18084,85335,97826
58915,80397,2431
46657,12553,26012
57633,66846,55090
64939,37505,97526
86285,8637,7823
74727,59599,8872
62372,58673,29000
70409,99599,60601
76031,84149,1106
15674,37225,72884
29353,47502,7388
80103,36766,35806
72520,81188,3761
78831,97206,38084
1313,9846,20648
24307,14284,7424
88561,2215,7482
33980,96123,63050
67959,49380,41046
30943,97526,6132
82504,61994,50034
21123,87730,30567
32647,93898,85969
17252,697,62649
71618,91553,36451
42349,32568,616
85538,12531,74251
31214,36033,29075
57992,42460,27370
40939,37916,72193
14976,41184,22789
90684,45609,65817
87250,15202,4080
44337,35654,51090
18723,74305,76115
96596,87619,37442
82760,35753,45046
46599,21220,56619
95644,38324,42050
20263,27810,32683
35244,82521,86110
25416,7997,38175
51301,63677,39135
32284,94568,68486
64537,21535,46829
89059,15731,89276
43694,17401,21730
30084,69543,18582
65041,45959,60106
82113,75122,98529
20119,13452,35273
65598,41720,29355
55925,71217,48942
15176,33070,24984
55330,41887,14779
61489,98258,21124
34739,22218,20239
34004,26585,94837
2214,58568,99502
74933,93803,54563
94118,75801,86811
26340,52535,68479
11187,9783,41738
12173,21164,87956
95847,34288,86882
70325,82964,57998
94856,74267,60470
41710,91707,14804
38750,87132,27240
94188,91270,34208
52146,123,94819
5939,53204,65821
49456,2970,4690
20511,57448,6261
32945,1538,54442
865,24639,3513
6326,29852,15358
82690,60258,65034
19964,1089,68281
1032,69969,2228
63347,47341,5190
34466,38832,85671
90670,36851,68421
48501,47689,42468
59895,51449,66030
34235,96887,13908
9324,64834,21460
36877,5600,65417
8453,77029,90087
64348,92620,84733
9372,97596,20647
29656,17215,54637
3091,59277,68424
88429,53283,57428
13143,54074,90163
46071,88805,89303
95313,3715,18806
30482,98066,28201
37825,72126,90030
15296,44922,36183
66746,43363,22182
61859,61278,79233
52547,20730,65301
58065,81900,32160
26453,11962,92932
11196,35575,77929
8348,26743,22743
25856,45142,49789
1312,40410,53025
11731,44289,80629
18144,85392,19691
21155,31322,58116
46544,67935,43854
15901,83327,24478
65469,78672,82260
22388,67573,68082
45940,16192,75408
22939,56146,95384
73166,61904,57378
56633,10822,26886
63512,54783,18996
55327,76665,95243
38279,59036,22559
6832,72331,39795
7620,87715,6851
34755,43752,58973
45657,87437,37728
39584,90684,41302
82088,62742,45640
5097,22023,83840
16188,15811,30592
64800,49991,65899
40113,23168,77879
27836,604,46539
27936,8295,91501
14779,37359,23454
63176,73794,69266
76774,12421,10311
81332,89776,27771
72699,77015,58243
90174,47460,41681
89579,36166,37835
24824,47522,14781
43571,41353,14878
19453,33011,85851
45337,47059,89501
45416,43419,37694
86036,3955,1837
16744,72934,87202
60339,82811,51374
51051,84610,25416
94162,52885,11044
80656,78049,17314
58990,33629,18198
53962,79975,97081
74587,59833,29854
57028,6792,35234
9183,99797,32749
17506,96167,69757
39258,37003,80453
52896,57499,85179
12231,15154,61953
54586,85274,24148
51907,28446,32844
53478,2869,15634
97983,66521,22561
11995,43564,34363
49968,26344,49240
94863,3613,9049
41762,67692,19767
21332,69263,16252
45722,57174,39382
80767,36071,88756
33321,88264,79888
97912,32200,95530
73269,45639,71454
41802,1169,40396
73928,41294,28801
96918,82517,291
23534,24179,78127
35960,47327,4628
11977,99374,73408
1755,99660,20766
43446,92262,7541
62829,91314,69625
54984,54985,24292
38362,400,68318
53642,1435,76890
76590,58271,19253
11624,94038,62226
92396,77833,90391
39663,88647,67418
27762,7306,36972
31893,27245,35912
25303,5665,12640
65417,92367,10470
61265,86352,40599
15324,12710,59949
44499,90988,35624
87256,21433,1899
41124,13815,37524
48335,14909,20327
65460,35660,45117
14701,2003,60326
70801,9204,6903
70617,8611,54860
90649,66464,20034
69138,62815,31743
15881,52034,45222
55245,11417,48648
52125,55532,17855
5867,73231,19449
2183,48817,52695
34704,56378,95025
8976,11134,72985
45816,65306,61698
31178,74276,69845
48451,5590,35310
47699,87610,39280
87849,95854,74963
87620,63591,66628
13270,77274,75739
78067,48758,14701
9608,91454,7427
73093,12904,39875
43500,31891,34479
18815,3349,5862
87884,33999,76409
93539,20697,74743
59572,79897,96954
57659,39229,23503
81835,87902,83205
42103,2686,68502
97410,26131,35487
65624,4852,70706
81691,4725,39983
32515,97018,33046
63107,17783,65303
74190,8047,66185
69842,14877,3525
57929,59083,79460
3313,77790,79091
49187,22064,81166
12302,88277,79804
29243,19867,23103
86266,69377,96926
42368,51603,4389
68723,11410,48708
12509,47128,21360
7437,85487,37574
4978,43144,8954
62593,32920,94823
60618,97161,15739
87198,63663,36418
20102,17735,75992
88645,17050,73188
5837,34293,82241
68779,74319,33228
70277,13587,89040
83608,6582,22998
42044,40795,89486
86104,92550,77401
27127,89277,23246
75735,33680,39391
70505,22725,1834
21951,26791,25900
41379,53788,27489
84038,4985,38363
45921,44249,3105
27817,87114,21034
71013,21524,52615
31228,73161,34677
84366,91628,45910
55082,51009,26496
61583,74342,60106
39908,8702,35362
83620,22463,63344
80046,61790,15828
90832,40269,26042
518,62270,36091
23397,19774,70822
58732,10380,76800
96436,29120,94691
62595,1819,80691
7388,13704,2999
66917,12524,91764
70913,53087,13577
74419,7770,20639
12385,56345,45347
7385,65939,62902
19122,83738,75771
61408,39628,43309
23451,27629,63638
74540,31270,50099
35781,1308,9662
71729,44383,96243
40243,17286,2669
7063,6518,4322
11749,8051,1657
25958,88298,11549
54220,4779,32440
15689,18236,62888
88359,15340,44013
43369,81341,32703
60833,50824,99745
43944,74802,80467
99865,24167,35257
99772,42880,66684
43106,18988,14348
84436,84883,94861
42090,96093,93808
90076,36857,37718
84676,73780,67566
664,16580,18549
81249,8910,26660
10290,62719,17978
65879,54129,1157
54522,7321,73310
79742,75722,87380
11901,18449,85107
21403,26734,24068
7453,63269,41751
2743,90906,85787
13678,9319,13664
75176,32831,46047
95695,98428,77081
76630,97462,42397
44047,40575,55263
54367,56747,94301
43460,33057,887
13184,77084,82591
86353,28312,48468
7518,62687,38667
5658,17566,42499
59203,92512,74824
26246,96968,58183
38635,45921,48140
14772,64365,49040
12246,90881,82283
99385,5981,29234
28508,65155,62881
94861,23321,71876
92243,67712,3089
41943,26587,75105
53111,26423,42681
99681,60532,61209
97927,65650,92245
78349,78272,37726
93641,55887,22788
54625,23969,53654
35724,92959,74812
17684,51778,12480
24234,28266,12339
53457,32807,53730
87756,39460,94436
68067,36608,20589
77205,11023,91385
74276,73664,56878
59953,53031,79264
6284,13065,34924
18738,94993,14745
39566,94726,92372
74404,99063,17266
13399,95151,79374
31937,92445,88494
88684,13792,50914
56454,70670,81123
93377,43979,6989
4112,16168,14614
9418,7352,22385
85343,29214,53570
27048,93481,57148
48938,59513,61164
8231,95422,9689
`.trim();var l6=A("<p>After 1000 connections the product of the size of the 3 largest circuits is <!>."),u6=A("<p>");const x4=()=>a6.split(`
`).map(e=>e.split(",").map(Number)).map(([e,t,n])=>({x:e,y:t,z:n})),p3=({x:e,y:t,z:n})=>`${e},${t},${n}`,w2=e=>{const[t,n,r]=e.split(",").map(Number);return{x:t,y:n,z:r}},L6=(e,t)=>Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)+Math.pow(e.z-t.z,2)),g4=e=>new Map(e.map(t=>[p3(t),new Set])),h4=e=>e.flatMap(t=>e.filter(n=>p3(t).localeCompare(p3(n))<0).map(n=>({from:p3(t),to:p3(n),dist:L6(t,n)}))).sort(V3(t=>t.dist));function c6(){const e=x4(),t=g4(e);h4(e).slice(0,1e3).forEach(({from:i,to:a})=>{t.get(i).add(a),t.get(a).add(i)});const r=[];for(;t.size;){const i=t.keys().next().value,a=t4(i,o=>[...t.get(o)]);a.values().forEach(o=>t.delete(o)),r.push(a)}const s=r.map(i=>i.size).sort(V3(e4(i=>i))).slice(0,3).reduce(l2);return(()=>{var i=l6(),a=i.firstChild,o=a.nextSibling;return o.nextSibling,j(i,m(T,{children:s}),o),i})()}function R6(){const[e,t]=I(null);return f3(()=>{t(null);const r=function*(){const i=x4(),a=g4(i),o=h4(i),l=new Set(a.keys());let c=0;for(;;){c++,c%500===0&&(yield);const{from:u,to:R}=o.shift();if(a.get(u).add(R),a.get(R).add(u),l.delete(u),l.delete(R),l.size===0&&t4(u,b=>[...a.get(b)]).size===i.length){t(w2(u).x*w2(R).x);return}}}(),s=setInterval(()=>r.next().done&&clearInterval(s),0);n3(()=>clearInterval(s))}),(()=>{var n=u6();return j(n,m(W,{get when(){return e()},fallback:"Loading...",get children(){return["After connecting all points, the product of the x-coordinates of the last connection is ",m(T,{get children(){return e()}}),"."]}})),n})()}const f6=Object.freeze(Object.defineProperty({__proto__:null,Part1:c6,Part2:R6},Symbol.toStringTag,{value:"Module"})),d6=`
98241,50245
98241,51464
98122,51464
98122,52660
97649,52660
97649,53867
97585,53867
97585,55104
97774,55104
97774,56255
97196,56255
97196,57546
97636,57546
97636,58780
97591,58780
97591,59958
97238,59958
97238,61063
96596,61063
96596,62184
96091,62184
96091,63423
96024,63423
96024,64739
96152,64739
96152,65592
94869,65592
94869,66846
94784,66846
94784,67925
94219,67925
94219,69237
94206,69237
94206,70195
93369,70195
93369,71228
92725,71228
92725,72421
92396,72421
92396,73353
91573,73353
91573,74531
91190,74531
91190,75402
90295,75402
90295,76446
89686,76446
89686,77385
88921,77385
88921,78413
88284,78413
88284,79671
87931,79671
87931,80568
87102,80568
87102,81220
85994,81220
85994,82478
85581,82478
85581,83480
84863,83480
84863,83949
83605,83949
83605,84603
82559,84603
82559,85593
81829,85593
81829,86686
81171,86686
81171,87253
80061,87253
80061,87969
79082,87969
79082,88669
78093,88669
78093,89502
77196,89502
77196,90250
76233,90250
76233,91130
75347,91130
75347,91250
74000,91250
74000,92327
73212,92327
73212,92894
72128,92894
72128,93270
70952,93270
70952,93370
69660,93370
69660,94478
68819,94478
68819,94708
67595,94708
67595,95183
66472,95183
66472,95207
65195,95207
65195,96147
64221,96147
64221,96615
63081,96615
63081,96461
61777,96461
61777,97201
60700,97201
60700,97015
59412,97015
59412,97740
58305,97740
58305,97562
57038,97562
57038,97176
55764,97176
55764,97302
54566,97302
54566,97656
53385,97656
53385,98146
52195,98146
52195,97889
50969,97889
50969,97871
49756,97871
49756,97859
48543,97859
48543,97449
47351,97449
47351,97738
46119,97738
46119,97642
44909,97642
44909,97226
43740,97226
43740,97219
42519,97219
42519,96788
41367,96788
41367,97309
40026,97309
40026,96882
38868,96882
38868,96221
37780,96221
37780,95804
36640,95804
36640,96136
35265,96136
35265,95792
34086,95792
34086,94892
33112,94892
33112,94733
31866,94733
31866,94172
30777,94172
30777,93317
29828,93317
29828,92857
28705,92857
28705,92156
27705,92156
27705,91484
26696,91484
26696,91543
25258,91543
25258,90924
24200,90924
24200,90213
23201,90213
23201,89043
22528,89043
22528,88927
21108,88927
21108,88089
20204,88089
20204,87315
19255,87315
19255,86250
18557,86250
18557,85773
17347,85773
17347,84679
16696,84679
16696,83809
15843,83809
15843,82679
15268,82679
15268,82055
14153,82055
14153,81303
13157,81303
13157,80213
12558,80213
12558,79102
12004,79102
12004,78475
10804,78475
10804,76971
10824,76971
10824,76102
9952,76102
9952,75038
9369,75038
9369,74238
8339,74238
8339,72905
8231,72905
8231,71987
7378,71987
7378,70721
7205,70721
7205,69997
5885,69997
5885,68793
5582,68793
5582,67760
4871,67760
4871,66522
4679,66522
4679,65214
4737,65214
4737,64207
3895,64207
3895,62932
3915,62932
3915,61848
3259,61848
3259,60571
3366,60571
3366,59436
2864,59436
2864,58155
3122,58155
3122,57084
2124,57084
2124,55838
2213,55838
2213,54652
1807,54652
1807,53424
1794,53424
1794,52197
1810,52197
1810,50973
1890,50973
1890,50228
94822,50228
94822,48525
1557,48525
1557,47341
2383,47341
2383,46107
2110,46107
2110,44867
1961,44867
1961,43734
2727,43734
2727,42467
2452,42467
2452,41283
2754,41283
2754,40077
2933,40077
2933,38872
3134,38872
3134,37713
3522,37713
3522,36439
3506,36439
3506,35262
3852,35262
3852,34252
4684,34252
4684,33262
5505,33262
5505,32101
5846,32101
5846,31022
6392,31022
6392,29688
6381,29688
6381,28480
6689,28480
6689,27621
7685,27621
7685,26247
7715,26247
7715,25643
9102,25643
9102,24398
9389,24398
9389,23514
10255,23514
10255,22573
11021,22573
11021,21166
11150,21166
11150,20538
12337,20538
12337,19792
13336,19792
13336,18451
13627,18451
13627,17941
14878,17941
14878,16560
15179,16560
15179,15977
16322,15977
16322,14917
16989,14917
16989,14500
18254,14500
18254,13050
18605,13050
18605,12768
19956,12768
19956,11585
20576,11585
20576,11164
21786,11164
21786,10359
22708,10359
22708,9858
23836,9858
23836,8777
24596,8777
24596,8258
25713,8258
25713,7978
26955,7978
26955,7540
28095,7540
28095,6507
28940,6507
28940,6682
30363,6682
30363,6251
31489,6251
31489,5782
32598,5782
32598,4548
33429,4548
33429,4750
34790,4750
34790,4015
35829,4015
35829,4049
37104,4049
37104,3690
38261,3690
38261,2708
39279,2708
39279,3314
40653,3314
40653,2568
41748,2568
41748,2300
42941,2300
42941,2002
44135,2002
44135,2479
45412,2479
45412,1845
46579,1845
46579,2346
47826,2346
47826,2049
49029,2049
49029,2462
50242,2462
50242,2326
51451,2326
51451,1711
52695,1711
52695,1956
53904,1956
53904,1808
55148,1808
55148,2309
56320,2309
56320,3006
57444,3006
57444,3165
58640,3165
58640,3456
59812,3456
59812,3478
61045,3478
61045,3412
62316,3412
62316,4049
63401,4049
63401,4368
64572,4368
64572,4266
65892,4266
65892,5403
66775,5403
66775,5880
67884,5880
67884,6132
69090,6132
69090,6792
70119,6792
70119,6784
71472,6784
71472,7784
72326,7784
72326,8026
73577,8026
73577,8876
74490,8876
74490,8978
75860,8978
75860,9930
76701,9930
76701,10352
77896,10352
77896,11232
78772,11232
78772,11817
79867,11817
79867,12626
80792,12626
80792,14062
81171,14062
81171,14424
82471,14424
82471,15055
83557,15055
83557,16158
84188,16158
84188,16772
85314,16772
85314,18188
85573,18188
85573,18598
86957,18598
86957,19899
87301,19899
87301,20942
87937,20942
87937,21902
88675,21902
88675,22692
89662,22692
89662,23972
89932,23972
89932,24741
90987,24741
90987,25832
91538,25832
91538,27127
91708,27127
91708,28094
92461,28094
92461,29086
93191,29086
93191,30203
93671,30203
93671,31293
94211,31293
94211,32525
94402,32525
94402,33715
94665,33715
94665,34739
95400,34739
95400,35775
96158,35775
96158,36914
96627,36914
96627,38153
96733,38153
96733,39465
96473,39465
96473,40509
97404,40509
97404,41858
96797,41858
96797,42955
97601,42955
97601,44214
97352,44214
97352,45389
97756,45389
97756,46601
97847,46601
97847,47809
98021,47809
98021,49037
97534,49037
97534,50245
`.trim();var x6=A("<p>The largest area of any rectangle is <!>."),g6=A("<p>The largest area of any rectangle using only red and green tiles is <!>.");const p4=()=>d6.split(`
`).map(e=>e.split(",").map(Number)).map(([e,t])=>({x:e,y:t})),k2=e=>`${e.x},${e.y}`,h6=(e,t)=>(Math.abs(e.x-t.x)+1)*(Math.abs(e.y-t.y)+1),m4=e=>e.flatMap(t=>e.filter(n=>k2(t).localeCompare(k2(n))<0).map(n=>({a:t,b:n,area:h6(t,n)}))).sort(V3(e4(t=>t.area))),p6=(e,t,n)=>{for(let r=0;r<n.length;r++){const s=n[r],i=n[(r+1)%n.length];if(!(e.x===t.x&&s.x===i.x||e.y===t.y&&s.y===i.y)&&(e.x===t.x&&Math.min(e.y,t.y)<s.y&&s.y<Math.max(e.y,t.y)&&e.x>=Math.min(s.x,i.x)&&e.x<=Math.max(s.x,i.x)||e.y===t.y&&Math.min(e.x,t.x)<s.x&&s.x<Math.max(e.x,t.x)&&e.y>=Math.min(s.y,i.y)&&e.y<=Math.max(s.y,i.y)))return!0}return!1},m6=({a:e,b:t},n)=>{const r=[{x:Math.min(e.x,t.x),y:Math.min(e.y,t.y)},{x:Math.max(e.x,t.x),y:Math.min(e.y,t.y)},{x:Math.max(e.x,t.x),y:Math.max(e.y,t.y)},{x:Math.min(e.x,t.x),y:Math.max(e.y,t.y)}];for(let s=0;s<r.length;s++){const i=r[s],a=r[(s+1)%r.length];if(p6(i,a,n))return!1}return!0};function y6(){const e=p4(),n=m4(e)[0].area;return(()=>{var r=x6(),s=r.firstChild,i=s.nextSibling;return i.nextSibling,j(r,m(T,{children:n}),i),r})()}function b6(){const e=p4(),n=m4(e).find(({a:r,b:s})=>m6({a:r,b:s},e));return(()=>{var r=g6(),s=r.firstChild,i=s.nextSibling;return i.nextSibling,j(r,m(T,{get children(){return n.area}}),i),r})()}const v6=Object.freeze(Object.defineProperty({__proto__:null,Part1:y6,Part2:b6},Symbol.toStringTag,{value:"Module"})),w6=`
[###.] (0,3) (0,2,3) (1,3) (0,1,3) {117,15,2,128}
[...##..] (2,3) (5,6) (0,1,3,4,5) (0,1,2,6) (2,3,4,5,6) (0,1,5) {12,12,13,13,2,31,19}
[.###.#..#.] (0,1,3,7,8) (0,1,2,3,4,6,7,9) (0,1,3,5,6,8,9) (3,8) (1,6,7,9) (2,8) (1,3,5) (0,6,9) (4,8) (0,1,3,6,7,8,9) (0,2,5,6,8) {51,33,24,38,16,22,58,25,54,44}
[#.##] (0,1,2,3) (0,2,3) {9,1,9,9}
[##.###] (0,1,4,5) (0,1,3,5) (0,1,4) (2,3) (0,1,3,4,5) (1,3) {43,59,16,39,38,25}
[##.##.####] (2,6,8) (2,5,6,7,8,9) (0,1,6,7,8,9) (0,1,2,5,6,7,8,9) (3,4) (0,1,3,4,5,6,7,9) (3,4,7,8,9) (1,2,4) {24,40,67,26,42,34,62,64,81,64}
[##...#..#] (1,4,5,6,7) (0,2,3,4,5,6,8) (1,2,4,7,8) (0,2,5,6,8) (0,1,5,7) (1,3,6) (3,5) (0,1,2,6) (2,3,7) {44,44,44,36,12,42,46,36,27}
[##...] (2,3) (1,4) (0,1,3,4) (0,1,3) (0,1,4) (0,3,4) {32,32,0,21,27}
[##.#...] (0,1,3,4,6) (0,4,6) (1,4,5) (0,1,2,3,4) (0,1,4) (0,2) (0,1,2,5) (2,4) {87,53,62,21,73,18,25}
[###.#..#..] (0,1,3,5,6,7,8,9) (7,9) (0,4,8) (0,1,2,6,7,9) (2,4,7) (0,1,2,3,4,5,7,8,9) (1,2,3,4,5,7,9) (0,1,5,9) (0,1,2,3,4,7,8,9) {190,192,169,50,50,45,147,196,48,203}
[..##...#.#] (6) (1,2,3,4,5,8,9) (5,6) (1,5,8,9) (0,2,3,5,6,7,8,9) (0,1,2,3,6,7,8,9) (2,3,7,9) (1,2,3,4,5,7,8,9) (0,1,6) (1,3,4,6,7,8) (2,4,5,9) (0,1,2,8) {29,70,55,43,37,57,36,32,57,63}
[.#...##] (3,4,5) (1,2,3,4,6) (0,2,3,4,5,6) (1,5,6) (0,2,3,5,6) (0,2,6) {161,25,177,164,148,157,186}
[.####] (1,2,4) (2) (2,3) (1,3,4) (0,1) (4) {15,43,31,21,32}
[.#.....#] (1,7) (2,3) (0,2,3,4,5,6,7) (1,4,5,7) (0,1,2,4,5) (0,3,6) {35,23,19,31,21,21,30,31}
[.##...#.] (1,3,4,5,7) (2,6) (0,1,3,4,7) (0,1,4,7) (1,2,4,5,7) (1,3,5,7) (0,2) (0,1,2,3,5) (0,1,2,3,4,5,6) {65,216,59,183,62,184,20,202}
[##...###] (1,2,3,4,5,7) (2,7) (3,4,7) (1,3) (0,1,2,3,6,7) (4,5) (0,5,7) (0,1,4,5,7) (0,1,3,5,6,7) {49,63,35,69,44,57,29,84}
[#####] (0,1,2,3) (0,3,4) (0,3) (0,1,2) (1,2) {31,138,138,22,0}
[.######] (0,2,3,5,6) (0,2,3,4,5,6) (3,5,6) (1,2,6) (0,2,4,5) (1) (0,2,3,4,5) {40,8,43,219,35,237,221}
[##...] (0,2,4) (1,2,3,4) (2,3) (1,2,3) (0,1,2) (0,1,4) {31,34,62,33,21}
[..#.#....#] (3,4,5) (0,5,6,7) (0,1,2,3,4,6,8) (1,3,4,8) (6,9) (2,7) (3,4,5,6,7) (1,3,6,8,9) (1,3,4,5,6,7,8,9) (2,3,5,6,7,9) {28,52,36,101,81,72,90,60,52,45}
[###.#.#] (0,5,6) (1,2,5,6) (0,2,5,6) (3,6) (0,1,2,3,5) (0,2,3,4,5,6) {34,21,23,25,2,41,36}
[.##.#....] (0,4,6,8) (1,5) (0,1,2,6,8) (0,1,4,6,7) (0,5,6) (0,2,3,6,7,8) (2,4,7,8) (0,1,3,5,6,7,8) {45,23,17,19,19,30,45,31,34}
[.####...] (0,3,4,7) (0,4,5,6,7) (1,3,4,5,6,7) (0,1,2,3,5,7) (2,6) (4,6) (0,3,7) {45,11,25,44,47,18,50,51}
[.#....] (0,4,5) (1,2,4,5) (0,2,4) (1,2,3,4) (0,1,3,4) {18,23,21,20,34,9}
[#.##] (1,3) (0,2,3) {155,5,155,160}
[##..] (1,2,3) (0,1) (0,3) {144,37,19,145}
[#.#.##..##] (0,1,2,3,6,8) (0,1,2,6,8,9) (1,2,3,5,6,7,8,9) (0,1,3,5,7,8,9) (1,2,3,5,6,7) (1,2,4,5,6,7,8,9) (0,1,2,3,4,5,6,7,8) (2,3,5,7,8,9) (1,3,4,5,6,7,8,9) (0,1,3,4,5,6,8,9) {60,91,78,95,42,82,88,66,106,78}
[#.##.##] (1,2,3,5) (0,6) (2,3,4,5) (1,2,4,5) (2) (0,3,5) (1,2,6) (0,1,2,4,5) (0,2,3,4,5) {55,40,81,33,48,54,33}
[.#####..] (0,1,3,5) (2,3,4,5,6,7) (0,1,2,3,4,7) (0,2) (1,2,3,4,5) (3,6) (1,2,5,7) (0,1,2,4,7) {30,45,48,46,30,30,16,27}
[####.] (2,3,4) (0,1,2,4) (3,4) (0,3,4) {115,110,114,17,127}
[###..#] (1,4,5) (2,3,4,5) (3,5) (0,3,5) (1,3,4) {13,22,19,63,41,53}
[###.] (0,1) (0,2) (0,2,3) (2,3) (0,1,3) {38,20,37,37}
[.#..] (0) (2) (3) (0,1) {199,15,15,19}
[..#..#] (2,3,4,5) (1,2,3,4) (4) (0,1,2) (0) (3,4,5) (1,2,3,4,5) {7,20,21,30,45,17}
[#.#..] (2,4) (1,3,4) (0,4) (0,1) {25,23,16,6,30}
[..#.#..] (0,1,2,4,5,6) (0,2,3,5,6) (0,1,3,5,6) (0,5) (0,3,4,5,6) (0,1,2,3,5,6) {51,19,23,26,18,51,37}
[##..##] (1,2,4,5) (0,1,4,5) (0,3) (1,2,3,4) (3,5) (0,2,3,4) (2,5) {23,12,25,40,28,26}
[....###..] (2,3,4,5) (4,5,6,7) (0,1,3,7) (3,5,6) (3,4,8) (0,2,4,5,7,8) (4,5,6) (0,1,3,4,5,7,8) (0,1,2,3,4,5,6) {24,18,13,37,59,48,32,18,31}
[.##...] (0,1,3,5) (4,5) (3,5) (1,2,3,5) (2,3,5) {2,11,19,41,3,44}
[.###] (0,3) (1,2) (1,3) (2) (0,1) (3) {11,21,22,30}
[.#.#.] (1) (1,3,4) (1,2,3,4) (0,2,3) (2,4) (0,2,4) {22,40,54,25,54}
[#####.] (1,3,4,5) (1,3,5) (0,1,2,3,4) (1,2) {169,215,185,199,180,30}
[#.#######] (1,5) (4,5) (5,7) (0,1,3,6,8) (0,1,2,3,4,6,8) (1,5,7) (0,2,4,5) (1,2,4,5,7,8) (2,4) (0,1,2,3,4,7,8) (0,1,4,5,6) {40,73,52,7,76,284,25,232,21}
[##.##.###.] (4,8,9) (0,5,6,8,9) (0,1,3,6,7,9) (0,7) (0,1,3,4,5,7,8,9) (1,6) (1,2,3) (0,2,3,4,5,6,7,8) {225,217,19,215,31,40,233,213,43,211}
[...#####.#] (0,1,3,5,6,8,9) (3,4,5,6,7) (0,3,4,5,6,7,8,9) (0,1,2,4,5,7,9) (1,9) (0,2,4,5,6) (0,2,3,4,8,9) (1,2,4,5,7,8,9) (2,9) {46,50,51,43,60,69,50,43,53,85}
[.#..#] (2,3,4) (2,3) (1,2,3) (1,4) (0,1,2) (0,2,4) (4) {31,36,185,154,63}
[.#.##.#] (3) (0,1,4,5) (3,6) (0,1,2,3) (0,1,2,4,5) (0,3,5,6) (6) (0,4) (4,5) {47,28,24,53,31,46,48}
[.....#..#] (0,2,3) (0,1,2,3,4,5,6,8) (4,8) (0,1,2,3,7) (5,6,7) (1,2) (1,3,4,5,6,8) (0,1,2,4,5,6,7,8) (0,3,4,5,7) {52,56,51,51,56,56,52,46,52}
[.#.......] (2,3,4,5,6,7,8) (0,1,3) (0,2,5,6,7,8) (1,3,4,5,7) (1,2,3,4,5,8) (3,6,7) (0,4,7) (3,5) (2,3,4,7,8) (1,2,3,5,7,8) {23,16,32,65,57,42,30,78,32}
[##.#] (1,2,3) (0,2) (3) (0,3) (1,2) {13,20,29,29}
[##.#] (1,3) (0,3) (0,1,2) (3) {10,11,6,180}
[##..] (0,1,3) (2) (0,2) (2,3) {5,4,7,4}
[#..#] (1) (0,3) (1,2) (0,1) (2,3) {31,42,19,23}
[#..#.###.#] (0,4) (4,7) (0,2,3,4,6,7,8,9) (3) (0,6,8,9) (0,1,2,3,4,5,6,7,8) (0,1,2,6,8) (0,1,5,6,7,8,9) (6) (3,4,9) (1,3,5,6,7) (0,2,8) {75,58,45,69,72,41,79,69,59,38}
[.#####] (0,1,3) (3) (0,2) (1,2,3,5) (1,2,3,4,5) (2,3) (0,2,4,5) (0,3) {49,54,68,91,21,41}
[.####.##.] (2,3,4,5,8) (0,1,5,8) (1,2,3,4,6,7) (0,4,6,7) (0,3,7) (1,3,5) (0,1,2,3,5,6,7) {24,38,32,54,30,41,23,30,19}
[#..##....#] (2,3,4,5,6,9) (1,2,3,4,6,7,8) (2,4,9) (0,2,4,6,8) (1,9) (1,2,3,4,8) (5,6) (3,4,5,8) (2,3,4,5,7,8,9) (0,1,3,5,6,9) {39,45,96,92,110,77,79,30,73,77}
[.##.#] (0,1,2,3) (0,1,2,4) (1,2,4) {21,200,200,10,190}
[..#.#####] (2,4) (1,2,4,5,6,8) (0,1,2,3,5) (0,2,3,6) (5,8) (4,5,6) (0,1,2,3,4,5,7) {30,31,39,30,32,54,19,13,18}
[.#..#] (0,1,3,4) (1,4) (0,2,4) {7,21,4,3,25}
[##.###.#.] (6) (0,5) (0,2,3,4,7,8) (1,2,5,8) (0,3,4,5,6,8) (0,1,7) (1,3,4,5,7,8) {22,38,18,28,28,42,14,32,40}
[#.##....] (0,1,3,4,5,7) (1,2,5,6) (2,4,7) (1,4,5,7) (1,2,6,7) (1,2,3,4,5,6) (3,4,5) (0,5,6) (0,5) {23,44,44,23,41,62,38,42}
[..#....#] (0,1,2,3,4,5,7) (2,3,4,5,6,7) (2,7) (0,2,3,4,6,7) (4,5,6) (0,1,6) (1,2,3,4,6,7) {11,11,22,20,38,24,36,22}
[#.#.###.] (1,3) (0,1,2,5,6,7) (0,1,2,3,5,7) (0,2,5,6,7) (1,3,4) (2,3,4,5) (0,1,3,6,7) (2,4,5,6,7) {37,46,56,62,29,56,30,44}
[#.##] (1) (2,3) (2) (0,2) (1,2,3) {19,3,55,17}
[....##] (1,2,4,5) (2,5) (4) (0,1,2,5) (2,3,5) (0,1,3,5) (0,2) (0,2,3) {53,23,69,30,2,42}
[.#.#....] (2,3,5) (3,7) (1,2,4,5,6,7) (0,5) (0,6,7) (0,1,4,5,6,7) (1,2,5,7) (1,2,4,7) (1,5,7) (6) {20,31,19,10,16,44,34,35}
[#.#.#.#..#] (3,6,7,8,9) (1,3,4,5,6,8,9) (1,2,3,4,7,9) (0,1,2,3,4,5,7,8,9) (2,3,4,8) (0,3,5,6,9) (1,3) (0,1,4,6,7,8) (5,7) (0,1,2,5,6) (7,9) (0,1,2,3,4,6,8,9) (4,7,9) {53,76,67,83,58,35,58,45,42,72}
[#.#..##] (1,2,3,4,5) (0,1,2,6) (2,3) (0,4,5) (0,1,2,3,4) {49,44,59,41,46,35,18}
[..##..##] (1,4,6,7) (0,1,3,5,7) (1,3,7) (1,2,5,6,7) (1,3,6,7) (1,2) (1,2,4,5,6,7) (3) (0,1,2,4,6,7) (0,5,6) {42,95,32,54,30,35,68,82}
[####.####] (1,5,8) (4,5,6,7,8) (0,2,4,5,6,7,8) (0,2,4,7,8) (1,2,6) (0,1,2,3,4,5,8) (0,1,2) (1,4) {26,65,45,12,40,32,23,12,40}
[.###] (0,2,3) (0,1) (2,3) {27,10,26,26}
[##.#.#.] (1,2,3,4,5) (1,3) (0,1,2,3,4) (0,1,2,3,5,6) (1,2,3,5) (0,1,2,6) {32,52,49,43,24,25,17}
[#.#..#] (1,3,5) (1,2,5) (1,4) (0,2,4) (0,2,3,5) (0,1,2,3) {32,53,41,42,14,31}
[.###.#..] (0,4,5,7) (2,6) (0,2,3,4,5) (0,1,2,7) (0,1,2,3,6) (3,4,5,7) (3,7) (2,4,6,7) {48,15,51,48,58,41,36,61}
[#.#.#.] (1,2) (3,5) (0,1,3) (2,4,5) (2) (1,2,4) {3,28,39,11,9,12}
[#..###] (0,3,5) (4) (2,3,5) (0,3) (3,4,5) (0,3,4,5) (1,3,4) (0) {40,12,17,82,64,62}
[..#.##.] (0,3,4) (2,4,5) (2,3,4,5,6) (0,1,3,4,5,6) (1,2,3,5,6) {26,14,15,41,40,28,28}
[.#..] (1) (2,3) (0,3) (1,2) (0,2) (0,2,3) {41,154,46,34}
[###.#...] (4,5) (6,7) (1,4,7) (1,2,3,4,5,6) (0,1,3,5,6) (2,7) (0,6) (0,2,3,4,6) (2) {36,29,20,20,26,13,147,138}
[#..####.##] (0,1,3,4,6,8,9) (0,5,7,8) (2,8) (0,1,3,6) (0,1,2) (0,3,4,5,6,7,8,9) (2,3,5,8) (0,1,2,4,5,7,8,9) (0,1,2,4,5,7) (1,3,4,7) (2,3,6,7,8,9) {70,53,51,66,64,60,45,48,67,47}
[....#..#..] (0,1,2,3,5,6,7,8) (3,4,7) (0,3,4,6,7,8) (2,6) (0,2,3,4,5,8,9) (0,7,8,9) (2,8,9) (1,3,7,9) (5,8) (3) (0,1,3,4,5,7,8,9) {44,19,35,63,37,45,12,57,73,54}
[...##..#] (4,7) (3,4,5,7) (0,2,7) (0,1,5,6,7) (0,1,2,3,4,6,7) (1,6,7) {22,33,14,16,32,16,33,63}
[###..] (0,2,3) (2) (1,4) (0,3,4) (1,2,3) {31,5,199,36,12}
[#....#] (0,2,4) (0,2,3,4) (0,2,3) (1,4,5) (2,4,5) (0,1,3,5) (0,1,2,4) (0,3) {48,38,41,21,57,30}
[####..#] (3,4) (0,2,4,6) (3,4,6) (2,4) (0,1,3,5) (3,4,5,6) (3,6) {28,19,15,70,46,28,45}
[##.###.##.] (1,2,4,6) (5,6,9) (2,4,7,9) (1,2,3,6,7,8,9) (0,2,3,4,5,6,7,9) (0,1,2,4,5,6,7,8) (0,2,4,9) (1,2,5,7) (3,6,7,8,9) {28,23,71,16,59,166,175,45,7,203}
[.#...#.] (0,1,3,5) (1,2,6) (3,4,5,6) (2,5,6) (0,2,3,4,6) {36,23,23,49,29,37,36}
[##.##..#] (0,1,2,4,5,6,7) (2,3) (0,1,2,4,7) (1,4,5) (0,2,7) (1,2,4,6) (6) {32,34,51,10,34,6,22,32}
[######] (0,1,3,4) (2,5) (3,4) (0,1,5) (0,1,2,4,5) {29,29,18,26,39,21}
[#...#..#] (0,2,3,4,6,7) (1,5) (1,7) (3,4,5,6) (0,4,6) (3,4) {25,8,16,23,32,10,30,19}
[.###] (0,2,3) (1,2,3) {6,1,7,7}
[.##.#...] (0,2,3) (2,5,7) (0,1,3,4,5,6,7) (1,3,4,5,6) (3,7) (1,6) (1,2,5,6) (3,5,6,7) {22,37,42,50,17,44,37,35}
[###..] (0,2,3,4) (2,3) (0,1) (0,1,4) (0,1,3,4) (4) {30,24,6,11,17}
[##.##.###.] (0,5,8) (1,2,3,4,6,7,8,9) (1,2) (0,1,3,4,5,7,8,9) (0,3,4,7,8,9) (0,1,3,4,5,6,7,8) (1,4,9) (3,4,7,9) {25,47,29,53,55,19,26,53,38,42}
[..#..#..#] (3,4,6) (0,1,2,3,5,6,8) (7) (0,2,3,4,6,8) (0,2,3,4,7,8) (0,1,2,3,4,5,6,7) (1,2,3,4,5,6,8) (1,7) (0,5,7) {54,47,52,72,53,51,63,46,46}
[#.##.] (2,3) (0,2,3,4) (1,4) (1,2,3) (0,1) (2,3,4) {4,25,40,40,39}
[#..#.#.] (1,2,4,6) (2,3,4) (2,3,6) (3,4,6) (0,1,3,5,6) (1,2,3,5,6) (4,5,6) (0,1,2,4,6) (4,5) {6,28,50,34,45,24,49}
[.##.#] (0,1,3,4) (0,1,2) (1,2,4) {10,19,10,9,18}
[##.#######] (0,4,9) (0,6,9) (2,4,5) (1,3,5,6,7,8) (0,2,3,4,5,6,7,8) (0,5,6) (1,2,7,8) (2,3) (1,2,4,6,7) (1,2,5,6,8) (1,2,5,7,9) (0,1,4,5,6,7,8,9) {41,84,89,36,54,86,81,68,66,32}
[####.#####] (1,2,3,4,6,7,8,9) (1,4,6,9) (2,3,4,6,8,9) (3,7,8) (0,2,3,5,7) (0,1,3,4,5,8) (2,4,5,6,9) (0,2,5,7) {37,35,60,65,56,50,45,55,48,45}
[##.#] (0,1,3) (0,2,3) {26,11,15,26}
[.#..#.] (0,2,5) (0,1,3,5) (1,5) (0,3,4,5) {178,35,151,27,10,196}
[#.#..#] (1,2,5) (0,2,4,5) (0,3,4,5) (0,1,2,5) (0,1,2,3) (1,4) {32,36,32,6,34,34}
[###.#..] (0,1,2,3) (0,3,4,5) (0,2,4,6) (0,1,2,4) (0,2,3,4,5) (1,4,6) {45,46,43,17,50,2,37}
[..##.#.] (0,1,4,5) (0,2,3,5,6) (1,2,3,4) (0,1,3,4,6) (2,5) (3,6) (2,5,6) (1,2) {28,57,78,48,37,55,48}
[##..###] (2,3) (0,1) (0,1,5,6) (0,4,6) (0,3,6) (1,2,3,4,6) (1,2,3,6) {36,29,24,37,6,10,41}
[......##..] (0,1,3,6,7,8,9) (1,3,6) (0,1,3,4,6,8,9) (0,3,5,7,9) (5,6) (0,3,4,5,7) (1,8) (0,1,2,5,6) (0,1,2,3,5,6,8,9) {81,83,16,82,30,47,70,46,64,61}
[#.###..#] (1,4,5,7) (1,3,6) (1,7) (0,1,2,3,4,6) (0,2,3,4,5) (0,1,3,7) (1,3,5,6,7) (0,2,4,5,6,7) {47,77,36,50,53,49,50,70}
[########] (0,1,2,5,6,7) (0,2,3,5) (0,2,4,6) (5,6) (1,2,4,7) (0,1,2,5,6) {33,30,37,5,6,42,39,13}
[#.#.] (1,3) (1,2) (0,2) (2,3) {16,20,53,19}
[#.....##] (1,2,3,5,6,7) (5,7) (1,4) (1,5,7) (3,4,6,7) (0,1,4,6,7) (0,1,3,5,6,7) (0,1,2,3,4,5,7) (3,7) (0,2,6,7) {31,49,23,45,48,41,48,88}
[.#..##...] (0,2,4,5,8) (0,1,2,3,4,7) (0,2,4,5,6,8) (1,2,3,5,6,7) (7,8) (0,3,4,6) (0,3,4,5,7,8) (4,6) {199,6,195,12,214,192,200,24,207}
[#.#..] (0,2) (0,1,2,3,4) (0,1,3) {159,143,143,143,127}
[.##..] (3,4) (0,1,3,4) (2,3,4) (1,2) (0,1,3) {30,48,30,61,43}
[#.#.] (0,1) (0,2) (1,3) (1,2) (0,3) {43,25,17,31}
[#.##.####] (0,1,2,3,4,5,8) (0,1,2,3,5,7,8) (0,2,3,4,5,6,8) (1,2,4,5) (2,3,4,7) (1,4,5,7) (0,1,8) (0,1,7,8) (2,4,5,6,7,8) (1,2,3,4,6) {24,47,48,37,50,41,8,40,24}
[......####] (1,8) (0,3,4,6,7,8,9) (0,1,2,3,4,5,7,8) (2,5,7) (1,5,6) (2,3,4,6,7,9) (3,8) (3,5,6,7,8) (0,1,2,3,5,9) (0,1,2,4,5,7,9) (0,3,6) {55,63,49,241,53,62,47,72,245,43}
[#...#.#.##] (1,3,4,7) (3,7,9) (1,2,3,4,5,6,8,9) (4,5,9) (2,3,4) (0,4,5,6,7,9) (0,1,5,9) (2,5,6) (0,1,4,5,6,7,8,9) (2,3,5,6,9) (1,6) (0,2,3,4,5,6,7,8,9) (5) {57,61,52,57,81,113,101,74,39,93}
[#..#..##..] (1,5,6) (0,1,2,3,6,7,8) (0,3,4,5,7) (1,6,9) (8) (0,1,2,3,4,5,9) (1,2,4,6,7,9) (2,4,5,6,7,8,9) (0,1,2,3,5,8,9) (0,1,3,4,6,7,9) (0,1,2,3,4,5,7,8,9) {73,93,54,73,66,63,61,70,46,78}
[..#..##.] (0,1) (0,1,2,3,4,7) (0) (0,1,3,5) (4) (5,6) (3,4) (0,5,6) (1,2,4,5,7) (1,4,5,6,7) {54,59,19,27,57,76,41,31}
[..###.#] (2) (0,1,2,4,5,6) (0,1,3) (2,4,5) (4,5) (0,1,2,3,5) (0,3,6) (2,3,4,6) {69,49,58,59,62,67,50}
[.#.#.] (0,2,4) (1,3) (0,3) (0,1,2) {22,27,15,22,3}
[.####.#.#.] (0,3,4) (0,1,3,6,7,8,9) (2,4,9) (3,7,9) (0,1,2,6,7,9) (0,1,2,3,4,5,6) (0,3,4,5,6,8) (0,4,5,7) {95,52,50,71,75,50,68,72,36,70}
[###..##.#.] (8,9) (0,1,2,3,5,6,7,9) (2,6) (6) (0,1,5,6,9) (2,4,6,7,8,9) (0,1,2,3,6,7,8,9) (2,8) (4,7) (1,2,3,4,7,8) (0,3,4,6) (0,1,3,4,5,6,7,9) (3,5,7) {40,56,208,54,49,39,215,74,53,55}
[#..#] (2) (0,2,3) (0,1,2) {32,13,49,19}
[...#.#.] (0,4,6) (0,1,2,3,6) (0,1,2,3,4,6) (2,5) (0,1,2,5) (1,3,4,5,6) (0,1,2,4,5) {66,55,51,23,34,36,38}
[#.#..#..#] (0,3,4,5,6,7,8) (1,2,3,4,7) (1,3,6,7,8) (2,7) (1,2,4,5,6,7,8) (0,2,5,8) (0,2,8) (1,3,7) (0,5) (0,2,3,4,6,7) {60,25,74,57,53,32,42,80,38}
[###.] (0,1,2) (0,3) (0,1) (1,2,3) (3) (0) {22,13,9,32}
[..##] (1) (1,2,3) (0,2,3) {10,16,21,21}
[..##.##.##] (1,3,5,7,8,9) (4,5,8) (0,4,6) (1,5,6,7,8,9) (2,9) (5,6) (4,7,8,9) (1,8) (0,3,4,7,8,9) (4,5) {9,8,14,12,52,52,19,29,49,43}
[##....####] (0,3,5,9) (1,3) (6,9) (0,2,3,4,5,6,7,9) (2,3,5,6,8,9) (0,1,3,4,5,6,8,9) (0,1,2,3,4,6,7,9) (0,2,3,6,7) (2,3,6,8,9) (0,9) (1,2,3,4,5,6,7) (1,3,4,8,9) (1,3,4,5,6,7,8,9) {51,76,57,126,76,73,102,58,60,121}
[##.##] (1,2) (0,3,4) (2,3,4) (0,1,3,4) {12,23,27,19,19}
[#.###..##] (2,3,7,8) (0,8) (1,2,4,6,7) (2,5,6) (0,1,3) (1,2,3,4) (2,5) (0,2,4,8) {42,37,80,38,41,24,19,29,46}
[#.#.##.] (0,2,5) (1,5) (0,4,6) (1,3,6) (0,3) (0,4,5,6) {57,23,11,23,26,40,29}
[#...#..#] (4) (0,1,2,4,5) (2,3,4,5,6,7) (1,3,5) (0,4,7) (1,2,3,4,5,6) (6,7) (3) {23,30,26,31,52,42,23,32}
[###.#] (1,2,3) (0,4) (0,1,2) (1,2) (1,2,4) {15,161,161,6,13}
[.#.....] (2,3,4,5,6) (1,5) (1,3,4) (0,1,2,5,6) (0,1,3,6) (1,5,6) (1,3) (1,2,3,4,5) {24,100,34,54,29,64,39}
[.###] (2,3) (1,2,3) (2) (3) (0,1,3) (0,2) {136,136,56,150}
[.##...] (0,2,3,4,5) (0,4,5) (3,4) (0,1,5) {42,17,9,15,31,42}
[#.##] (0,2) (0,1) (2) (3) (1,2,3) (0,2,3) {34,15,53,30}
[##..###..] (1,3,4,5,6,7,8) (0,4,6) (0,2,4,6,7) (0,1,2,3,4,5,7) (0,3,4,5,6,7) (2,3,4,6,8) (5,7) (3,4,6,8) (4,8) (0,3,8) (0,1,2,3,4) {166,28,59,178,202,132,168,150,62}
[#.#.....] (0,3,4,7) (0,1,2,3,4,6,7) (0,1,4,5,6,7) (2,3,4,5,6) (0,1,3,4,5,7) (0,1,3,6,7) (0,1,2,4,5,6) {47,29,34,43,61,38,46,35}
[..###.#..] (6,8) (2,3,4,5,6,7,8) (0,1,2,5,7,8) (1,4,5) (0,1,4,5,6,7,8) (0,3,6,7) (1,2,5,7,8) (0,3,5) (0,1,2,8) (2,3,5,8) (1,8) {33,207,46,30,45,55,44,40,230}
[.#.#....] (1,3) (0,2,4,6,7) (4,6,7) (0,3,4,5,7) (0,2,3,4,5) (1,2) (0,2,3,4,6,7) {49,22,64,42,58,20,38,38}
[#.#..#..] (4,7) (0,1,3,4,7) (0,1,2,3,6) (0,2,3,6) (0,2,4,6) (1,5,6,7) {62,47,43,44,55,16,59,53}
[##.###.] (1,4,6) (0,1,3,4,5) (2,3,4,5) (4,6) (0,1,3,5) (2,3,6) (2,5) {12,27,24,27,47,35,27}
[..#..#.] (0,1) (0,2) (1,4) (2,3) (0,3,4,5) (0,2,3,4,6) (2,3,6) (4,5) (0,4,6) {67,32,35,25,76,17,43}
[#.##] (1,3) (0,2,3) {10,14,10,24}
[#..#.#.##] (0,1,2,3,4,5,7) (6,8) (0,1,3,5,6,7,8) (0,1,2,5,7) (4,6) (1,2,3,4,5,6,8) (0,1,5,6,7,8) (3,4,6,8) (1,3) (0,2,4,5,6,7) (3,6) {39,64,40,62,57,58,96,39,75}
[#..#####.] (0,4,8) (0,1,4,8) (3,7,8) (1,6,8) (1,2,3,4,5,6,7,8) (1,2,8) (0,1,3,4) (0,2,3,6,7,8) (5,7,8) (0,7) (0,1,4,5,6,7,8) {54,52,31,55,41,36,36,75,85}
[##.##] (3,4) (2,3) (2,3,4) (0,1,3,4) (1,2,3) (0,1,4) (4) {18,18,26,50,57}
[.#.####] (1,4,5) (1,3) (1) (0,2,4,6) (1,2,3,6) (2) (0,1,4) (1,3,4,5,6) (0,4,5,6) {33,46,13,32,50,34,47}
[..##.##] (2,5,6) (0,2,3) (1,2,4,5,6) (2,4) (0,1,2,5,6) (0,1,3,4,5) {27,40,63,14,30,60,53}
[####...#.] (4,6,7,8) (2,4,5,6,8) (2,5,6,7,8) (1,2,4,5,8) (0,1,2,4,5,7) (1,4,6,7) (0,3,5,8) {2,36,45,2,50,47,53,45,53}
[##..#] (0) (0,3,4) (0,1,2) (1,2,3) (2,3) (0,2,4) (0,1,2,4) {52,27,42,33,29}
[.......##] (0,1,2,4,6,8) (0,5) (2,7) (3,7,8) (0,1,2,5,6,7) (2,3,5,6,7,8) (7,8) (1,2,4,7) (1,2,5,6) (1,4,7) {35,58,56,9,32,50,39,60,13}
[##.##.] (0,1) (0,3,4,5) (0,1,3,4) (1,4) (1,2,4,5) (0,1,2,4,5) (0,1,2) (1,5) {50,79,32,25,69,49}
[####..##.] (0,1,2,3,7,8) (0,1,2,3,4,7,8) (1,2,3,5,6,7,8) (1,4) (0,1,2,3,4,5,7,8) (1,3) (0,1,4,5,8) (2,3) (0,1,2,5,6) {71,99,64,64,36,48,23,39,54}
[##.###] (0,4) (0,1,2,4) (0,4,5) (0,1,3,5) (0,1,2,3,5) (2,3,4) (1,2,4) {40,19,12,26,33,23}
[.#..#.] (0,1) (2,5) (1,2,3,5) (0,5) (3,4,5) (0) (0,1,2,3,4) {147,38,41,22,11,36}
[##.###.] (0,2,5,6) (0,1,2,3,4) (2,3,4) (1,3) (0,1,3,6) {41,46,29,48,18,11,25}
[###...#.#] (1,2,3,5,7,8) (2,3,4) (0,2,3,4,5,7) (0,1,2,5) (0,2,3,4,6,7,8) (1,2,3,5,6,8) (0,2,7,8) {197,37,229,50,32,47,26,178,186}
[.###.] (1,2,3) (4) (0,1,2,4) (1,4) (0,1,3) (0) (0,3) {42,43,31,29,33}
[.#..##.##.] (5,6,7,9) (4,7,8) (1,2,4,5,6,8,9) (1,2,4,5,7,9) (0,2,3,5,6,7,9) (0,1,2,3,7,8,9) (0,2,3,4,5,8,9) (2,3,4,5,6,7,8,9) (6) (1,2,3,4,6,7,8,9) (0,1,3,4,5,6,7,9) (0,1,2,3,4,6,7,8,9) (0,1,2,5) {55,62,69,54,48,47,67,78,53,75}
[###..#] (0,2,4,5) (0,2,3) (0,3,5) (0,1,2,5) {58,13,41,25,20,50}
[#.###.####] (0,1,2,3,5,8) (2,5,9) (2,6,7,9) (0,1,5) (1,2,3,4,5,6,7,8) (3,5,7,9) (1,4,6,7,8,9) (1,3) (0,5) (6,7) (0,3,4,5,6,9) (3,8) {42,229,30,234,30,66,49,52,37,44}
`.trim();var k6=A("<p>The fewest button presses to configure the lights is <!>."),$6=A("<p>The fewest button presses to configure the joltage is <!>.");const y4=()=>w6.split(`
`).map(e=>e.match(/\[(?<lights>.+)\](?<buttons>.+)\{(?<joltage>.+)\}/u).groups).map(({lights:e,buttons:t,joltage:n})=>({lights:e.split("").map(r=>r==="#"),buttons:t.trim().split(" ").map(r=>r.slice(1,-1).split(",").map(Number)),joltage:n.split(",").map(Number)})),j6=(e,t)=>{const n=e.map(()=>!1);let r=null;const s=(i,a,o)=>{if(r&&a.length>=r.length)return;if(i.every((u,R)=>e[R]===u)){r=a;return}const l=J2(0,e.length-1).filter(u=>e[u]!==i[u]),c=t.findIndex(u=>l.length===u.length&&l.every(R=>u.includes(R)));if(c!==-1){r=[...a,c];return}for(let u=0;u<t.length;u++){if(a.includes(u))continue;const R=t[u],h=i.map((b,S)=>R.includes(S)?!b:b);o.some(b=>b.every((S,p)=>S===h[p]))||s(h,[...a,u],[...o,h])}};return s(n,[],[]),r},S6=(e,t)=>{const n=e.map((i,a)=>t.map(o=>o.includes(a)?1:0)),r=t.map(i=>i.map(a=>e[a]).reduce(Q5));return((i,a,o)=>{const l=i.length,c=i[0].length,u=[];let R=0;const h=new Map;for(let L=0;L<c&&R<l;L++){let f=R;for(;f<l&&i[f][L]===0;)f++;if(f===l)continue;[i[R],i[f]]=[i[f],i[R]],[a[R],a[f]]=[a[f],a[R]];const d=i[R][L];for(let x=L;x<c;x++)i[R][x]/=d;a[R]/=d;for(let x=0;x<l;x++)if(x!==R){const g=i[x][L];if(Math.abs(g)>0){for(let w=L;w<c;w++)i[x][w]-=g*i[R][w];a[x]-=g*a[R]}}u.push(L),h.set(L,R),R++}const b=[],S=new Set(u);for(let L=0;L<c;L++)S.has(L)||b.push(L);let p=1/0;const y=new Array(c).fill(0),$=(L,f)=>{if(f>=p)return;if(L===b.length){let g=f;for(let w=u.length-1;w>=0;w--){const z=u[w],k=h.get(z);let F=a[k];for(let M=z+1;M<c;M++)Math.abs(i[k][M])>1e-9&&(F-=i[k][M]*y[M]);if(Math.abs(F-Math.round(F))>1e-4||(F=Math.round(F),F<0||F>o[z])||(y[z]=F,g+=F,g>=p))return}p=g;return}const d=b[L],x=o[d];for(let g=0;g<=x;g++)y[d]=g,$(L+1,f+g)};return $(0,0),p})(n,e,r)};function A6(){const e=y4().map(({lights:t,buttons:n})=>j6(t,n).length).reduce(Z);return(()=>{var t=k6(),n=t.firstChild,r=n.nextSibling;return r.nextSibling,j(t,m(T,{children:e}),r),t})()}function z6(){const e=y4().map(({joltage:t,buttons:n})=>S6(t,n)).reduce(Z);return(()=>{var t=$6(),n=t.firstChild,r=n.nextSibling;return r.nextSibling,j(t,m(T,{children:e}),r),t})()}const _6=Object.freeze(Object.defineProperty({__proto__:null,Part1:A6,Part2:z6},Symbol.toStringTag,{value:"Module"})),q6=`
yjd: oxd gnm sct
bgc: pho cpg gru jnr
vdl: mgp cxx vpj
upf: cbw cxx vpj
huo: cdh vmx
cvj: pia pxm
bcu: lwn bbq suo
sce: out
pds: cbw cxx vpj
ako: ash maj fnq
kxg: zgp clk
fsx: yir bgn
nle: aiw gwo oah
flq: out
gbw: tgz
nop: gpq
wwe: ddh hsr zbw lgg
qtj: jpl
xsm: vpj mgp
wkg: cyt jpb iml
igy: fxe pit kue
iml: cfx udp bbq suo
kle: dev nhy kxb
ouf: sgm rql odr
dki: yma tdp
avt: lwn suo
mak: cye bag
ocd: vkj
bag: bma kks iud
wwm: hyx ndf gbo tbn goo xep kzj iyo egq css lka idi tun eya
yke: zaq khl you
qmz: dev
abi: mzr hnl rru
rxd: you zaq khl
njg: ydx igy zyy gev ogm unh ehf zsc hey jhf wbl tzt
qdf: vpj mgp
lxb: huo sda ojq
rja: tpj cgm
pob: txa bpj
pav: dtf kba dwh lxb scc
hey: gdf ime
ahi: eya tun lmu tbn css egq mje iyo jby xep
fbu: pob yin
qlx: mzt nro dyq
oad: txa wcn ufs
nuw: cdh orm
vel: npu vas
gvs: amy ynd eqc
dpu: vpj mgp cbw
hgt: ccs gzk tkq vvg
krw: upf
kml: pxm pia sct gnm
ssu: dac wrv
nwh: lwn udp bbq suo
mzt: out
bjb: tla wip
jpl: lwn cfx udp bbq suo
czc: gnm sct pxm
pyk: ufv cmw ufr uxj
gmc: tkg hqx
xza: cfx
adr: knh mak cmf
vax: ngx fjh stx
gdv: jpl yky nkh
ojq: cdh orm
vja: ioo bgc
tti: cvj
blw: njg orm vmx
kue: xza ifa efu qdy
tto: mmo dac
raz: vbb tcx ukx zpz
akk: nle tef
dac: ljy sif rxd
clk: lme ivb
qyx: eai fft
tgd: cxx mgp
ngx: khl
kcd: cbw
hqj: trc fiz
qqh: mid tpj
sps: cdh njg orm
roo: pia pxm sct oxd gnm
wqz: nle
ahw: nhy kxb
jwi: sjz ysu ikc
gmk: ywt gpq
aox: orm cdh vmx
hlj: iti
pxo: stx uok
vkj: jwk jiu
hsr: quo ncp fsx rqf
evw: zaq
bpj: uhu spk
vas: jiu
dev: ydr
cyt: suo cfx
txa: uhu
pia: znv xmd ako fig ssu
svr: iaw vyf ahi euv wwm
ddh: fsx ncp zhp
uge: cmw uxj ufr
lhz: uuu fll
wcn: uhu urq
yhd: iml cyt jpb
epy: czi djw
suo: wjb uhq qmz lhz kle liy pfb adr eep fue ugi qhd rye vvm vdx gui ahw
spk: qyn
tke: kdb fdo
hqx: aox fwg nuw
scc: ojq blw sda
ssx: njg orm cdh vmx
zhp: yir bgn
tcr: ydr
bgn: bnd gux
kks: sct
igq: uoo qyh euu
umc: suo bbq lwn cfx
iok: vmx njg
cfx: vdx qmz wjb ugi pfb kle
pxm: eao tto ort dut aea krd
ysu: swc
efu: bbq suo udp cfx
qzy: kcd vdl xsm
odr: qtj gdv
cpg: out
upt: pob udv yin
cmw: ocd vel
fft: vhg kvl
our: cfx udp suo bbq
uhq: nhy tcr
gci: vmx cdh orm njg
iyo: hkh idw krw
iaw: lka idi ylv tun iyo egq css uge pyk hyx ndf mje rzv lmu
fpa: cbw cxx mgp vpj
gwy: mkv cwh hxy szg
ngt: uao
fjh: khl you
ifv: oad pob udv ceu
zsc: vji pkx yhd
xtl: you khl
pqc: znm cvj
fwg: vmx cdh njg
qhv: flq
ncp: yir wmy bgn
gwh: hld vbb zpz ukx tcx
rfo: kce rru
epz: vas
ejh: pia pxm sct
rye: frm qtv mek
mst: ugr nle
bbq: adr vdx pfb qmz qhd
xkd: out
muz: zgp bkc
ufr: vel vcs fjj epz
tcx: umc
mzr: iyp
ryv: fir bwy skm qzv
vxm: dnu qyx
hvm: sct pxm pia
euv: css uge iyo jby xep hyx ylv pyk tun
ihm: vmx
jhf: fdo ouf kdb
dyq: out
yir: bnd qlw
unh: pom
wvy: you zaq
cbw: byt ljk fmy yla jer lbf bcd gmc zua rvq afv sur wpy pgt kxf
jby: epk hjx
jvq: cba pav
eao: vwn hgt
ydr: roo yjd pne egz
tfo: fxe
urq: qlx
yin: txa ufs yoq bpj
mek: vpy tol rfo
vmx: lhd hey tfo igy bkn ogm sjm ydx
exo: cdh vmx njg orm
iyn: qdy
qyh: hkp oiv
yia: tcx vbb
twr: egz yjd jxn roo
tbn: djn jwi jkt
xkq: cdh njg orm
tkq: zaq
asc: cbw mgp cxx vpj
tun: cmw uxj ufv
sct: xsx fig xmd aea sso loq ako gsn eao fkm ssu nvk cpx tga gwy ort dut znv krd
iyp: oxd gnm pxm pia
yoq: spk uhu urq
ksa: dba ick uyj
byt: gvs dff loi ngt
vhg: cow bis
afv: ekg orp tzd
mfg: zaq
mcu: cdh vmx
ivb: ugr tef
goo: djn xxq
cgm: ffh vyt odi
qdy: cfx bbq suo udp
ipn: vpj cbw
uao: hyd xkq iok
ams: cas
mhb: bcu
swc: bwy skm qzv
hyx: epk nxf uwr
eep: qtv mek sfu
jqi: khl
qyn: nro dyq
vvg: zaq you
wbl: kue
fiz: tdp byk
tkg: aox pdc
pgt: ruw hqx tkg
gzk: zaq you
css: hjx epk nxf mwu
nkh: bbq suo lwn
uoo: hkp
ass: cow bis
gdf: bcu our avt rxm
xep: yzo tiw eeg syu
ccs: zaq khl you
tga: szg hxy git
oju: ngt loi dff uyu gvs
qdv: myx ywt
ulg: epy fkt cas fot
bis: njg
lwn: pfb gui ahw kle igq vdx lhz qhd wjb ugi
dnu: fft eai dau
nvk: hgt vwn
tla: ddh hsr lgg
hxy: yke zhn xtl evw jqi
cas: ahr czi djw qhv kae
myd: mcu
kvl: zal
uwr: ipn
kce: jvr iyp grs
gda: upf gqt
ufs: uhu
khl: ouk upt ols fbu ifv gmk qdv bjb oac
oxd: loq tto xsx sso
jpw: hvm czc sau
vwn: vvg ccs mfg
aea: awe tns
eya: cmw ufv
bnd: out
sls: dtf scc lxb dwh
kfz: mgp
aiw: njv pbq
npu: jwk qdf
mic: tla
cow: vmx orm
oyj: gwh
trc: yma jgt
bex: tkq ccs mfg
wmy: qlw bnd
ysh: mgp cxx cbw
rxm: cfx udp suo
iti: cbw vpj
mmo: ljy rcf
dff: eqc
kae: fvk jlm
eai: ass kvl
jvm: raz yia
lbf: bhl htl myd
sif: khl
mid: odi vyt ffh
lka: ksa
gbo: tiw qzy eeg syu
jwk: cxx
ysf: gqt
egz: pxm gnm
ydx: jvm oyj pom
veb: cfx lwn bbq
tol: kce moa mzr
znm: oxd gnm sct
mje: uwr epk nxf
sur: dnu
wpy: htl bhl
nll: dnu rux
vyq: skm ysh fir qzv
sjm: ouf kdb
qtv: tol
dau: kvl
ikc: ryv swc oxs
bkn: iyn fxe pit kue
xvu: ngx uok
jkt: sjz zkq zwq
oah: pbq mit njv sce
grs: pxm sct oxd gnm
eqz: bcu our avt rxm
gpq: ulg
anf: qvp erd tti
stx: khl zaq you
vji: veb iml
yma: ezz
ylv: aeq ksa
krd: vwn
gwo: mit sce
tiw: xsm ctw
ime: our bcu rxm
dad: myd htl
ehf: kue iyn
uhu: qlx upo
pit: xza ifa efu
bma: pia pxm gnm oxd
cxx: dad afv pgt sur sfd kxf yla oju lbf ljk gmc zua rvq
yky: bbq cfx
bwy: cbw mgp
frm: rfo abi tol vpy
ezz: you khl zaq
myx: bmo
yla: jvq tzd
ljk: htl bhl
czi: xkd flq jlm
erd: kml znm
szg: yke jqi evw xtl
udv: txa wcn ufs
uuu: eul jpw otq
log: egz pne jxn yjd
tbi: tla wwe wip
rux: eai fft
bkc: lme wqz akk
orp: sls pav
ruw: nuw aox jgo pdc
fvk: out
slp: dac wrv mmo
wuy: bkc clk
ugr: gwo oah
epk: jty pds kfz fpa
dtf: ojq blw ihm
ouk: ceu udv oad
yex: otq
lhd: yhd pkx gyz wkg
via: hlj ick dba
zbw: rqf quo
pom: raz gwh yia
zbu: pxm sct
zgp: lme ivb wqz mst
ffh: zkn koj
gnm: cpx nvk ssu fkm eao znv dut ort tga gwy sso slp aea xmd fig xsx tto gsn ako loq
loq: fnq ash
gqt: mgp vpj
ahr: flq jlm fvk
nce: byk yma jgt
bqv: sct gnm pxm pia
byk: zmf ezz
nxf: fpa kfz ipn pds
maj: pxo
sfd: rux
dut: dac wrv
kxf: ekg tzd jvq
rvq: loi
eot: bbq suo udp cfx
xsc: ngx uok fjh
ukx: nwh eot umc
mit: out
ick: rrz tgd
njv: out
koj: czp uhr bgc ioo
orm: igy bkn ydx ceg lhd ozn ogm hvr wbl tke jhf hey tfo unh
oxs: ysh bwy fir qzv
cbk: anf
sau: pxm oxd
jer: myd
kzj: ksa aeq
ywt: ulg ams bmo
pho: out
jxn: sct oxd gnm pia pxm
hvr: pom blv
ozn: wkg vji
ceg: mhb
sda: njg orm vmx cdh
ugi: fll uuu yex
ash: vax pxo xsc
fnq: xsc xvu ewz
awe: dki trc
zpz: agt nwh dcv eot
dlg: out
jlm: out
zkn: ioo bgc
skm: vpj
dwh: blw ihm sda
upo: dlg mzt
czp: pho gru lsg cpg
fmy: hqx ruw
znv: bex hgt
gui: cbk uoo
ifa: cfx lwn suo udp
yzo: kcd pzo
zkq: vyq
cpx: bex vwn
sjz: oxs
zyy: mhb gdf ime
euu: oiv anf hkp
lme: tef
pne: pia
gsn: wrv mmo dac
eul: bqv sau hvm
fdo: sgm gbw odr
hnl: xuk iyp grs
rqf: yir
fxe: efu
git: zhn
lmu: gda krw ysf idw hkh
tef: krs aiw
djw: fvk jlm xkd
sir: sct gnm oxd
zpn: out
fkm: maj ash
tns: trc dki
rru: sir grs iyp
oac: mid
jnr: out
dba: rrz xeu iti tgd
nro: out
syu: ctw xsm pzo vdl
bmo: epy
jgt: ezz wvy
nhy: twr
ioo: pho
qhd: fll yex uuu
ynd: xkq exo iok gci
uyj: tgd dpu iti rrz
bhl: ssx mcu sps
sgm: qtj tgz gdv
rkk: cye
kbm: exo
zal: orm njg cdh vmx
ufv: vel vcs fjj
jty: cbw mgp
pbq: out
tzd: cba
loi: ynd kbm amy eqc
you: nfz fnc bjb oac tbi mic nop qdv fbu ifv wuy ouk kxg
fue: qtv sfu frm
krs: pbq zpn njv sce
eeg: pzo ctw
ogm: mhb eqz
djn: ysu ikc zwq sjz
bcd: ekg orp jvq
tdp: wvy zmf
idi: ysf gda
agt: suo bbq lwn
dcv: bbq cfx
ctw: cxx mgp cbw
jpb: bbq udp cfx lwn
tzt: pom jvm
uxj: epz vel
mwu: fpa ipn pds jty
vdx: uoo euu
tpj: ffh vyt odi
moa: sir jvr xuk grs
sfu: abi rfo
pzo: vpj cxx cbw
ceu: ufs yoq
gux: out
jgo: njg cdh vmx
vpy: hnl mzr
iud: pxm pia gnm
eqc: xkq gci iok exo
vpj: kxf sfd wpy sur pgt afv rvq zua gmc lbf oju jer nll yla dad ljk
gru: out
odi: koj vja
xuk: oxd gnm
lgg: quo ncp rqf
vyt: vja
pdc: njg cdh vmx
hld: agt eot
cdh: zyy lhd ydx igy tfo ehf unh zsc wbl tke jhf gev hvr ozn ogm
qzv: mgp cxx
zhn: khl
idw: gqt
hjx: fpa pds jty
xmd: tns oua awe
jiu: cxx mgp vpj cbw
lsg: out
wmo: bma zbu iud
ewz: uok
zwq: oxs vyq bff
blv: raz gwh
kdb: rql odr sgm
quo: wmy bgn yir
zaq: rja wuy nfz qqh muz kxg fnc tbi oac fbu
uok: khl
oiv: pqc qvp erd
gev: mhb
fot: qhv czi djw ahr
cwh: yke jqi
rql: tgz gdv
wip: lgg zbw
vcs: vkj vas
qvp: znm
oua: nce
liy: rkk knh cmf mak
udp: ahw gui vdx vvm rye eep fue ugi qhd liy pfb kle lhz igq qmz uhq wjb
knh: cye bag
rzv: via ksa
xsx: hqj
cye: iud zbu
otq: bqv ejh czc sau
htl: sps ssx
wrv: rxd rcf sif ljy
cmf: wmo cye
gyz: veb cyt jpb
jvr: pia pxm
bff: ysh skm fir qzv
rcf: zaq khl you
qlw: out
cba: dtf kba dwh scc
kba: ihm sda huo blw
kxb: log ydr twr
xxq: ikc ysu sjz zkq
aeq: hlj uyj dba
mkv: evw xtl
ort: mkv szg hxy
vyf: lka egq tbn rzv eya
ekg: sls pav
vbb: umc nwh dcv agt
ndf: syu eeg yzo
zua: dnu qyx
pfb: euu uoo
uhr: lsg cpg gru
fll: eul jpw
fjj: vkj vas
hyd: cdh njg orm
xeu: cbw vpj mgp
zmf: you
mgp: fmy dad oju jer nll vxm sfd sur pgt kxf lbf zua
ljy: you khl
rrz: mgp
nfz: wwe wip
hkp: qvp erd pqc
sso: git
fnc: mid cgm
fkt: ahr djw czi kae
hkh: upf asc
ols: ywt myx
tgz: nkh
wjb: uoo cbk
pkx: veb cyt jpb
fir: cbw
vvm: rkk knh cmf mak
fig: tns
uyu: eqc uao amy kbm
amy: gci xkq hyd
egq: jwi
`.trim();var F6=A("<p>There are <!> different paths from you to out."),C6=A("<p>There are <!> different paths from svr to out that pass through fft and dac.");const b4=()=>q6.split(`
`).map(e=>e.match(/(?<device>.+): (?<output>.+)/u).groups).reduce((e,{device:t,output:n})=>e.set(t,n.trim().split(" ")),new Map),a3=(e,t,n)=>{const r=new Map;for(const o of e.keys())r.set(o,0);for(const o of e.values())for(const l of o)r.set(l,(r.get(l)??0)+1);const s=[...e.keys()].filter(o=>r.get(o)===0),i=[];for(;s.length;){const o=s.shift();i.push(o);for(const l of e.get(o)||[])r.set(l,r.get(l)-1),r.get(l)===0&&s.push(l)}const a=new Map;for(const o of i)a.set(o,0);a.set(t,1);for(const o of i)for(const l of e.get(o)||[])a.set(l,(a.get(l)??0)+(a.get(o)??0));return a.get(n)??0};function P6(){const e=b4(),t=a3(e,"you","out");return(()=>{var n=F6(),r=n.firstChild,s=r.nextSibling;return s.nextSibling,j(n,m(T,{children:t}),s),n})()}function E6(){const e=b4(),t=a3(e,"svr","fft"),n=a3(e,"fft","dac"),r=a3(e,"dac","out"),s=a3(e,"svr","dac"),i=a3(e,"dac","fft"),a=a3(e,"fft","out"),o=t*n*r+s*i*a;return(()=>{var l=C6(),c=l.firstChild,u=c.nextSibling;return u.nextSibling,j(l,m(T,{children:o}),u),l})()}const O6=Object.freeze(Object.defineProperty({__proto__:null,Part1:P6,Part2:E6},Symbol.toStringTag,{value:"Module"})),M6=`
0:
###
#.#
#.#

1:
#..
##.
.##

2:
##.
###
#.#

3:
..#
.##
###

4:
##.
##.
###

5:
###
.#.
###

39x43: 23 41 27 30 29 31
46x35: 21 36 27 22 36 22
35x37: 37 35 27 41 38 23
48x41: 60 50 37 45 53 57
39x49: 45 36 55 46 51 57
40x37: 35 41 41 40 37 35
41x43: 52 47 41 37 42 52
42x45: 30 29 36 34 45 35
44x35: 33 22 28 27 15 28
41x46: 63 44 48 41 45 47
49x45: 56 72 54 50 57 54
43x43: 45 50 42 52 52 45
49x35: 53 48 43 34 42 44
45x49: 55 56 66 54 55 53
41x43: 31 34 28 27 29 32
48x37: 41 44 48 45 56 39
38x50: 26 33 33 34 32 34
47x50: 42 51 35 38 38 36
39x50: 46 29 31 33 30 39
45x38: 40 50 51 44 50 30
40x35: 30 22 26 26 16 22
43x43: 39 43 30 36 26 22
37x45: 34 33 30 27 26 29
36x36: 37 33 29 30 38 32
50x48: 48 40 39 25 57 47
48x41: 36 31 36 37 32 36
43x43: 44 44 46 43 66 40
50x36: 25 29 39 29 37 32
47x40: 44 40 49 54 48 53
49x49: 64 66 61 56 58 65
40x38: 42 34 45 33 36 42
48x43: 48 47 52 60 61 49
44x48: 40 24 35 37 55 33
36x40: 41 33 38 31 33 44
35x41: 26 30 16 30 17 23
42x43: 34 37 33 28 30 34
37x36: 20 19 19 32 27 26
35x42: 38 42 38 40 37 33
40x50: 46 55 46 52 56 54
37x35: 23 33 38 36 29 41
37x35: 37 30 27 23 41 39
45x50: 32 43 47 45 30 42
48x49: 32 45 44 34 51 49
48x49: 48 40 37 40 45 45
41x40: 47 50 41 37 41 38
40x42: 36 31 43 49 47 50
38x46: 28 37 25 36 26 27
47x45: 53 47 67 49 49 58
45x44: 34 37 33 37 36 33
50x50: 66 58 75 62 61 61
48x48: 47 59 64 67 65 54
44x35: 34 46 30 40 45 44
50x35: 32 29 20 25 37 33
35x42: 22 24 24 32 25 26
35x49: 52 42 32 48 39 51
37x37: 20 25 20 20 30 28
37x47: 32 23 41 28 29 27
41x36: 28 45 35 43 38 41
47x40: 47 42 60 44 42 52
45x38: 20 37 38 32 23 29
36x44: 36 40 36 50 37 46
38x49: 41 50 51 51 42 53
43x44: 37 35 25 35 28 35
47x39: 22 35 33 33 41 31
40x39: 22 32 31 25 24 35
35x48: 25 36 26 28 32 29
46x46: 56 52 44 54 64 55
38x35: 45 34 39 36 19 32
35x48: 27 30 30 29 34 25
37x48: 55 47 47 40 42 42
40x38: 20 29 28 23 29 26
37x36: 40 33 34 29 33 35
36x41: 34 42 39 42 34 38
41x41: 36 42 52 39 43 46
47x43: 55 58 51 51 51 47
37x38: 23 34 23 27 16 20
36x41: 31 29 29 21 25 21
39x46: 51 38 49 39 46 50
35x39: 36 27 40 36 37 32
43x49: 28 39 42 38 40 36
44x49: 45 27 41 40 30 40
47x45: 36 40 32 49 41 27
41x36: 23 21 24 36 26 26
50x47: 44 51 63 67 65 70
44x36: 34 45 33 45 44 45
39x38: 35 36 46 48 27 37
46x43: 31 35 39 36 33 36
38x50: 54 64 43 50 50 36
47x40: 53 51 40 47 40 59
49x37: 53 52 43 47 42 44
48x36: 33 35 37 30 36 21
37x47: 41 30 32 27 26 24
37x48: 48 49 45 49 39 45
41x50: 43 26 31 35 40 32
50x47: 52 56 75 57 55 65
40x50: 50 50 46 67 50 47
49x45: 45 40 34 48 46 26
36x49: 47 22 31 33 31 28
35x46: 38 47 40 44 42 39
50x41: 52 56 56 56 46 51
37x40: 44 33 37 35 34 43
41x45: 36 32 35 28 27 36
40x43: 27 37 25 31 30 31
50x50: 39 41 41 51 38 45
44x37: 35 31 33 18 33 18
50x42: 29 43 35 36 42 39
50x36: 31 26 31 34 34 36
39x39: 39 32 43 37 51 30
44x35: 26 33 21 28 24 22
48x46: 60 52 39 65 65 59
41x45: 40 51 49 60 35 52
45x42: 51 42 45 47 45 59
46x47: 49 58 61 51 48 66
35x45: 39 48 43 43 35 37
47x46: 60 52 53 57 50 60
47x41: 34 31 25 29 40 36
50x47: 51 61 58 67 58 68
35x44: 32 28 27 35 17 14
49x35: 47 41 47 42 45 41
42x49: 60 55 55 49 54 44
37x42: 35 30 30 17 22 34
42x47: 51 50 54 44 51 53
43x41: 50 42 47 40 49 42
49x41: 43 36 36 32 25 36
49x41: 54 50 43 60 49 54
35x45: 33 21 27 31 30 22
43x41: 41 54 51 44 38 46
48x50: 64 68 57 53 60 68
42x42: 50 41 48 49 40 43
50x39: 34 33 35 29 36 40
40x42: 34 35 28 20 29 35
37x38: 31 43 39 39 35 32
43x35: 24 26 21 24 24 35
44x49: 33 41 40 35 37 38
47x40: 65 52 40 43 38 52
44x43: 30 28 41 38 22 37
50x35: 42 41 48 41 52 44
39x39: 30 24 37 27 29 21
37x36: 24 19 27 30 20 23
35x35: 33 36 27 23 34 36
41x45: 32 30 36 36 31 29
37x44: 39 42 44 36 39 50
50x50: 69 72 64 64 57 61
35x45: 39 38 47 35 38 44
41x49: 57 50 56 39 61 44
46x44: 34 35 25 39 36 41
48x49: 39 50 48 30 42 47
49x44: 38 29 45 37 38 37
38x36: 19 13 23 33 27 28
37x44: 28 27 29 27 28 29
43x50: 46 34 38 42 33 31
43x35: 41 33 38 37 42 39
40x49: 53 54 53 58 39 47
39x47: 24 33 36 33 42 27
35x39: 27 25 16 26 25 24
39x35: 29 21 20 26 26 21
48x38: 48 54 42 46 53 40
48x41: 61 52 55 46 44 45
36x39: 41 38 36 37 34 31
37x42: 17 31 30 34 25 31
38x45: 47 55 39 47 41 38
38x39: 25 33 27 23 24 24
45x44: 55 40 49 53 57 48
48x40: 32 43 30 36 34 33
40x48: 42 35 33 34 34 29
42x50: 41 38 41 30 32 42
46x44: 41 50 56 66 41 59
43x46: 32 26 40 46 33 33
40x44: 29 27 35 36 28 27
50x46: 65 58 70 54 52 54
49x42: 66 40 47 51 54 55
47x49: 38 35 47 41 29 49
42x37: 40 37 40 36 47 38
44x37: 31 23 26 24 22 41
50x44: 35 34 40 40 36 38
45x42: 53 36 43 52 46 58
50x42: 51 52 46 55 57 62
36x36: 44 23 39 28 37 25
42x43: 51 58 47 42 34 49
43x44: 47 48 54 46 40 56
38x49: 26 36 35 24 36 35
47x38: 51 49 37 45 49 45
46x41: 51 43 44 48 51 52
42x44: 41 39 41 59 50 54
41x40: 51 37 44 35 41 42
41x37: 32 39 53 33 40 36
47x46: 42 56 24 33 27 43
50x39: 44 36 25 30 39 33
50x43: 52 58 45 57 60 60
47x40: 39 38 55 50 49 56
37x44: 46 38 43 36 46 40
43x48: 51 45 67 57 37 59
48x44: 58 45 51 63 52 55
35x46: 53 32 44 47 30 40
39x50: 45 24 34 42 27 36
43x39: 49 42 41 44 39 43
39x35: 46 31 31 33 29 39
35x41: 27 46 41 33 45 31
46x48: 52 31 45 39 34 39
41x45: 37 56 41 49 55 49
41x45: 35 21 35 29 42 32
43x35: 19 17 28 32 26 32
41x49: 39 27 30 40 30 41
41x46: 20 37 39 32 34 32
49x47: 50 54 62 64 63 61
41x49: 38 38 30 35 25 41
46x45: 57 40 55 53 50 60
38x46: 48 50 44 40 44 44
49x46: 53 34 43 37 31 41
49x46: 41 41 31 40 43 44
42x47: 32 35 44 27 31 40
39x46: 28 31 30 32 38 35
44x41: 28 33 27 29 26 39
35x44: 19 26 33 27 24 25
36x36: 28 31 31 34 39 36
45x44: 52 54 40 53 47 60
45x46: 37 36 32 43 31 45
44x42: 43 60 49 47 43 46
35x39: 34 37 38 28 35 38
44x47: 57 64 43 55 48 55
45x40: 38 54 49 43 43 52
43x37: 35 26 31 18 33 24
44x36: 34 27 48 40 40 51
48x45: 45 44 47 40 30 34
50x37: 41 34 27 30 28 31
46x50: 56 61 55 62 61 60
40x43: 25 39 26 25 40 26
42x43: 38 45 52 47 41 55
49x48: 46 39 35 40 39 57
45x40: 45 47 49 36 53 46
48x36: 20 33 34 44 37 24
38x36: 30 42 44 44 25 29
38x43: 43 35 45 50 40 38
40x50: 56 49 39 49 54 60
41x41: 30 27 24 26 33 29
39x43: 39 37 51 47 42 41
43x50: 52 47 59 58 49 64
49x36: 59 38 40 35 50 46
44x46: 62 46 43 51 65 43
48x36: 28 42 33 26 34 28
41x35: 21 24 27 22 31 18
47x37: 38 28 21 33 28 32
37x49: 42 40 44 51 49 52
37x35: 35 29 29 37 35 34
46x44: 66 59 47 41 45 54
48x44: 61 49 46 64 61 44
38x35: 22 23 19 28 22 17
36x45: 34 30 35 27 21 32
47x37: 40 69 41 46 50 29
37x45: 47 34 45 36 47 44
41x47: 47 52 47 47 52 52
41x50: 56 42 56 49 47 62
38x43: 23 30 34 30 30 21
46x49: 55 54 68 51 74 43
45x41: 32 32 40 31 30 30
37x40: 28 28 39 37 42 51
35x42: 31 28 26 23 27 18
47x35: 43 41 31 42 50 46
50x50: 74 62 70 63 65 50
49x42: 43 51 59 65 47 53
39x40: 40 38 42 43 32 45
49x40: 45 51 59 58 51 39
36x48: 33 33 39 27 23 36
37x35: 25 22 16 23 22 23
50x40: 46 30 28 31 37 36
37x48: 49 38 49 56 38 43
38x38: 22 31 23 23 26 19
43x40: 27 31 35 27 32 30
45x49: 63 61 52 52 63 49
45x48: 39 41 43 40 42 35
49x45: 51 67 60 53 53 58
43x43: 19 30 34 36 39 37
50x49: 43 46 35 49 36 47
47x37: 30 28 23 32 23 43
38x39: 21 27 36 15 30 27
41x40: 35 46 45 45 32 51
38x43: 26 23 41 19 29 29
43x44: 44 50 44 49 61 44
46x49: 54 51 56 57 62 65
36x43: 43 40 40 42 39 35
44x47: 34 38 36 28 35 38
36x36: 26 34 40 27 42 30
47x40: 57 57 39 41 57 40
38x38: 18 30 19 19 30 28
47x48: 58 50 66 51 60 59
46x40: 26 35 42 37 26 29
37x36: 40 27 31 34 34 37
37x45: 44 37 45 38 51 39
50x44: 63 52 51 54 50 67
48x39: 42 50 51 42 56 47
38x48: 39 36 25 32 28 31
38x42: 37 41 43 43 46 36
43x39: 57 40 39 54 32 37
50x45: 43 41 43 39 41 33
45x38: 35 37 29 29 22 27
48x37: 40 27 29 29 37 30
42x49: 53 49 61 53 51 49
45x45: 46 58 52 62 51 46
49x49: 43 43 37 39 45 48
38x44: 24 30 30 30 28 25
45x41: 48 55 46 39 48 49
40x46: 57 47 43 53 43 41
40x41: 28 28 38 23 31 21
38x45: 30 28 37 27 32 26
43x42: 35 39 28 31 28 34
37x44: 48 46 40 34 45 38
38x46: 24 28 36 29 33 30
47x40: 42 36 24 37 32 24
49x50: 65 55 55 69 64 68
40x39: 27 27 24 25 28 37
47x35: 44 31 43 54 39 41
40x44: 34 27 29 30 27 34
37x38: 48 25 36 32 42 30
38x39: 27 32 23 25 21 27
35x39: 25 19 23 22 29 24
50x43: 60 53 56 46 66 48
50x39: 39 36 38 29 31 35
40x44: 38 25 35 27 26 31
38x48: 48 46 39 48 44 56
48x50: 38 50 41 50 46 31
35x43: 35 40 40 45 37 36
47x37: 23 30 32 34 28 33
38x36: 14 24 17 30 32 26
49x50: 55 33 52 30 39 47
47x37: 55 40 41 41 40 49
37x47: 26 34 28 35 31 25
45x45: 50 53 31 65 41 74
40x46: 33 40 36 26 28 32
50x36: 35 59 56 41 50 39
45x49: 38 49 37 31 41 43
39x37: 27 29 22 25 31 21
43x39: 29 29 30 29 36 29
50x44: 35 31 30 32 48 47
38x37: 26 18 29 24 20 26
42x49: 49 39 61 59 55 51
39x39: 35 31 29 19 24 30
37x39: 32 31 37 41 34 46
42x43: 27 21 41 39 42 26
44x40: 40 29 28 32 22 30
37x39: 46 35 34 38 32 37
36x45: 34 31 26 35 28 25
42x37: 46 44 37 44 38 32
49x35: 36 28 28 24 31 29
48x36: 30 29 38 30 34 31
49x43: 44 37 33 45 39 25
40x46: 45 41 49 43 65 38
35x39: 25 29 23 21 24 21
40x45: 37 18 39 43 28 29
45x48: 64 52 58 51 56 50
48x41: 41 34 34 44 33 22
44x44: 60 57 53 49 37 44
44x44: 55 52 51 52 43 46
42x37: 38 26 22 32 25 25
42x49: 48 49 58 53 57 51
40x41: 23 36 20 36 27 26
50x35: 47 57 49 44 42 34
46x40: 51 51 45 59 41 39
35x40: 40 36 35 37 36 32
49x44: 37 37 28 39 39 43
45x45: 30 36 33 40 41 44
49x35: 33 36 56 46 48 43
40x44: 45 61 41 56 29 45
42x42: 31 34 41 34 32 24
39x36: 18 27 22 29 31 28
45x43: 45 49 56 44 47 56
44x43: 57 47 46 57 43 42
42x37: 21 16 40 24 28 39
40x37: 37 42 34 36 40 40
49x48: 44 43 31 44 45 48
43x38: 38 37 55 46 45 30
36x43: 42 38 34 41 34 49
35x46: 30 20 25 36 25 28
43x48: 35 44 39 31 35 39
42x35: 26 18 30 21 29 30
36x42: 35 31 19 30 23 30
36x37: 23 17 24 26 23 31
35x36: 41 30 34 22 28 37
45x49: 45 36 40 40 45 34
38x40: 41 34 39 49 35 36
50x48: 66 62 59 57 57 68
43x36: 37 38 50 41 29 43
35x50: 33 29 31 36 21 25
39x47: 57 58 55 36 37 41
45x36: 25 39 29 21 34 32
42x50: 50 45 46 68 65 49
40x35: 27 36 47 32 36 37
44x38: 36 48 44 49 51 32
46x39: 39 39 62 44 46 44
38x49: 54 43 54 44 51 39
36x38: 18 19 25 32 35 15
40x39: 35 26 42 44 46 44
49x44: 57 66 43 75 46 51
49x41: 50 50 54 59 37 60
42x40: 48 51 47 44 37 34
46x37: 45 48 42 40 45 43
41x37: 26 16 27 33 28 26
35x42: 43 32 41 40 35 34
47x35: 30 27 23 28 32 24
41x47: 33 34 29 32 31 36
35x45: 36 41 38 56 40 34
41x50: 41 36 32 35 33 30
38x39: 27 25 23 34 26 20
41x46: 33 37 24 39 32 30
43x36: 22 24 42 27 32 20
42x35: 25 21 28 25 29 25
48x45: 49 54 63 54 60 52
37x39: 17 33 28 28 28 22
45x43: 56 57 50 42 52 42
37x35: 28 24 25 15 21 18
45x38: 27 29 38 28 39 19
50x46: 57 61 42 46 67 80
43x45: 54 48 47 60 37 53
47x37: 51 50 39 50 44 36
44x46: 57 62 47 54 46 49
45x41: 46 43 46 55 44 50
38x46: 36 22 24 29 28 40
42x49: 39 35 30 41 42 36
48x44: 52 64 49 53 56 54
42x50: 69 43 59 53 48 48
46x36: 44 36 52 40 34 47
46x36: 27 23 27 34 36 33
49x50: 48 32 43 48 34 51
39x47: 28 24 34 35 40 34
40x36: 41 38 26 37 39 41
39x45: 29 38 33 32 34 28
40x48: 39 36 38 32 31 32
44x39: 34 41 20 32 24 30
42x42: 25 31 41 32 37 29
35x46: 29 35 25 27 24 25
47x40: 53 54 53 39 38 53
46x50: 60 64 58 68 60 47
48x47: 67 46 56 52 67 55
43x40: 32 33 25 30 28 33
36x40: 31 21 30 27 28 19
38x35: 21 33 14 22 18 23
49x44: 32 43 33 35 40 40
45x46: 57 56 61 50 54 41
40x35: 26 36 43 31 38 41
49x50: 61 59 58 77 63 60
39x41: 40 37 32 48 47 42
45x36: 34 36 26 28 20 36
39x48: 46 51 53 46 56 37
35x44: 42 39 33 32 40 50
41x45: 42 56 47 43 46 52
42x36: 33 34 32 49 51 34
45x36: 23 27 30 38 37 24
45x41: 38 39 32 21 27 37
42x40: 32 33 31 30 22 34
39x37: 25 24 26 20 28 32
48x39: 31 33 32 36 27 48
37x47: 30 37 20 34 31 28
41x50: 57 61 46 58 48 49
44x48: 66 43 59 46 55 52
45x49: 32 55 36 32 43 41
38x46: 37 50 44 32 55 51
47x36: 47 48 34 45 42 46
49x47: 63 78 47 53 69 49
44x40: 50 43 46 49 42 41
50x43: 41 33 35 34 40 40
49x36: 39 27 37 34 24 30
50x48: 58 59 47 70 74 62
48x47: 33 33 47 33 45 48
35x49: 50 54 41 38 39 44
39x50: 37 36 32 25 38 40
37x43: 45 42 35 45 41 38
42x49: 45 43 63 51 56 56
35x50: 46 47 40 52 38 48
46x39: 52 37 59 40 40 45
45x46: 50 61 40 66 65 41
40x48: 31 34 35 30 31 47
48x42: 40 46 36 27 36 39
45x37: 42 49 40 47 44 37
40x43: 46 46 41 47 42 44
44x43: 34 35 27 28 40 31
47x37: 38 52 37 53 43 48
43x48: 39 40 38 33 40 33
42x45: 59 37 54 43 51 43
41x47: 56 41 46 48 49 54
35x40: 36 33 30 38 37 41
37x47: 32 27 31 31 33 25
48x41: 47 43 55 37 56 61
41x50: 37 49 64 47 53 64
36x38: 29 30 34 32 43 41
44x42: 39 47 29 20 35 25
42x41: 39 44 47 49 44 43
50x38: 47 57 60 49 37 45
40x39: 43 37 42 45 41 32
37x38: 37 48 42 30 31 31
39x45: 27 28 31 37 32 40
47x50: 23 50 43 40 47 36
48x47: 28 37 45 46 42 41
45x38: 50 33 56 50 33 39
50x35: 51 44 42 58 43 33
49x43: 66 58 51 49 53 48
43x41: 48 54 42 32 55 41
49x49: 57 63 62 62 69 57
45x45: 40 32 49 32 34 37
46x37: 39 28 33 26 26 27
47x40: 51 33 44 53 47 58
44x35: 42 38 46 40 29 42
43x45: 47 51 34 61 46 61
37x47: 41 48 48 46 43 43
39x37: 32 41 38 35 40 37
44x36: 25 23 21 34 30 35
43x50: 39 34 34 41 42 34
36x43: 37 59 37 39 37 35
48x46: 53 61 60 56 58 53
48x42: 49 52 55 49 53 52
45x41: 35 36 34 32 23 34
37x50: 35 33 32 33 29 30
49x42: 50 59 52 54 54 50
38x42: 27 31 19 26 31 34
38x50: 50 43 47 43 52 55
35x45: 23 35 28 28 23 28
42x38: 41 46 43 31 41 44
47x39: 31 37 26 34 28 38
39x38: 35 31 40 42 42 37
40x46: 40 22 41 31 31 29
39x39: 25 28 32 30 26 27
47x43: 45 59 50 49 54 56
42x48: 33 37 31 39 40 44
35x46: 34 28 53 40 48 41
35x49: 34 23 30 31 22 36
45x44: 38 32 25 35 43 36
44x50: 29 43 41 37 40 33
43x44: 42 28 21 36 36 32
48x48: 65 52 61 69 61 46
50x46: 38 41 38 44 43 36
46x47: 56 50 59 52 56 58
38x49: 26 36 30 40 33 27
35x48: 45 45 49 42 41 37
42x48: 35 38 38 33 47 32
44x38: 22 29 28 25 33 30
35x41: 25 27 22 27 24 17
35x43: 48 38 36 41 36 33
45x35: 27 16 30 32 29 30
39x35: 32 35 34 40 37 33
35x37: 32 39 33 33 33 31
42x37: 39 41 39 48 41 33
45x47: 68 49 50 59 52 47
46x35: 41 39 36 40 48 43
42x40: 49 45 37 35 43 49
49x42: 37 54 52 65 49 62
36x35: 27 25 21 19 21 19
48x38: 57 42 44 44 49 43
42x47: 45 50 44 51 58 56
42x50: 59 41 55 55 53 57
47x40: 46 54 55 55 43 39
39x45: 34 32 37 30 29 32
38x44: 36 53 50 47 38 37
40x37: 24 30 23 27 30 22
45x41: 50 34 32 23 24 31
47x39: 52 48 38 57 50 39
37x42: 43 45 42 40 30 41
42x36: 28 33 28 33 28 18
37x39: 28 26 30 22 27 22
39x42: 36 35 29 22 31 28
47x40: 63 54 34 53 39 49
37x37: 19 34 20 27 28 16
44x42: 24 24 52 29 31 35
49x41: 41 55 51 64 44 57
36x46: 42 42 31 36 43 60
36x44: 22 31 28 27 27 32
39x45: 35 40 51 54 41 49
43x44: 46 39 58 58 43 46
48x41: 46 66 52 46 54 43
35x45: 35 40 49 51 35 34
42x40: 49 37 42 36 44 48
48x42: 53 60 59 39 48 52
38x46: 25 30 31 24 34 35
49x45: 63 45 58 63 54 54
41x48: 62 45 45 46 51 52
46x38: 34 28 37 22 29 30
41x41: 21 25 29 30 28 36
35x37: 21 19 23 23 15 30
45x48: 35 33 47 41 39 45
43x36: 28 22 25 31 35 27
49x44: 38 38 47 26 41 34
44x42: 36 38 28 28 28 38
41x37: 49 37 42 37 38 30
50x36: 30 50 54 51 57 37
35x42: 35 27 22 27 24 19
39x49: 29 42 38 29 36 34
47x44: 55 52 50 52 53 56
44x47: 31 35 29 39 33 42
46x39: 27 34 36 30 32 35
38x50: 37 30 30 30 35 29
48x39: 36 35 32 36 37 32
40x41: 32 23 25 28 31 30
49x40: 39 37 27 30 41 33
37x36: 37 36 39 36 35 23
46x39: 53 40 48 41 42 50
35x46: 33 31 20 26 28 26
46x50: 59 62 69 58 47 60
48x42: 33 43 37 32 35 44
36x35: 28 34 32 36 29 36
50x36: 51 43 45 50 47 41
44x42: 47 38 53 56 47 42
35x37: 28 25 40 39 30 36
36x42: 16 39 35 30 23 25
43x40: 29 32 29 26 31 34
36x35: 33 34 21 42 33 33
42x50: 53 30 39 34 32 36
38x50: 49 59 49 51 43 45
39x35: 30 21 22 23 23 23
46x37: 49 40 46 44 44 38
42x49: 64 48 46 50 55 52
40x38: 39 34 35 42 46 37
49x48: 67 67 64 53 52 60
39x40: 31 29 32 29 24 23
36x38: 23 25 23 25 19 29
40x43: 44 43 46 48 36 48
40x44: 29 29 28 31 44 20
48x35: 44 45 54 42 39 35
39x46: 55 44 45 35 47 48
43x40: 43 45 48 43 38 48
42x46: 42 41 34 31 33 28
36x45: 28 31 21 27 35 37
37x45: 42 34 37 49 38 55
37x45: 41 42 44 40 46 43
42x45: 57 40 44 43 48 56
38x40: 45 42 31 46 32 40
39x49: 38 32 27 47 40 24
41x46: 38 50 55 48 51 49
48x40: 29 36 39 34 32 37
49x38: 42 56 52 55 45 40
49x38: 49 39 44 59 46 49
38x37: 33 32 13 24 22 19
43x46: 32 32 40 41 26 38
49x46: 43 44 34 50 35 33
35x46: 42 35 36 55 46 34
47x40: 30 37 29 39 29 31
49x41: 42 34 30 36 33 32
50x48: 45 36 43 41 45 45
36x41: 46 50 30 33 29 42
47x37: 45 46 56 50 37 35
36x45: 31 32 24 32 31 30
41x48: 30 44 29 36 28 41
41x45: 41 54 50 54 40 48
42x38: 24 28 28 38 27 23
47x35: 28 50 42 37 43 55
39x42: 35 47 42 43 41 46
43x42: 46 47 44 36 53 51
40x37: 22 29 28 31 22 24
45x42: 34 28 32 45 32 39
36x44: 50 48 42 33 29 43
46x39: 47 28 34 30 26 29
36x40: 33 41 34 30 49 35
37x42: 31 27 35 14 28 33
40x35: 26 29 28 19 25 16
35x45: 35 31 41 42 44 47
37x42: 19 30 30 29 25 35
49x36: 34 27 37 27 36 31
46x40: 59 41 46 35 55 44
38x40: 27 29 28 21 19 32
46x45: 28 43 34 34 50 35
50x43: 54 53 63 60 44 57
36x42: 37 35 32 53 45 32
40x44: 46 26 47 48 51 48
47x41: 29 39 32 34 31 30
41x37: 33 45 41 35 42 39
39x42: 25 31 32 29 29 35
39x48: 47 49 59 38 51 43
44x48: 41 34 35 42 35 36
40x48: 49 51 50 56 38 53
42x43: 26 42 34 29 36 28
40x45: 54 45 49 41 47 40
40x42: 44 41 38 43 47 45
44x40: 34 26 25 24 30 42
42x39: 49 30 31 51 46 43
47x47: 40 32 41 37 34 41
42x36: 44 36 39 32 36 44
39x44: 47 48 40 54 48 30
45x50: 51 71 46 71 51 62
35x41: 18 23 28 27 18 29
38x46: 31 36 25 25 31 32
41x42: 40 45 40 40 46 54
41x50: 57 54 47 60 53 46
46x41: 48 45 50 59 42 47
49x37: 50 45 43 33 50 56
36x47: 25 28 24 34 36 32
42x44: 51 47 46 37 58 44
41x44: 23 35 25 26 34 39
50x46: 42 47 37 43 31 39
43x37: 40 43 42 35 47 38
47x44: 69 47 42 54 55 50
42x48: 35 42 29 41 42 34
46x46: 65 48 62 46 49 53
49x35: 45 39 52 47 46 34
50x44: 52 38 37 31 40 26
38x45: 38 22 29 25 31 34
38x36: 47 38 44 24 28 29
46x42: 40 46 51 67 48 47
46x36: 26 32 34 31 25 32
38x48: 47 40 41 54 43 55
41x37: 42 42 36 34 37 43
47x50: 40 40 44 31 50 35
39x47: 55 46 41 41 49 49
50x40: 53 42 58 56 44 53
36x49: 34 48 52 43 53 42
42x42: 29 31 32 33 32 38
39x39: 33 25 34 22 28 27
49x50: 68 46 63 74 63 60
48x37: 46 33 41 52 46 53
35x45: 28 31 24 23 29 29
36x47: 41 42 48 29 51 47
45x50: 54 58 56 48 66 63
48x49: 48 39 39 39 43 48
39x39: 37 46 41 45 37 31
39x38: 38 47 41 33 31 40
42x40: 37 46 39 45 46 47
37x38: 25 22 22 32 17 26
36x40: 39 30 49 31 37 33
38x35: 28 19 21 22 18 23
36x50: 33 31 32 30 36 30
37x42: 44 41 40 35 38 41
41x37: 30 28 27 22 27 22
45x43: 40 28 31 42 34 35
38x44: 21 31 31 25 34 25
44x40: 35 47 40 62 43 47
49x40: 47 53 51 52 49 51
46x35: 26 28 22 25 32 31
43x36: 22 21 40 30 30 24
42x49: 56 58 44 56 51 54
36x43: 25 26 23 32 33 29
50x42: 57 57 51 45 57 56
43x43: 58 46 46 39 49 45
35x39: 45 42 28 32 29 36
40x50: 52 47 55 53 48 52
41x46: 27 30 35 31 37 35
41x45: 30 27 43 34 25 36
45x48: 32 49 36 33 56 33
48x35: 47 32 41 40 43 52
38x42: 40 41 38 43 41 43
49x44: 32 37 35 37 40 42
43x41: 29 26 33 30 24 39
39x41: 45 36 32 35 44 52
47x35: 31 21 25 31 31 25
49x44: 44 48 61 64 50 64
37x42: 32 24 27 26 27 32
49x43: 30 45 40 37 44 27
45x35: 42 43 51 25 43 37
46x48: 57 78 63 42 51 53
39x50: 38 39 36 43 25 26
36x42: 30 42 41 40 46 35
37x35: 35 30 28 42 35 30
48x39: 30 38 32 33 44 31
39x38: 27 25 23 26 30 25
42x39: 34 32 25 32 27 32
50x49: 49 66 61 70 74 59
44x41: 49 44 41 46 56 41
47x48: 59 55 54 53 62 63
50x41: 54 51 45 65 55 47
39x41: 40 50 37 41 44 37
37x44: 22 22 31 29 31 33
42x35: 27 26 23 21 26 30
35x50: 35 33 30 33 21 24
42x38: 36 47 36 45 43 41
47x47: 33 34 42 35 44 36
42x46: 29 38 33 43 35 31
38x50: 32 33 41 30 27 29
35x41: 34 45 36 48 39 23
49x46: 41 44 38 50 32 34
38x35: 18 18 23 23 23 26
37x48: 43 55 44 43 50 41
50x35: 46 40 39 36 55 51
40x47: 33 28 34 24 35 40
43x45: 49 53 55 35 51 54
36x49: 23 24 36 43 38 27
44x49: 36 29 38 45 41 34
48x39: 55 46 45 51 41 50
43x37: 27 30 22 29 26 33
42x39: 28 18 34 33 31 38
50x49: 65 60 72 60 68 51
49x36: 30 39 36 26 32 29
37x39: 29 37 38 35 40 43
41x37: 38 35 36 42 49 33
37x44: 33 28 30 29 24 23
40x36: 29 23 27 18 31 28
46x36: 44 37 49 32 44 46
39x48: 38 48 42 46 63 51
41x39: 37 26 31 18 29 27
46x40: 35 26 28 38 29 38
49x47: 32 38 50 41 45 34
48x36: 34 34 31 35 28 29
40x40: 30 29 27 27 30 25
35x43: 34 24 31 17 30 18
47x38: 32 35 37 20 27 28
38x46: 43 44 50 45 43 44
48x39: 41 37 33 26 34 36
37x41: 27 27 29 27 17 29
42x44: 35 34 22 39 19 46
35x45: 44 43 36 52 31 39
40x47: 32 23 44 34 30 31
49x37: 31 25 37 28 38 33
36x39: 38 43 35 26 41 34
46x43: 27 33 33 30 48 39
47x49: 42 35 39 39 37 47
43x43: 46 44 55 42 47 49
35x39: 35 32 29 32 39 42
49x46: 50 44 33 37 34 41
48x39: 26 37 41 36 37 31
46x44: 61 50 45 57 46 53
37x48: 39 38 51 42 54 47
47x35: 45 55 42 41 32 42
38x37: 37 30 28 24 46 48
37x49: 46 51 47 37 53 45
37x35: 36 34 35 29 30 35
49x49: 43 43 46 49 36 39
39x36: 31 31 23 22 25 24
41x36: 32 45 45 41 30 37
41x42: 42 49 43 47 47 39
39x46: 28 34 28 35 37 33
45x42: 34 39 32 40 33 31
43x42: 52 45 50 55 39 38
46x47: 37 36 38 47 35 32
44x50: 59 51 58 49 50 69
42x45: 40 53 53 40 50 55
48x49: 37 38 55 52 34 40
43x36: 34 31 25 26 32 20
41x49: 35 35 29 34 34 41
44x50: 36 40 40 44 27 36
37x38: 21 24 19 28 24 27
36x38: 31 31 35 39 31 43
44x38: 40 44 48 36 42 47
37x40: 28 44 40 39 40 39
37x41: 46 37 32 31 47 39
44x46: 43 53 56 51 48 61
39x49: 34 40 33 37 21 42
48x49: 44 55 44 39 34 39
36x38: 27 22 21 26 23 24
48x49: 38 43 42 36 49 47
43x40: 51 35 47 29 48 50
50x35: 24 18 28 43 29 33
44x48: 37 36 44 34 37 35
39x44: 34 30 23 30 33 32
46x49: 51 59 58 54 62 63
38x48: 38 26 26 31 30 40
40x50: 47 59 54 49 52 49
42x42: 38 35 29 35 35 23
40x47: 51 37 49 47 52 50
38x43: 35 39 46 43 44 44
38x46: 47 48 39 45 44 47
50x35: 43 48 45 49 47 39
38x47: 34 25 30 25 33 32
36x48: 44 35 41 48 45 51
42x35: 40 35 39 34 33 44
43x40: 42 43 41 48 51 40
36x37: 39 33 33 28 36 35
46x39: 31 36 34 29 28 36
49x39: 56 50 44 46 42 56
42x49: 33 29 47 35 48 31
43x36: 43 41 47 41 37 30
36x41: 47 43 39 31 33 35
43x46: 57 53 54 50 43 48
40x44: 40 35 58 59 43 35
48x42: 48 47 49 58 54 54
48x38: 54 49 47 44 50 37
41x43: 33 29 28 31 33 28
49x37: 41 46 49 46 43 54
35x41: 27 20 24 22 24 26
42x40: 31 21 32 36 28 34
48x46: 41 43 39 37 51 28
50x42: 63 60 42 46 53 60
35x44: 31 41 43 41 38 44
49x40: 57 52 45 56 41 52
48x47: 36 51 39 43 35 35
37x39: 30 42 30 31 41 49
39x38: 34 40 39 38 41 37
36x46: 39 49 46 43 34 46
41x49: 37 30 38 33 33 37
38x38: 36 55 33 19 44 38
44x44: 22 40 42 31 25 35
43x47: 28 36 24 36 41 45
40x38: 16 24 27 29 34 25
47x35: 44 37 36 42 48 45
45x35: 23 32 27 31 22 29
45x39: 35 47 49 46 52 42
45x43: 40 52 53 39 60 53
43x46: 41 37 36 26 32 38
50x45: 44 31 32 52 40 40
39x36: 36 47 38 27 41 29
41x50: 35 41 37 23 38 33
37x45: 46 53 35 41 45 39
50x43: 51 64 54 50 56 58
35x48: 42 46 44 40 48 39
36x47: 33 35 28 31 32 21
43x43: 42 35 35 31 25 27
47x41: 50 39 44 50 48 63
36x38: 18 25 32 23 19 27
41x35: 38 45 32 34 39 35
48x50: 51 74 67 61 65 55
47x35: 26 25 26 29 31 27
35x37: 34 29 37 25 41 31
46x42: 29 45 34 35 30 36
50x35: 25 34 26 28 32 31
39x37: 33 18 18 17 38 32
35x45: 43 37 44 36 39 42
47x45: 40 34 45 39 39 28
41x35: 41 37 32 36 41 34
47x41: 36 56 53 52 52 50
48x36: 35 44 49 44 49 45
44x48: 47 58 56 60 54 52
50x43: 57 63 48 54 55 56
35x49: 33 32 33 27 22 29
35x38: 27 37 40 44 31 28
37x37: 27 25 22 25 25 20
39x46: 28 33 32 39 35 28
39x40: 34 37 22 29 20 26
44x49: 45 50 52 59 63 62
47x37: 32 48 51 53 38 48
37x49: 31 33 26 33 29 40
46x49: 57 51 65 57 62 53
36x49: 27 26 43 29 27 39
38x35: 26 26 22 14 26 17
38x47: 45 39 46 52 40 52
45x46: 34 33 38 49 36 35
50x35: 16 25 34 29 39 32
41x48: 48 47 47 44 58 57
47x46: 53 59 55 50 53 63
45x44: 58 48 49 51 51 47
50x40: 42 32 35 37 28 34
40x39: 25 29 36 23 32 24
43x44: 43 49 48 53 45 54
39x35: 25 32 16 24 27 19
36x37: 28 22 26 20 15 33
42x35: 37 33 33 43 43 37
41x43: 41 39 28 20 22 32
40x47: 40 34 34 24 37 26
39x37: 32 29 21 15 30 29
49x45: 36 37 35 51 29 51
41x45: 31 27 40 31 36 30
48x44: 33 40 37 35 35 44
47x42: 49 57 61 45 40 53
43x42: 46 46 46 53 32 56
36x50: 51 48 52 47 50 30
44x42: 49 37 44 58 45 50
44x42: 37 39 31 26 27 36
35x49: 31 29 28 35 24 29
50x44: 51 34 58 68 67 56
48x49: 38 48 41 28 52 49
41x47: 44 44 53 55 56 44
46x39: 43 48 49 47 49 41
37x49: 36 27 30 34 38 27
36x38: 29 31 26 52 27 47
50x48: 61 52 56 70 62 67
36x35: 43 24 29 28 29 38
41x43: 46 45 37 50 42 52
46x46: 44 32 36 43 42 27
42x36: 30 21 29 31 34 22
41x47: 52 46 40 52 49 57
45x39: 42 29 30 45 23 26
50x43: 48 62 53 61 61 49
49x49: 34 49 45 41 46 41
41x38: 29 18 31 20 26 31
45x46: 46 50 52 60 56 55
50x47: 38 36 41 43 40 42
43x38: 20 29 27 29 35 28
41x38: 44 29 45 41 37 41
45x42: 59 44 48 43 48 47
50x43: 57 57 60 51 47 59
46x36: 33 23 31 24 33 36
35x35: 16 23 20 24 18 19
50x47: 45 36 49 31 36 43
44x37: 40 30 22 23 25 28
35x44: 28 32 22 19 24 29
40x44: 38 29 24 27 31 32
38x45: 32 32 27 29 29 31
37x47: 41 47 40 47 45 49
43x39: 43 44 40 39 42 50
36x42: 36 38 41 33 49 35
47x46: 33 37 34 38 30 52
45x43: 32 38 24 34 39 42
47x41: 54 58 41 55 50 42
39x40: 26 32 35 30 25 20
48x49: 67 51 54 71 59 59
46x42: 43 33 33 28 34 38
36x37: 48 31 33 25 34 32
37x43: 28 27 32 24 21 36
47x49: 66 58 57 57 61 55
45x48: 34 47 40 40 40 38
42x50: 58 51 60 51 47 55
50x46: 75 41 64 60 58 51
36x36: 24 20 18 39 18 25
36x38: 41 49 32 29 36 27
36x46: 25 26 37 33 25 34
38x47: 49 44 44 43 50 44
37x35: 33 24 34 34 37 35
44x46: 35 30 42 38 35 29
46x42: 31 34 39 43 26 37
39x40: 39 45 31 36 47 43
45x44: 37 30 42 34 31 35
47x45: 44 35 31 33 34 47
35x47: 46 41 36 48 43 40
45x42: 47 37 57 50 50 47
45x49: 47 33 37 36 53 33
49x44: 54 43 66 59 63 44
40x49: 37 36 37 31 34 33
43x38: 35 36 53 41 36 49
35x42: 26 31 26 24 27 19
`.trim();var T6=A("<p> regions can fit all the presents listed.");const I6=()=>{const e=M6.split(`

`),t=e.slice(0,e.length-1).map(r=>r.split(`
`).slice(1).map(s=>s.split(""))),n=e[e.length-1].split(`
`).map(r=>r.match(/(?<width>\d+)x(?<height>\d+): (?<counts>.+)/u).groups).map(({width:r,height:s,counts:i})=>({width:Number(r),height:Number(s),counts:i.split(" ").map(Number)}));return{shapes:t,regions:n}},N6=e=>e.flatMap(t=>t.filter(n=>n==="#")).length,D6=(e,t,n,r)=>{const s=r.map(N6);return!(n.map((a,o)=>a*s[o]).reduce(Z)>e*t)};function B6(){const{shapes:e,regions:t}=I6(),n=t.filter(({width:r,height:s,counts:i})=>D6(r,s,i,e)).length;return(()=>{var r=T6(),s=r.firstChild;return j(r,m(T,{children:n}),s),r})()}const V6=Object.freeze(Object.defineProperty({__proto__:null,Part1:B6},Symbol.toStringTag,{value:"Module"})),U6=[m1,$1,q1,I1,K1,e6,o6,f6,v6,_6,O6,V6];var $2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},J3={exports:{}},j2;function H6(){return j2||(j2=1,(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};var n=(function(r){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,a={},o={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function L(f){return f instanceof l?new l(f.type,L(f.content),f.alias):Array.isArray(f)?f.map(L):f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(L){return Object.prototype.toString.call(L).slice(8,-1)},objId:function(L){return L.__id||Object.defineProperty(L,"__id",{value:++i}),L.__id},clone:function L(f,d){d=d||{};var x,g;switch(o.util.type(f)){case"Object":if(g=o.util.objId(f),d[g])return d[g];x={},d[g]=x;for(var w in f)f.hasOwnProperty(w)&&(x[w]=L(f[w],d));return x;case"Array":return g=o.util.objId(f),d[g]?d[g]:(x=[],d[g]=x,f.forEach(function(z,k){x[k]=L(z,d)}),x);default:return f}},getLanguage:function(L){for(;L;){var f=s.exec(L.className);if(f)return f[1].toLowerCase();L=L.parentElement}return"none"},setLanguage:function(L,f){L.className=L.className.replace(RegExp(s,"gi"),""),L.classList.add("language-"+f)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(x){var L=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(x.stack)||[])[1];if(L){var f=document.getElementsByTagName("script");for(var d in f)if(f[d].src==L)return f[d]}return null}},isActive:function(L,f,d){for(var x="no-"+f;L;){var g=L.classList;if(g.contains(f))return!0;if(g.contains(x))return!1;L=L.parentElement}return!!d}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(L,f){var d=o.util.clone(o.languages[L]);for(var x in f)d[x]=f[x];return d},insertBefore:function(L,f,d,x){x=x||o.languages;var g=x[L],w={};for(var z in g)if(g.hasOwnProperty(z)){if(z==f)for(var k in d)d.hasOwnProperty(k)&&(w[k]=d[k]);d.hasOwnProperty(z)||(w[z]=g[z])}var F=x[L];return x[L]=w,o.languages.DFS(o.languages,function(M,X){X===F&&M!=L&&(this[M]=w)}),w},DFS:function L(f,d,x,g){g=g||{};var w=o.util.objId;for(var z in f)if(f.hasOwnProperty(z)){d.call(f,z,f[z],x||z);var k=f[z],F=o.util.type(k);F==="Object"&&!g[w(k)]?(g[w(k)]=!0,L(k,d,null,g)):F==="Array"&&!g[w(k)]&&(g[w(k)]=!0,L(k,d,z,g))}}},plugins:{},highlightAll:function(L,f){o.highlightAllUnder(document,L,f)},highlightAllUnder:function(L,f,d){var x={callback:d,container:L,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",x),x.elements=Array.prototype.slice.apply(x.container.querySelectorAll(x.selector)),o.hooks.run("before-all-elements-highlight",x);for(var g=0,w;w=x.elements[g++];)o.highlightElement(w,f===!0,x.callback)},highlightElement:function(L,f,d){var x=o.util.getLanguage(L),g=o.languages[x];o.util.setLanguage(L,x);var w=L.parentElement;w&&w.nodeName.toLowerCase()==="pre"&&o.util.setLanguage(w,x);var z=L.textContent,k={element:L,language:x,grammar:g,code:z};function F(X){k.highlightedCode=X,o.hooks.run("before-insert",k),k.element.innerHTML=k.highlightedCode,o.hooks.run("after-highlight",k),o.hooks.run("complete",k),d&&d.call(k.element)}if(o.hooks.run("before-sanity-check",k),w=k.element.parentElement,w&&w.nodeName.toLowerCase()==="pre"&&!w.hasAttribute("tabindex")&&w.setAttribute("tabindex","0"),!k.code){o.hooks.run("complete",k),d&&d.call(k.element);return}if(o.hooks.run("before-highlight",k),!k.grammar){F(o.util.encode(k.code));return}if(f&&r.Worker){var M=new Worker(o.filename);M.onmessage=function(X){F(X.data)},M.postMessage(JSON.stringify({language:k.language,code:k.code,immediateClose:!0}))}else F(o.highlight(k.code,k.grammar,k.language))},highlight:function(L,f,d){var x={code:L,grammar:f,language:d};if(o.hooks.run("before-tokenize",x),!x.grammar)throw new Error('The language "'+x.language+'" has no grammar.');return x.tokens=o.tokenize(x.code,x.grammar),o.hooks.run("after-tokenize",x),l.stringify(o.util.encode(x.tokens),x.language)},tokenize:function(L,f){var d=f.rest;if(d){for(var x in d)f[x]=d[x];delete f.rest}var g=new R;return h(g,g.head,L),u(L,g,f,g.head,0),S(g)},hooks:{all:{},add:function(L,f){var d=o.hooks.all;d[L]=d[L]||[],d[L].push(f)},run:function(L,f){var d=o.hooks.all[L];if(!(!d||!d.length))for(var x=0,g;g=d[x++];)g(f)}},Token:l};r.Prism=o;function l(L,f,d,x){this.type=L,this.content=f,this.alias=d,this.length=(x||"").length|0}l.stringify=function L(f,d){if(typeof f=="string")return f;if(Array.isArray(f)){var x="";return f.forEach(function(F){x+=L(F,d)}),x}var g={type:f.type,content:L(f.content,d),tag:"span",classes:["token",f.type],attributes:{},language:d},w=f.alias;w&&(Array.isArray(w)?Array.prototype.push.apply(g.classes,w):g.classes.push(w)),o.hooks.run("wrap",g);var z="";for(var k in g.attributes)z+=" "+k+'="'+(g.attributes[k]||"").replace(/"/g,"&quot;")+'"';return"<"+g.tag+' class="'+g.classes.join(" ")+'"'+z+">"+g.content+"</"+g.tag+">"};function c(L,f,d,x){L.lastIndex=f;var g=L.exec(d);if(g&&x&&g[1]){var w=g[1].length;g.index+=w,g[0]=g[0].slice(w)}return g}function u(L,f,d,x,g,w){for(var z in d)if(!(!d.hasOwnProperty(z)||!d[z])){var k=d[z];k=Array.isArray(k)?k:[k];for(var F=0;F<k.length;++F){if(w&&w.cause==z+","+F)return;var M=k[F],X=M.inside,$3=!!M.lookbehind,C=!!M.greedy,O=M.alias;if(C&&!M.pattern.global){var H=M.pattern.toString().match(/[imsuy]*$/)[0];M.pattern=RegExp(M.pattern.source,H+"g")}for(var t3=M.pattern||M,N=x.next,D=g;N!==f.tail&&!(w&&D>=w.reach);D+=N.value.length,N=N.next){var J=N.value;if(f.length>L.length)return;if(!(J instanceof l)){var Y=1,B;if(C){if(B=c(t3,D,L,$3),!B||B.index>=L.length)break;var S3=B.index,j3=B.index+B[0].length,s3=D;for(s3+=N.value.length;S3>=s3;)N=N.next,s3+=N.value.length;if(s3-=N.value.length,D=s3,N.value instanceof l)continue;for(var g3=N;g3!==f.tail&&(s3<j3||typeof g3.value=="string");g3=g3.next)Y++,s3+=g3.value.length;Y--,J=L.slice(D,s3),B.index-=D}else if(B=c(t3,0,J,$3),!B)continue;var S3=B.index,A3=B[0],U3=J.slice(0,S3),u2=J.slice(S3+A3.length),H3=D+J.length;w&&H3>w.reach&&(w.reach=H3);var z3=N.prev;U3&&(z3=h(f,z3,U3),D+=U3.length),b(f,z3,Y);var v4=new l(z,X?o.tokenize(A3,X):A3,O,A3);if(N=h(f,z3,v4),u2&&h(f,N,u2),Y>1){var W3={cause:z+","+F,reach:H3};u(L,f,d,N.prev,D,W3),w&&W3.reach>w.reach&&(w.reach=W3.reach)}}}}}}function R(){var L={value:null,prev:null,next:null},f={value:null,prev:L,next:null};L.next=f,this.head=L,this.tail=f,this.length=0}function h(L,f,d){var x=f.next,g={value:d,prev:f,next:x};return f.next=g,x.prev=g,L.length++,g}function b(L,f,d){for(var x=f.next,g=0;g<d&&x!==L.tail;g++)x=x.next;f.next=x,x.prev=f,L.length-=g}function S(L){for(var f=[],d=L.head.next;d!==L.tail;)f.push(d.value),d=d.next;return f}if(!r.document)return r.addEventListener&&(o.disableWorkerMessageHandler||r.addEventListener("message",function(L){var f=JSON.parse(L.data),d=f.language,x=f.code,g=f.immediateClose;r.postMessage(o.highlight(x,o.languages[d],d)),g&&r.close()},!1)),o;var p=o.util.currentScript();p&&(o.filename=p.src,p.hasAttribute("data-manual")&&(o.manual=!0));function y(){o.manual||o.highlightAll()}if(!o.manual){var $=document.readyState;$==="loading"||$==="interactive"&&p&&p.defer?document.addEventListener("DOMContentLoaded",y):window.requestAnimationFrame?window.requestAnimationFrame(y):window.setTimeout(y,16)}return o})(t);e.exports&&(e.exports=n),typeof $2<"u"&&($2.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(s,i){var a={};a["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[i]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};o["language-"+i]={pattern:/[\s\S]+/,inside:n.languages[i]};var l={};l[s]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return s}),"i"),lookbehind:!0,greedy:!0,inside:o},n.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,s){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:n.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,(function(r){var s=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+s.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+s.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:s,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var i=r.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))})(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,(function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",s=function(p,y){return"✖ Error "+p+" while fetching file: "+y},i="✖ Error: File does not exist or is empty",a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},o="data-src-status",l="loading",c="loaded",u="failed",R="pre[data-src]:not(["+o+'="'+c+'"]):not(['+o+'="'+l+'"])';function h(p,y,$){var L=new XMLHttpRequest;L.open("GET",p,!0),L.onreadystatechange=function(){L.readyState==4&&(L.status<400&&L.responseText?y(L.responseText):L.status>=400?$(s(L.status,L.statusText)):$(i))},L.send(null)}function b(p){var y=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(p||"");if(y){var $=Number(y[1]),L=y[2],f=y[3];return L?f?[$,Number(f)]:[$,void 0]:[$,$]}}n.hooks.add("before-highlightall",function(p){p.selector+=", "+R}),n.hooks.add("before-sanity-check",function(p){var y=p.element;if(y.matches(R)){p.code="",y.setAttribute(o,l);var $=y.appendChild(document.createElement("CODE"));$.textContent=r;var L=y.getAttribute("data-src"),f=p.language;if(f==="none"){var d=(/\.(\w+)$/.exec(L)||[,"none"])[1];f=a[d]||d}n.util.setLanguage($,f),n.util.setLanguage(y,f);var x=n.plugins.autoloader;x&&x.loadLanguages(f),h(L,function(g){y.setAttribute(o,c);var w=b(y.getAttribute("data-range"));if(w){var z=g.split(/\r\n?|\n/g),k=w[0],F=w[1]==null?z.length:w[1];k<0&&(k+=z.length),k=Math.max(0,Math.min(k-1,z.length)),F<0&&(F+=z.length),F=Math.max(0,Math.min(F,z.length)),g=z.slice(k,F).join(`
`),y.hasAttribute("data-start")||y.setAttribute("data-start",String(k+1))}$.textContent=g,n.highlightElement($)},function(g){y.setAttribute(o,u),$.textContent=g})}}),n.plugins.fileHighlight={highlight:function(y){for(var $=(y||document).querySelectorAll(R),L=0,f;f=$[L++];)n.highlightElement(f)}};var S=!1;n.fileHighlight=function(){S||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),S=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}})()})(J3)),J3.exports}var W6=H6(),S2={},A2;function K6(){return A2||(A2=1,(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism)),S2}K6();(function(e){var t=e.util.clone(e.languages.javascript),n=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,r=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,s=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function i(l,c){return l=l.replace(/<S>/g,function(){return n}).replace(/<BRACES>/g,function(){return r}).replace(/<SPREAD>/g,function(){return s}),RegExp(l,c)}s=i(s).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=i(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:i(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:i(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var a=function(l){return l?typeof l=="string"?l:typeof l.content=="string"?l.content:l.content.map(a).join(""):""},o=function(l){for(var c=[],u=0;u<l.length;u++){var R=l[u],h=!1;if(typeof R!="string"&&(R.type==="tag"&&R.content[0]&&R.content[0].type==="tag"?R.content[0].content[0].content==="</"?c.length>0&&c[c.length-1].tagName===a(R.content[0].content[1])&&c.pop():R.content[R.content.length-1].content==="/>"||c.push({tagName:a(R.content[0].content[1]),openedBraces:0}):c.length>0&&R.type==="punctuation"&&R.content==="{"?c[c.length-1].openedBraces++:c.length>0&&c[c.length-1].openedBraces>0&&R.type==="punctuation"&&R.content==="}"?c[c.length-1].openedBraces--:h=!0),(h||typeof R=="string")&&c.length>0&&c[c.length-1].openedBraces===0){var b=a(R);u<l.length-1&&(typeof l[u+1]=="string"||l[u+1].type==="plain-text")&&(b+=a(l[u+1]),l.splice(u+1,1)),u>0&&(typeof l[u-1]=="string"||l[u-1].type==="plain-text")&&(b=a(l[u-1])+b,l.splice(u-1,1),u--),l[u]=new e.Token("plain-text",b,null,b)}R.content&&typeof R.content!="string"&&o(R.content)}};e.hooks.add("after-tokenize",function(l){l.language!=="jsx"&&l.language!=="tsx"||o(l.tokens)})})(Prism);(function(e){var t=e.util.clone(e.languages.typescript);e.languages.tsx=e.languages.extend("jsx",t),delete e.languages.tsx.parameter,delete e.languages.tsx["literal-property"];var n=e.languages.tsx.tag;n.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+n.pattern.source+")",n.pattern.flags),n.lookbehind=!0})(Prism);var G6=A('<div><button class="btn btn-plain btn-compact"aria-label="purge jsdelivr cache and reload code">'),Z6=A("<pre class=code data-lang=TSX><code id=code class=language-tsx>"),X6=A("<div class=code-container>"),J6=A("<pre class=code>Loading...");function Y6(e){const t=(a=!1)=>`https://${a?"purge":"cdn"}.jsdelivr.net/gh/kufii/advent-of-code-2025@main/src/components/solutions/${e.day.toString().padStart(2,"0")}/index.tsx`,[n,r]=I(""),s=async()=>{try{const o=await(await fetch(t(),{cache:"no-cache"})).text();r(o),setTimeout(()=>{const l=document.getElementById("code");l&&W6.highlightElement(l)},0)}catch(a){console.error("Error fetching code:",a),r("Not found")}},i=async()=>{r("");try{await fetch(t(!0),{cache:"no-cache"}),s()}catch(a){console.error("Error refreshing code:",a),r("Not found")}};return f3(()=>{r(""),s()}),(()=>{var a=X6();return j(a,m(W,{get when(){return n()},get fallback(){return J6()},get children(){var o=Z6(),l=o.firstChild;return j(o,m(W,{when:U4,get children(){var c=G6(),u=c.firstChild;return u.$$click=i,j(u,m(f1,{})),c}}),l),j(l,n),o}})),a})()}L3(["click"]);var Q6=A('<h1>Day <!> <a class="btn btn-compact"target=_blank rel="noopener noreferrer"aria-label="View the problem on the Advent of Code website">'),e7=A("<button type=button class=btn>Part 2"),t7=A('<div class=btn-container><button type=button class=btn>Part 1</button><button type=button class="btn btn-plain">'),n7=A("<section class=output><h2>Part "),r7=A('<div class="btn-container nav-btns">'),s7=A("<p>Solution not yet implemented.");const i7={id:/^\d+$/u};function o7(){const e=z5(),[t,n]=I(0),[r,s]=I(!1),[i,a]=I(0);f3(()=>{document.activeElement?.ariaDisabled==="true"&&document.activeElement.blur(),a(Number(e.id)),n(0),s(!1)});const o=P(()=>U6[i()-1]);return m(W,{get when(){return q3(()=>i()>=1)()&&i()<=12},get fallback(){return m(X2,{})},get children(){return[m(D3,{get children(){return["Advent of Code 2025 - Day ",q3(()=>i())]}}),(()=>{var l=Q6(),c=l.firstChild,u=c.nextSibling,R=u.nextSibling,h=R.nextSibling;return j(l,i,u),j(h,m(u1,{size:24})),K(()=>i3(h,"href",`https://adventofcode.com/2025/day/${i()}`)),l})(),m(W,{get when(){return o()},get fallback(){return s7()},get children(){return[(()=>{var l=t7(),c=l.firstChild,u=c.nextSibling;return c.$$click=()=>n(1),j(l,m(W,{get when(){return o().Part2},get children(){var R=e7();return R.$$click=()=>n(2),R}}),u),u.$$click=()=>s(R=>!R),j(u,()=>r()?"Hide Code":"View Code"),l})(),m(W,{get when(){return r()},get children(){return m(Y6,{get day(){return i()}})}}),m(W,{get when(){return t()},get children(){var l=n7(),c=l.firstChild;return c.firstChild,j(c,t,null),j(l,(()=>{var u=q3(()=>t()===1);return()=>u()?o().Part1():o().Part2?.()})(),null),l}})]}}),(()=>{var l=r7();return j(l,m(T3,{get href(){return`/day/${i()-1}`},class:"btn btn-plain btn-circle","aria-label":"Previous Day",get"aria-disabled"(){return i()<=1},get tabIndex(){return i()<=1?-1:void 0},get children(){return m(o1,{size:32})}}),null),j(l,m(T3,{get href(){return`/day/${i()+1}`},class:"btn btn-plain btn-circle","aria-label":"Next Day",get"aria-disabled"(){return i()>=12},get tabIndex(){return i()>=12?-1:void 0},get children(){return m(a1,{size:32})}}),null),l})()]}})}L3(["click"]);function a7(e){return r3({a:{viewBox:"0 0 1024 1024"},c:'<path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"/>'},e)}var l7=A('<header class=nav><button type=button class="nav-btn nav-skip">Skip nav</button><button type=button class="nav-btn nav-menu-btn"aria-controls=nav-menu></button><span></span><a class=nav-btn href=https://github.com/kufii/advent-of-code-2025 rel="noopener noreferrer"target=_blank aria-label="View source on GitHub">'),u7=A("<div id=nav-menu class=nav-menu role=dialog aria-modal=true><nav><ul>"),L7=A("<li>");function c7(e){return[(()=>{var t=l7(),n=t.firstChild,r=n.nextSibling,s=r.nextSibling,i=s.nextSibling;return t.$$click=()=>e.setMenuOpen(!1),n.$$click=()=>{e.setMenuOpen(!1),document.getElementById("main-content")?.querySelector('a:not([disabled]), button:not([disabled]), input[type=text]:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])')?.focus()},r.$$click=a=>{e.setMenuOpen(o=>!o),a.stopImmediatePropagation()},j(r,m(R1,{size:24})),j(s,m(T3,{class:"nav-title",href:"/",children:"advent of code 2025"})),j(i,m(a7,{size:24})),K(a=>{var o=e.menuOpen?"close navigation menu":"open navigation menu",l=e.menuOpen;return o!==a.e&&i3(r,"aria-label",a.e=o),l!==a.t&&i3(r,"aria-expanded",a.t=l),a},{e:void 0,t:void 0}),t})(),(()=>{var t=u7(),n=t.firstChild,r=n.firstChild;return t.$$click=()=>e.setMenuOpen(!1),n.$$click=s=>s.stopImmediatePropagation(),j(r,m(N4,{get each(){return J2(1,12)},children:s=>(()=>{var i=L7();return j(i,m(T3,{href:`/day/${s}`,activeClass:"active",onClick:()=>e.setMenuOpen(!1),get children(){return["Day ",s]}})),i})()})),K(s=>{var i=!!e.menuOpen,a=!e.menuOpen,o=!e.menuOpen;return i!==s.e&&t.classList.toggle("open",s.e=i),a!==s.t&&i3(t,"aria-hidden",s.t=a),o!==s.a&&(t.inert=s.a=o),s},{e:void 0,t:void 0,a:void 0}),t})()]}L3(["click"]);var R7=A("<main id=main-content class=main>");function f7(){const[e,t]=I(!1);return m(W5,{root:n=>m(f5,{get children(){return[m(D3,{children:"Advent of Code 2025"}),m(c7,{get menuOpen(){return e()},setMenuOpen:t}),(()=>{var r=R7();return j(r,m(V4,{get children(){return n.children}})),K(s=>{var i=e(),a=e();return i!==s.e&&i3(r,"aria-disabled",s.e=i),a!==s.t&&(r.inert=s.t=a),s},{e:void 0,t:void 0}),r})()]}}),get children(){return[m(X3,{path:"/",component:Z5}),m(X3,{path:"/day/:id",component:o7,matchFilters:i7}),m(X3,{path:"*404",component:X2})]}})}e5(()=>m(f7,{}),document.getElementById("root"));
