<template>
  <h1>{{ msg }}</h1>
  <p>Please input your hand cards:</p>
  <input v-model="message" placeholder="edit me"/>
  <button @click="showHandCards">OK</button>
  <p>you handCards: {{ handCards }}</p>
</template>

<script>
export default {
  handCards: '',
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      message:"",
    }
  },
  methods:{
    inputOK(){
      alert(this.message)//24m1556p2459s4572z
    },
    showHandCards(){
      var regValue = /[a-z]/;
      let handCards = this.message.split(regValue);
      alert(handCards);
    }

  }
}
</script>

