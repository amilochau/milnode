import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import mixin from 'mixin-deep'

import app from './modules/app'
import load from './modules/load'
import theme from './modules/theme'

var store

const VuexCore = {
  install (Vue, options = {}) {
    Vue.use(Vuex)

    // options.store
    let storeSettings = options.store || {}

    // Store user-defined state into localStorage
    const vuexLocal = new VuexPersistence({
      storage: window.localStorage,
      modules: [ 'theme', ...Object.getOwnPropertyNames(storeSettings.modules || []) ]
    })

    // Register vuex modules
    store = new Vuex.Store({
      modules: mixin({
        app,
        load,
        theme
      }, storeSettings.modules || []),
      plugins: [vuexLocal.plugin]
    })
  }
}

export default VuexCore
export { VuexCore, store }
