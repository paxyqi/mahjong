import{r as e,c as t,a as n,p as a,b as s,d as l,o as r,e as o,w as u,f as c,g as d,v as i,t as f,h as p,F as h,i as m,j as y,L as g,T as _,k as v,I as w,B as j,R as x,C as b,P as k,l as C,S as R}from"./vendor.1245736b.js";function I(e){const t={p:[],m:[],s:[],z:[]};let n=e;for(;n.length>0;){const e=n.match(/[0-9]*[spzm]/);if(null===e)throw Error("invaild input");{const a=e[0];t[a[a.length-1]]=t[a[a.length-1]].concat(a.substr(0,a.length-1).split("")),n=n.substr(0,e.index)+n.substr(e.index+a.length)}}return t}!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const a=new URL(e,location),s=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,l)=>{const r=new URL(e,a);if(self[t].moduleMap[r])return n(self[t].moduleMap[r]);const o=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),u=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){l(new Error(`Failed to import: ${e}`)),s(u)},onload(){n(self[t].moduleMap[r]),s(u)}});document.head.appendChild(u)})),self[t].moduleMap={}}}("/mahjong/assets/");const z={m:["🀇","🀈","🀉","🀊","🀋","🀌","🀍","🀎","🀏"],p:["🀙","🀚","🀛","🀜","🀝","🀞","🀟","🀠","🀡"],s:["🀐","🀑","🀒","🀓","🀔","🀕","🀖","🀗","🀘"],z:["🀀","🀁","🀂","🀃","🀆","🀅","🀄","🀫","🀪"]};function S(e){let t=9,n=0,a=0,s=0;let l=!1,r=!1,o=!1;const u=(e,t=!1)=>{let u=[0,0,0],c=[0,0,0];const d=[...e];let i=0,f=0,p=0;for(let n=0;n<9;n++)if(0!==d[n]&&void 0!==d[n]&&(d[n]>=3&&(d[n]-=3,i++),d[n]>0)){if(t)continue;d[n+1]>0&&d[n+2]>0&&(d[n]--,d[n+1]--,d[n+2]--,i++),d[n]>0&&d[n+1]>0&&d[n+2]>0&&(d[n]--,d[n+1]--,d[n+2]--,i++)}for(let n=0;n<9;n++)0!==d[n]&&void 0!==d[n]&&(2!==d[n]?t||(d[n+1]>0&&(d[n]--,d[n+1]--,f++),d[n+2]>0&&(d[n]--,d[n+2]--,f++)):(d[n]-=2,f++,l=!0));p+=d.reduce(((e,t)=>e+t)),u=[i,f,p];const h=[...e];i=0,f=0,p=0;for(let n=0;n<9;n++)0!==h[n]&&void 0!==h[n]&&(t||(h[n]>=2&&h[n+1]>=2&&h[n+2]>=2&&(h[n]-=2,h[n+1]-=2,h[n+2]-=2,i+=2),h[n]>=2&&h[n+1]>=2&&h[n+2]>=2&&(h[n]-=2,h[n+1]-=2,h[n+2]-=2,i+=2)),3!==h[n]&&4!==h[n]||(h[n]-=3,i++),2===h[n]&&(h[n]-=2,f++,r=!0),t||(h[n]>0&&h[n+1]>0&&h[n+2]>0&&(h[n]--,h[n+1]--,h[n+2]--,i++),h[n]>0&&h[n+1]>0&&(h[n]--,h[n+1]--,f++),h[n]>0&&h[n+2]>0&&(h[n]--,h[n+2]--,f++)));p+=h.reduce(((e,t)=>e+t)),c=[i,f,p];const m=u>=c?u:c;!1===o&&(o=u>=c?l:r),n+=m[0],a+=m[1],s+=m[2],n+a>4&&(o||(a--,s+=2))};return u(e[0]),u(e[1]),u(e[2]),u(e[3],!0),(()=>{let e=-1;for(;n<4;)a&&s?(a--,s--,n++,e++):!a||s?!a&&s&&(s-=2,n++,e+=2):(a--,s++,n++,e++);s>0&&e++,t=e<t?e:t,n=a=s=0})(),t}function M(e){const t=function(e){const t=e[0].reduce(((e,t)=>e+t))+e[1].reduce(((e,t)=>e+t))+e[2].reduce(((e,t)=>e+t))+e[3].reduce(((e,t)=>e+t));if(t<13||t>14)return-2;const n=[...e[0],...e[1],...e[2],...e[3]];let a=0,s=0;for(let l=0;l<34;l++)n[l]>=2&&a++,1===n[l]&&s++;return a+s>=7?6-a:6-a+(7-a-s)}(e),n=function(e){const t=e[0].reduce(((e,t)=>e+t))+e[1].reduce(((e,t)=>e+t))+e[2].reduce(((e,t)=>e+t))+e[3].reduce(((e,t)=>e+t));if(t<13||t>14)return-2;const n=[e[0][0],e[0][8],e[1][0],e[1][8],e[2][0],e[2][8],...e[3]];let a=0,s=0;for(let l=0;l<13;l++)n[l]&&a++,n[l]>1&&(s=1);return 13-a-s}(e);return-2===t||-2===n?S(e):Math.min(S(e),t,n)}function L(e,t,n){const a=M(e);e[t][n]--;const s=[];for(let l=0;l<4;l++)for(let r=0;r<e[l].length;r++){e[l][r]++;const o=M(e);if((l!==t||r!==n)&&o<a){const e={i:l,j:r};s.push(e)}e[l][r]--}return e[t][n]++,s}function U(e){const t=function(e){const t=new Array(9).fill(0),n=new Array(9).fill(0),a=new Array(9).fill(0),s=new Array(7).fill(0);let l;for(let r=0;r<e.m.length;r++)l=parseInt(e.m[r]),t[--l]++;for(let r=0;r<e.p.length;r++)l=parseInt(e.p[r]),n[--l]++;for(let r=0;r<e.s.length;r++)l=parseInt(e.s[r]),a[--l]++;for(let r=0;r<e.z.length;r++)l=parseInt(e.z[r]),s[--l]++;return[[...t],[...n],[...a],[...s]]}(I(e)),n=M(t),a=function(e){const t=[];for(let n=0;n<4;n++)for(let a=0;a<e[n].length;a++)e[n][a]>0&&t.push(L(e,n,a));return t}(t),s=function(e,t){const n=new Map,a=P(e);let s=[];for(let l=0;l<t.length;l++)t[l].length>0&&(s=P(t[l]),n.set(a[l],s));return n}(function(e){const t=[];for(let n=0;n<4;n++)for(let a=0;a<e[n].length;a++)if(e[n][a]>0){const e={i:n,j:a};t.push(e)}return t}(t),a);return{syanten:n,kairyou:s,rest:function(e){const t=[];for(const n of e.values())t.push(A(n));return t}(s)}}function A(e){return 4*e.length-13}function P(e){const t=[];let n="";for(let a=0;a<e.length;a++)0===e[a].i&&(n=++e[a].j+"m",t.push(n)),1===e[a].i&&(n=++e[a].j+"p",t.push(n)),2===e[a].i&&(n=++e[a].j+"s",t.push(n)),3===e[a].i&&(n=++e[a].j+"z",t.push(n));return t}function $(e){try{const t=I(e.replace(/0/,"5")),n=[];for(const e in t)n.push(...t[e].map((t=>z[e][parseInt(t)-1])));return n}catch(t){return[]}}var B={setup(){const a=e(""),s=e(0),l=e([]),r=e([]),o=e(!1),u=()=>{if(a.value.length<=0||!function(e){try{const t=I(e.replace(/0/,"5")),n=t.m.length+t.p.length+t.s.length+t.z.length;return!(n<13||n>14)}catch(t){return!1}}(a.value))return void n.error("無効入力");const{syanten:e,kairyou:t,rest:u}=U(a.value);s.value=e,l.value=u;const c=[];let d=0;t.forEach(((e,t)=>{c.push({da:$(t)[0],daRaw:t,mo:e.map($).map((e=>e[0])),moRaw:e,restCard:l.value[d]}),d++})),r.value=c,o.value=!0},c=t((()=>$(a.value)));return{handCards:a,Syanten:s,calcRes:r,inputed:o,showCards:u,discard:(e,t)=>{const n=e.daRaw,s=e.moRaw[t],l=I(a.value);l[n[1]].splice(l[n[1]].findIndex((e=>e===n[0])),1),l[s[1]].push(s[0]),a.value=function(e){let t="";for(const n in e)0!==e[n].length&&(t+=e[n].sort().join("")+n);return t}(l),u()},handCardsImg:c}}};const E=u("data-v-02164d55");a("data-v-02164d55");const F=p(" - m=萬子, p=筒子, s=索子, z=字牌, 0=赤 - 一般形=４面子１雀頭 / 標準形=一般形＋七対形＋国士形 - ツモはその時点で使用していない牌をランダムに選択します - 有効牌をクリックすると打牌後にその牌をツモ牌として表示します - (n*3+2)枚で開始：(n*3+2)枚目をツモ牌として表示 - (n*3+1)枚で開始：ツモはページのロード時に毎回変化 - 和了役の判定はありません - 暗槓はできません "),O=p(" 新規 "),q=p("手牌："),H={class:"tiles"},T={class:"tiles"},D={class:"tiles"};s();const G=E(((e,t,n,a,s,u)=>{const y=l("a-button"),g=l("a-tooltip"),_=l("a-input-search"),v=l("a-form-item"),w=l("a-form"),j=l("a-col"),x=l("a-row"),b=l("a-table-column"),k=l("a-table-column-group"),C=l("a-table");return r(),o(x,{type:"flex",justify:"center"},{default:E((()=>[c(j,{span:24},{default:E((()=>[c(j,{span:24},{default:E((()=>[c(x,{type:"flex",justify:"center"},{default:E((()=>[c(j,{span:12},{default:E((()=>[c(w,null,{default:E((()=>[c(v,{label:"Please input your hand cards:"},{default:E((()=>[c(_,{value:a.handCards,"onUpdate:value":t[1]||(t[1]=e=>a.handCards=e),placeholder:"手牌",size:"large",onChange:t[2]||(t[2]=e=>a.inputed=!1),onSearch:a.showCards},{enterButton:E((()=>[c(g,null,{title:E((()=>[F])),default:E((()=>[c(y,{type:"link",ghost:""},{default:E((()=>[O])),_:1})])),_:1})])),_:1},8,["value","onSearch"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),c(j,{span:24},{default:E((()=>[c(x,{type:"flex",justify:"center"},{default:E((()=>[c(j,{span:12},{default:E((()=>[d(c(C,{"data-source":a.calcRes,"row-key":(e,t)=>t,bordered:"",style:{width:"100%"},pagination:{pageSize:50},scroll:{y:240}},{title:E((()=>[c("span",null,[q,c("span",H,f(a.handCardsImg.join("")),1),p("("+f(-1===a.Syanten?"和了":0===a.Syanten?"聴牌":`${a.Syanten}向聴`)+")",1)])])),default:E((()=>[c(k,{title:"標準形(七対国士を含む)の計算結果:"},{default:E((()=>[c(b,{key:"da","data-index":"da",title:"打"},{default:E((({text:e})=>[c("span",T,f(e),1)])),_:1}),c(b,{key:"mo",title:a.Syanten>0?"摸":"待ち","data-index":"mo"},{default:E((({text:e,record:t})=>[c("a",null,[(r(!0),o(h,null,m(e,((e,n)=>(r(),o("span",{key:e,class:"tiles",onClick:e=>a.discard(t,n)},f(e),9,["onClick"])))),128))])])),_:1},8,["title"]),c(b,{key:"restCard","data-index":"restCard",title:"剩余"},{default:E((({text:e})=>[c("span",D,f(e),1)])),_:1})])),_:1})])),_:1},8,["data-source","row-key"]),[[i,a.inputed]])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}));B.render=G,B.__scopeId="data-v-02164d55";var J={name:"App",components:{Home:B}};const K=u("data-v-52e45a82");a("data-v-52e45a82");const N={class:"layout"},Q=c("div",{class:"imgBox"},[c("a",{href:"https://github.com/paxyqi/mahjong"},[c("img",{alt:"Mahjong pic",width:"210",src:"/mahjong/assets/mahjong.0014c54b.png"})])],-1),V=c("a",{href:"https://github.com/paxyqi",style:{"text-decoration":"none",color:"black"}},[c("strong",null,"Pixy")],-1),W=p(" ©2021 ");s();const X=K(((e,t,n,a,s,u)=>{const d=l("a-page-header"),i=l("a-layout-header"),f=l("a-col"),p=l("a-row"),h=l("Home"),m=l("a-layout-content"),y=l("a-layout-footer"),g=l("a-layout");return r(),o("div",N,[c(g,null,{default:K((()=>[c(i,{style:{padding:"0"},class:"header"},{default:K((()=>[c(d,{style:{"background-color":"#f5f5f5",width:"100%"},title:"麻雀牌理","sub-title":"ようこそPixyちゃんの牌理ウェブサイト!"})])),_:1}),c(m,{class:"content"},{default:K((()=>[c(p,null,{default:K((()=>[c(f,{span:24},{default:K((()=>[c(p,{type:"flex",justify:"center"},{default:K((()=>[c(f,{span:24},{default:K((()=>[Q])),_:1})])),_:1}),c(p,{type:"flex",justify:"center"},{default:K((()=>[c(f,{span:24},{default:K((()=>[c(h)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),c(y,{style:{"text-align":"center"},class:"footer"},{default:K((()=>[V,W])),_:1})])),_:1})])}));J.render=X,J.__scopeId="data-v-52e45a82",y(J).use(g).use(_).use(v).use(w).use(j).use(x).use(b).use(k).use(C).use(R).mount("#app");
