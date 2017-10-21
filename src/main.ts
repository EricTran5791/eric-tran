import Vue from 'vue';
import App from './App.vue';
import { store } from './store/index';

Vue.config.productionTip = false;

/* tslint:disable:no-unused-expression */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
});
