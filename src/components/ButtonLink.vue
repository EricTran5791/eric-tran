<template>
  <a
    class="button-link"
    v-bind:href="link.url"
    target="_blank"
    rel="noopener noreferrer"
    >
    {{ link.text }}
  </a>
</template>

<script>
export default {
  name: 'ButtonLink',
  props: {
    link: {
      type: Object,
      required: true,
      validator: function (value) {
        return !!value && !!value.text && !!value.url;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.button-link {
  background-color: $colorSecondary;
  color: $colorLightBackground;
  display: flex;
  text-decoration: none;
  padding: $margin/2 $margin;
  margin: 0 $margin/2;
  border-radius: 4px;
  box-shadow: $boxShadowButton;
  transition: transform 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    background-color: lighten($colorSecondary, 3);
    transform: translateY(-2px);
    box-shadow: $boxShadowCard;
  }
}
</style>
