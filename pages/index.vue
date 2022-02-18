<template>
  <main id="js-scroll">
    <slide-intro />
    <slide-about-1 />
    <slide-about-2 />
    <slide-work />
    <slide-case-study />
    <slide-case-study />
    <slide-case-study />
    <slide-case-study />
    <slide-more-work />
    <slide-contact />
  </main>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { gsap } from 'gsap'

// import { PixiPlugin } from "gsap/PixiPlugin.js";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

// gsap.registerPlugin(PixiPlugin, MotionPathPlugin);
// ```

// if client only
// ```
// if (process.client) {
//   gsap.registerPlugin(MorphSVGPlugin);
// }

export default {
  name: 'IndexPage',
  data() {
    return {
      locomotiveScrollInstance: null,
    }
  },
  mounted() {
    // const h1 = this.$el.querySelector('h1')
    // gsap.to(h1, { y: 400, duration: 4 })

    this.locomotiveScrollInstance = new this.LocomotiveScroll({
      el: this.$el,
      smooth: true,
      direction: 'horizontal',
      gestureDirection: 'both',
      tablet: {
        smooth: true,
        direction: 'vertical',
      },
      smartphone: {
        smooth: true,
        direction: 'vertical',
      },
      // reloadOnContextChange: true,
    })
    console.log('lmS', this.locomotiveScrollInstance)
  },
  destroyed() {
    this.locomotiveScrollInstance.destroy()
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
