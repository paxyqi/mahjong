<template>
  <a-row
    type="flex"
    justify="center"
  >
    <a-col :span="24">
      <a-col :span="24">
        <a-row
          type="flex"
          justify="center"
        >
          <a-col :span="12">
            <a-form>
              <a-form-item label="Please input your hand cards:">
                <a-input-search
                  v-model:value="handCards"
                  placeholder="手牌"
                  size="large"
                  @change="inputed=false"
                  @search="showCards"
                >
                  <template #enterButton>
                    <a-tooltip>
                      <template #title>
                        - m=萬子, p=筒子, s=索子, z=字牌, 0=赤 -
                        一般形=４面子１雀頭 / 標準形=一般形＋七対形＋国士形 -
                        ツモはその時点で使用していない牌をランダムに選択します
                        - 有効牌をクリックすると打牌後にその牌をツモ牌として表示します
                        - (n*3+2)枚で開始：(n*3+2)枚目をツモ牌として表示 -
                        (n*3+1)枚で開始：ツモはページのロード時に毎回変化 -
                        和了役の判定はありません - 暗槓はできません
                      </template>
                      <a-button
                        type="link"
                        ghost
                      >
                        新規
                      </a-button>
                    </a-tooltip>
                  </template>
                </a-input-search>
              </a-form-item>
            </a-form>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="24">
        <a-row
          type="flex"
          justify="center"
        >
          <a-col :span="12">
            <a-table
              v-show="inputed"
              :data-source="calcRes"
              :row-key="(_, index) => index"
              bordered
              style="width: 100%"
              :pagination="{ pageSize: 50 }"
              :scroll="{ y: 240 }"
            >
              <template #title>
                <span>手牌：<span class="tiles">{{ handCardsImg.join("") }}</span>({{
                  Syanten === -1? '和了' :(Syanten === 0 ? "聴牌" : `${Syanten}向聴`)
                }})</span>
              </template>
              <a-table-column-group title="標準形(七対国士を含む)の計算結果:">
                <a-table-column
                  key="da"
                  data-index="da"
                  title="打"
                >
                  <template #default="{text:da}">
                    <span class="tiles">{{ da }}</span>
                  </template>
                </a-table-column>
                <a-table-column
                  key="mo"
                  :title="Syanten >0?'摸':'待ち'"
                  data-index="mo"
                >
                  <template #default="{text:mo,record}">
                    <a><span
                      v-for="(tile,index) in mo"
                      :key="tile"
                      class="tiles"
                      @click="discard(record,index)"
                    >{{ tile }}</span></a>（{{ record.nokori }}枚）
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
<script lang="ts">
import { Calc, checkInput, Color, hai2Img, joinTiles, splitTiles } from '../utils/mahjong';
import { message } from 'ant-design-vue';
import { computed, ComputedRef, ref, Ref } from 'vue';
type Records = {da:string, daRaw:string, mo:string[], moRaw:string[], nokori:number};
export default {
  setup ():Record<string, Ref|ComputedRef|CallableFunction> {
    const handCards = ref('');
    const Syanten = ref(0);
    const calcRes:Ref<Records[]> = ref([]);
    const inputed = ref(false);
    const showCards = () => {
      if (handCards.value.length <= 0 || !checkInput(handCards.value)) {
        message.error('無効入力');
        return;
      }
      // ==========================
      // API的返回值即为map
      const { syanten, kairyou } = Calc(handCards.value);
      Syanten.value = syanten;
      const imgs:Records[] = [];
      kairyou.forEach((value, key) => {
        imgs.push({
          da: hai2Img(key)[0],
          daRaw: key,
          mo: value.mo.map(hai2Img).map((arr) => arr[0]),
          moRaw: value.mo,
          nokori: value.rest
        });
      });
      calcRes.value = imgs;
      inputed.value = true;
    };
    const discard = (record:Records, index:number) => {
      // record中da为待切牌IMG，daRaw为‘2w’；mo为待摸牌IMG，moRAW为'4m','1p'... index表示是打的牌当中的第几个
      const da = record.daRaw;
      const mo = record.moRaw[index]; // 摸到的那张牌
      const modoTehai = splitTiles(handCards.value); // modo为对原始手牌数据进行模式化，变为2维数组
      modoTehai[da[1] as Color].splice(modoTehai[da[1] as Color].findIndex(item => item === da[0]), 1); // 删除打掉的牌
      modoTehai[mo[1] as Color].push(mo[0]); // push摸入的牌
      handCards.value = joinTiles(modoTehai); // 重新给handCards赋值，然后再次调用show
      showCards();
    };
    const handCardsImg = computed(() => {
      return hai2Img(handCards.value);
    });
    return {
      handCards,
      Syanten,
      calcRes,
      inputed,
      showCards,
      discard,
      handCardsImg
    };
  }
};
</script>
<style scoped>
.left {
  text-align: left;
}

#result {
  width: 60%;
  margin: auto;
}

@font-face {
  font-family: NotoSans;
  src: url(https://fonts.googleapis.com/css?family=Noto+Sans+SC);
}

.tiles {
  font-size:2em;
  font-family: NotoSans;
}
</style>
