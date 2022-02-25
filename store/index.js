export const state = () => ({
  loco: {},
  homeNavItem: '',
})

export const mutations = {
  updateLoco(state) {
    state.loco = state
  },
  updateHomeNavItem(state, payload) {
    state.homeNavItem = payload
  },
}
