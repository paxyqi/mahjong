<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>
      <div>
        <span>Please input your hand cards:</span>
        <input v-model='handCards' placeholder='手牌' />
        <button @click='showCards'>新規</button>
      </div>
      <div id='result' v-if='inputed'>
        <p class='left'>手牌: {{ handCardsImg }}  当前向听数:{{ Syanten }}</p>
        <div>
          <p class="left">进章:</p>
          <div v-for='item in newSchemeImg' :key='item.i'>
            <p class="left">打{{item.i}} 摸{{item.j}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.left {
  text-align: left;
}

#result {
  width: 60%;
  margin: auto;
}
</style>
<script>
import {
  splitTiles,
  showHandCards,
  transTiles2Arr,
  syantenAll,
  improve,
  discard,
  findCard,
  Scheme
} from '../utils/mahjong';
export default {
  props: {
    msg: String
  },
  data () {
    return {
      handCards: '',
      handCardsImg: '',
      Syanten: '',
      newSchemeImg: '',
      inputed: false
    };
  },
  methods: {
    showCards () {
      const tehai = splitTiles(this.handCards);
      this.handCardsImg = showHandCards(tehai);
      const arr = transTiles2Arr(tehai);
      this.Syanten = syantenAll(arr);
      improve(arr);
      discard(findCard(arr));
      const scheme = improve(arr);
      // const oneDimensionArr = findCard(arr);
      // console.log(oneDimensionArr);
      const oneDimensionArrImg = discard(findCard(arr));// 获得可以打掉的牌
      this.newSchemeImg = Scheme(scheme, oneDimensionArrImg);// 展示模切
      this.inputed = true;
    }
  }
};
</script>
