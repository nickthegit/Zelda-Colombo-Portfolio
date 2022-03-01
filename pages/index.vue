<template>
  <main>
    <div
      class="scroll-wrapper"
      :style="{ height: tlMultiplier * 100 + 'vh' }"
    ></div>
    <div class="section-wrapper">
      <portfolio-header :is-home="true" :home-scroll-to="goToSection" />
      <!-- <header>
        <button @click="goToSection(0)">home</button>
        <button @click="goToSection(1)">about</button>
        <button @click="goToSection(3)">work</button>
        <button @click="goToSection(9)">contact</button>
      </header> -->
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
        :video-id="caseStudy.videoId"
        :data-ref-name="caseStudy.name"
        class="case-study-slide"
      />
      <slide-more-work id="sectionMoreWork" />
      <slide-contact id="sectionContact" ref="contact" />
    </div>
  </main>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { SplitText } from 'gsap/SplitText'
import { CustomEase } from 'gsap/CustomEase'

import scrollPin from '~/mixins/scrollPinMixin.js'
import SlideAbout1 from '~/components/SlideAbout1.vue'
import SlideWork from '~/components/SlideWork.vue'
import SlideCaseStudyPlaceholder from '~/components/SlideCaseStudyPlaceholder.vue'
import SlideMoreWork from '~/components/SlideMoreWork.vue'
import SlideContact from '~/components/SlideContact.vue'
import PortfolioHeader from '~/components/PortfolioHeader.vue'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText, CustomEase)

