<!--eslint-disable vue/no-v-model-argument -->
<template>
  <a-row type="flex" justify="center">
    <a-col>
      <a-space direction="vertical">
        <a-col :span="24">
          <a-row type="flex" justify="center">
            <a-col :span="12">
              <a-form>
                <a-form-item label="Please input your hand cards:">
                  <a-input-search
                    v-model:value="handCards"
                    placeholder="手牌"
                    size="large"
                    @search="showCards"
                  >
                    <template #enterButton>
                      <a-tooltip>
                        <template #title>
                            - m=萬子, p=筒子, s=索子, z=字牌, 0=赤
                            - 一般形=４面子１雀頭 / 標準形=一般形＋七対形＋国士形
                            - ツモはその時点で使用していない牌をランダムに選択します
                            - 有効牌をクリックすると打牌後にその牌をツモ牌として表示します
                            - (n*3+2)枚で開始：(n*3+2)枚目をツモ牌として表示
                            - (n*3+1)枚で開始：ツモはページのロード時に毎回変化
                            - 和了役の判定はありません
                            - 暗槓はできません
                        </template>
                        <a-button type="link" ghost>新規</a-button>
                      </a-tooltip>
                    </template>
                  </a-input-search>
                </a-form-item>
              </a-form>
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="24">
          <a-row type="flex" justify="center">
            <a-col :span="12">
              <a-table
                v-show="inputed"
                :columns="columns"
                :data-source="newSchemeImg"
                bordered
                style="width: 100%"
                :pagination="{ pageSize: 50 }"
                :scroll="{ y: 240 }"
              >
                <template #name="{ text }">
                  <a>{{ text }}</a>
                </template>
                <!-- eslint-disable-next-line vue/no-unused-vars-->
                <template #title="currentPageData">
                  手牌：{{ handCardsImg }}({{
                    Syanten === 0 ? "聴牌" : `${Syanten}向聴`
                  }})
                </template>
              </a-table>
            </a-col>
          </a-row>
        </a-col>
      </a-space>
    </a-col>
  </a-row>
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
  Scheme,
  API
} from '../utils/mahjong';
import { message } from 'ant-design-vue';
export default {
  data () {
    return {
      handCards: '',
      changeCards: '',
      handCardsImg: '',
      Syanten: 0,
      newSchemeImg: [],
      inputed: false,
      columns: [
        { title: '切', dataIndex: 'i' },
        { title: '摸', dataIndex: 'j' }
      ]
    };
  },
  methods: {
    showCards () {
      if (this.handCards.length <= 0) {
        message.error('手牌不能为空');
        return;
      }
      console.log(API(this.handCards));
      const tehai = splitTiles(this.handCards);
      this.handCardsImg = showHandCards(tehai);
      const arr = transTiles2Arr(tehai);
      this.Syanten = syantenAll(arr);
      // improve(arr);
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
