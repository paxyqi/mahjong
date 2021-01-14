<template>
  <h1>{{ msg }}</h1>
  <p>Please input your hand cards:</p>
  <input v-model="handCards" placeholder="手牌"/>
  <button @click="showHandCards">新規</button>
  <p>手牌: {{ handCards }}</p>
</template>

<script>
const tiles = {
    m:["🀇","🀈","🀉","🀊","🀋","🀌","🀍","🀎","🀏"],
    p:["🀙","🀚","🀛","🀜","🀝","🀞","🀟","🀠","🀡"],
    s:["🀐","🀑","🀒","🀓","🀔","🀕","🀖","🀗","🀘"],
    z:["🀀","🀁","🀂","🀃","🀆","🀅","🀄","🀫","🀪"]
};
export default {
  props: {
    msg: String
  },
  data() {
    return {
        handCards: '',
    }
  },
  methods:{
    showHandCards(){
      const tails = this.splitTiles(this.handCards);
      console.log(tails);
    },
    splitTiles(handCard){
      const result={
        p:[],
        m:[],
        s:[],
        z:[]
      }
      let rest = handCard;
      while(rest.length>0){
        const colored= rest.match(/[0-9]*[spzm]/);
        const matchStr=colored[0];
        result[matchStr[matchStr.length-1]]=matchStr.substr(0,matchStr.length-1).split('');
        rest=rest.substr(0,colored.index)+rest.substr(colored.index+matchStr.length);
      }
      return result;
    }
  }
}
</script>

