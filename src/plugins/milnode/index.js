import navigationDrawerItems from './../../data/layout/navigation-drawer-items'
import toolbarAccountItems from './../../data/layout/toolbar-account-items'
import toolbarLanguagesItems from './../../data/layout/toolbar-languages-items'

var mnOptions

const MilNodeCore = {
  install (Vue, options = {}) {
    if (this.installed) return
    this.installed = true

    // options.noBack, options.noAuth
    Vue.prototype.$noBack = options.noBack
    Vue.prototype.$noAuth = options.noAuth
    Vue.prototype.$enableTheme = options.enableTheme // FF - TODO: remove when stable

    // options.applicationName
    Vue.prototype.$applicationName = options.applicationName || 'APP_NAME'

    // options.navigationDrawerItems
    Vue.prototype.$navigationDrawerItems = [...(options.navigationDrawerItems || []), ...navigationDrawerItems]
      .filter(r => !options.noBack || !(r.options && r.options.backRequired))
      .filter(r => !options.noAuth || !(r.options && r.options.authRequired))

    // options.toolbarAccountItems
    Vue.prototype.$toolbarAccountItems = [...(options.toolbarAccountItems || []), ...toolbarAccountItems]

    // options.toolbarApplicationItems
    Vue.prototype.$toolbarApplicationItems = options.toolbarApplicationItems || []

    // options.toolbarLanguagesItems
    Vue.prototype.$toolbarLanguagesItems = [...(options.toolbarLanguagesItems || []), ...toolbarLanguagesItems]

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
