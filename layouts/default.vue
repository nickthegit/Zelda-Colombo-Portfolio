<template>
  <div>
    <portfolio-header :locomotive-scroll-instance="locomotiveScrollInstance" />
    <Nuxt />
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(CustomEase, SplitText, ScrollTrigger)
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

    // const isDevice =
    //   vm.locomotiveScrollInstance.options.isMobile ||
    //   vm.locomotiveScrollInstance.options.isTablet

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

      const h3 = element.querySelectorAll('article h3')

      const textSplit = new SplitText(h3, { type: 'chars' })
      const text = textSplit.chars
      console.log('text', text)

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
          onStart: () => {
            gsap.fromTo(
              text,
              {
                autoAlpha: 0,
              },
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
              }
            )
          },
        },
        'start'
      )
    })

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
