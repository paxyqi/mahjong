import{r as e,c as t,a as n,p as a,b as s,d as l,o,e as r,w as u,f as c,g as d,v as i,t as f,h as p,F as h,i as m,j as y,L as g,T as _,k as v,I as w,B as b,R as j,C as x,P as k,l as R,S as C}from"./vendor.1245736b.js";function z(e){const t={p:[],m:[],s:[],z:[]};let n=e;for(;n.length>0;){const e=n.match(/[0-9]*[spzm]/);if(null===e)throw Error("invaild input");{const a=e[0];t[a[a.length-1]]=t[a[a.length-1]].concat(a.substr(0,a.length-1).split("")),n=n.substr(0,e.index)+n.substr(e.index+a.length)}}return t}!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const a=new URL(e,location),s=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,l)=>{const o=new URL(e,a);if(self[t].moduleMap[o])return n(self[t].moduleMap[o]);const r=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),u=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){l(new Error(`Failed to import: ${e}`)),s(u)},onload(){n(self[t].moduleMap[o]),s(u)}});document.head.appendChild(u)})),self[t].moduleMap={}}}("/mahjong/assets/");const I={m:["🀇","🀈","🀉","🀊","🀋","🀌","🀍","🀎","🀏"],p:["🀙","🀚","🀛","🀜","🀝","🀞","🀟","🀠","🀡"],s:["🀐","🀑","🀒","🀓","🀔","🀕","🀖","🀗","🀘"],z:["🀀","🀁","🀂","🀃","🀆","🀅","🀄","🀫","🀪"]};function S(e){let t=9,n=0,a=0,s=0;const l=(e,t=!1)=>{let l=[0,0,0],o=[0,0,0];const r=[...e];let u=0,c=0,d=0;for(let n=0;n<9;n++)if(0!==r[n]&&void 0!==r[n]&&(r[n]>=3&&(r[n]-=3,u++),r[n]>0)){if(t)continue;r[n+1]>0&&r[n+2]>0&&(r[n]--,r[n+1]--,r[n+2]--,u++),r[n]>0&&r[n+1]>0&&r[n+2]>0&&(r[n]--,r[n+1]--,r[n+2]--,u++)}for(let n=0;n<9;n++)0!==r[n]&&void 0!==r[n]&&(2!==r[n]?t||(r[n+1]>0&&(r[n]--,r[n+1]--,c++),r[n+2]>0&&(r[n]--,r[n+2]--,c++)):(r[n]-=2,c++));d+=r.reduce(((e,t)=>e+t)),l=[u,c,d];const i=[...e];u=0,c=0,d=0;for(let n=0;n<9;n++)0!==i[n]&&void 0!==i[n]&&(t||(i[n]>=2&&i[n+1]>=2&&i[n+2]>=2&&(i[n]-=2,i[n+1]-=2,i[n+2]-=2,u+=2),i[n]>=2&&i[n+1]>=2&&i[n+2]>=2&&(i[n]-=2,i[n+1]-=2,i[n+2]-=2,u+=2)),3!==i[n]&&4!==i[n]||(i[n]-=3,u++),2===i[n]&&(i[n]-=2,c++),t||(i[n]>0&&i[n+1]>0&&i[n+2]>0&&(i[n]--,i[n+1]--,i[n+2]--,u++),i[n]>0&&i[n+1]>0&&(i[n]--,i[n+1]--,c++),i[n]>0&&i[n+2]>0&&(i[n]--,i[n+2]--,c++)));d+=i.reduce(((e,t)=>e+t)),o=[u,c,d];const f=l>=o?l:o;n+=f[0],a+=f[1],s+=f[2]};return l(e[0]),l(e[1]),l(e[2]),l(e[3],!0),(()=>{let e=-1;for(;n<4;)a&&s?(a--,s--,n++,e++):!a||s?!a&&s&&(s-=2,n++,e+=2):(a--,s++,n++,e++);s>0&&e++,t=e<t?e:t,n=a=s=0})(),t}function M(e){const t=function(e){const t=e[0].reduce(((e,t)=>e+t))+e[1].reduce(((e,t)=>e+t))+e[2].reduce(((e,t)=>e+t))+e[3].reduce(((e,t)=>e+t));if(t<13||t>14)return-2;const n=[...e[0],...e[1],...e[2],...e[3]];let a=0,s=0;for(let l=0;l<34;l++)n[l]>=2&&a++,1===n[l]&&s++;return a+s>=7?6-a:6-a+(7-a-s)}(e),n=function(e){const t=e[0].reduce(((e,t)=>e+t))+e[1].reduce(((e,t)=>e+t))+e[2].reduce(((e,t)=>e+t))+e[3].reduce(((e,t)=>e+t));if(t<13||t>14)return-2;const n=[e[0][0],e[0][8],e[1][0],e[1][8],e[2][0],e[2][8],...e[3]];let a=0,s=0;for(let l=0;l<13;l++)n[l]&&a++,n[l]>1&&(s=1);return 13-a-s}(e);return-2===t||-2===n?S(e):Math.min(S(e),t,n)}function L(e,t,n){const a=M(e);e[t][n]--;const s=[];for(let l=0;l<4;l++)for(let o=0;o<e[l].length;o++){e[l][o]++;const r=M(e);if((l!==t||o!==n)&&r<a){const e={i:l,j:o};s.push(e)}e[l][o]--}return e[t][n]++,s}function U(e){const t=function(e){const t=new Array(9).fill(0),n=new Array(9).fill(0),a=new Array(9).fill(0),s=new Array(7).fill(0);let l;for(let o=0;o<e.m.length;o++)l=parseInt(e.m[o]),t[--l]++;for(let o=0;o<e.p.length;o++)l=parseInt(e.p[o]),n[--l]++;for(let o=0;o<e.s.length;o++)l=parseInt(e.s[o]),a[--l]++;for(let o=0;o<e.z.length;o++)l=parseInt(e.z[o]),s[--l]++;return[[...t],[...n],[...a],[...s]]}(z(e)),n=M(t),a=function(e){const t=[];for(let n=0;n<4;n++)for(let a=0;a<e[n].length;a++)e[n][a]>0&&t.push(L(e,n,a));return t}(t);return{syanten:n,kairyou:function(e,t){const n=new Map,a=A(e);let s=[];for(let l=0;l<t.length;l++)t[l].length>0&&(s=A(t[l]),n.set(a[l],s));return n}(function(e){const t=[];for(let n=0;n<4;n++)for(let a=0;a<e[n].length;a++)if(e[n][a]>0){const e={i:n,j:a};t.push(e)}return t}(t),a)}}function A(e){const t=[];let n="";for(let a=0;a<e.length;a++)0===e[a].i&&(n=++e[a].j+"m",t.push(n)),1===e[a].i&&(n=++e[a].j+"p",t.push(n)),2===e[a].i&&(n=++e[a].j+"s",t.push(n)),3===e[a].i&&(n=++e[a].j+"z",t.push(n));return t}function P(e){try{const t=z(e.replace(/0/,"5")),n=[];for(const e in t)n.push(...t[e].map((t=>I[e][parseInt(t)-1])));return n}catch(t){return[]}}var $={setup(){const a=e(""),s=e(0),l=e([]),o=e(!1),r=()=>{if(a.value.length<=0||!function(e){try{const t=z(e.replace(/0/,"5")),n=t.m.length+t.p.length+t.s.length+t.z.length;return!(n<13||n>14)}catch(t){return!1}}(a.value))return void n.error("無効入力");const{syanten:e,kairyou:t}=U(a.value);s.value=e;const r=[];t.forEach(((e,t)=>{r.push({da:P(t)[0],daRaw:t,mo:e.map(P).map((e=>e[0])),moRaw:e})})),l.value=r,o.value=!0},u=t((()=>P(a.value)));return{handCards:a,Syanten:s,calcRes:l,inputed:o,showCards:r,discard:(e,t)=>{const n=e.daRaw,s=e.moRaw[t],l=z(a.value);l[n[1]]=l[n[1]].filter((e=>e!==n[0])),l[s[1]].push(s[0]),a.value=function(e){let t="";for(const n in e)t+=e[n].sort().join("")+n;return t}(l),r()},handCardsImg:u}}};const B=u("data-v-73d069b6");a("data-v-73d069b6");const E=p(" - m=萬子, p=筒子, s=索子, z=字牌, 0=赤 - 一般形=４面子１雀頭 / 標準形=一般形＋七対形＋国士形 - ツモはその時点で使用していない牌をランダムに選択します - 有効牌をクリックすると打牌後にその牌をツモ牌として表示します - (n*3+2)枚で開始：(n*3+2)枚目をツモ牌として表示 - (n*3+1)枚で開始：ツモはページのロード時に毎回変化 - 和了役の判定はありません - 暗槓はできません "),F=p(" 新規 "),O=p("手牌："),q={class:"tiles"},H={class:"tiles"};s();const T=B(((e,t,n,a,s,u)=>{const y=l("a-button"),g=l("a-tooltip"),_=l("a-input-search"),v=l("a-form-item"),w=l("a-form"),b=l("a-col"),j=l("a-row"),x=l("a-table-column"),k=l("a-table-column-group"),R=l("a-table");return o(),r(j,{type:"flex",justify:"center"},{default:B((()=>[c(b,{span:24},{default:B((()=>[c(b,{span:24},{default:B((()=>[c(j,{type:"flex",justify:"center"},{default:B((()=>[c(b,{span:12},{default:B((()=>[c(w,null,{default:B((()=>[c(v,{label:"Please input your hand cards:"},{default:B((()=>[c(_,{value:a.handCards,"onUpdate:value":t[1]||(t[1]=e=>a.handCards=e),placeholder:"手牌",size:"large",onSearch:a.showCards},{enterButton:B((()=>[c(g,null,{title:B((()=>[E])),default:B((()=>[c(y,{type:"link",ghost:""},{default:B((()=>[F])),_:1})])),_:1})])),_:1},8,["value","onSearch"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),c(b,{span:24},{default:B((()=>[c(j,{type:"flex",justify:"center"},{default:B((()=>[c(b,{span:12},{default:B((()=>[d(c(R,{"data-source":a.calcRes,"row-key":(e,t)=>t,bordered:"",style:{width:"100%"},pagination:{pageSize:50},scroll:{y:240}},{title:B((()=>[c("span",null,[O,c("span",q,f(a.handCardsImg.join("")),1),p("("+f(-1===a.Syanten?"和了":0===a.Syanten?"聴牌":`${a.Syanten}向聴`)+")",1)])])),default:B((()=>[c(k,{title:"標準形(七対国士を含む)の計算結果:"},{default:B((()=>[c(x,{key:"da","data-index":"da",title:"打"},{default:B((({text:e})=>[c("span",H,f(e),1)])),_:1}),c(x,{key:"mo",title:a.Syanten>0?"摸":"待ち","data-index":"mo"},{default:B((({text:e,Records:t})=>[c("a",null,[(o(!0),r(h,null,m(e,((e,n)=>(o(),r("span",{key:e,class:"tiles",onClick:e=>a.discard(t,n)},f(e),9,["onClick"])))),128))])])),_:1},8,["title"])])),_:1})])),_:1},8,["data-source","row-key"]),[[i,a.inputed]])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}));$.render=T,$.__scopeId="data-v-73d069b6";var D={name:"App",components:{Home:$}};const G=u("data-v-52e45a82");a("data-v-52e45a82");const J={class:"layout"},K=c("div",{class:"imgBox"},[c("a",{href:"https://github.com/paxyqi/mahjong"},[c("img",{alt:"Mahjong pic",width:"210",src:"/mahjong/assets/mahjong.0014c54b.png"})])],-1),N=c("a",{href:"https://github.com/paxyqi",style:{"text-decoration":"none",color:"black"}},[c("strong",null,"Pixy")],-1),Q=p(" ©2021 ");s();const V=G(((e,t,n,a,s,u)=>{const d=l("a-page-header"),i=l("a-layout-header"),f=l("a-col"),p=l("a-row"),h=l("Home"),m=l("a-layout-content"),y=l("a-layout-footer"),g=l("a-layout");return o(),r("div",J,[c(g,null,{default:G((()=>[c(i,{style:{padding:"0"},class:"header"},{default:G((()=>[c(d,{style:{"background-color":"#f5f5f5",width:"100%"},title:"麻雀牌理","sub-title":"ようこそPixyちゃんの牌理ウェブサイト!"})])),_:1}),c(m,{class:"content"},{default:G((()=>[c(p,null,{default:G((()=>[c(f,{span:24},{default:G((()=>[c(p,{type:"flex",justify:"center"},{default:G((()=>[c(f,{span:24},{default:G((()=>[K])),_:1})])),_:1}),c(p,{type:"flex",justify:"center"},{default:G((()=>[c(f,{span:24},{default:G((()=>[c(h)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),c(y,{style:{"text-align":"center"},class:"footer"},{default:G((()=>[N,Q])),_:1})])),_:1})])}));D.render=V,D.__scopeId="data-v-52e45a82",y(D).use(g).use(_).use(v).use(w).use(b).use(j).use(x).use(k).use(R).use(C).mount("#app");
