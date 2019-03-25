import VueI18n from 'vue-i18n'
import moment from 'moment'
import numeral from 'numeral'
import mixin from 'mixin-deep'

import en from './../../locale/en'
import fr from './../../locale/fr'

var i18n

const I18nCore = {
  install (Vue, options = {}) {
    Vue.use(VueI18n)

    moment.locale('en')
    numeral.locale('en')

    // options.messages
    i18n = new VueI18n({
      locale: 'en',
      fallbackLocale: 'en',
      messages: mixin({ en, fr }, options.messages)
    })
  }
}

export default I18nCore
export { I18nCore, i18n }
