import{r as e,c as t,a as n,p as a,b as o,d as r,o as s,e as l,w as u,f as c,g as i,v as f,t as d,h as p,F as h,i as m,j as g,L as y,T as v,k as _,I as w,B as j,R as b,C as x,P as k,l as C,S as R}from"./vendor.35ddc13f.js";function z(e){const t={p:[],m:[],s:[],z:[]};let n=e;for(;n.length>0;){const e=n.match(/[0-9]*[spzm]/);if(null===e)throw Error("invaild input");{const a=e[0];t[a[a.length-1]]=t[a[a.length-1]].concat(a.substr(0,a.length-1).split("")),n=n.substr(0,e.index)+n.substr(e.index+a.length)}}return t}!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const a=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,r)=>{const s=new URL(e,a);if(self[t].moduleMap[s])return n(self[t].moduleMap[s]);const l=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),u=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){r(new Error(`Failed to import: ${e}`)),o(u)},onload(){n(self[t].moduleMap[s]),o(u)}});document.head.appendChild(u)})),self[t].moduleMap={}}}("/mahjong/assets/");const I={m:["🀇","🀈","🀉","🀊","🀋","🀌","🀍","🀎","🀏"],p:["🀙","🀚","🀛","🀜","🀝","🀞","🀟","🀠","🀡"],s:["🀐","🀑","🀒","🀓","🀔","🀕","🀖","🀗","🀘"],z:["🀀","🀁","🀂","🀃","🀆","🀅","🀄","🀫","🀪"]};function M(e){let t=9,n=0,a=0,o=0;let r=!1,s=!1,l=!1;const u=(e,t=!1)=>{let u=[0,0,0],c=[0,0,0];const i=[...e];let f=0,d=0,p=0;for(let n=0;n<9;n++)i[n]>=3&&(i[n]-=3,f+=1);for(let n=0;n<9;n++)if(0!==i[n]&&void 0!==i[n]&&i[n]>0){if(t)continue;i[n+1]>0&&i[n+2]>0&&(i[n]--,i[n+1]--,i[n+2]--,f++),i[n]>0&&i[n+1]>0&&i[n+2]>0&&(i[n]--,i[n+1]--,i[n+2]--,f++)}for(let n=0;n<9;n++)0!==i[n]&&void 0!==i[n]&&(2!==i[n]?t||(i[n+1]>0&&(i[n]--,i[n+1]--,d++),i[n+2]>0&&(i[n]--,i[n+2]--,d++)):(i[n]-=2,d++,r=!0));p+=i.reduce(((e,t)=>e+t)),u=[f,d,p];const h=[...e];f=0,d=0,p=0;for(let n=0;n<9;n++)0!==h[n]&&void 0!==h[n]&&(t||(h[n]>=2&&h[n+1]>=2&&h[n+2]>=2&&(h[n]-=2,h[n+1]-=2,h[n+2]-=2,f+=2),h[n]>=2&&h[n+1]>=2&&h[n+2]>=2&&(h[n]-=2,h[n+1]-=2,h[n+2]-=2,f+=2)),3!==h[n]&&4!==h[n]||(h[n]-=3,f++),2===h[n]&&(h[n]-=2,d++,s=!0),t||(h[n]>0&&h[n+1]>0&&h[n+2]>0&&(h[n]--,h[n+1]--,h[n+2]--,f++),h[n]>0&&h[n+1]>0&&(h[n]--,h[n+1]--,d++),h[n]>0&&h[n+2]>0&&(h[n]--,h[n+2]--,d++)));p+=h.reduce(((e,t)=>e+t)),c=[f,d,p];const m=u>=c?u:c;!1===l&&(l=u>=c?r:s),n+=m[0],a+=m[1],o+=m[2],n+a>4&&(l||(a--,o+=2))};return u(e[0]),u(e[1]),u(e[2]),u(e[3],!0),(()=>{let e=-1;for(;n<4;)a&&o?(a--,o--,n++,e++):!a||o?!a&&o&&(o-=2,n++,e+=2):(a--,o++,n++,e++);o>0&&e++,t=e<t?e:t,n=a=o=0})(),t}function S(e){const t=function(e){const t=e[0].reduce(((e,t)=>e+t))+e[1].reduce(((e,t)=>e+t))+e[2].reduce(((e,t)=>e+t))+e[3].reduce(((e,t)=>e+t));if(t<13||t>14)return-2;const n=[...e[0],...e[1],...e[2],...e[3]];let a=0,o=0;for(let r=0;r<34;r++)n[r]>=2&&a++,1===n[r]&&o++;return a+o>=7?6-a:6-a+(7-a-o)}(e),n=function(e){const t=e[0].reduce(((e,t)=>e+t))+e[1].reduce(((e,t)=>e+t))+e[2].reduce(((e,t)=>e+t))+e[3].reduce(((e,t)=>e+t));if(t<13||t>14)return-2;const n=[e[0][0],e[0][8],e[1][0],e[1][8],e[2][0],e[2][8],...e[3]];let a=0,o=0;for(let r=0;r<13;r++)n[r]&&a++,n[r]>1&&(o=1);return 13-a-o}(e);return-2===t||-2===n?M(e):Math.min(M(e),t,n)}function L(e,t,n){const a=S(e);e[t][n]--;const o=[];for(let r=0;r<4;r++)for(let s=0;s<e[r].length;s++){e[r][s]++;const l=S(e);if((r!==t||s!==n)&&l<a){const e={i:r,j:s};o.push(e)}e[r][s]--}return e[t][n]++,o}function U(e){const t=function(e){let t=0,n=!1;for(let a=0;a<4;a++)for(const n of e[a])t+=n;if(13===t)for(;!n;){const t=Math.round(34*Math.random()),a=Math.floor(t/9),o=t-9*a;$=[a,o],e[a][o]<=3&&(e[a][o]++,n=!0)}else $=[4,0];return e}(function(e){const t=new Array(9).fill(0),n=new Array(9).fill(0),a=new Array(9).fill(0),o=new Array(7).fill(0);let r;for(let s=0;s<e.m.length;s++)r=parseInt(e.m[s]),t[--r]++;for(let s=0;s<e.p.length;s++)r=parseInt(e.p[s]),n[--r]++;for(let s=0;s<e.s.length;s++)r=parseInt(e.s[s]),a[--r]++;for(let s=0;s<e.z.length;s++)r=parseInt(e.z[s]),o[--r]++;return[[...t],[...n],[...a],[...o]]}(z(e))),n=S(t),a=function(e){const t=[];for(let n=0;n<4;n++)for(let a=0;a<e[n].length;a++)e[n][a]>0&&t.push(L(e,n,a));return t}(t);return{syanten:n,kairyou:function(e,t,n){const a=new Map,o=E(e);for(let r=0;r<t.length;r++)if(t[r].length>0){const e=E(t[r]);a.set(o[r],{mo:e,rest:A(e,n)})}return a}(function(e){const t=[];for(let n=0;n<4;n++)for(let a=0;a<e[n].length;a++)if(e[n][a]>0){const e={i:n,j:a};t.push(e)}return t}(t),a,function(e){const t=[],n=["m","p","s","z"];return e.map(((e,a)=>e.forEach(((e,o)=>{let r=e;for(;r>0;)t.push(o+1+n[a]),r--})))),t}(t))}}function A(e,t){return 4*e.length-function(e,t){const n=[];for(let a=0;a<e.length;a++)for(let o=0;o<t.length;o++)e[a]===t[o]&&n.push(e[a]);return n.length}(e,t)}function E(e){const t=[],n=["m","p","s","z"];return e.map((e=>t.push(e.j+1+n[e.i]))),t}function P(e){try{const t=z(e.replace(/0/,"5")),n=[];for(const e in t)n.push(...t[e].map((t=>I[e][parseInt(t)-1])));return n}catch(t){return[]}}let $=[4,0];var B={setup(){const a=e(""),o=e(0),r=e([]),s=e(!1),l=e([]),u=()=>{if(a.value.length<=0||!function(e){try{const t=z(e.replace(/0/,"5")),n=t.m.length+t.p.length+t.s.length+t.z.length;return!(n<13||n>14)}catch(t){return!1}}(a.value))return void n.error("無効入力");const{syanten:e,kairyou:t}=U(a.value);o.value=e;const u=[];t.forEach(((e,t)=>{u.push({da:P(t)[0],daRaw:t,mo:e.mo.map(P).map((e=>e[0])),moRaw:e.mo,nokori:e.rest})})),r.value=u.sort(((e,t)=>t.nokori-e.nokori)),s.value=!0,l.value=$},c=t((()=>{const e=()=>{let e="";if(0===l.value[0])e="m";else if(1===l.value[0])e="p";else if(2===l.value[0])e="s";else{if(3!==l.value[0])return"";e="z"}return l.value[1]+1+e};console.log(e());const t=a.value.concat(e());return console.log(t),P(t)}));return{handCards:a,Syanten:o,calcRes:r,inputed:s,showCards:u,discard:(e,t)=>{const n=e.daRaw,o=e.moRaw[t],r=z(a.value);r[n[1]].splice(r[n[1]].findIndex((e=>e===n[0])),1),r[o[1]].push(o[0]),a.value=function(e){let t="";for(const n in e)0!==e[n].length&&(t+=e[n].sort().join("")+n);return t}(r),u()},handCardsImg:c,randCard:l}}};const F=u("data-v-23c1ac78");a("data-v-23c1ac78");const O=p(" - m=萬子, p=筒子, s=索子, z=字牌, 0=赤 - 一般形=４面子１雀頭 / 標準形=一般形＋七対形＋国士形 - ツモはその時点で使用していない牌をランダムに選択します - 有効牌をクリックすると打牌後にその牌をツモ牌として表示します - (n*3+2)枚で開始：(n*3+2)枚目をツモ牌として表示 - (n*3+1)枚で開始：ツモはページのロード時に毎回変化 - 和了役の判定はありません - 暗槓はできません "),q=p(" 新規 "),H=p("手牌： "),T={class:"tiles"},D={class:"tiles"};o();const G=F(((e,t,n,a,o,u)=>{const g=r("a-button"),y=r("a-tooltip"),v=r("a-input-search"),_=r("a-form-item"),w=r("a-form"),j=r("a-col"),b=r("a-row"),x=r("a-table-column"),k=r("a-table-column-group"),C=r("a-table");return s(),l(b,{type:"flex",justify:"center"},{default:F((()=>[c(j,{span:24},{default:F((()=>[c(j,{span:24},{default:F((()=>[c(b,{type:"flex",justify:"center"},{default:F((()=>[c(j,{span:12},{default:F((()=>[c(w,null,{default:F((()=>[c(_,{label:"Please input your hand cards:"},{default:F((()=>[c(v,{value:a.handCards,"onUpdate:value":t[1]||(t[1]=e=>a.handCards=e),placeholder:"手牌",size:"large",onChange:t[2]||(t[2]=e=>a.inputed=!1),onSearch:a.showCards},{enterButton:F((()=>[c(y,null,{title:F((()=>[O])),default:F((()=>[c(g,{type:"link",ghost:""},{default:F((()=>[q])),_:1})])),_:1})])),_:1},8,["value","onSearch"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),c(j,{span:24},{default:F((()=>[c(b,{type:"flex",justify:"center"},{default:F((()=>[c(j,{span:12},{default:F((()=>[i(c(C,{"data-source":a.calcRes,"row-key":(e,t)=>t,bordered:"",style:{width:"100%"},pagination:{pageSize:50},scroll:{y:240}},{title:F((()=>[c("span",null,[H,c("span",T,d(a.handCardsImg.join("")),1),p("("+d(-1===a.Syanten?"和了":0===a.Syanten?"聴牌":`${a.Syanten}向聴`)+")",1)])])),default:F((()=>[c(k,{title:"標準形(七対国士を含む)の計算結果:"},{default:F((()=>[c(x,{key:"da","data-index":"da",title:"打"},{default:F((({text:e})=>[c("span",D,d(e),1)])),_:1}),c(x,{key:"mo",title:a.Syanten>0?"摸":"待ち","data-index":"mo"},{default:F((({text:e,record:t})=>[c("a",null,[(s(!0),l(h,null,m(e,((e,n)=>(s(),l("span",{key:e,class:"tiles",onClick:e=>a.discard(t,n)},d(e),9,["onClick"])))),128))]),p("（"+d(t.nokori)+"枚） ",1)])),_:1},8,["title"])])),_:1})])),_:1},8,["data-source","row-key"]),[[f,a.inputed]])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}));B.render=G,B.__scopeId="data-v-23c1ac78";var J={name:"App",components:{Home:B}};const K=u("data-v-52e45a82");a("data-v-52e45a82");const N={class:"layout"},Q=c("div",{class:"imgBox"},[c("a",{href:"https://github.com/paxyqi/mahjong"},[c("img",{alt:"Mahjong pic",width:"210",src:"/mahjong/assets/mahjong.7b17e2e6.png"})])],-1),V=c("a",{href:"https://github.com/paxyqi",style:{"text-decoration":"none",color:"black"}},[c("strong",null,"Pixy")],-1),W=p(" ©2021 ");o();const X=K(((e,t,n,a,o,u)=>{const i=r("a-page-header"),f=r("a-layout-header"),d=r("a-col"),p=r("a-row"),h=r("Home"),m=r("a-layout-content"),g=r("a-layout-footer"),y=r("a-layout");return s(),l("div",N,[c(y,null,{default:K((()=>[c(f,{style:{padding:"0"},class:"header"},{default:K((()=>[c(i,{style:{"background-color":"#f5f5f5",width:"100%"},title:"麻雀牌理","sub-title":"ようこそPixyちゃんの牌理ウェブサイト!"})])),_:1}),c(m,{class:"content"},{default:K((()=>[c(p,null,{default:K((()=>[c(d,{span:24},{default:K((()=>[c(p,{type:"flex",justify:"center"},{default:K((()=>[c(d,{span:24},{default:K((()=>[Q])),_:1})])),_:1}),c(p,{type:"flex",justify:"center"},{default:K((()=>[c(d,{span:24},{default:K((()=>[c(h)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),c(g,{style:{"text-align":"center"},class:"footer"},{default:K((()=>[V,W])),_:1})])),_:1})])}));J.render=X,J.__scopeId="data-v-52e45a82",g(J).use(y).use(v).use(_).use(w).use(j).use(b).use(x).use(k).use(C).use(R).mount("#app");
