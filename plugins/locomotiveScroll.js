// import Vue from 'vue'
import LocomotiveScroll from 'locomotive-scroll'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lmS = null

const scroller = document.querySelector('#js-scroll')

lmS = new LocomotiveScroll({
  el: scroller,
  smooth: true,
  direction: 'horizontal',
  gestureDirection: 'both',
  // TODO if smooth on tab and mobile turn .html hack on in global scss
  tablet: {
    smooth: true,
    direction: 'horizontal',
  },
  smartphone: {
    smooth: true,
    direction: 'horizontal',
  },
  reloadOnContextChange: true,
})

lmS.on('scroll', ScrollTrigger.update)

// const isDevice =
//   lmS.options.isMobile ||
//   lmS.options.isTablet

ScrollTrigger.scrollerProxy(scroller, {
  scrollLeft(value) {
    return arguments.length
      ? lmS.scrollTo(value, 0, 0)
      : lmS.scroll.instance.scroll.x
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

ScrollTrigger.addEventListener('refresh', () => lmS.update())
ScrollTrigger.refresh()

gsap.registerPlugin(ScrollTrigger)

export default (context, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  // console.log(context)
  inject('locoScroll', lmS)
}
