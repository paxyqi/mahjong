<template>
  <h1>{{ msg }}</h1>
  <p>Please input your hand cards:</p>
  <input v-model="handCards" placeholder="手牌"/>
  <button @click="showCards">新規</button>
  <p>手牌: {{ handCardsImg }}</p>
  <p>当前向听数:{{ Syanten }}</p>
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
        handCardsImg:'',
        Syanten:''
    }
  },
  methods:{
    showCards(){
      const tails = this.splitTiles(this.handCards);
      this.handCardsImg = this.showHandCards(tails);
      const arr = this.transArr(tails);
      console.log(arr);
      this.Syanten = this.calculateSyanten(arr);
      this.improve(arr);
    },
    splitTiles(handCard){
      const result={
        p:[],
        m:[],
        s:[],
        z:[]
      }
      console.log(this.handCards);
      let rest = handCard;
      while(rest.length>0){
        const colored= rest.match(/[0-9]*[spzm]/);
        const matchStr=colored[0];
        result[matchStr[matchStr.length-1]]=matchStr.substr(0,matchStr.length-1).split('');
        rest=rest.substr(0,colored.index)+rest.substr(colored.index+matchStr.length);
      }
      console.log(result);
      return result;
    },
    showHandCards(tails){
      this.handCardsImg = '';
      var i;
      let newTailsM = tails.m.map(num =>{
        if(num == '0')
          return '5';
        else
          return num;
      })
      let newTailsP = tails.p.map(num =>{
        if(num == '0')
          return '5';
        else
          return num;
      })
      let newTailsS = tails.s.map(num =>{
        if(num == '0')
          return '5';
        else
          return num;
      })
      let newTailsZ = tails.z.map(num =>{
        if(num == '0')
          return '5';
        else
          return num;
      })
      console.log(newTailsM.sort());
      for(i=0; i<tails.m.length;i++){
        this.handCardsImg+=tiles.m[(newTailsM.sort())[i]-1];
      }
      for(i=0; i<tails.p.length;i++){
        this.handCardsImg+=tiles.p[(newTailsP.sort())[i]-1];
      }
      for(i=0; i<tails.s.length;i++){
        this.handCardsImg+=tiles.s[(newTailsS.sort())[i]-1];
      }
      for(i=0; i<tails.z.length;i++){
        this.handCardsImg+=tiles.z[(newTailsZ.sort())[i]-1];
      }
      return this.handCardsImg;
    },
    transArr(CardString){//将m=['0','5']转变为[1,0,0,0,0,1,0,0,0]
      let arr_m = new Array(9).fill(0);
      let arr_p = new Array(9).fill(0);
      let arr_s = new Array(9).fill(0);
      let arr_z = new Array(7).fill(0);
      for(let i=0; i<CardString.m.length ;i++){
        var temp = parseInt((CardString.m)[i]);
        arr_m[--temp]++;
      }
      for(let i=0; i<CardString.p.length ;i++){
        var temp = parseInt((CardString.p)[i]);
        arr_p[--temp]++;
      }
      for(let i=0; i<CardString.s.length ;i++){
        var temp = parseInt((CardString.s)[i]);
        arr_s[--temp]++;
      }
      for(let i=0; i<CardString.z.length ;i++){
        var temp = parseInt((CardString.z)[i]);
        arr_z[--temp]++;
      }
      let arr = [[...arr_m],[...arr_p],[...arr_s],[...arr_z]];
      return arr;
    },
    sum(arr){//当前花型有几张牌
      let s = 0
      for(let i=0; i<arr.length;i++){
        s+=arr[i]
      }
      return s
    },
    calculateSyanten(t){ //24m1556p2459s4572z syanten = 8-2*mentsu-tatsu
      let res = 9;
      var mentsu,tatsu,alone,furo;//面子，搭子,单张，副露
      mentsu = tatsu = alone = furo = 0;
      const search = (arr, is_jihai = false)=>{
          let tmp1 = [0,0,0];
          let tmp2 = [0,0,0];
          {//先算面子，再算顺子
            let arr1 = [...arr];
            let tmp_mentsu = 0;
            let tmp_tatsu = 0;
            let tmp_alone = 0;
            for(let i=0; i<9; i++){
              if(arr1[i] === 0 || arr1[i] === undefined){
                continue;
              }
              if(arr1[i] >= 3){//三个一万
                arr[i] -= 3, tmp_mentsu++
              }
              if(arr1[i] > 0){//考虑有1个顺子，或两个顺子
                if(is_jihai) continue//字牌没有顺子
                if(arr1[i + 1] > 0 && arr1[i + 2] > 0){//顺子
                  arr1[i]--, arr1[i + 1]--, arr1[i + 2]--, tmp_mentsu++
                }
                if (arr1[i] > 0 && arr1[i + 1] > 0 && arr1[i + 2] > 0) {
                  arr1[i]--, arr1[i + 1]--, arr1[i + 2]--, tmp_mentsu++
                }
              }
            }
            for(let i = 0; i < 9; i++){
              if(arr1[i] === 0 || arr1[i === undefined]){
                continue
              }else if(arr[i] === 2){
                arr1[i]-=2,tmp_tatsu++//两个一万 搭子
                continue
              }else{
                if (is_jihai) continue
                if(arr1[i + 1] > 0){//12
                  arr1[i]--,arr1[i + 1]--,tmp_tatsu++
                }
                if(arr1[i + 2] > 0){//13
                  arr1[i]--,arr1[i + 2]--,tmp_tatsu++
                }
              }
            }
            tmp_alone += this.sum(arr1)//剩余的为单张
            tmp1 = [tmp_mentsu, tmp_tatsu, tmp_alone]
          }{//先算顺子，再算面子
            let arr2 = [...arr]
            let tmp_mentsu = 0
            let tmp_tatsu = 0
            let tmp_alone = 0
            for(let i=0; i<9; i++){
              if(arr2[i] === 0 || arr2[i] === undefined)
                continue
              if(!is_jihai){//非字牌有顺子，考虑有2个顺子或者4个顺子
                if (arr2[i] >= 2 && arr2[i + 1] >= 2 && arr2[i + 2] >= 2)
                  arr2[i] -= 2, arr2[i + 1] -= 2, arr2[i + 2] -= 2, tmp_mentsu += 2
                if (arr2[i] >= 2 && arr2[i + 1] >= 2 && arr2[i + 2] >= 2)
                  arr2[i] -= 2, arr2[i + 1] -= 2, arr2[i + 2] -= 2, tmp_mentsu += 2
              }
              if(arr2[i] === 3 || arr2[i] === 4)
                arr2[i]-=3, tmp_mentsu++;
              if(arr2[i] === 2)
                arr2[i]-=2, tmp_tatsu++;
              if(is_jihai)
                continue
              if (arr2[i] > 0 && arr2[i + 1] > 0 && arr2[i + 2] > 0) //3个顺子或1个顺子
                arr2[i]--, arr2[i + 1]--, arr2[i + 2]--, tmp_mentsu++
              if (arr2[i] > 0 && arr2[i + 1] > 0)
                arr2[i]--, arr2[i + 1]--, tmp_tatsu++
              if (arr2[i] > 0 && arr2[i + 2] > 0)
                arr2[i]--, arr2[i + 2]--, tmp_tatsu++
            }
            tmp_alone += this.sum(arr2)
            tmp2 = [tmp_mentsu, tmp_tatsu, tmp_alone]
          }
          let tmp = tmp1 >= tmp2? tmp1: tmp2
          mentsu += tmp[0], tatsu += tmp[1], alone += tmp[2]
          return true
      }
      const calc = () =>{
         let tmp_res = -1
         while(mentsu < 4 - furo){//此处副露为已经成面子的面子数
          if(tatsu && alone){//有搭子有单牌，则打掉单牌进章，搭子数和单牌--，面子++，逆向听++
            tatsu--, alone--, mentsu++, tmp_res++
            continue
          }
          if(tatsu && !alone){//12 56==> 1 456 此时变为单牌++，搭子--，面子++
            tatsu--, alone++, mentsu++, tmp_res++
            continue
          }
          if(!tatsu && alone){
            alone-=2, mentsu++, tmp_res+=2
          }
         }
         if(alone > 0) tmp_res++
         res = tmp_res < res ? tmp_res : res
         mentsu = tatsu = alone = 0
      }
        
      search(t[0]) && search(t[1]) && search(t[2]) && search(t[3], true) && calc()
      
      return res
    },
    //从14张牌中任选一张，再摸如一张能够改良向听的牌。当前牌面为arr，因此只需对arr进行操作后，再次将新arr进行计算，若改良成功则保留
    improve(arr){
      for(let i=0; i<4; i++){
        for(let j=0; j<arr[i].length; j++){
          if(arr[i][j] > 0){
            debugger
            let change = this.exchange(arr,i,j);
          } 
        }
      }
    },
    //打掉arr[i][j]的牌，用其他牌替换---共有33种替换的可能？剪枝？挨个试吧？
    exchange(arr,i,j){
      let preSyanten = this.calculateSyanten(arr);
      arr[i][j]--;
      let tmpi = 0,tmpj = 0;
      let res = new Array;
      for(let p = 0; p < 4; p++){
        for(let q = 0; q < arr[p].length; q++){
          arr[p][q]++;
          let currSyanten = this.calculateSyanten(arr);
          if(currSyanten < preSyanten){
            let couple = {i : p, j : q};//有改良即可
            res.push(couple);
          }
          arr[p][q]--;
        }
      }
      return res;
    }
    

  }
}
</script>

