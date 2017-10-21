<template>
  <div class="hero">
    <div class="hero__card">
      <div class="hero__img" v-bind:style="{ backgroundImage: `url(${imageUrl})` }"></div>
      <div class="hero__title">{{ title }}</div>
      <div class="hero__text">{{ text }}</div>
      <div class="hero__button-container">
        <button-link
          v-for="link in links"
          v-bind:link="link"
          buttonClass="secondary"
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
import Component from 'vue-class-component';
import ButtonLink from './ButtonLink.vue';
import { Link } from '../types';

@Component({
  components: { ButtonLink }
})
export default class HeroSection extends Vue {
  imageUrl = 'static/images/eric-tran-headshot.jpg';
  title = 'Eric Tran';
  text = `
    I'm a front end web developer at Kinaxis.
    I enjoy building web applications with a focus on intuitive user experiences.
    `;
  links: Link[] = [{
    text: 'Twitter',
    url: 'https://twitter.com/EricTran5791'
  }, {
    text: 'GitHub',
    url: 'https://github.com/EricTran5791'
  }, {
    text: 'LinkedIn',
    url: 'https://www.linkedin.com/in/erictran5791'
  }];
  email = 'me [at] erictran.ca';
}
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
  background-color: $colorWhite;
  background: linear-gradient($colorWhite, darken($colorWhite, 10));

  @media (max-width: $mediaPhone) {
    justify-content: flex-start;
  }

  &__card {
    @include card($colorPrimary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 660px;
    box-sizing: border-box;
    max-width: 100%;
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
    color: $colorWhite;
    @include font-header;
    text-align: center;
  }

  &__text {
    color: $colorWhite;
    @include font-body;
    text-align: center;
    margin-bottom: $margin;
  }

  &__button-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: $margin;
  }

  &__email {
    display: inline-flex;
    color: $colorWhite;
    @include font-body;

    i {
      margin-right: $margin/2;
    }
  }
}
</style>
