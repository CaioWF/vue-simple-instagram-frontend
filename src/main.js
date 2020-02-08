import io from 'socket.io-client';
import Vue from 'vue';
import VueSocketIO from 'vue-socket.io';
import App from './App.vue';
import './assets/css/index.styl';
import router from './router';
import store from './store';

Vue.use(new VueSocketIO({
  debug: true,
  connection: io('http://localhost:3333'),
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_',
  },
}));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
