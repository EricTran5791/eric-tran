<template>
  <div class="projects-section">
    <section-header text="Projects"/>
    <project-gallery/>
  </div>
</template>

<script>
import SectionHeader from './SectionHeader';
import ProjectGallery from './ProjectGallery';

export default {
  name: 'ProjectsSection',
  components: { SectionHeader, ProjectGallery }
};
</script>

<style lang="scss" scoped>
.projects-section {
  background-color: $colorWhite;
  padding: $marginSection $margin*2;

  @media (max-width: $mediaPhone) {
    padding: $marginSection/2 $margin;
  }
}
</style>
