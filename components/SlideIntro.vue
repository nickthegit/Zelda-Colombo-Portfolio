<template>
  <section class="section-slide" data-scroll-section>
    <article>
      <h1>HYBRID <br />DESIGNER</h1>
      <h2>Zelda Colombo</h2>
    </article>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
section {
  // background: salmon;
  height: calc(100vh - 80px);
  padding: 0 var(--headerHeight) var(--headerHeight) var(--headerHeight);
}
article {
  width: 100%;
  height: 100%;
  position: relative;
  // background: seagreen;
  display: flex;
  align-items: center;
  justify-content: center;
}
h1 {
  position: relative;
  z-index: 1;
  font-family: 'Switzer-Variable';
  font-variation-settings: 'wght' 600;
  text-align: center;
  font-size: var(--xl);
  // letter-spacing: calc(var(--xl) / -100);
  // line-height: calc(var(--xl) * 0.95);
}
h2 {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  font-family: 'Boska-Variable';
  color: var(--primaryColor);
  font-size: var(--l);
  // letter-spacing: calc(var(--xl) / -50);
  text-align: center;
  white-space: nowrap;
}
</style>
