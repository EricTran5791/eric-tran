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

<script>
import { mapState } from 'vuex';
import ProjectPicker from './ProjectPicker';
import ButtonLink from './ButtonLink';

export default {
  name: 'ProjectGallery',
  components: { ProjectPicker, ButtonLink },
  data () {
    return {
      projects: [{
        name: 'The Improv Embassy',
        url: 'http://www.improvembassy.com',
        description:
          `The Improv Embassy offers regular classes and shows for improv and sketch comedy.
          Highly customized and responsive components include a blogging platform, an events calendar, and an e-commerce shop.`,
        imageUrl: '/static/images/project-ie.png'
      }, {
        name: 'Ottawa Improv Festival',
        url: 'http://www.ottawaimprovfestival.com/',
        description:
          `The annual Ottawa Improv Festival features a variety of local and out-of-town acts.
          The website is a central hub for festival information, ticket sales, and workshop registrations.`,
        imageUrl: '/static/images/project-oif.png'
      }, {
        name: 'Length Weight Converter',
        url: 'https://play.google.com/store/apps/details?id=ca.erictran.lengthweightconverter',
        description:
          `This was my first Android app.
          The premise is simple: to convert length and weight measurements.
          Overall, it was a great learning experience and I still use the app every now and then.`,
        imageUrl: '/static/images/project-lwc.png'
      }]
    };
  },
  created: function () {
    this.$store.commit('selectProject', {
      project: this.projects[0]
    });
  },
  computed: mapState({
    selectedProject: state => state.selectedProject,
    selectedProjectLink: function () {
      return {
        text: 'Link',
        url: this.selectedProject.url
      };
    }
  })
};
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
