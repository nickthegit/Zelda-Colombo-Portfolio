<template>
  <section class="section-slide case-study-slide extended" data-scroll-section>
    <div class="pin">
      <article class="case-study-item">
        <nuxt-link to="#">
          <div class="feature-image">
            <img src="https://via.placeholder.com/1920x1080" alt="" />
          </div>
          <h2>Client — title of project</h2>
        </nuxt-link>
      </article>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(CustomEase, SplitText, ScrollTrigger)
export default {
  mounted() {
    const heading = this.$el.querySelector('h2')
    const textSplit = new SplitText(heading, { type: 'chars' })
    const text = textSplit.chars
    if (text.length > 0) {
      gsap.fromTo(
        text,
        {
          autoAlpha: 0,
        },
        {
          scrollTrigger: {
            trigger: heading,
            start: () => 'left right',
            end: () => `+=70%`,
            scrub: true,
            horizontal: true,
            invalidateOnRefresh: true,
          },
          duration: 1,
          autoAlpha: 1,
          ease: CustomEase.create(
            'custom',
            'M0,0,C0.14,0,0.188,0.233,0.218,0.356,0.259,0.523,0.394,0.414,0.426,0.366,0.46,0.328,0.508,-0.044,0.562,0,0.598,0.029,0.606,0.834,0.676,0.824,0.738,0.74,0.815,0.398,0.834,0.412,0.853,0.426,0.897,0.985,0.911,0.998,0.922,0.994,0.939,0.984,0.954,0.984,0.969,0.984,1,1,1,1'
          ),
          stagger: {
            each: 0.075,
            from: 'random',
          },
        }
      )
    }
  },
}
</script>

<style lang="scss" scoped>
article {
  width: 100vw;
  height: calc(100vh - 80px);
  position: relative;
  padding: var(--headerHeight) calc(var(--headerHeight) + var(--headerHeight));
  @media screen and (max-width: 600px) {
    padding: var(--genSpacing);
  }
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
  @media screen and (max-width: 600px) {
    height: auto;
  }
}
h2 {
  padding-top: var(--genSpacing);
  position: relative;
  z-index: 1;
  font-family: 'Switzer-Variable';
  font-variation-settings: 'wght' 400;
  text-align: center;
  font-size: var(--p);
  // flex-grow: 1;
  // letter-spacing: -0.035vmin;
}
</style>
