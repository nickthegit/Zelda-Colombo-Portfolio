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
    <!-- <transition name="scroll" @enter="scrollEnter">
      <svg
        v-if="showScrollIcon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 123 17"
      >
        <path
          fill="#fff"
          d="M2.2 4.72c0-1.2 1-1.98 2.72-1.98 1.74 0 2.9.78 3.32 2.58h1.94c-.5-2.9-2.6-4.16-5.22-4.16-3 0-4.64 1.72-4.64 3.68 0 5.5 8.34 2.4 8.34 6.56 0 1.36-1.08 2.26-3.12 2.26-1.96 0-3.18-.88-3.62-2.5H0c.6 2.74 2.6 4.08 5.52 4.08 2.9 0 5.02-1.46 5.02-4.08 0-5.58-8.34-2.6-8.34-6.44ZM23.85 5.32c-.66-2.72-2.9-4.16-5.52-4.16-3.84 0-6.18 2.72-6.18 7.06 0 4.36 2.3 7.02 6.1 7.02 2.6 0 4.82-1.5 5.58-4.08h-1.94c-.58 1.64-1.94 2.5-3.62 2.5-2.68 0-4.24-2.04-4.24-5.44 0-3.4 1.58-5.48 4.24-5.48 1.74 0 3.16.92 3.66 2.58h1.92ZM26.064 15h1.84V9.3h2.88c1.64 0 2.32.32 2.72 2.02l.86 3.68h1.94l-1.02-4.04c-.34-1.34-.8-2.08-1.68-2.48 1.28-.58 2.04-1.68 2.04-3.24 0-2.36-1.82-3.84-4.68-3.84h-4.9V15Zm4.86-12.1c1.76 0 2.82.94 2.82 2.44s-1.06 2.46-2.86 2.46h-2.98V2.9h3.02ZM44.225 15.24c3.96 0 6.42-2.68 6.42-7.02s-2.46-7.06-6.42-7.06c-3.98 0-6.42 2.72-6.42 7.06s2.44 7.02 6.42 7.02Zm0-1.58c-2.84 0-4.54-2.06-4.54-5.44 0-3.4 1.7-5.48 4.54-5.48s4.54 2.08 4.54 5.48c0 3.38-1.7 5.44-4.54 5.44ZM53.066 15h8.68v-1.5h-6.84V1.4h-1.84V15ZM63.745 15h8.68v-1.5h-6.84V1.4h-1.84V15ZM122.036 7.926 115.503.319a.981.981 0 0 0-1.32-.118.904.904 0 0 0-.124 1.267l5.265 6.137h-24.15a.969.969 0 0 0-.678.252.864.864 0 0 0 0 1.284.97.97 0 0 0 .678.252h24.15l-5.265 6.138c-.313.362-.25.959.124 1.265a.98.98 0 0 0 1.32-.119l6.533-7.606c.292-.436.25-.763 0-1.148v.003Z"
        />
      </svg>
    </transition> -->
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
        { autoAlpha: 0, x: -40 },
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
  @media screen and (max-width: 600px) {
    padding: 0 10px;
  }
  svg {
    width: 120px;
    display: block;
    position: absolute;
    bottom: var(--genSpacing);
    right: var(--genSpacing);
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
