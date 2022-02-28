<template>
  <main>
    <div class="scroll-wrapper"></div>
    <div class="section-wrapper">
      <slide-intro id="sectionIntro" />
      <slide-about-1 id="sectionAbout1" ref="about1" class="slide" />
      <slide-about-2 id="sectionAbout2" ref="about2" class="slide" />
      <slide-work id="sectionWork" ref="work" class="slide" />
      <!-- <section id="sectionAbout1">My</section>
      <section id="sectionAbout2">Name</section>
      <section id="sectionWork">Is</section>
      <section class="sectionCaseStudy">
        Is <nuxt-link to="/more-stuff">Some more stuff</nuxt-link>
      </section>
      <section class="sectionCaseStudy">My</section>
      <section id="sectionMoreWork">Friend</section> -->
    </div>
  </main>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import scrollPin from '~/mixins/scrollPinMixin.js'
import SlideAbout1 from '~/components/SlideAbout1.vue'
import SlideWork from '~/components/SlideWork.vue'

gsap.registerPlugin(ScrollTrigger)

export default {
  components: { SlideAbout1, SlideWork },
  name: 'IndexPage',
  mixins: [scrollPin],
  data() {
    return {
      navSectionActive: '',
      isScrolling: false,
      caseStudies: [
        {
          name: 'renew-lab-store',
          title: 'Renew Lab Store',
          client: 'Converse',
          featureImg:
            'https://res.cloudinary.com/jonserness/image/upload/c_scale,dpr_auto,f_auto,q_auto,w_1400/v1645802860/ZC/placeholder/grandclosing.jpg',
        },
        {
          name: 'state-of-skate',
          title: 'State of Skate',
          client: 'StockX + TDM',
          featureImg:
            'https://res.cloudinary.com/jonserness/image/upload/c_scale,dpr_auto,f_auto,q_auto,w_1400/v1645802844/ZC/placeholder/stateofskate.jpg',
        },
        {
          name: 'excursions',
          title: 'Excursions',
          client: 'StockX',
          featureImg:
            'https://res.cloudinary.com/jonserness/image/upload/v1645802841/ZC/placeholder/excersions.svg',
        },
      ],
    }
  },
  // head() {
  //   return {
  //     bodyAttrs: {
  //       class: this.navSectionActive,
  //       'data-nav-section': this.navSectionActive,
  //     },
  //   }
  // },
  mounted() {
    this.animationTimeline()
  },
  methods: {
    animationTimeline() {
      const refs = this.$refs

      console.log(refs.about1, 'refs.about1')

      const sectionWrap = this.$el.querySelector('.section-wrapper')

      // const caseStudies = this.$el.querySelectorAll('.sectionCaseStudy')
      const scrollModifier = 2
      const h = window.innerHeight
      // const slides = this.$el.querySelectorAll('.slide')
      // gsap.set(slides, { autoAlpha: 1 })
      const tl = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          scroller: this.$el,
          trigger: sectionWrap,
          start: 'top top',
          end: h * 8 - h,
          scrub: true,
          markers: true,
        },
      })
      // * intro Out
      tl.fromTo(
        '#sectionIntro',
        { x: 0, scale: 1 },
        { x: '-101%', scale: 1, duration: scrollModifier }
      )
      // * about1 In
      tl.fromTo(
        '#sectionAbout1',
        { x: '101%' },
        {
          x: 0,
          duration: scrollModifier,
        },
        `-=${scrollModifier}`
      )
      // * about animate
      tl.call(() => refs.about1.scrollAnimation().play(), null, '<')
      // * about2 In
      tl.fromTo(
        '#sectionAbout2',
        { x: '101%' },
        {
          x: 0,
          duration: scrollModifier,
        },
        `+=${scrollModifier / 2}`
      )
      // * about animate
      tl.call(() => refs.about2.scrollAnimation().play(), null, '<')
      // * about 1 out
      tl.to(
        '#sectionAbout1',
        {
          x: '-101%',
          scale: 0.95,
          autoAlpha: 0.8,
          duration: scrollModifier,
        },
        `-=${scrollModifier / 1.5}`
      )
      // * work In
      tl.fromTo(
        '#sectionWork',
        { x: '101%' },
        {
          x: 0,
          duration: scrollModifier,
        },
        `+=${scrollModifier / 2}`
      )
      // * about 2 out
      tl.to(
        '#sectionAbout2',
        {
          x: '-101%',
          scale: 0.95,
          autoAlpha: 0.8,
          duration: scrollModifier,
        },
        `-=${scrollModifier / 1.5}`
      )
    },
  },
}
</script>
<style lang="scss" scoped>
main {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  // overflow: scroll;
  overflow-x: hidden;
  // width: 100vw;
  // height: 100vh;
  // display: flex;
  // // align-items: center;
  // flex-wrap: nowrap;
  // padding-top: var(--headerHeight);
  // @media only screen and (min-width: 300px) and (max-width: 1180px) {
  // }
}
h1 {
  font-size: 30vmin;
}
.scroll-wrapper {
  width: 100vw;
  height: 800vh;
  position: relative;
  top: 0;
  left: 0;
  overflow-x: hidden;
  // z-index: 9;
}

.section-wrapper {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  overflow-x: hidden;
}
section {
  width: 100vw;
  height: 100vh;
  position: absolute;
  // background: sandybrown;
  overflow: hidden;
  font-size: 18vmin;
  top: 0;
  left: 0;
  background: var(--backgroundColor);
}
</style>
