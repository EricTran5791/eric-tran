<template>
  <div class="project-picker">
    <div class="project-picker__item-container">
      <div
        class="project-picker__item"
        v-bind:class="{ 'project-picker__item--selected': selectedProject.name === item.name }"
        v-for="(item, index) in items"
        :key="item.name"
        v-on:click="selectProject(item)">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ProjectPicker',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  computed: mapState({
    selectedProject: state => state.selectedProject
  }),
  methods: {
    selectProject: function (item) {
      this.$store.commit('selectProject', {
        project: item
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.project-picker {
  display: flex;
  justify-content: center;

  &__item-container {
    display: flex;
    box-shadow: $boxShadowButton;
  }

  &__item {
    cursor: pointer;
    user-select: none;
    display: flex;
    background-color: $colorSecondary;
    color: $colorWhite;
    padding: $margin/2 $margin;
    transition: background-color 0.33s ease;

    &:hover {
      background-color: lighten($colorSecondary, 3);
    }

    &--selected {
      background-color: $colorPrimary;

      &:hover {
        background-color: lighten($colorPrimary, 3);
      }
    }
  }
}
</style>
