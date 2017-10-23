<template>
  <div class="project-picker">
    <div class="project-picker__item-container">
      <div
        class="project-picker__item"
        v-bind:class="{ 'project-picker__item--selected': selectedProject.name === item.name }"
        v-bind:style="{ backgroundImage: `url(${item.imageUrl})` }"
        v-for="(item, index) in items"
        v-on:click="selectProject(item, index)"
        :key="item.name">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';
import { Project } from '../types';

@Component({
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  computed: mapGetters(['selectedProject']),
})
export default class ProjectPicker extends Vue {
  items: Project[];

  selectProject(project: Project, index: number) {
    this.$store.commit('selectProject', {
      project,
      index
    });
  }
}
</script>

<style lang="scss" scoped>
.project-picker {
  display: flex;
  justify-content: center;

  &__item-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: $margin;

    @media (max-width: $mediaPhone) {
        grid-template-columns: 1fr 1fr;
    }
  }

  &__item {
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    color: $colorWhite;
    background-color: $colorSecondary;
    background-size: cover;
    background-position: center center;
    height: 130px;
    width: 130px;

    &--selected {
      &:before {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        height: 4px;
        width: 100%;
        background-color: $colorPrimary;
        animation: expand-out 0.4s ease;
      }

      @keyframes expand-out {
        0% {
          transform: scaleX(0);
        }
        100% {
          transform: scaleX(1);
        }
      }
    }
  }
}
</style>
