<template>
  <div class="project-gallery">
    <project-picker v-bind:items="projects"/>
    <div class="project-gallery__project">
      <div class="project-gallery__project-name">{{ selectedProject.name }}</div>
      <div class="project-gallery__project-desc">{{ selectedProject.description }}</div>
      <img class="project-gallery__project-img" v-bind:src="selectedProject.imageUrl"/>
      <button-link
        class="project-gallery__project-link"
        v-bind:link="selectedProjectLink"
        iconClass="open_in_new"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapState } from 'vuex';
import ProjectPicker from './ProjectPicker.vue';
import ButtonLink from './ButtonLink.vue';
import { Link, Project } from '../types';

@Component({
  components: { ProjectPicker, ButtonLink },
  computed: mapState(['projects', 'selectedProject'])
})
export default class ProjectGallery extends Vue {
  selectedProject: Project;
  projects: Project[];

  created() {
    this.$store.commit('selectProject', {
      project: this.projects[0]
    });
  }

  get selectedProjectLink(): Link {
    return {
      text: 'Link',
      url: this.selectedProject.url
    };
  }
}
</script>

<style lang="scss" scoped>
.project-gallery {
  margin: $margin*2 0;

  &__project {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: $marginSection/2;
  }

  &__project-name {
    @include font-header(false);
    text-align: center;
    margin-bottom: $margin;
  }

  &__project-desc {
    width: $mediaPhone;
    max-width: 100%;
    margin-bottom: $margin;
  }

  &__project-img {
    background-size: cover;
    height: 100%;
    width: 600px;
    max-width: 100%;
    margin-bottom: $margin*2;
  }
}
</style>
