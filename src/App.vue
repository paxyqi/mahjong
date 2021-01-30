<template>
  <div class="layout">
    <a-layout>
      <a-layout-header style="padding: 0" class="header">
        <a-page-header
          style="background-color: #f5f5f5; width: 100%"
          title="麻雀牌理"
          sub-title="ようこそPixyちゃんの牌理ウェブサイト!"
        />
      </a-layout-header>
      <a-layout-content class="content">
        <a-row>
          <a-col :span="24">
            <a-row type="flex" justify="center">
              <a-col :span="24">
                <a href="https://github.com/paxyqi/mahjong">
                  <div class="imgBox">
                    <img
                      alt="Mahjong pic"
                      width="300"
                      height="400"
                      src="./assets/mahjong.png"
                      style="transform: scale(0.7)"
                    />
                  </div>
                </a>
              </a-col>
            </a-row>
            <a-row type="flex" justify="center">
              <a-col :span="24">
                <Home />
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </a-layout-content>
      <a-layout-footer style="text-align: center" class="footer">
        <a href="https://github.com/paxyqi" style="text-decoration: none;color:black"><strong>Pixy</strong></a> ©2021
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
.imgBox {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
<script lang='ts' setup>
import Home from './components/Home.vue';
export default {
  name: 'App',
  components: {
    Home
  }
};
</script>
