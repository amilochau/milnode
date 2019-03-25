import navigationDrawerItems from './../../data/layout/navigation-drawer-items'
import toolbarAccountItems from './../../data/layout/toolbar-account-items'
import toolbarLanguagesItems from './../../data/layout/toolbar-languages-items'

var mnOptions

const MilNodeCore = {
  install (Vue, options = {}) {
    if (this.installed) return
    this.installed = true

    // options.application
    let applicationSettings = options.application || {}
    Vue.prototype.$applicationName = applicationSettings.name || 'APP_NAME'
    Vue.prototype.$applicationContact = applicationSettings.contact || 'CONTACT_NAME'

    // options.layout
    let layoutSettings = options.layout || {}
    Vue.prototype.$navigationDrawerItems = [...(layoutSettings.navigationDrawerItems || []), ...navigationDrawerItems]
      .filter(r => !options.noBack || !(r.options && r.options.backRequired))
      .filter(r => !options.noAuth || !(r.options && r.options.authRequired))
    Vue.prototype.$toolbarAccountItems = [...(layoutSettings.accountItems || []), ...toolbarAccountItems]
    Vue.prototype.$toolbarApplicationItems = layoutSettings.applicationItems || []
    Vue.prototype.$toolbarLanguagesItems = [...(layoutSettings.languagesItems || []), ...toolbarLanguagesItems]

    // options.noBack, options.noAuth
    Vue.prototype.$noBack = options.noBack
    Vue.prototype.$noAuth = options.noAuth
    Vue.prototype.$enableTheme = options.enableTheme // FF - TODO: remove when stable

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
    registerComponents(options.components)

    // options.services.baseUrl
    // options.services.mgrSettings
    mnOptions = {
      services: {
        baseUrl: options.services.baseUrl,
        mgrSettings: options.services.mgrSettings
      }
    }
  }
}

export default MilNodeCore
export { MilNodeCore, mnOptions }
