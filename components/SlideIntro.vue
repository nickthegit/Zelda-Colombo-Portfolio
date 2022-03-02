<template>
  <section>
    <article>
      <h1 id="jobTitle">
        <span id="jobTitleHybrid">HYBRID</span>
        <span id="jobTitleDigital">DIGITAL</span>
        <br />
        <span id="jobTitleDesigner">DESIGNER</span>
      </h1>
      <zelda-colombo />
    </article>
    <transition name="scroll" @enter="scrollEnter">
      <svg
        v-if="showScrollIcon"
        xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
        style="enable-background: new 0 0 980 274"
        viewBox="0 0 980 274"
      >
        <path
          d="M27.7 101.9c0-11.1 9.3-18.4 25.2-18.4 16.2 0 26.9 7.2 30.8 23.9h18c-4.6-26.9-24.1-38.6-48.5-38.6-27.8 0-43.1 16-43.1 34.2 0 51 77.4 22.3 77.4 60.9 0 12.6-10 21-29 21-18.2 0-29.5-8.2-33.6-23.2H7.3c5.6 25.4 24.1 37.9 51.2 37.9 26.9 0 46.6-13.6 46.6-37.9 0-51.8-77.4-24.1-77.4-59.8zm201 5.6c-6.1-25.2-26.9-38.6-51.2-38.6-35.6 0-57.4 25.2-57.4 65.5 0 40.5 21.3 65.2 56.6 65.2 24.1 0 44.7-13.9 51.8-37.9h-18c-5.4 15.2-18 23.2-33.6 23.2-24.9 0-39.4-18.9-39.4-50.5s14.7-50.9 39.4-50.9c16.2 0 29.3 8.5 34 23.9-.1.1 17.8.1 17.8.1zm20.5 89.8h17.1v-52.9H293c15.2 0 21.5 3 25.2 18.7l8 34.2h18l-9.5-37.5c-3.2-12.4-7.4-19.3-15.6-23 11.9-5.4 18.9-15.6 18.9-30.1 0-21.9-16.9-35.6-43.4-35.6h-45.5c.1 0 .1 126.2.1 126.2zM294.3 85c16.3 0 26.2 8.7 26.2 22.6s-9.8 22.8-26.5 22.8h-27.7V85h28zm123.5 114.6c36.8 0 59.6-24.9 59.6-65.2s-22.8-65.5-59.6-65.5c-36.9 0-59.6 25.2-59.6 65.5s22.6 65.2 59.6 65.2zm0-14.7c-26.4 0-42.1-19.1-42.1-50.5 0-31.6 15.8-50.9 42.1-50.9s42.1 19.3 42.1 50.9c0 31.4-15.8 50.5-42.1 50.5zm82 12.4h80.6v-13.9h-63.5V71.1h-17.1v126.2zm99.2 0h80.6v-13.9H616V71.1h-17v126.2zm300.1 67.9 70.6-60.6c3.5-3.2 4-8.5 1.1-12.3-2.9-3.5-8.2-4.1-11.8-1.2L902 240V15.9c.1-2.3-.8-4.6-2.3-6.3-3-3.3-8-3.6-11.3-.6l-.6.6c-1.6 1.7-2.4 4-2.3 6.3V240l-57-48.9c-3.4-2.9-8.9-2.3-11.7 1.2-2.9 3.8-2.4 9.1 1.1 12.3l70.6 60.6c4 2.7 7.1 2.3 10.6 0 .1 0 0 0 0 0z"
          style="fill: #f0f"
        />
      </svg>
    </transition>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { CustomEase } from 'gsap/CustomEase'

gsap.registerPlugin(CustomEase, SplitText)
export default {
  data() {
    return {
      showScrollIcon: false,
    }
  },
  computed: {
    loaded() {
      return this.$store.getters.siteHasLoaded
    },
  },
  watch: {
    loaded(newState, oldState) {
      if (newState) {
        this.jobTitleAnimation()
      }
    },
  },
  mounted() {
    gsap.set('#jobTitle', { autoAlpha: 0 })

    if (this.loaded) {
      this.jobTitleAnimation()
    }
  },
  methods: {
    jobTitleAnimation() {
      gsap.set('#jobTitle', { autoAlpha: 1 })
      const animationOptions = {
        duration: 1,
        autoAlpha: 0,
        ease: CustomEase.create(
          'custom',
          'M0,0,C0.14,0,0.188,0.233,0.218,0.356,0.259,0.523,0.394,0.414,0.426,0.366,0.46,0.328,0.508,-0.044,0.562,0,0.598,0.029,0.606,0.834,0.676,0.824,0.738,0.74,0.815,0.398,0.834,0.412,0.853,0.426,0.897,0.985,0.911,0.998,0.922,0.994,0.939,0.984,0.954,0.984,0.969,0.984,1,1,1,1'
        ),
        stagger: {
          each: 0.075,
          from: 'random',
        },
      }
      // ## SPLITS
      const hybridSplit = new SplitText('#jobTitleHybrid', { type: 'chars' })
      const digitalSplit = new SplitText('#jobTitleDigital', { type: 'chars' })
      const designerSplit = new SplitText('#jobTitleDesigner', {
        type: 'chars',
      })
      const hybrid = hybridSplit.chars
      const digital = digitalSplit.chars
      const designer = designerSplit.chars
      // ## sets
      gsap.set(digital, { autoAlpha: 0 })
      // ## HYBRID/DIGITAL TL
      const tl = gsap.timeline({ repeat: -1 })
      tl.from(hybrid, { ...animationOptions, autoAlpha: 0 })
      tl.to(
        hybrid,
        {
          autoAlpha: 0,
          duration: 0.5,
          stagger: {
            each: 0.075,
            from: 'random',
          },
        },
        '+=1.25'
      )
      tl.to(
        digital,
        {
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
        },
        '-=0.75'
      )
      tl.to(
        digital,
        {
          autoAlpha: 0,
          duration: 0.5,
          stagger: {
            each: 0.075,
            from: 'random',
          },
        },
        '+=2'
      )
      const vm = this
      // ## DESIGNER
      gsap.from(designer, {
        ...animationOptions,
        autoAlpha: 0,
        onComplete() {
          vm.showScrollIcon = true
        },
      })
    },
    scrollEnter(el, done) {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: -40 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 1,
          onComplete() {
            done()
          },
        }
      )
    },
  },
}
</script>

<style lang="scss" scoped>
section {
  // background: salmon;
  height: 100vh;
  padding: 0 var(--headerHeight);
  // background: sandybrown;
  @media screen and (max-width: 900px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 600px) {
    padding: 0 10px;
  }
  svg {
    width: 120px;
    display: block;
    position: absolute;
    bottom: var(--genSpacing);
    right: var(--genSpacing);
    path {
      fill: var(--foregroundColor) !important;
    }
  }
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

#jobTitleDigital {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: block;
}
</style>
