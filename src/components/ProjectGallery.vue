<template>
  <div class="project-gallery">
    <project-picker v-bind:items="projects"/>
    <div class="project-gallery__project">

      <div
        class="project-gallery__project-pane"
        ref="projectPaneFirst">
        <div
          class="project-gallery__project-name"
          v-bind:class="[transitionClass]">
          {{ selectedProject.name }}
        </div>
        <div class="project-gallery__project-tag-container">
          <div
            class="project-gallery__project-tag"
            v-for="tag in selectedProject.tags"
            :key="tag">
            {{ tag }}
          </div>
        </div>
        <div class="project-gallery__project-desc" v-bind:class="[transitionClass]">{{ selectedProject.description }}</div>
        <button-link
          v-if="selectedProjectLinks.length > 0"
          v-for="link in selectedProjectLinks"
          :key="link.url"
          v-bind:link="link"
          buttonClass="black"
          iconClass="open_in_new"/>
      </div>

      <div class="project-gallery__project-pane project-gallery__project-pane--second">
        <img
          class="project-gallery__project-img"
          v-bind:class="[{ 'project-gallery__project-img--multi-image': selectedProject.images.length > 1 }, transitionClass]"
          v-bind:src="selectedProject.images[selectedProjectCurrentImageIndex]"
          v-on:click="cycleProjectGalleryImage()"/>
          <div class="project-gallery__project-img-dot-container" v-if="selectedProject.images.length > 1">
            <div
              v-for="(image, index) in selectedProject.images"
              :key="image"
              class="project-gallery__project-img-dot"
              v-bind:class="{ 'project-gallery__project-img-dot--selected': selectedProjectCurrentImageIndex === index }"
              v-on:click="setCurrentGalleryImage(index)"></div>
          </div>
      </div>
      
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from 'vue';
import { mapState, mapGetters } from 'vuex';
import ProjectPicker from './ProjectPicker.vue';
import ButtonLink from './ButtonLink.vue';
import { Project, TransitionClasses } from '../types';

class ProjectGallery extends Vue {
  selectedProject: Project;
  projects: Project[];
  transitionClass: TransitionClasses = TransitionClasses.SlideIn;
  unsubscribe: () => void;
}

export default {
  components: { ProjectPicker, ButtonLink },
  data() {
    return {
      transitionClass: '',
    };
  },
  mounted(this: ProjectGallery) {
    this.unsubscribe = this.$store.subscribe(mutation => {
      // Scroll to the project pane after selecting a project on phone resolutions
      if (mutation.type === 'selectProject' && window.innerWidth <= 767) {
        const projectPane = this.$refs.projectPaneFirst as Element;
        projectPane.scrollIntoView({ behavior: 'smooth', block: 'start' }); // TODO: Use polyfill for scrollIntoView
      }
    });
  },
  destroyed(this: ProjectGallery) {
    this.unsubscribe();
  },
  computed: {
    ...mapState(['projects']),
    ...mapGetters([
      'selectedProject',
      'selectedProjectIndex',
      'selectedProjectLinks',
      'selectedProjectCurrentImageIndex',
    ]),
  },
  watch: {
    selectedProjectIndex(this: ProjectGallery) {
      this.transitionClass = TransitionClasses.None;
      window.requestAnimationFrame(() => {
        this.transitionClass = TransitionClasses.SlideIn;
      });
    },
  },
  methods: {
    cycleProjectGalleryImage() {
      this.$store.commit('cycleProjectGalleryImage');
    },
    setCurrentGalleryImage(index) {
      this.$store.commit('setCurrentGalleryImage', index);
    },
  },
} as ComponentOptions<ProjectGallery>;
</script>

<style lang="scss" scoped>
.project-gallery {
  margin: $margin * 2 0;

  &__project {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: $margin;
    justify-items: center;
    margin-top: $marginSection;

    @media (max-width: $mediaPhone) {
      grid-template-columns: 1fr;
      grid-gap: $margin * 2;
      margin-top: $marginSection/2;
    }
  }

  &__project-pane {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;

    &--second {
      justify-content: center;
    }
  }

  &__project-name {
    @include font-header(false);
    text-align: center;
    margin-bottom: $margin;

    &.slide-in {
      animation: slide-in $speedNormal;
    }
  }

  &__project-tag-container {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: $margin * 2;

    @media (max-width: $mediaPhone) {
      margin-bottom: $margin;
    }
  }

  &__project-tag {
    color: $colorWhite;
    background-color: $colorPrimary;
    border-radius: 24px;
    padding: $margin/2 $margin;
    margin: $margin/2;
  }

  &__project-desc {
    max-width: 600px;
    margin-bottom: $margin * 2;

    &.slide-in {
      animation: slide-in $speedSlow;
    }

    @media (max-width: $mediaPhone) {
      margin-bottom: $margin;
    }
  }

  &__project-img {
    background-size: cover;
    height: auto;
    width: 100%;

    &.slide-in {
      animation: image-slide-in $speedSlow;
    }

    &--multi-image {
      cursor: pointer;
    }
  }

  &__project-img-dot-container {
    display: flex;
    margin-top: $margin;
  }

  &__project-img-dot {
    cursor: pointer;
    display: flex;
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    margin: 0 4px;
    border-radius: 100%;
    background-color: $colorPrimary;
    opacity: 0.4;

    &--selected {
      opacity: 1;
      animation: fade-in $speedFast;
    }
  }

  @keyframes slide-in {
    0% {
      transform: translateX(-24%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes image-slide-in {
    0% {
      opacity: 0.6;
      transform: scale(0.95) translateX(24%);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateX(0);
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
