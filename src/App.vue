<template>
  <div class="layout">
    <a-layout>
      <a-layout-header style="padding: 0" class="header">
        <a-page-header
          style="background-color: #f5f5f5; width: 100%"
          title="Mahjong helper"
          sub-title="Welcome to Pixy Mahjong website"
        />
      </a-layout-header>
      <a-layout-content class="content">
        <img
          alt="Vue logo"
          src="./assets/majhong.png"
          style="transform: scale(0.7)"
        />
        <Home />
      </a-layout-content>
      <a-layout-footer style="text-align: center" class="footer">
        Pixy ©2021
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<style scoped>
.logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
html {
  height: 100%;
}
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.header {
  flex: 0 0 auto;
}
.content {
  flex: 1 0 auto;
}
.foot {
  flex: 0 0 auto;
}
</style>
<script>
import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    Home
  }
};
</script>
