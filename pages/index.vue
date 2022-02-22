<template>
  <main id="js-scroll">
    <slide-intro class="section-home" />
    <slide-about-1 class="section-about" />
    <slide-about-2 class="section-about" />
    <slide-work class="section-work" />
    <slide-case-study class="section-work" />
    <slide-case-study class="section-work" />
    <slide-case-study class="section-work" />
    <slide-case-study class="section-work" />
    <slide-more-work class="section-work" />
    <slide-contact class="section-contact" />
  </main>
</template>

<script>
// // eslint-disable-next-line no-unused-vars
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)
// // ```
// // if (process.client) {
// //   gsap.registerPlugin(MorphSVGPlugin);
// // }

export default {
  name: 'IndexPage',
  data() {
    return {
      locomotiveScrollInstance: null,
    }
  },
  mounted() {},
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
