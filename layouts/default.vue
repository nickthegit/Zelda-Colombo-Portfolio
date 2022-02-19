<template>
  <div>
    <portfolio-header :locomotive-scroll-instance="locomotiveScrollInstance" />
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      locomotiveScrollInstance: null,
    }
  },
  mounted() {
    // const h1 = this.$el.querySelector('h1')
    // gsap.to(h1, { y: 400, duration: 4 })

    const el = this.$el.querySelector('#js-scroll')

    this.locomotiveScrollInstance = new this.LocomotiveScroll({
      el,
      smooth: true,
      direction: 'horizontal',
      gestureDirection: 'both',
      // TODO if smooth on tab and mobile turn .html hack on in global scss
      // tablet: {
      //   smooth: true,
      //   direction: 'vertical',
      // },
      // smartphone: {
      //   smooth: true,
      //   direction: 'vertical',
      // },
      // reloadOnContextChange: true,
    })
    console.log('lmS', this.locomotiveScrollInstance)

    this.$nextTick(() => {
      this.locomotiveScrollInstance.update()
    })
  },
  destroyed() {
    this.locomotiveScrollInstance.destroy()
  },
}
</script>
