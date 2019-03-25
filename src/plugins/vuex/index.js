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

    const vuexLocal = new VuexPersistence({
      storage: window.localStorage,
      modules: [ 'theme', ...Object.getOwnPropertyNames(options.store.modules) ] // Only store user-defined state into localStorage
    })

    // options.storeModules
    store = new Vuex.Store({
      modules: mixin({
        app,
        load,
        theme
      }, options.store.modules),
      plugins: [vuexLocal.plugin]
    })
  }
}

export default VuexCore
export { VuexCore, store }
