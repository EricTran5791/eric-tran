import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';

Vue.use(Vuex);

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    selectedProject: {}
  },
  mutations: {
    selectProject (state: any, payload: any) {
      state.selectedProject = payload.project;
    }
  }
});

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
});
