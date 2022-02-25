<template>
  <transition name="loader-fade" @leave="leave">
    <div v-if="!loaded" class="loader-wrap">
      <span></span>
      <zelda-colombo />
    </div>
  </transition>
</template>

<script>
import { gsap } from 'gsap'
import imagesLoaded from 'imagesloaded'
export default {
  data() {
    return {
      loaded: false,
      imgsLoaded: null,
      percentCompleted: 0,
    }
  },
  watch: {
    loaded(newState, oldState) {
      if (newState) {
        // alert('true')
      }
    },
  },
  mounted() {
    this.loadImages()
  },
  methods: {
    loadImages() {
      const vm = this
      // load
      this.imgsLoaded = imagesLoaded(document.querySelector('body'))
      // progress
      this.imgsLoaded.on('progress', function (instance, image) {
        vm.percentCompleted =
          (instance.progressedCount / instance.images.length) * 100
        vm.loadingBarAnimationIn(vm.percentCompleted)
      })
      // done
      this.imgsLoaded.on('always', function (instance) {
        vm.loadingBarAnimationOut()
      })
    },
    loadingBarAnimationIn(percent) {
      const span = this.$el.querySelector('span')
      gsap.to(span, {
        width: `${percent}%`,
        duration: 0.3,
        ease: 'power2.out',
      })
    },
    loadingBarAnimationOut() {
      const span = this.$el.querySelector('span')
      gsap.to(span, {
        scaleX: 0,
        transformOrigin: 'right center',
        duration: 1,
        ease: 'power4.inOut',
        delay: 0.5,
        onComplete: () => {
          this.loaded = true
        },
      })
    },
    leave(el, done) {
      const vm = this
      gsap.fromTo(
        el,
        { autoAlpha: 1 },
        {
          autoAlpha: 0,
          duration: 2,
          onStart() {
            vm.$store.commit('hasLoaded')
          },
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
.loader-wrap {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--backgroundColor);
  z-index: 999;
}
span {
  width: 1%;
  height: 4px;
  display: block;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background: var(--primaryColor);
}
</style>
