<template>
  <section class="section-slide" data-scroll-section>
    <article>
      <h3>Teamplayer</h3>
      <h3>Work with ethics</h3>
      <h3>Always learning</h3>
      <h3>Keen eye for details</h3>
      <h3>Keep on playing...</h3>
    </article>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
article {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px;
  @media screen and (max-width: 600px) {
    padding: var(--genSpacing);
  }
}
h3 {
  font-family: 'Switzer-Variable';
  font-variation-settings: 'wght' 600;
  text-align: left;
  font-size: var(--m);
  // letter-spacing: -0.14vmin;
  // line-height: 13.5vmin;
  @media screen and (max-width: 600px) {
    margin-bottom: var(--genSpacing);
  }
}
</style>
