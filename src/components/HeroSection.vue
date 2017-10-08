<template>
  <div class="hero">
    <div class="hero__card">
      <div class="hero__img"></div>
      <div class="hero__title">{{ title }}</div>
      <div class="hero__text">{{ text }}</div>
      <div class="hero__button-container">
        <button-link
          v-for="link in links"
          v-bind:link="link"
          v-bind:key="link.text"/>
      </div>
      <div class="hero__email">
        <i class="material-icons">email</i>
        me [at] erictran.ca
      </div>
    </div>
  </div>
</template>

<script>
import ButtonLink from './ButtonLink';

export default {
  name: 'HeroSection',
  components: { ButtonLink },
  data () {
    return {
      title: 'Eric Tran',
      text: `
      I'm a front end web developer at Kinaxis.
      I enjoy building web applications with a focus on intuitive user experiences.
      `,
      links: [ {
        text: 'Twitter',
        url: 'https://twitter.com/EricTran5791'
      }, {
        text: 'GitHub',
        url: 'https://github.com/EricTran5791'
      }, {
        text: 'LinkedIn',
        url: 'https://www.linkedin.com/in/erictran5791'
      }]
    };
  }
};
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: $colorLightBackground;
  background: linear-gradient($colorLightBackground, darken($colorLightBackground, 10));

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
    background-image: url('../assets/images/eric-tran-headshot.jpg');
    background-position: center 10%;
    background-size: cover;
    height: 150px;
    width: 150px;
    border-radius: 100%;
    margin-bottom: $margin;
  }

  &__title {
    color: $colorLightBackground;
    @include font-header;
  }

  &__text {
    color: $colorLightBackground;
    @include font-body;
    text-align: center;
    margin-bottom: $margin;
  }

  &__button-container {
    display: flex;
    margin-bottom: $margin;
  }

  &__email {
    display: inline-flex;
    color: $colorLightBackground;
    @include font-body;

    i {
      margin-right: $margin/2;
    }
  }
}
</style>
