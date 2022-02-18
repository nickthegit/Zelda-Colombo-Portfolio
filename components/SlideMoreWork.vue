<template>
  <section class="section-slide" data-scroll-section>
    <article>
      <nuxt-link to="#">
        <h2>Some <br />more stuff</h2>
      </nuxt-link>
    </article>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
article {
  width: 100%;
  height: 100%;
  position: relative;
  // background: seagreen;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: var(--headerHeight);
}
a {
  text-decoration-thickness: 7px;
  text-underline-offset: 7px;
}
h2 {
  position: relative;
  z-index: 1;
  font-family: 'Boska-Variable';
  font-variation-settings: 'wght' 300;
  text-align: center;
  font-size: 25vmin;
  letter-spacing: -0.25vmin;
}
</style>
