import Vue from 'vue';
import Hero from '@/components/HeroSection';

describe('HeroSection.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hero);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.hero__title').textContent)
      .to.equal('Eric Tran');
  });
});
