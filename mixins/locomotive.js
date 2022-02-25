export default {
  watch: {
    $route() {
      // console.log('route changed: ', this.$route)
      this.$locoScroll.update()
    },
  },
  mounted() {
    this.$nextTick(
      function () {
        this.$locoScroll.update()
        // console.log('mounted')
      }.bind(this)
    )
  },
  destroyed() {
    // console.log('destroy')
    this.$locoScroll.destroy()
    // window.removeEventListener('resize', this.onLmsResize)
  },
}
