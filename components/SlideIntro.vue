<template>
  <section class="section-slide" data-scroll-section>
    <article>
      <h1 id="jobTitle">
        <span id="jobTitleHybrid">HYBRID</span>
        <span id="jobTitleDigital">DIGITAL</span>
        <br />
        <span id="jobTitleDesigner">DESIGNER</span>
      </h1>
      <h2>Zelda Colombo</h2>
    </article>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { CustomEase } from 'gsap/CustomEase'

gsap.registerPlugin(CustomEase, SplitText)
export default {
  mounted() {
    this.jobTitleAnimation()
  },
  methods: {
    jobTitleAnimation() {
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

      // ## DESIGNER
      gsap.from(designer, { ...animationOptions, autoAlpha: 0 })
    },
  },
}
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
#jobTitleDigital {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: block;
}
</style>
