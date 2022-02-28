<template>
  <main>
    <div
      class="scroll-wrapper"
      :style="{ height: tlMultiplier * 100 + 'vh' }"
    ></div>
    <div class="section-wrapper">
      <slide-intro id="sectionIntro" />
      <slide-about-1 id="sectionAbout1" ref="about1" class="slide" />
      <slide-about-2 id="sectionAbout2" ref="about2" class="slide" />
      <slide-work id="sectionWork" ref="work" class="slide" />
      <slide-case-study-placeholder
        v-for="caseStudy in caseStudies"
        :key="caseStudy.name"
        :ref="caseStudy.name"
        :name="caseStudy.name"
        :title="caseStudy.title"
        :client="caseStudy.client"
        :feature-img="caseStudy.featureImg"
        :link="caseStudy.link"
        :data-ref-name="caseStudy.name"
        class="case-study-slide"
      />
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
import SlideCaseStudyPlaceholder from '~/components/SlideCaseStudyPlaceholder.vue'

gsap.registerPlugin(ScrollTrigger)

export default {
  components: { SlideAbout1, SlideWork, SlideCaseStudyPlaceholder },
  name: 'IndexPage',
  mixins: [scrollPin],
  data() {
    return {
      tlMultiplier: 24,
      navSectionActive: '',
      isScrolling: false,
      caseStudies: [
        {
          name: 'renew-lab-store',
          title: 'Renew Lab Store',
          client: 'Converse',
          featureImg:
            'https://res.cloudinary.com/jonserness/image/upload/c_scale,dpr_auto,f_auto,q_auto,w_1400/v1645802860/ZC/placeholder/grandclosing.jpg',
          link: 'https://renewlabs.com',
        },
        {
          name: 'state-of-skate',
          title: 'State of Skate',
          client: 'StockX + TDM',
          featureImg:
            'https://res.cloudinary.com/jonserness/image/upload/c_scale,dpr_auto,f_auto,q_auto,w_1400/v1645802844/ZC/placeholder/stateofskate.jpg',
          link: 'https://skatexsneakers.com',
        },
        {
          name: 'excursions',
          title: 'Excursions',
          client: 'StockX',
          featureImg:
            'https://res.cloudinary.com/jonserness/image/upload/v1645802841/ZC/placeholder/excersions.svg',
          link: 'https://stockx.com/excursions/',
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

      const sectionWrap = this.$el.querySelector('.section-wrapper')
      const caseStudies = this.$el.querySelectorAll('.case-study-slide')

      const scrollModifier = 2
      const h = window.innerHeight
      const m = this.tlMultiplier

      const tl = gsap.timeline({
        scrollTrigger: {
          scroller: this.$el,
          trigger: sectionWrap,
          start: 'top top',
          end: h * m - h,
          scrub: true,
          markers: true,
        },
      })
      // * intro Out
      tl.fromTo(
        '#sectionIntro',
        { x: 0, scale: 1 },
        { x: '-101%', scale: 1, ease: 'power3.in', duration: scrollModifier }
      )
      // * about1 In
      tl.fromTo(
        '#sectionAbout1',
        { x: '101%' },
        {
          x: 0,
          ease: 'power3.out',
          duration: scrollModifier,
        },
        `-=${scrollModifier / 1.5}`
      )
      // * about animate
      tl.add(refs.about1.animation, '<')
      // * about 1 out
      tl.to('#sectionAbout1', {
        x: '-101%',
        scale: 0.95,
        autoAlpha: 0.2,
        ease: 'power3.in',
        duration: scrollModifier,
      })
      // * about2 In
      tl.fromTo(
        '#sectionAbout2',
        { x: '101%' },
        {
          x: 0,
          ease: 'power3.out',
          duration: scrollModifier,
        },
        `-=${scrollModifier / 1.5}`
      )
      // * about animate
      tl.add(refs.about2.animation, '<')
      // * about 2 out
      tl.to('#sectionAbout2', {
        x: '-101%',
        scale: 0.95,
        autoAlpha: 0.2,
        ease: 'power3.in',
        duration: scrollModifier,
      })
      // * work In
      tl.fromTo(
        '#sectionWork',
        { x: '101%' },
        {
          x: 0,
          ease: 'power3.out',
          duration: scrollModifier,
        },
        `-=${scrollModifier / 1.5}`
      )

      // * work 2 out
      tl.to('#sectionWork', {
        x: '-101%',
        scale: 0.95,
        autoAlpha: 0.2,
        ease: 'power3.in',
        duration: scrollModifier,
      })

      // * case studies in
      caseStudies.forEach((caseStudy) => {
        tl.fromTo(
          caseStudy,
          { x: '101%' },
          {
            x: 0,
            ease: 'power3.out',
            duration: scrollModifier,
          },
          `-=${scrollModifier / 1.5}`
        )

        tl.add(refs[caseStudy.dataset.refName][0].animation, '<')
        // * work 2 out
        tl.to(caseStudy, {
          x: '-101%',
          scale: 0.95,
          autoAlpha: 0.2,
          ease: 'power3.in',
          duration: scrollModifier,
        })
      })
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
  height: 1200vh;
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