export default {
  name: 'IndexPage',
  components: {
    SlideAbout1,
    SlideWork,
    SlideCaseStudyPlaceholder,
    SlideMoreWork,
    SlideContact,
    PortfolioHeader,
  },
  mixins: [scrollPin],
  data() {
    return {
      tlMultiplier: 27,
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
          videoId: '',
        },
        {
          name: 'state-of-skate',
          title: 'State of Skate',
          client: 'StockX + TDM',
          featureImg:
            'https://res.cloudinary.com/jonserness/image/upload/c_scale,dpr_auto,f_auto,q_auto,w_1400/v1645802844/ZC/placeholder/stateofskate.jpg',
          link: 'https://skatexsneakers.com',
          videoId: '683041606',
        },
        {
          name: 'excursions',
          title: 'Excursions',
          client: 'StockX',
          featureImg:
            'https://res.cloudinary.com/jonserness/image/upload/v1645802841/ZC/placeholder/excersions.svg',
          link: 'https://stockx.com/excursions/',
          videoId: '',
        },
      ],
      timeline: null,
    }
  },
  computed: {},
  // head() {
  //   return {
  //     bodyAttrs: {
  //       class: this.navSectionActive,
  //       'data-nav-section': this.navSectionActive,
  //     },
  //   }
  // },
  mounted() {
    this.$nextTick(() => {
      this.animationTimeline()
    })
  },
  methods: {
    scrollAnimationA2() {
      const heading = this.$el.querySelectorAll('#sectionAbout2 h3')
      const textSplit = new SplitText(heading, { type: 'chars' })
      const text = textSplit.chars
      if (text.length > 0) {
        const animationA2 = gsap.fromTo(
          text,
          {
            autoAlpha: 0,
          },
          {
            duration: 0.5,
            autoAlpha: 1,
            ease: CustomEase.create(
              'custom',
              'M0,0,C0.14,0,0.188,0.233,0.218,0.356,0.259,0.523,0.394,0.414,0.426,0.366,0.46,0.328,0.508,-0.044,0.562,0,0.598,0.029,0.606,0.834,0.676,0.824,0.738,0.74,0.815,0.398,0.834,0.412,0.853,0.426,0.897,0.985,0.911,0.998,0.922,0.994,0.939,0.984,0.954,0.984,0.969,0.984,1,1,1,1'
            ),
            stagger: {
              each: 0.025,
              from: 'random',
            },
          }
        )

        return animationA2
      }
    },
    animationTimeline() {
      // eslint-disable-next-line no-unused-vars
      const vm = this

      const refs = this.$refs

      const sectionWrap = this.$el.querySelector('.section-wrapper')
      const caseStudies = this.$el.querySelectorAll('.case-study-slide')

      const scrollModifier = 2
      const h = window.innerHeight
      const m = this.tlMultiplier

      this.timeline = gsap.timeline({
        scrollTrigger: {
          scroller: this.$el,
          trigger: sectionWrap,
          start: 'top top',
          end: h * m - h,
          scrub: true,
          // markers: true,
        },
        onUpdate(self) {
          console.log(vm.timeline.currentLabel())
        },
      })
      // * intro Out
      this.timeline.addLabel('start')
      this.timeline.fromTo(
        '#sectionIntro',
        { x: 0, scale: 1 },
        { x: '-101%', scale: 1, ease: 'power3.in', duration: scrollModifier }
      )
      // * about1 In
      this.timeline.addLabel('about')
      this.timeline.fromTo(
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
      this.timeline.add(refs.about1.animationA1, '<')
      // * about 1 out
      this.timeline.to('#sectionAbout1', {
        x: '-101%',
        scale: 0.95,
        autoAlpha: 0.2,
        ease: 'power3.in',
        duration: scrollModifier,
      })
      // * about2 In
      this.timeline.fromTo(
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
      this.timeline.add(vm.scrollAnimationA2, '<')
      // * about 2 out
      this.timeline.to('#sectionAbout2', {
        x: '-101%',
        scale: 0.95,
        autoAlpha: 0.2,
        ease: 'power3.in',
        duration: scrollModifier,
      })
      // * work In
      this.timeline.addLabel('work')
      this.timeline.fromTo(
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
      this.timeline.to('#sectionWork', {
        x: '-101%',
        scale: 0.95,
        autoAlpha: 0.2,
        ease: 'power3.in',
        duration: scrollModifier,
      })

      // * case studies in
      caseStudies.forEach((caseStudy) => {
        this.timeline.fromTo(
          caseStudy,
          { x: '101%' },
          {
            x: 0,
            ease: 'power3.out',
            duration: scrollModifier,
          },
          `-=${scrollModifier / 1.5}`
        )

        this.timeline.add(refs[caseStudy.dataset.refName][0].animationCS, '<')
        // * case studies out 2 out
        this.timeline.to(caseStudy, {
          x: '-101%',
          scale: 0.95,
          autoAlpha: 0.2,
          ease: 'power3.in',
          duration: scrollModifier,
        })
      })
      // * more work in
      this.timeline.fromTo(
        '#sectionMoreWork',
        { x: '101%' },
        {
          x: 0,
          ease: 'power3.out',
          duration: scrollModifier,
        },
        `-=${scrollModifier / 1.5}`
      )

      // * more work 2 out
      this.timeline.to(
        '#sectionMoreWork',
        {
          x: '-101%',
          scale: 0.95,
          autoAlpha: 0.2,
          ease: 'power3.in',
        },
        `+=${scrollModifier / 1.5}`
      )
      // * contact in
      this.timeline.addLabel('contact')
      this.timeline.fromTo(
        '#sectionContact',
        { x: '101%' },
        {
          x: 0,
          ease: 'power3.out',
          duration: scrollModifier,
        },
        `-=${scrollModifier / 1.5}`
      )
      this.timeline.add(refs.contact.animationC, '<')

      // const tl = this.timeline
      // setTimeout(() => {
      //   this.scrollBar.scrollTo(0, h * 3, 2000, {
      //     callback: () => console.log('done!'),
      //   })
      // }, 9000)
    },
    goToSection(sectionNumber) {
      const n = sectionNumber
      const m = this.tlMultiplier
      const h = window.innerHeight
      const t = 9 // total number of sections
      const sectionW = (m * h) / t

      const scrollToPixel = sectionW * n
      this.scrollBar.scrollTo(0, scrollToPixel, 2000, {
        callback: () => console.log('done!'),
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
header {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
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
  height: calc(100vh - 80px);
  position: absolute;
  // background: sandybrown;
  overflow: hidden;
  font-size: 18vmin;
  bottom: 0;
  left: 0;
  background: var(--backgroundColor);
  &#sectionIntro {
    height: 100vh;
  }
}
</style>
