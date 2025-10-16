import{B as e,E as t,F as n,G as r,H as i,J as a,L as o,N as s,Q as c,T as l,U as u,V as d,X as f,Y as p,at as m,b as h,c as g,et as _,j as v,k as y,l as b,nt as x,ot as S,v as C,w,x as T,y as E}from"./main-DjdsgoKC.js";import{t as D}from"./clsx-CTPc_hx4.js";var O={data:``},k=e=>{if(typeof window==`object`){let t=(e?e.querySelector(`#_goober`):window._goober)||Object.assign(document.createElement(`style`),{innerHTML:` `,id:`_goober`});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||O},A=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,j=/\/\*[^]*?\*\/|  +/g,M=/\n+/g,N=(e,t)=>{let n=``,r=``,i=``;for(let a in e){let o=e[a];a[0]==`@`?a[1]==`i`?n=a+` `+o+`;`:r+=a[1]==`f`?N(o,a):a+`{`+N(o,a[1]==`k`?``:t)+`}`:typeof o==`object`?r+=N(o,t?t.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+` `+t:t)):a):o!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,`-$&`).toLowerCase(),i+=N.p?N.p(a,o):a+`:`+o+`;`)}return n+(t&&i?t+`{`+i+`}`:i)+r},P={},F=e=>{if(typeof e==`object`){let t=``;for(let n in e)t+=n+F(e[n]);return t}return e},I=(e,t,n,r,i)=>{let a=F(e),o=P[a]||(P[a]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return`go`+n})(a));if(!P[o]){let t=a===e?(e=>{let t,n,r=[{}];for(;t=A.exec(e.replace(j,``));)t[4]?r.shift():t[3]?(n=t[3].replace(M,` `).trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(M,` `).trim();return r[0]})(e):e;P[o]=N(i?{[`@keyframes `+o]:t}:t,n?``:`.`+o)}let s=n&&P.g?P.g:null;return n&&(P.g=P[o]),((e,t,n,r)=>{r?t.data=t.data.replace(r,e):t.data.indexOf(e)===-1&&(t.data=n?e+t.data:t.data+e)})(P[o],t,r,s),o},ee=(e,t,n)=>e.reduce((e,r,i)=>{let a=t[i];if(a&&a.call){let e=a(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?`.`+t:e&&typeof e==`object`?e.props?``:N(e,``):!1===e?``:e}return e+r+(a??``)},``);function L(e){let t=this||{},n=e.call?e(t.p):e;return I(n.unshift?n.raw?ee(n,[].slice.call(arguments,1),t.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(t.p):n),{}):n,k(t.target),t.g,t.o,t.k)}L.bind({g:1}),L.bind({k:1});var te=typeof window>`u`;function R(e){return e.isFetching&&e.status===`success`?e.isFetching===`beforeLoad`?`purple`:`blue`:{pending:`yellow`,success:`green`,error:`red`,notFound:`purple`,redirected:`gray`}[e.status]}function z(e,t){let n=e.find(e=>e.routeId===t.id);return n?R(n):`gray`}function B(){let[e,t]=c(!1);return(te?a:f)(()=>{t(!0)}),e}var ne=e=>{let t=Object.getOwnPropertyNames(Object(e)),n=typeof e==`bigint`?`${e.toString()}n`:e;try{return JSON.stringify(n,t)}catch{return`unable to stringify`}};function V(e,t=[e=>e]){return e.map((e,t)=>[e,t]).sort(([e,n],[r,i])=>{for(let n of t){let t=n(e),i=n(r);if(t===void 0){if(i===void 0)continue;return 1}if(t!==i)return t>i?1:-1}return n-i}).map(([e])=>e)}var H={colors:{inherit:`inherit`,current:`currentColor`,transparent:`transparent`,black:`#000000`,white:`#ffffff`,neutral:{50:`#f9fafb`,100:`#f2f4f7`,200:`#eaecf0`,300:`#d0d5dd`,400:`#98a2b3`,500:`#667085`,600:`#475467`,700:`#344054`,800:`#1d2939`,900:`#101828`},darkGray:{50:`#525c7a`,100:`#49536e`,200:`#414962`,300:`#394056`,400:`#313749`,500:`#292e3d`,600:`#212530`,700:`#191c24`,800:`#111318`,900:`#0b0d10`},gray:{50:`#f9fafb`,100:`#f2f4f7`,200:`#eaecf0`,300:`#d0d5dd`,400:`#98a2b3`,500:`#667085`,600:`#475467`,700:`#344054`,800:`#1d2939`,900:`#101828`},blue:{25:`#F5FAFF`,50:`#EFF8FF`,100:`#D1E9FF`,200:`#B2DDFF`,300:`#84CAFF`,400:`#53B1FD`,500:`#2E90FA`,600:`#1570EF`,700:`#175CD3`,800:`#1849A9`,900:`#194185`},green:{25:`#F6FEF9`,50:`#ECFDF3`,100:`#D1FADF`,200:`#A6F4C5`,300:`#6CE9A6`,400:`#32D583`,500:`#12B76A`,600:`#039855`,700:`#027A48`,800:`#05603A`,900:`#054F31`},red:{50:`#fef2f2`,100:`#fee2e2`,200:`#fecaca`,300:`#fca5a5`,400:`#f87171`,500:`#ef4444`,600:`#dc2626`,700:`#b91c1c`,800:`#991b1b`,900:`#7f1d1d`,950:`#450a0a`},yellow:{25:`#FFFCF5`,50:`#FFFAEB`,100:`#FEF0C7`,200:`#FEDF89`,300:`#FEC84B`,400:`#FDB022`,500:`#F79009`,600:`#DC6803`,700:`#B54708`,800:`#93370D`,900:`#7A2E0E`},purple:{25:`#FAFAFF`,50:`#F4F3FF`,100:`#EBE9FE`,200:`#D9D6FE`,300:`#BDB4FE`,400:`#9B8AFB`,500:`#7A5AF8`,600:`#6938EF`,700:`#5925DC`,800:`#4A1FB8`,900:`#3E1C96`},teal:{25:`#F6FEFC`,50:`#F0FDF9`,100:`#CCFBEF`,200:`#99F6E0`,300:`#5FE9D0`,400:`#2ED3B7`,500:`#15B79E`,600:`#0E9384`,700:`#107569`,800:`#125D56`,900:`#134E48`},pink:{25:`#fdf2f8`,50:`#fce7f3`,100:`#fbcfe8`,200:`#f9a8d4`,300:`#f472b6`,400:`#ec4899`,500:`#db2777`,600:`#be185d`,700:`#9d174d`,800:`#831843`,900:`#500724`},cyan:{25:`#ecfeff`,50:`#cffafe`,100:`#a5f3fc`,200:`#67e8f9`,300:`#22d3ee`,400:`#06b6d4`,500:`#0891b2`,600:`#0e7490`,700:`#155e75`,800:`#164e63`,900:`#083344`}},alpha:{90:`e5`,70:`b3`,20:`33`},font:{size:{"2xs":`calc(var(--tsrd-font-size) * 0.625)`,xs:`calc(var(--tsrd-font-size) * 0.75)`,sm:`calc(var(--tsrd-font-size) * 0.875)`,md:`var(--tsrd-font-size)`},lineHeight:{xs:`calc(var(--tsrd-font-size) * 1)`,sm:`calc(var(--tsrd-font-size) * 1.25)`},weight:{normal:`400`,medium:`500`,semibold:`600`,bold:`700`},fontFamily:{sans:`ui-sans-serif, Inter, system-ui, sans-serif, sans-serif`,mono:`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`}},border:{radius:{xs:`calc(var(--tsrd-font-size) * 0.125)`,sm:`calc(var(--tsrd-font-size) * 0.25)`,md:`calc(var(--tsrd-font-size) * 0.375)`,full:`9999px`}},size:{0:`0px`,.5:`calc(var(--tsrd-font-size) * 0.125)`,1:`calc(var(--tsrd-font-size) * 0.25)`,1.5:`calc(var(--tsrd-font-size) * 0.375)`,2:`calc(var(--tsrd-font-size) * 0.5)`,2.5:`calc(var(--tsrd-font-size) * 0.625)`,3:`calc(var(--tsrd-font-size) * 0.75)`,3.5:`calc(var(--tsrd-font-size) * 0.875)`,4:`calc(var(--tsrd-font-size) * 1)`,5:`calc(var(--tsrd-font-size) * 1.25)`,8:`calc(var(--tsrd-font-size) * 2)`}},re=e=>{let{colors:t,font:n,size:r,alpha:i,border:a}=H,{fontFamily:o,lineHeight:s,size:c}=n,l=e?L.bind({target:e}):L;return{devtoolsPanelContainer:l`
      direction: ltr;
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 99999;
      width: 100%;
      max-height: 90%;
      border-top: 1px solid ${t.gray[700]};
      transform-origin: top;
    `,devtoolsPanelContainerVisibility:e=>l`
        visibility: ${e?`visible`:`hidden`};
      `,devtoolsPanelContainerResizing:e=>e()?l`
          transition: none;
        `:l`
        transition: all 0.4s ease;
      `,devtoolsPanelContainerAnimation:(e,t)=>e?l`
          pointer-events: auto;
          transform: translateY(0);
        `:l`
        pointer-events: none;
        transform: translateY(${t}px);
      `,logo:l`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      font-family: ${o.sans};
      gap: ${H.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${t.blue[800]};
      }
    `,tanstackLogo:l`
      font-size: ${n.size.md};
      font-weight: ${n.weight.bold};
      line-height: ${n.lineHeight.xs};
      white-space: nowrap;
      color: ${t.gray[300]};
    `,routerLogo:l`
      font-weight: ${n.weight.semibold};
      font-size: ${n.size.xs};
      background: linear-gradient(to right, #84cc16, #10b981);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,devtoolsPanel:l`
      display: flex;
      font-size: ${c.sm};
      font-family: ${o.sans};
      background-color: ${t.darkGray[700]};
      color: ${t.gray[300]};

      @media (max-width: 700px) {
        flex-direction: column;
      }
      @media (max-width: 600px) {
        font-size: ${c.xs};
      }
    `,dragHandle:l`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 4px;
      cursor: row-resize;
      z-index: 100000;
      &:hover {
        background-color: ${t.purple[400]}${i[90]};
      }
    `,firstContainer:l`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,routerExplorerContainer:l`
      overflow-y: auto;
      flex: 1;
    `,routerExplorer:l`
      padding: ${H.size[2]};
    `,row:l`
      display: flex;
      align-items: center;
      padding: ${H.size[2]} ${H.size[2.5]};
      gap: ${H.size[2.5]};
      border-bottom: ${t.darkGray[500]} 1px solid;
      align-items: center;
    `,detailsHeader:l`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${t.darkGray[600]};
      padding: 0px ${H.size[2]};
      font-weight: ${n.weight.medium};
      font-size: ${n.size.xs};
      min-height: ${H.size[8]};
      line-height: ${n.lineHeight.xs};
      text-align: left;
      display: flex;
      align-items: center;
    `,maskedBadge:l`
      background: ${t.yellow[900]}${i[70]};
      color: ${t.yellow[300]};
      display: inline-block;
      padding: ${H.size[0]} ${H.size[2.5]};
      border-radius: ${a.radius.full};
      font-size: ${n.size.xs};
      font-weight: ${n.weight.normal};
      border: 1px solid ${t.yellow[300]};
    `,maskedLocation:l`
      color: ${t.yellow[300]};
    `,detailsContent:l`
      padding: ${H.size[1.5]} ${H.size[2]};
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: ${n.size.xs};
    `,routeMatchesToggle:l`
      display: flex;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      border-radius: ${a.radius.sm};
      overflow: hidden;
    `,routeMatchesToggleBtn:(e,r)=>{let a=[l`
        appearance: none;
        border: none;
        font-size: 12px;
        padding: 4px 8px;
        background: transparent;
        cursor: pointer;
        font-family: ${o.sans};
        font-weight: ${n.weight.medium};
      `];if(e){let e=l`
          background: ${t.darkGray[400]};
          color: ${t.gray[300]};
        `;a.push(e)}else{let e=l`
          color: ${t.gray[500]};
          background: ${t.darkGray[800]}${i[20]};
        `;a.push(e)}return r&&a.push(l`
          border-right: 1px solid ${H.colors.gray[500]};
        `),a},detailsHeaderInfo:l`
      flex: 1;
      justify-content: flex-end;
      display: flex;
      align-items: center;
      font-weight: ${n.weight.normal};
      color: ${t.gray[400]};
    `,matchRow:e=>{let n=[l`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        cursor: pointer;
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${c.xs};
        color: ${t.gray[300]};
      `];if(e){let e=l`
          background: ${t.darkGray[500]};
        `;n.push(e)}return n},matchIndicator:e=>{let n=[l`
        flex: 0 0 auto;
        width: ${r[3]};
        height: ${r[3]};
        background: ${t[e][900]};
        border: 1px solid ${t[e][500]};
        border-radius: ${a.radius.full};
        transition: all 0.25s ease-out;
        box-sizing: border-box;
      `];if(e===`gray`){let e=l`
          background: ${t.gray[700]};
          border-color: ${t.gray[400]};
        `;n.push(e)}return n},matchID:l`
      flex: 1;
      line-height: ${s.xs};
    `,ageTicker:e=>{let n=[l`
        display: flex;
        gap: ${r[1]};
        font-size: ${c.xs};
        color: ${t.gray[400]};
        font-variant-numeric: tabular-nums;
        line-height: ${s.xs};
      `];if(e){let e=l`
          color: ${t.yellow[400]};
        `;n.push(e)}return n},secondContainer:l`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,thirdContainer:l`
      flex: 1 1 500px;
      overflow: auto;
      display: flex;
      flex-direction: column;
      height: 100%;
      border-right: 1px solid ${t.gray[700]};

      @media (max-width: 700px) {
        border-top: 2px solid ${t.gray[700]};
      }
    `,fourthContainer:l`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      display: flex;
      flex-direction: column;
    `,routesContainer:l`
      overflow-x: auto;
      overflow-y: visible;
    `,routesRowContainer:(e,n)=>{let i=[l`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${c.xs};
        color: ${t.gray[300]};
        cursor: ${n?`pointer`:`default`};
        line-height: ${s.xs};
      `];if(e){let e=l`
          background: ${t.darkGray[500]};
        `;i.push(e)}return i},routesRow:e=>{let n=[l`
        flex: 1 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: ${c.xs};
        line-height: ${s.xs};
      `];if(!e){let e=l`
          color: ${t.gray[400]};
        `;n.push(e)}return n},routesRowInner:l`
      display: 'flex';
      align-items: 'center';
      flex-grow: 1;
      min-width: 0;
    `,routeParamInfo:l`
      color: ${t.gray[400]};
      font-size: ${c.xs};
      line-height: ${s.xs};
    `,nestedRouteRow:e=>l`
        margin-left: ${e?0:r[3.5]};
        border-left: ${e?``:`solid 1px ${t.gray[700]}`};
      `,code:l`
      font-size: ${c.xs};
      line-height: ${s.xs};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `,matchesContainer:l`
      flex: 1 1 auto;
      overflow-y: auto;
    `,cachedMatchesContainer:l`
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,historyContainer:l`
      display: flex;
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,historyOverflowContainer:l`
      padding: ${r[1]} ${r[2]};
      font-size: ${H.font.size.xs};
    `,maskedBadgeContainer:l`
      flex: 1;
      justify-content: flex-end;
      display: flex;
    `,matchDetails:l`
      display: flex;
      flex-direction: column;
      padding: ${H.size[2]};
      font-size: ${H.font.size.xs};
      color: ${H.colors.gray[300]};
      line-height: ${H.font.lineHeight.sm};
    `,matchStatus:(e,t)=>{let n=t&&e===`success`?t===`beforeLoad`?`purple`:`blue`:{pending:`yellow`,success:`green`,error:`red`,notFound:`purple`,redirected:`gray`}[e];return l`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        border-radius: ${H.border.radius.sm};
        font-weight: ${H.font.weight.normal};
        background-color: ${H.colors[n][900]}${H.alpha[90]};
        color: ${H.colors[n][300]};
        border: 1px solid ${H.colors[n][600]};
        margin-bottom: ${H.size[2]};
        transition: all 0.25s ease-out;
      `},matchDetailsInfo:l`
      display: flex;
      justify-content: flex-end;
      flex: 1;
    `,matchDetailsInfoLabel:l`
      display: flex;
    `,mainCloseBtn:l`
      background: ${t.darkGray[700]};
      padding: ${r[1]} ${r[2]} ${r[1]} ${r[1.5]};
      border-radius: ${a.radius.md};
      position: fixed;
      z-index: 99999;
      display: inline-flex;
      width: fit-content;
      cursor: pointer;
      appearance: none;
      border: 0;
      gap: 8px;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      font-size: ${n.size.xs};
      cursor: pointer;
      transition: all 0.25s ease-out;

      &:hover {
        background: ${t.darkGray[500]};
      }
    `,mainCloseBtnPosition:e=>l`
        ${e===`top-left`?`top: ${r[2]}; left: ${r[2]};`:``}
        ${e===`top-right`?`top: ${r[2]}; right: ${r[2]};`:``}
        ${e===`bottom-left`?`bottom: ${r[2]}; left: ${r[2]};`:``}
        ${e===`bottom-right`?`bottom: ${r[2]}; right: ${r[2]};`:``}
      `,mainCloseBtnAnimation:e=>e?l`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `:l`
          opacity: 1;
          pointer-events: auto;
          visibility: visible;
        `,routerLogoCloseButton:l`
      font-weight: ${n.weight.semibold};
      font-size: ${n.size.xs};
      background: linear-gradient(to right, #98f30c, #00f4a3);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,mainCloseBtnDivider:l`
      width: 1px;
      background: ${H.colors.gray[600]};
      height: 100%;
      border-radius: 999999px;
      color: transparent;
    `,mainCloseBtnIconContainer:l`
      position: relative;
      width: ${r[5]};
      height: ${r[5]};
      background: pink;
      border-radius: 999999px;
      overflow: hidden;
    `,mainCloseBtnIconOuter:l`
      width: ${r[5]};
      height: ${r[5]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      filter: blur(3px) saturate(1.8) contrast(2);
    `,mainCloseBtnIconInner:l`
      width: ${r[4]};
      height: ${r[4]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,panelCloseBtn:l`
      position: absolute;
      cursor: pointer;
      z-index: 100001;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${t.darkGray[700]};
      &:hover {
        background-color: ${t.darkGray[500]};
      }

      top: 0;
      right: ${r[2]};
      transform: translate(0, -100%);
      border-right: ${t.darkGray[300]} 1px solid;
      border-left: ${t.darkGray[300]} 1px solid;
      border-top: ${t.darkGray[300]} 1px solid;
      border-bottom: none;
      border-radius: ${a.radius.sm} ${a.radius.sm} 0px 0px;
      padding: ${r[1]} ${r[1.5]} ${r[.5]} ${r[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${r[2.5]};
        height: ${r[1.5]};
        width: calc(100% + ${r[5]});
      }
    `,panelCloseBtnIcon:l`
      color: ${t.gray[400]};
      width: ${r[2]};
      height: ${r[2]};
    `,navigateButton:l`
      background: none;
      border: none;
      padding: 0 0 0 4px;
      margin: 0;
      color: ${t.gray[400]};
      font-size: ${c.md};
      cursor: pointer;
      line-height: 1;
      vertical-align: middle;
      margin-right: 0.5ch;
      flex-shrink: 0;
      &:hover {
        color: ${t.blue[300]};
      }
    `}};function U(){let[e]=c(re(S(g)));return e}var W=e=>{try{let t=localStorage.getItem(e);return typeof t==`string`?JSON.parse(t):void 0}catch{return}};function G(e,t){let[n,r]=c();return a(()=>{r(W(e)??(typeof t==`function`?t():t))}),[n,t=>{r(n=>{let r=t;typeof t==`function`&&(r=t(n));try{localStorage.setItem(e,JSON.stringify(r))}catch{}return r})}]}var ie=o(`<span><svg xmlns=http://www.w3.org/2000/svg width=12 height=12 fill=none viewBox="0 0 24 24"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M9 18l6-6-6-6">`),K=o(`<div>`),q=o(`<button><span> `),ae=o(`<div><div><button> [<!> ... <!>]`),oe=o(`<button><span></span> 🔄 `),se=o(`<span>:`),ce=o(`<span>`),le=({expanded:e,style:t={}})=>{let n=pe();return(()=>{var t=ie(),r=t.firstChild;return f(i=>{var a=n().expander,o=D(n().expanderIcon(e));return a!==i.e&&l(t,i.e=a),o!==i.t&&s(r,`class`,i.t=o),i},{e:void 0,t:void 0}),t})()};function ue(e,t){if(t<1)return[];let n=0,r=[];for(;n<e.length;)r.push(e.slice(n,n+t)),n+=t;return r}function de(e){return Symbol.iterator in e}function J({value:e,defaultExpanded:t,pageSize:n=100,filterSubEntries:i,...a}){let[o,s]=c(!!t),u=()=>s(e=>!e),d=p(()=>typeof e()),m=p(()=>{let n=[],r=e=>{let n=t===!0?{[e.label]:!0}:t?.[e.label];return{...e,value:()=>e.value,defaultExpanded:n}};return Array.isArray(e())?n=e().map((e,t)=>r({label:t.toString(),value:e})):e()!==null&&typeof e()==`object`&&de(e())&&typeof e()[Symbol.iterator]==`function`?n=Array.from(e(),(e,t)=>r({label:t.toString(),value:e})):typeof e()==`object`&&e()!==null&&(n=Object.entries(e()).map(([e,t])=>r({label:e,value:t}))),i?i(n):n}),h=p(()=>ue(m(),n)),[g,b]=c([]),[x,S]=c(void 0),C=pe(),w=()=>{S(e()())},T=t=>r(J,_({value:e,filterSubEntries:i},a,t));return(()=>{var t=K();return y(t,(()=>{var t=v(()=>!!h().length);return()=>t()?[(()=>{var e=q(),t=e.firstChild,n=t.firstChild;return e.$$click=()=>u(),y(e,r(le,{get expanded(){return o()??!1}}),t),y(e,()=>a.label,t),y(t,()=>String(d).toLowerCase()===`iterable`?`(Iterable) `:``,n),y(t,()=>m().length,n),y(t,()=>m().length>1?`items`:`item`,null),f(n=>{var r=C().expandButton,i=C().info;return r!==n.e&&l(e,n.e=r),i!==n.t&&l(t,n.t=i),n},{e:void 0,t:void 0}),e})(),v(()=>v(()=>!!(o()??!1))()?v(()=>h().length===1)()?(()=>{var e=K();return y(e,()=>m().map((e,t)=>T(e))),f(()=>l(e,C().subEntries)),e})():(()=>{var e=K();return y(e,()=>h().map((e,t)=>(()=>{var i=ae(),a=i.firstChild,o=a.firstChild,s=o.firstChild,c=s.nextSibling,u=c.nextSibling.nextSibling;return u.nextSibling,o.$$click=()=>b(e=>e.includes(t)?e.filter(e=>e!==t):[...e,t]),y(o,r(le,{get expanded(){return g().includes(t)}}),s),y(o,t*n,c),y(o,t*n+n-1,u),y(a,(()=>{var n=v(()=>!!g().includes(t));return()=>n()?(()=>{var t=K();return y(t,()=>e.map(e=>T(e))),f(()=>l(t,C().subEntries)),t})():null})(),null),f(e=>{var t=C().entry,n=D(C().labelButton,`labelButton`);return t!==e.e&&l(a,e.e=t),n!==e.t&&l(o,e.t=n),e},{e:void 0,t:void 0}),i})())),f(()=>l(e,C().subEntries)),e})():null)]:(()=>{var t=v(()=>d()===`function`);return()=>t()?r(J,{get label(){return(()=>{var e=oe(),t=e.firstChild;return e.$$click=w,y(t,()=>a.label),f(()=>l(e,C().refreshValueBtn)),e})()},value:x,defaultExpanded:{}}):[(()=>{var e=se(),t=e.firstChild;return y(e,()=>a.label,t),e})(),` `,(()=>{var t=ce();return y(t,()=>ne(e())),f(()=>l(t,C().value)),t})()]})()})()),f(()=>l(t,C().entry)),t})()}var fe=e=>{let{colors:t,font:n,size:r}=H,{fontFamily:i,lineHeight:a,size:o}=n,s=e?L.bind({target:e}):L;return{entry:s`
      font-family: ${i.mono};
      font-size: ${o.xs};
      line-height: ${a.sm};
      outline: none;
      word-break: break-word;
    `,labelButton:s`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,expander:s`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: ${r[3]};
      height: ${r[3]};
      padding-left: 3px;
      box-sizing: content-box;
    `,expanderIcon:e=>e?s`
          transform: rotate(90deg);
          transition: transform 0.1s ease;
        `:s`
        transform: rotate(0deg);
        transition: transform 0.1s ease;
      `,expandButton:s`
      display: flex;
      gap: ${r[1]};
      align-items: center;
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,value:s`
      color: ${t.purple[400]};
    `,subEntries:s`
      margin-left: ${r[2]};
      padding-left: ${r[2]};
      border-left: 2px solid ${t.darkGray[400]};
    `,info:s`
      color: ${t.gray[500]};
      font-size: ${o[`2xs`]};
      padding-left: ${r[1]};
    `,refreshValueBtn:s`
      appearance: none;
      border: 0;
      cursor: pointer;
      background: transparent;
      color: inherit;
      padding: 0;
      font-family: ${i.mono};
      font-size: ${o.xs};
    `}};function pe(){let[e]=c(fe(S(g)));return e}t([`click`]);var me=o(`<div><div></div><div>/</div><div></div><div>/</div><div>`);function he(e){let t=[`s`,`min`,`h`,`d`],n=[e/1e3,e/6e4,e/36e5,e/864e5],r=0;for(let e=1;e<n.length&&!(n[e]<1);e++)r=e;return new Intl.NumberFormat(navigator.language,{compactDisplay:`short`,notation:`compact`,maximumFractionDigits:0}).format(n[r])+t[r]}function Y({match:e,router:t}){let n=U();if(!e)return null;let r=t().looseRoutesById[e.routeId];if(!r.options.loader)return null;let i=Date.now()-e.updatedAt,a=r.options.staleTime??t().options.defaultStaleTime??0,o=r.options.gcTime??t().options.defaultGcTime??1800*1e3;return(()=>{var e=me(),t=e.firstChild,r=t.nextSibling.nextSibling,s=r.nextSibling.nextSibling;return y(t,()=>he(i)),y(r,()=>he(a)),y(s,()=>he(o)),f(()=>l(e,D(n().ageTicker(i>a)))),e})()}var ge=o(`<button type=button>➔`);function X({to:e,params:t,search:n,router:r}){let i=U();return(()=>{var a=ge();return a.$$click=i=>{i.stopPropagation(),r().navigate({to:e,params:t,search:n})},s(a,`title`,`Navigate to ${e}`),f(()=>l(a,i().navigateButton)),a})()}t([`click`]);var _e=o(`<button><div>TANSTACK</div><div>TanStack Router v1`),ve=o(`<div><div>`),ye=o(`<code> `),Z=o(`<code>`),be=o(`<div><div role=button><div>`),Q=o(`<div>`),xe=o(`<div><ul>`),Se=o(`<div><button><svg xmlns=http://www.w3.org/2000/svg width=10 height=6 fill=none viewBox="0 0 10 6"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=1.667 d="M1 1l4 4 4-4"></path></svg></button><div><div></div><div><div></div></div></div><div><div><div><span>Pathname</span></div><div><code></code></div><div><div><button type=button>Routes</button><button type=button>Matches</button><button type=button>History</button></div><div><div>age / staleTime / gcTime</div></div></div><div>`),Ce=o(`<div><span>masked`),we=o(`<div role=button><div>`),Te=o(`<li><div>`),Ee=o(`<li>This panel displays the most recent 15 navigations.`),De=o(`<div><div><div>Cached Matches</div><div>age / staleTime / gcTime</div></div><div>`),Oe=o(`<div><div>Match Details</div><div><div><div><div></div></div><div><div>ID:</div><div><code></code></div></div><div><div>State:</div><div></div></div><div><div>Last Updated:</div><div></div></div></div></div><div>Explorer</div><div>`),ke=o(`<div>Loader Data`),Ae=o(`<div><div><span>Search Params</span></div><div>`),je=o(`<span style=margin-left:0.5rem;>`),Me=o(`<button type=button style=cursor:pointer; aria-label="Copy value to clipboard">`),Ne=15;function Pe(e){let{className:t,...r}=e,i=U();return(()=>{var e=_e(),a=e.firstChild,o=a.nextSibling;return n(e,_(r,{get class(){return D(i().logo,t?t():``)}}),!1,!0),f(e=>{var t=i().tanstackLogo,n=i().routerLogo;return t!==e.e&&l(a,e.e=t),n!==e.t&&l(o,e.t=n),e},{e:void 0,t:void 0}),e})()}function $(e){return(()=>{var t=ve(),n=t.firstChild;return t.style.setProperty(`display`,`flex`),t.style.setProperty(`align-items`,`center`),t.style.setProperty(`width`,`100%`),y(t,()=>e.left,n),n.style.setProperty(`flex-grow`,`1`),n.style.setProperty(`min-width`,`0`),y(n,()=>e.children),y(t,()=>e.right,null),f(()=>l(t,e.class)),t})()}function Fe({routerState:e,router:t,route:n,isRoot:a,activeId:o,setActiveId:c}){let u=U(),d=p(()=>e().pendingMatches||e().matches),m=p(()=>e().matches.find(e=>e.routeId===n.id)),g=p(()=>{try{if(m()?.params){let e=m()?.params,t=n.path||E(n.id);if(t.startsWith(`$`)){let n=t.slice(1);if(e[n])return`(${e[n]})`}}return``}catch{return``}}),_=p(()=>{if(a||!n.path)return;let e=Object.assign({},...d().map(e=>e.params)),r=C({path:n.fullPath,params:e,leaveWildcards:!1,leaveParams:!1,decodeCharMap:t().pathParamsDecodeCharMap});return r.isMissingParams?void 0:r.interpolatedPath});return(()=>{var p=be(),b=p.firstChild,x=b.firstChild;return b.$$click=()=>{m()&&c(o()===n.id?``:n.id)},y(b,r($,{get class(){return D(u().routesRow(!!m()))},get left(){return r(i,{get when(){return _()},children:e=>r(X,{get to(){return e()},router:t})})},get right(){return r(Y,{get match(){return m()},router:t})},get children(){return[(()=>{var e=ye(),t=e.firstChild;return y(e,()=>a?h:n.path||E(n.id),t),f(()=>l(e,u().code)),e})(),(()=>{var e=Z();return y(e,g),f(()=>l(e,u().routeParamInfo)),e})()]}}),null),y(p,(()=>{var i=v(()=>!!n.children?.length);return()=>i()?(()=>{var i=Q();return y(i,()=>[...n.children].sort((e,t)=>e.rank-t.rank).map(n=>r(Fe,{routerState:e,router:t,route:n,activeId:o,setActiveId:c}))),f(()=>l(i,u().nestedRouteRow(!!a))),i})():null})(),null),f(e=>{var t=`Open match details for ${n.id}`,r=D(u().routesRowContainer(n.id===o(),!!m())),i=D(u().matchIndicator(z(d(),n)));return t!==e.e&&s(b,`aria-label`,e.e=t),r!==e.t&&l(b,e.t=r),i!==e.a&&l(x,e.a=i),e},{e:void 0,t:void 0,a:void 0}),p})()}var Ie=function({...t}){let{isOpen:i=!0,setIsOpen:o,handleDragStart:g,router:x,routerState:S,shadowDOMTarget:C,...E}=t,{onCloseClick:O}=b(),k=U(),{className:A,style:j,...M}=E;T(x,`No router was found for the TanStack Router Devtools. Please place the devtools in the <RouterProvider> component tree or pass the router instance to the devtools manually.`);let[N,P]=G(`tanstackRouterDevtoolsActiveTab`,`routes`),[F,I]=G(`tanstackRouterDevtoolsActiveRouteId`,``),[ee,L]=c([]),[te,z]=c(!1);a(()=>{let e=S().matches,t=e[e.length-1];if(!t)return;let n=m(()=>ee()),r=n[0],i=r&&r.pathname===t.pathname&&JSON.stringify(r.search??{})===JSON.stringify(t.search??{});(!r||!i)&&(n.length>=Ne&&z(!0),L(e=>{let n=[t,...e];return n.splice(Ne),n}))});let B=p(()=>[...S().pendingMatches??[],...S().matches,...S().cachedMatches].find(e=>e.routeId===F()||e.id===F())),ne=p(()=>Object.keys(S().location.search).length),H=p(()=>({...x(),state:S()})),re=p(()=>Object.fromEntries(V(Object.keys(H()),[`state`,`routesById`,`routesByPath`,`flatRoutes`,`options`,`manifest`].map(e=>t=>t!==e)).map(e=>[e,H()[e]]).filter(e=>typeof e[1]!=`function`&&![`__store`,`basepath`,`injectedHtml`,`subscribers`,`latestLoadPromise`,`navigateTimeout`,`resetNextScroll`,`tempLocationKey`,`latestLocation`,`routeTree`,`history`].includes(e[0])))),W=p(()=>B()?.loaderData),ie=p(()=>B()),K=p(()=>S().location.search);return(()=>{var t=Se(),i=t.firstChild,a=i.firstChild,c=i.nextSibling,p=c.firstChild,m=p.nextSibling,b=m.firstChild,C=c.nextSibling,T=C.firstChild,E=T.firstChild;E.firstChild;var L=E.nextSibling,z=L.firstChild,V=L.nextSibling,H=V.firstChild,U=H.firstChild,G=U.nextSibling,q=G.nextSibling,ae=H.nextSibling,oe=V.nextSibling;return n(t,_({get class(){return D(k().devtoolsPanel,`TanStackRouterDevtoolsPanel`,A?A():``)},get style(){return j?j():``}},M),!1,!0),y(t,g?(()=>{var e=Q();return w(e,`mousedown`,g,!0),f(()=>l(e,k().dragHandle)),e})():null,i),i.$$click=e=>{o&&o(!1),O(e)},y(p,r(Pe,{"aria-hidden":!0,onClick:e=>{o&&o(!1),O(e)}})),y(b,r(J,{label:`Router`,value:re,defaultExpanded:{state:{},context:{},options:{}},filterSubEntries:e=>e.filter(e=>typeof e.value()!=`function`)})),y(E,(()=>{var e=v(()=>!!S().location.maskedLocation);return()=>e()?(()=>{var e=Ce(),t=e.firstChild;return f(n=>{var r=k().maskedBadgeContainer,i=k().maskedBadge;return r!==n.e&&l(e,n.e=r),i!==n.t&&l(t,n.t=i),n},{e:void 0,t:void 0}),e})():null})(),null),y(z,()=>S().location.pathname),y(L,(()=>{var e=v(()=>!!S().location.maskedLocation);return()=>e()?(()=>{var e=Z();return y(e,()=>S().location.maskedLocation?.pathname),f(()=>l(e,k().maskedLocation)),e})():null})(),null),U.$$click=()=>{P(`routes`)},G.$$click=()=>{P(`matches`)},q.$$click=()=>{P(`history`)},y(oe,r(u,{get children(){return[r(d,{get when(){return N()===`routes`},get children(){return r(Fe,{routerState:S,router:x,get route(){return x().routeTree},isRoot:!0,activeId:F,setActiveId:I})}}),r(d,{get when(){return N()===`matches`},get children(){var e=Q();return y(e,()=>(S().pendingMatches?.length?S().pendingMatches:S().matches)?.map((e,t)=>(()=>{var t=we(),n=t.firstChild;return t.$$click=()=>I(F()===e.id?``:e.id),y(t,r($,{get left(){return r(X,{get to(){return e.pathname},get params(){return e.params},get search(){return e.search},router:x})},get right(){return r(Y,{match:e,router:x})},get children(){var t=Z();return y(t,()=>`${e.routeId===`__root__`?h:e.pathname}`),f(()=>l(t,k().matchID)),t}}),null),f(r=>{var i=`Open match details for ${e.id}`,a=D(k().matchRow(e===B())),o=D(k().matchIndicator(R(e)));return i!==r.e&&s(t,`aria-label`,r.e=i),a!==r.t&&l(t,r.t=a),o!==r.a&&l(n,r.a=o),r},{e:void 0,t:void 0,a:void 0}),t})())),e}}),r(d,{get when(){return N()===`history`},get children(){var t=xe(),n=t.firstChild;return y(n,r(e,{get each(){return ee()},children:(e,t)=>(()=>{var n=Te(),i=n.firstChild;return y(n,r($,{get left(){return r(X,{get to(){return e.pathname},get params(){return e.params},get search(){return e.search},router:x})},get right(){return r(Y,{match:e,router:x})},get children(){var t=Z();return y(t,()=>`${e.routeId===`__root__`?h:e.pathname}`),f(()=>l(t,k().matchID)),t}}),null),f(r=>{var a=D(k().matchRow(e===B())),o=D(k().matchIndicator(t()===0?`green`:`gray`));return a!==r.e&&l(n,r.e=a),o!==r.t&&l(i,r.t=o),r},{e:void 0,t:void 0}),n})()}),null),y(n,(()=>{var e=v(()=>!!te());return()=>e()?(()=>{var e=Ee();return f(()=>l(e,k().historyOverflowContainer)),e})():null})(),null),t}})]}})),y(C,(()=>{var e=v(()=>!!S().cachedMatches.length);return()=>e()?(()=>{var e=De(),t=e.firstChild,n=t.firstChild.nextSibling,i=t.nextSibling;return y(i,()=>S().cachedMatches.map(e=>(()=>{var t=we(),n=t.firstChild;return t.$$click=()=>I(F()===e.id?``:e.id),y(t,r($,{get left(){return r(X,{get to(){return e.pathname},get params(){return e.params},get search(){return e.search},router:x})},get right(){return r(Y,{match:e,router:x})},get children(){var t=Z();return y(t,()=>`${e.id}`),f(()=>l(t,k().matchID)),t}}),null),f(r=>{var i=`Open match details for ${e.id}`,a=D(k().matchRow(e===B())),o=D(k().matchIndicator(R(e)));return i!==r.e&&s(t,`aria-label`,r.e=i),a!==r.t&&l(t,r.t=a),o!==r.a&&l(n,r.a=o),r},{e:void 0,t:void 0,a:void 0}),t})())),f(r=>{var i=k().cachedMatchesContainer,a=k().detailsHeader,o=k().detailsHeaderInfo;return i!==r.e&&l(e,r.e=i),a!==r.t&&l(t,r.t=a),o!==r.a&&l(n,r.a=o),r},{e:void 0,t:void 0,a:void 0}),e})():null})(),null),y(t,(()=>{var e=v(()=>!!(B()&&B()?.status));return()=>e()?(()=>{var e=Oe(),t=e.firstChild,n=t.nextSibling,i=n.firstChild,a=i.firstChild,o=a.firstChild,s=a.nextSibling,c=s.firstChild.nextSibling,u=c.firstChild,d=s.nextSibling,p=d.firstChild.nextSibling,m=d.nextSibling,h=m.firstChild.nextSibling,g=n.nextSibling,_=g.nextSibling;return y(o,(()=>{var e=v(()=>!!(B()?.status===`success`&&B()?.isFetching));return()=>e()?`fetching`:B()?.status})()),y(u,()=>B()?.id),y(p,(()=>{var e=v(()=>!!S().pendingMatches?.find(e=>e.id===B()?.id));return()=>e()?`Pending`:S().matches.find(e=>e.id===B()?.id)?`Active`:`Cached`})()),y(h,(()=>{var e=v(()=>!!B()?.updatedAt);return()=>e()?new Date(B()?.updatedAt).toLocaleTimeString():`N/A`})()),y(e,(()=>{var e=v(()=>!!W());return()=>e()?[(()=>{var e=ke();return f(()=>l(e,k().detailsHeader)),e})(),(()=>{var e=Q();return y(e,r(J,{label:`loaderData`,value:W,defaultExpanded:{}})),f(()=>l(e,k().detailsContent)),e})()]:null})(),g),y(_,r(J,{label:`Match`,value:ie,defaultExpanded:{}})),f(n=>{var r=k().thirdContainer,o=k().detailsHeader,u=k().matchDetails,f=k().matchStatus(B()?.status,B()?.isFetching),v=k().matchDetailsInfoLabel,y=k().matchDetailsInfo,b=k().matchDetailsInfoLabel,x=k().matchDetailsInfo,S=k().matchDetailsInfoLabel,C=k().matchDetailsInfo,w=k().detailsHeader,T=k().detailsContent;return r!==n.e&&l(e,n.e=r),o!==n.t&&l(t,n.t=o),u!==n.a&&l(i,n.a=u),f!==n.o&&l(a,n.o=f),v!==n.i&&l(s,n.i=v),y!==n.n&&l(c,n.n=y),b!==n.s&&l(d,n.s=b),x!==n.h&&l(p,n.h=x),S!==n.r&&l(m,n.r=S),C!==n.d&&l(h,n.d=C),w!==n.l&&l(g,n.l=w),T!==n.u&&l(_,n.u=T),n},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),e})():null})(),null),y(t,(()=>{var e=v(()=>!!ne());return()=>e()?(()=>{var e=Ae(),t=e.firstChild;t.firstChild;var n=t.nextSibling;return y(t,typeof navigator<`u`?(()=>{var e=je();return y(e,r(Le,{getValue:()=>{let e=S().location.search;return JSON.stringify(e)}})),e})():null,null),y(n,r(J,{value:K,get defaultExpanded(){return Object.keys(S().location.search).reduce((e,t)=>(e[t]={},e),{})}})),f(r=>{var i=k().fourthContainer,a=k().detailsHeader,o=k().detailsContent;return i!==r.e&&l(e,r.e=i),a!==r.t&&l(t,r.t=a),o!==r.a&&l(n,r.a=o),r},{e:void 0,t:void 0,a:void 0}),e})():null})(),null),f(e=>{var t=k().panelCloseBtn,n=k().panelCloseBtnIcon,r=k().firstContainer,o=k().row,u=k().routerExplorerContainer,d=k().routerExplorer,f=k().secondContainer,h=k().matchesContainer,g=k().detailsHeader,_=k().detailsContent,v=k().detailsHeader,y=k().routeMatchesToggle,x=N()===`routes`,S=D(k().routeMatchesToggleBtn(N()===`routes`,!0)),w=N()===`matches`,O=D(k().routeMatchesToggleBtn(N()===`matches`,!0)),A=N()===`history`,j=D(k().routeMatchesToggleBtn(N()===`history`,!1)),M=k().detailsHeaderInfo,P=D(k().routesContainer);return t!==e.e&&l(i,e.e=t),n!==e.t&&s(a,`class`,e.t=n),r!==e.a&&l(c,e.a=r),o!==e.o&&l(p,e.o=o),u!==e.i&&l(m,e.i=u),d!==e.n&&l(b,e.n=d),f!==e.s&&l(C,e.s=f),h!==e.h&&l(T,e.h=h),g!==e.r&&l(E,e.r=g),_!==e.d&&l(L,e.d=_),v!==e.l&&l(V,e.l=v),y!==e.u&&l(H,e.u=y),x!==e.c&&(U.disabled=e.c=x),S!==e.w&&l(U,e.w=S),w!==e.m&&(G.disabled=e.m=w),O!==e.f&&l(G,e.f=O),A!==e.y&&(q.disabled=e.y=A),j!==e.g&&l(q,e.g=j),M!==e.p&&l(ae,e.p=M),P!==e.b&&l(oe,e.b=P),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0}),t})()};function Le({getValue:e}){let[t,n]=c(!1),r=null,i=async()=>{if(typeof navigator>`u`||!navigator.clipboard?.writeText){console.warn(`TanStack Router Devtools: Clipboard API unavailable`);return}try{let t=e();await navigator.clipboard.writeText(t),n(!0),r&&clearTimeout(r),r=setTimeout(()=>n(!1),2500)}catch(e){console.error(`TanStack Router Devtools: Failed to copy`,e)}};return x(()=>{r&&clearTimeout(r)}),(()=>{var e=Me();return e.$$click=i,y(e,()=>t()?`✅`:`📋`),f(()=>s(e,`title`,t()?`Copied!`:`Copy`)),e})()}t([`click`,`mousedown`]);var Re=Object.freeze(Object.defineProperty({__proto__:null,BaseTanStackRouterDevtoolsPanel:Ie,default:Ie},Symbol.toStringTag,{value:`Module`}));export{U as a,G as i,Re as n,B as r,Ie as t};