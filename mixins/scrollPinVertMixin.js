import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Scrollbar from 'smooth-scrollbar'

gsap.registerPlugin(ScrollTrigger)

export default {
  data() {
    return {
      scrollPinVert: null,
      scrollBar: null,
    }
  },
  mounted() {
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

    const sections = this.$el.querySelectorAll('.pinSectionVert')
    this.$nextTick(
      function () {
        gsap.utils.toArray(sections).forEach((section) => {
          this.scrollPinVert = ScrollTrigger.create({
            scroller,
            trigger: section,
            pin: true,
            start: 'top top',
            scrub: true,
            end: '+=800',
            markers: true,
          })
        })
        this.scrollPinVert.enable()
        this.scrollPinVert.refresh()
      }.bind(this)
    )
  },
  destroyed() {
    this.scrollPinVert.disable()
  },
}
