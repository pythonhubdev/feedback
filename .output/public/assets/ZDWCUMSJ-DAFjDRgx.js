import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,H as c,J as l,L as u,M as d,N as f,O as p,P as m,Q as h,R as g,S as _,T as v,V as y,W as b,X as x,Y as S,Z as C,_ as w,a as T,b as E,c as D,d as O,et as k,f as A,g as j,h as M,i as ee,j as N,l as te,m as ne,n as re,nt as ie,o as ae,p as oe,q as se,r as P,s as ce,t as le,tt as F,u as ue,v as I,w as de,x as fe,y as L,z as pe}from"./EIDV623S-DzkOWap0.js";var me=!1,he=e=>e!=null,ge=e=>e.filter(he);function _e(e){return(...t)=>{for(let n of e)n&&n(...t)}}var R=e=>typeof e==`function`&&!e.length?e():e,ve=e=>Array.isArray(e)?e:e?[e]:[];function ye(e,...t){return typeof e==`function`?e(...t):e}var be=me?e=>p()?y(e):e:y;function xe(e,t,n,r){let i=e.length,a=t.length,o=0;if(!a){for(;o<i;o++)n(e[o]);return}if(!i){for(;o<a;o++)r(t[o]);return}for(;o<a&&t[o]===e[o];o++);let s,c;t=t.slice(o),e=e.slice(o);for(s of t)e.includes(s)||r(s);for(c of e)t.includes(c)||n(c)}function Se(e){let[t,n]=_(),r=e?.throw?(e,t)=>{throw n(e instanceof Error?e:Error(t)),e}:(e,t)=>{n(e instanceof Error?e:Error(t))},i=e?.api?Array.isArray(e.api)?e.api:[e.api]:[globalThis.localStorage].filter(Boolean),a=e?.prefix?`${e.prefix}.`:``,o=new Map,s=new Proxy({},{get(t,n){let s=o.get(n);s||(s=_(void 0,{equals:!1}),o.set(n,s)),s[0]();let c=i.reduce((e,t)=>{if(e!==null||!t)return e;try{return t.getItem(`${a}${n}`)}catch(e){return r(e,`Error reading ${a}${n} from ${t.name}`),null}},null);return c!==null&&e?.deserializer?e.deserializer(c,n,e.options):c}});return e?.sync!==!1&&c(()=>{let e=e=>{let t=!1;i.forEach(n=>{try{n!==e.storageArea&&e.key&&e.newValue!==n.getItem(e.key)&&(e.newValue?n.setItem(e.key,e.newValue):n.removeItem(e.key),t=!0)}catch(t){r(t,`Error synching api ${n.name} from storage event (${e.key}=${e.newValue})`)}}),t&&e.key&&o.get(e.key)?.[1]()};`addEventListener`in globalThis?(globalThis.addEventListener(`storage`,e),y(()=>globalThis.removeEventListener(`storage`,e))):(i.forEach(t=>t.addEventListener?.(`storage`,e)),y(()=>i.forEach(t=>t.removeEventListener?.(`storage`,e))))}),[s,(t,n,s)=>{let c=e?.serializer?e.serializer(n,t,s??e.options):n,l=`${a}${t}`;i.forEach(e=>{try{e.getItem(l)!==c&&e.setItem(l,c)}catch(n){r(n,`Error setting ${a}${t} to ${c} in ${e.name}`)}});let u=o.get(t);u&&u[1]()},{clear:()=>i.forEach(e=>{try{e.clear()}catch(t){r(t,`Error clearing ${e.name}`)}}),error:t,remove:e=>i.forEach(t=>{try{t.removeItem(`${a}${e}`)}catch(n){r(n,`Error removing ${a}${e} from ${t.name}`)}}),toJSON:()=>{let t={},n=(n,r)=>{if(!t.hasOwnProperty(n)){let i=r&&e?.deserializer?e.deserializer(r,n,e.options):r;i&&(t[n]=i)}};return i.forEach(e=>{if(typeof e.getAll==`function`){let t;try{t=e.getAll()}catch(t){r(t,`Error getting all values from in ${e.name}`)}for(let e of t)n(e,t[e])}else{let i=0,a;try{for(;a=e.key(i++);)t.hasOwnProperty(a)||n(a,e.getItem(a))}catch(t){r(t,`Error getting all values from ${e.name}`)}}}),t}}]}var Ce=Se,we=e=>(typeof e.clear==`function`||(e.clear=()=>{let t;for(;t=e.key(0);)e.removeItem(t)}),e),Te=e=>{if(!e)return``;let t=``;for(let n in e){if(!e.hasOwnProperty(n))continue;let r=e[n];t+=r instanceof Date?`; ${n}=${r.toUTCString()}`:typeof r==`boolean`?`; ${n}`:`; ${n}=${r}`}return t},z=we({_cookies:[globalThis.document,`cookie`],getItem:e=>z._cookies[0][z._cookies[1]].match(`(^|;)\\s*`+e+`\\s*=\\s*([^;]+)`)?.pop()??null,setItem:(e,t,n)=>{let r=z.getItem(e);z._cookies[0][z._cookies[1]]=`${e}=${t}${Te(n)}`;let i=Object.assign(new Event(`storage`),{key:e,oldValue:r,newValue:t,url:globalThis.document.URL,storageArea:z});window.dispatchEvent(i)},removeItem:e=>{z._cookies[0][z._cookies[1]]=`${e}=deleted${Te({expires:new Date(0)})}`},key:e=>{let t=null,n=0;return z._cookies[0][z._cookies[1]].replace(/(?:^|;)\s*(.+?)\s*=\s*[^;]+/g,(r,i)=>(!t&&i&&n++===e&&(t=i),``)),t},get length(){let e=0;return z._cookies[0][z._cookies[1]].replace(/(?:^|;)\s*.+?\s*=\s*[^;]+/g,t=>(e+=t?1:0,``)),e}}),Ee=1024,De=796,Oe=700,ke=`bottom-right`,Ae=`bottom`,je=`system`,Me=!1,Ne=500,Pe=500,Fe=500,Ie=Object.keys(se)[0],Le=1,Re=Object.keys(pe)[0],ze=w({client:void 0,onlineManager:void 0,queryFlavor:``,version:``,shadowDOMTarget:void 0});function B(){return F(ze)}var Be=w(void 0),Ve=e=>{let[t,n]=_(null),r=()=>{let e=t();e!=null&&(e.close(),n(null))},i=(r,i)=>{if(t()!=null)return;let a=window.open(``,`TSQD-Devtools-Panel`,`width=${r},height=${i},popup`);if(!a)throw Error(`Failed to open popup. Please allow popups for this site to view the devtools in picture-in-picture mode.`);a.document.head.innerHTML=``,a.document.body.innerHTML=``,oe(a.document),a.document.title=`TanStack Query Devtools`,a.document.body.style.margin=`0`,a.addEventListener(`pagehide`,()=>{e.setLocalStore(`pip_open`,`false`),n(null)}),[...(B().shadowDOMTarget||document).styleSheets].forEach(e=>{try{let t=[...e.cssRules].map(e=>e.cssText).join(``),n=document.createElement(`style`),r=e.ownerNode,i=``;r&&`id`in r&&(i=r.id),i&&n.setAttribute(`id`,i),n.textContent=t,a.document.head.appendChild(n)}catch{let t=document.createElement(`link`);if(e.href==null)return;t.rel=`stylesheet`,t.type=e.type,t.media=e.media.toString(),t.href=e.href,a.document.head.appendChild(t)}}),de([`focusin`,`focusout`,`pointermove`,`keydown`,`pointerdown`,`pointerup`,`click`,`mousedown`,`input`],a.document),e.setLocalStore(`pip_open`,`true`),n(a)};I(()=>{(e.localStore.pip_open??`false`)===`true`&&!e.disabled&&i(Number(window.innerWidth),Number(e.localStore.height||Pe))}),I(()=>{let e=(B().shadowDOMTarget||document).querySelector(`#_goober`),n=t();if(e&&n){let t=new MutationObserver(()=>{let t=(B().shadowDOMTarget||n.document).querySelector(`#_goober`);t&&(t.textContent=e.textContent)});t.observe(e,{childList:!0,subtree:!0,characterDataOldValue:!0}),y(()=>{t.disconnect()})}});let a=L(()=>({pipWindow:t(),requestPipWindow:i,closePipWindow:r,disabled:e.disabled??!1}));return M(Be.Provider,{value:a,get children(){return e.children}})},He=()=>L(()=>{let e=F(Be);if(!e)throw Error(`usePiPWindow must be used within a PiPProvider`);return e()}),Ue=w(()=>`dark`);function V(){return F(Ue)}var We={À:`A`,Á:`A`,Â:`A`,Ã:`A`,Ä:`A`,Å:`A`,Ấ:`A`,Ắ:`A`,Ẳ:`A`,Ẵ:`A`,Ặ:`A`,Æ:`AE`,Ầ:`A`,Ằ:`A`,Ȃ:`A`,Ç:`C`,Ḉ:`C`,È:`E`,É:`E`,Ê:`E`,Ë:`E`,Ế:`E`,Ḗ:`E`,Ề:`E`,Ḕ:`E`,Ḝ:`E`,Ȇ:`E`,Ì:`I`,Í:`I`,Î:`I`,Ï:`I`,Ḯ:`I`,Ȋ:`I`,Ð:`D`,Ñ:`N`,Ò:`O`,Ó:`O`,Ô:`O`,Õ:`O`,Ö:`O`,Ø:`O`,Ố:`O`,Ṍ:`O`,Ṓ:`O`,Ȏ:`O`,Ù:`U`,Ú:`U`,Û:`U`,Ü:`U`,Ý:`Y`,à:`a`,á:`a`,â:`a`,ã:`a`,ä:`a`,å:`a`,ấ:`a`,ắ:`a`,ẳ:`a`,ẵ:`a`,ặ:`a`,æ:`ae`,ầ:`a`,ằ:`a`,ȃ:`a`,ç:`c`,ḉ:`c`,è:`e`,é:`e`,ê:`e`,ë:`e`,ế:`e`,ḗ:`e`,ề:`e`,ḕ:`e`,ḝ:`e`,ȇ:`e`,ì:`i`,í:`i`,î:`i`,ï:`i`,ḯ:`i`,ȋ:`i`,ð:`d`,ñ:`n`,ò:`o`,ó:`o`,ô:`o`,õ:`o`,ö:`o`,ø:`o`,ố:`o`,ṍ:`o`,ṓ:`o`,ȏ:`o`,ù:`u`,ú:`u`,û:`u`,ü:`u`,ý:`y`,ÿ:`y`,Ā:`A`,ā:`a`,Ă:`A`,ă:`a`,Ą:`A`,ą:`a`,Ć:`C`,ć:`c`,Ĉ:`C`,ĉ:`c`,Ċ:`C`,ċ:`c`,Č:`C`,č:`c`,C̆:`C`,c̆:`c`,Ď:`D`,ď:`d`,Đ:`D`,đ:`d`,Ē:`E`,ē:`e`,Ĕ:`E`,ĕ:`e`,Ė:`E`,ė:`e`,Ę:`E`,ę:`e`,Ě:`E`,ě:`e`,Ĝ:`G`,Ǵ:`G`,ĝ:`g`,ǵ:`g`,Ğ:`G`,ğ:`g`,Ġ:`G`,ġ:`g`,Ģ:`G`,ģ:`g`,Ĥ:`H`,ĥ:`h`,Ħ:`H`,ħ:`h`,Ḫ:`H`,ḫ:`h`,Ĩ:`I`,ĩ:`i`,Ī:`I`,ī:`i`,Ĭ:`I`,ĭ:`i`,Į:`I`,į:`i`,İ:`I`,ı:`i`,Ĳ:`IJ`,ĳ:`ij`,Ĵ:`J`,ĵ:`j`,Ķ:`K`,ķ:`k`,Ḱ:`K`,ḱ:`k`,K̆:`K`,k̆:`k`,Ĺ:`L`,ĺ:`l`,Ļ:`L`,ļ:`l`,Ľ:`L`,ľ:`l`,Ŀ:`L`,ŀ:`l`,Ł:`l`,ł:`l`,Ḿ:`M`,ḿ:`m`,M̆:`M`,m̆:`m`,Ń:`N`,ń:`n`,Ņ:`N`,ņ:`n`,Ň:`N`,ň:`n`,ŉ:`n`,N̆:`N`,n̆:`n`,Ō:`O`,ō:`o`,Ŏ:`O`,ŏ:`o`,Ő:`O`,ő:`o`,Œ:`OE`,œ:`oe`,P̆:`P`,p̆:`p`,Ŕ:`R`,ŕ:`r`,Ŗ:`R`,ŗ:`r`,Ř:`R`,ř:`r`,R̆:`R`,r̆:`r`,Ȓ:`R`,ȓ:`r`,Ś:`S`,ś:`s`,Ŝ:`S`,ŝ:`s`,Ş:`S`,Ș:`S`,ș:`s`,ş:`s`,Š:`S`,š:`s`,Ţ:`T`,ţ:`t`,ț:`t`,Ț:`T`,Ť:`T`,ť:`t`,Ŧ:`T`,ŧ:`t`,T̆:`T`,t̆:`t`,Ũ:`U`,ũ:`u`,Ū:`U`,ū:`u`,Ŭ:`U`,ŭ:`u`,Ů:`U`,ů:`u`,Ű:`U`,ű:`u`,Ų:`U`,ų:`u`,Ȗ:`U`,ȗ:`u`,V̆:`V`,v̆:`v`,Ŵ:`W`,ŵ:`w`,Ẃ:`W`,ẃ:`w`,X̆:`X`,x̆:`x`,Ŷ:`Y`,ŷ:`y`,Ÿ:`Y`,Y̆:`Y`,y̆:`y`,Ź:`Z`,ź:`z`,Ż:`Z`,ż:`z`,Ž:`Z`,ž:`z`,ſ:`s`,ƒ:`f`,Ơ:`O`,ơ:`o`,Ư:`U`,ư:`u`,Ǎ:`A`,ǎ:`a`,Ǐ:`I`,ǐ:`i`,Ǒ:`O`,ǒ:`o`,Ǔ:`U`,ǔ:`u`,Ǖ:`U`,ǖ:`u`,Ǘ:`U`,ǘ:`u`,Ǚ:`U`,ǚ:`u`,Ǜ:`U`,ǜ:`u`,Ứ:`U`,ứ:`u`,Ṹ:`U`,ṹ:`u`,Ǻ:`A`,ǻ:`a`,Ǽ:`AE`,ǽ:`ae`,Ǿ:`O`,ǿ:`o`,Þ:`TH`,þ:`th`,Ṕ:`P`,ṕ:`p`,Ṥ:`S`,ṥ:`s`,X́:`X`,x́:`x`,Ѓ:`Г`,ѓ:`г`,Ќ:`К`,ќ:`к`,A̋:`A`,a̋:`a`,E̋:`E`,e̋:`e`,I̋:`I`,i̋:`i`,Ǹ:`N`,ǹ:`n`,Ồ:`O`,ồ:`o`,Ṑ:`O`,ṑ:`o`,Ừ:`U`,ừ:`u`,Ẁ:`W`,ẁ:`w`,Ỳ:`Y`,ỳ:`y`,Ȁ:`A`,ȁ:`a`,Ȅ:`E`,ȅ:`e`,Ȉ:`I`,ȉ:`i`,Ȍ:`O`,ȍ:`o`,Ȑ:`R`,ȑ:`r`,Ȕ:`U`,ȕ:`u`,B̌:`B`,b̌:`b`,Č̣:`C`,č̣:`c`,Ê̌:`E`,ê̌:`e`,F̌:`F`,f̌:`f`,Ǧ:`G`,ǧ:`g`,Ȟ:`H`,ȟ:`h`,J̌:`J`,ǰ:`j`,Ǩ:`K`,ǩ:`k`,M̌:`M`,m̌:`m`,P̌:`P`,p̌:`p`,Q̌:`Q`,q̌:`q`,Ř̩:`R`,ř̩:`r`,Ṧ:`S`,ṧ:`s`,V̌:`V`,v̌:`v`,W̌:`W`,w̌:`w`,X̌:`X`,x̌:`x`,Y̌:`Y`,y̌:`y`,A̧:`A`,a̧:`a`,B̧:`B`,b̧:`b`,Ḑ:`D`,ḑ:`d`,Ȩ:`E`,ȩ:`e`,Ɛ̧:`E`,ɛ̧:`e`,Ḩ:`H`,ḩ:`h`,I̧:`I`,i̧:`i`,Ɨ̧:`I`,ɨ̧:`i`,M̧:`M`,m̧:`m`,O̧:`O`,o̧:`o`,Q̧:`Q`,q̧:`q`,U̧:`U`,u̧:`u`,X̧:`X`,x̧:`x`,Z̧:`Z`,z̧:`z`},Ge=Object.keys(We).join(`|`),Ke=new RegExp(Ge,`g`);function qe(e){return e.replace(Ke,e=>We[e])}var Je={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0};function Ye(e,t,n){if(n||={},n.threshold=n.threshold??Je.MATCHES,!n.accessors){let r=Xe(e,t,n);return{rankedValue:e,rank:r,accessorIndex:-1,accessorThreshold:n.threshold,passed:r>=n.threshold}}let r=tt(e,n.accessors),i={rankedValue:e,rank:Je.NO_MATCH,accessorIndex:-1,accessorThreshold:n.threshold,passed:!1};for(let e=0;e<r.length;e++){let a=r[e],o=Xe(a.itemValue,t,n),{minRanking:s,maxRanking:c,threshold:l=n.threshold}=a.attributes;o<s&&o>=Je.MATCHES?o=s:o>c&&(o=c),o=Math.min(o,c),o>=l&&o>i.rank&&(i.rank=o,i.passed=!0,i.accessorIndex=e,i.accessorThreshold=l,i.rankedValue=a.itemValue)}return i}function Xe(e,t,n){return e=$e(e,n),t=$e(t,n),t.length>e.length?Je.NO_MATCH:e===t?Je.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase(),t=t.toLowerCase(),e===t?Je.EQUAL:e.startsWith(t)?Je.STARTS_WITH:e.includes(` ${t}`)?Je.WORD_STARTS_WITH:e.includes(t)?Je.CONTAINS:t.length===1?Je.NO_MATCH:Ze(e).includes(t)?Je.ACRONYM:Qe(e,t))}function Ze(e){let t=``;return e.split(` `).forEach(e=>{e.split(`-`).forEach(e=>{t+=e.substr(0,1)})}),t}function Qe(e,t){let n=0,r=0;function i(e,t,r){for(let i=r,a=t.length;i<a;i++)if(t[i]===e)return n+=1,i+1;return-1}function a(e){let r=1/e,i=n/t.length;return Je.MATCHES+i*r}let o=i(t[0],e,0);if(o<0)return Je.NO_MATCH;r=o;for(let n=1,a=t.length;n<a;n++){let a=t[n];if(r=i(a,e,r),!(r>-1))return Je.NO_MATCH}return a(r-o)}function $e(e,t){let{keepDiacritics:n}=t;return e=`${e}`,n||(e=qe(e)),e}function et(e,t){let n=t;typeof t==`object`&&(n=t.accessor);let r=n(e);return r==null?[]:Array.isArray(r)?r:[String(r)]}function tt(e,t){let n=[];for(let r=0,i=t.length;r<i;r++){let i=t[r],a=rt(i),o=et(e,i);for(let e=0,t=o.length;e<t;e++)n.push({itemValue:o[e],attributes:a})}return n}var nt={maxRanking:1/0,minRanking:-1/0};function rt(e){return typeof e==`function`?nt:{...nt,...e}}var it={data:``},at=e=>typeof window==`object`?((e?e.querySelector(`#_goober`):window._goober)||Object.assign((e||document.head).appendChild(document.createElement(`style`)),{innerHTML:` `,id:`_goober`})).firstChild:e||it,ot=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,st=/\/\*[^]*?\*\/|  +/g,ct=/\n+/g,lt=(e,t)=>{let n=``,r=``,i=``;for(let a in e){let o=e[a];a[0]==`@`?a[1]==`i`?n=a+` `+o+`;`:r+=a[1]==`f`?lt(o,a):a+`{`+lt(o,a[1]==`k`?``:t)+`}`:typeof o==`object`?r+=lt(o,t?t.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+` `+t:t)):a):o!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,`-$&`).toLowerCase(),i+=lt.p?lt.p(a,o):a+`:`+o+`;`)}return n+(t&&i?t+`{`+i+`}`:i)+r},ut={},dt=e=>{if(typeof e==`object`){let t=``;for(let n in e)t+=n+dt(e[n]);return t}return e},ft=(e,t,n,r,i)=>{let a=dt(e),o=ut[a]||(ut[a]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return`go`+n})(a));if(!ut[o]){let t=a===e?(e=>{let t,n,r=[{}];for(;t=ot.exec(e.replace(st,``));)t[4]?r.shift():t[3]?(n=t[3].replace(ct,` `).trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(ct,` `).trim();return r[0]})(e):e;ut[o]=lt(i?{[`@keyframes `+o]:t}:t,n?``:`.`+o)}let s=n&&ut.g?ut.g:null;return n&&(ut.g=ut[o]),((e,t,n,r)=>{r?t.data=t.data.replace(r,e):t.data.indexOf(e)===-1&&(t.data=n?e+t.data:t.data+e)})(ut[o],t,r,s),o},pt=(e,t,n)=>e.reduce((e,r,i)=>{let a=t[i];if(a&&a.call){let e=a(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?`.`+t:e&&typeof e==`object`?e.props?``:lt(e,``):!1===e?``:e}return e+r+(a??``)},``);function H(e){let t=this||{},n=e.call?e(t.p):e;return ft(n.unshift?n.raw?pt(n,[].slice.call(arguments,1),t.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(t.p):n),{}):n,at(t.target),t.g,t.o,t.k)}H.bind({g:1}),H.bind({k:1});function mt(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=mt(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function U(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=mt(e))&&(r&&(r+=` `),r+=t);return r}function ht(e,t){let n=h(e),{onChange:r}=t,i=new Set(t.appear?void 0:n),a=new WeakSet,[o,s]=_([],{equals:!1}),[c]=ie(),l=e=>{s(t=>(t.push.apply(t,e),t));for(let t of e)a.delete(t)},u=(e,t,n)=>e.splice(n,0,t);return L(t=>{let n=o(),s=e();if(s[le],h(c))return c(),t;if(n.length){let e=t.filter(e=>!n.includes(e));return n.length=0,r({list:e,added:[],removed:[],unchanged:e,finishRemoved:l}),e}return h(()=>{let e=new Set(s),n=s.slice(),o=[],c=[],d=[];for(let e of s)(i.has(e)?d:o).push(e);let f=!o.length;for(let r=0;r<t.length;r++){let i=t[r];e.has(i)||(a.has(i)||(c.push(i),a.add(i)),u(n,i,r)),f&&i!==n[r]&&(f=!1)}return!c.length&&f?t:(r({list:n,added:o,removed:c,unchanged:d,finishRemoved:l}),i=e,n)})},t.appear?[]:n.slice())}function W(...e){return _e(e)}var gt=e=>e instanceof Element;function _t(e,t){if(t(e))return e;if(typeof e==`function`&&!e.length)return _t(e(),t);if(Array.isArray(e)){let n=[];for(let r of e){let e=_t(r,t);e&&(Array.isArray(e)?n.push.apply(n,e):n.push(e))}return n.length?n:null}return null}function vt(e,t=gt,n=gt){let r=L(e),i=L(()=>_t(r(),t));return i.toArray=()=>{let e=i();return Array.isArray(e)?e:e?[e]:[]},i}function yt(e){return L(()=>{let t=e.name||`s`;return{enterActive:(e.enterActiveClass||t+`-enter-active`).split(` `),enter:(e.enterClass||t+`-enter`).split(` `),enterTo:(e.enterToClass||t+`-enter-to`).split(` `),exitActive:(e.exitActiveClass||t+`-exit-active`).split(` `),exit:(e.exitClass||t+`-exit`).split(` `),exitTo:(e.exitToClass||t+`-exit-to`).split(` `),move:(e.moveClass||t+`-move`).split(` `)}})}function bt(e){requestAnimationFrame(()=>requestAnimationFrame(e))}function xt(e,t,n,r){let{onBeforeEnter:i,onEnter:a,onAfterEnter:o}=t;i?.(n),n.classList.add(...e.enter),n.classList.add(...e.enterActive),queueMicrotask(()=>{if(!n.parentNode)return r?.();a?.(n,()=>s())}),bt(()=>{n.classList.remove(...e.enter),n.classList.add(...e.enterTo),(!a||a.length<2)&&(n.addEventListener(`transitionend`,s),n.addEventListener(`animationend`,s))});function s(t){(!t||t.target===n)&&(n.removeEventListener(`transitionend`,s),n.removeEventListener(`animationend`,s),n.classList.remove(...e.enterActive),n.classList.remove(...e.enterTo),o?.(n))}}function St(e,t,n,r){let{onBeforeExit:i,onExit:a,onAfterExit:o}=t;if(!n.parentNode)return r?.();i?.(n),n.classList.add(...e.exit),n.classList.add(...e.exitActive),a?.(n,()=>s()),bt(()=>{n.classList.remove(...e.exit),n.classList.add(...e.exitTo),(!a||a.length<2)&&(n.addEventListener(`transitionend`,s),n.addEventListener(`animationend`,s))});function s(t){(!t||t.target===n)&&(r?.(),n.removeEventListener(`transitionend`,s),n.removeEventListener(`animationend`,s),n.classList.remove(...e.exitActive),n.classList.remove(...e.exitTo),o?.(n))}}var Ct=e=>{let t=yt(e);return ht(vt(()=>e.children).toArray,{appear:e.appear,onChange({added:n,removed:r,finishRemoved:i,list:a}){let o=t();for(let t of n)xt(o,e,t);let s=[];for(let e of a)e.isConnected&&(e instanceof HTMLElement||e instanceof SVGElement)&&s.push({el:e,rect:e.getBoundingClientRect()});queueMicrotask(()=>{let e=[];for(let{el:t,rect:n}of s)if(t.isConnected){let r=t.getBoundingClientRect(),i=n.left-r.left,a=n.top-r.top;(i||a)&&(t.style.transform=`translate(${i}px, ${a}px)`,t.style.transitionDuration=`0s`,e.push(t))}document.body.offsetHeight;for(let t of e){let e=function(n){(n.target===t||/transform$/.test(n.propertyName))&&(t.removeEventListener(`transitionend`,e),t.classList.remove(...o.move))};t.classList.add(...o.move),t.style.transform=t.style.transitionDuration=``,t.addEventListener(`transitionend`,e)}});for(let t of r)St(o,e,t,()=>i([t]))}})},wt=Symbol(`fallback`);function Tt(e){for(let t of e)t.dispose()}function Et(e,t,n,r={}){let i=new Map;return y(()=>Tt(i.values())),()=>{let n=e()||[];return n[le],h(()=>{if(!n.length)return Tt(i.values()),i.clear(),r.fallback?[fe(e=>(i.set(wt,{dispose:e}),r.fallback()))]:[];let e=Array(n.length),o=i.get(wt);if(!i.size||o){o?.dispose(),i.delete(wt);for(let r=0;r<n.length;r++){let i=n[r],o=t(i,r);a(e,i,r,o)}return e}let s=new Set(i.keys());for(let r=0;r<n.length;r++){let o=n[r],c=t(o,r);s.delete(c);let l=i.get(c);l?(e[r]=l.mapped,l.setIndex?.(r),l.setItem(()=>o)):a(e,o,r,c)}for(let e of s)i.get(e)?.dispose(),i.delete(e);return e})};function a(e,t,r,a){fe(o=>{let[s,c]=_(t),l={setItem:c,dispose:o};if(n.length>1){let[e,t]=_(r);l.setIndex=t,l.mapped=n(s,e)}else l.mapped=n(s);i.set(a,l),e[r]=l.mapped})}}function Dt(e){let{by:t}=e;return L(Et(()=>e.each,typeof t==`function`?t:e=>e[t],e.children,`fallback`in e?{fallback:()=>e.fallback}:void 0))}function Ot(e,t,n,r){return e.addEventListener(t,n,r),be(e.removeEventListener.bind(e,t,n,r))}function kt(e,t,n,r){let i=()=>{ve(R(e)).forEach(e=>{e&&ve(R(t)).forEach(t=>Ot(e,t,n,r))})};typeof e==`function`?I(i):E(i)}function At(e,t){let n=new ResizeObserver(e);return y(n.disconnect.bind(n)),{observe:e=>n.observe(e,t),unobserve:n.unobserve.bind(n)}}function jt(e,t,n){let r=new WeakMap,{observe:i,unobserve:a}=At(e=>{for(let n of e){let{contentRect:e,target:i}=n,a=Math.round(e.width),o=Math.round(e.height),s=r.get(i);(!s||s.width!==a||s.height!==o)&&(t(e,i,n),r.set(i,{width:a,height:o}))}},n);I(t=>{let n=ge(ve(R(e)));return xe(n,t,i,a),n},[])}var Mt=/((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;function Nt(e){let t={},n;for(;n=Mt.exec(e);)t[n[1]]=n[2];return t}function Pt(e,t){if(typeof e==`string`){if(typeof t==`string`)return`${e};${t}`;e=Nt(e)}else typeof t==`string`&&(t=Nt(t));return{...e,...t}}function Ft(e,t,n=-1){return n in e?[...e.slice(0,n),t,...e.slice(n)]:[...e,t]}function It(e,t){let n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Lt(e){return typeof e==`number`}function Rt(e){return Object.prototype.toString.call(e)===`[object String]`}function zt(e){return typeof e==`function`}function Bt(e){return t=>`${e()}-${t}`}function Vt(e,t){return e?e===t||e.contains(t):!1}function Ht(e,t=!1){let{activeElement:n}=Wt(e);if(!n?.nodeName)return null;if(Gt(n)&&n.contentDocument)return Ht(n.contentDocument.body,t);if(t){let e=n.getAttribute(`aria-activedescendant`);if(e){let t=Wt(n).getElementById(e);if(t)return t}}return n}function Ut(e){return Wt(e).defaultView||window}function Wt(e){return e?e.ownerDocument||e:document}function Gt(e){return e.tagName===`IFRAME`}var Kt=(e=>(e.Escape=`Escape`,e.Enter=`Enter`,e.Tab=`Tab`,e.Space=` `,e.ArrowDown=`ArrowDown`,e.ArrowLeft=`ArrowLeft`,e.ArrowRight=`ArrowRight`,e.ArrowUp=`ArrowUp`,e.End=`End`,e.Home=`Home`,e.PageDown=`PageDown`,e.PageUp=`PageUp`,e))(Kt||{});function qt(e){return typeof window<`u`&&window.navigator!=null?e.test(window.navigator.userAgentData?.platform||window.navigator.platform):!1}function Jt(){return qt(/^Mac/i)}function Yt(){return qt(/^iPhone/i)}function Xt(){return qt(/^iPad/i)||Jt()&&navigator.maxTouchPoints>1}function Zt(){return Yt()||Xt()}function Qt(){return Jt()||Zt()}function G(e,t){return t&&(zt(t)?t(e):t[0](t[1],e)),e?.defaultPrevented}function K(e){return t=>{for(let n of e)G(t,n)}}function $t(e){return Jt()?e.metaKey&&!e.ctrlKey:e.ctrlKey&&!e.metaKey}function q(e){if(e)if(tn())e.focus({preventScroll:!0});else{let t=nn(e);e.focus(),rn(t)}}var en=null;function tn(){if(en==null){en=!1;try{document.createElement(`div`).focus({get preventScroll(){return en=!0,!0}})}catch{}}return en}function nn(e){let t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),n}function rn(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}var an=[`input:not([type='hidden']):not([disabled])`,`select:not([disabled])`,`textarea:not([disabled])`,`button:not([disabled])`,`a[href]`,`area[href]`,`[tabindex]`,`iframe`,`object`,`embed`,`audio[controls]`,`video[controls]`,`[contenteditable]:not([contenteditable='false'])`],on=[...an,`[tabindex]:not([tabindex="-1"]):not([disabled])`],sn=an.join(`:not([hidden]),`)+`,[tabindex]:not([disabled]):not([hidden])`,cn=on.join(`:not([hidden]):not([tabindex="-1"]),`);function ln(e,t){let n=Array.from(e.querySelectorAll(sn)).filter(un);return t&&un(e)&&n.unshift(e),n.forEach((e,t)=>{if(Gt(e)&&e.contentDocument){let r=e.contentDocument.body,i=ln(r,!1);n.splice(t,1,...i)}}),n}function un(e){return dn(e)&&!fn(e)}function dn(e){return e.matches(sn)&&pn(e)}function fn(e){return parseInt(e.getAttribute(`tabindex`)||`0`,10)<0}function pn(e,t){return e.nodeName!==`#comment`&&mn(e)&&hn(e,t)&&(!e.parentElement||pn(e.parentElement,e))}function mn(e){if(!(e instanceof HTMLElement)&&!(e instanceof SVGElement))return!1;let{display:t,visibility:n}=e.style,r=t!==`none`&&n!==`hidden`&&n!==`collapse`;if(r){if(!e.ownerDocument.defaultView)return r;let{getComputedStyle:t}=e.ownerDocument.defaultView,{display:n,visibility:i}=t(e);r=n!==`none`&&i!==`hidden`&&i!==`collapse`}return r}function hn(e,t){return!e.hasAttribute(`hidden`)&&(e.nodeName===`DETAILS`&&t&&t.nodeName!==`SUMMARY`?e.hasAttribute(`open`):!0)}function gn(e,t,n){let r=t?.tabbable?cn:sn,i=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(e){return t?.from?.contains(e)?NodeFilter.FILTER_REJECT:e.matches(r)&&pn(e)&&(!t?.accept||t.accept(e))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return t?.from&&(i.currentNode=t.from),i}function _n(e){for(;e&&!vn(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}function vn(e){let t=window.getComputedStyle(e);return/(auto|scroll)/.test(t.overflow+t.overflowX+t.overflowY)}function yn(){}function bn(e,t){let[n,r]=e,i=!1,a=t.length;for(let e=a,o=0,s=e-1;o<e;s=o++){let[a,c]=t[o],[l,u]=t[s],[,d]=t[s===0?e-1:s-1]||[0,0],f=(c-u)*(n-a)-(a-l)*(r-c);if(u<c){if(r>=u&&r<c){if(f===0)return!0;f>0&&(r===u?r>d&&(i=!i):i=!i)}}else if(c<u){if(r>c&&r<=u){if(f===0)return!0;f<0&&(r===u?r<d&&(i=!i):i=!i)}}else if(r==c&&(n>=l&&n<=a||n>=a&&n<=l))return!0}return i}function J(e,t){return g(e,t)}var xn=new Map,Sn=new Set;function Cn(){if(typeof window>`u`)return;let e=e=>{if(!e.target)return;let n=xn.get(e.target);n||(n=new Set,xn.set(e.target,n),e.target.addEventListener(`transitioncancel`,t)),n.add(e.propertyName)},t=e=>{if(!e.target)return;let n=xn.get(e.target);if(n&&(n.delete(e.propertyName),n.size===0&&(e.target.removeEventListener(`transitioncancel`,t),xn.delete(e.target)),xn.size===0)){for(let e of Sn)e();Sn.clear()}};document.body.addEventListener(`transitionrun`,e),document.body.addEventListener(`transitionend`,t)}typeof document<`u`&&(document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,Cn):Cn());function wn(e,t){let n=Tn(e,t,`left`),r=Tn(e,t,`top`),i=t.offsetWidth,a=t.offsetHeight,o=e.scrollLeft,s=e.scrollTop,c=o+e.offsetWidth,l=s+e.offsetHeight;n<=o?o=n:n+i>c&&(o+=n+i-c),r<=s?s=r:r+a>l&&(s+=r+a-l),e.scrollLeft=o,e.scrollTop=s}function Tn(e,t,n){let r=n===`left`?`offsetLeft`:`offsetTop`,i=0;for(;t.offsetParent&&(i+=t[r],t.offsetParent!==e);){if(t.offsetParent.contains(e)){i-=e[r];break}t=t.offsetParent}return i}function En(e,t){if(document.contains(e)){let t=document.scrollingElement||document.documentElement;if(window.getComputedStyle(t).overflow!==`hidden`){let{left:t,top:n}=e.getBoundingClientRect();e?.scrollIntoView?.({block:`nearest`});let{left:r,top:i}=e.getBoundingClientRect();(Math.abs(t-r)>1||Math.abs(n-i)>1)&&e.scrollIntoView?.({block:`nearest`})}else{let n=_n(e);for(;e&&n&&e!==t&&n!==t;)wn(n,e),e=n,n=_n(e)}}}var Dn={border:`0`,clip:`rect(0 0 0 0)`,"clip-path":`inset(50%)`,height:`1px`,margin:`0 -1px -1px 0`,overflow:`hidden`,padding:`0`,position:`absolute`,width:`1px`,"white-space":`nowrap`};function On(e){return t=>(e(t),()=>e(void 0))}function kn(e,t){let[n,r]=_(An(t?.()));return I(()=>{r(e()?.tagName.toLowerCase()||An(t?.()))}),n}function An(e){return Rt(e)?e:void 0}function Y(e){let[t,n]=l(e,[`as`]);if(!t.as)throw Error("[kobalte]: Polymorphic is missing the required `as` prop.");return M(P,g(n,{get component(){return t.as}}))}var jn=[`id`,`name`,`validationState`,`required`,`disabled`,`readOnly`];function Mn(e){let t=J({id:`form-control-${r()}`},e),[n,i]=_(),[a,o]=_(),[s,c]=_(),[l,u]=_();return{formControlContext:{name:()=>R(t.name)??R(t.id),dataset:L(()=>({"data-valid":R(t.validationState)===`valid`?``:void 0,"data-invalid":R(t.validationState)===`invalid`?``:void 0,"data-required":R(t.required)?``:void 0,"data-disabled":R(t.disabled)?``:void 0,"data-readonly":R(t.readOnly)?``:void 0})),validationState:()=>R(t.validationState),isRequired:()=>R(t.required),isDisabled:()=>R(t.disabled),isReadOnly:()=>R(t.readOnly),labelId:n,fieldId:a,descriptionId:s,errorMessageId:l,getAriaLabelledBy:(e,t,r)=>{let i=r!=null||n()!=null;return[r,n(),i&&t!=null?e:void 0].filter(Boolean).join(` `)||void 0},getAriaDescribedBy:e=>[s(),l(),e].filter(Boolean).join(` `)||void 0,generateId:Bt(()=>R(t.id)),registerLabel:On(i),registerField:On(o),registerDescription:On(c),registerErrorMessage:On(u)}}}var Nn=w();function Pn(){let e=F(Nn);if(e===void 0)throw Error("[kobalte]: `useFormControlContext` must be used within a `FormControlContext.Provider` component");return e}function Fn(e){let t=Pn(),n=J({id:t.generateId(`description`)},e);return I(()=>y(t.registerDescription(n.id))),M(Y,g({as:`div`},()=>t.dataset(),n))}function In(e){let t=Pn(),[n,r]=l(J({id:t.generateId(`error-message`)},e),[`forceMount`]),i=()=>t.validationState()===`invalid`;return I(()=>{i()&&y(t.registerErrorMessage(r.id))}),M(D,{get when(){return n.forceMount||i()},get children(){return M(Y,g({as:`div`},()=>t.dataset(),r))}})}function Ln(e){let t,n=Pn(),[r,i]=l(J({id:n.generateId(`label`)},e),[`ref`]),a=kn(()=>t,()=>`label`);return I(()=>y(n.registerLabel(i.id))),M(Y,g({as:`label`,ref(e){let n=W(e=>t=e,r.ref);typeof n==`function`&&n(e)},get for(){return u(()=>a()===`label`)()?n.fieldId():void 0}},()=>n.dataset(),i))}function Rn(e,t){I(n(e,e=>{if(e==null)return;let n=zn(e);n!=null&&(n.addEventListener(`reset`,t,{passive:!0}),y(()=>{n.removeEventListener(`reset`,t)}))}))}function zn(e){return Bn(e)?e.form:e.closest(`form`)}function Bn(e){return e.matches(`textarea, input, select, button`)}function Vn(e){let[t,n]=_(e.defaultValue?.()),r=L(()=>e.value?.()!==void 0),i=L(()=>r()?e.value?.():t());return[i,t=>{h(()=>{let a=ye(t,i());return Object.is(a,i())||(r()||n(a),e.onChange?.(a)),a})}]}function Hn(e){let[t,n]=Vn(e);return[()=>t()??!1,n]}function Un(e){let[t,n]=Vn(e);return[()=>t()??[],n]}function Wn(e={}){let[t,n]=Hn({value:()=>R(e.isSelected),defaultValue:()=>!!R(e.defaultIsSelected),onChange:t=>e.onSelectedChange?.(t)});return{isSelected:t,setIsSelected:t=>{!R(e.isReadOnly)&&!R(e.isDisabled)&&n(t)},toggle:()=>{!R(e.isReadOnly)&&!R(e.isDisabled)&&n(!t())}}}var Gn=Object.defineProperty,Kn=(e,t)=>{for(var n in t)Gn(e,n,{get:t[n],enumerable:!0})},qn=w();function Jn(){return F(qn)}function Yn(){let e=Jn();if(e===void 0)throw Error("[kobalte]: `useDomCollectionContext` must be used within a `DomCollectionProvider` component");return e}function Xn(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}function Zn(e,t){let n=t.ref();if(!n)return-1;let r=e.length;if(!r)return-1;for(;r--;){let t=e[r]?.ref();if(t&&Xn(t,n))return r+1}return 0}function Qn(e){let t=e.map((e,t)=>[t,e]),n=!1;return t.sort(([e,t],[r,i])=>{let a=t.ref(),o=i.ref();return a===o||!a||!o?0:Xn(a,o)?(e>r&&(n=!0),-1):(e<r&&(n=!0),1)}),n?t.map(([e,t])=>t):e}function $n(e,t){let n=Qn(e);e!==n&&t(n)}function er(e){let t=e[0],n=e[e.length-1]?.ref(),r=t?.ref()?.parentElement;for(;r;){if(n&&r.contains(n))return r;r=r.parentElement}return Wt(r).body}function tr(e,t){I(()=>{let n=setTimeout(()=>{$n(e(),t)});y(()=>clearTimeout(n))})}function nr(e,t){if(typeof IntersectionObserver!=`function`){tr(e,t);return}let n=[];I(()=>{let r=()=>{let r=!!n.length;n=e(),r&&$n(e(),t)},i=er(e()),a=new IntersectionObserver(r,{root:i});for(let t of e()){let e=t.ref();e&&a.observe(e)}y(()=>a.disconnect())})}function rr(e={}){let[t,n]=Un({value:()=>R(e.items),onChange:t=>e.onItemsChange?.(t)});nr(t,n);let r=e=>(n(t=>Ft(t,e,Zn(t,e))),()=>{n(t=>{let n=t.filter(t=>t.ref()!==e.ref());return t.length===n.length?t:n})});return{DomCollectionProvider:e=>M(qn.Provider,{value:{registerItem:r},get children(){return e.children}})}}function ir(e){let t=Yn(),n=J({shouldRegisterItem:!0},e);I(()=>{n.shouldRegisterItem&&y(t.registerItem(n.getItem()))})}function ar(e){let t=e.startIndex??0,n=e.startLevel??0,r=[],i=t=>{if(t==null)return``;let n=e.getKey??`key`,r=Rt(n)?t[n]:n(t);return r==null?``:String(r)},a=t=>{if(t==null)return``;let n=e.getTextValue??`textValue`,r=Rt(n)?t[n]:n(t);return r==null?``:String(r)},o=t=>{if(t==null)return!1;let n=e.getDisabled??`disabled`;return(Rt(n)?t[n]:n(t))??!1},s=t=>{if(t!=null)return Rt(e.getSectionChildren)?t[e.getSectionChildren]:e.getSectionChildren?.(t)};for(let c of e.dataSource){if(Rt(c)||Lt(c)){r.push({type:`item`,rawValue:c,key:String(c),textValue:String(c),disabled:o(c),level:n,index:t}),t++;continue}if(s(c)!=null){r.push({type:`section`,rawValue:c,key:``,textValue:``,disabled:!1,level:n,index:t}),t++;let i=s(c)??[];if(i.length>0){let a=ar({dataSource:i,getKey:e.getKey,getTextValue:e.getTextValue,getDisabled:e.getDisabled,getSectionChildren:e.getSectionChildren,startIndex:t,startLevel:n+1});r.push(...a),t+=a.length}}else r.push({type:`item`,rawValue:c,key:i(c),textValue:a(c),disabled:o(c),level:n,index:t}),t++}return r}function or(e,t=[]){return L(()=>{let n=ar({dataSource:R(e.dataSource),getKey:R(e.getKey),getTextValue:R(e.getTextValue),getDisabled:R(e.getDisabled),getSectionChildren:R(e.getSectionChildren)});for(let e=0;e<t.length;e++)t[e]();return e.factory(n)})}var sr=new Set([`Avst`,`Arab`,`Armi`,`Syrc`,`Samr`,`Mand`,`Thaa`,`Mend`,`Nkoo`,`Adlm`,`Rohg`,`Hebr`]),cr=new Set([`ae`,`ar`,`arc`,`bcc`,`bqi`,`ckb`,`dv`,`fa`,`glk`,`he`,`ku`,`mzn`,`nqo`,`pnb`,`ps`,`sd`,`ug`,`ur`,`yi`]);function lr(e){if(Intl.Locale){let t=new Intl.Locale(e).maximize().script??``;return sr.has(t)}let t=e.split(`-`)[0];return cr.has(t)}function ur(e){return lr(e)?`rtl`:`ltr`}function dr(){let e=typeof navigator<`u`&&(navigator.language||navigator.userLanguage)||`en-US`;return{locale:e,direction:ur(e)}}var fr=dr(),pr=new Set;function mr(){fr=dr();for(let e of pr)e(fr)}function hr(){let[e,t]=_(fr),n=L(()=>e());return c(()=>{pr.size===0&&window.addEventListener(`languagechange`,mr),pr.add(t),y(()=>{pr.delete(t),pr.size===0&&window.removeEventListener(`languagechange`,mr)})}),{locale:()=>n().locale,direction:()=>n().direction}}var gr=w();function _r(){let e=hr();return F(gr)||e}var vr=new Map;function yr(e){let{locale:t}=_r(),n=L(()=>t()+(e?Object.entries(e).sort((e,t)=>e[0]<t[0]?-1:1).join():``));return L(()=>{let r=n(),i;return vr.has(r)&&(i=vr.get(r)),i||(i=new Intl.Collator(t(),e),vr.set(r,i)),i})}var br=class e extends Set{anchorKey;currentKey;constructor(t,n,r){super(t),t instanceof e?(this.anchorKey=n||t.anchorKey,this.currentKey=r||t.currentKey):(this.anchorKey=n,this.currentKey=r)}};function xr(e){let[t,n]=Vn(e);return[()=>t()??new br,n]}function Sr(e){return Qt()?e.altKey:e.ctrlKey}function Cr(e){return Jt()?e.metaKey:e.ctrlKey}function wr(e){return new br(e)}function Tr(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function Er(e){let t=J({selectionMode:`none`,selectionBehavior:`toggle`},e),[n,r]=_(!1),[i,a]=_(),[o,s]=xr({value:L(()=>{let e=R(t.selectedKeys);return e==null?e:wr(e)}),defaultValue:L(()=>{let e=R(t.defaultSelectedKeys);return e==null?new br:wr(e)}),onChange:e=>t.onSelectionChange?.(e)}),[c,l]=_(R(t.selectionBehavior));return I(()=>{let e=o();R(t.selectionBehavior)===`replace`&&c()===`toggle`&&typeof e==`object`&&e.size===0&&l(`replace`)}),I(()=>{l(R(t.selectionBehavior)??`toggle`)}),{selectionMode:()=>R(t.selectionMode),disallowEmptySelection:()=>R(t.disallowEmptySelection)??!1,selectionBehavior:c,setSelectionBehavior:l,isFocused:n,setFocused:r,focusedKey:i,setFocusedKey:a,selectedKeys:o,setSelectedKeys:e=>{(R(t.allowDuplicateSelectionEvents)||!Tr(e,o()))&&s(e)}}}function Dr(e){let[t,n]=_(``),[r,i]=_(-1);return{typeSelectHandlers:{onKeyDown:a=>{if(R(e.isDisabled))return;let o=R(e.keyboardDelegate),s=R(e.selectionManager);if(!o.getKeyForSearch)return;let c=Or(a.key);if(!c||a.ctrlKey||a.metaKey)return;c===` `&&t().trim().length>0&&(a.preventDefault(),a.stopPropagation());let l=n(e=>e+c),u=o.getKeyForSearch(l,s.focusedKey())??o.getKeyForSearch(l);u==null&&kr(l)&&(l=l[0],u=o.getKeyForSearch(l,s.focusedKey())??o.getKeyForSearch(l)),u!=null&&(s.setFocusedKey(u),e.onTypeSelect?.(u)),clearTimeout(r()),i(window.setTimeout(()=>n(``),500))}}}}function Or(e){return e.length===1||!/^[A-Z]/i.test(e)?e:``}function kr(e){return e.split(``).every(t=>t===e[0])}function Ar(e,t,r){let i=g({selectOnFocus:()=>R(e.selectionManager).selectionBehavior()===`replace`},e),a=()=>t(),{direction:o}=_r(),s={top:0,left:0};kt(()=>R(i.isVirtualized)?void 0:a(),`scroll`,()=>{let e=a();e&&(s={top:e.scrollTop,left:e.scrollLeft})});let{typeSelectHandlers:l}=Dr({isDisabled:()=>R(i.disallowTypeAhead),keyboardDelegate:()=>R(i.keyboardDelegate),selectionManager:()=>R(i.selectionManager)}),u=()=>R(i.orientation)??`vertical`,d=e=>{G(e,l.onKeyDown),e.altKey&&e.key===`Tab`&&e.preventDefault();let n=t();if(!n?.contains(e.target))return;let r=R(i.selectionManager),a=R(i.selectOnFocus),s=t=>{t!=null&&(r.setFocusedKey(t),e.shiftKey&&r.selectionMode()===`multiple`?r.extendSelection(t):a&&!Sr(e)&&r.replaceSelection(t))},c=R(i.keyboardDelegate),d=R(i.shouldFocusWrap),f=r.focusedKey();switch(e.key){case u()===`vertical`?`ArrowDown`:`ArrowRight`:if(c.getKeyBelow){e.preventDefault();let t;t=f==null?c.getFirstKey?.():c.getKeyBelow(f),t==null&&d&&(t=c.getFirstKey?.(f)),s(t)}break;case u()===`vertical`?`ArrowUp`:`ArrowLeft`:if(c.getKeyAbove){e.preventDefault();let t;t=f==null?c.getLastKey?.():c.getKeyAbove(f),t==null&&d&&(t=c.getLastKey?.(f)),s(t)}break;case u()===`vertical`?`ArrowLeft`:`ArrowUp`:if(c.getKeyLeftOf){e.preventDefault();let t=o()===`rtl`,n;n=f==null?t?c.getFirstKey?.():c.getLastKey?.():c.getKeyLeftOf(f),s(n)}break;case u()===`vertical`?`ArrowRight`:`ArrowDown`:if(c.getKeyRightOf){e.preventDefault();let t=o()===`rtl`,n;n=f==null?t?c.getLastKey?.():c.getFirstKey?.():c.getKeyRightOf(f),s(n)}break;case`Home`:if(c.getFirstKey){e.preventDefault();let t=c.getFirstKey(f,Cr(e));t!=null&&(r.setFocusedKey(t),Cr(e)&&e.shiftKey&&r.selectionMode()===`multiple`?r.extendSelection(t):a&&r.replaceSelection(t))}break;case`End`:if(c.getLastKey){e.preventDefault();let t=c.getLastKey(f,Cr(e));t!=null&&(r.setFocusedKey(t),Cr(e)&&e.shiftKey&&r.selectionMode()===`multiple`?r.extendSelection(t):a&&r.replaceSelection(t))}break;case`PageDown`:c.getKeyPageBelow&&f!=null&&(e.preventDefault(),s(c.getKeyPageBelow(f)));break;case`PageUp`:c.getKeyPageAbove&&f!=null&&(e.preventDefault(),s(c.getKeyPageAbove(f)));break;case`a`:Cr(e)&&r.selectionMode()===`multiple`&&R(i.disallowSelectAll)!==!0&&(e.preventDefault(),r.selectAll());break;case`Escape`:e.defaultPrevented||(e.preventDefault(),R(i.disallowEmptySelection)||r.clearSelection());break;case`Tab`:if(!R(i.allowsTabNavigation)){if(e.shiftKey)n.focus();else{let e=gn(n,{tabbable:!0}),t,r;do r=e.lastChild(),r&&(t=r);while(r);t&&!t.contains(document.activeElement)&&q(t)}break}}},f=e=>{let t=R(i.selectionManager),n=R(i.keyboardDelegate),r=R(i.selectOnFocus);if(t.isFocused()){e.currentTarget.contains(e.target)||t.setFocused(!1);return}if(e.currentTarget.contains(e.target)){if(t.setFocused(!0),t.focusedKey()==null){let i=e=>{e!=null&&(t.setFocusedKey(e),r&&t.replaceSelection(e))},a=e.relatedTarget;a&&e.currentTarget.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_FOLLOWING?i(t.lastSelectedKey()??n.getLastKey?.()):i(t.firstSelectedKey()??n.getFirstKey?.())}else if(!R(i.isVirtualized)){let e=a();if(e){e.scrollTop=s.top,e.scrollLeft=s.left;let n=e.querySelector(`[data-key="${t.focusedKey()}"]`);n&&(q(n),wn(e,n))}}}},p=e=>{let t=R(i.selectionManager);e.currentTarget.contains(e.relatedTarget)||t.setFocused(!1)},m=e=>{a()===e.target&&e.preventDefault()},h=()=>{let e=R(i.autoFocus);if(!e)return;let n=R(i.selectionManager),r=R(i.keyboardDelegate),a;e===`first`&&(a=r.getFirstKey?.()),e===`last`&&(a=r.getLastKey?.());let o=n.selectedKeys();o.size&&(a=o.values().next().value),n.setFocused(!0),n.setFocusedKey(a);let s=t();s&&a==null&&!R(i.shouldUseVirtualFocus)&&q(s)};return c(()=>{i.deferAutoFocus?setTimeout(h,0):h()}),I(n([a,()=>R(i.isVirtualized),()=>R(i.selectionManager).focusedKey()],e=>{let[t,n,r]=e;if(n)r&&i.scrollToKey?.(r);else if(r&&t){let e=t.querySelector(`[data-key="${r}"]`);e&&wn(t,e)}})),{tabIndex:L(()=>{if(!R(i.shouldUseVirtualFocus))return R(i.selectionManager).focusedKey()==null?0:-1}),onKeyDown:d,onMouseDown:m,onFocusIn:f,onFocusOut:p}}function jr(e,t){let r=()=>R(e.selectionManager),i=()=>R(e.key),a=()=>R(e.shouldUseVirtualFocus),o=e=>{r().selectionMode()!==`none`&&(r().selectionMode()===`single`?r().isSelected(i())&&!r().disallowEmptySelection()?r().toggleSelection(i()):r().replaceSelection(i()):e?.shiftKey?r().extendSelection(i()):r().selectionBehavior()===`toggle`||Cr(e)||`pointerType`in e&&e.pointerType===`touch`?r().toggleSelection(i()):r().replaceSelection(i()))},s=()=>r().isSelected(i()),c=()=>R(e.disabled)||r().isDisabled(i()),l=()=>!c()&&r().canSelectItem(i()),u=null,d=t=>{l()&&(u=t.pointerType,t.pointerType===`mouse`&&t.button===0&&!R(e.shouldSelectOnPressUp)&&o(t))},f=t=>{l()&&t.pointerType===`mouse`&&t.button===0&&R(e.shouldSelectOnPressUp)&&R(e.allowsDifferentPressOrigin)&&o(t)},p=t=>{l()&&(R(e.shouldSelectOnPressUp)&&!R(e.allowsDifferentPressOrigin)||u!==`mouse`)&&o(t)},m=e=>{!l()||![`Enter`,` `].includes(e.key)||(Sr(e)?r().toggleSelection(i()):o(e))},h=e=>{c()&&e.preventDefault()},g=e=>{let n=t();a()||c()||!n||e.target===n&&r().setFocusedKey(i())},_=L(()=>{if(!(a()||c()))return i()===r().focusedKey()?0:-1}),v=L(()=>R(e.virtualized)?void 0:i());return I(n([t,i,a,()=>r().focusedKey(),()=>r().isFocused()],([t,n,r,i,a])=>{t&&n===i&&a&&!r&&document.activeElement!==t&&(e.focus?e.focus():q(t))})),{isSelected:s,isDisabled:c,allowsSelection:l,tabIndex:_,dataKey:v,onPointerDown:d,onPointerUp:f,onClick:p,onKeyDown:m,onMouseDown:h,onFocus:g}}var Mr=class{collection;state;constructor(e,t){this.collection=e,this.state=t}selectionMode(){return this.state.selectionMode()}disallowEmptySelection(){return this.state.disallowEmptySelection()}selectionBehavior(){return this.state.selectionBehavior()}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}isFocused(){return this.state.isFocused()}setFocused(e){this.state.setFocused(e)}focusedKey(){return this.state.focusedKey()}setFocusedKey(e){(e==null||this.collection().getItem(e))&&this.state.setFocusedKey(e)}selectedKeys(){return this.state.selectedKeys()}isSelected(e){if(this.state.selectionMode()===`none`)return!1;let t=this.getKey(e);return t==null?!1:this.state.selectedKeys().has(t)}isEmpty(){return this.state.selectedKeys().size===0}isSelectAll(){if(this.isEmpty())return!1;let e=this.state.selectedKeys();return this.getAllSelectableKeys().every(t=>e.has(t))}firstSelectedKey(){let e;for(let t of this.state.selectedKeys()){let n=this.collection().getItem(t),r=n?.index!=null&&e?.index!=null&&n.index<e.index;(!e||r)&&(e=n)}return e?.key}lastSelectedKey(){let e;for(let t of this.state.selectedKeys()){let n=this.collection().getItem(t),r=n?.index!=null&&e?.index!=null&&n.index>e.index;(!e||r)&&(e=n)}return e?.key}extendSelection(e){if(this.selectionMode()===`none`)return;if(this.selectionMode()===`single`){this.replaceSelection(e);return}let t=this.getKey(e);if(t==null)return;let n=this.state.selectedKeys(),r=n.anchorKey||t,i=new br(n,r,t);for(let e of this.getKeyRange(r,n.currentKey||t))i.delete(e);for(let e of this.getKeyRange(t,r))this.canSelectItem(e)&&i.add(e);this.state.setSelectedKeys(i)}getKeyRange(e,t){let n=this.collection().getItem(e),r=this.collection().getItem(t);return n&&r?n.index!=null&&r.index!=null&&n.index<=r.index?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){let n=[],r=e;for(;r!=null;){let e=this.collection().getItem(r);if(e&&e.type===`item`&&n.push(r),r===t)return n;r=this.collection().getKeyAfter(r)}return[]}getKey(e){let t=this.collection().getItem(e);return t?!t||t.type!==`item`?null:t.key:e}toggleSelection(e){if(this.selectionMode()===`none`)return;if(this.selectionMode()===`single`&&!this.isSelected(e)){this.replaceSelection(e);return}let t=this.getKey(e);if(t==null)return;let n=new br(this.state.selectedKeys());n.has(t)?n.delete(t):this.canSelectItem(t)&&(n.add(t),n.anchorKey=t,n.currentKey=t),!(this.disallowEmptySelection()&&n.size===0)&&this.state.setSelectedKeys(n)}replaceSelection(e){if(this.selectionMode()===`none`)return;let t=this.getKey(e);if(t==null)return;let n=this.canSelectItem(t)?new br([t],t,t):new br;this.state.setSelectedKeys(n)}setSelectedKeys(e){if(this.selectionMode()===`none`)return;let t=new br;for(let n of e){let e=this.getKey(n);if(e!=null&&(t.add(e),this.selectionMode()===`single`))break}this.state.setSelectedKeys(t)}selectAll(){this.selectionMode()===`multiple`&&this.state.setSelectedKeys(new Set(this.getAllSelectableKeys()))}clearSelection(){let e=this.state.selectedKeys();!this.disallowEmptySelection()&&e.size>0&&this.state.setSelectedKeys(new br)}toggleSelectAll(){this.isSelectAll()?this.clearSelection():this.selectAll()}select(e,t){this.selectionMode()!==`none`&&(this.selectionMode()===`single`?this.isSelected(e)&&!this.disallowEmptySelection()?this.toggleSelection(e):this.replaceSelection(e):this.selectionBehavior()===`toggle`||t&&t.pointerType===`touch`?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys())return!0;let t=this.selectedKeys();if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;for(let n of t)if(!e.has(n))return!1;return!0}canSelectItem(e){if(this.state.selectionMode()===`none`)return!1;let t=this.collection().getItem(e);return t!=null&&!t.disabled}isDisabled(e){let t=this.collection().getItem(e);return!t||t.disabled}getAllSelectableKeys(){let e=[];return(t=>{for(;t!=null;){if(this.canSelectItem(t)){let n=this.collection().getItem(t);if(!n)continue;n.type===`item`&&e.push(t)}t=this.collection().getKeyAfter(t)}})(this.collection().getFirstKey()),e}},Nr=class{keyMap=new Map;iterable;firstKey;lastKey;constructor(e){this.iterable=e;for(let t of e)this.keyMap.set(t.key,t);if(this.keyMap.size===0)return;let t,n=0;for(let[e,r]of this.keyMap)t?(t.nextKey=e,r.prevKey=t.key):(this.firstKey=e,r.prevKey=void 0),r.type===`item`&&(r.index=n++),t=r,t.nextKey=void 0;this.lastKey=t.key}*[Symbol.iterator](){yield*this.iterable}getSize(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){return this.keyMap.get(e)?.prevKey}getKeyAfter(e){return this.keyMap.get(e)?.nextKey}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){let t=[...this.getKeys()];return this.getItem(t[e])}};function Pr(e){let t=Er(e),n=or({dataSource:()=>R(e.dataSource),getKey:()=>R(e.getKey),getTextValue:()=>R(e.getTextValue),getDisabled:()=>R(e.getDisabled),getSectionChildren:()=>R(e.getSectionChildren),factory:t=>e.filter?new Nr(e.filter(t)):new Nr(t)},[()=>e.filter]),r=new Mr(n,t);return j(()=>{let e=t.focusedKey();e!=null&&!n().getItem(e)&&t.setFocusedKey(void 0)}),{collection:n,selectionManager:()=>r}}var X=e=>typeof e==`function`?e():e,Fr=e=>{let t=L(()=>{let t=X(e.element);if(t)return getComputedStyle(t)}),n=()=>t()?.animationName??`none`,[r,i]=_(X(e.show)?`present`:`hidden`),a=`none`;return I(r=>{let o=X(e.show);return h(()=>{if(r===o)return o;let e=a,s=n();o?i(`present`):s===`none`||t()?.display===`none`?i(`hidden`):i(r===!0&&e!==s?`hiding`:`hidden`)}),o}),I(()=>{let t=X(e.element);if(!t)return;let o=e=>{e.target===t&&(a=n())},s=e=>{let a=n().includes(e.animationName);e.target===t&&a&&r()===`hiding`&&i(`hidden`)};t.addEventListener(`animationstart`,o),t.addEventListener(`animationcancel`,s),t.addEventListener(`animationend`,s),y(()=>{t.removeEventListener(`animationstart`,o),t.removeEventListener(`animationcancel`,s),t.removeEventListener(`animationend`,s)})}),{present:()=>r()===`present`||r()===`hiding`,state:r}},Ir=`data-kb-top-layer`,Lr,Rr=!1,zr=[];function Br(e){return zr.findIndex(t=>t.node===e)}function Vr(e){return zr[Br(e)]}function Hr(e){return zr[zr.length-1].node===e}function Ur(){return zr.filter(e=>e.isPointerBlocking)}function Wr(){return[...Ur()].slice(-1)[0]}function Gr(){return Ur().length>0}function Kr(e){let t=Br(Wr()?.node);return Br(e)<t}function qr(e){zr.push(e)}function Jr(e){let t=Br(e);t<0||zr.splice(t,1)}function Yr(){for(let{node:e}of zr)e.style.pointerEvents=Kr(e)?`none`:`auto`}function Xr(e){if(Gr()&&!Rr){let t=Wt(e);Lr=document.body.style.pointerEvents,t.body.style.pointerEvents=`none`,Rr=!0}}function Zr(e){if(Gr())return;let t=Wt(e);t.body.style.pointerEvents=Lr,t.body.style.length===0&&t.body.removeAttribute(`style`),Rr=!1}var Qr={layers:zr,isTopMostLayer:Hr,hasPointerBlockingLayer:Gr,isBelowPointerBlockingLayer:Kr,addLayer:qr,removeLayer:Jr,indexOf:Br,find:Vr,assignPointerEventToLayers:Yr,disableBodyPointerEvents:Xr,restoreBodyPointerEvents:Zr};Kn({},{Button:()=>ni,Root:()=>ti});var $r=[`button`,`color`,`file`,`image`,`reset`,`submit`];function ei(e){let t=e.tagName.toLowerCase();return t===`button`?!0:t===`input`&&e.type?$r.indexOf(e.type)!==-1:!1}function ti(e){let t,[n,r]=l(J({type:`button`},e),[`ref`,`type`,`disabled`]),i=kn(()=>t,()=>`button`),a=L(()=>{let e=i();return e==null?!1:ei({tagName:e,type:n.type})}),o=L(()=>i()===`input`),s=L(()=>i()===`a`&&t?.getAttribute(`href`)!=null);return M(Y,g({as:`button`,ref(e){let r=W(e=>t=e,n.ref);typeof r==`function`&&r(e)},get type(){return a()||o()?n.type:void 0},get role(){return!a()&&!s()?`button`:void 0},get tabIndex(){return!a()&&!s()&&!n.disabled?0:void 0},get disabled(){return a()||o()?n.disabled:void 0},get"aria-disabled"(){return!a()&&!o()&&n.disabled?!0:void 0},get"data-disabled"(){return n.disabled?``:void 0}},r))}var ni=ti,ri=[`top`,`right`,`bottom`,`left`],ii=Math.min,ai=Math.max,oi=Math.round,si=Math.floor,ci=e=>({x:e,y:e}),li={left:`right`,right:`left`,bottom:`top`,top:`bottom`},ui={start:`end`,end:`start`};function di(e,t,n){return ai(e,ii(t,n))}function fi(e,t){return typeof e==`function`?e(t):e}function pi(e){return e.split(`-`)[0]}function mi(e){return e.split(`-`)[1]}function hi(e){return e===`x`?`y`:`x`}function gi(e){return e===`y`?`height`:`width`}function _i(e){return[`top`,`bottom`].includes(pi(e))?`y`:`x`}function vi(e){return hi(_i(e))}function yi(e,t,n){n===void 0&&(n=!1);let r=mi(e),i=vi(e),a=gi(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=wi(o)),[o,wi(o)]}function bi(e){let t=wi(e);return[xi(e),t,xi(t)]}function xi(e){return e.replace(/start|end/g,e=>ui[e])}function Si(e,t,n){let r=[`left`,`right`],i=[`right`,`left`],a=[`top`,`bottom`],o=[`bottom`,`top`];switch(e){case`top`:case`bottom`:return n?t?i:r:t?r:i;case`left`:case`right`:return t?a:o;default:return[]}}function Ci(e,t,n,r){let i=mi(e),a=Si(pi(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(xi)))),a}function wi(e){return e.replace(/left|right|bottom|top/g,e=>li[e])}function Ti(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ei(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:Ti(e)}function Di(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Oi(e,t,n){let{reference:r,floating:i}=e,a=_i(t),o=vi(t),s=gi(o),c=pi(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(mi(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}var ki=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=a.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=Oi(l,r,c),f=r,p={},m=0;for(let n=0;n<s.length;n++){let{name:a,fn:h}=s[n],{x:g,y:_,data:v,reset:y}=await h({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:p,rects:l,platform:o,elements:{reference:e,floating:t}});u=g??u,d=_??d,p={...p,[a]:{...p[a],...v}},y&&m<=50&&(m++,typeof y==`object`&&(y.placement&&(f=y.placement),y.rects&&(l=y.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):y.rects),{x:u,y:d}=Oi(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:p}};async function Ai(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=fi(t,e),p=Ei(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=Di(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=Di(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var ji=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=fi(e,t)||{};if(l==null)return{};let d=Ei(u),f={x:n,y:r},p=vi(i),m=gi(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,b=a.reference[m]+a.reference[p]-f[p]-a.floating[m],x=f[p]-a.reference[p],S=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),C=S?S[y]:0;(!C||!await(o.isElement==null?void 0:o.isElement(S)))&&(C=s.floating[y]||a.floating[m]);let w=b/2-x/2,T=C/2-h[m]/2-1,E=ii(d[_],T),D=ii(d[v],T),O=E,k=C-h[m]-D,A=C/2-h[m]/2+w,j=di(O,A,k),M=!c.arrow&&mi(i)!=null&&A!==j&&a.reference[m]/2-(A<O?E:D)-h[m]/2<0,ee=M?A<O?A-O:A-k:0;return{[p]:f[p]+ee,data:{[p]:j,centerOffset:A-j-ee,...M&&{alignmentOffset:ee}},reset:M}}}),Mi=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=fi(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=pi(r),_=_i(o),v=pi(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[wi(o)]:bi(o)),x=p!==`none`;!d&&x&&b.push(...Ci(o,m,p,y));let S=[o,...b],C=await Ai(t,h),w=[],T=i.flip?.overflows||[];if(l&&w.push(C[g]),u){let e=yi(r,a,y);w.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:r,overflows:w}],!w.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t)return{data:{index:e,overflows:T},reset:{placement:t}};let n=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=T.filter(e=>{if(x){let t=_i(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}};function Ni(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Pi(e){return ri.some(t=>e[t]>=0)}var Fi=function(e){return e===void 0&&(e={}),{name:`hide`,options:e,async fn(t){let{rects:n}=t,{strategy:r=`referenceHidden`,...i}=fi(e,t);switch(r){case`referenceHidden`:{let e=Ni(await Ai(t,{...i,elementContext:`reference`}),n.reference);return{data:{referenceHiddenOffsets:e,referenceHidden:Pi(e)}}}case`escaped`:{let e=Ni(await Ai(t,{...i,altBoundary:!0}),n.floating);return{data:{escapedOffsets:e,escaped:Pi(e)}}}default:return{}}}}};async function Ii(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=pi(n),s=mi(n),c=_i(n)===`y`,l=[`left`,`top`].includes(o)?-1:1,u=a&&c?-1:1,d=fi(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var Li=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await Ii(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},Ri=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i}=t,{mainAxis:a=!0,crossAxis:o=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...c}=fi(e,t),l={x:n,y:r},u=await Ai(t,c),d=_i(pi(i)),f=hi(d),p=l[f],m=l[d];if(a){let e=f===`y`?`top`:`left`,t=f===`y`?`bottom`:`right`,n=p+u[e],r=p-u[t];p=di(n,p,r)}if(o){let e=d===`y`?`top`:`left`,t=d===`y`?`bottom`:`right`,n=m+u[e],r=m-u[t];m=di(n,m,r)}let h=s.fn({...t,[f]:p,[d]:m});return{...h,data:{x:h.x-n,y:h.y-r}}}}},zi=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=fi(e,t),c=await Ai(t,s),l=pi(n),u=mi(n),d=_i(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let g=p-c.top-c.bottom,_=f-c.left-c.right,v=ii(p-c[m],g),y=ii(f-c[h],_),b=!t.middlewareData.shift,x=v,S=y;if(d?S=u||b?ii(y,_):_:x=u||b?ii(v,g):g,b&&!u){let e=ai(c.left,0),t=ai(c.right,0),n=ai(c.top,0),r=ai(c.bottom,0);d?S=f-2*(e!==0||t!==0?e+t:ai(c.left,c.right)):x=p-2*(n!==0||r!==0?n+r:ai(c.top,c.bottom))}await o({...t,availableWidth:S,availableHeight:x});let C=await i.getDimensions(a.floating);return f!==C.width||p!==C.height?{reset:{rects:!0}}:{}}}};function Bi(e){return Ui(e)?(e.nodeName||``).toLowerCase():`#document`}function Vi(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Hi(e){return((Ui(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Ui(e){return e instanceof Node||e instanceof Vi(e).Node}function Wi(e){return e instanceof Element||e instanceof Vi(e).Element}function Gi(e){return e instanceof HTMLElement||e instanceof Vi(e).HTMLElement}function Ki(e){return typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof Vi(e).ShadowRoot}function qi(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=ea(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&![`inline`,`contents`].includes(i)}function Ji(e){return[`table`,`td`,`th`].includes(Bi(e))}function Yi(e){return[`:popover-open`,`:modal`].some(t=>{try{return e.matches(t)}catch{return!1}})}function Xi(e){let t=Qi(),n=Wi(e)?ea(e):e;return n.transform!==`none`||n.perspective!==`none`||(n.containerType?n.containerType!==`normal`:!1)||!t&&(n.backdropFilter?n.backdropFilter!==`none`:!1)||!t&&(n.filter?n.filter!==`none`:!1)||[`transform`,`perspective`,`filter`].some(e=>(n.willChange||``).includes(e))||[`paint`,`layout`,`strict`,`content`].some(e=>(n.contain||``).includes(e))}function Zi(e){let t=na(e);for(;Gi(t)&&!$i(t);){if(Xi(t))return t;if(Yi(t))return null;t=na(t)}return null}function Qi(){return typeof CSS>`u`||!CSS.supports?!1:CSS.supports(`-webkit-backdrop-filter`,`none`)}function $i(e){return[`html`,`body`,`#document`].includes(Bi(e))}function ea(e){return Vi(e).getComputedStyle(e)}function ta(e){return Wi(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function na(e){if(Bi(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Ki(e)&&e.host||Hi(e);return Ki(t)?t.host:t}function ra(e){let t=na(e);return $i(t)?e.ownerDocument?e.ownerDocument.body:e.body:Gi(t)&&qi(t)?t:ra(t)}function ia(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=ra(e),i=r===e.ownerDocument?.body,a=Vi(r);return i?t.concat(a,a.visualViewport||[],qi(r)?r:[],a.frameElement&&n?ia(a.frameElement):[]):t.concat(r,ia(r,[],n))}function aa(e){let t=ea(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Gi(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=oi(n)!==a||oi(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function oa(e){return Wi(e)?e:e.contextElement}function sa(e){let t=oa(e);if(!Gi(t))return ci(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=aa(t),o=(a?oi(n.width):n.width)/r,s=(a?oi(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}var ca=ci(0);function la(e){let t=Vi(e);return!Qi()||!t.visualViewport?ca:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ua(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Vi(e)?!1:t}function da(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=oa(e),o=ci(1);t&&(r?Wi(r)&&(o=sa(r)):o=sa(e));let s=ua(a,n,r)?la(a):ci(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=Vi(a),t=r&&Wi(r)?Vi(r):r,n=e,i=n.frameElement;for(;i&&r&&t!==n;){let e=sa(i),t=i.getBoundingClientRect(),r=ea(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=Vi(i),i=n.frameElement}}return Di({width:u,height:d,x:c,y:l})}function fa(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Hi(r),s=t?Yi(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=ci(1),u=ci(0),d=Gi(r);if((d||!d&&!a)&&((Bi(r)!==`body`||qi(o))&&(c=ta(r)),Gi(r))){let e=da(r);l=sa(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x,y:n.y*l.y-c.scrollTop*l.y+u.y}}function pa(e){return Array.from(e.getClientRects())}function ma(e){return da(Hi(e)).left+ta(e).scrollLeft}function ha(e){let t=Hi(e),n=ta(e),r=e.ownerDocument.body,i=ai(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=ai(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+ma(e),s=-n.scrollTop;return ea(r).direction===`rtl`&&(o+=ai(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}function ga(e,t){let n=Vi(e),r=Hi(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=Qi();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}return{width:a,height:o,x:s,y:c}}function _a(e,t){let n=da(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Gi(e)?sa(e):ci(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function va(e,t,n){let r;if(t===`viewport`)r=ga(e,n);else if(t===`document`)r=ha(Hi(e));else if(Wi(t))r=_a(t,n);else{let n=la(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return Di(r)}function ya(e,t){let n=na(e);return n===t||!Wi(n)||$i(n)?!1:ea(n).position===`fixed`||ya(n,t)}function ba(e,t){let n=t.get(e);if(n)return n;let r=ia(e,[],!1).filter(e=>Wi(e)&&Bi(e)!==`body`),i=null,a=ea(e).position===`fixed`,o=a?na(e):e;for(;Wi(o)&&!$i(o);){let t=ea(o),n=Xi(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&[`absolute`,`fixed`].includes(i.position)||qi(o)&&!n&&ya(e,o))?r=r.filter(e=>e!==o):i=t,o=na(o)}return t.set(e,r),r}function xa(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Yi(t)?[]:ba(t,this._c):[].concat(n),r],o=a[0],s=a.reduce((e,n)=>{let r=va(t,n,i);return e.top=ai(r.top,e.top),e.right=ii(r.right,e.right),e.bottom=ii(r.bottom,e.bottom),e.left=ai(r.left,e.left),e},va(t,o,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function Sa(e){let{width:t,height:n}=aa(e);return{width:t,height:n}}function Ca(e,t,n){let r=Gi(t),i=Hi(t),a=n===`fixed`,o=da(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=ci(0);if(r||!r&&!a)if((Bi(t)!==`body`||qi(i))&&(s=ta(t)),r){let e=da(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&(c.x=ma(i));return{x:o.left+s.scrollLeft-c.x,y:o.top+s.scrollTop-c.y,width:o.width,height:o.height}}function wa(e){return ea(e).position===`static`}function Ta(e,t){return!Gi(e)||ea(e).position===`fixed`?null:t?t(e):e.offsetParent}function Ea(e,t){let n=Vi(e);if(Yi(e))return n;if(!Gi(e)){let t=na(e);for(;t&&!$i(t);){if(Wi(t)&&!wa(t))return t;t=na(t)}return n}let r=Ta(e,t);for(;r&&Ji(r)&&wa(r);)r=Ta(r,t);return r&&$i(r)&&wa(r)&&!Xi(r)?n:r||Zi(e)||n}var Da=async function(e){let t=this.getOffsetParent||Ea,n=this.getDimensions,r=await n(e.floating);return{reference:Ca(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Oa(e){return ea(e).direction===`rtl`}var ka={convertOffsetParentRelativeRectToViewportRelativeRect:fa,getDocumentElement:Hi,getClippingRect:xa,getOffsetParent:Ea,getElementRects:Da,getClientRects:pa,getDimensions:Sa,getScale:sa,isElement:Wi,isRTL:Oa};function Aa(e,t){let n=null,r,i=Hi(e);function a(){var e;clearTimeout(r),(e=n)==null||e.disconnect(),n=null}function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();let{left:l,top:u,width:d,height:f}=e.getBoundingClientRect();if(s||t(),!d||!f)return;let p=si(u),m=si(i.clientWidth-(l+d)),h=si(i.clientHeight-(u+f)),g=si(l),_={rootMargin:-p+`px `+-m+`px `+-h+`px `+-g+`px`,threshold:ai(0,ii(1,c))||1},v=!0;function y(e){let t=e[0].intersectionRatio;if(t!==c){if(!v)return o();t?o(!1,t):r=setTimeout(()=>{o(!1,1e-7)},1e3)}v=!1}try{n=new IntersectionObserver(y,{..._,root:i.ownerDocument})}catch{n=new IntersectionObserver(y,_)}n.observe(e)}return o(!0),a}function ja(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=oa(e),u=i||a?[...l?ia(l):[],...ia(t)]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});let d=l&&s?Aa(l,n):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),p.observe(t));let m,h=c?da(e):null;c&&g();function g(){let t=da(e);h&&(t.x!==h.x||t.y!==h.y||t.width!==h.width||t.height!==h.height)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var Ma=Li,Na=Ri,Pa=Mi,Fa=zi,Ia=Fi,La=ji,Ra=(e,t,n)=>{let r=new Map,i={platform:ka,...n},a={...i.platform,_c:r};return ki(e,t,{...i,platform:a})},za=w();function Ba(){let e=F(za);if(e===void 0)throw Error("[kobalte]: `usePopperContext` must be used within a `Popper` component");return e}var Va=C(`<svg display="block" viewBox="0 0 30 30" style="transform:scale(1.02)"><g><path fill="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path><path stroke="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z">`),Ha=30,Ua=Ha/2,Wa={top:180,right:-90,bottom:0,left:90};function Ga(e){let t=Ba(),[n,r]=l(J({size:Ha},e),[`ref`,`style`,`size`]),i=()=>t.currentPlacement().split(`-`)[0],a=Ka(t.contentRef),o=()=>a()?.getPropertyValue(`background-color`)||`none`,c=()=>a()?.getPropertyValue(`border-${i()}-color`)||`none`,u=()=>a()?.getPropertyValue(`border-${i()}-width`)||`0px`,d=()=>Number.parseInt(u())*2*(Ha/n.size),f=()=>`rotate(${Wa[i()]} ${Ua} ${Ua}) translate(0 2)`;return M(Y,g({as:`div`,ref(e){let r=W(t.setArrowRef,n.ref);typeof r==`function`&&r(e)},"aria-hidden":`true`,get style(){return Pt({position:`absolute`,"font-size":`${n.size}px`,width:`1em`,height:`1em`,"pointer-events":`none`,fill:o(),stroke:c(),"stroke-width":d()},n.style)}},r,{get children(){let e=Va(),t=e.firstChild;return E(()=>s(t,`transform`,f())),e}}))}function Ka(e){let[t,n]=_();return I(()=>{let t=e();t&&n(Ut(t).getComputedStyle(t))}),t}function qa(e){let t=Ba(),[n,r]=l(e,[`ref`,`style`]);return M(Y,g({as:`div`,ref(e){let r=W(t.setPositionerRef,n.ref);typeof r==`function`&&r(e)},"data-popper-positioner":``,get style(){return Pt({position:`absolute`,top:0,left:0,"min-width":`max-content`},n.style)}},r))}function Ja(e){let{x:t=0,y:n=0,width:r=0,height:i=0}=e??{};if(typeof DOMRect==`function`)return new DOMRect(t,n,r,i);let a={x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:n+i,left:t};return{...a,toJSON:()=>a}}function Ya(e,t){return{contextElement:e,getBoundingClientRect:()=>{let n=t(e);return n?Ja(n):e?e.getBoundingClientRect():Ja()}}}function Xa(e){return/^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(e)}var Za={top:`bottom`,right:`left`,bottom:`top`,left:`right`};function Qa(e,t){let[n,r]=e.split(`-`),i=Za[n];return r?n===`left`||n===`right`?`${i} ${r===`start`?`top`:`bottom`}`:r===`start`?`${i} ${t===`rtl`?`right`:`left`}`:`${i} ${t===`rtl`?`left`:`right`}`:`${i} center`}function $a(e){let t=J({getAnchorRect:e=>e?.getBoundingClientRect(),placement:`bottom`,gutter:0,shift:0,flip:!0,slide:!0,overlap:!1,sameWidth:!1,fitViewport:!1,hideWhenDetached:!1,detachedPadding:0,arrowPadding:4,overflowPadding:8},e),[n,r]=_(),[i,a]=_(),[o,s]=_(t.placement),c=()=>Ya(t.anchorRef?.(),t.getAnchorRect),{direction:l}=_r();async function u(){let e=c(),r=n(),a=i();if(!e||!r)return;let o=(a?.clientHeight||0)/2,u=typeof t.gutter==`number`?t.gutter+o:t.gutter??o;r.style.setProperty(`--kb-popper-content-overflow-padding`,`${t.overflowPadding}px`),e.getBoundingClientRect();let d=[Ma(({placement:e})=>({mainAxis:u,crossAxis:e.split(`-`)[1]?void 0:t.shift,alignmentAxis:t.shift}))];if(t.flip!==!1){let e=typeof t.flip==`string`?t.flip.split(` `):void 0;if(e!==void 0&&!e.every(Xa))throw Error("`flip` expects a spaced-delimited list of placements");d.push(Pa({padding:t.overflowPadding,fallbackPlacements:e}))}(t.slide||t.overlap)&&d.push(Na({mainAxis:t.slide,crossAxis:t.overlap,padding:t.overflowPadding})),d.push(Fa({padding:t.overflowPadding,apply({availableWidth:e,availableHeight:n,rects:i}){let a=Math.round(i.reference.width);e=Math.floor(e),n=Math.floor(n),r.style.setProperty(`--kb-popper-anchor-width`,`${a}px`),r.style.setProperty(`--kb-popper-content-available-width`,`${e}px`),r.style.setProperty(`--kb-popper-content-available-height`,`${n}px`),t.sameWidth&&(r.style.width=`${a}px`),t.fitViewport&&(r.style.maxWidth=`${e}px`,r.style.maxHeight=`${n}px`)}})),t.hideWhenDetached&&d.push(Ia({padding:t.detachedPadding})),a&&d.push(La({element:a,padding:t.arrowPadding}));let f=await Ra(e,r,{placement:t.placement,strategy:`absolute`,middleware:d,platform:{...ka,isRTL:()=>l()===`rtl`}});if(s(f.placement),t.onCurrentPlacementChange?.(f.placement),!r)return;r.style.setProperty(`--kb-popper-content-transform-origin`,Qa(f.placement,l()));let p=Math.round(f.x),m=Math.round(f.y),h;if(t.hideWhenDetached&&(h=f.middlewareData.hide?.referenceHidden?`hidden`:`visible`),Object.assign(r.style,{top:`0`,left:`0`,transform:`translate3d(${p}px, ${m}px, 0)`,visibility:h}),a&&f.middlewareData.arrow){let{x:e,y:t}=f.middlewareData.arrow,n=f.placement.split(`-`)[0];Object.assign(a.style,{left:e==null?``:`${e}px`,top:t==null?``:`${t}px`,[n]:`100%`})}}I(()=>{let e=c(),t=n();!e||!t||y(ja(e,t,u,{elementResize:typeof ResizeObserver==`function`}))}),I(()=>{let e=n(),r=t.contentRef?.();!e||!r||queueMicrotask(()=>{e.style.zIndex=getComputedStyle(r).zIndex})});let d={currentPlacement:o,contentRef:()=>t.contentRef?.(),setPositionerRef:r,setArrowRef:a};return M(za.Provider,{value:d,get children(){return t.children}})}var eo=Object.assign($a,{Arrow:Ga,Context:za,usePopperContext:Ba,Positioner:qa});function to(e){let t=t=>{t.key===Kt.Escape&&e.onEscapeKeyDown?.(t)};I(()=>{if(R(e.isDisabled))return;let n=e.ownerDocument?.()??Wt();n.addEventListener(`keydown`,t),y(()=>{n.removeEventListener(`keydown`,t)})})}var no=`interactOutside.pointerDownOutside`,ro=`interactOutside.focusOutside`;function io(e,t){let n,r=yn,i=()=>Wt(t()),a=t=>e.onPointerDownOutside?.(t),o=t=>e.onFocusOutside?.(t),s=t=>e.onInteractOutside?.(t),c=n=>{let r=n.target;return!(r instanceof HTMLElement)||r.closest(`[${Ir}]`)||!Vt(i(),r)||Vt(t(),r)?!1:!e.shouldExcludeElement?.(r)},l=e=>{function n(){let n=t(),r=e.target;if(!n||!r||!c(e))return;let i=K([a,s]);r.addEventListener(no,i,{once:!0});let o=new CustomEvent(no,{bubbles:!1,cancelable:!0,detail:{originalEvent:e,isContextMenu:e.button===2||$t(e)&&e.button===0}});r.dispatchEvent(o)}e.pointerType===`touch`?(i().removeEventListener(`click`,n),r=n,i().addEventListener(`click`,n,{once:!0})):n()},u=e=>{let n=t(),r=e.target;if(!n||!r||!c(e))return;let i=K([o,s]);r.addEventListener(ro,i,{once:!0});let a=new CustomEvent(ro,{bubbles:!1,cancelable:!0,detail:{originalEvent:e,isContextMenu:!1}});r.dispatchEvent(a)};I(()=>{R(e.isDisabled)||(n=window.setTimeout(()=>{i().addEventListener(`pointerdown`,l,!0)},0),i().addEventListener(`focusin`,u,!0),y(()=>{window.clearTimeout(n),i().removeEventListener(`click`,r),i().removeEventListener(`pointerdown`,l,!0),i().removeEventListener(`focusin`,u,!0)}))})}var ao=w();function oo(){return F(ao)}function so(e){let t,r=oo(),[i,a]=l(e,[`ref`,`disableOutsidePointerEvents`,`excludedElements`,`onEscapeKeyDown`,`onPointerDownOutside`,`onFocusOutside`,`onInteractOutside`,`onDismiss`,`bypassTopMostLayerCheck`]),o=new Set([]),s=e=>{o.add(e);let t=r?.registerNestedLayer(e);return()=>{o.delete(e),t?.()}};io({shouldExcludeElement:e=>t?i.excludedElements?.some(t=>Vt(t(),e))||[...o].some(t=>Vt(t,e)):!1,onPointerDownOutside:e=>{!t||Qr.isBelowPointerBlockingLayer(t)||!i.bypassTopMostLayerCheck&&!Qr.isTopMostLayer(t)||(i.onPointerDownOutside?.(e),i.onInteractOutside?.(e),e.defaultPrevented||i.onDismiss?.())},onFocusOutside:e=>{i.onFocusOutside?.(e),i.onInteractOutside?.(e),e.defaultPrevented||i.onDismiss?.()}},()=>t),to({ownerDocument:()=>Wt(t),onEscapeKeyDown:e=>{!t||!Qr.isTopMostLayer(t)||(i.onEscapeKeyDown?.(e),!e.defaultPrevented&&i.onDismiss&&(e.preventDefault(),i.onDismiss()))}}),c(()=>{if(!t)return;Qr.addLayer({node:t,isPointerBlocking:i.disableOutsidePointerEvents,dismiss:i.onDismiss});let e=r?.registerNestedLayer(t);Qr.assignPointerEventToLayers(),Qr.disableBodyPointerEvents(t),y(()=>{t&&(Qr.removeLayer(t),e?.(),Qr.assignPointerEventToLayers(),Qr.restoreBodyPointerEvents(t))})}),I(n([()=>t,()=>i.disableOutsidePointerEvents],([e,t])=>{if(!e)return;let n=Qr.find(e);n&&n.isPointerBlocking!==t&&(n.isPointerBlocking=t,Qr.assignPointerEventToLayers()),t&&Qr.disableBodyPointerEvents(e),y(()=>{Qr.restoreBodyPointerEvents(e)})},{defer:!0}));let u={registerNestedLayer:s};return M(ao.Provider,{value:u,get children(){return M(Y,g({as:`div`,ref(e){let n=W(e=>t=e,i.ref);typeof n==`function`&&n(e)}},a))}})}function co(e={}){let[t,n]=Hn({value:()=>R(e.open),defaultValue:()=>!!R(e.defaultOpen),onChange:t=>e.onOpenChange?.(t)}),r=()=>{n(!0)},i=()=>{n(!1)};return{isOpen:t,setIsOpen:n,open:r,close:i,toggle:()=>{t()?i():r()}}}var lo={};Kn(lo,{Description:()=>Fn,ErrorMessage:()=>In,Item:()=>ho,ItemControl:()=>go,ItemDescription:()=>_o,ItemIndicator:()=>vo,ItemInput:()=>yo,ItemLabel:()=>bo,Label:()=>xo,RadioGroup:()=>Co,Root:()=>So});var uo=w();function fo(){let e=F(uo);if(e===void 0)throw Error("[kobalte]: `useRadioGroupContext` must be used within a `RadioGroup` component");return e}var po=w();function mo(){let e=F(po);if(e===void 0)throw Error("[kobalte]: `useRadioGroupItemContext` must be used within a `RadioGroup.Item` component");return e}function ho(e){let t=Pn(),n=fo(),[i,a]=l(J({id:`${t.generateId(`item`)}-${r()}`},e),[`value`,`disabled`,`onPointerDown`]),[o,s]=_(),[c,u]=_(),[d,f]=_(),[p,m]=_(),[h,v]=_(!1),y=L(()=>n.isSelectedValue(i.value)),b=L(()=>i.disabled||t.isDisabled()||!1),x=e=>{G(e,i.onPointerDown),h()&&e.preventDefault()},S=L(()=>({...t.dataset(),"data-disabled":b()?``:void 0,"data-checked":y()?``:void 0})),C={value:()=>i.value,dataset:S,isSelected:y,isDisabled:b,inputId:o,labelId:c,descriptionId:d,inputRef:p,select:()=>n.setSelectedValue(i.value),generateId:Bt(()=>a.id),registerInput:On(s),registerLabel:On(u),registerDescription:On(f),setIsFocused:v,setInputRef:m};return M(po.Provider,{value:C,get children(){return M(Y,g({as:`div`,role:`group`,onPointerDown:x},S,a))}})}function go(e){let t=mo(),[n,r]=l(J({id:t.generateId(`control`)},e),[`onClick`,`onKeyDown`]);return M(Y,g({as:`div`,onClick:e=>{G(e,n.onClick),t.select(),t.inputRef()?.focus()},onKeyDown:e=>{G(e,n.onKeyDown),e.key===Kt.Space&&(t.select(),t.inputRef()?.focus())}},()=>t.dataset(),r))}function _o(e){let t=mo(),n=J({id:t.generateId(`description`)},e);return I(()=>y(t.registerDescription(n.id))),M(Y,g({as:`div`},()=>t.dataset(),n))}function vo(e){let t=mo(),[n,r]=l(J({id:t.generateId(`indicator`)},e),[`ref`,`forceMount`]),[i,a]=_(),{present:o}=Fr({show:()=>n.forceMount||t.isSelected(),element:()=>i()??null});return M(D,{get when(){return o()},get children(){return M(Y,g({as:`div`,ref(e){let t=W(a,n.ref);typeof t==`function`&&t(e)}},()=>t.dataset(),r))}})}function yo(e){let t=Pn(),r=fo(),i=mo(),[a,o]=l(J({id:i.generateId(`input`)},e),[`ref`,`style`,`aria-labelledby`,`aria-describedby`,`onChange`,`onFocus`,`onBlur`]),s=()=>[a[`aria-labelledby`],i.labelId(),a[`aria-labelledby`]!=null&&o[`aria-label`]!=null?o.id:void 0].filter(Boolean).join(` `)||void 0,c=()=>[a[`aria-describedby`],i.descriptionId(),r.ariaDescribedBy()].filter(Boolean).join(` `)||void 0,[u,d]=_(!1),f=e=>{if(G(e,a.onChange),e.stopPropagation(),!u()){r.setSelectedValue(i.value());let t=e.target;t.checked=i.isSelected()}d(!1)},p=e=>{G(e,a.onFocus),i.setIsFocused(!0)},m=e=>{G(e,a.onBlur),i.setIsFocused(!1)};return I(n([()=>i.isSelected(),()=>i.value()],e=>{if(!e[0]&&e[1]===i.value())return;d(!0);let t=i.inputRef();t?.dispatchEvent(new Event(`input`,{bubbles:!0,cancelable:!0})),t?.dispatchEvent(new Event(`change`,{bubbles:!0,cancelable:!0}))},{defer:!0})),I(()=>y(i.registerInput(o.id))),M(Y,g({as:`input`,ref(e){let t=W(i.setInputRef,a.ref);typeof t==`function`&&t(e)},type:`radio`,get name(){return t.name()},get value(){return i.value()},get checked(){return i.isSelected()},get required(){return t.isRequired()},get disabled(){return i.isDisabled()},get readonly(){return t.isReadOnly()},get style(){return Pt({...Dn},a.style)},get"aria-labelledby"(){return s()},get"aria-describedby"(){return c()},onChange:f,onFocus:p,onBlur:m},()=>i.dataset(),o))}function bo(e){let t=mo(),n=J({id:t.generateId(`label`)},e);return I(()=>y(t.registerLabel(n.id))),M(Y,g({as:`label`,get for(){return t.inputId()}},()=>t.dataset(),n))}function xo(e){return M(Ln,g({as:`span`},e))}function So(e){let t,[n,i,a]=l(J({id:`radiogroup-${r()}`,orientation:`vertical`},e),[`ref`,`value`,`defaultValue`,`onChange`,`orientation`,`aria-labelledby`,`aria-describedby`],jn),[o,s]=Vn({value:()=>n.value,defaultValue:()=>n.defaultValue,onChange:e=>n.onChange?.(e)}),{formControlContext:c}=Mn(i);Rn(()=>t,()=>s(n.defaultValue??``));let u=()=>c.getAriaLabelledBy(R(i.id),a[`aria-label`],n[`aria-labelledby`]),d=()=>c.getAriaDescribedBy(n[`aria-describedby`]),f=e=>e===o(),p={ariaDescribedBy:d,isSelectedValue:f,setSelectedValue:e=>{if(!(c.isReadOnly()||c.isDisabled())&&(s(e),t))for(let e of t.querySelectorAll(`[type='radio']`)){let t=e;t.checked=f(t.value)}}};return M(Nn.Provider,{value:c,get children(){return M(uo.Provider,{value:p,get children(){return M(Y,g({as:`div`,ref(e){let r=W(e=>t=e,n.ref);typeof r==`function`&&r(e)},role:`radiogroup`,get id(){return R(i.id)},get"aria-invalid"(){return c.validationState()===`invalid`||void 0},get"aria-required"(){return c.isRequired()||void 0},get"aria-disabled"(){return c.isDisabled()||void 0},get"aria-readonly"(){return c.isReadOnly()||void 0},get"aria-orientation"(){return n.orientation},get"aria-labelledby"(){return u()},get"aria-describedby"(){return d()}},()=>c.dataset(),a))}})}})}var Co=Object.assign(So,{Description:Fn,ErrorMessage:In,Item:ho,ItemControl:go,ItemDescription:_o,ItemIndicator:vo,ItemInput:yo,ItemLabel:bo,Label:xo}),wo=class{collection;ref;collator;constructor(e,t,n){this.collection=e,this.ref=t,this.collator=n}getKeyBelow(e){let t=this.collection().getKeyAfter(e);for(;t!=null;){let e=this.collection().getItem(t);if(e&&e.type===`item`&&!e.disabled)return t;t=this.collection().getKeyAfter(t)}}getKeyAbove(e){let t=this.collection().getKeyBefore(e);for(;t!=null;){let e=this.collection().getItem(t);if(e&&e.type===`item`&&!e.disabled)return t;t=this.collection().getKeyBefore(t)}}getFirstKey(){let e=this.collection().getFirstKey();for(;e!=null;){let t=this.collection().getItem(e);if(t&&t.type===`item`&&!t.disabled)return e;e=this.collection().getKeyAfter(e)}}getLastKey(){let e=this.collection().getLastKey();for(;e!=null;){let t=this.collection().getItem(e);if(t&&t.type===`item`&&!t.disabled)return e;e=this.collection().getKeyBefore(e)}}getItem(e){return this.ref?.()?.querySelector(`[data-key="${e}"]`)??null}getKeyPageAbove(e){let t=this.ref?.(),n=this.getItem(e);if(!t||!n)return;let r=Math.max(0,n.offsetTop+n.offsetHeight-t.offsetHeight),i=e;for(;i&&n&&n.offsetTop>r;)i=this.getKeyAbove(i),n=i==null?null:this.getItem(i);return i}getKeyPageBelow(e){let t=this.ref?.(),n=this.getItem(e);if(!t||!n)return;let r=Math.min(t.scrollHeight,n.offsetTop-n.offsetHeight+t.offsetHeight),i=e;for(;i&&n&&n.offsetTop<r;)i=this.getKeyBelow(i),n=i==null?null:this.getItem(i);return i}getKeyForSearch(e,t){let n=this.collator?.();if(!n)return;let r=t==null?this.getFirstKey():this.getKeyBelow(t);for(;r!=null;){let t=this.collection().getItem(r);if(t){let i=t.textValue.slice(0,e.length);if(t.textValue&&n.compare(i,e)===0)return r}r=this.getKeyBelow(r)}}};function To(e,t,n){let r=yr({usage:`search`,sensitivity:`base`});return Ar({selectionManager:()=>R(e.selectionManager),keyboardDelegate:L(()=>R(e.keyboardDelegate)||new wo(e.collection,t,r)),autoFocus:()=>R(e.autoFocus),deferAutoFocus:()=>R(e.deferAutoFocus),shouldFocusWrap:()=>R(e.shouldFocusWrap),disallowEmptySelection:()=>R(e.disallowEmptySelection),selectOnFocus:()=>R(e.selectOnFocus),disallowTypeAhead:()=>R(e.disallowTypeAhead),shouldUseVirtualFocus:()=>R(e.shouldUseVirtualFocus),allowsTabNavigation:()=>R(e.allowsTabNavigation),isVirtualized:()=>R(e.isVirtualized),scrollToKey:t=>R(e.scrollToKey)?.(t),orientation:()=>R(e.orientation)},t)}var Eo=`focusScope.autoFocusOnMount`,Do=`focusScope.autoFocusOnUnmount`,Oo={bubbles:!1,cancelable:!0},ko={stack:[],active(){return this.stack[0]},add(e){e!==this.active()&&this.active()?.pause(),this.stack=It(this.stack,e),this.stack.unshift(e)},remove(e){this.stack=It(this.stack,e),this.active()?.resume()}};function Ao(e,t){let[n,r]=_(!1),i={pause(){r(!0)},resume(){r(!1)}},a=null,o=t=>e.onMountAutoFocus?.(t),s=t=>e.onUnmountAutoFocus?.(t),c=()=>Wt(t()),l=()=>{let e=c().createElement(`span`);return e.setAttribute(`data-focus-trap`,``),e.tabIndex=0,Object.assign(e.style,Dn),e},u=()=>{let e=t();return e?ln(e,!0).filter(e=>!e.hasAttribute(`data-focus-trap`)):[]},d=()=>{let e=u();return e.length>0?e[0]:null},f=()=>{let e=u();return e.length>0?e[e.length-1]:null},p=()=>{let e=t();if(!e)return!1;let n=Ht(e);return!n||Vt(e,n)?!1:dn(n)};I(()=>{let e=t();if(!e)return;ko.add(i);let n=Ht(e);if(!Vt(e,n)){let t=new CustomEvent(Eo,Oo);e.addEventListener(Eo,o),e.dispatchEvent(t),t.defaultPrevented||setTimeout(()=>{q(d()),Ht(e)===n&&q(e)},0)}y(()=>{e.removeEventListener(Eo,o),setTimeout(()=>{let t=new CustomEvent(Do,Oo);p()&&t.preventDefault(),e.addEventListener(Do,s),e.dispatchEvent(t),t.defaultPrevented||q(n??c().body),e.removeEventListener(Do,s),ko.remove(i)},0)})}),I(()=>{let r=t();if(!r||!R(e.trapFocus)||n())return;let i=e=>{let t=e.target;t?.closest(`[${Ir}]`)||(Vt(r,t)?a=t:q(a))},o=e=>{let t=e.relatedTarget??Ht(r);t?.closest(`[${Ir}]`)||Vt(r,t)||q(a)};c().addEventListener(`focusin`,i),c().addEventListener(`focusout`,o),y(()=>{c().removeEventListener(`focusin`,i),c().removeEventListener(`focusout`,o)})}),I(()=>{let r=t();if(!r||!R(e.trapFocus)||n())return;let i=l();r.insertAdjacentElement(`afterbegin`,i);let a=l();r.insertAdjacentElement(`beforeend`,a);function o(e){let t=d(),n=f();e.relatedTarget===t?q(n):q(t)}i.addEventListener(`focusin`,o),a.addEventListener(`focusin`,o);let s=new MutationObserver(e=>{for(let t of e)t.previousSibling===a&&(a.remove(),r.insertAdjacentElement(`beforeend`,a)),t.nextSibling===i&&(i.remove(),r.insertAdjacentElement(`afterbegin`,i))});s.observe(r,{childList:!0,subtree:!1}),y(()=>{i.removeEventListener(`focusin`,o),a.removeEventListener(`focusin`,o),i.remove(),a.remove(),s.disconnect()})})}var jo=`data-live-announcer`;function Mo(e){I(()=>{R(e.isDisabled)||y(Fo(R(e.targets),R(e.root)))})}var No=new WeakMap,Po=[];function Fo(e,t=document.body){let n=new Set(e),r=new Set,i=e=>{for(let t of e.querySelectorAll(`[${jo}], [${Ir}]`))n.add(t);let t=e=>{if(n.has(e)||e.parentElement&&r.has(e.parentElement)&&e.parentElement.getAttribute(`role`)!==`row`)return NodeFilter.FILTER_REJECT;for(let t of n)if(e.contains(t))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},i=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:t}),o=t(e);if(o===NodeFilter.FILTER_ACCEPT&&a(e),o!==NodeFilter.FILTER_REJECT){let e=i.nextNode();for(;e!=null;)a(e),e=i.nextNode()}},a=e=>{let t=No.get(e)??0;e.getAttribute(`aria-hidden`)===`true`&&t===0||(t===0&&e.setAttribute(`aria-hidden`,`true`),r.add(e),No.set(e,t+1))};Po.length&&Po[Po.length-1].disconnect(),i(t);let o=new MutationObserver(e=>{for(let t of e)if(!(t.type!==`childList`||t.addedNodes.length===0)&&![...n,...r].some(e=>e.contains(t.target))){for(let e of t.removedNodes)e instanceof Element&&(n.delete(e),r.delete(e));for(let e of t.addedNodes)(e instanceof HTMLElement||e instanceof SVGElement)&&(e.dataset.liveAnnouncer===`true`||e.dataset.reactAriaTopLayer===`true`)?n.add(e):e instanceof Element&&i(e)}});o.observe(t,{childList:!0,subtree:!0});let s={observe(){o.observe(t,{childList:!0,subtree:!0})},disconnect(){o.disconnect()}};return Po.push(s),()=>{o.disconnect();for(let e of r){let t=No.get(e);if(t==null)return;t===1?(e.removeAttribute(`aria-hidden`),No.delete(e)):No.set(e,t-1)}s===Po[Po.length-1]?(Po.pop(),Po.length&&Po[Po.length-1].observe()):Po.splice(Po.indexOf(s),1)}}var Io=new Map,Lo=e=>{I(()=>{let t=X(e.style)??{},n=X(e.properties)??[],r={};for(let n in t)r[n]=e.element.style[n];let i=Io.get(e.key);i?i.activeCount++:Io.set(e.key,{activeCount:1,originalStyles:r,properties:n.map(e=>e.key)}),Object.assign(e.element.style,e.style);for(let t of n)e.element.style.setProperty(t.key,t.value);y(()=>{let t=Io.get(e.key);if(t){if(t.activeCount!==1){t.activeCount--;return}Io.delete(e.key);for(let[n,r]of Object.entries(t.originalStyles))e.element.style[n]=r;for(let n of t.properties)e.element.style.removeProperty(n);e.element.style.length===0&&e.element.removeAttribute(`style`),e.cleanup?.()}})})},Ro=(e,t)=>{switch(t){case`x`:return[e.clientWidth,e.scrollLeft,e.scrollWidth];case`y`:return[e.clientHeight,e.scrollTop,e.scrollHeight]}},zo=(e,t)=>{let n=getComputedStyle(e),r=t===`x`?n.overflowX:n.overflowY;return r===`auto`||r===`scroll`||e.tagName===`HTML`&&r===`visible`},Bo=(e,t,n)=>{let r=t===`x`&&window.getComputedStyle(e).direction===`rtl`?-1:1,i=e,a=0,o=0,s=!1;do{let[e,c,l]=Ro(i,t),u=l-e-r*c;(c!==0||u!==0)&&zo(i,t)&&(a+=u,o+=c),i===(n??document.documentElement)?s=!0:i=i._$host??i.parentElement}while(i&&!s);return[a,o]},[Vo,Ho]=_([]),Uo=e=>Vo().indexOf(e)===Vo().length-1,Wo=e=>{let t=g({element:null,enabled:!0,hideScrollbar:!0,preventScrollbarShift:!0,preventScrollbarShiftMode:`padding`,restoreScrollPosition:!0,allowPinchZoom:!1},e),n=r(),i=[0,0],a=null,o=null;I(()=>{X(t.enabled)&&(Ho(e=>[...e,n]),y(()=>{Ho(e=>e.filter(e=>e!==n))}))}),I(()=>{if(!X(t.enabled)||!X(t.hideScrollbar))return;let{body:e}=document,n=window.innerWidth-e.offsetWidth;if(X(t.preventScrollbarShift)){let r={overflow:`hidden`},i=[];n>0&&(X(t.preventScrollbarShiftMode)===`padding`?r.paddingRight=`calc(${window.getComputedStyle(e).paddingRight} + ${n}px)`:r.marginRight=`calc(${window.getComputedStyle(e).marginRight} + ${n}px)`,i.push({key:`--scrollbar-width`,value:`${n}px`}));let a=window.scrollY,o=window.scrollX;Lo({key:`prevent-scroll`,element:e,style:r,properties:i,cleanup:()=>{X(t.restoreScrollPosition)&&n>0&&window.scrollTo(o,a)}})}else Lo({key:`prevent-scroll`,element:e,style:{overflow:`hidden`}})}),I(()=>{!Uo(n)||!X(t.enabled)||(document.addEventListener(`wheel`,c,{passive:!1}),document.addEventListener(`touchstart`,s,{passive:!1}),document.addEventListener(`touchmove`,l,{passive:!1}),y(()=>{document.removeEventListener(`wheel`,c),document.removeEventListener(`touchstart`,s),document.removeEventListener(`touchmove`,l)}))});let s=e=>{i=Ko(e),a=null,o=null},c=e=>{let n=e.target,r=X(t.element),i=Go(e),a=Math.abs(i[0])>Math.abs(i[1])?`x`:`y`,o=qo(n,a,a===`x`?i[0]:i[1],r),s;s=r&&Jo(r,n)?!o:!0,s&&e.cancelable&&e.preventDefault()},l=e=>{let n=X(t.element),r=e.target,s;if(e.touches.length===2)s=!X(t.allowPinchZoom);else{if(a==null||o===null){let t=Ko(e).map((e,t)=>i[t]-e),n=Math.abs(t[0])>Math.abs(t[1])?`x`:`y`;a=n,o=n===`x`?t[0]:t[1]}if(r.type===`range`)s=!1;else{let e=qo(r,a,o,n);s=n&&Jo(n,r)?!e:!0}}s&&e.cancelable&&e.preventDefault()}},Go=e=>[e.deltaX,e.deltaY],Ko=e=>e.changedTouches[0]?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0],qo=(e,t,n,r)=>{let[i,a]=Bo(e,t,r!==null&&Jo(r,e)?r:void 0);return!(n>0&&Math.abs(i)<=1||n<0&&Math.abs(a)<1)},Jo=(e,t)=>{if(e.contains(t))return!0;let n=t;for(;n;){if(n===e)return!0;n=n._$host??n.parentElement}return!1},Yo=Wo,Xo=w();function Zo(){return F(Xo)}function Qo(){let e=Zo();if(e===void 0)throw Error("[kobalte]: `useMenuContext` must be used within a `Menu` component");return e}var $o=w();function es(){let e=F($o);if(e===void 0)throw Error("[kobalte]: `useMenuItemContext` must be used within a `Menu.Item` component");return e}var ts=w();function ns(){let e=F(ts);if(e===void 0)throw Error("[kobalte]: `useMenuRootContext` must be used within a `MenuRoot` component");return e}function rs(e){let t,n=ns(),i=Qo(),[a,o]=l(J({id:n.generateId(`item-${r()}`)},e),[`ref`,`textValue`,`disabled`,`closeOnSelect`,`checked`,`indeterminate`,`onSelect`,`onPointerMove`,`onPointerLeave`,`onPointerDown`,`onPointerUp`,`onClick`,`onKeyDown`,`onMouseDown`,`onFocus`]),[s,c]=_(),[u,d]=_(),[f,p]=_(),m=()=>i.listState().selectionManager(),h=()=>o.id,v=()=>m().focusedKey()===h(),y=()=>{a.onSelect?.(),a.closeOnSelect&&setTimeout(()=>{i.close(!0)})};ir({getItem:()=>({ref:()=>t,type:`item`,key:h(),textValue:a.textValue??f()?.textContent??t?.textContent??``,disabled:a.disabled??!1})});let b=jr({key:h,selectionManager:m,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,disabled:()=>a.disabled},()=>t),x=e=>{G(e,a.onPointerMove),e.pointerType===`mouse`&&(a.disabled?i.onItemLeave(e):(i.onItemEnter(e),e.defaultPrevented||(q(e.currentTarget),i.listState().selectionManager().setFocused(!0),i.listState().selectionManager().setFocusedKey(h()))))},S=e=>{G(e,a.onPointerLeave),e.pointerType===`mouse`&&i.onItemLeave(e)},C=e=>{G(e,a.onPointerUp),!a.disabled&&e.button===0&&y()},w=e=>{if(G(e,a.onKeyDown),!e.repeat&&!a.disabled)switch(e.key){case`Enter`:case` `:y();break}},T=L(()=>{if(a.indeterminate)return`mixed`;if(a.checked!=null)return a.checked}),E=L(()=>({"data-indeterminate":a.indeterminate?``:void 0,"data-checked":a.checked&&!a.indeterminate?``:void 0,"data-disabled":a.disabled?``:void 0,"data-highlighted":v()?``:void 0})),D={isChecked:()=>a.checked,dataset:E,setLabelRef:p,generateId:Bt(()=>o.id),registerLabel:On(c),registerDescription:On(d)};return M($o.Provider,{value:D,get children(){return M(Y,g({as:`div`,ref(e){let n=W(e=>t=e,a.ref);typeof n==`function`&&n(e)},get tabIndex(){return b.tabIndex()},get"aria-checked"(){return T()},get"aria-disabled"(){return a.disabled},get"aria-labelledby"(){return s()},get"aria-describedby"(){return u()},get"data-key"(){return b.dataKey()},get onPointerDown(){return K([a.onPointerDown,b.onPointerDown])},get onPointerUp(){return K([C,b.onPointerUp])},get onClick(){return K([a.onClick,b.onClick])},get onKeyDown(){return K([w,b.onKeyDown])},get onMouseDown(){return K([a.onMouseDown,b.onMouseDown])},get onFocus(){return K([a.onFocus,b.onFocus])},onPointerMove:x,onPointerLeave:S},E,o))}})}function is(e){let[t,n]=l(J({closeOnSelect:!1},e),[`checked`,`defaultChecked`,`onChange`,`onSelect`]),r=Wn({isSelected:()=>t.checked,defaultIsSelected:()=>t.defaultChecked,onSelectedChange:e=>t.onChange?.(e),isDisabled:()=>n.disabled});return M(rs,g({role:`menuitemcheckbox`,get checked(){return r.isSelected()},onSelect:()=>{t.onSelect?.(),r.toggle()}},n))}var as=w();function os(){return F(as)}var ss={next:(e,t)=>e===`ltr`?t===`horizontal`?`ArrowRight`:`ArrowDown`:t===`horizontal`?`ArrowLeft`:`ArrowUp`,previous:(e,t)=>ss.next(e===`ltr`?`rtl`:`ltr`,t)},cs={first:e=>e===`horizontal`?`ArrowDown`:`ArrowRight`,last:e=>e===`horizontal`?`ArrowUp`:`ArrowLeft`};function ls(e){let t=ns(),r=Qo(),i=os(),{direction:a}=_r(),[o,s]=l(J({id:t.generateId(`trigger`)},e),[`ref`,`id`,`disabled`,`onPointerDown`,`onClick`,`onKeyDown`,`onMouseOver`,`onFocus`]),c=()=>t.value();i!==void 0&&(c=()=>t.value()??o.id,i.lastValue()===void 0&&i.setLastValue(c));let d=kn(()=>r.triggerRef(),()=>`button`),f=L(()=>d()===`a`&&r.triggerRef()?.getAttribute(`href`)!=null);I(n(()=>i?.value(),e=>{f()&&e===c()&&r.triggerRef()?.focus()}));let p=()=>{i===void 0?r.toggle(!0):r.isOpen()?i.value()===c()&&i.closeMenu():(i.autoFocusMenu()||i.setAutoFocusMenu(!0),r.open(!1))},m=e=>{G(e,o.onPointerDown),e.currentTarget.dataset.pointerType=e.pointerType,!o.disabled&&e.pointerType!==`touch`&&e.button===0&&p()},h=e=>{G(e,o.onClick),o.disabled||e.currentTarget.dataset.pointerType===`touch`&&p()},_=e=>{if(G(e,o.onKeyDown),!o.disabled){if(f())switch(e.key){case`Enter`:case` `:return}switch(e.key){case`Enter`:case` `:case cs.first(t.orientation()):e.stopPropagation(),e.preventDefault(),En(e.currentTarget),r.open(`first`),i?.setAutoFocusMenu(!0),i?.setValue(c);break;case cs.last(t.orientation()):e.stopPropagation(),e.preventDefault(),r.open(`last`);break;case ss.next(a(),t.orientation()):if(i===void 0)break;e.stopPropagation(),e.preventDefault(),i.nextMenu();break;case ss.previous(a(),t.orientation()):if(i===void 0)break;e.stopPropagation(),e.preventDefault(),i.previousMenu();break}}},v=e=>{G(e,o.onMouseOver),r.triggerRef()?.dataset.pointerType!==`touch`&&!o.disabled&&i!==void 0&&i.value()!==void 0&&i.setValue(c)},b=e=>{G(e,o.onFocus),i!==void 0&&e.currentTarget.dataset.pointerType!==`touch`&&i.setValue(c)};return I(()=>y(r.registerTriggerId(o.id))),M(ti,g({ref(e){let t=W(r.setTriggerRef,o.ref);typeof t==`function`&&t(e)},get"data-kb-menu-value-trigger"(){return t.value()},get id(){return o.id},get disabled(){return o.disabled},"aria-haspopup":`true`,get"aria-expanded"(){return r.isOpen()},get"aria-controls"(){return u(()=>!!r.isOpen())()?r.contentId():void 0},get"data-highlighted"(){return c()!==void 0&&i?.value()===c()?!0:void 0},get tabIndex(){return i===void 0?void 0:i.value()===c()||i.lastValue()===c()?0:-1},onPointerDown:m,onMouseOver:v,onClick:h,onKeyDown:_,onFocus:b,role:i===void 0?void 0:`menuitem`},()=>r.dataset(),s))}var us=w();function ds(){return F(us)}function fs(e){let t,n=ns(),i=Qo(),a=os(),o=ds(),{direction:s}=_r(),[c,d]=l(J({id:n.generateId(`content-${r()}`)},e),[`ref`,`id`,`style`,`onOpenAutoFocus`,`onCloseAutoFocus`,`onEscapeKeyDown`,`onFocusOutside`,`onPointerEnter`,`onPointerMove`,`onKeyDown`,`onMouseDown`,`onFocusIn`,`onFocusOut`]),f=0,p=()=>i.parentMenuContext()==null&&a===void 0&&n.isModal(),m=To({selectionManager:i.listState().selectionManager,collection:i.listState().collection,autoFocus:i.autoFocus,deferAutoFocus:!0,shouldFocusWrap:!0,disallowTypeAhead:()=>!i.listState().selectionManager().isFocused(),orientation:()=>n.orientation()===`horizontal`?`vertical`:`horizontal`},()=>t);Ao({trapFocus:()=>p()&&i.isOpen(),onMountAutoFocus:e=>{a===void 0&&c.onOpenAutoFocus?.(e)},onUnmountAutoFocus:c.onCloseAutoFocus},()=>t);let h=e=>{if(Vt(e.currentTarget,e.target)&&(e.key===`Tab`&&i.isOpen()&&e.preventDefault(),a!==void 0&&e.currentTarget.getAttribute(`aria-haspopup`)!==`true`))switch(e.key){case ss.next(s(),n.orientation()):e.stopPropagation(),e.preventDefault(),i.close(!0),a.setAutoFocusMenu(!0),a.nextMenu();break;case ss.previous(s(),n.orientation()):if(e.currentTarget.hasAttribute(`data-closed`))break;e.stopPropagation(),e.preventDefault(),i.close(!0),a.setAutoFocusMenu(!0),a.previousMenu();break}},_=e=>{c.onEscapeKeyDown?.(e),a?.setAutoFocusMenu(!1),i.close(!0)},v=e=>{c.onFocusOutside?.(e),n.isModal()&&e.preventDefault()},b=e=>{G(e,c.onPointerEnter),i.isOpen()&&(i.parentMenuContext()?.listState().selectionManager().setFocused(!1),i.parentMenuContext()?.listState().selectionManager().setFocusedKey(void 0))},x=e=>{if(G(e,c.onPointerMove),e.pointerType!==`mouse`)return;let t=e.target,n=f!==e.clientX;Vt(e.currentTarget,t)&&n&&(i.setPointerDir(e.clientX>f?`right`:`left`),f=e.clientX)};I(()=>y(i.registerContentId(c.id)));let S={ref:W(e=>{i.setContentRef(e),t=e},c.ref),role:`menu`,get id(){return c.id},get tabIndex(){return m.tabIndex()},get"aria-labelledby"(){return i.triggerId()},onKeyDown:K([c.onKeyDown,m.onKeyDown,h]),onMouseDown:K([c.onMouseDown,m.onMouseDown]),onFocusIn:K([c.onFocusIn,m.onFocusIn]),onFocusOut:K([c.onFocusOut,m.onFocusOut]),onPointerEnter:b,onPointerMove:x,get"data-orientation"(){return n.orientation()}};return M(D,{get when(){return i.contentPresent()},get children(){return M(D,{get when(){return o===void 0||i.parentMenuContext()!=null},get fallback(){return M(Y,g({as:`div`},()=>i.dataset(),S,d))},get children(){return M(eo.Positioner,{get children(){return M(so,g({get disableOutsidePointerEvents(){return u(()=>!!p())()&&i.isOpen()},get excludedElements(){return[i.triggerRef]},bypassTopMostLayerCheck:!0,get style(){return Pt({"--kb-menu-content-transform-origin":`var(--kb-popper-content-transform-origin)`,position:`relative`},c.style)},onEscapeKeyDown:_,onFocusOutside:v,get onDismiss(){return i.close}},()=>i.dataset(),S,d))}})}})}})}function ps(e){let t,n=ns(),r=Qo(),[i,a]=l(e,[`ref`]);return Yo({element:()=>t??null,enabled:()=>r.contentPresent()&&n.preventScroll()}),M(fs,g({ref(e){let n=W(e=>{t=e},i.ref);typeof n==`function`&&n(e)}},a))}var ms=w();function hs(){let e=F(ms);if(e===void 0)throw Error("[kobalte]: `useMenuGroupContext` must be used within a `Menu.Group` component");return e}function gs(e){let t=J({id:ns().generateId(`group-${r()}`)},e),[n,i]=_(),a={generateId:Bt(()=>t.id),registerLabelId:On(i)};return M(ms.Provider,{value:a,get children(){return M(Y,g({as:`div`,role:`group`,get"aria-labelledby"(){return n()}},t))}})}function _s(e){let t=hs(),[n,r]=l(J({id:t.generateId(`label`)},e),[`id`]);return I(()=>y(t.registerLabelId(n.id))),M(Y,g({as:`span`,get id(){return n.id},"aria-hidden":`true`},r))}function vs(e){let t=Qo(),n=J({children:`▼`},e);return M(Y,g({as:`span`,"aria-hidden":`true`},()=>t.dataset(),n))}function ys(e){return M(rs,g({role:`menuitem`,closeOnSelect:!0},e))}function bs(e){let t=es(),[n,r]=l(J({id:t.generateId(`description`)},e),[`id`]);return I(()=>y(t.registerDescription(n.id))),M(Y,g({as:`div`,get id(){return n.id}},()=>t.dataset(),r))}function xs(e){let t=es(),[n,r]=l(J({id:t.generateId(`indicator`)},e),[`forceMount`]);return M(D,{get when(){return n.forceMount||t.isChecked()},get children(){return M(Y,g({as:`div`},()=>t.dataset(),r))}})}function Ss(e){let t=es(),[n,r]=l(J({id:t.generateId(`label`)},e),[`ref`,`id`]);return I(()=>y(t.registerLabel(n.id))),M(Y,g({as:`div`,ref(e){let r=W(t.setLabelRef,n.ref);typeof r==`function`&&r(e)},get id(){return n.id}},()=>t.dataset(),r))}function Cs(e){let t=Qo();return M(D,{get when(){return t.contentPresent()},get children(){return M(ce,e)}})}var ws=w();function Ts(){let e=F(ws);if(e===void 0)throw Error("[kobalte]: `useMenuRadioGroupContext` must be used within a `Menu.RadioGroup` component");return e}function Es(e){let[t,n]=l(J({id:ns().generateId(`radiogroup-${r()}`)},e),[`value`,`defaultValue`,`onChange`,`disabled`]),[i,a]=Vn({value:()=>t.value,defaultValue:()=>t.defaultValue,onChange:e=>t.onChange?.(e)}),o={isDisabled:()=>t.disabled,isSelectedValue:e=>e===i(),setSelectedValue:a};return M(ws.Provider,{value:o,get children(){return M(gs,n)}})}function Ds(e){let t=Ts(),[n,r]=l(J({closeOnSelect:!1},e),[`value`,`onSelect`]);return M(rs,g({role:`menuitemradio`,get checked(){return t.isSelectedValue(n.value)},onSelect:()=>{n.onSelect?.(),t.setSelectedValue(n.value)}},r))}function Os(e,t,n){let r=e.split(`-`)[0],i=n.getBoundingClientRect(),a=[],o=t.clientX,s=t.clientY;switch(r){case`top`:a.push([o,s+5]),a.push([i.left,i.bottom]),a.push([i.left,i.top]),a.push([i.right,i.top]),a.push([i.right,i.bottom]);break;case`right`:a.push([o-5,s]),a.push([i.left,i.top]),a.push([i.right,i.top]),a.push([i.right,i.bottom]),a.push([i.left,i.bottom]);break;case`bottom`:a.push([o,s-5]),a.push([i.right,i.top]),a.push([i.right,i.bottom]),a.push([i.left,i.bottom]),a.push([i.left,i.top]);break;case`left`:a.push([o+5,s]),a.push([i.right,i.bottom]),a.push([i.left,i.bottom]),a.push([i.left,i.top]),a.push([i.right,i.top]);break}return a}function ks(e,t){return t?bn([e.clientX,e.clientY],t):!1}function As(e){let t=ns(),n=Jn(),r=Zo(),i=os(),a=ds(),[o,s]=l(J({placement:t.orientation()===`horizontal`?`bottom-start`:`right-start`},e),[`open`,`defaultOpen`,`onOpenChange`]),c=0,u=null,d=`right`,[f,p]=_(),[m,h]=_(),[v,b]=_(),[x,S]=_(),[C,w]=_(!0),[T,E]=_(s.placement),[O,k]=_([]),[A,j]=_([]),{DomCollectionProvider:ee}=rr({items:A,onItemsChange:j}),N=co({open:()=>o.open,defaultOpen:()=>o.defaultOpen,onOpenChange:e=>o.onOpenChange?.(e)}),{present:te}=Fr({show:()=>t.forceMount()||N.isOpen(),element:()=>x()??null}),ne=Pr({selectionMode:`none`,dataSource:A}),re=e=>{w(e),N.open()},ie=(e=!1)=>{N.close(),e&&r&&r.close(!0)},ae=e=>{w(e),N.toggle()},oe=()=>{let e=x();e&&(q(e),ne.selectionManager().setFocused(!0),ne.selectionManager().setFocusedKey(void 0))},se=()=>{a==null?oe():setTimeout(()=>oe())},P=e=>{k(t=>[...t,e]);let t=r?.registerNestedMenu(e);return()=>{k(t=>It(t,e)),t?.()}},ce=e=>d===u?.side&&ks(e,u?.area),le=e=>{ce(e)&&e.preventDefault()},F=e=>{ce(e)||se()},ue=e=>{ce(e)&&e.preventDefault()};Mo({isDisabled:()=>!(r==null&&N.isOpen()&&t.isModal()),targets:()=>[x(),...O()].filter(Boolean)}),I(()=>{let e=x();if(!e||!r)return;let t=r.registerNestedMenu(e);y(()=>{t()})}),I(()=>{r===void 0&&i?.registerMenu(t.value(),[x(),...O()])}),I(()=>{r!==void 0||i===void 0||(i.value()===t.value()?(v()?.focus(),i.autoFocusMenu()&&re(!0)):ie())}),I(()=>{r!==void 0||i===void 0||N.isOpen()&&i.setValue(t.value())}),y(()=>{r===void 0&&i?.unregisterMenu(t.value())});let de={dataset:L(()=>({"data-expanded":N.isOpen()?``:void 0,"data-closed":N.isOpen()?void 0:``})),isOpen:N.isOpen,contentPresent:te,nestedMenus:O,currentPlacement:T,pointerGraceTimeoutId:()=>c,autoFocus:C,listState:()=>ne,parentMenuContext:()=>r,triggerRef:v,contentRef:x,triggerId:f,contentId:m,setTriggerRef:b,setContentRef:S,open:re,close:ie,toggle:ae,focusContent:se,onItemEnter:le,onItemLeave:F,onTriggerLeave:ue,setPointerDir:e=>d=e,setPointerGraceTimeoutId:e=>c=e,setPointerGraceIntent:e=>u=e,registerNestedMenu:P,registerItemToParentDomCollection:n?.registerItem,registerTriggerId:On(p),registerContentId:On(h)};return M(ee,{get children(){return M(Xo.Provider,{value:de,get children(){return M(D,{when:a===void 0,get fallback(){return s.children},get children(){return M(eo,g({anchorRef:v,contentRef:x,onCurrentPlacementChange:E},s))}})}})}})}function js(e){let{direction:t}=_r();return M(As,g({get placement(){return t()===`rtl`?`left-start`:`right-start`},flip:!0},e))}var Ms={close:(e,t)=>e===`ltr`?[t===`horizontal`?`ArrowLeft`:`ArrowUp`]:[t===`horizontal`?`ArrowRight`:`ArrowDown`]};function Ns(e){let t=Qo(),n=ns(),[r,i]=l(e,[`onFocusOutside`,`onKeyDown`]),{direction:a}=_r();return M(fs,g({onOpenAutoFocus:e=>{e.preventDefault()},onCloseAutoFocus:e=>{e.preventDefault()},onFocusOutside:e=>{r.onFocusOutside?.(e);let n=e.target;Vt(t.triggerRef(),n)||t.close()},onKeyDown:e=>{G(e,r.onKeyDown);let i=Vt(e.currentTarget,e.target),o=Ms.close(a(),n.orientation()).includes(e.key),s=t.parentMenuContext()!=null;i&&o&&s&&(t.close(),q(t.triggerRef()))}},i))}var Ps=[`Enter`,` `],Fs={open:(e,t)=>e===`ltr`?[...Ps,t===`horizontal`?`ArrowRight`:`ArrowDown`]:[...Ps,t===`horizontal`?`ArrowLeft`:`ArrowUp`]};function Is(e){let t,i=ns(),a=Qo(),[o,s]=l(J({id:i.generateId(`sub-trigger-${r()}`)},e),[`ref`,`id`,`textValue`,`disabled`,`onPointerMove`,`onPointerLeave`,`onPointerDown`,`onPointerUp`,`onClick`,`onKeyDown`,`onMouseDown`,`onFocus`]),c=null,d=()=>{c&&window.clearTimeout(c),c=null},{direction:f}=_r(),p=()=>o.id,m=()=>{let e=a.parentMenuContext();if(e==null)throw Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");return e.listState().selectionManager()},h=()=>a.listState().collection(),_=()=>m().focusedKey()===p(),v=jr({key:p,selectionManager:m,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,disabled:()=>o.disabled},()=>t),b=e=>{G(e,o.onClick),!a.isOpen()&&!o.disabled&&a.open(!0)},x=e=>{if(G(e,o.onPointerMove),e.pointerType!==`mouse`)return;let t=a.parentMenuContext();if(t?.onItemEnter(e),!e.defaultPrevented){if(o.disabled){t?.onItemLeave(e);return}!a.isOpen()&&!c&&(a.parentMenuContext()?.setPointerGraceIntent(null),c=window.setTimeout(()=>{a.open(!1),d()},100)),t?.onItemEnter(e),e.defaultPrevented||(a.listState().selectionManager().isFocused()&&(a.listState().selectionManager().setFocused(!1),a.listState().selectionManager().setFocusedKey(void 0)),q(e.currentTarget),t?.listState().selectionManager().setFocused(!0),t?.listState().selectionManager().setFocusedKey(p()))}},S=e=>{if(G(e,o.onPointerLeave),e.pointerType!==`mouse`)return;d();let t=a.parentMenuContext(),n=a.contentRef();if(n){t?.setPointerGraceIntent({area:Os(a.currentPlacement(),e,n),side:a.currentPlacement().split(`-`)[0]}),window.clearTimeout(t?.pointerGraceTimeoutId());let r=window.setTimeout(()=>{t?.setPointerGraceIntent(null)},300);t?.setPointerGraceTimeoutId(r)}else{if(t?.onTriggerLeave(e),e.defaultPrevented)return;t?.setPointerGraceIntent(null)}t?.onItemLeave(e)},C=e=>{G(e,o.onKeyDown),!e.repeat&&(o.disabled||Fs.open(f(),i.orientation()).includes(e.key)&&(e.stopPropagation(),e.preventDefault(),m().setFocused(!1),m().setFocusedKey(void 0),a.isOpen()||a.open(`first`),a.focusContent(),a.listState().selectionManager().setFocused(!0),a.listState().selectionManager().setFocusedKey(h().getFirstKey())))};return I(()=>{if(a.registerItemToParentDomCollection==null)throw Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");y(a.registerItemToParentDomCollection({ref:()=>t,type:`item`,key:p(),textValue:o.textValue??t?.textContent??``,disabled:o.disabled??!1}))}),I(n(()=>a.parentMenuContext()?.pointerGraceTimeoutId(),e=>{y(()=>{window.clearTimeout(e),a.parentMenuContext()?.setPointerGraceIntent(null)})})),I(()=>y(a.registerTriggerId(o.id))),y(()=>{d()}),M(Y,g({as:`div`,ref(e){let n=W(e=>{a.setTriggerRef(e),t=e},o.ref);typeof n==`function`&&n(e)},get id(){return o.id},role:`menuitem`,get tabIndex(){return v.tabIndex()},"aria-haspopup":`true`,get"aria-expanded"(){return a.isOpen()},get"aria-controls"(){return u(()=>!!a.isOpen())()?a.contentId():void 0},get"aria-disabled"(){return o.disabled},get"data-key"(){return v.dataKey()},get"data-highlighted"(){return _()?``:void 0},get"data-disabled"(){return o.disabled?``:void 0},get onPointerDown(){return K([o.onPointerDown,v.onPointerDown])},get onPointerUp(){return K([o.onPointerUp,v.onPointerUp])},get onClick(){return K([b,v.onClick])},get onKeyDown(){return K([C,v.onKeyDown])},get onMouseDown(){return K([o.onMouseDown,v.onMouseDown])},get onFocus(){return K([o.onFocus,v.onFocus])},onPointerMove:x,onPointerLeave:S},()=>a.dataset(),s))}function Ls(e){let t=os(),[n,i]=l(J({id:`menu-${r()}`,modal:!0},e),[`id`,`modal`,`preventScroll`,`forceMount`,`open`,`defaultOpen`,`onOpenChange`,`value`,`orientation`]),a=co({open:()=>n.open,defaultOpen:()=>n.defaultOpen,onOpenChange:e=>n.onOpenChange?.(e)}),o={isModal:()=>n.modal??!0,preventScroll:()=>n.preventScroll??o.isModal(),forceMount:()=>n.forceMount??!1,generateId:Bt(()=>n.id),value:()=>n.value,orientation:()=>n.orientation??t?.orientation()??`horizontal`};return M(ts.Provider,{value:o,get children(){return M(As,g({get open(){return a.isOpen()},get onOpenChange(){return a.setIsOpen}},i))}})}Kn({},{Root:()=>Rs,Separator:()=>zs});function Rs(e){let t,[n,r]=l(J({orientation:`horizontal`},e),[`ref`,`orientation`]),i=kn(()=>t,()=>`hr`);return M(Y,g({as:`hr`,ref(e){let r=W(e=>t=e,n.ref);typeof r==`function`&&r(e)},get role(){return i()===`hr`?void 0:`separator`},get"aria-orientation"(){return n.orientation===`vertical`?`vertical`:void 0},get"data-orientation"(){return n.orientation}},r))}var zs=Rs,Z={};Kn(Z,{Arrow:()=>Ga,CheckboxItem:()=>is,Content:()=>Bs,DropdownMenu:()=>Hs,Group:()=>gs,GroupLabel:()=>_s,Icon:()=>vs,Item:()=>ys,ItemDescription:()=>bs,ItemIndicator:()=>xs,ItemLabel:()=>Ss,Portal:()=>Cs,RadioGroup:()=>Es,RadioItem:()=>Ds,Root:()=>Vs,Separator:()=>Rs,Sub:()=>js,SubContent:()=>Ns,SubTrigger:()=>Is,Trigger:()=>ls});function Bs(e){let t=ns(),n=Qo(),[r,i]=l(e,[`onCloseAutoFocus`,`onInteractOutside`]),a=!1;return M(ps,g({onCloseAutoFocus:e=>{r.onCloseAutoFocus?.(e),a||q(n.triggerRef()),a=!1,e.preventDefault()},onInteractOutside:e=>{r.onInteractOutside?.(e),(!t.isModal()||e.detail.isContextMenu)&&(a=!0)}},i))}function Vs(e){return M(Ls,J({id:`dropdownmenu-${r()}`},e))}var Hs=Object.assign(Vs,{Arrow:Ga,CheckboxItem:is,Content:Bs,Group:gs,GroupLabel:_s,Icon:vs,Item:ys,ItemDescription:bs,ItemIndicator:xs,ItemLabel:Ss,Portal:Cs,RadioGroup:Es,RadioItem:Ds,Separator:Rs,Sub:js,SubContent:Ns,SubTrigger:Is,Trigger:ls}),Q={colors:{inherit:`inherit`,current:`currentColor`,transparent:`transparent`,black:`#000000`,white:`#ffffff`,neutral:{50:`#f9fafb`,100:`#f2f4f7`,200:`#eaecf0`,300:`#d0d5dd`,400:`#98a2b3`,500:`#667085`,600:`#475467`,700:`#344054`,800:`#1d2939`,900:`#101828`},darkGray:{50:`#525c7a`,100:`#49536e`,200:`#414962`,300:`#394056`,400:`#313749`,500:`#292e3d`,600:`#212530`,700:`#191c24`,800:`#111318`,900:`#0b0d10`},gray:{50:`#f9fafb`,100:`#f2f4f7`,200:`#eaecf0`,300:`#d0d5dd`,400:`#98a2b3`,500:`#667085`,600:`#475467`,700:`#344054`,800:`#1d2939`,900:`#101828`},blue:{25:`#F5FAFF`,50:`#EFF8FF`,100:`#D1E9FF`,200:`#B2DDFF`,300:`#84CAFF`,400:`#53B1FD`,500:`#2E90FA`,600:`#1570EF`,700:`#175CD3`,800:`#1849A9`,900:`#194185`},green:{25:`#F6FEF9`,50:`#ECFDF3`,100:`#D1FADF`,200:`#A6F4C5`,300:`#6CE9A6`,400:`#32D583`,500:`#12B76A`,600:`#039855`,700:`#027A48`,800:`#05603A`,900:`#054F31`},red:{50:`#fef2f2`,100:`#fee2e2`,200:`#fecaca`,300:`#fca5a5`,400:`#f87171`,500:`#ef4444`,600:`#dc2626`,700:`#b91c1c`,800:`#991b1b`,900:`#7f1d1d`,950:`#450a0a`},yellow:{25:`#FFFCF5`,50:`#FFFAEB`,100:`#FEF0C7`,200:`#FEDF89`,300:`#FEC84B`,400:`#FDB022`,500:`#F79009`,600:`#DC6803`,700:`#B54708`,800:`#93370D`,900:`#7A2E0E`},purple:{25:`#FAFAFF`,50:`#F4F3FF`,100:`#EBE9FE`,200:`#D9D6FE`,300:`#BDB4FE`,400:`#9B8AFB`,500:`#7A5AF8`,600:`#6938EF`,700:`#5925DC`,800:`#4A1FB8`,900:`#3E1C96`},teal:{25:`#F6FEFC`,50:`#F0FDF9`,100:`#CCFBEF`,200:`#99F6E0`,300:`#5FE9D0`,400:`#2ED3B7`,500:`#15B79E`,600:`#0E9384`,700:`#107569`,800:`#125D56`,900:`#134E48`},pink:{25:`#fdf2f8`,50:`#fce7f3`,100:`#fbcfe8`,200:`#f9a8d4`,300:`#f472b6`,400:`#ec4899`,500:`#db2777`,600:`#be185d`,700:`#9d174d`,800:`#831843`,900:`#500724`},cyan:{25:`#ecfeff`,50:`#cffafe`,100:`#a5f3fc`,200:`#67e8f9`,300:`#22d3ee`,400:`#06b6d4`,500:`#0891b2`,600:`#0e7490`,700:`#155e75`,800:`#164e63`,900:`#083344`}},alpha:{100:`ff`,90:`e5`,80:`cc`,70:`b3`,60:`99`,50:`80`,40:`66`,30:`4d`,20:`33`,10:`1a`,0:`00`},font:{size:{"2xs":`calc(var(--tsqd-font-size) * 0.625)`,xs:`calc(var(--tsqd-font-size) * 0.75)`,sm:`calc(var(--tsqd-font-size) * 0.875)`,md:`var(--tsqd-font-size)`,lg:`calc(var(--tsqd-font-size) * 1.125)`,xl:`calc(var(--tsqd-font-size) * 1.25)`,"2xl":`calc(var(--tsqd-font-size) * 1.5)`,"3xl":`calc(var(--tsqd-font-size) * 1.875)`,"4xl":`calc(var(--tsqd-font-size) * 2.25)`,"5xl":`calc(var(--tsqd-font-size) * 3)`,"6xl":`calc(var(--tsqd-font-size) * 3.75)`,"7xl":`calc(var(--tsqd-font-size) * 4.5)`,"8xl":`calc(var(--tsqd-font-size) * 6)`,"9xl":`calc(var(--tsqd-font-size) * 8)`},lineHeight:{xs:`calc(var(--tsqd-font-size) * 1)`,sm:`calc(var(--tsqd-font-size) * 1.25)`,md:`calc(var(--tsqd-font-size) * 1.5)`,lg:`calc(var(--tsqd-font-size) * 1.75)`,xl:`calc(var(--tsqd-font-size) * 2)`,"2xl":`calc(var(--tsqd-font-size) * 2.25)`,"3xl":`calc(var(--tsqd-font-size) * 2.5)`,"4xl":`calc(var(--tsqd-font-size) * 2.75)`,"5xl":`calc(var(--tsqd-font-size) * 3)`,"6xl":`calc(var(--tsqd-font-size) * 3.25)`,"7xl":`calc(var(--tsqd-font-size) * 3.5)`,"8xl":`calc(var(--tsqd-font-size) * 3.75)`,"9xl":`calc(var(--tsqd-font-size) * 4)`},weight:{thin:`100`,extralight:`200`,light:`300`,normal:`400`,medium:`500`,semibold:`600`,bold:`700`,extrabold:`800`,black:`900`}},breakpoints:{xs:`320px`,sm:`640px`,md:`768px`,lg:`1024px`,xl:`1280px`,"2xl":`1536px`},border:{radius:{none:`0px`,xs:`calc(var(--tsqd-font-size) * 0.125)`,sm:`calc(var(--tsqd-font-size) * 0.25)`,md:`calc(var(--tsqd-font-size) * 0.375)`,lg:`calc(var(--tsqd-font-size) * 0.5)`,xl:`calc(var(--tsqd-font-size) * 0.75)`,"2xl":`calc(var(--tsqd-font-size) * 1)`,"3xl":`calc(var(--tsqd-font-size) * 1.5)`,full:`9999px`}},size:{0:`0px`,.25:`calc(var(--tsqd-font-size) * 0.0625)`,.5:`calc(var(--tsqd-font-size) * 0.125)`,1:`calc(var(--tsqd-font-size) * 0.25)`,1.5:`calc(var(--tsqd-font-size) * 0.375)`,2:`calc(var(--tsqd-font-size) * 0.5)`,2.5:`calc(var(--tsqd-font-size) * 0.625)`,3:`calc(var(--tsqd-font-size) * 0.75)`,3.5:`calc(var(--tsqd-font-size) * 0.875)`,4:`calc(var(--tsqd-font-size) * 1)`,4.5:`calc(var(--tsqd-font-size) * 1.125)`,5:`calc(var(--tsqd-font-size) * 1.25)`,5.5:`calc(var(--tsqd-font-size) * 1.375)`,6:`calc(var(--tsqd-font-size) * 1.5)`,6.5:`calc(var(--tsqd-font-size) * 1.625)`,7:`calc(var(--tsqd-font-size) * 1.75)`,8:`calc(var(--tsqd-font-size) * 2)`,9:`calc(var(--tsqd-font-size) * 2.25)`,10:`calc(var(--tsqd-font-size) * 2.5)`,11:`calc(var(--tsqd-font-size) * 2.75)`,12:`calc(var(--tsqd-font-size) * 3)`,14:`calc(var(--tsqd-font-size) * 3.5)`,16:`calc(var(--tsqd-font-size) * 4)`,20:`calc(var(--tsqd-font-size) * 5)`,24:`calc(var(--tsqd-font-size) * 6)`,28:`calc(var(--tsqd-font-size) * 7)`,32:`calc(var(--tsqd-font-size) * 8)`,36:`calc(var(--tsqd-font-size) * 9)`,40:`calc(var(--tsqd-font-size) * 10)`,44:`calc(var(--tsqd-font-size) * 11)`,48:`calc(var(--tsqd-font-size) * 12)`,52:`calc(var(--tsqd-font-size) * 13)`,56:`calc(var(--tsqd-font-size) * 14)`,60:`calc(var(--tsqd-font-size) * 15)`,64:`calc(var(--tsqd-font-size) * 16)`,72:`calc(var(--tsqd-font-size) * 18)`,80:`calc(var(--tsqd-font-size) * 20)`,96:`calc(var(--tsqd-font-size) * 24)`},shadow:{xs:(e=`rgb(0 0 0 / 0.1)`)=>`0 1px 2px 0 rgb(0 0 0 / 0.05)`,sm:(e=`rgb(0 0 0 / 0.1)`)=>`0 1px 3px 0 ${e}, 0 1px 2px -1px ${e}`,md:(e=`rgb(0 0 0 / 0.1)`)=>`0 4px 6px -1px ${e}, 0 2px 4px -2px ${e}`,lg:(e=`rgb(0 0 0 / 0.1)`)=>`0 10px 15px -3px ${e}, 0 4px 6px -4px ${e}`,xl:(e=`rgb(0 0 0 / 0.1)`)=>`0 20px 25px -5px ${e}, 0 8px 10px -6px ${e}`,"2xl":(e=`rgb(0 0 0 / 0.25)`)=>`0 25px 50px -12px ${e}`,inner:(e=`rgb(0 0 0 / 0.05)`)=>`inset 0 2px 4px 0 ${e}`,none:()=>`none`},zIndices:{hide:-1,auto:`auto`,base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800}},Us=C(`<svg width=14 height=14 viewBox="0 0 14 14"fill=none xmlns=http://www.w3.org/2000/svg><path d="M13 13L9.00007 9M10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667Z"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>`),Ws=C(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),Gs=C(`<svg width=10 height=6 viewBox="0 0 10 6"fill=none xmlns=http://www.w3.org/2000/svg><path d="M1 1L5 5L9 1"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>`),Ks=C(`<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 13.3333V2.66667M8 2.66667L4 6.66667M8 2.66667L12 6.66667"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>`),qs=C(`<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 2.66667V13.3333M8 13.3333L4 9.33333M8 13.3333L12 9.33333"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>`),Js=C(`<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2v2m0 16v2M4 12H2m4.314-5.686L4.9 4.9m12.786 1.414L19.1 4.9M6.314 17.69 4.9 19.104m12.786-1.414 1.414 1.414M22 12h-2m-3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),Ys=C(`<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M22 15.844a10.424 10.424 0 0 1-4.306.925c-5.779 0-10.463-4.684-10.463-10.462 0-1.536.33-2.994.925-4.307A10.464 10.464 0 0 0 2 11.538C2 17.316 6.684 22 12.462 22c4.243 0 7.896-2.526 9.538-6.156Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),Xs=C(`<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 21h8m-4-4v4m-5.2-4h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 14.72 22 13.88 22 12.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 3 18.88 3 17.2 3H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 5.28 2 6.12 2 7.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 17 5.12 17 6.8 17Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),Zs=C(`<svg stroke=currentColor fill=currentColor stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M0 0h24v24H0z"></path><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z">`),Qs=C(`<svg stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M24 .01c0-.01 0-.01 0 0L0 0v24h24V.01zM0 0h24v24H0V0zm0 0h24v24H0V0z"></path><path d="M22.99 9C19.15 5.16 13.8 3.76 8.84 4.78l2.52 2.52c3.47-.17 6.99 1.05 9.63 3.7l2-2zm-4 4a9.793 9.793 0 00-4.49-2.56l3.53 3.53.96-.97zM2 3.05L5.07 6.1C3.6 6.82 2.22 7.78 1 9l1.99 2c1.24-1.24 2.67-2.16 4.2-2.77l2.24 2.24A9.684 9.684 0 005 13v.01L6.99 15a7.042 7.042 0 014.92-2.06L18.98 20l1.27-1.26L3.29 1.79 2 3.05zM9 17l3 3 3-3a4.237 4.237 0 00-6 0z">`),$s=C(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.3951 19.3711L9.97955 20.6856C10.1533 21.0768 10.4368 21.4093 10.7958 21.6426C11.1547 21.8759 11.5737 22.0001 12.0018 22C12.4299 22.0001 12.8488 21.8759 13.2078 21.6426C13.5667 21.4093 13.8503 21.0768 14.024 20.6856L14.6084 19.3711C14.8165 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5678 17.8941 17.0784 17.9478L18.5084 18.1C18.9341 18.145 19.3637 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8715 16.635 20.9735 16.2103 20.9511 15.7829C20.9286 15.3555 20.7825 14.9438 20.5307 14.5978L19.684 13.4344C19.3825 13.0171 19.2214 12.5148 19.224 12C19.2239 11.4866 19.3865 10.9864 19.6884 10.5711L20.5351 9.40778C20.787 9.06175 20.933 8.65007 20.9555 8.22267C20.978 7.79528 20.8759 7.37054 20.6618 7C20.4479 6.62923 20.131 6.32849 19.7496 6.13423C19.3681 5.93997 18.9386 5.86053 18.5129 5.90556L17.0829 6.05778C16.5722 6.11141 16.0577 6.00212 15.6129 5.74556C15.17 5.48825 14.82 5.09736 14.6129 4.62889L14.024 3.31444C13.8503 2.92317 13.5667 2.59072 13.2078 2.3574C12.8488 2.12408 12.4299 1.99993 12.0018 2C11.5737 1.99993 11.1547 2.12408 10.7958 2.3574C10.4368 2.59072 10.1533 2.92317 9.97955 3.31444L9.3951 4.62889C9.18803 5.09736 8.83798 5.48825 8.3951 5.74556C7.95032 6.00212 7.43577 6.11141 6.9251 6.05778L5.49066 5.90556C5.06499 5.86053 4.6354 5.93997 4.25397 6.13423C3.87255 6.32849 3.55567 6.62923 3.34177 7C3.12759 7.37054 3.02555 7.79528 3.04804 8.22267C3.07052 8.65007 3.21656 9.06175 3.46844 9.40778L4.3151 10.5711C4.61704 10.9864 4.77964 11.4866 4.77955 12C4.77964 12.5134 4.61704 13.0137 4.3151 13.4289L3.46844 14.5922C3.21656 14.9382 3.07052 15.3499 3.04804 15.7773C3.02555 16.2047 3.12759 16.6295 3.34177 17C3.55589 17.3706 3.8728 17.6712 4.25417 17.8654C4.63554 18.0596 5.06502 18.1392 5.49066 18.0944L6.92066 17.9422C7.43133 17.8886 7.94587 17.9979 8.39066 18.2544C8.83519 18.511 9.18687 18.902 9.3951 19.3711Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><path d="M12 15C13.6568 15 15 13.6569 15 12C15 10.3431 13.6568 9 12 9C10.3431 9 8.99998 10.3431 8.99998 12C8.99998 13.6569 10.3431 15 12 15Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),ec=C(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M16 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M11.5 12.5L17 7M17 7H12M17 7V12M6.2 21H8.8C9.9201 21 10.4802 21 10.908 20.782C11.2843 20.5903 11.5903 20.2843 11.782 19.908C12 19.4802 12 18.9201 12 17.8V15.2C12 14.0799 12 13.5198 11.782 13.092C11.5903 12.7157 11.2843 12.4097 10.908 12.218C10.4802 12 9.92011 12 8.8 12H6.2C5.0799 12 4.51984 12 4.09202 12.218C3.71569 12.4097 3.40973 12.7157 3.21799 13.092C3 13.5198 3 14.0799 3 15.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),tc=C(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path class=copier d="M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round stroke=currentColor>`),nc=C(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M2.5 21.4998L8.04927 19.3655C8.40421 19.229 8.58168 19.1607 8.74772 19.0716C8.8952 18.9924 9.0358 18.901 9.16804 18.7984C9.31692 18.6829 9.45137 18.5484 9.72028 18.2795L21 6.99982C22.1046 5.89525 22.1046 4.10438 21 2.99981C19.8955 1.89525 18.1046 1.89524 17 2.99981L5.72028 14.2795C5.45138 14.5484 5.31692 14.6829 5.20139 14.8318C5.09877 14.964 5.0074 15.1046 4.92823 15.2521C4.83911 15.4181 4.77085 15.5956 4.63433 15.9506L2.5 21.4998ZM2.5 21.4998L4.55812 16.1488C4.7054 15.7659 4.77903 15.5744 4.90534 15.4867C5.01572 15.4101 5.1523 15.3811 5.2843 15.4063C5.43533 15.4351 5.58038 15.5802 5.87048 15.8703L8.12957 18.1294C8.41967 18.4195 8.56472 18.5645 8.59356 18.7155C8.61877 18.8475 8.58979 18.9841 8.51314 19.0945C8.42545 19.2208 8.23399 19.2944 7.85107 19.4417L2.5 21.4998Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),rc=C(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),ic=C(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 9L15 15M15 9L9 15M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke=#F04438 stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),ac=C(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 xmlns=http://www.w3.org/2000/svg><rect class=list width=20 height=20 y=2 x=2 rx=2></rect><line class=list-item y1=7 y2=7 x1=6 x2=18></line><line class=list-item y2=12 y1=12 x1=6 x2=18></line><line class=list-item y1=17 y2=17 x1=6 x2=18>`),oc=C(`<svg viewBox="0 0 24 24"height=20 width=20 fill=none xmlns=http://www.w3.org/2000/svg><path d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),sc=C(`<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),cc=C(`<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><animateTransform attributeName=transform attributeType=XML type=rotate from=0 to=360 dur=2s repeatCount=indefinite>`),lc=C(`<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),uc=C(`<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.5 15V9M14.5 15V9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),dc=C(`<svg version=1.0 viewBox="0 0 633 633"><linearGradient x1=-666.45 x2=-666.45 y1=163.28 y2=163.99 gradientTransform="matrix(633 0 0 633 422177 -103358)"gradientUnits=userSpaceOnUse><stop stop-color=#6BDAFF offset=0></stop><stop stop-color=#F9FFB5 offset=.32></stop><stop stop-color=#FFA770 offset=.71></stop><stop stop-color=#FF7373 offset=1></stop></linearGradient><circle cx=316.5 cy=316.5 r=316.5></circle><defs><filter x=-137.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=316.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=316.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=316.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=272.2 y=308 width=176.9 height=129.3 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=272.2 y=308 width=176.9 height=129.3 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><line x1=436 x2=431 y1=403.2 y2=431.8 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=291 x2=280 y1=341.5 y2=403.5 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=332.9 x2=328.6 y1=384.1 y2=411.2 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><linearGradient x1=-670.75 x2=-671.59 y1=164.4 y2=164.49 gradientTransform="matrix(-184.16 -32.472 -11.461 64.997 -121359 -32126)"gradientUnits=userSpaceOnUse><stop stop-color=#EE2700 offset=0></stop><stop stop-color=#FF008E offset=1></stop></linearGradient><path d="m344.1 363 97.7 17.2c5.8 2.1 8.2 6.1 7.1 12.1s-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1 0.8-12.8s8.3-4.4 13.7-2.1l55.2 53.6z"clip-rule=evenodd fill-rule=evenodd></path><line x1=428.2 x2=429.1 y1=384.5 y2=378 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=395.2 x2=396.1 y1=379.5 y2=373 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=362.2 x2=363.1 y1=373.5 y2=367.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=324.2 x2=328.4 y1=351.3 y2=347.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=303.2 x2=307.4 y1=331.3 y2=327.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line></g><defs><filter x=73.2 y=113.8 width=280.6 height=317.4 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=73.2 y=113.8 width=280.6 height=317.4 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-672.16 x2=-672.16 y1=165.03 y2=166.03 gradientTransform="matrix(-100.18 48.861 97.976 200.88 -83342 -93.059)"gradientUnits=userSpaceOnUse><stop stop-color=#A17500 offset=0></stop><stop stop-color=#5D2100 offset=1></stop></linearGradient><path d="m192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.1-3 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6s-10.8-51.9-22.1-99.6l-25.3 4.6"clip-rule=evenodd fill-rule=evenodd></path><g stroke=#2F8A00><linearGradient x1=-660.23 x2=-660.23 y1=166.72 y2=167.72 gradientTransform="matrix(92.683 4.8573 -2.0259 38.657 61680 -3088.6)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-661.36 x2=-661.36 y1=164.18 y2=165.18 gradientTransform="matrix(110 5.7648 -6.3599 121.35 73933 -15933)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.4 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20.2 49.6-53.2 49.6-53.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.79 x2=-656.79 y1=165.15 y2=166.15 gradientTransform="matrix(62.954 3.2993 -3.5023 66.828 42156 -8754.1)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9c-0.8-21.9 6-38 20.6-48.2s29.8-15.4 45.5-15.3c-6.1 21.4-14.5 35.8-25.2 43.4s-24.4 14.2-40.9 20.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-663.07 x2=-663.07 y1=165.44 y2=166.44 gradientTransform="matrix(152.47 7.9907 -3.0936 59.029 101884 -4318.7)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c31.9-30 64.1-39.7 96.7-29s50.8 30.4 54.6 59.1c-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-662.57 x2=-662.57 y1=164.44 y2=165.44 gradientTransform="matrix(136.46 7.1517 -5.2163 99.533 91536 -11442)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c35.8-7.6 65.6-0.2 89.2 22s37.7 49 42.3 80.3c-39.8-9.7-68.3-23.8-85.5-42.4s-32.5-38.5-46-59.9z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.43 x2=-656.43 y1=163.86 y2=164.86 gradientTransform="matrix(60.866 3.1899 -8.7773 167.48 41560 -25168)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6s-3.6 63.1 8.7 99.6c27.4-40.3 43.2-69.6 47.4-88s5.6-44.1 4-77.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><path d="m196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4s-9.5 33-11.1 45.1"fill=none stroke-linecap=round stroke-width=8></path><path d="m194.9 185.7c-24.4 1.7-43.8 9-58.1 21.8s-24.7 25.4-31.3 37.8"fill=none stroke-linecap=round stroke-width=8></path><path d="m204.5 176.4c29.7-6.7 52-8.4 67-5.1s26.9 8.6 35.8 15.9"fill=none stroke-linecap=round stroke-width=8></path><path d="m196.5 181.4c20.3 9.9 38.2 20.5 53.9 31.9s27.4 22.1 35.1 32"fill=none stroke-linecap=round stroke-width=8></path></g></g><defs><filter x=50.5 y=399 width=532 height=633 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=50.5 y=399 width=532 height=633 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-666.06 x2=-666.23 y1=163.36 y2=163.75 gradientTransform="matrix(532 0 0 633 354760 -102959)"gradientUnits=userSpaceOnUse><stop stop-color=#FFF400 offset=0></stop><stop stop-color=#3C8700 offset=1></stop></linearGradient><ellipse cx=316.5 cy=715.5 rx=266 ry=316.5></ellipse></g><defs><filter x=391 y=-24 width=288 height=283 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=391 y=-24 width=288 height=283 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-664.56 x2=-664.56 y1=163.79 y2=164.79 gradientTransform="matrix(227 0 0 227 151421 -37204)"gradientUnits=userSpaceOnUse><stop stop-color=#FFDF00 offset=0></stop><stop stop-color=#FF9D00 offset=1></stop></linearGradient><circle cx=565.5 cy=89.5 r=113.5></circle><linearGradient x1=-644.5 x2=-645.77 y1=342 y2=342 gradientTransform="matrix(30 0 0 1 19770 -253)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=427 x2=397 y1=89 y2=89 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-641.56 x2=-642.83 y1=196.02 y2=196.07 gradientTransform="matrix(26.5 0 0 5.5 17439 -1025.5)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=430.5 x2=404 y1=55.5 y2=50 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-643.73 x2=-645 y1=185.83 y2=185.9 gradientTransform="matrix(29 0 0 8 19107 -1361)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=431 x2=402 y1=122 y2=130 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-638.94 x2=-640.22 y1=177.09 y2=177.39 gradientTransform="matrix(24 0 0 13 15783 -2145)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=442 x2=418 y1=153 y2=166 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-633.42 x2=-634.7 y1=172.41 y2=173.31 gradientTransform="matrix(20 0 0 19 13137 -3096)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=464 x2=444 y1=180 y2=199 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-619.05 x2=-619.52 y1=170.82 y2=171.82 gradientTransform="matrix(13.83 0 0 22.85 9050 -3703.4)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=491.4 x2=477.5 y1=203 y2=225.9 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-578.5 x2=-578.63 y1=170.31 y2=171.31 gradientTransform="matrix(7.5 0 0 24.5 4860 -3953)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=524.5 x2=517 y1=219.5 y2=244 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=666.5 x2=666.5 y1=170.31 y2=171.31 gradientTransform="matrix(.5 0 0 24.5 231.5 -3944)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=564.5 x2=565 y1=228.5 y2=253 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12>`);function fc(){return Us()}function pc(){return Ws()}function mc(){return Gs()}function hc(){return Ks()}function gc(){return qs()}function _c(){return(()=>{var e=qs();return e.style.setProperty(`transform`,`rotate(90deg)`),e})()}function vc(){return(()=>{var e=qs();return e.style.setProperty(`transform`,`rotate(-90deg)`),e})()}function yc(){return Js()}function bc(){return Ys()}function xc(){return Xs()}function Sc(){return Zs()}function Cc(){return Qs()}function wc(){return $s()}function Tc(){return ec()}function Ec(){return tc()}function Dc(){return nc()}function Oc(e){return(()=>{var t=rc(),n=t.firstChild;return E(()=>s(n,`stroke`,e.theme===`dark`?`#12B76A`:`#027A48`)),t})()}function kc(){return ic()}function Ac(){return ac()}function jc(e){return[M(D,{get when(){return e.checked},get children(){var t=rc(),n=t.firstChild;return E(()=>s(n,`stroke`,e.theme===`dark`?`#9B8AFB`:`#6938EF`)),t}}),M(D,{get when(){return!e.checked},get children(){var t=oc(),n=t.firstChild;return E(()=>s(n,`stroke`,e.theme===`dark`?`#9B8AFB`:`#6938EF`)),t}})]}function Mc(){return sc()}function Nc(){return cc()}function Pc(){return lc()}function Fc(){return uc()}function Ic(){let e=r();return(()=>{var t=dc(),n=t.firstChild,r=n.nextSibling,i=r.nextSibling,a=i.firstChild,o=i.nextSibling,c=o.firstChild,l=o.nextSibling,u=l.nextSibling,d=u.firstChild,f=u.nextSibling,p=f.firstChild,m=f.nextSibling,h=m.nextSibling,g=h.firstChild,_=h.nextSibling,v=_.firstChild,y=_.nextSibling,b=y.nextSibling,x=b.firstChild,S=b.nextSibling,C=S.firstChild,w=S.nextSibling,T=w.nextSibling,E=T.firstChild,D=T.nextSibling,O=D.firstChild,k=D.nextSibling,A=k.nextSibling,j=A.firstChild,M=A.nextSibling,ee=M.firstChild,N=M.nextSibling,te=N.nextSibling,ne=te.firstChild,re=te.nextSibling,ie=re.firstChild,ae=re.nextSibling,oe=ae.firstChild.nextSibling.nextSibling.nextSibling,se=oe.nextSibling,P=ae.nextSibling,ce=P.firstChild,le=P.nextSibling,F=le.firstChild,ue=le.nextSibling,I=ue.firstChild,de=I.nextSibling,fe=de.nextSibling.firstChild,L=fe.nextSibling,pe=L.nextSibling,me=pe.nextSibling,he=me.nextSibling,ge=he.nextSibling,_e=ge.nextSibling,R=_e.nextSibling,ve=R.nextSibling,ye=ve.nextSibling,be=ye.nextSibling,xe=be.nextSibling,Se=ue.nextSibling,Ce=Se.firstChild,we=Se.nextSibling,Te=we.firstChild,z=we.nextSibling,Ee=z.firstChild,De=Ee.nextSibling,Oe=z.nextSibling,ke=Oe.firstChild,Ae=Oe.nextSibling,je=Ae.firstChild,Me=Ae.nextSibling,Ne=Me.firstChild,Pe=Ne.nextSibling,Fe=Pe.nextSibling,Ie=Fe.nextSibling,Le=Ie.nextSibling,Re=Le.nextSibling,ze=Re.nextSibling,B=ze.nextSibling,Be=B.nextSibling,Ve=Be.nextSibling,He=Ve.nextSibling,Ue=He.nextSibling,V=Ue.nextSibling,We=V.nextSibling,Ge=We.nextSibling,Ke=Ge.nextSibling,qe=Ke.nextSibling,Je=qe.nextSibling;return s(n,`id`,`a-${e}`),s(r,`fill`,`url(#a-${e})`),s(a,`id`,`am-${e}`),s(o,`id`,`b-${e}`),s(c,`filter`,`url(#am-${e})`),s(l,`mask`,`url(#b-${e})`),s(d,`id`,`ah-${e}`),s(f,`id`,`k-${e}`),s(p,`filter`,`url(#ah-${e})`),s(m,`mask`,`url(#k-${e})`),s(g,`id`,`ae-${e}`),s(_,`id`,`j-${e}`),s(v,`filter`,`url(#ae-${e})`),s(y,`mask`,`url(#j-${e})`),s(x,`id`,`ai-${e}`),s(S,`id`,`i-${e}`),s(C,`filter`,`url(#ai-${e})`),s(w,`mask`,`url(#i-${e})`),s(E,`id`,`aj-${e}`),s(D,`id`,`h-${e}`),s(O,`filter`,`url(#aj-${e})`),s(k,`mask`,`url(#h-${e})`),s(j,`id`,`ag-${e}`),s(M,`id`,`g-${e}`),s(ee,`filter`,`url(#ag-${e})`),s(N,`mask`,`url(#g-${e})`),s(ne,`id`,`af-${e}`),s(re,`id`,`f-${e}`),s(ie,`filter`,`url(#af-${e})`),s(ae,`mask`,`url(#f-${e})`),s(oe,`id`,`m-${e}`),s(se,`fill`,`url(#m-${e})`),s(ce,`id`,`ak-${e}`),s(le,`id`,`e-${e}`),s(F,`filter`,`url(#ak-${e})`),s(ue,`mask`,`url(#e-${e})`),s(I,`id`,`n-${e}`),s(de,`fill`,`url(#n-${e})`),s(fe,`id`,`r-${e}`),s(L,`fill`,`url(#r-${e})`),s(pe,`id`,`s-${e}`),s(me,`fill`,`url(#s-${e})`),s(he,`id`,`q-${e}`),s(ge,`fill`,`url(#q-${e})`),s(_e,`id`,`p-${e}`),s(R,`fill`,`url(#p-${e})`),s(ve,`id`,`o-${e}`),s(ye,`fill`,`url(#o-${e})`),s(be,`id`,`l-${e}`),s(xe,`fill`,`url(#l-${e})`),s(Ce,`id`,`al-${e}`),s(we,`id`,`d-${e}`),s(Te,`filter`,`url(#al-${e})`),s(z,`mask`,`url(#d-${e})`),s(Ee,`id`,`u-${e}`),s(De,`fill`,`url(#u-${e})`),s(ke,`id`,`ad-${e}`),s(Ae,`id`,`c-${e}`),s(je,`filter`,`url(#ad-${e})`),s(Me,`mask`,`url(#c-${e})`),s(Ne,`id`,`t-${e}`),s(Pe,`fill`,`url(#t-${e})`),s(Fe,`id`,`v-${e}`),s(Ie,`stroke`,`url(#v-${e})`),s(Le,`id`,`aa-${e}`),s(Re,`stroke`,`url(#aa-${e})`),s(ze,`id`,`w-${e}`),s(B,`stroke`,`url(#w-${e})`),s(Be,`id`,`ac-${e}`),s(Ve,`stroke`,`url(#ac-${e})`),s(He,`id`,`ab-${e}`),s(Ue,`stroke`,`url(#ab-${e})`),s(V,`id`,`y-${e}`),s(We,`stroke`,`url(#y-${e})`),s(Ge,`id`,`x-${e}`),s(Ke,`stroke`,`url(#x-${e})`),s(qe,`id`,`z-${e}`),s(Je,`stroke`,`url(#z-${e})`),t})()}var Lc=C(`<span><svg width=16 height=16 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M6 12L10 8L6 4"stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),Rc=C(`<button title="Copy object to clipboard">`),zc=C(`<button title="Remove all items"aria-label="Remove all items">`),Bc=C(`<button title="Delete item"aria-label="Delete item">`),Vc=C(`<button title="Toggle value"aria-label="Toggle value">`),Hc=C(`<button title="Bulk Edit Data"aria-label="Bulk Edit Data">`),Uc=C(`<div>`),Wc=C(`<div><button> <span></span> <span> `),Gc=C(`<input>`),Kc=C(`<span>`),qc=C(`<div><span>:`),Jc=C(`<div><div><button> [<!>...<!>]`);function Yc(e,t){let n=0,r=[];for(;n<e.length;)r.push(e.slice(n,n+t)),n+=t;return r}var Xc=e=>{let t=V(),n=B().shadowDOMTarget?H.bind({target:B().shadowDOMTarget}):H,r=L(()=>t()===`dark`?al(n):il(n));return(()=>{var t=Lc();return E(()=>A(t,U(r().expander,n`
          transform: rotate(${e.expanded?90:0}deg);
        `,e.expanded&&n`
            & svg {
              top: -1px;
            }
          `))),t})()},Zc=e=>{let t=V(),n=B().shadowDOMTarget?H.bind({target:B().shadowDOMTarget}):H,r=L(()=>t()===`dark`?al(n):il(n)),[i,a]=_(`NoCopy`);return(()=>{var n=Rc();return ue(n,`click`,i()===`NoCopy`?()=>{navigator.clipboard.writeText(x(e.value)).then(()=>{a(`SuccessCopy`),setTimeout(()=>{a(`NoCopy`)},1500)},e=>{a(`ErrorCopy`),setTimeout(()=>{a(`NoCopy`)},1500)})}:void 0,!0),m(n,M(te,{get children(){return[M(ae,{get when(){return i()===`NoCopy`},get children(){return M(Ec,{})}}),M(ae,{get when(){return i()===`SuccessCopy`},get children(){return M(Oc,{get theme(){return t()}})}}),M(ae,{get when(){return i()===`ErrorCopy`},get children(){return M(kc,{})}})]}})),E(e=>{var t=r().actionButton,a=`${i()===`NoCopy`?`Copy object to clipboard`:i()===`SuccessCopy`?`Object copied to clipboard`:`Error copying object to clipboard`}`;return t!==e.e&&A(n,e.e=t),a!==e.t&&s(n,`aria-label`,e.t=a),e},{e:void 0,t:void 0}),n})()},Qc=t=>{let n=V(),r=B().shadowDOMTarget?H.bind({target:B().shadowDOMTarget}):H,i=L(()=>n()===`dark`?al(r):il(r)),a=B().client;return(()=>{var n=zc();return n.$$click=()=>{let n=t.activeQuery.state.data,r=e(n,t.dataPath,[]);a.setQueryData(t.activeQuery.queryKey,r)},m(n,M(Ac,{})),E(()=>A(n,i().actionButton)),n})()},$c=e=>{let t=V(),n=B().shadowDOMTarget?H.bind({target:B().shadowDOMTarget}):H,r=L(()=>t()===`dark`?al(n):il(n)),i=B().client;return(()=>{var t=Bc();return t.$$click=()=>{let t=e.activeQuery.state.data,n=v(t,e.dataPath);i.setQueryData(e.activeQuery.queryKey,n)},m(t,M(pc,{})),E(()=>A(t,U(r().actionButton))),t})()},el=t=>{let n=V(),r=B().shadowDOMTarget?H.bind({target:B().shadowDOMTarget}):H,i=L(()=>n()===`dark`?al(r):il(r)),a=B().client;return(()=>{var o=Vc();return o.$$click=()=>{let n=t.activeQuery.state.data,r=e(n,t.dataPath,!t.value);a.setQueryData(t.activeQuery.queryKey,r)},m(o,M(jc,{get theme(){return n()},get checked(){return t.value}})),E(()=>A(o,U(i().actionButton,r`
          width: ${Q.size[3.5]};
          height: ${Q.size[3.5]};
        `))),o})()};function tl(e){return Symbol.iterator in e}function nl(t){let n=V(),r=B().shadowDOMTarget?H.bind({target:B().shadowDOMTarget}):H,i=L(()=>n()===`dark`?al(r):il(r)),o=B().client,[c,l]=_((t.defaultExpanded||[]).includes(t.label)),d=()=>l(e=>!e),[f,p]=_([]),h=L(()=>Array.isArray(t.value)?t.value.map((e,t)=>({label:t.toString(),value:e})):t.value!==null&&typeof t.value==`object`&&tl(t.value)&&typeof t.value[Symbol.iterator]==`function`?t.value instanceof Map?Array.from(t.value,([e,t])=>({label:e,value:t})):Array.from(t.value,(e,t)=>({label:t.toString(),value:e})):typeof t.value==`object`&&t.value!==null?Object.entries(t.value).map(([e,t])=>({label:e,value:t})):[]),g=L(()=>Array.isArray(t.value)?`array`:t.value!==null&&typeof t.value==`object`&&tl(t.value)&&typeof t.value[Symbol.iterator]==`function`?`Iterable`:typeof t.value==`object`&&t.value!==null?`object`:typeof t.value),v=L(()=>Yc(h(),100)),y=t.dataPath??[];return(()=>{var n=Uc();return m(n,M(D,{get when(){return v().length},get children(){return[(()=>{var e=Wc(),n=e.firstChild,r=n.firstChild,a=r.nextSibling,o=a.nextSibling.nextSibling,s=o.firstChild;return n.$$click=()=>d(),m(n,M(Xc,{get expanded(){return c()}}),r),m(a,()=>t.label),m(o,()=>String(g()).toLowerCase()===`iterable`?`(Iterable) `:``,s),m(o,()=>h().length,s),m(o,()=>h().length>1?`items`:`item`,null),m(e,M(D,{get when(){return t.editable},get children(){var e=Uc();return m(e,M(Zc,{get value(){return t.value}}),null),m(e,M(D,{get when(){return t.itemsDeletable&&t.activeQuery!==void 0},get children(){return M($c,{get activeQuery(){return t.activeQuery},dataPath:y})}}),null),m(e,M(D,{get when(){return g()===`array`&&t.activeQuery!==void 0},get children(){return M(Qc,{get activeQuery(){return t.activeQuery},dataPath:y})}}),null),m(e,M(D,{get when(){return u(()=>!!t.onEdit)()&&!b(t.value).meta},get children(){var e=Hc();return e.$$click=()=>{t.onEdit?.()},m(e,M(Dc,{})),E(()=>A(e,i().actionButton)),e}}),null),E(()=>A(e,i().actions)),e}}),null),E(t=>{var r=i().expanderButtonContainer,a=i().expanderButton,s=i().info;return r!==t.e&&A(e,t.e=r),a!==t.t&&A(n,t.t=a),s!==t.a&&A(o,t.a=s),t},{e:void 0,t:void 0,a:void 0}),e})(),M(D,{get when(){return c()},get children(){return[M(D,{get when(){return v().length===1},get children(){var e=Uc();return m(e,M(Dt,{get each(){return h()},by:e=>e.label,children:e=>M(nl,{get defaultExpanded(){return t.defaultExpanded},get label(){return e().label},get value(){return e().value},get editable(){return t.editable},get dataPath(){return[...y,e().label]},get activeQuery(){return t.activeQuery},get itemsDeletable(){return g()===`array`||g()===`Iterable`||g()===`object`}})})),E(()=>A(e,i().subEntry)),e}}),M(D,{get when(){return v().length>1},get children(){var e=Uc();return m(e,M(T,{get each(){return v()},children:(e,n)=>(()=>{var r=Jc(),a=r.firstChild,o=a.firstChild,s=o.firstChild,c=s.nextSibling,l=c.nextSibling.nextSibling;return l.nextSibling,o.$$click=()=>p(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n]),m(o,M(Xc,{get expanded(){return f().includes(n)}}),s),m(o,n*100,c),m(o,n*100+100-1,l),m(a,M(D,{get when(){return f().includes(n)},get children(){var n=Uc();return m(n,M(Dt,{get each(){return e()},by:e=>e.label,children:e=>M(nl,{get defaultExpanded(){return t.defaultExpanded},get label(){return e().label},get value(){return e().value},get editable(){return t.editable},get dataPath(){return[...y,e().label]},get activeQuery(){return t.activeQuery}})})),E(()=>A(n,i().subEntry)),n}}),null),E(e=>{var t=i().entry,n=i().expanderButton;return t!==e.e&&A(a,e.e=t),n!==e.t&&A(o,e.t=n),e},{e:void 0,t:void 0}),r})()})),E(()=>A(e,i().subEntry)),e}})]}})]}}),null),m(n,M(D,{get when(){return v().length===0},get children(){var n=qc(),r=n.firstChild,c=r.firstChild;return m(r,()=>t.label,c),m(n,M(D,{get when(){return u(()=>!!(t.editable&&t.activeQuery!==void 0))()&&(g()===`string`||g()===`number`||g()===`boolean`)},get fallback(){return(()=>{var e=Kc();return m(e,()=>a(t.value)),E(()=>A(e,i().value)),e})()},get children(){return[M(D,{get when(){return u(()=>!!(t.editable&&t.activeQuery!==void 0))()&&(g()===`string`||g()===`number`)},get children(){var n=Gc();return n.addEventListener(`change`,n=>{let r=t.activeQuery.state.data,i=e(r,y,g()===`number`?n.target.valueAsNumber:n.target.value);o.setQueryData(t.activeQuery.queryKey,i)}),E(e=>{var t=g()===`number`?`number`:`text`,r=U(i().value,i().editableInput);return t!==e.e&&s(n,`type`,e.e=t),r!==e.t&&A(n,e.t=r),e},{e:void 0,t:void 0}),E(()=>n.value=t.value),n}}),M(D,{get when(){return g()===`boolean`},get children(){var e=Kc();return m(e,M(el,{get activeQuery(){return t.activeQuery},dataPath:y,get value(){return t.value}}),null),m(e,()=>a(t.value),null),E(()=>A(e,U(i().value,i().actions,i().editableInput))),e}})]}}),null),m(n,M(D,{get when(){return t.editable&&t.itemsDeletable&&t.activeQuery!==void 0},get children(){return M($c,{get activeQuery(){return t.activeQuery},dataPath:y})}}),null),E(e=>{var t=i().row,a=i().label;return t!==e.e&&A(n,e.e=t),a!==e.t&&A(r,e.t=a),e},{e:void 0,t:void 0}),n}}),null),E(()=>A(n,i().entry)),n})()}var rl=(e,t)=>{let{colors:n,font:r,size:i,border:a}=Q,o=(t,n)=>e===`light`?t:n;return{entry:t`
      & * {
        font-size: ${r.size.xs};
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
      }
      position: relative;
      outline: none;
      word-break: break-word;
    `,subEntry:t`
      margin: 0 0 0 0.5em;
      padding-left: 0.75em;
      border-left: 2px solid ${o(n.gray[300],n.darkGray[400])};
      /* outline: 1px solid ${n.teal[400]}; */
    `,expander:t`
      & path {
        stroke: ${n.gray[400]};
      }
      & svg {
        width: ${i[3]};
        height: ${i[3]};
      }
      display: inline-flex;
      align-items: center;
      transition: all 0.1s ease;
      /* outline: 1px solid ${n.blue[400]}; */
    `,expanderButtonContainer:t`
      display: flex;
      align-items: center;
      line-height: ${i[4]};
      min-height: ${i[4]};
      gap: ${i[2]};
    `,expanderButton:t`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      height: ${i[5]};
      background: transparent;
      border: none;
      padding: 0;
      display: inline-flex;
      align-items: center;
      gap: ${i[1]};
      position: relative;
      /* outline: 1px solid ${n.green[400]}; */

      &:focus-visible {
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }

      & svg {
        position: relative;
        left: 1px;
      }
    `,info:t`
      color: ${o(n.gray[500],n.gray[500])};
      font-size: ${r.size.xs};
      margin-left: ${i[1]};
      /* outline: 1px solid ${n.yellow[400]}; */
    `,label:t`
      color: ${o(n.gray[700],n.gray[300])};
      white-space: nowrap;
    `,value:t`
      color: ${o(n.purple[600],n.purple[400])};
      flex-grow: 1;
    `,actions:t`
      display: inline-flex;
      gap: ${i[2]};
      align-items: center;
    `,row:t`
      display: inline-flex;
      gap: ${i[2]};
      width: 100%;
      margin: ${i[.25]} 0px;
      line-height: ${i[4.5]};
      align-items: center;
    `,editableInput:t`
      border: none;
      padding: ${i[.5]} ${i[1]} ${i[.5]} ${i[1.5]};
      flex-grow: 1;
      border-radius: ${a.radius.xs};
      background-color: ${o(n.gray[200],n.darkGray[500])};

      &:hover {
        background-color: ${o(n.gray[300],n.darkGray[600])};
      }
    `,actionButton:t`
      background-color: transparent;
      color: ${o(n.gray[500],n.gray[500])};
      border: none;
      display: inline-flex;
      padding: 0px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: ${i[3]};
      height: ${i[3]};
      position: relative;
      z-index: 1;

      &:hover svg {
        color: ${o(n.gray[600],n.gray[400])};
      }

      &:focus-visible {
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
        outline-offset: 2px;
      }
    `}},il=e=>rl(`light`,e),al=e=>rl(`dark`,e);de([`click`]);var ol=C(`<div><div aria-hidden=true></div><button type=button aria-label="Open Tanstack query devtools"class=tsqd-open-btn>`),sl=C(`<div>`),cl=C(`<aside aria-label="Tanstack query devtools"><div></div><button aria-label="Close tanstack query devtools">`),ll=C(`<select name=tsqd-queries-filter-sort>`),ul=C(`<select name=tsqd-mutations-filter-sort>`),dl=C(`<span>Asc`),fl=C(`<span>Desc`),pl=C(`<button aria-label="Open in picture-in-picture mode"title="Open in picture-in-picture mode">`),ml=C(`<div>Settings`),hl=C(`<span>Position`),gl=C(`<span>Top`),_l=C(`<span>Bottom`),vl=C(`<span>Left`),yl=C(`<span>Right`),bl=C(`<span>Theme`),xl=C(`<span>Light`),Sl=C(`<span>Dark`),Cl=C(`<span>System`),wl=C(`<span>Disabled Queries`),Tl=C(`<span>Show`),El=C(`<span>Hide`),Dl=C(`<div><div class=tsqd-queries-container>`),Ol=C(`<div><div class=tsqd-mutations-container>`),kl=C(`<div><div><div><button aria-label="Close Tanstack query devtools"><span>TANSTACK</span><span> v</span></button></div></div><div><div><div><input aria-label="Filter queries by query key"type=text placeholder=Filter name=tsqd-query-filter-input></div><div></div><button class=tsqd-query-filter-sort-order-btn></button></div><div><button aria-label="Clear query cache"></button><button>`),Al=C(`<option>Sort by `),jl=C(`<div class=tsqd-query-disabled-indicator>disabled`),Ml=C(`<div class=tsqd-query-static-indicator>static`),Nl=C(`<button><div></div><code class=tsqd-query-hash>`),Pl=C(`<div role=tooltip id=tsqd-status-tooltip>`),Fl=C(`<span>`),Il=C(`<button><span></span><span>`),Ll=C(`<button><span></span> Error`),Rl=C(`<div><span></span>Trigger Error<select><option value=""disabled selected>`),zl=C(`<div class="tsqd-query-details-explorer-container tsqd-query-details-data-explorer">`),Bl=C(`<form><textarea name=data></textarea><div><span></span><div><button type=button>Cancel</button><button>Save`),Vl=C(`<div><div>Query Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span></span></div><div class=tsqd-query-details-observers-count><span>Observers:</span><span></span></div><div class=tsqd-query-details-last-updated><span>Last Updated:</span><span></span></div></div><div>Actions</div><div><button><span></span>Refetch</button><button><span></span>Invalidate</button><button><span></span>Reset</button><button><span></span>Remove</button><button><span></span> Loading</button></div><div>Data </div><div>Query Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">`),Hl=C(`<option>`),Ul=C(`<div><div>Mutation Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span></span></div><div class=tsqd-query-details-last-updated><span>Submitted At:</span><span></span></div></div><div>Variables Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Context Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Data Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Mutations Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">`),[Wl,Gl]=_(null),[Kl,ql]=_(null),[Jl,Yl]=_(0),[Xl,Zl]=_(!1),Ql=e=>{let t=V(),n=B().shadowDOMTarget?H.bind({target:B().shadowDOMTarget}):H,r=L(()=>t()===`dark`?yu(n):vu(n)),i=L(()=>B().onlineManager);c(()=>{let e=i().subscribe(e=>{Zl(!e)});y(()=>{e()})});let a=He(),o=L(()=>B().buttonPosition||ke),s=L(()=>e.localStore.open===`true`?!0:e.localStore.open===`false`?!1:B().initialIsOpen||Me),l=L(()=>e.localStore.position||B().position||Ae),d;I(()=>{let t=d.parentElement,n=e.localStore.height||Ne,r=e.localStore.width||Fe,i=l();t.style.setProperty(`--tsqd-panel-height`,`${i===`top`?`-`:``}${n}px`),t.style.setProperty(`--tsqd-panel-width`,`${i===`left`?`-`:``}${r}px`)}),c(()=>{let e=()=>{let e=d.parentElement,t=getComputedStyle(e).fontSize;e.style.setProperty(`--tsqd-font-size`,t)};e(),window.addEventListener(`focus`,e),y(()=>{window.removeEventListener(`focus`,e)})});let f=L(()=>e.localStore.pip_open??`false`);return[M(D,{get when(){return u(()=>!!a().pipWindow)()&&f()==`true`},get children(){return M(ce,{get mount(){return a().pipWindow?.document.body},get children(){return M($l,{get children(){return M(nu,e)}})}})}}),(()=>{var t=sl(),i=d;return typeof i==`function`?k(i,t):d=t,m(t,M(Ct,{name:`tsqd-panel-transition`,get children(){return M(D,{get when(){return u(()=>!!(s()&&!a().pipWindow))()&&f()==`false`},get children(){return M(tu,{get localStore(){return e.localStore},get setLocalStore(){return e.setLocalStore}})}})}}),null),m(t,M(Ct,{name:`tsqd-button-transition`,get children(){return M(D,{get when(){return!s()},get children(){var t=ol(),n=t.firstChild,i=n.nextSibling;return m(n,M(Ic,{})),i.$$click=()=>e.setLocalStore(`open`,`true`),m(i,M(Ic,{})),E(()=>A(t,U(r().devtoolsBtn,r()[`devtoolsBtn-position-${o()}`],`tsqd-open-btn-container`))),t}})}}),null),E(()=>A(t,U(n`
            & .tsqd-panel-transition-exit-active,
            & .tsqd-panel-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
            }

            & .tsqd-panel-transition-exit-to,
            & .tsqd-panel-transition-enter {
              ${l()===`top`||l()===`bottom`?`transform: translateY(var(--tsqd-panel-height));`:`transform: translateX(var(--tsqd-panel-width));`}
            }

            & .tsqd-button-transition-exit-active,
            & .tsqd-button-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
              opacity: 1;
            }

            & .tsqd-button-transition-exit-to,
            & .tsqd-button-transition-enter {
              transform: ${o()===`relative`?`none;`:o()===`top-left`?`translateX(-72px);`:o()===`top-right`?`translateX(72px);`:`translateY(72px);`};
              opacity: 0;
            }
          `,`tsqd-transitions-container`))),t})()]},$l=e=>{let t=He(),n=V(),r=B().shadowDOMTarget?H.bind({target:B().shadowDOMTarget}):H,i=L(()=>n()===`dark`?yu(r):vu(r)),a=()=>{let{colors:e}=Q,t=(e,t)=>n()===`dark`?t:e;return Jl()<De?r`
        flex-direction: column;
        background-color: ${t(e.gray[300],e.gray[600])};
      `:r`
      flex-direction: row;
      background-color: ${t(e.gray[200],e.darkGray[900])};
    `};return I(()=>{let e=t().pipWindow,n=()=>{e&&Yl(e.innerWidth)};e&&(e.addEventListener(`resize`,n),n()),y(()=>{e&&e.removeEventListener(`resize`,n)})}),(()=>{var t=sl();return t.style.setProperty(`--tsqd-font-size`,`16px`),t.style.setProperty(`max-height`,`100vh`),t.style.setProperty(`height`,`100vh`),t.style.setProperty(`width`,`100vw`),m(t,()=>e.children),E(()=>A(t,U(i().panel,a(),{[r`
            min-width: min-content;
          `]:Jl()<Oe},`tsqd-main-panel`))),t})()},eu=e=>{let t=V(),n=B().shadowDOMTarget?H.bind({target:B().shadowDOMTarget}):H,r=L(()=>t()===`dark`?yu(n):vu(n)),i;c(()=>{jt(i,({width:e},t)=>{t===i&&Yl(e)})});let a=()=>{let{colors:e}=Q,r=(e,n)=>t()===`dark`?n:e;return Jl()<De?n`
        flex-direction: column;
        background-color: ${r(e.gray[300],e.gray[600])};
      `:n`
      flex-direction: row;
      background-color: ${r(e.gray[200],e.darkGray[900])};
    `};return(()=>{var t=sl(),o=i;return typeof o==`function`?k(o,t):i=t,t.style.setProperty(`--tsqd-font-size`,`16px`),m(t,()=>e.children),E(()=>A(t,U(r().parentPanel,a(),{[n`
            min-width: min-content;
          `]:Jl()<Oe},`tsqd-main-panel`))),t})()},tu=e=>{let t=V(),n=B().shadowDOMTarget?H.bind({target:B().shadowDOMTarget}):H,r=L(()=>t()===`dark`?yu(n):vu(n)),[i,a]=_(!1),o=L(()=>e.localStore.position||B().position||Ae),s=t=>{let n=t.currentTarget.parentElement;if(!n)return;a(!0);let{height:r,width:s}=n.getBoundingClientRect(),c=t.clientX,l=t.clientY,u=0,d=ne(3.5),f=ne(12),p=t=>{if(t.preventDefault(),o()===`left`||o()===`right`){let r=o()===`right`?c-t.clientX:t.clientX-c;u=Math.round(s+r),u<f&&(u=f),e.setLocalStore(`width`,String(Math.round(u)));let i=n.getBoundingClientRect().width;Number(e.localStore.width)<i&&e.setLocalStore(`width`,String(i))}else{let n=o()===`bottom`?l-t.clientY:t.clientY-l;u=Math.round(r+n),u<d&&(u=d,Gl(null)),e.setLocalStore(`height`,String(Math.round(u)))}},m=()=>{i()&&a(!1),document.removeEventListener(`mousemove`,p,!1),document.removeEventListener(`mouseUp`,m,!1)};document.addEventListener(`mousemove`,p,!1),document.addEventListener(`mouseup`,m,!1)},l;c(()=>{jt(l,({width:e},t)=>{t===l&&Yl(e)})}),I(()=>{let t=l.parentElement?.parentElement?.parentElement;if(!t)return;let n=f(`padding`,e.localStore.position||Ae),r=e.localStore.position===`left`||e.localStore.position===`right`,i=(({padding:e,paddingTop:t,paddingBottom:n,paddingLeft:r,paddingRight:i})=>({padding:e,paddingTop:t,paddingBottom:n,paddingLeft:r,paddingRight:i}))(t.style);t.style[n]=`${r?e.localStore.width:e.localStore.height}px`,y(()=>{Object.entries(i).forEach(([e,n])=>{t.style[e]=n})})});let u=()=>{let{colors:e}=Q,r=(e,n)=>t()===`dark`?n:e;return Jl()<De?n`
        flex-direction: column;
        background-color: ${r(e.gray[300],e.gray[600])};
      `:n`
      flex-direction: row;
      background-color: ${r(e.gray[200],e.darkGray[900])};
    `};return(()=>{var t=cl(),i=t.firstChild,a=i.nextSibling,c=l;return typeof c==`function`?k(c,t):l=t,i.$$mousedown=s,a.$$click=()=>e.setLocalStore(`open`,`false`),m(a,M(mc,{})),m(t,M(nu,e),null),E(s=>{var c=U(r().panel,r()[`panel-position-${o()}`],u(),{[n`
            min-width: min-content;
          `]:Jl()<Oe&&(o()===`right`||o()===`left`)},`tsqd-main-panel`),l=o()===`bottom`||o()===`top`?`${e.localStore.height||Ne}px`:`auto`,d=o()===`right`||o()===`left`?`${e.localStore.width||Fe}px`:`auto`,f=U(r().dragHandle,r()[`dragHandle-position-${o()}`],`tsqd-drag-handle`),p=U(r().closeBtn,r()[`closeBtn-position-${o()}`],`tsqd-minimize-btn`);return c!==s.e&&A(t,s.e=c),l!==s.t&&((s.t=l)==null?t.style.removeProperty(`height`):t.style.setProperty(`height`,l)),d!==s.a&&((s.a=d)==null?t.style.removeProperty(`width`):t.style.setProperty(`width`,d)),f!==s.o&&A(i,s.o=f),p!==s.i&&A(a,s.i=p),s},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),t})()},nu=e=>{du(),pu();let t,r=V(),i=B().shadowDOMTarget?H.bind({target:B().shadowDOMTarget}):H,a=L(()=>r()===`dark`?yu(i):vu(i)),o=He(),[c,l]=_(`queries`),d=L(()=>e.localStore.sort||Ie),f=L(()=>Number(e.localStore.sortOrder)||Le),p=L(()=>e.localStore.mutationSort||Re),h=L(()=>Number(e.localStore.mutationSortOrder)||Le),g=L(()=>se[d()]),v=L(()=>pe[p()]),y=L(()=>B().onlineManager),b=L(()=>B().client.getQueryCache()),x=L(()=>B().client.getMutationCache()),S=$(e=>e().getAll().length,!1),C=L(n(()=>[S(),e.localStore.filter,d(),f(),e.localStore.hideDisabledQueries],()=>{let t=b().getAll(),n=e.localStore.filter?t.filter(t=>Ye(t.queryHash,e.localStore.filter||``).passed):[...t];return e.localStore.hideDisabledQueries===`true`&&(n=n.filter(e=>!e.isDisabled())),g()?n.sort((e,t)=>g()(e,t)*f()):n})),w=mu(e=>e().getAll().length,!1),T=L(n(()=>[w(),e.localStore.mutationFilter,p(),h()],()=>{let t=x().getAll(),n=e.localStore.mutationFilter?t.filter(t=>Ye(`${t.options.mutationKey?JSON.stringify(t.options.mutationKey)+` - `:``}${new Date(t.state.submittedAt).toLocaleString()}`,e.localStore.mutationFilter||``).passed):[...t];return v()?n.sort((e,t)=>v()(e,t)*h()):n})),O=t=>{e.setLocalStore(`position`,t)},j=e=>{let n=getComputedStyle(t).getPropertyValue(`--tsqd-font-size`);e.style.setProperty(`--tsqd-font-size`,n)};return[(()=>{var n=kl(),r=n.firstChild,g=r.firstChild,_=g.firstChild,v=_.firstChild,S=v.nextSibling,w=S.firstChild,ee=r.nextSibling,N=ee.firstChild,te=N.firstChild,ne=te.firstChild,re=te.nextSibling,ie=re.nextSibling,ae=N.nextSibling,oe=ae.firstChild,P=oe.nextSibling,ce=t;return typeof ce==`function`?k(ce,n):t=n,_.$$click=()=>{if(!o().pipWindow&&!e.showPanelViewOnly){e.setLocalStore(`open`,`false`);return}e.onClose&&e.onClose()},m(S,()=>B().queryFlavor,w),m(S,()=>B().version,null),m(g,M(lo.Root,{get class(){return U(a().viewToggle)},get value(){return c()},onChange:e=>{l(e),Gl(null),ql(null)},get children(){return[M(lo.Item,{value:`queries`,class:`tsqd-radio-toggle`,get children(){return[M(lo.ItemInput,{}),M(lo.ItemControl,{get children(){return M(lo.ItemIndicator,{})}}),M(lo.ItemLabel,{title:`Toggle Queries View`,children:`Queries`})]}}),M(lo.Item,{value:`mutations`,class:`tsqd-radio-toggle`,get children(){return[M(lo.ItemInput,{}),M(lo.ItemControl,{get children(){return M(lo.ItemIndicator,{})}}),M(lo.ItemLabel,{title:`Toggle Mutations View`,children:`Mutations`})]}})]}}),null),m(r,M(D,{get when(){return c()===`queries`},get children(){return M(au,{})}}),null),m(r,M(D,{get when(){return c()===`mutations`},get children(){return M(ou,{})}}),null),m(te,M(fc,{}),ne),ne.$$input=t=>{c()===`queries`?e.setLocalStore(`filter`,t.currentTarget.value):e.setLocalStore(`mutationFilter`,t.currentTarget.value)},m(re,M(D,{get when(){return c()===`queries`},get children(){var t=ll();return t.addEventListener(`change`,t=>{e.setLocalStore(`sort`,t.currentTarget.value)}),m(t,()=>Object.keys(se).map(e=>(()=>{var t=Al();return t.firstChild,t.value=e,m(t,e,null),t})())),E(()=>t.value=d()),t}}),null),m(re,M(D,{get when(){return c()===`mutations`},get children(){var t=ul();return t.addEventListener(`change`,t=>{e.setLocalStore(`mutationSort`,t.currentTarget.value)}),m(t,()=>Object.keys(pe).map(e=>(()=>{var t=Al();return t.firstChild,t.value=e,m(t,e,null),t})())),E(()=>t.value=p()),t}}),null),m(re,M(mc,{}),null),ie.$$click=()=>{c()===`queries`?e.setLocalStore(`sortOrder`,String(f()*-1)):e.setLocalStore(`mutationSortOrder`,String(h()*-1))},m(ie,M(D,{get when(){return(c()===`queries`?f():h())===1},get children(){return[dl(),M(hc,{})]}}),null),m(ie,M(D,{get when(){return(c()===`queries`?f():h())===-1},get children(){return[fl(),M(gc,{})]}}),null),oe.$$click=()=>{c()===`queries`?(gu({type:`CLEAR_QUERY_CACHE`}),b().clear()):(gu({type:`CLEAR_MUTATION_CACHE`}),x().clear())},m(oe,M(pc,{})),P.$$click=()=>{y().setOnline(!y().isOnline())},m(P,(()=>{var e=u(()=>!!Xl());return()=>e()?M(Cc,{}):M(Sc,{})})()),m(ae,M(D,{get when(){return u(()=>!o().pipWindow)()&&!o().disabled},get children(){var t=pl();return t.$$click=()=>{o().requestPipWindow(Number(window.innerWidth),Number(e.localStore.height??500))},m(t,M(Tc,{})),E(()=>A(t,U(a().actionsBtn,`tsqd-actions-btn`,`tsqd-action-open-pip`))),t}}),null),m(ae,M(Z.Root,{gutter:4,get children(){return[M(Z.Trigger,{get class(){return U(a().actionsBtn,`tsqd-actions-btn`,`tsqd-action-settings`)},get children(){return M(wc,{})}}),M(Z.Portal,{ref:e=>j(e),get mount(){return u(()=>!!o().pipWindow)()?o().pipWindow.document.body:document.body},get children(){return M(Z.Content,{get class(){return U(a().settingsMenu,`tsqd-settings-menu`)},get children(){return[(()=>{var e=ml();return E(()=>A(e,U(a().settingsMenuHeader,`tsqd-settings-menu-header`))),e})(),M(D,{get when(){return!e.showPanelViewOnly},get children(){return M(Z.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[M(Z.SubTrigger,{get class(){return U(a().settingsSubTrigger,`tsqd-settings-menu-sub-trigger`,`tsqd-settings-menu-sub-trigger-position`)},get children(){return[hl(),M(mc,{})]}}),M(Z.Portal,{ref:e=>j(e),get mount(){return u(()=>!!o().pipWindow)()?o().pipWindow.document.body:document.body},get children(){return M(Z.SubContent,{get class(){return U(a().settingsMenu,`tsqd-settings-submenu`)},get children(){return[M(Z.Item,{onSelect:()=>{O(`top`)},as:`button`,get class(){return U(a().settingsSubButton,`tsqd-settings-menu-position-btn`,`tsqd-settings-menu-position-btn-top`)},get children(){return[gl(),M(hc,{})]}}),M(Z.Item,{onSelect:()=>{O(`bottom`)},as:`button`,get class(){return U(a().settingsSubButton,`tsqd-settings-menu-position-btn`,`tsqd-settings-menu-position-btn-bottom`)},get children(){return[_l(),M(gc,{})]}}),M(Z.Item,{onSelect:()=>{O(`left`)},as:`button`,get class(){return U(a().settingsSubButton,`tsqd-settings-menu-position-btn`,`tsqd-settings-menu-position-btn-left`)},get children(){return[vl(),M(_c,{})]}}),M(Z.Item,{onSelect:()=>{O(`right`)},as:`button`,get class(){return U(a().settingsSubButton,`tsqd-settings-menu-position-btn`,`tsqd-settings-menu-position-btn-right`)},get children(){return[yl(),M(vc,{})]}})]}})}})]}})}}),M(Z.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[M(Z.SubTrigger,{get class(){return U(a().settingsSubTrigger,`tsqd-settings-menu-sub-trigger`,`tsqd-settings-menu-sub-trigger-position`)},get children(){return[bl(),M(mc,{})]}}),M(Z.Portal,{ref:e=>j(e),get mount(){return u(()=>!!o().pipWindow)()?o().pipWindow.document.body:document.body},get children(){return M(Z.SubContent,{get class(){return U(a().settingsMenu,`tsqd-settings-submenu`)},get children(){return[M(Z.Item,{onSelect:()=>{e.setLocalStore(`theme_preference`,`light`)},as:`button`,get class(){return U(a().settingsSubButton,e.localStore.theme_preference===`light`&&a().themeSelectedButton,`tsqd-settings-menu-position-btn`,`tsqd-settings-menu-position-btn-top`)},get children(){return[xl(),M(yc,{})]}}),M(Z.Item,{onSelect:()=>{e.setLocalStore(`theme_preference`,`dark`)},as:`button`,get class(){return U(a().settingsSubButton,e.localStore.theme_preference===`dark`&&a().themeSelectedButton,`tsqd-settings-menu-position-btn`,`tsqd-settings-menu-position-btn-bottom`)},get children(){return[Sl(),M(bc,{})]}}),M(Z.Item,{onSelect:()=>{e.setLocalStore(`theme_preference`,`system`)},as:`button`,get class(){return U(a().settingsSubButton,e.localStore.theme_preference===`system`&&a().themeSelectedButton,`tsqd-settings-menu-position-btn`,`tsqd-settings-menu-position-btn-left`)},get children(){return[Cl(),M(xc,{})]}})]}})}})]}}),M(Z.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[M(Z.SubTrigger,{get class(){return U(a().settingsSubTrigger,`tsqd-settings-menu-sub-trigger`,`tsqd-settings-menu-sub-trigger-disabled-queries`)},get children(){return[wl(),M(mc,{})]}}),M(Z.Portal,{ref:e=>j(e),get mount(){return u(()=>!!o().pipWindow)()?o().pipWindow.document.body:document.body},get children(){return M(Z.SubContent,{get class(){return U(a().settingsMenu,`tsqd-settings-submenu`)},get children(){return[M(Z.Item,{onSelect:()=>{e.setLocalStore(`hideDisabledQueries`,`false`)},as:`button`,get class(){return U(a().settingsSubButton,e.localStore.hideDisabledQueries!==`true`&&a().themeSelectedButton,`tsqd-settings-menu-position-btn`,`tsqd-settings-menu-position-btn-show`)},get children(){return[Tl(),M(D,{get when(){return e.localStore.hideDisabledQueries!==`true`},get children(){return M(Mc,{})}})]}}),M(Z.Item,{onSelect:()=>{e.setLocalStore(`hideDisabledQueries`,`true`)},as:`button`,get class(){return U(a().settingsSubButton,e.localStore.hideDisabledQueries===`true`&&a().themeSelectedButton,`tsqd-settings-menu-position-btn`,`tsqd-settings-menu-position-btn-hide`)},get children(){return[El(),M(D,{get when(){return e.localStore.hideDisabledQueries===`true`},get children(){return M(Mc,{})}})]}})]}})}})]}})]}})}})]}}),null),m(n,M(D,{get when(){return c()===`queries`},get children(){var e=Dl(),t=e.firstChild;return m(t,M(Dt,{by:e=>e.queryHash,get each(){return C()},children:e=>M(ru,{get query(){return e()}})})),E(()=>A(e,U(a().overflowQueryContainer,`tsqd-queries-overflow-container`))),e}}),null),m(n,M(D,{get when(){return c()===`mutations`},get children(){var e=Ol(),t=e.firstChild;return m(t,M(Dt,{by:e=>e.mutationId,get each(){return T()},children:e=>M(iu,{get mutation(){return e()}})})),E(()=>A(e,U(a().overflowQueryContainer,`tsqd-mutations-overflow-container`))),e}}),null),E(e=>{var t=U(a().queriesContainer,Jl()<De&&(Wl()||Kl())&&i`
              height: 50%;
              max-height: 50%;
            `,Jl()<De&&!(Wl()||Kl())&&i`
              height: 100%;
              max-height: 100%;
            `,`tsqd-queries-container`),o=U(a().row,`tsqd-header`),l=a().logoAndToggleContainer,u=U(a().logo,`tsqd-text-logo-container`),d=U(a().tanstackLogo,`tsqd-text-logo-tanstack`),p=U(a().queryFlavorLogo,`tsqd-text-logo-query-flavor`),m=U(a().row,`tsqd-filters-actions-container`),y=U(a().filtersContainer,`tsqd-filters-container`),b=U(a().filterInput,`tsqd-query-filter-textfield-container`),x=U(`tsqd-query-filter-textfield`),C=U(a().filterSelect,`tsqd-query-filter-sort-container`),w=`Sort order ${(c()===`queries`?f():h())===-1?`descending`:`ascending`}`,T=(c()===`queries`?f():h())===-1,E=U(a().actionsContainer,`tsqd-actions-container`),D=U(a().actionsBtn,`tsqd-actions-btn`,`tsqd-action-clear-cache`),O=`Clear ${c()} cache`,k=U(a().actionsBtn,Xl()&&a().actionsBtnOffline,`tsqd-actions-btn`,`tsqd-action-mock-offline-behavior`),j=`${Xl()?`Unset offline mocking behavior`:`Mock offline behavior`}`,M=Xl(),se=`${Xl()?`Unset offline mocking behavior`:`Mock offline behavior`}`;return t!==e.e&&A(n,e.e=t),o!==e.t&&A(r,e.t=o),l!==e.a&&A(g,e.a=l),u!==e.o&&A(_,e.o=u),d!==e.i&&A(v,e.i=d),p!==e.n&&A(S,e.n=p),m!==e.s&&A(ee,e.s=m),y!==e.h&&A(N,e.h=y),b!==e.r&&A(te,e.r=b),x!==e.d&&A(ne,e.d=x),C!==e.l&&A(re,e.l=C),w!==e.u&&s(ie,`aria-label`,e.u=w),T!==e.c&&s(ie,`aria-pressed`,e.c=T),E!==e.w&&A(ae,e.w=E),D!==e.m&&A(oe,e.m=D),O!==e.f&&s(oe,`title`,e.f=O),k!==e.y&&A(P,e.y=k),j!==e.g&&s(P,`aria-label`,e.g=j),M!==e.p&&s(P,`aria-pressed`,e.p=M),se!==e.b&&s(P,`title`,e.b=se),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0}),E(()=>ne.value=c()===`queries`?e.localStore.filter||``:e.localStore.mutationFilter||``),n})(),M(D,{get when(){return u(()=>c()===`queries`)()&&Wl()},get children(){return M(cu,{})}}),M(D,{get when(){return u(()=>c()===`mutations`)()&&Kl()},get children(){return M(lu,{})}})]},ru=e=>{let n=V(),r=B().shadowDOMTarget?H.bind({target:B().shadowDOMTarget}):H,i=L(()=>n()===`dark`?yu(r):vu(r)),{colors:a,alpha:o}=Q,c=(e,t)=>n()===`dark`?t:e,l=$(t=>t().find({queryKey:e.query.queryKey})?.state,!0,t=>t.query.queryHash===e.query.queryHash),u=$(t=>t().find({queryKey:e.query.queryKey})?.isDisabled()??!1,!0,t=>t.query.queryHash===e.query.queryHash),d=$(t=>t().find({queryKey:e.query.queryKey})?.isStatic()??!1,!0,t=>t.query.queryHash===e.query.queryHash),f=$(t=>t().find({queryKey:e.query.queryKey})?.isStale()??!1,!0,t=>t.query.queryHash===e.query.queryHash),p=$(t=>t().find({queryKey:e.query.queryKey})?.getObserversCount()??0,!0,t=>t.query.queryHash===e.query.queryHash),h=L(()=>t({queryState:l(),observerCount:p(),isStale:f()})),g=()=>h()===`gray`?r`
        background-color: ${c(a[h()][200],a[h()][700])};
        color: ${c(a[h()][700],a[h()][300])};
      `:r`
      background-color: ${c(a[h()][200]+o[80],a[h()][900])};
      color: ${c(a[h()][800],a[h()][300])};
    `;return M(D,{get when(){return l()},get children(){var t=Nl(),n=t.firstChild,r=n.nextSibling;return t.$$click=()=>Gl(e.query.queryHash===Wl()?null:e.query.queryHash),m(n,p),m(r,()=>e.query.queryHash),m(t,M(D,{get when(){return u()},get children(){return jl()}}),null),m(t,M(D,{get when(){return d()},get children(){return Ml()}}),null),E(r=>{var a=U(i().queryRow,Wl()===e.query.queryHash&&i().selectedQueryRow,`tsqd-query-row`),o=`Query key ${e.query.queryHash}`,c=U(g(),`tsqd-query-observer-count`);return a!==r.e&&A(t,r.e=a),o!==r.t&&s(t,`aria-label`,r.t=o),c!==r.a&&A(n,r.a=c),r},{e:void 0,t:void 0,a:void 0}),t}})},iu=e=>{let t=V(),n=B().shadowDOMTarget?H.bind({target:B().shadowDOMTarget}):H,r=L(()=>t()===`dark`?yu(n):vu(n)),{colors:a,alpha:o}=Q,c=(e,n)=>t()===`dark`?n:e,l=mu(t=>t().getAll().find(t=>t.mutationId===e.mutation.mutationId)?.state),d=mu(t=>{let n=t().getAll().find(t=>t.mutationId===e.mutation.mutationId);return n?n.state.isPaused:!1}),f=mu(t=>{let n=t().getAll().find(t=>t.mutationId===e.mutation.mutationId);return n?n.state.status:`idle`}),p=L(()=>i({isPaused:d(),status:f()})),h=()=>p()===`gray`?n`
        background-color: ${c(a[p()][200],a[p()][700])};
        color: ${c(a[p()][700],a[p()][300])};
      `:n`
      background-color: ${c(a[p()][200]+o[80],a[p()][900])};
      color: ${c(a[p()][800],a[p()][300])};
    `;return M(D,{get when(){return l()},get children(){var t=Nl(),n=t.firstChild,i=n.nextSibling;return t.$$click=()=>{ql(e.mutation.mutationId===Kl()?null:e.mutation.mutationId)},m(n,M(D,{get when(){return p()===`purple`},get children(){return M(Fc,{})}}),null),m(n,M(D,{get when(){return p()===`green`},get children(){return M(Mc,{})}}),null),m(n,M(D,{get when(){return p()===`red`},get children(){return M(Pc,{})}}),null),m(n,M(D,{get when(){return p()===`yellow`},get children(){return M(Nc,{})}}),null),m(i,M(D,{get when(){return e.mutation.options.mutationKey},get children(){return[u(()=>JSON.stringify(e.mutation.options.mutationKey)),` -`,` `]}}),null),m(i,()=>new Date(e.mutation.state.submittedAt).toLocaleString(),null),E(i=>{var a=U(r().queryRow,Kl()===e.mutation.mutationId&&r().selectedQueryRow,`tsqd-query-row`),o=`Mutation submitted at ${new Date(e.mutation.state.submittedAt).toLocaleString()}`,c=U(h(),`tsqd-query-observer-count`);return a!==i.e&&A(t,i.e=a),o!==i.t&&s(t,`aria-label`,i.t=o),c!==i.a&&A(n,i.a=c),i},{e:void 0,t:void 0,a:void 0}),t}})},au=()=>{let e=$(e=>e().getAll().filter(e=>d(e)===`stale`).length),t=$(e=>e().getAll().filter(e=>d(e)===`fresh`).length),n=$(e=>e().getAll().filter(e=>d(e)===`fetching`).length),r=$(e=>e().getAll().filter(e=>d(e)===`paused`).length),i=$(e=>e().getAll().filter(e=>d(e)===`inactive`).length),a=V(),o=B().shadowDOMTarget?H.bind({target:B().shadowDOMTarget}):H,s=L(()=>a()===`dark`?yu(o):vu(o));return(()=>{var a=sl();return m(a,M(su,{label:`Fresh`,color:`green`,get count(){return t()}}),null),m(a,M(su,{label:`Fetching`,color:`blue`,get count(){return n()}}),null),m(a,M(su,{label:`Paused`,color:`purple`,get count(){return r()}}),null),m(a,M(su,{label:`Stale`,color:`yellow`,get count(){return e()}}),null),m(a,M(su,{label:`Inactive`,color:`gray`,get count(){return i()}}),null),E(()=>A(a,U(s().queryStatusContainer,`tsqd-query-status-container`))),a})()},ou=()=>{let e=mu(e=>e().getAll().filter(e=>i({isPaused:e.state.isPaused,status:e.state.status})===`green`).length),t=mu(e=>e().getAll().filter(e=>i({isPaused:e.state.isPaused,status:e.state.status})===`yellow`).length),n=mu(e=>e().getAll().filter(e=>i({isPaused:e.state.isPaused,status:e.state.status})===`purple`).length),r=mu(e=>e().getAll().filter(e=>i({isPaused:e.state.isPaused,status:e.state.status})===`red`).length),a=V(),o=B().shadowDOMTarget?H.bind({target:B().shadowDOMTarget}):H,s=L(()=>a()===`dark`?yu(o):vu(o));return(()=>{var i=sl();return m(i,M(su,{label:`Paused`,color:`purple`,get count(){return n()}}),null),m(i,M(su,{label:`Pending`,color:`yellow`,get count(){return t()}}),null),m(i,M(su,{label:`Success`,color:`green`,get count(){return e()}}),null),m(i,M(su,{label:`Error`,color:`red`,get count(){return r()}}),null),E(()=>A(i,U(s().queryStatusContainer,`tsqd-query-status-container`))),i})()},su=e=>{let t=V(),n=B().shadowDOMTarget?H.bind({target:B().shadowDOMTarget}):H,r=L(()=>t()===`dark`?yu(n):vu(n)),{colors:i,alpha:a}=Q,o=(e,n)=>t()===`dark`?n:e,s,[c,l]=_(!1),[d,f]=_(!1),p=L(()=>!(Wl()&&Jl()<Ee&&Jl()>De||Jl()<De));return(()=>{var t=Il(),h=t.firstChild,_=h.nextSibling,v=s;return typeof v==`function`?k(v,t):s=t,t.addEventListener(`mouseleave`,()=>{l(!1),f(!1)}),t.addEventListener(`mouseenter`,()=>l(!0)),t.addEventListener(`blur`,()=>f(!1)),t.addEventListener(`focus`,()=>f(!0)),S(t,g({get disabled(){return p()},get class(){return U(r().queryStatusTag,!p()&&n`
            cursor: pointer;
            &:hover {
              background: ${o(i.gray[200],i.darkGray[400])}${a[80]};
            }
          `,`tsqd-query-status-tag`,`tsqd-query-status-tag-${e.label.toLowerCase()}`)}},()=>c()||d()?{"aria-describedby":`tsqd-status-tooltip`}:{}),!1,!0),m(t,M(D,{get when(){return u(()=>!p())()&&(c()||d())},get children(){var t=Pl();return m(t,()=>e.label),E(()=>A(t,U(r().statusTooltip,`tsqd-query-status-tooltip`))),t}}),h),m(t,M(D,{get when(){return p()},get children(){var t=Fl();return m(t,()=>e.label),E(()=>A(t,U(r().queryStatusTagLabel,`tsqd-query-status-tag-label`))),t}}),_),m(_,()=>e.count),E(t=>{var a=U(n`
            width: ${Q.size[1.5]};
            height: ${Q.size[1.5]};
            border-radius: ${Q.border.radius.full};
            background-color: ${Q.colors[e.color][500]};
          `,`tsqd-query-status-tag-dot`),s=U(r().queryStatusCount,e.count>0&&e.color!==`gray`&&n`
              background-color: ${o(i[e.color][100],i[e.color][900])};
              color: ${o(i[e.color][700],i[e.color][300])};
            `,`tsqd-query-status-tag-count`);return a!==t.e&&A(h,t.e=a),s!==t.t&&A(_,t.t=s),t},{e:void 0,t:void 0}),t})()},cu=()=>{let e=V(),t=B().shadowDOMTarget?H.bind({target:B().shadowDOMTarget}):H,n=L(()=>e()===`dark`?yu(t):vu(t)),{colors:r}=Q,i=(t,n)=>e()===`dark`?n:t,o=B().client,[c,l]=_(!1),[f,p]=_(`view`),[h,g]=_(!1),v=L(()=>B().errorTypes||[]),y=$(e=>e().getAll().find(e=>e.queryHash===Wl()),!1),b=$(e=>e().getAll().find(e=>e.queryHash===Wl()),!1),x=$(e=>e().getAll().find(e=>e.queryHash===Wl())?.state,!1),S=$(e=>e().getAll().find(e=>e.queryHash===Wl())?.state.data,!1),C=$(e=>{let t=e().getAll().find(e=>e.queryHash===Wl());return t?d(t):`inactive`}),w=$(e=>{let t=e().getAll().find(e=>e.queryHash===Wl());return t?t.state.status:`pending`}),T=$(e=>e().getAll().find(e=>e.queryHash===Wl())?.getObserversCount()??0),O=L(()=>N(C())),k=()=>{gu({type:`REFETCH`,queryHash:y()?.queryHash}),(y()?.fetch())?.catch(()=>{})},j=e=>{let t=y();if(!t)return;gu({type:`TRIGGER_ERROR`,queryHash:t.queryHash,metadata:{error:e?.name}});let n=e?.initializer(t)??Error(`Unknown error from devtools`),r=t.options;t.setState({status:`error`,error:n,fetchMeta:{...t.state.fetchMeta,__previousQueryOptions:r}})},te=()=>{let e=y();if(!e)return;gu({type:`RESTORE_LOADING`,queryHash:e.queryHash});let t=e.state,n=e.state.fetchMeta?e.state.fetchMeta.__previousQueryOptions:null;e.cancel({silent:!0}),e.setState({...t,fetchStatus:`idle`,fetchMeta:null}),n&&e.fetch(n)};I(()=>{C()!==`fetching`&&l(!1)});let ne=()=>O()===`gray`?t`
        background-color: ${i(r[O()][200],r[O()][700])};
        color: ${i(r[O()][700],r[O()][300])};
        border-color: ${i(r[O()][400],r[O()][600])};
      `:t`
      background-color: ${i(r[O()][100],r[O()][900])};
      color: ${i(r[O()][700],r[O()][300])};
      border-color: ${i(r[O()][400],r[O()][600])};
    `;return M(D,{get when(){return u(()=>!!y())()&&x()},get children(){var e=Vl(),u=e.firstChild,d=u.nextSibling,_=d.firstChild,O=_.firstChild,N=O.firstChild,re=O.nextSibling,ie=_.nextSibling,ae=ie.firstChild.nextSibling,oe=ie.nextSibling.firstChild.nextSibling,se=d.nextSibling,P=se.nextSibling,ce=P.firstChild,le=ce.firstChild,F=ce.nextSibling,ue=F.firstChild,I=F.nextSibling,de=I.firstChild,fe=I.nextSibling,L=fe.firstChild,pe=fe.nextSibling,me=pe.firstChild,he=me.nextSibling,ge=P.nextSibling;ge.firstChild;var _e=ge.nextSibling,R=_e.nextSibling;return m(N,()=>a(y().queryKey,!0)),m(re,C),m(ae,T),m(oe,()=>new Date(x().dataUpdatedAt).toLocaleTimeString()),ce.$$click=k,F.$$click=()=>{gu({type:`INVALIDATE`,queryHash:y()?.queryHash}),o.invalidateQueries(y())},I.$$click=()=>{gu({type:`RESET`,queryHash:y()?.queryHash}),o.resetQueries(y())},fe.$$click=()=>{gu({type:`REMOVE`,queryHash:y()?.queryHash}),o.removeQueries(y()),Gl(null)},pe.$$click=()=>{if(y()?.state.data===void 0)l(!0),te();else{let e=y();if(!e)return;gu({type:`TRIGGER_LOADING`,queryHash:e.queryHash});let t=e.options;e.fetch({...t,queryFn:()=>new Promise(()=>{}),gcTime:-1}),e.setState({data:void 0,status:`pending`,fetchMeta:{...e.state.fetchMeta,__previousQueryOptions:t}})}},m(pe,()=>w()===`pending`?`Restore`:`Trigger`,he),m(P,M(D,{get when(){return v().length===0||w()===`error`},get children(){var e=Ll(),n=e.firstChild,a=n.nextSibling;return e.$$click=()=>{y().state.error?(gu({type:`RESTORE_ERROR`,queryHash:y()?.queryHash}),o.resetQueries(y())):j()},m(e,()=>w()===`error`?`Restore`:`Trigger`,a),E(a=>{var o=U(t`
                  color: ${i(r.red[500],r.red[400])};
                `,`tsqd-query-details-actions-btn`,`tsqd-query-details-action-error`),s=w()===`pending`,c=t`
                  background-color: ${i(r.red[500],r.red[400])};
                `;return o!==a.e&&A(e,a.e=o),s!==a.t&&(e.disabled=a.t=s),c!==a.a&&A(n,a.a=c),a},{e:void 0,t:void 0,a:void 0}),e}}),null),m(P,M(D,{get when(){return!(v().length===0||w()===`error`)},get children(){var e=Rl(),r=e.firstChild,i=r.nextSibling.nextSibling;return i.firstChild,i.addEventListener(`change`,e=>{j(v().find(t=>t.name===e.currentTarget.value))}),m(i,M(ee,{get each(){return v()},children:e=>(()=>{var t=Hl();return m(t,()=>e.name),E(()=>t.value=e.name),t})()}),null),m(e,M(mc,{}),null),E(a=>{var o=U(n().actionsSelect,`tsqd-query-details-actions-btn`,`tsqd-query-details-action-error-multiple`),s=t`
                  background-color: ${Q.colors.red[400]};
                `,c=w()===`pending`;return o!==a.e&&A(e,a.e=o),s!==a.t&&A(r,a.t=s),c!==a.a&&(i.disabled=a.a=c),a},{e:void 0,t:void 0,a:void 0}),e}}),null),m(ge,()=>f()===`view`?`Explorer`:`Editor`,null),m(e,M(D,{get when(){return f()===`view`},get children(){var e=zl();return m(e,M(nl,{label:`Data`,defaultExpanded:[`Data`],get value(){return S()},editable:!0,onEdit:()=>p(`edit`),get activeQuery(){return y()}})),E(t=>(t=Q.size[2])==null?e.style.removeProperty(`padding`):e.style.setProperty(`padding`,t)),e}}),_e),m(e,M(D,{get when(){return f()===`edit`},get children(){var e=Bl(),a=e.firstChild,o=a.nextSibling,c=o.firstChild,l=c.nextSibling,u=l.firstChild,d=u.nextSibling;return e.addEventListener(`submit`,e=>{e.preventDefault();let t=new FormData(e.currentTarget).get(`data`);try{let e=JSON.parse(t);y().setState({...y().state,data:e}),p(`view`)}catch{g(!0)}}),a.addEventListener(`focus`,()=>g(!1)),m(c,()=>h()?`Invalid Value`:``),u.$$click=()=>p(`view`),E(f=>{var p=U(n().devtoolsEditForm,`tsqd-query-details-data-editor`),m=n().devtoolsEditTextarea,g=h(),_=n().devtoolsEditFormActions,v=n().devtoolsEditFormError,y=n().devtoolsEditFormActionContainer,b=U(n().devtoolsEditFormAction,t`
                      color: ${i(r.gray[600],r.gray[300])};
                    `),x=U(n().devtoolsEditFormAction,t`
                      color: ${i(r.blue[600],r.blue[400])};
                    `);return p!==f.e&&A(e,f.e=p),m!==f.t&&A(a,f.t=m),g!==f.a&&s(a,`data-error`,f.a=g),_!==f.o&&A(o,f.o=_),v!==f.i&&A(c,f.i=v),y!==f.n&&A(l,f.n=y),b!==f.s&&A(u,f.s=b),x!==f.h&&A(d,f.h=x),f},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),E(()=>a.value=JSON.stringify(S(),null,2)),e}}),_e),m(R,M(nl,{label:`Query`,defaultExpanded:[`Query`,`queryKey`],get value(){return b()}})),E(a=>{var o=U(n().detailsContainer,`tsqd-query-details-container`),s=U(n().detailsHeader,`tsqd-query-details-header`),l=U(n().detailsBody,`tsqd-query-details-summary-container`),f=U(n().queryDetailsStatus,ne()),p=U(n().detailsHeader,`tsqd-query-details-header`),m=U(n().actionsBody,`tsqd-query-details-actions-container`),h=U(t`
                color: ${i(r.blue[600],r.blue[400])};
              `,`tsqd-query-details-actions-btn`,`tsqd-query-details-action-refetch`),g=C()===`fetching`,_=t`
                background-color: ${i(r.blue[600],r.blue[400])};
              `,v=U(t`
                color: ${i(r.yellow[600],r.yellow[400])};
              `,`tsqd-query-details-actions-btn`,`tsqd-query-details-action-invalidate`),y=w()===`pending`,b=t`
                background-color: ${i(r.yellow[600],r.yellow[400])};
              `,x=U(t`
                color: ${i(r.gray[600],r.gray[300])};
              `,`tsqd-query-details-actions-btn`,`tsqd-query-details-action-reset`),S=w()===`pending`,T=t`
                background-color: ${i(r.gray[600],r.gray[400])};
              `,E=U(t`
                color: ${i(r.pink[500],r.pink[400])};
              `,`tsqd-query-details-actions-btn`,`tsqd-query-details-action-remove`),D=C()===`fetching`,O=t`
                background-color: ${i(r.pink[500],r.pink[400])};
              `,k=U(t`
                color: ${i(r.cyan[500],r.cyan[400])};
              `,`tsqd-query-details-actions-btn`,`tsqd-query-details-action-loading`),j=c(),M=t`
                background-color: ${i(r.cyan[500],r.cyan[400])};
              `,ee=U(n().detailsHeader,`tsqd-query-details-header`),N=U(n().detailsHeader,`tsqd-query-details-header`),te=Q.size[2];return o!==a.e&&A(e,a.e=o),s!==a.t&&A(u,a.t=s),l!==a.a&&A(d,a.a=l),f!==a.o&&A(re,a.o=f),p!==a.i&&A(se,a.i=p),m!==a.n&&A(P,a.n=m),h!==a.s&&A(ce,a.s=h),g!==a.h&&(ce.disabled=a.h=g),_!==a.r&&A(le,a.r=_),v!==a.d&&A(F,a.d=v),y!==a.l&&(F.disabled=a.l=y),b!==a.u&&A(ue,a.u=b),x!==a.c&&A(I,a.c=x),S!==a.w&&(I.disabled=a.w=S),T!==a.m&&A(de,a.m=T),E!==a.f&&A(fe,a.f=E),D!==a.y&&(fe.disabled=a.y=D),O!==a.g&&A(L,a.g=O),k!==a.p&&A(pe,a.p=k),j!==a.b&&(pe.disabled=a.b=j),M!==a.T&&A(me,a.T=M),ee!==a.A&&A(ge,a.A=ee),N!==a.O&&A(_e,a.O=N),te!==a.I&&((a.I=te)==null?R.style.removeProperty(`padding`):R.style.setProperty(`padding`,te)),a},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0,T:void 0,A:void 0,O:void 0,I:void 0}),e}})},lu=()=>{let e=V(),t=B().shadowDOMTarget?H.bind({target:B().shadowDOMTarget}):H,n=L(()=>e()===`dark`?yu(t):vu(t)),{colors:r}=Q,o=(t,n)=>e()===`dark`?n:t,s=mu(e=>{let t=e().getAll().find(e=>e.mutationId===Kl());return t?t.state.isPaused:!1}),c=mu(e=>{let t=e().getAll().find(e=>e.mutationId===Kl());return t?t.state.status:`idle`}),l=L(()=>i({isPaused:s(),status:c()})),u=mu(e=>e().getAll().find(e=>e.mutationId===Kl()),!1),d=()=>l()===`gray`?t`
        background-color: ${o(r[l()][200],r[l()][700])};
        color: ${o(r[l()][700],r[l()][300])};
        border-color: ${o(r[l()][400],r[l()][600])};
      `:t`
      background-color: ${o(r[l()][100],r[l()][900])};
      color: ${o(r[l()][700],r[l()][300])};
      border-color: ${o(r[l()][400],r[l()][600])};
    `;return M(D,{get when(){return u()},get children(){var e=Ul(),t=e.firstChild,r=t.nextSibling,i=r.firstChild,o=i.firstChild,s=o.firstChild,f=o.nextSibling,p=i.nextSibling.firstChild.nextSibling,h=r.nextSibling,g=h.nextSibling,_=g.nextSibling,v=_.nextSibling,y=v.nextSibling,b=y.nextSibling,x=b.nextSibling,S=x.nextSibling;return m(s,M(D,{get when(){return u().options.mutationKey},fallback:`No mutationKey found`,get children(){return a(u().options.mutationKey,!0)}})),m(f,M(D,{get when(){return l()===`purple`},children:`pending`}),null),m(f,M(D,{get when(){return l()!==`purple`},get children(){return c()}}),null),m(p,()=>new Date(u().state.submittedAt).toLocaleTimeString()),m(g,M(nl,{label:`Variables`,defaultExpanded:[`Variables`],get value(){return u().state.variables}})),m(v,M(nl,{label:`Context`,defaultExpanded:[`Context`],get value(){return u().state.context}})),m(b,M(nl,{label:`Data`,defaultExpanded:[`Data`],get value(){return u().state.data}})),m(S,M(nl,{label:`Mutation`,defaultExpanded:[`Mutation`],get value(){return u()}})),E(i=>{var a=U(n().detailsContainer,`tsqd-query-details-container`),o=U(n().detailsHeader,`tsqd-query-details-header`),s=U(n().detailsBody,`tsqd-query-details-summary-container`),c=U(n().queryDetailsStatus,d()),l=U(n().detailsHeader,`tsqd-query-details-header`),u=Q.size[2],p=U(n().detailsHeader,`tsqd-query-details-header`),m=Q.size[2],C=U(n().detailsHeader,`tsqd-query-details-header`),w=Q.size[2],T=U(n().detailsHeader,`tsqd-query-details-header`),E=Q.size[2];return a!==i.e&&A(e,i.e=a),o!==i.t&&A(t,i.t=o),s!==i.a&&A(r,i.a=s),c!==i.o&&A(f,i.o=c),l!==i.i&&A(h,i.i=l),u!==i.n&&((i.n=u)==null?g.style.removeProperty(`padding`):g.style.setProperty(`padding`,u)),p!==i.s&&A(_,i.s=p),m!==i.h&&((i.h=m)==null?v.style.removeProperty(`padding`):v.style.setProperty(`padding`,m)),C!==i.r&&A(y,i.r=C),w!==i.d&&((i.d=w)==null?b.style.removeProperty(`padding`):b.style.setProperty(`padding`,w)),T!==i.l&&A(x,i.l=T),E!==i.u&&((i.u=E)==null?S.style.removeProperty(`padding`):S.style.setProperty(`padding`,E)),i},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),e}})},uu=new Map,du=()=>{let e=L(()=>B().client.getQueryCache()),t=e().subscribe(t=>{O(()=>{for(let[n,r]of uu.entries())r.shouldUpdate(t)&&r.setter(n(e))})});return y(()=>{uu.clear(),t()}),t},$=(e,t=!0,n=()=>!0)=>{let r=L(()=>B().client.getQueryCache()),[i,a]=_(e(r),t?void 0:{equals:!1});return I(()=>{a(e(r))}),uu.set(e,{setter:a,shouldUpdate:n}),y(()=>{uu.delete(e)}),i},fu=new Map,pu=()=>{let e=L(()=>B().client.getMutationCache()),t=e().subscribe(()=>{for(let[t,n]of fu.entries())queueMicrotask(()=>{n(t(e))})});return y(()=>{fu.clear(),t()}),t},mu=(e,t=!0)=>{let n=L(()=>B().client.getMutationCache()),[r,i]=_(e(n),t?void 0:{equals:!1});return I(()=>{i(e(n))}),fu.set(e,i),y(()=>{fu.delete(e)}),r},hu=`@tanstack/query-devtools-event`,gu=({type:e,queryHash:t,metadata:n})=>{let r=new CustomEvent(hu,{detail:{type:e,queryHash:t,metadata:n},bubbles:!0,cancelable:!0});window.dispatchEvent(r)},_u=(e,t)=>{let{colors:n,font:r,size:i,alpha:a,shadow:o,border:s}=Q,c=(t,n)=>e===`light`?t:n;return{devtoolsBtn:t`
      z-index: 100000;
      position: fixed;
      padding: 4px;
      text-align: left;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      box-shadow: ${o.md()};
      overflow: hidden;

      & div {
        position: absolute;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        border-radius: 9999px;

        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        filter: blur(6px) saturate(1.2) contrast(1.1);
      }

      &:focus-within {
        outline-offset: 2px;
        outline: 3px solid ${n.green[600]};
      }

      & button {
        position: relative;
        z-index: 1;
        padding: 0;
        border-radius: 9999px;
        background-color: transparent;
        border: none;
        height: 40px;
        display: flex;
        width: 40px;
        overflow: hidden;
        cursor: pointer;
        outline: none;
        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
    `,panel:t`
      position: fixed;
      z-index: 9999;
      display: flex;
      gap: ${Q.size[.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${c(n.gray[300],n.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${c(n.gray[400],n.darkGray[300])};
      }
    `,parentPanel:t`
      z-index: 9999;
      display: flex;
      height: 100%;
      gap: ${Q.size[.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${c(n.gray[300],n.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${c(n.gray[400],n.darkGray[300])};
      }
    `,"devtoolsBtn-position-bottom-right":t`
      bottom: 12px;
      right: 12px;
    `,"devtoolsBtn-position-bottom-left":t`
      bottom: 12px;
      left: 12px;
    `,"devtoolsBtn-position-top-left":t`
      top: 12px;
      left: 12px;
    `,"devtoolsBtn-position-top-right":t`
      top: 12px;
      right: 12px;
    `,"devtoolsBtn-position-relative":t`
      position: relative;
    `,"panel-position-top":t`
      top: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${i[14]};
      border-bottom: ${c(n.gray[400],n.darkGray[300])} 1px solid;
    `,"panel-position-bottom":t`
      bottom: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${i[14]};
      border-top: ${c(n.gray[400],n.darkGray[300])} 1px solid;
    `,"panel-position-right":t`
      bottom: 0;
      right: 0;
      top: 0;
      border-left: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      max-width: 90%;
    `,"panel-position-left":t`
      bottom: 0;
      left: 0;
      top: 0;
      border-right: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      max-width: 90%;
    `,closeBtn:t`
      position: absolute;
      cursor: pointer;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${c(n.gray[50],n.darkGray[700])};
      &:hover {
        background-color: ${c(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline: 2px solid ${n.blue[600]};
      }
      & svg {
        color: ${c(n.gray[600],n.gray[400])};
        width: ${i[2]};
        height: ${i[2]};
      }
    `,"closeBtn-position-top":t`
      bottom: 0;
      right: ${i[2]};
      transform: translate(0, 100%);
      border-right: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-left: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: none;
      border-bottom: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: 0px 0px ${s.radius.sm} ${s.radius.sm};
      padding: ${i[.5]} ${i[1.5]} ${i[1]} ${i[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        bottom: 100%;
        left: -${i[2.5]};
        height: ${i[1.5]};
        width: calc(100% + ${i[5]});
      }

      & svg {
        transform: rotate(180deg);
      }
    `,"closeBtn-position-bottom":t`
      top: 0;
      right: ${i[2]};
      transform: translate(0, -100%);
      border-right: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-left: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: none;
      border-radius: ${s.radius.sm} ${s.radius.sm} 0px 0px;
      padding: ${i[1]} ${i[1.5]} ${i[.5]} ${i[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${i[2.5]};
        height: ${i[1.5]};
        width: calc(100% + ${i[5]});
      }
    `,"closeBtn-position-right":t`
      bottom: ${i[2]};
      left: 0;
      transform: translate(-100%, 0);
      border-right: none;
      border-left: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: ${s.radius.sm} 0px 0px ${s.radius.sm};
      padding: ${i[1.5]} ${i[.5]} ${i[1.5]} ${i[1]};

      &::after {
        content: ' ';
        position: absolute;
        left: 100%;
        height: calc(100% + ${i[5]});
        width: ${i[1.5]};
      }

      & svg {
        transform: rotate(-90deg);
      }
    `,"closeBtn-position-left":t`
      bottom: ${i[2]};
      right: 0;
      transform: translate(100%, 0);
      border-left: none;
      border-right: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: 0px ${s.radius.sm} ${s.radius.sm} 0px;
      padding: ${i[1.5]} ${i[1]} ${i[1.5]} ${i[.5]};

      &::after {
        content: ' ';
        position: absolute;
        right: 100%;
        height: calc(100% + ${i[5]});
        width: ${i[1.5]};
      }

      & svg {
        transform: rotate(90deg);
      }
    `,queriesContainer:t`
      flex: 1 1 700px;
      background-color: ${c(n.gray[50],n.darkGray[700])};
      display: flex;
      flex-direction: column;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
    `,dragHandle:t`
      position: absolute;
      transition: background-color 0.125s ease;
      &:hover {
        background-color: ${n.purple[400]}${c(``,a[90])};
      }
      z-index: 4;
    `,"dragHandle-position-top":t`
      bottom: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,"dragHandle-position-bottom":t`
      top: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,"dragHandle-position-right":t`
      left: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,"dragHandle-position-left":t`
      right: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,row:t`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${Q.size[2]} ${Q.size[2.5]};
      gap: ${Q.size[2.5]};
      border-bottom: ${c(n.gray[300],n.darkGray[500])} 1px solid;
      align-items: center;
      & > button {
        padding: 0;
        background: transparent;
        border: none;
        display: flex;
        gap: ${i[.5]};
        flex-direction: column;
      }
    `,logoAndToggleContainer:t`
      display: flex;
      gap: ${Q.size[3]};
      align-items: center;
    `,logo:t`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      gap: ${Q.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${s.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,tanstackLogo:t`
      font-size: ${r.size.md};
      font-weight: ${r.weight.bold};
      line-height: ${r.lineHeight.xs};
      white-space: nowrap;
      color: ${c(n.gray[600],n.gray[300])};
    `,queryFlavorLogo:t`
      font-weight: ${r.weight.semibold};
      font-size: ${r.size.xs};
      background: linear-gradient(
        to right,
        ${c(`#ea4037, #ff9b11`,`#dd524b, #e9a03b`)}
      );
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,queryStatusContainer:t`
      display: flex;
      gap: ${Q.size[2]};
      height: min-content;
    `,queryStatusTag:t`
      display: flex;
      gap: ${Q.size[1.5]};
      box-sizing: border-box;
      height: ${Q.size[6.5]};
      background: ${c(n.gray[50],n.darkGray[500])};
      color: ${c(n.gray[700],n.gray[300])};
      border-radius: ${Q.border.radius.sm};
      font-size: ${r.size.sm};
      padding: ${Q.size[1]};
      padding-left: ${Q.size[1.5]};
      align-items: center;
      font-weight: ${r.weight.medium};
      border: ${c(`1px solid `+n.gray[300],`1px solid transparent`)};
      user-select: none;
      position: relative;
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
    `,queryStatusTagLabel:t`
      font-size: ${r.size.xs};
    `,queryStatusCount:t`
      font-size: ${r.size.xs};
      padding: 0 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${c(n.gray[500],n.gray[400])};
      background-color: ${c(n.gray[200],n.darkGray[300])};
      border-radius: 2px;
      font-variant-numeric: tabular-nums;
      height: ${Q.size[4.5]};
    `,statusTooltip:t`
      position: absolute;
      z-index: 1;
      background-color: ${c(n.gray[50],n.darkGray[500])};
      top: 100%;
      left: 50%;
      transform: translate(-50%, calc(${Q.size[2]}));
      padding: ${Q.size[.5]} ${Q.size[2]};
      border-radius: ${Q.border.radius.sm};
      font-size: ${r.size.xs};
      border: 1px solid ${c(n.gray[400],n.gray[600])};
      color: ${c(n.gray[600],n.gray[300])};

      &::before {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, -100%);
        position: absolute;
        border-color: transparent transparent
          ${c(n.gray[400],n.gray[600])} transparent;
        border-style: solid;
        border-width: 7px;
        /* transform: rotate(180deg); */
      }

      &::after {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, calc(-100% + 2px));
        position: absolute;
        border-color: transparent transparent
          ${c(n.gray[100],n.darkGray[500])} transparent;
        border-style: solid;
        border-width: 7px;
      }
    `,filtersContainer:t`
      display: flex;
      gap: ${Q.size[2]};
      & > button {
        cursor: pointer;
        padding: ${Q.size[.5]} ${Q.size[1.5]} ${Q.size[.5]}
          ${Q.size[2]};
        border-radius: ${Q.border.radius.sm};
        background-color: ${c(n.gray[100],n.darkGray[400])};
        border: 1px solid ${c(n.gray[300],n.darkGray[200])};
        color: ${c(n.gray[700],n.gray[300])};
        font-size: ${r.size.xs};
        display: flex;
        align-items: center;
        line-height: ${r.lineHeight.sm};
        gap: ${Q.size[1.5]};
        max-width: 160px;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${s.radius.xs};
          outline: 2px solid ${n.blue[800]};
        }
        & svg {
          width: ${Q.size[3]};
          height: ${Q.size[3]};
          color: ${c(n.gray[500],n.gray[400])};
        }
      }
    `,filterInput:t`
      padding: ${i[.5]} ${i[2]};
      border-radius: ${Q.border.radius.sm};
      background-color: ${c(n.gray[100],n.darkGray[400])};
      display: flex;
      box-sizing: content-box;
      align-items: center;
      gap: ${Q.size[1.5]};
      max-width: 160px;
      min-width: 100px;
      border: 1px solid ${c(n.gray[300],n.darkGray[200])};
      height: min-content;
      color: ${c(n.gray[600],n.gray[400])};
      & > svg {
        width: ${i[3]};
        height: ${i[3]};
      }
      & input {
        font-size: ${r.size.xs};
        width: 100%;
        background-color: ${c(n.gray[100],n.darkGray[400])};
        border: none;
        padding: 0;
        line-height: ${r.lineHeight.sm};
        color: ${c(n.gray[700],n.gray[300])};
        &::placeholder {
          color: ${c(n.gray[700],n.gray[300])};
        }
        &:focus {
          outline: none;
        }
      }

      &:focus-within {
        outline-offset: 2px;
        border-radius: ${s.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,filterSelect:t`
      padding: ${Q.size[.5]} ${Q.size[2]};
      border-radius: ${Q.border.radius.sm};
      background-color: ${c(n.gray[100],n.darkGray[400])};
      display: flex;
      align-items: center;
      gap: ${Q.size[1.5]};
      box-sizing: content-box;
      max-width: 160px;
      border: 1px solid ${c(n.gray[300],n.darkGray[200])};
      height: min-content;
      & > svg {
        color: ${c(n.gray[600],n.gray[400])};
        width: ${Q.size[2]};
        height: ${Q.size[2]};
      }
      & > select {
        appearance: none;
        color: ${c(n.gray[700],n.gray[300])};
        min-width: 100px;
        line-height: ${r.lineHeight.sm};
        font-size: ${r.size.xs};
        background-color: ${c(n.gray[100],n.darkGray[400])};
        border: none;
        &:focus {
          outline: none;
        }
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${s.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,actionsContainer:t`
      display: flex;
      gap: ${Q.size[2]};
    `,actionsBtn:t`
      border-radius: ${Q.border.radius.sm};
      background-color: ${c(n.gray[100],n.darkGray[400])};
      border: 1px solid ${c(n.gray[300],n.darkGray[200])};
      width: ${Q.size[6.5]};
      height: ${Q.size[6.5]};
      justify-content: center;
      display: flex;
      align-items: center;
      gap: ${Q.size[1.5]};
      max-width: 160px;
      cursor: pointer;
      padding: 0;
      &:hover {
        background-color: ${c(n.gray[200],n.darkGray[500])};
      }
      & svg {
        color: ${c(n.gray[700],n.gray[300])};
        width: ${Q.size[3]};
        height: ${Q.size[3]};
      }
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${s.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,actionsBtnOffline:t`
      & svg {
        stroke: ${c(n.yellow[700],n.yellow[500])};
        fill: ${c(n.yellow[700],n.yellow[500])};
      }
    `,overflowQueryContainer:t`
      flex: 1;
      overflow-y: auto;
      & > div {
        display: flex;
        flex-direction: column;
      }
    `,queryRow:t`
      display: flex;
      align-items: center;
      padding: 0;
      border: none;
      cursor: pointer;
      color: ${c(n.gray[700],n.gray[300])};
      background-color: ${c(n.gray[50],n.darkGray[700])};
      line-height: 1;
      &:focus {
        outline: none;
      }
      &:focus-visible {
        outline-offset: -2px;
        border-radius: ${s.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      &:hover .tsqd-query-hash {
        background-color: ${c(n.gray[200],n.darkGray[600])};
      }

      & .tsqd-query-observer-count {
        padding: 0 ${Q.size[1]};
        user-select: none;
        min-width: ${Q.size[6.5]};
        align-self: stretch;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${r.size.xs};
        font-weight: ${r.weight.medium};
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom: 1px solid ${c(n.gray[300],n.darkGray[700])};
      }
      & .tsqd-query-hash {
        user-select: text;
        font-size: ${r.size.xs};
        display: flex;
        align-items: center;
        min-height: ${Q.size[6]};
        flex: 1;
        padding: ${Q.size[1]} ${Q.size[2]};
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        border-bottom: 1px solid ${c(n.gray[300],n.darkGray[400])};
        text-align: left;
        text-overflow: clip;
        word-break: break-word;
      }

      & .tsqd-query-disabled-indicator {
        align-self: stretch;
        display: flex;
        align-items: center;
        padding: 0 ${Q.size[2]};
        color: ${c(n.gray[800],n.gray[300])};
        background-color: ${c(n.gray[300],n.darkGray[600])};
        border-bottom: 1px solid ${c(n.gray[300],n.darkGray[400])};
        font-size: ${r.size.xs};
      }

      & .tsqd-query-static-indicator {
        align-self: stretch;
        display: flex;
        align-items: center;
        padding: 0 ${Q.size[2]};
        color: ${c(n.teal[800],n.teal[300])};
        background-color: ${c(n.teal[100],n.teal[900])};
        border-bottom: 1px solid ${c(n.teal[300],n.teal[700])};
        font-size: ${r.size.xs};
      }
    `,selectedQueryRow:t`
      background-color: ${c(n.gray[200],n.darkGray[500])};
    `,detailsContainer:t`
      flex: 1 1 700px;
      background-color: ${c(n.gray[50],n.darkGray[700])};
      color: ${c(n.gray[700],n.gray[300])};
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      display: flex;
      text-align: left;
    `,detailsHeader:t`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${c(n.gray[200],n.darkGray[600])};
      padding: ${Q.size[1.5]} ${Q.size[2]};
      font-weight: ${r.weight.medium};
      font-size: ${r.size.xs};
      line-height: ${r.lineHeight.xs};
      text-align: left;
    `,detailsBody:t`
      margin: ${Q.size[1.5]} 0px ${Q.size[2]} 0px;
      & > div {
        display: flex;
        align-items: stretch;
        padding: 0 ${Q.size[2]};
        line-height: ${r.lineHeight.sm};
        justify-content: space-between;
        & > span {
          font-size: ${r.size.xs};
        }
        & > span:nth-child(2) {
          font-variant-numeric: tabular-nums;
        }
      }

      & > div:first-child {
        margin-bottom: ${Q.size[1.5]};
      }

      & code {
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        margin: 0;
        font-size: ${r.size.xs};
        line-height: ${r.lineHeight.xs};
        max-width: 100%;
        white-space: pre-wrap;
        overflow-wrap: anywhere;
        word-break: break-word;
      }

      & pre {
        margin: 0;
        display: flex;
        align-items: center;
      }
    `,queryDetailsStatus:t`
      border: 1px solid ${n.darkGray[200]};
      border-radius: ${Q.border.radius.sm};
      font-weight: ${r.weight.medium};
      padding: ${Q.size[1]} ${Q.size[2.5]};
    `,actionsBody:t`
      flex-wrap: wrap;
      margin: ${Q.size[2]} 0px ${Q.size[2]} 0px;
      display: flex;
      gap: ${Q.size[2]};
      padding: 0px ${Q.size[2]};
      & > button {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
        font-size: ${r.size.xs};
        padding: ${Q.size[1]} ${Q.size[2]};
        display: flex;
        border-radius: ${Q.border.radius.sm};
        background-color: ${c(n.gray[100],n.darkGray[600])};
        border: 1px solid ${c(n.gray[300],n.darkGray[400])};
        align-items: center;
        gap: ${Q.size[2]};
        font-weight: ${r.weight.medium};
        line-height: ${r.lineHeight.xs};
        cursor: pointer;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${s.radius.xs};
          outline: 2px solid ${n.blue[800]};
        }
        &:hover {
          background-color: ${c(n.gray[200],n.darkGray[500])};
        }

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        & > span {
          width: ${i[1.5]};
          height: ${i[1.5]};
          border-radius: ${Q.border.radius.full};
        }
      }
    `,actionsSelect:t`
      font-size: ${r.size.xs};
      padding: ${Q.size[.5]} ${Q.size[2]};
      display: flex;
      border-radius: ${Q.border.radius.sm};
      overflow: hidden;
      background-color: ${c(n.gray[100],n.darkGray[600])};
      border: 1px solid ${c(n.gray[300],n.darkGray[400])};
      align-items: center;
      gap: ${Q.size[2]};
      font-weight: ${r.weight.medium};
      line-height: ${r.lineHeight.sm};
      color: ${c(n.red[500],n.red[400])};
      cursor: pointer;
      position: relative;
      &:hover {
        background-color: ${c(n.gray[200],n.darkGray[500])};
      }
      & > span {
        width: ${i[1.5]};
        height: ${i[1.5]};
        border-radius: ${Q.border.radius.full};
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${s.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      & select {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        appearance: none;
        background-color: transparent;
        border: none;
        color: transparent;
        outline: none;
      }

      & svg path {
        stroke: ${Q.colors.red[400]};
      }
      & svg {
        width: ${Q.size[2]};
        height: ${Q.size[2]};
      }
    `,settingsMenu:t`
      display: flex;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
      flex-direction: column;
      gap: ${i[.5]};
      border-radius: ${Q.border.radius.sm};
      border: 1px solid ${c(n.gray[300],n.gray[700])};
      background-color: ${c(n.gray[50],n.darkGray[600])};
      font-size: ${r.size.xs};
      color: ${c(n.gray[700],n.gray[300])};
      z-index: 99999;
      min-width: 120px;
      padding: ${i[.5]};
    `,settingsSubTrigger:t`
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: ${Q.border.radius.xs};
      padding: ${Q.size[1]} ${Q.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      color: ${c(n.gray[700],n.gray[300])};
      & svg {
        color: ${c(n.gray[600],n.gray[400])};
        transform: rotate(-90deg);
        width: ${Q.size[2]};
        height: ${Q.size[2]};
      }
      &:hover {
        background-color: ${c(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
      &.data-disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `,settingsMenuHeader:t`
      padding: ${Q.size[1]} ${Q.size[1]};
      font-weight: ${r.weight.medium};
      border-bottom: 1px solid ${c(n.gray[300],n.darkGray[400])};
      color: ${c(n.gray[500],n.gray[400])};
      font-size: ${r.size.xs};
    `,settingsSubButton:t`
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${c(n.gray[700],n.gray[300])};
      font-size: ${r.size.xs};
      border-radius: ${Q.border.radius.xs};
      padding: ${Q.size[1]} ${Q.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      & svg {
        color: ${c(n.gray[600],n.gray[400])};
      }
      &:hover {
        background-color: ${c(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
    `,themeSelectedButton:t`
      background-color: ${c(n.purple[100],n.purple[900])};
      color: ${c(n.purple[700],n.purple[300])};
      & svg {
        color: ${c(n.purple[700],n.purple[300])};
      }
      &:hover {
        background-color: ${c(n.purple[100],n.purple[900])};
      }
    `,viewToggle:t`
      border-radius: ${Q.border.radius.sm};
      background-color: ${c(n.gray[200],n.darkGray[600])};
      border: 1px solid ${c(n.gray[300],n.darkGray[200])};
      display: flex;
      padding: 0;
      font-size: ${r.size.xs};
      color: ${c(n.gray[700],n.gray[300])};
      overflow: hidden;

      &:has(:focus-visible) {
        outline: 2px solid ${n.blue[800]};
      }

      & .tsqd-radio-toggle {
        opacity: 0.5;
        display: flex;
        & label {
          display: flex;
          align-items: center;
          cursor: pointer;
          line-height: ${r.lineHeight.md};
        }

        & label:hover {
          background-color: ${c(n.gray[100],n.darkGray[500])};
        }
      }

      & > [data-checked] {
        opacity: 1;
        background-color: ${c(n.gray[100],n.darkGray[400])};
        & label:hover {
          background-color: ${c(n.gray[100],n.darkGray[400])};
        }
      }

      & .tsqd-radio-toggle:first-child {
        & label {
          padding: 0 ${Q.size[1.5]} 0 ${Q.size[2]};
        }
        border-right: 1px solid ${c(n.gray[300],n.darkGray[200])};
      }

      & .tsqd-radio-toggle:nth-child(2) {
        & label {
          padding: 0 ${Q.size[2]} 0 ${Q.size[1.5]};
        }
      }
    `,devtoolsEditForm:t`
      padding: ${i[2]};
      & > [data-error='true'] {
        outline: 2px solid ${c(n.red[200],n.red[800])};
        outline-offset: 2px;
        border-radius: ${s.radius.xs};
      }
    `,devtoolsEditTextarea:t`
      width: 100%;
      max-height: 500px;
      font-family: 'Fira Code', monospace;
      font-size: ${r.size.xs};
      border-radius: ${s.radius.sm};
      field-sizing: content;
      padding: ${i[2]};
      background-color: ${c(n.gray[100],n.darkGray[800])};
      color: ${c(n.gray[900],n.gray[100])};
      border: 1px solid ${c(n.gray[200],n.gray[700])};
      resize: none;
      &:focus {
        outline-offset: 2px;
        border-radius: ${s.radius.xs};
        outline: 2px solid ${c(n.blue[200],n.blue[800])};
      }
    `,devtoolsEditFormActions:t`
      display: flex;
      justify-content: space-between;
      gap: ${i[2]};
      align-items: center;
      padding-top: ${i[1]};
      font-size: ${r.size.xs};
    `,devtoolsEditFormError:t`
      color: ${c(n.red[700],n.red[500])};
    `,devtoolsEditFormActionContainer:t`
      display: flex;
      gap: ${i[2]};
    `,devtoolsEditFormAction:t`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      font-size: ${r.size.xs};
      padding: ${i[1]} ${Q.size[2]};
      display: flex;
      border-radius: ${s.radius.sm};
      background-color: ${c(n.gray[100],n.darkGray[600])};
      border: 1px solid ${c(n.gray[300],n.darkGray[400])};
      align-items: center;
      gap: ${i[2]};
      font-weight: ${r.weight.medium};
      line-height: ${r.lineHeight.xs};
      cursor: pointer;
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${s.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      &:hover {
        background-color: ${c(n.gray[200],n.darkGray[500])};
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `}},vu=e=>_u(`light`,e),yu=e=>_u(`dark`,e);de([`click`,`mousedown`,`input`]);export{ze as a,Ce as c,Ve as i,Ql as n,je as o,eu as r,Ue as s,nu as t};