import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Scrollbar from 'smooth-scrollbar'

gsap.registerPlugin(ScrollTrigger)

export default {
  data() {
    return {
      scrollPin: null,
      scrollBar: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      const vm = this
      const scroller = this.$el
      this.scrollBar = Scrollbar.init(scroller, {})

      ScrollTrigger.scrollerProxy(scroller, {
        scrollTop(value) {
          if (arguments.length) {
            vm.scrollBar.scrollTop = value
          }
          return vm.scrollBar.scrollTop
        },
      })

      this.scrollBar.addListener(ScrollTrigger.update)

      ScrollTrigger.defaults({ scroller })

      const h = window.innerHeight
      const m = this.tlMultiplier

      // const sections = this.$el.querySelectorAll('section')
      const sectionWrap = this.$el.querySelectorAll('.section-wrapper')
      this.$nextTick(
        function () {
          this.scrollPin = ScrollTrigger.create({
            scroller,
            trigger: sectionWrap,
            pin: true,
            pinSpacing: false,
            start: 'top top',
            end: h * m,
            scrub: true,
            horizontal: false,
            // markers: true,
            pinType: 'transform',
          })

          if (this.scrollPin) {
            this.scrollPin.enable()
            this.scrollPin.refresh()
          }
        }.bind(this)
      )
    })
  },
  destroyed() {
    if (this.scrollPin) {
      this.scrollPin.disable()
    }
  },
}
