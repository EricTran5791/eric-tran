<template>
  <div id="app">
    <hero-section/>
    <projects-section/>
    <open-source-section/>
  </div>
</template>

<script>
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import OpenSourceSection from './components/OpenSourceSection';

export default {
  name: 'app',
  components: { HeroSection, ProjectsSection, OpenSourceSection }
};
</script>

<style lang="scss">
#app {
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400|Heebo:700|Material+Icons');
  @include font-body;
}

body {
  background-color: $colorWhite;
  margin: 0;
}
</style>
