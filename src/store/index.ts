import Vue from 'vue';
import Vuex from 'vuex';
import { State, initialState, SelectedProject } from './types';
import { OpenSourceContribution, Link } from '../types';
import * as R from 'rambda';

Vue.use(Vuex);

export const store = new Vuex.Store<State>({
  state: initialState,
  getters: {
    selectedProject: (state: State) => {
      return state.selectedProject ? state.selectedProject.project : undefined;
    },
    selectedProjectIndex: (state: State) => {
      return state.selectedProject ? state.selectedProject.index : 0;
    },
    selectedProjectLinks: (state: State): Link[] => {
      const links: Link[] =
        R.path(['selectedProject', 'project', 'links'], state) || [];

      return links.map(link => {
        const text =
          link.text ||
          (link.url.search('github.com') > -1 ? 'GitHub Source' : 'Link');
        return {
          ...link,
          text,
        };
      });
    },
    selectedProjectCurrentImageIndex: (state: State): number => {
      const index: number = R.path(
        ['selectedProject', 'currentImageIndex'],
        state
      );
      return index;
    },
    openSourceContributions: (state: State) => {
      return state.openSourceContributions
        .sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime(); // Sort by descending order
        })
        .slice(0, 5);
    },
    githubLink: (state: State) => {
      return state.socialLinks
        .filter(link => link.text === 'GitHub')
        .map(link => link.url);
    },
  },
  mutations: {
    selectProject(state: State, payload: SelectedProject) {
      state.selectedProject = {
        project: payload.project,
        index: payload.index,
        currentImageIndex: 0,
      };
    },
    addOpenSourceContributions(
      state: State,
      payload: OpenSourceContribution[]
    ) {
      state.openSourceContributions = state.openSourceContributions.concat(
        payload
      );
    },
    cycleProjectGalleryImage(state: State) {
      const selectedProject = state.selectedProject;

      const upperIndexBound = selectedProject.project.images.length - 1;
      const newIndex: number =
        selectedProject.currentImageIndex === upperIndexBound
          ? 0
          : selectedProject.currentImageIndex + 1;

      selectedProject.currentImageIndex = newIndex;
    },
    setCurrentGalleryImage(state: State, payload: number) {
      state.selectedProject.currentImageIndex = payload;
    },
  },
});
