<template>
  <div class="hero">
    <div class="hero__card">
      <div class="hero__img" v-bind:style="{ backgroundImage: `url(${imageUrl})` }"></div>
      <div class="hero__title">{{ title }}</div>
      <div class="hero__text">{{ text }}</div>
      <div class="hero__button-container">
        <button-link
          v-for="link in socialLinks"
          v-bind:link="link"
          buttonClass="black"
          :key="link.text"/>
      </div>
      <div class="hero__email">
        <i class="material-icons">email</i>
        {{ email }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ButtonLink from './ButtonLink.vue';
import { mapState } from 'vuex';

export default Vue.extend({
  components: { ButtonLink },
  data() {
    return {
      imageUrl: 'static/images/eric-tran-headshot.jpg',
      title: 'Eric Tran',
      text: `
        I'm a front end web developer at Kinaxis.
        I enjoy building web applications with a focus on intuitive user experiences.
        `,
      email: 'me [at] erictran.ca'
    }
  },
  computed: mapState(['socialLinks'])  
});
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $colorWhite;
  background: linear-gradient($colorPrimary, darken($colorPrimary, 10));
  padding: $marginSection 0;
  overflow: hidden;

  @media (max-width: $mediaDesktop) {
    padding: $marginSection*1.5 0;
  }

  @media (max-width: $mediaPhone) {
    padding: 0;
  }

  &__card {
    @include card($colorWhite);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 772px;
    box-sizing: border-box;
    max-width: 100%;
    animation: slide-up $speedSlow;

    @media (max-width: $mediaPhone) {
      border-radius: 0;
      background: none;
      box-shadow: none;
    }

    @keyframes slide-up {
      0% {
        transform: translateY(50%);
      }
      100% {
        transform: translateY(0);
      }
    }
  }

  &__img {
    background-position: center 10%;
    background-size: cover;
    height: 150px;
    width: 150px;
    border-radius: 100%;
    margin-bottom: $margin;
  }

  &__title {
    color: $colorBlack;
    @include font-header;
    text-align: center;
    @media (max-width: $mediaPhone) {
      color: $colorWhite;
    }
  }

  &__text {
    color: $colorBlack;
    @include font-body;
    text-align: center;
    margin-bottom: $margin;
    @media (max-width: $mediaPhone) {
      color: $colorWhite;
    }
  }

  &__button-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: $margin;
  }

  &__email {
    display: inline-flex;
    align-items: center;
    color: $colorBlack;
    @include font-body;

    @media (max-width: $mediaPhone) {
      color: $colorWhite;
    }

    i {
      margin-right: $margin/2;
    }
  }
}
</style>
