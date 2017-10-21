import Vue from 'vue';
import Vuex from 'vuex';
import { State, initialState } from './types';

Vue.use(Vuex);

export const store = new Vuex.Store<State>({
    state: initialState,
    mutations: {
      selectProject(state: State, payload: any) {
        state.selectedProject = payload.project;
      }
    }
  });
