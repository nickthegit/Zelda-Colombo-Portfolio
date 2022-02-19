<template>
  <div>
    <portfolio-header :locomotive-scroll-instance="locomotiveScrollInstance" />
    <Nuxt />
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
export default {
  data() {
    return {
      locomotiveScrollInstance: null,
    }
  },
  mounted() {
    const vm = this
    const scroller = this.$el.querySelector('#js-scroll')
    const elements = this.$el.querySelectorAll('.section-slide .pin')

    vm.locomotiveScrollInstance = new vm.LocomotiveScroll({
      el: scroller,
      smooth: true,
      direction: 'horizontal',
      gestureDirection: 'both',
      // TODO if smooth on tab and mobile turn .html hack on in global scss
      tablet: {
        smooth: true,
        direction: 'vertical',
      },
      smartphone: {
        smooth: true,
        direction: 'vertical',
      },
      reloadOnContextChange: true,
    })

    vm.locomotiveScrollInstance.on('scroll', ScrollTrigger.update)

    const isDevice =
      vm.locomotiveScrollInstance.options.isMobile ||
      vm.locomotiveScrollInstance.options.isTablet

    // locoScroll.on("scroll", function() {
    //  console.log( locoScroll.scroll.instance.scroll.x )
    // });
    if (isDevice) {
      ScrollTrigger.scrollerProxy(scroller, {
        scrollTop(value) {
          return arguments.length
            ? vm.locomotiveScrollInstance.scrollTo(value, 0, 0)
            : vm.locomotiveScrollInstance.scroll.instance.scroll.y
        },

        getBoundingClientRect() {
          return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          }
        },
        pinType: scroller.style.transform ? 'transform' : 'fixed',
      })

      ScrollTrigger.defaults({
        scroller,
      })

      elements.forEach((element) => {
        const article = element.querySelector('article')

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: () => 'top top',
            end: () => '+=100%',
            pin: true,
            // anticipatePin: 1,
            scrub: true,
            horizontal: false,
            invalidateOnRefresh: true,
            // markers: true,
            // pinType: 'transform',
          },
        })

        tl.fromTo(
          article,
          {
            scale: 1,
            autoAlpha: 1,
          },
          {
            scale: 0.95,
            autoAlpha: 0.75,
            y: -500,
            duration: 5,
            delay: 0.5,
            ease: 'power2.in',
          }
        )
      })
    } else {
      ScrollTrigger.scrollerProxy(scroller, {
        scrollLeft(value) {
          return arguments.length
            ? vm.locomotiveScrollInstance.scrollTo(value, 0, 0)
            : vm.locomotiveScrollInstance.scroll.instance.scroll.x
        },

        getBoundingClientRect() {
          return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          }
        },
        pinType: scroller.style.transform ? 'transform' : 'fixed',
      })

      ScrollTrigger.defaults({
        scroller,
      })

      elements.forEach((element) => {
        const article = element.querySelector('article')

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: () => 'left left',
            end: () => '+=100%',
            pin: true,
            // anticipatePin: 1,
            scrub: true,
            horizontal: true,
            invalidateOnRefresh: true,
            // markers: true,
            pinType: 'transform',
          },
        })
        tl.fromTo(
          article,
          {
            scale: 1,
            autoAlpha: 1,
          },
          {
            scale: 0.95,
            autoAlpha: 0.75,
            x: -500,
            duration: 5,
            delay: 0.5,
            ease: 'power2.in',
          }
        )
      })
    }

    ScrollTrigger.addEventListener('refresh', () =>
      vm.locomotiveScrollInstance.update()
    )
    ScrollTrigger.refresh()

    this.$nextTick(() => {
      this.locomotiveScrollInstance.update()
    })
  },
  destroyed() {
    this.locomotiveScrollInstance.destroy()
  },
}
</script>
