<template>
  <section class="section-slide extended" data-scroll-section>
    <div class="pin">
      <article>
        <nuxt-link to="#">
          <h2>Some <br />more stuff</h2>
        </nuxt-link>
      </article>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
article {
  width: 100vw;
  height: calc(100vh - 80px);
  position: relative;
  // background: seagreen;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: var(--headerHeight);
  @media screen and (max-width: 600px) {
    padding: var(--genSpacing);
  }
}
a {
  text-decoration-thickness: 5px;
  text-underline-offset: 7px;
}
h2 {
  position: relative;
  z-index: 1;
  font-family: 'Boska-Variable';
  font-variation-settings: 'wght' 300;
  text-align: center;
  font-size: var(--xxl);
  letter-spacing: -0.25vmin;
}
</style>
