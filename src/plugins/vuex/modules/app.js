// Initial state
const state = {
  appDrawer: null,
  appTitle: null
}

// Getters
const getters = {
  title: (state) => state.appTitle,
}

// Actions
const actions = { }

// Mutations
const mutations = {
  DRAWER (state, payload) {
    state.appDrawer = payload
  },
  DRAWER_TOGGLE (state) {
    state.appDrawer = !state.appDrawer
  },
  TITLE (state, payload) {
    state.appTitle = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
