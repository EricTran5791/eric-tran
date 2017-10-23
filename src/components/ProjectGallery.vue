<template>
  <div class="project-gallery">
    <project-picker v-bind:items="projects"/>
    <div class="project-gallery__project">

      <div class="project-gallery__project-pane">
        <div class="project-gallery__project-name">{{ selectedProject.name }}</div>
        <div class="project-gallery__project-tag-container">
          <div
            class="project-gallery__project-tag"
            v-for="tag in selectedProject.tags"
            :key="tag">
            {{ tag }}
          </div>
        </div>
        <div class="project-gallery__project-desc">{{ selectedProject.description }}</div>
        <button-link
          v-bind:link="selectedProjectLink"
          iconClass="open_in_new"/>
      </div>

      <div class="project-gallery__project-pane project-gallery__project-pane--right">
        <img
          class="project-gallery__project-img"
          v-bind:src="selectedProject.imageUrl"
          v-bind:class="[transitionClass]"/>
      </div>
      
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import { mapState, mapGetters } from 'vuex';
import ProjectPicker from './ProjectPicker.vue';
import ButtonLink from './ButtonLink.vue';
import { Link, Project, TransitionClasses } from '../types';

@Component({
  components: { ProjectPicker, ButtonLink },
  computed: {
    ...mapState(['projects']),
    ...mapGetters(['selectedProject', 'selectedProjectIndex']),
  }
})
export default class ProjectGallery extends Vue {
  selectedProject: Project;
  projects: Project[];
  transitionClass: TransitionClasses = TransitionClasses.SlideIn;

  created() {
    this.$store.commit('selectProject', {
      project: this.projects[0],
      index: 0
    });
  }

  get selectedProjectLink(): Link {
    return {
      text: 'Link',
      url: this.selectedProject.url
    };
  }

  @Watch('selectedProjectIndex')
  setTransitionClass() {
    this.transitionClass = TransitionClasses.None;
    setTimeout(() => {
      this.transitionClass = TransitionClasses.SlideIn;
    });
  }
}
</script>

<style lang="scss" scoped>
.project-gallery {
  margin: $margin*2 0;

  &__project {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: $margin;
    justify-items: center;
    margin-top: $marginSection/2;

    @media (max-width: $mediaPhone) {
      grid-template-columns: 1fr;
      grid-gap: $margin*2;
    }
  }

  &__project-pane {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;

    &--right {
      justify-content: center;
    }
  }

  &__project-name {
    @include font-header(false);
    text-align: center;
    margin-bottom: $margin;
  }

  &__project-tag-container {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: $margin*2;

    @media (max-width: $mediaPhone) {
        margin-bottom: $margin;
    }
  }

  &__project-tag {
    color: $colorWhite;
    background-color: $colorSecondary;
    border-radius: 24px;
    padding: $margin/2 $margin;
    margin: $margin/2;
  }

  &__project-desc {
    max-width: 600px;
    margin-bottom: $margin*2;

    @media (max-width: $mediaPhone) {
        margin-bottom: $margin;
    }
  }

  &__project-img {
    background-size: cover;
    height: auto;
    width: 100%;

    &.slide-in {
      animation: slide-in 0.4s ease;
    }

    @keyframes slide-in {
      0% {
        transform: translateX(6%);
      }
      100% {
        transform: translateX(0);
      }
    }
  }
}
</style>
