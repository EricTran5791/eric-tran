<template>
  <div class="item-picker">
    <div class="item-picker__item-container">
      <div
        class="item-picker__item"
        v-bind:class="{ 'item-picker__item--selected': selectedItem === index }"
        v-for="(item, index) in items"
        :key="item.name"
        v-on:click="select(index)">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemPicker',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      selectedItem: 0
    };
  },
  methods: {
    select: function (index) {
      this.selectedItem = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.item-picker {
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
