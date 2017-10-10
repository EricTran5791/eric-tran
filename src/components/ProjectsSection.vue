<template>
  <div class="projects-section">
    <section-header text="Projects"/>
    <item-gallery/>
  </div>
</template>

<script>
import SectionHeader from './SectionHeader';
import ItemGallery from './ItemGallery';

export default {
  name: 'ProjectsSection',
  components: { SectionHeader, ItemGallery }
};
</script>

<style lang="scss" scoped>
.projects-section {
  background-color: $colorWhite;
  min-height: 80vh;
  padding: $marginSection $margin*2;
}
</style>
