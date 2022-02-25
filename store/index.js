export const state = () => ({
  homeNavItem: '',
  loaded: false,
})

export const mutations = {
  updateHomeNavItem(state, payload) {
    state.homeNavItem = payload
  },
  hasLoaded(state) {
    state.loaded = true
  },
}

export const getters = {
  siteHasLoaded(state) {
    return state.loaded
  },
}
