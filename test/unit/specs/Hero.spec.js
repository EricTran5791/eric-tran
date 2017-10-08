import Vue from 'vue'
import Hero from '@/components/Hero'

describe('Hero.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hero)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
