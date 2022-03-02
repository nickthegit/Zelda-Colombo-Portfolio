<template>
  <section>
    <article>
      <nuxt-link to="/more-stuff">
        <h2>Some <br />more stuff</h2>
      </nuxt-link>
    </article>
    <div class="preview-section">
      <img
        v-for="image in images"
        :key="image.src"
        :src="`https://res.cloudinary.com/jonserness/image/upload/c_scale,dpr_auto,f_auto,q_auto,w_1400/v1646171235/ZC/placeholder/more-stuff/${image.src}`"
        alt=""
        :class="`img${image.size}`"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src: 'Fragment_A_1.jpg',
          size: 40,
        },
        {
          src: 'Particle_B_1.jpg',
          size: 60,
        },
        {
          src: '2019_ZC_portfolio_Page_41.jpg',
          size: 100,
        },
        {
          src: 'Fragment_B_1.jpg',
          size: 60,
        },
        {
          src: 'Hazy_01_1.jpg',
          size: 40,
        },
      ],
    }
  },
  mounted() {},
}
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
  z-index: 2;
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

.preview-section {
  width: 100vw;
  max-width: 1920px;
  height: 100vh;
  padding-top: 80px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  overflow: hidden;
  opacity: 0.3;
  img {
    width: 100%;
    float: left;
    box-sizing: border-box;
    padding: 20px;
    &.img30 {
      width: 30%;
    }
    &.img40 {
      width: 40%;
    }
    &.img50 {
      width: 50%;
    }
    &.img60 {
      width: 60%;
    }
    &.img70 {
      width: 70%;
    }
    &.img100 {
      width: 100%;
    }
    @media screen and (max-width: 600px) {
      width: 100% !important;
    }
  }
}
</style>
