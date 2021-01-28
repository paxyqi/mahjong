<!--eslint-disable vue/no-v-model-argument -->
<template>
  <a-row type="flex" justify="center">
    <a-col :span="24">
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
                          - m=萬子, p=筒子, s=索子, z=字牌, 0=赤 -
                          一般形=４面子１雀頭 / 標準形=一般形＋七対形＋国士形 -
                          ツモはその時点で使用していない牌をランダムに選択します
                          -
                          有効牌をクリックすると打牌後にその牌をツモ牌として表示します
                          - (n*3+2)枚で開始：(n*3+2)枚目をツモ牌として表示 -
                          (n*3+1)枚で開始：ツモはページのロード時に毎回変化 -
                          和了役の判定はありません - 暗槓はできません
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
                :data-source="calcRes"
                :rowKey="(_, index) => index"
                bordered
                style="width: 100%"
                :pagination="{ pageSize: 50 }"
                :scroll="{ y: 240 }"
                v-show="inputed"
              >
                <template #title>
                  <span
                    >手牌：<span style="font-size:2em">{{ handCardsImg.join("") }}</span>({{
                      Syanten === 0 ? "聴牌" : `${Syanten}向聴`
                    }})</span>
                </template>
                <a-table-column-group title="標準形(七対国士を含む)の計算結果:">
                  <a-table-column key="da" data-index="da" title="打">
                    <template #default="{text:da}">
                        <span style="font-size:2em">{{da}}</span>
                    </template>
                  </a-table-column>
                  <a-table-column key="mo" title="摸" data-index="mo">
                    <template #default="{text:mo,record}">
                      <a><span v-for="(tile,index) in mo" :key="tile" @click="discard(record,index)" style="font-size:2em">{{ tile }}</span></a>
                    </template>
                  </a-table-column>
                </a-table-column-group>
              </a-table>
            </a-col>
          </a-row>
        </a-col>
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
import { Calc, hai2Img, splitTiles, joinTiles, checkInput } from '../utils/mahjong';
import { message } from 'ant-design-vue';
export default {
  data () {
    return {
      handCards: '',
      Syanten: 0,
      calcRes: [],
      inputed: false
    };
  },
  methods: {
    showCards () {
      if (this.handCards.length <= 0 || !checkInput(this.handCards)) {
        message.error('無効入力');
        return;
      }
      // ==========================
      // API的返回值即为map
      const { syanten, kariyou } = Calc(this.handCards);
      this.Syanten = syanten;
      const imgs = [];
      kariyou.forEach((value, key) => {
        imgs.push({
          da: hai2Img(key)[0],
          daRaw: key,
          mo: value.map(hai2Img).map((arr) => arr[0]),
          moRaw: value
        });
      });
      this.calcRes = imgs;
      this.inputed = true;
    },
    discard (record, index) {
      const da = record.daRaw;
      const mo = record.moRaw[index];
      const modoTehai = splitTiles(this.handCards);
      modoTehai[da[1]] = modoTehai[da[1]].filter(item => item !== da[0]);
      modoTehai[mo[1]].push(mo[0]);
      this.handCards = joinTiles(modoTehai);
      this.showCards();
    }
  },
  computed: {
    handCardsImg () {
      return hai2Img(this.handCards);
    }
  }
};
</script>
