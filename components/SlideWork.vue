<template>
  <section class="section-slide" data-scroll-section>
    <article>
      <h2>Some Work</h2>
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
  @media screen and (max-width: 600px) {
    padding: var(--genSpacing);
  }
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
