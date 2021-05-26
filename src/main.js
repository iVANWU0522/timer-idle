import Vue from 'vue';
import IdleVue from 'idle-vue';
import App from './App.vue';
import store from './store';
import './assets/css/index.css';

Vue.config.productionTip = false;
const eventsHub = new Vue();

Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  store,
  idleTime: 3000,
  startAtIdle: false,
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
