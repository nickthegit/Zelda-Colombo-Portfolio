<template>
  <article>
    <div class="preview-section">
      <img
        v-for="image in images"
        :key="image.src"
        :src="`https://res.cloudinary.com/jonserness/image/upload/c_scale,dpr_auto,f_auto,q_auto,w_1400/v1646171235/ZC/placeholder/more-stuff/${image.src}`"
        alt=""
        :class="`img${image.size}`"
      />
    </div>
  </article>
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
        {
          src: 'Hazy_04_1.jpg',
          size: 40,
        },
        {
          src: 'USSY300157_Converse_SIM_2021_graphics_029_1.png',
          size: 100,
        },
        {
          src: 'Fragment_E_1.jpg',
          size: 50,
        },
        {
          src: 'USSY300157_Converse_SIM_2021-Logo_48_1.jpg',
          size: 100,
        },
        {
          src: 'image_3.jpg',
          size: 100,
        },
        {
          src: 'image_2.jpg',
          size: 30,
        },
        {
          src: '2019_ZC_portfolio_Page_40.jpg',
          size: 70,
        },
        {
          src: 'USSY300157_Converse_SIM_2021_mockup_wildpost_02_1.png',
          size: 100,
        },
        {
          src: '2019_ZC_portfolio_Page_46_1.jpg',
          size: 100,
        },
        {
          src: '2019_ZC_portfolio_Page_47_1.jpg',
          size: 50,
        },
        {
          src: '2019_ZC_portfolio_Page_42.jpg',
          size: 100,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
article {
  width: 100vw;
  max-width: 1920px;
  padding-top: 160px;
}
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
</style>
