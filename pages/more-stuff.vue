<template>
  <main>
    <nuxt-link to="/">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 39 39">
        <g clip-path="url(#a)">
          <path
            fill="#fff"
            d="M.522 2.467 17.535 19.42.522 36.532c-1.518 1.26.628 3.465 1.937 1.943l17.013-17.06 17.066 17.06c1.256 1.522 3.455-.683 1.937-1.943L21.46 19.421 38.475 2.467A1.365 1.365 0 0 0 37.48 0a1.2 1.2 0 0 0-.942.42L19.472 17.478 2.563.419A1.465 1.465 0 0 0 1.412 0 1.358 1.358 0 0 0 .04.898a1.368 1.368 0 0 0 .482 1.57Z"
          />
        </g>
        <defs>
          <clipPath id="a"><path fill="#fff" d="M0 0h39v39H0z" /></clipPath>
        </defs>
      </svg>
    </nuxt-link>
    <more-stuff-imgs />
  </main>
</template>

<script>
// https://res.cloudinary.com/jonserness/image/upload/v1646171231/ZC/placeholder/more-stuff/
import scrollPinVert from '~/mixins/scrollPinVertMixin.js'
export default {
  mixins: [scrollPinVert],
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
main {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: scroll;
  overflow-x: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  // padding-top: var(--headerHeight);
  // @media only screen and (min-width: 300px) and (max-width: 1180px) {
  // }
}
button,
a {
  width: 40px;
  height: 40px;
  display: block;
  background: none;
  position: absolute;
  top: var(--genSpacing);
  right: var(--genSpacing);
  svg {
    width: 100%;
    path {
      fill: var(--foregroundColor);
    }
  }
}

section {
  width: 100vw;
  height: 100vh;
  position: relative;
  flex: 0 0 auto;
  overflow: hidden;
  font-size: 18vmin;
}
</style>
