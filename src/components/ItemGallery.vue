<template>
  <div class="item-gallery">
    <item-picker v-bind:items="projects"/>
  </div>
</template>

<script>
import ItemPicker from './ItemPicker';

export default {
  name: 'ItemGallery',
  components: { ItemPicker },
  data () {
    return {
      projects: [{
        name: 'The Improv Embassy',
        url: '#',
        description: 'Desc',
        imageUrl: '#'
      }, {
        name: 'Ottawa Improv Festival',
        url: '#',
        description: 'Desc 2',
        imageUrl: '#'
      }, {
        name: 'Length Weight Converter',
        url: '#',
        description: 'Desc 3',
        imageUrl: '#'
      }]
    };
  }
};
</script>

<style lang="scss" scoped>
.item-gallery {
  margin: $margin*2 0;
}
</style>
