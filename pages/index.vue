<template>
  <main id="js-scroll">
    <section id="section-intro" data-scroll-section>SECTION 0 - INTRO</section>
    <section id="section-about" data-scroll-section>
      <div id="fixed-target" class="c-fixed_target"></div>
      <h1 data-scroll>SECTION 1 - ABOUT</h1>
    </section>
    <section id="section-work" data-scroll-section>SECTION 2 - WORK</section>
    <section id="section-contact" data-scroll-section>
      SECTION 3 - CONTACT
    </section>
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
section {
  width: 100%;
  height: 100%;
  flex: 0 0 auto;
  position: relative;
  @media only screen and (min-width: 300px) and (max-width: 1180px) {
    height: 100vh;
    flex: auto;
    display: block;
  }
  // display: flex;
  // align-items: center;
  // justify-content: center;
}
#fixed-target {
  width: 600px;
  height: 200px;
  position: absolute;
  top: 0;
  right: -290px;
  background: honeydew;
}
</style>
