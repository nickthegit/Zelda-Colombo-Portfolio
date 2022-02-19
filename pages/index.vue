<template>
  <main id="js-scroll">
    <slide-intro id="home" />
    <slide-about-1 id="about" />
    <slide-about-2 />
    <slide-work id="work" />
    <slide-case-study />
    <slide-case-study />
    <slide-case-study />
    <slide-case-study />
    <slide-more-work />
    <slide-contact id="contact" />
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
