// Initial state
const state = {
  progress: {
    loading: false,
    indeterminate: true
  }
}

// Getters
const getters = {
  progress: (state) => state.progress,
  loading: (state) => state.progress.loading
}

// Actions
const actions = {
  startLoading ({ commit }) {
    commit('LOAD_START')
  },
  stopLoading ({ commit }) {
    commit('LOAD_STOP')
  }
}

// Mutations
const mutations = {
  LOAD_START (state) {
    state.progress.loading = true
  },
  LOAD_STOP (state) {
    state.progress.loading = false
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
