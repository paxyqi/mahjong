import{r as e,c as t,a as n,p as a,b as o,d as r,o as s,e as l,w as u,f as c,g as d,v as i,t as f,h as p,i as h,F as m,j as g,k as y,L as v,T as _,l as w,I as b,B as j,R as x,C as k,P as C,m as I,S as R}from"./vendor.b8250df0.js";function z(e){const t={p:[],m:[],s:[],z:[]};let n=e;for(;n.length>0;){const e=n.match(/[0-9]*[spzm]/);if(null===e)throw Error("invaild input");{const a=e[0];t[a[a.length-1]]=t[a[a.length-1]].concat(a.substr(0,a.length-1).split("")),n=n.substr(0,e.index)+n.substr(e.index+a.length)}}return t}!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const a=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,r)=>{const s=new URL(e,a);if(self[t].moduleMap[s])return n(self[t].moduleMap[s]);const l=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),u=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){r(new Error(`Failed to import: ${e}`)),o(u)},onload(){n(self[t].moduleMap[s]),o(u)}});document.head.appendChild(u)})),self[t].moduleMap={}}}("/mahjong/assets/");const M={m:["🀇","🀈","🀉","🀊","🀋","🀌","🀍","🀎","🀏"],p:["🀙","🀚","🀛","🀜","🀝","🀞","🀟","🀠","🀡"],s:["🀐","🀑","🀒","🀓","🀔","🀕","🀖","🀗","🀘"],z:["🀀","🀁","🀂","🀃","🀆","🀅","🀄","🀫","🀪"]};function S(e){let t=9,n=0,a=0,o=0;let r=!1,s=!1,l=!1;const u=(e,t=!1)=>{let u=[0,0,0],c=[0,0,0];const d=[...e];let i=0,f=0,p=0;for(let n=0;n<9;n++)d[n]>=3&&(d[n]-=3,i+=1);for(let n=0;n<9;n++)if(0!==d[n]&&void 0!==d[n]&&d[n]>0){if(t)continue;d[n+1]>0&&d[n+2]>0&&(d[n]--,d[n+1]--,d[n+2]--,i++),d[n]>0&&d[n+1]>0&&d[n+2]>0&&(d[n]--,d[n+1]--,d[n+2]--,i++)}for(let n=0;n<9;n++)0!==d[n]&&void 0!==d[n]&&(2!==d[n]?t||(d[n+1]>0&&(d[n]--,d[n+1]--,f++),d[n+2]>0&&(d[n]--,d[n+2]--,f++)):(d[n]-=2,f++,r=!0));p+=d.reduce(((e,t)=>e+t)),u=[i,f,p];const h=[...e];i=0,f=0,p=0;for(let n=0;n<9;n++)0!==h[n]&&void 0!==h[n]&&(t||(h[n]>=2&&h[n+1]>=2&&h[n+2]>=2&&(h[n]-=2,h[n+1]-=2,h[n+2]-=2,i+=2),h[n]>=2&&h[n+1]>=2&&h[n+2]>=2&&(h[n]-=2,h[n+1]-=2,h[n+2]-=2,i+=2)),3!==h[n]&&4!==h[n]||(h[n]-=3,i++),2===h[n]&&(h[n]-=2,f++,s=!0),t||(h[n]>0&&h[n+1]>0&&h[n+2]>0&&(h[n]--,h[n+1]--,h[n+2]--,i++),h[n]>0&&h[n+1]>0&&(h[n]--,h[n+1]--,f++),h[n]>0&&h[n+2]>0&&(h[n]--,h[n+2]--,f++)));p+=h.reduce(((e,t)=>e+t)),c=[i,f,p];const m=u>=c?u:c;!1===l&&(l=u>=c?r:s),n+=m[0],a+=m[1],o+=m[2],n+a>4&&(l||(a--,o+=2))};return u(e[0]),u(e[1]),u(e[2]),u(e[3],!0),(()=>{let e=-1;for(;n<4;)a&&o?(a--,o--,n++,e++):!a||o?!a&&o&&(o-=2,n++,e+=2):(a--,o++,n++,e++);o>0&&e++,t=e<t?e:t,n=a=o=0})(),t}function L(e){const t=function(e){const t=e[0].reduce(((e,t)=>e+t))+e[1].reduce(((e,t)=>e+t))+e[2].reduce(((e,t)=>e+t))+e[3].reduce(((e,t)=>e+t));if(t<13||t>14)return-2;const n=[...e[0],...e[1],...e[2],...e[3]];let a=0,o=0;for(let r=0;r<34;r++)n[r]>=2&&a++,1===n[r]&&o++;return a+o>=7?6-a:6-a+(7-a-o)}(e),n=function(e){const t=e[0].reduce(((e,t)=>e+t))+e[1].reduce(((e,t)=>e+t))+e[2].reduce(((e,t)=>e+t))+e[3].reduce(((e,t)=>e+t));if(t<13||t>14)return-2;const n=[e[0][0],e[0][8],e[1][0],e[1][8],e[2][0],e[2][8],...e[3]];let a=0,o=0;for(let r=0;r<13;r++)n[r]&&a++,n[r]>1&&(o=1);return 13-a-o}(e);return-2===t||-2===n?S(e):Math.min(S(e),t,n)}function U(e,t,n){const a=L(e);e[t][n]--;const o=[];for(let r=0;r<4;r++)for(let s=0;s<e[r].length;s++){e[r][s]++;const l=L(e);if((r!==t||s!==n)&&l<a){const e={i:r,j:s};o.push(e)}e[r][s]--}return e[t][n]++,o}function A(e){const t=function(e){let t=0,n=!1;for(let a=0;a<4;a++)for(const n of e[a])t+=n;if(13===t)for(;!n;){const t=Math.round(34*Math.random()),a=Math.floor(t/9),o=t-9*a;B=[a,o],e[a][o]<=3&&(e[a][o]++,n=!0)}else B=[4,0];return e}(function(e){const t=new Array(9).fill(0),n=new Array(9).fill(0),a=new Array(9).fill(0),o=new Array(7).fill(0);let r;for(let s=0;s<e.m.length;s++)r=parseInt(e.m[s]),t[--r]++;for(let s=0;s<e.p.length;s++)r=parseInt(e.p[s]),n[--r]++;for(let s=0;s<e.s.length;s++)r=parseInt(e.s[s]),a[--r]++;for(let s=0;s<e.z.length;s++)r=parseInt(e.z[s]),o[--r]++;return[[...t],[...n],[...a],[...o]]}(z(e))),n=L(t),a=function(e){const t=[];for(let n=0;n<4;n++)for(let a=0;a<e[n].length;a++)e[n][a]>0&&t.push(U(e,n,a));return t}(t);return{syanten:n,kairyou:function(e,t,n){const a=new Map,o=P(e);for(let r=0;r<t.length;r++)if(t[r].length>0){const e=P(t[r]);a.set(o[r],{mo:e,rest:E(e,n)})}return a}(function(e){const t=[];for(let n=0;n<4;n++)for(let a=0;a<e[n].length;a++)if(e[n][a]>0){const e={i:n,j:a};t.push(e)}return t}(t),a,function(e){const t=[],n=["m","p","s","z"];return e.map(((e,a)=>e.forEach(((e,o)=>{let r=e;for(;r>0;)t.push(o+1+n[a]),r--})))),t}(t))}}function E(e,t){return 4*e.length-function(e,t){const n=[];for(let a=0;a<e.length;a++)for(let o=0;o<t.length;o++)e[a]===t[o]&&n.push(e[a]);return n.length}(e,t)}function P(e){const t=[],n=["m","p","s","z"];return e.map((e=>t.push(e.j+1+n[e.i]))),t}function $(e){try{const t=z(e.replace(/0/,"5")),n=[];for(const e in t)n.push(...t[e].map((t=>M[e][parseInt(t)-1])));return n}catch(t){return[]}}let B=[4,0];var F={setup(){const a=e(""),o=e(0),r=e([]),s=e(!1),l=e([]),u=()=>{if(a.value.length<=0||!function(e){try{const t=z(e.replace(/0/,"5")),n=t.m.length+t.p.length+t.s.length+t.z.length;return!(n<13||n>14)}catch(t){return!1}}(a.value))return void n.error("無効入力");const{syanten:e,kairyou:t}=A(a.value);o.value=e;const u=[];t.forEach(((e,t)=>{u.push({da:$(t)[0],daRaw:t,mo:e.mo.map($).map((e=>e[0])),moRaw:e.mo,nokori:e.rest})})),r.value=u.sort(((e,t)=>t.nokori-e.nokori)),s.value=!0,l.value=B},c=t((()=>$(a.value))),d=t((()=>{let e="";return e=0===l.value[0]?"m":1===l.value[0]?"p":2===l.value[0]?"s":"z",l.value[1]+e})),i=t((()=>$(d.value)));return{handCards:a,Syanten:o,calcRes:r,inputed:s,showCards:u,discard:(e,t)=>{const n=e.daRaw,o=e.moRaw[t],r=z(a.value);r[n[1]].splice(r[n[1]].findIndex((e=>e===n[0])),1),r[o[1]].push(o[0]),a.value=function(e){let t="";for(const n in e)0!==e[n].length&&(t+=e[n].sort().join("")+n);return t}(r),u()},handCardsImg:c,randCard:l,randCardImg:i}}};const O=u("data-v-7b7a5494");a("data-v-7b7a5494");const q=h(" - m=萬子, p=筒子, s=索子, z=字牌, 0=赤 - 一般形=４面子１雀頭 / 標準形=一般形＋七対形＋国士形 - ツモはその時点で使用していない牌をランダムに選択します - 有効牌をクリックすると打牌後にその牌をツモ牌として表示します - (n*3+2)枚で開始：(n*3+2)枚目をツモ牌として表示 - (n*3+1)枚で開始：ツモはページのロード時に毎回変化 - 和了役の判定はありません - 暗槓はできません "),H=h(" 新規 "),T=h("手牌： "),D={class:"tiles"},G={key:0},J=h("抓牌："),K={class:"tiles"},N={class:"tiles"};o();const Q=O(((e,t,n,a,o,u)=>{const y=r("a-button"),v=r("a-tooltip"),_=r("a-input-search"),w=r("a-form-item"),b=r("a-form"),j=r("a-col"),x=r("a-row"),k=r("a-table-column"),C=r("a-table-column-group"),I=r("a-table");return s(),l(x,{type:"flex",justify:"center"},{default:O((()=>[c(j,{span:24},{default:O((()=>[c(j,{span:24},{default:O((()=>[c(x,{type:"flex",justify:"center"},{default:O((()=>[c(j,{span:12},{default:O((()=>[c(b,null,{default:O((()=>[c(w,{label:"Please input your hand cards:"},{default:O((()=>[c(_,{value:a.handCards,"onUpdate:value":t[1]||(t[1]=e=>a.handCards=e),placeholder:"手牌",size:"large",onChange:t[2]||(t[2]=e=>a.inputed=!1),onSearch:a.showCards},{enterButton:O((()=>[c(v,null,{title:O((()=>[q])),default:O((()=>[c(y,{type:"link",ghost:""},{default:O((()=>[H])),_:1})])),_:1})])),_:1},8,["value","onSearch"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),c(j,{span:24},{default:O((()=>[c(x,{type:"flex",justify:"center"},{default:O((()=>[c(j,{span:12},{default:O((()=>[d(c(I,{"data-source":a.calcRes,"row-key":(e,t)=>t,bordered:"",style:{width:"100%"},pagination:{pageSize:50},scroll:{y:240}},{title:O((()=>[c("span",null,[T,c("span",D,f(a.handCardsImg.join("")),1),4!==a.randCard[0]?(s(),l("span",G,[J,c("span",K,f(a.randCardImg.join("")),1)])):p("",!0),h("("+f(-1===a.Syanten?"和了":0===a.Syanten?"聴牌":`${a.Syanten}向聴`)+")",1)])])),default:O((()=>[c(C,{title:"標準形(七対国士を含む)の計算結果:"},{default:O((()=>[c(k,{key:"da","data-index":"da",title:"打"},{default:O((({text:e})=>[c("span",N,f(e),1)])),_:1}),c(k,{key:"mo",title:a.Syanten>0?"摸":"待ち","data-index":"mo"},{default:O((({text:e,record:t})=>[c("a",null,[(s(!0),l(m,null,g(e,((e,n)=>(s(),l("span",{key:e,class:"tiles",onClick:e=>a.discard(t,n)},f(e),9,["onClick"])))),128))]),h("（"+f(t.nokori)+"枚） ",1)])),_:1},8,["title"])])),_:1})])),_:1},8,["data-source","row-key"]),[[i,a.inputed]])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}));F.render=Q,F.__scopeId="data-v-7b7a5494";var V={name:"App",components:{Home:F}};const W=u("data-v-52e45a82");a("data-v-52e45a82");const X={class:"layout"},Y=c("div",{class:"imgBox"},[c("a",{href:"https://github.com/paxyqi/mahjong"},[c("img",{alt:"Mahjong pic",width:"210",src:"/mahjong/assets/mahjong.7b17e2e6.png"})])],-1),Z=c("a",{href:"https://github.com/paxyqi",style:{"text-decoration":"none",color:"black"}},[c("strong",null,"Pixy")],-1),ee=h(" ©2021 ");o();const te=W(((e,t,n,a,o,u)=>{const d=r("a-page-header"),i=r("a-layout-header"),f=r("a-col"),p=r("a-row"),h=r("Home"),m=r("a-layout-content"),g=r("a-layout-footer"),y=r("a-layout");return s(),l("div",X,[c(y,null,{default:W((()=>[c(i,{style:{padding:"0"},class:"header"},{default:W((()=>[c(d,{style:{"background-color":"#f5f5f5",width:"100%"},title:"麻雀牌理","sub-title":"ようこそPixyちゃんの牌理ウェブサイト!"})])),_:1}),c(m,{class:"content"},{default:W((()=>[c(p,null,{default:W((()=>[c(f,{span:24},{default:W((()=>[c(p,{type:"flex",justify:"center"},{default:W((()=>[c(f,{span:24},{default:W((()=>[Y])),_:1})])),_:1}),c(p,{type:"flex",justify:"center"},{default:W((()=>[c(f,{span:24},{default:W((()=>[c(h)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),c(g,{style:{"text-align":"center"},class:"footer"},{default:W((()=>[Z,ee])),_:1})])),_:1})])}));V.render=te,V.__scopeId="data-v-52e45a82",y(V).use(v).use(_).use(w).use(b).use(j).use(x).use(k).use(C).use(I).use(R).mount("#app");