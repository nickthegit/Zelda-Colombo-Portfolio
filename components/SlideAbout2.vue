<template>
  <section class="section-slide extended" data-scroll-section>
    <div class="pin">
      <article class="about-heading">
        <h3>Web Design</h3>
        <h3>Digital Experience</h3>
        <h3>Creative Conception</h3>
        <h3>Graphic Design</h3>
        <p>
          Wireframes, User interface/experience, Website design, Graphic design,
          Brand Identity system, Editorial design, Retail & Brand activation,
          concept research & design development.
        </p>
      </article>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { CustomEase } from 'gsap/CustomEase'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(CustomEase, SplitText, ScrollTrigger)
export default {
  data() {
    return {
      animation: null,
    }
  },
  mounted() {
    this.scrollAnimation()
  },
  methods: {
    scrollAnimation() {
      const heading = this.$el.querySelectorAll('h3')
      const textSplit = new SplitText(heading, { type: 'chars' })
      const text = textSplit.chars
      if (text.length > 0) {
        this.animation = gsap.fromTo(
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
      }
    },
  },
}
</script>

<style lang="scss" scoped>
article {
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 40px;
  @media screen and (max-width: 600px) {
    padding: var(--headerHeight) var(--genSpacing);
  }
}
h3 {
  width: 100%;
  font-family: 'Switzer-Variable';
  font-variation-settings: 'wght' 600;
  text-align: left;
  font-size: var(--m);
  // letter-spacing: -0.14vmin;
  // line-height: 13.5vmin;
  @media screen and (max-width: 600px) {
    margin-bottom: var(--genSpacing);
  }
}
p {
  width: 100%;
  max-width: 80%;
  margin-top: 6vmin;
  font-family: 'Boska-Variable';
  font-variation-settings: 'wght' 400;
  text-align: left;
  font-size: var(--p);
  // letter-spacing: -0.05vmin;
  // line-height: 5vmin;
  white-space: normal;
  @media screen and (max-width: 600px) {
    margin-top: 0;
    max-width: 90%;
  }
}
</style>
