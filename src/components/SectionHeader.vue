<template>
  <div
    class="section-header"
    v-bind:class="{'section-header--light': lightText }">
    {{ text }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    text: {
      type: String,
      required: true,
      validator: value => !!value
    },
    lightText: {
      type: Boolean,
      required: false
    }
  }
})
export default class SectionHeader extends Vue { };
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
