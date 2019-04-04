import Vuetify from 'vuetify'
import fr from 'vuetify/es5/locale/fr'

const VuetifyCore = {
  install (Vue, options = {}) {
    // options.layout
    let layoutSettings = options.layout || {}

    Vue.use(Vuetify, {
      lang: {
        locales: { fr }
      },
      iconfont: layoutSettings.iconfont || 'md'
    })
  }
}

export default VuetifyCore
