<template>
  <a
    class="button-link"
    v-bind:class="{'button-link--secondary': buttonClass === 'secondary'}"
    v-bind:href="link.url"
    target="_blank"
    rel="noopener noreferrer"
    >
    <i class="material-icons" v-if="iconClass">{{ iconClass }}</i>
    {{ link.text }}
  </a>
</template>

<script lang="ts">
import Vue from 'vue';
import { Link } from '../types';

export default Vue.extend({
  props: {
    link: {
      type: Object,
      required: true,
      validator: (value: Link) => !!value && !!value.url
    },
    buttonClass: {
      type: String,
      required: false
    },
    iconClass: {
      type: String,
      required: false
    }
  }
});
</script>

<style lang="scss" scoped>
.button-link {
  background-color: $colorPrimary;
  color: $colorWhite;
  display: inline-flex;
  text-decoration: none;
  padding: $margin/2 $margin;
  margin: $margin/2;
  border-radius: 4px;
  box-shadow: $boxShadowButton;
  transition: transform 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    background-color: lighten($colorPrimary, 3);
    transform: translateY(-2px);
    box-shadow: $boxShadowCard;
  }

  &--secondary {
    background-color: $colorSecondary;

    &:hover {
      background-color: lighten($colorSecondary, 3);
    }
  }

  .material-icons {
    margin-right: $margin/2;
  }
}
</style>
