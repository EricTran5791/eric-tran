<template>
  <div
    class="section-header"
    v-bind:class="{'section-header--light': lightText }">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'SectionHeader',
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
};
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
