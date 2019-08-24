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

    // options.i18n
    let i18nSettings = options.i18n || {}

    let defaultLanguage = 'en'
    // Determine default language from browser culture
    if (i18nSettings.useDefaultBrowser) {
      var userLang = navigator.language || navigator.userLanguage
      if (userLang) {
        var userLanguage = userLang.split('-')[0]
        if (!userLanguage.localeCompare('fr', undefined, { sensitivity: 'base' })) {
          defaultLanguage = 'fr'
        }
        // Else keep English as default language
      }
    }

    moment.locale(defaultLanguage)
    numeral.locale(defaultLanguage)

    i18n = new VueI18n({
      locale: defaultLanguage,
      fallbackLocale: defaultLanguage,
      messages: mixin({ en, fr }, i18nSettings.messages || {})
    })
  }
}

export default I18nCore
export { I18nCore, i18n }
