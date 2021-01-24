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
                      <a-button> 新規 </a-button>
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
                v-if="inputed"
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
                <template #title="currentPageData"> 进张 </template>
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
  calculateSyanten,
  improve,
  discard,
  findCard,
  Scheme,
} from "../utils/mahjong";
import { message } from "ant-design-vue";
export default {
  data() {
    return {
      handCards: "",
      handCardsImg: "",
      Syanten: "",
      newSchemeImg: [],
      inputed: false,
      columns: [
        { title: "打", dataIndex: "i" },
        { title: "摸", dataIndex: "j" },
      ],
    };
  },
  methods: {
    showCards() {
      if (this.handCards.length <= 0) {
        message.error("手牌不能为空");
        return;
      }
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
    },
  },
};
</script>
