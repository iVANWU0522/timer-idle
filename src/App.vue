<template>
  <div id="app" class="max-w-2xl mx-auto py-16">
    <p>Is it Idle? - <span class="font-bold">{{ isIdle }}</span></p>
    <ModalIdle v-if="isIdle" />
  </div>
</template>

<script>
import ModalIdle from './components/ModalIdle.vue';

export default {
  name: 'App',
  components: {
    ModalIdle,
  },
  computed: {
    isIdle() {
      return this.$store.state.idleVue.isIdle;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
