// Initial state
const state = {
  appDrawer: null
}

// Getters
const getters = { }

// Actions
const actions = { }

// Mutations
const mutations = {
  DRAWER (state, payload) {
    state.appDrawer = payload
  },
  DRAWER_TOGGLE (state) {
    state.appDrawer = !state.appDrawer
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
