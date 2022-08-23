<template>
  <section>
    <article>
      <h3>
        <a href="mailto:zelda.colombo@gmail.com">zelda.colombo@gmail.com</a>
      </h3>
      <h4>Amsterdam</h4>
      <h4><a href="tel:+33613750219">+33613750219</a></h4>
    </article>
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
      animationC: null,
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
        this.animationC = gsap.fromTo(
          text,
          {
            autoAlpha: 0,
          },
          {
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
    },
  },
}
</script>

<style lang="scss" scoped>
article {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px;
  @media screen and (max-width: 600px) {
    padding: var(--headerHeight) var(--genSpacing);
  }
}
a {
  text-decoration: none;
}
h3,
h4 {
  text-align: left;
  font-size: var(--s);
  // letter-spacing: -0.12vmin;
  // line-height: 12vmin;
  margin-bottom: var(--genSpacing);
}
h3 {
  font-family: 'Switzer-Variable';
  font-variation-settings: 'wght' 500;
  word-break: break-word;
}
h4 {
  font-family: 'Boska-Variable';
  font-variation-settings: 'wght' 400;
}
</style>
