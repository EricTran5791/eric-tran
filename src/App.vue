<template>
  <div id="app">
    <hero/>
  </div>
</template>

<script>
import Hero from './components/Hero';

export default {
  name: 'app',
  components: {
    Hero,
  },
};
</script>

<style lang="scss">
#app {
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400');
  @import url('https://fonts.googleapis.com/css?family=Heebo:700');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @include font-body;
}

body {
  background-color: $colorLightBackground;
  margin: 0;
}
</style>
