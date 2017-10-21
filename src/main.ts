import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import { State } from './types';

Vue.use(Vuex);

Vue.config.productionTip = false;

const initialState: State = {
  selectedProject: undefined
};

const store = new Vuex.Store({
  state: initialState,
  mutations: {
    selectProject(state: State, payload: any) {
      state.selectedProject = payload.project;
    }
  }
});

/* tslint:disable:no-unused-expression */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
});
