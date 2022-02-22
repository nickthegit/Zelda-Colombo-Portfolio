<template>
  <section class="section-slide extended" data-scroll-section>
    <div class="pin">
      <article class="about-heading">
        <h3>Web Design</h3>
        <h3>Digital Experience</h3>
        <h3>Creative Conception</h3>
        <h3>Graphic Design</h3>
        <p>
          Web design, User interface/experience, Digital experience, Graphic
          design, editorial design, identity system, Retail & Brand activation,
          concept research, & design development.
        </p>
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
  display: flex;
  flex-direction: column;
  padding: 40px;
  @media screen and (max-width: 600px) {
    padding: var(--headerHeight) var(--genSpacing);
  }
}
h3 {
  width: 100%;
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
p {
  width: 100%;
  max-width: 80%;
  margin-top: 8vmin;
  font-family: 'Boska-Variable';
  font-variation-settings: 'wght' 400;
  text-align: left;
  font-size: var(--p);
  // letter-spacing: -0.05vmin;
  // line-height: 5vmin;
  white-space: normal;
  @media screen and (max-width: 600px) {
    margin-top: 0;
    max-width: 90%;
  }
}
</style>
