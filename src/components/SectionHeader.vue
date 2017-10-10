<template>
  <div class="section-header">
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
    }
  }
};
</script>

<style lang="scss" scoped>
.section-header {
  @include font-header;
  color: $colorBlack;
  text-align: center;
}
</style>
