<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>
      <form>
        <span>Please input your hand cards:</span>
        <input v-model="handCards" placeholder="手牌" />
        <button @click="showCards">新規</button>
      </form>
      <div id="result" v-if="inputed">
        <p class="left">手牌: {{ handCardsImg }}</p>
        <p class="left">当前向听数:{{ Syanten }}</p>
        <div>
          <p>进章:{{ newSchemeImg }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.left {
  text-align: left;
}
</style>
<script>
import {
  splitTiles,
  showHandCards,
  transTiles2Arr,
  calculateSyanten,
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
      this.Syanten = calculateSyanten(arr);
      improve(arr);
      discard(findCard(arr));
      const scheme = improve(arr);
      // const oneDimensionArr = findCard(arr);
      // console.log(oneDimensionArr);
      const oneDimensionArrImg = discard(findCard(arr));
      this.newSchemeImg = Scheme(scheme, oneDimensionArrImg);
      this.inputed = true;
    }
  }
};
</script>
