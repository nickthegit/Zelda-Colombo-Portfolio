<template>
  <main id="js-scroll">
    <slide-intro id="home" data-nav-section="home" />
    <slide-about-1 id="about" data-nav-section="about" />
    <slide-about-2 data-nav-section="about" />
    <slide-work id="work" data-nav-section="work" />
    <slide-case-study data-nav-section="work" />
    <slide-case-study data-nav-section="work" />
    <slide-case-study data-nav-section="work" />
    <slide-case-study data-nav-section="work" />
    <slide-more-work data-nav-section="work" />
    <slide-contact id="contact" data-nav-section="contact" />
  </main>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import locomotive from '~/mixins/locomotive.js'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'IndexPage',
  mixins: [locomotive],
  data() {
    return {
      navSectionActive: '',
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: this.navSectionActive,
      },
    }
  },
  mounted() {
    this.updateNavSections()

    this.$nextTick(() => {
      setTimeout(() => {
        this.pinSections()
      }, 300)
    })
  },
  methods: {
    updateNavSections() {
      const vm = this
      const navSections = this.$el.querySelectorAll('.section-slide')
      navSections.forEach((section) => {
        console.log('section', section.dataset.navSection)

        ScrollTrigger.create({
          trigger: section,
          start: 'left right',
          scrub: true,
          horizontal: true,
          invalidateOnRefresh: true,
          onToggle: (self) => {
            // console.log('toggled, isActive:', self.isActive)
            if (self.isActive) {
              vm.navSectionActive = section.dataset.navSection
            }
          },
          // onUpdate: (self) => {
          //   console.log(
          //     'progress:',
          //     self.progress.toFixed(3),
          //     'direction:',
          //     self.direction,
          //     'velocity',
          //     self.getVelocity()
          //   )
          // },
        })
      })
    },
    pinSections() {
      const elements = this.$el.querySelectorAll('.section-slide .pin')
      elements.forEach((element) => {
        const article = element.querySelector('article')

        // console.log('DAVE', this.$locoScroll)

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: () => 'left left',
            end: () => '+=100%',
            pin: true,
            // anticipatePin: 1,
            scrub: true,
            horizontal: true,
            invalidateOnRefresh: true,
            // markers: true,
            pinType: 'transform',
          },
        })
        tl.fromTo(
          article,
          {
            scale: 1,
            autoAlpha: 1,
          },
          {
            scale: 0.95,
            autoAlpha: 0.75,
            x: -500,
            duration: 5,
            delay: 0.5,
            ease: 'power2.in',
          },
          'start'
        )
      })
    },
  },
}
</script>
<style lang="scss" scoped>
main {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding-top: var(--headerHeight);
  @media only screen and (min-width: 300px) and (max-width: 1180px) {
    width: 100%;
    height: auto;
    flex-wrap: wrap;
    flex-direction: column;
    overflow-x: hidden;
  }
}
</style>
