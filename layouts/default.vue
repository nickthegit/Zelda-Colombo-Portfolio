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

gsap.registerPlugin(CustomEase, SplitText, ScrollTrigger)

export default {
  mounted() {
    // function animateText(element, selector, endPercent) {
    //   const heading = element.querySelectorAll(selector)
    //   const textSplit = new SplitText(heading, { type: 'chars' })
    //   const text = textSplit.chars
    //   if (text.length > 0) {
    //     gsap.fromTo(
    //       text,
    //       {
    //         autoAlpha: 0,
    //       },
    //       {
    //         scrollTrigger: {
    //           trigger: heading,
    //           start: () => 'left right',
    //           end: () => `+=${endPercent}%`,
    //           scrub: true,
    //           horizontal: true,
    //           invalidateOnRefresh: true,
    //         },
    //         duration: 1,
    //         autoAlpha: 1,
    //         ease: CustomEase.create(
    //           'custom',
    //           'M0,0,C0.14,0,0.188,0.233,0.218,0.356,0.259,0.523,0.394,0.414,0.426,0.366,0.46,0.328,0.508,-0.044,0.562,0,0.598,0.029,0.606,0.834,0.676,0.824,0.738,0.74,0.815,0.398,0.834,0.412,0.853,0.426,0.897,0.985,0.911,0.998,0.922,0.994,0.939,0.984,0.954,0.984,0.969,0.984,1,1,1,1'
    //         ),
    //         stagger: {
    //           each: 0.075,
    //           from: 'random',
    //         },
    //       }
    //     )
    //   }
    // }
    //           // about headings
    //       animateText(element, 'article.about-heading h3', 80)
    //       // case study
    //       animateText(element, 'article.case-study-item h2', 75)
  },
  methods: {},
}
</script>
