<template>
  <div
    class="section-header"
    v-bind:class="{'section-header--light': lightText }">
    {{ text }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
    text: {
      type: String,
      required: true,
      validator: (value: string) => !!value
    },
    lightText: {
      type: Boolean,
      required: false
    }
  }
});
</script>

<style lang="scss" scoped>
.section-header {
  @include font-header;
  color: $colorBlack;
  text-align: center;

  &--light {
    color: $colorWhite;
  }
}
</style>
