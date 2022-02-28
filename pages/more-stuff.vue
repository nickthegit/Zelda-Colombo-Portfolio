<template>
  <main>
    <section>Hey</section>
    <section class="pinSectionVert">Page</section>
    <section>No. 2 <nuxt-link to="/">back to home</nuxt-link></section>
    <section>yeahhh</section>
    <section>Boi</section>
  </main>
</template>

<script>
import scrollPinVert from '~/mixins/scrollPinVertMixin.js'
export default {
  mixins: [scrollPinVert],
}
</script>

<style lang="scss" scoped>
main {
  background: hotpink;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: scroll;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  // padding-top: var(--headerHeight);
  // @media only screen and (min-width: 300px) and (max-width: 1180px) {
  // }
}
section {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: pink;
  flex: 0 0 auto;
  overflow: hidden;
  font-size: 18vmin;
}
</style>
