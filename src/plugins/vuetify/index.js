import Vuetify from 'vuetify'
import fr from 'vuetify/es5/locale/fr'

const VuetifyCore = {
  install (Vue, options = {}) {
    Vue.use(Vuetify, {
      lang: {
        locales: { fr }
      },
      iconfont: 'md'
    })
  }
}

export default VuetifyCore
