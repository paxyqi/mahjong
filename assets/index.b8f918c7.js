import{r as e,c as t,a as n,p as a,b as s,d as o,o as r,e as l,w as u,f as c,g as d,v as i,t as f,h as p,F as h,i as m,j as y,L as g,T as _,k as v,I as b,B as w,R as j,C as x,P as k,l as C,S as R}from"./vendor.35ddc13f.js";function I(e){const t={p:[],m:[],s:[],z:[]};let n=e;for(;n.length>0;){const e=n.match(/[0-9]*[spzm]/);if(null===e)throw Error("invaild input");{const a=e[0];t[a[a.length-1]]=t[a[a.length-1]].concat(a.substr(0,a.length-1).split("")),n=n.substr(0,e.index)+n.substr(e.index+a.length)}}return t}!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const a=new URL(e,location),s=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,o)=>{const r=new URL(e,a);if(self[t].moduleMap[r])return n(self[t].moduleMap[r]);const l=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),u=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){o(new Error(`Failed to import: ${e}`)),s(u)},onload(){n(self[t].moduleMap[r]),s(u)}});document.head.appendChild(u)})),self[t].moduleMap={}}}("/mahjong/assets/");const z={m:["🀇","🀈","🀉","🀊","🀋","🀌","🀍","🀎","🀏"],p:["🀙","🀚","🀛","🀜","🀝","🀞","🀟","🀠","🀡"],s:["🀐","🀑","🀒","🀓","🀔","🀕","🀖","🀗","🀘"],z:["🀀","🀁","🀂","🀃","🀆","🀅","🀄","🀫","🀪"]};function S(e){let t=9,n=0,a=0,s=0;let o=!1,r=!1,l=!1;const u=(e,t=!1)=>{let u=[0,0,0],c=[0,0,0];const d=[...e];let i=0,f=0,p=0;for(let n=0;n<9;n++)if(0!==d[n]&&void 0!==d[n]&&(d[n]>=3&&(d[n]-=3,i++),d[n]>0)){if(t)continue;d[n+1]>0&&d[n+2]>0&&(d[n]--,d[n+1]--,d[n+2]--,i++),d[n]>0&&d[n+1]>0&&d[n+2]>0&&(d[n]--,d[n+1]--,d[n+2]--,i++)}for(let n=0;n<9;n++)0!==d[n]&&void 0!==d[n]&&(2!==d[n]?t||(d[n+1]>0&&(d[n]--,d[n+1]--,f++),d[n+2]>0&&(d[n]--,d[n+2]--,f++)):(d[n]-=2,f++,o=!0));p+=d.reduce(((e,t)=>e+t)),u=[i,f,p];const h=[...e];i=0,f=0,p=0;for(let n=0;n<9;n++)0!==h[n]&&void 0!==h[n]&&(t||(h[n]>=2&&h[n+1]>=2&&h[n+2]>=2&&(h[n]-=2,h[n+1]-=2,h[n+2]-=2,i+=2),h[n]>=2&&h[n+1]>=2&&h[n+2]>=2&&(h[n]-=2,h[n+1]-=2,h[n+2]-=2,i+=2)),3!==h[n]&&4!==h[n]||(h[n]-=3,i++),2===h[n]&&(h[n]-=2,f++,r=!0),t||(h[n]>0&&h[n+1]>0&&h[n+2]>0&&(h[n]--,h[n+1]--,h[n+2]--,i++),h[n]>0&&h[n+1]>0&&(h[n]--,h[n+1]--,f++),h[n]>0&&h[n+2]>0&&(h[n]--,h[n+2]--,f++)));p+=h.reduce(((e,t)=>e+t)),c=[i,f,p];const m=u>=c?u:c;!1===l&&(l=u>=c?o:r),n+=m[0],a+=m[1],s+=m[2],n+a>4&&(l||(a--,s+=2))};return u(e[0]),u(e[1]),u(e[2]),u(e[3],!0),(()=>{let e=-1;for(;n<4;)a&&s?(a--,s--,n++,e++):!a||s?!a&&s&&(s-=2,n++,e+=2):(a--,s++,n++,e++);s>0&&e++,t=e<t?e:t,n=a=s=0})(),t}function M(e){const t=function(e){const t=e[0].reduce(((e,t)=>e+t))+e[1].reduce(((e,t)=>e+t))+e[2].reduce(((e,t)=>e+t))+e[3].reduce(((e,t)=>e+t));if(t<13||t>14)return-2;const n=[...e[0],...e[1],...e[2],...e[3]];let a=0,s=0;for(let o=0;o<34;o++)n[o]>=2&&a++,1===n[o]&&s++;return a+s>=7?6-a:6-a+(7-a-s)}(e),n=function(e){const t=e[0].reduce(((e,t)=>e+t))+e[1].reduce(((e,t)=>e+t))+e[2].reduce(((e,t)=>e+t))+e[3].reduce(((e,t)=>e+t));if(t<13||t>14)return-2;const n=[e[0][0],e[0][8],e[1][0],e[1][8],e[2][0],e[2][8],...e[3]];let a=0,s=0;for(let o=0;o<13;o++)n[o]&&a++,n[o]>1&&(s=1);return 13-a-s}(e);return-2===t||-2===n?S(e):Math.min(S(e),t,n)}function L(e,t,n){const a=M(e);e[t][n]--;const s=[];for(let o=0;o<4;o++)for(let r=0;r<e[o].length;r++){e[o][r]++;const l=M(e);if((o!==t||r!==n)&&l<a){const e={i:o,j:r};s.push(e)}e[o][r]--}return e[t][n]++,s}function U(e){const t=function(e){const t=new Array(9).fill(0),n=new Array(9).fill(0),a=new Array(9).fill(0),s=new Array(7).fill(0);let o;for(let r=0;r<e.m.length;r++)o=parseInt(e.m[r]),t[--o]++;for(let r=0;r<e.p.length;r++)o=parseInt(e.p[r]),n[--o]++;for(let r=0;r<e.s.length;r++)o=parseInt(e.s[r]),a[--o]++;for(let r=0;r<e.z.length;r++)o=parseInt(e.z[r]),s[--o]++;return[[...t],[...n],[...a],[...s]]}(I(e)),n=M(t),a=function(e){const t=[];for(let n=0;n<4;n++)for(let a=0;a<e[n].length;a++)e[n][a]>0&&t.push(L(e,n,a));return t}(t);return{syanten:n,kairyou:function(e,t){const n=new Map,a=P(e);for(let s=0;s<t.length;s++)if(t[s].length>0){const e=P(t[s]);n.set(a[s],{mo:e,rest:A(e)})}return n}(function(e){const t=[];for(let n=0;n<4;n++)for(let a=0;a<e[n].length;a++)if(e[n][a]>0){const e={i:n,j:a};t.push(e)}return t}(t),a)}}function A(e){return 4*e.length-13}function P(e){const t=[];let n="";for(let a=0;a<e.length;a++)0===e[a].i&&(n=++e[a].j+"m",t.push(n)),1===e[a].i&&(n=++e[a].j+"p",t.push(n)),2===e[a].i&&(n=++e[a].j+"s",t.push(n)),3===e[a].i&&(n=++e[a].j+"z",t.push(n));return t}function $(e){try{const t=I(e.replace(/0/,"5")),n=[];for(const e in t)n.push(...t[e].map((t=>z[e][parseInt(t)-1])));return n}catch(t){return[]}}var B={setup(){const a=e(""),s=e(0),o=e([]),r=e(!1),l=()=>{if(a.value.length<=0||!function(e){try{const t=I(e.replace(/0/,"5")),n=t.m.length+t.p.length+t.s.length+t.z.length;return!(n<13||n>14)}catch(t){return!1}}(a.value))return void n.error("無効入力");const{syanten:e,kairyou:t}=U(a.value);s.value=e;const l=[];t.forEach(((e,t)=>{l.push({da:$(t)[0],daRaw:t,mo:e.mo.map($).map((e=>e[0])),moRaw:e.mo,restCard:e.rest})})),o.value=l,r.value=!0},u=t((()=>$(a.value)));return{handCards:a,Syanten:s,calcRes:o,inputed:r,showCards:l,discard:(e,t)=>{const n=e.daRaw,s=e.moRaw[t],o=I(a.value);o[n[1]].splice(o[n[1]].findIndex((e=>e===n[0])),1),o[s[1]].push(s[0]),a.value=function(e){let t="";for(const n in e)0!==e[n].length&&(t+=e[n].sort().join("")+n);return t}(o),l()},handCardsImg:u}}};const E=u("data-v-9afabbfe");a("data-v-9afabbfe");const F=p(" - m=萬子, p=筒子, s=索子, z=字牌, 0=赤 - 一般形=４面子１雀頭 / 標準形=一般形＋七対形＋国士形 - ツモはその時点で使用していない牌をランダムに選択します - 有効牌をクリックすると打牌後にその牌をツモ牌として表示します - (n*3+2)枚で開始：(n*3+2)枚目をツモ牌として表示 - (n*3+1)枚で開始：ツモはページのロード時に毎回変化 - 和了役の判定はありません - 暗槓はできません "),O=p(" 新規 "),q=p("手牌："),H={class:"tiles"},T={class:"tiles"};s();const D=E(((e,t,n,a,s,u)=>{const y=o("a-button"),g=o("a-tooltip"),_=o("a-input-search"),v=o("a-form-item"),b=o("a-form"),w=o("a-col"),j=o("a-row"),x=o("a-table-column"),k=o("a-table-column-group"),C=o("a-table");return r(),l(j,{type:"flex",justify:"center"},{default:E((()=>[c(w,{span:24},{default:E((()=>[c(w,{span:24},{default:E((()=>[c(j,{type:"flex",justify:"center"},{default:E((()=>[c(w,{span:12},{default:E((()=>[c(b,null,{default:E((()=>[c(v,{label:"Please input your hand cards:"},{default:E((()=>[c(_,{value:a.handCards,"onUpdate:value":t[1]||(t[1]=e=>a.handCards=e),placeholder:"手牌",size:"large",onChange:t[2]||(t[2]=e=>a.inputed=!1),onSearch:a.showCards},{enterButton:E((()=>[c(g,null,{title:E((()=>[F])),default:E((()=>[c(y,{type:"link",ghost:""},{default:E((()=>[O])),_:1})])),_:1})])),_:1},8,["value","onSearch"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),c(w,{span:24},{default:E((()=>[c(j,{type:"flex",justify:"center"},{default:E((()=>[c(w,{span:12},{default:E((()=>[d(c(C,{"data-source":a.calcRes,"row-key":(e,t)=>t,bordered:"",style:{width:"100%"},pagination:{pageSize:50},scroll:{y:240}},{title:E((()=>[c("span",null,[q,c("span",H,f(a.handCardsImg.join("")),1),p("("+f(-1===a.Syanten?"和了":0===a.Syanten?"聴牌":`${a.Syanten}向聴`)+")",1)])])),default:E((()=>[c(k,{title:"標準形(七対国士を含む)の計算結果:"},{default:E((()=>[c(x,{key:"da","data-index":"da",title:"打"},{default:E((({text:e})=>[c("span",T,f(e),1)])),_:1}),c(x,{key:"mo",title:a.Syanten>0?"摸":"待ち","data-index":"mo"},{default:E((({text:e,record:t})=>[c("a",null,[(r(!0),l(h,null,m(e,((e,n)=>(r(),l("span",{key:e,class:"tiles",onClick:e=>a.discard(t,n)},f(e),9,["onClick"])))),128))]),p("（"+f(t.restCard)+"枚） ",1)])),_:1},8,["title"])])),_:1})])),_:1},8,["data-source","row-key"]),[[i,a.inputed]])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}));B.render=D,B.__scopeId="data-v-9afabbfe";var G={name:"App",components:{Home:B}};const J=u("data-v-52e45a82");a("data-v-52e45a82");const K={class:"layout"},N=c("div",{class:"imgBox"},[c("a",{href:"https://github.com/paxyqi/mahjong"},[c("img",{alt:"Mahjong pic",width:"210",src:"/mahjong/assets/mahjong.7b17e2e6.png"})])],-1),Q=c("a",{href:"https://github.com/paxyqi",style:{"text-decoration":"none",color:"black"}},[c("strong",null,"Pixy")],-1),V=p(" ©2021 ");s();const W=J(((e,t,n,a,s,u)=>{const d=o("a-page-header"),i=o("a-layout-header"),f=o("a-col"),p=o("a-row"),h=o("Home"),m=o("a-layout-content"),y=o("a-layout-footer"),g=o("a-layout");return r(),l("div",K,[c(g,null,{default:J((()=>[c(i,{style:{padding:"0"},class:"header"},{default:J((()=>[c(d,{style:{"background-color":"#f5f5f5",width:"100%"},title:"麻雀牌理","sub-title":"ようこそPixyちゃんの牌理ウェブサイト!"})])),_:1}),c(m,{class:"content"},{default:J((()=>[c(p,null,{default:J((()=>[c(f,{span:24},{default:J((()=>[c(p,{type:"flex",justify:"center"},{default:J((()=>[c(f,{span:24},{default:J((()=>[N])),_:1})])),_:1}),c(p,{type:"flex",justify:"center"},{default:J((()=>[c(f,{span:24},{default:J((()=>[c(h)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),c(y,{style:{"text-align":"center"},class:"footer"},{default:J((()=>[Q,V])),_:1})])),_:1})])}));G.render=W,G.__scopeId="data-v-52e45a82",y(G).use(g).use(_).use(v).use(b).use(w).use(j).use(x).use(k).use(C).use(R).mount("#app");
