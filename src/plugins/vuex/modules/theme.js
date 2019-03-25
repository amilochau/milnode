// Initial state
const state = {
  darkTheme: false
}

// Getters
const getters = {
  darkTheme: (state) => state.darkTheme
}

// Actions
const actions = { }

// Mutations
const mutations = {
  THEME (state, payload) {
    state.darkTheme = payload
  },
  THEME_TOGGLE (state) {
    state.darkTheme = !state.darkTheme
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
