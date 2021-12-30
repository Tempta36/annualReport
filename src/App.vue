<template>
  <div class="pageWrap">
    <button class="audioBtn" ref="toPlay" @click="audioBtnClick">toPaly</button>
    <home></home>
    <!-- <audio loop src="./views/assets/music.mp3" ref="audio" :muted="true" preload autoplay></audio> -->
    <audio loop src="path.to.mp3.resource" ref="audio" :muted="true" preload autoplay></audio>
  </div>
</template>
<script>
import Home from './views/home.vue'

export default {
  name: "App",
  data() {
    return {

    };
  },
  components: {
    Home
  },
  mounted() {
    this.$refs.audio.muted = true;
    this.$refs.toPlay.click();
    document.addEventListener('touchstart', this.touchStartCb);
  },
  methods: {
    audioBtnClick() {
      this.$refs.audio.muted = false;
      this.$refs.audio.play();
    },
    touchStartCb() {
      if (this.$refs.audio.pause == false) {
        document.removeEventListener('touchstart', this.touchStartCb);
        return;
      }
      this.$refs.toPlay.click();
      this.$refs.audio.muted = false;
      this.$refs.audio.play();
    }
  }
}
</script>
<style>
@import url('./views/assets/font/font.css');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app, body, input, button, div, span {
    font-family: 'annual-report-font',Helvetica, Arial, sans-serif;
}
.pageWrap {
  position: relative;
  height: 100%;
  background: #eee;
  font-size: 14px;
  color: #FFFFFF;
  margin: 0;
  padding: 0;
}
.audioBtn {
  position: absolute;
  z-index: -1;
}
</style>
