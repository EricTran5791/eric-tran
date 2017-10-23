import Vue from 'vue';
import Vuex from 'vuex';
import { State, initialState, SelectedProject } from './types';

Vue.use(Vuex);

export const store = new Vuex.Store<State>({
    state: initialState,
    getters: {
      selectedProject: (state: State) => {
        return state.selectedProject ? state.selectedProject.project : undefined;
      },
      selectedProjectIndex: (state: State) => {
        return state.selectedProject ? state.selectedProject.index : 0;
      }
    },
    mutations: {
      selectProject(state: State, payload: SelectedProject) {
        state.selectedProject = {
          project: payload.project || undefined,
          index: payload.index || 0
        };
      }
    }
  });
