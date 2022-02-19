<template>
  <section class="section-slide" data-scroll-section>
    <article>
      <h3>
        <a href="mailto:zelda.colombo@gmail.com">zelda.colombo@gmail.com</a>
      </h3>
      <h4>Amsterdam (atm)</h4>
      <h4><a href="tel:+33613750219">+33613750219</a></h4>
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
    padding: var(--headerHeight) var(--genSpacing);
  }
}
a {
  text-decoration: none;
}
h3,
h4 {
  text-align: left;
  font-size: var(--s);
  // letter-spacing: -0.12vmin;
  // line-height: 12vmin;
  margin-bottom: var(--genSpacing);
}
h3 {
  font-family: 'Switzer-Variable';
  font-variation-settings: 'wght' 500;
  word-break: break-word;
}
h4 {
  font-family: 'Boska-Variable';
  font-variation-settings: 'wght' 400;
}
</style>
