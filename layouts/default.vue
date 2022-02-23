<template>
  <div>
    <portfolio-header />
    <Nuxt />
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// import locomotive from '~/mixins/locomotive.js'

gsap.registerPlugin(CustomEase, SplitText, ScrollTrigger)

export default {
  // mixins: [locomotive],
  data() {
    return {
      locomotiveScrollInstance: null,
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
    const vm = this

    const elements = this.$el.querySelectorAll('.section-slide .pin')

    const workSection = this.$el.querySelector('.section-work')
    const aboutSection = this.$el.querySelector('.section-about')
    const contactSection = this.$el.querySelector('.section-contact')
    const homeSection = this.$el.querySelector('.section-home')

    // functions
    function updateSectionClass(el, section) {
      ScrollTrigger.create({
        trigger: el,
        start: 'left right',
        scrub: true,
        horizontal: true,
        invalidateOnRefresh: true,
        onToggle: (self) => {
          // console.log('toggled, isActive:', self.isActive)
          if (self.isActive) {
            vm.navSectionActive = section
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
    }
    function animateText(element, selector, endPercent) {
      const heading = element.querySelectorAll(selector)

      const textSplit = new SplitText(heading, { type: 'chars' })
      const text = textSplit.chars

      if (text.length > 0) {
        gsap.fromTo(
          text,
          {
            autoAlpha: 0,
          },
          {
            scrollTrigger: {
              trigger: heading,
              start: () => 'left right',
              end: () => `+=${endPercent}%`,
              scrub: true,
              horizontal: true,
              invalidateOnRefresh: true,
            },
            duration: 1,
            autoAlpha: 1,
            ease: CustomEase.create(
              'custom',
              'M0,0,C0.14,0,0.188,0.233,0.218,0.356,0.259,0.523,0.394,0.414,0.426,0.366,0.46,0.328,0.508,-0.044,0.562,0,0.598,0.029,0.606,0.834,0.676,0.824,0.738,0.74,0.815,0.398,0.834,0.412,0.853,0.426,0.897,0.985,0.911,0.998,0.922,0.994,0.939,0.984,0.954,0.984,0.969,0.984,1,1,1,1'
            ),
            stagger: {
              each: 0.075,
              from: 'random',
            },
          }
        )
      }
    }

    updateSectionClass(homeSection, 'home')
    updateSectionClass(aboutSection, 'about')
    updateSectionClass(workSection, 'work')
    updateSectionClass(contactSection, 'contact')

    this.$nextTick(() => {
      setTimeout(() => {
        elements.forEach((element) => {
          const article = element.querySelector('article')

          // console.log('DAVE', this.$locoScroll)

          // about headings
          animateText(element, 'article.about-heading h3', 80)
          // case study
          animateText(element, 'article.case-study-item h2', 75)

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

        this.lmS.update()
      }, 300)
    })
  },
  methods: {},
}
</script>
