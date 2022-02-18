<template>
  <section class="section-slide" data-scroll-section>
    <article>
      <nuxt-link to="#">
        <div class="feature-image">
          <img src="https://via.placeholder.com/1920x1080" alt="" />
        </div>
        <h2>Client — title of project</h2>
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
  padding: calc(var(--headerHeight) + var(--headerHeight));
}
a {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
.feature-image {
  width: 100%;
  height: 100%;
  max-width: 1280px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
h2 {
  padding-top: var(--genSpacing);
  position: relative;
  z-index: 1;
  font-family: 'Switzer-Variable';
  font-variation-settings: 'wght' 400;
  text-align: center;
  font-size: 3.5vmin;
  letter-spacing: -0.035vmin;
}
</style>
