<template>
  <section>
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
      animationA2: null,
    }
  },
  mounted() {},
  methods: {},
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
  white-space: nowrap;
  hyphens: auto;
  // word-break: break-all;
  overflow-wrap: break-word;
  // letter-spacing: -0.14vmin;
  // line-height: 13.5vmin;
  @media screen and (max-width: 600px) {
    // margin-bottom: var(--genSpacing);
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
    margin-top: var(--genSpacing);
    max-width: 90%;
  }
}
</style>
