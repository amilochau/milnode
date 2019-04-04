import navigationDrawerItems from './../../data/layout/navigation-drawer-items'
import toolbarAccountItems from './../../data/layout/toolbar-account-items'
import toolbarLanguagesItems from './../../data/layout/toolbar-languages-items'
import homePages from './../../data/pages/home'

import icons from './icons'

var mnOptions

const MilNodeCore = {
  install (Vue, options = {}) {
    if (this.installed) return
    this.installed = true

    // options.application
    let applicationSettings = options.application || {}
    Vue.prototype.$applicationName = applicationSettings.name || 'APP_NAME'
    Vue.prototype.$applicationContact = applicationSettings.contact || 'CONTACT_NAME'

    // options.services
    let servicesSettings = options.services || {}
    Vue.prototype.$noBack = servicesSettings.disabled || false
    Vue.prototype.$baseUrl = servicesSettings.baseUrl || 'http://mysite.com/api'

    // options.authentication
    let authenticationSettings = options.authentication || {}
    Vue.prototype.$noAuth = authenticationSettings.disabled || false
    Vue.prototype.$mgrSettings = authenticationSettings.userManagerSettings || {}

    // options.layout
    let layoutSettings = options.layout || {}
    Vue.prototype.$icons = icons(layoutSettings.iconfont)

    function transformData (items) {
      return items.map(x => {
        x.icon = Vue.prototype.$icons[x.icon]
        return x
      })
    }

    Vue.prototype.$navigationDrawerItems = [...(layoutSettings.navigationDrawerItems || []), ...transformData(navigationDrawerItems)]
      .filter(r => !Vue.prototype.$noBack || !(r.options && r.options.backRequired))
      .filter(r => !Vue.prototype.$noAuth || !(r.options && r.options.authRequired))
    Vue.prototype.$toolbarAccountItems = [...(layoutSettings.accountItems || []), ...transformData(toolbarAccountItems)]
    Vue.prototype.$toolbarApplicationItems = layoutSettings.applicationItems || []
    Vue.prototype.$toolbarLanguagesItems = [...(layoutSettings.languagesItems || []), ...transformData(toolbarLanguagesItems)]
    Vue.prototype.$enableTheme = layoutSettings.enableTheme
    Vue.prototype.$homePages = transformData(homePages).filter(r => !Vue.prototype.$noBack || !(r.options && r.options.backRequired))

    function registerComponents (components) {
      if (components) {
        for (const key in components) {
          const component = components[key]
          if (component && !registerComponents(component.$_milnode_subcomponents)) {
            Vue.component(`Milnode${key}`, component)
          }
        }
        return true
      }
      return false
    }

    // options.components
    registerComponents(options.components || [])

    // MilNode options
    mnOptions = {
      services: {
        baseUrl: Vue.prototype.$baseUrl,
        mgrSettings: Vue.prototype.$mgrSettings
      }
    }
  }
}

export default MilNodeCore
export { MilNodeCore, mnOptions }
