[![Build Status](https://amilochau.visualstudio.com/GitHub/_apis/build/status/amilochau.MilNode?branchName=master)](https://amilochau.visualstudio.com/GitHub/_build/latest?definitionId=16&branchName=master)
![Release Status](https://amilochau.vsrm.visualstudio.com/_apis/public/Release/badge/71e8ac76-9bb0-4248-a628-de3b3dcdecfa/1/1)

# MilNode package project

MilNode is a vue.js plugin based on vue-router, vuex, vuetify. MilNode provides a ready-to-use template for your vue.js applications, with the following features:
- Localization/Globalization
- Light/Dark theme selection
- User authentication
- API data retrievement
- Privacy and Cookies management (RGPD)
- HTML meta management (pages title) for SEO
- Lots of ready-to-use vue-js components, such as complete dialogs, table buttons, items lists...

MilNode works well with an ASP.NET Core API application, using MilNet packages. See MilNet documentation to know how to use MilNet template, with the following main features:
- APIs for About, Contact, Feedback, Help pages
- Error handling
- Open API documentation
- User authentication

# Contribute

If you want to propose a feature or to report a bug, please create a new issue.
If you want to propose code source changes, please follow the steps below.

1. Installation process
   From your local computer, clone the repository.
   - `npm install` to install all dependencies
   - `npm build-bundle` to build MilNode as a bundle

2. GitFlow
   Please follow the [GitHub Flow](https://guides.github.com/introduction/flow/):
   - Create a branch from `master`
   - Commit your code changes
   - Create a Pull Request to merge into the master `branch`

3. Conditions to complete Pull Request
   To ensure minimal quality, branch policies have been set up for pull requests to the master branch:
   - A new build must be validated before each pull request
   - A project administrator must validate the code changes

# Installation and Usage

1. Import MilNode with `npm install milnode`
2. Use MilNode library by using following snippet into your `main.js`:
   ```js
   import MilNode from 'milnode'
   Vue.use(MilNode)
   ```
3. Import MilNode styles (provided as `.stylus` file) into your `main.js` file:
   ```js
   import 'roboto-fontface/css/roboto/roboto-fontface.css'
   import 'material-design-icons-iconfont/dist/material-design-icons.css'
   import 'milnode/src/stylus/app.styl'
   ```
   Or, from your main `.stylus` project file:
   ```
   @import '~roboto-fontface/css/roboto/roboto-fontface.css'
   @import '~material-design-icons-iconfont/dist/material-design-icons.css'
   @import '~milnode/src/stylus/app.styl'
   ```
4. Add proper compilation settings into your `vue.config.js` file:
   ```js
   const webpack = require('webpack')

   module.exports = {
     transpileDependencies: [
       'milnode',
       'vuex-persist'
     ],
     productionSourceMap: false,
     configureWebpack: {
       plugins: [
         new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en|fr/)
       ]
     },
     chainWebpack: config => {
       config.plugins.delete('prefetch')
     }
   }
   ```

---
# Documentation

## Settings

The simplest way to install MilNode is by using int with the following snippet:
```js
import MilNode from 'milnode'
Vue.use(MilNode)
```

You can provide more information to MilNode, to adapt the default template to your needs:
```js
import MilNode from 'milnode'
Vue.use(MilNode, {
  // Your settings here
})
```

The following settings are available.

| Key | Default value | Description |
| --- | --- | --- |
| **`application`** | `{}` | **Main application information** |
| `application.name` | `'APP_NAME'` | Application name displayed on top toolbar and in Privacy page |
| `application.contact` | `'CONTACT_NAME'` | Contact name used on Contact and Privacy pages |
| **`layout`** | `{}` | **Layout information** |
| `layout.navigationDrawerItems` | `[]` | Items to add in navigation drawer; these will be added before template items (Help, Your feedback, Privacy, About) |
| `layout.accountItems` | `[]` | Items to add in account toolbar; these will be added before template items (Logout) |
| `layout.applicationItems` | `[]` | Items to add in applications toolbar; let this array empty or undefined to disable the applications toolbar |
| `layout.languagesItems` | `[]` | Languages to propose on settings toolbar |
| `layout.enableTheme` | `false` | Enable dark theme support on settings toolbar |
| **`services`** | `{}` | **Services (API) information** |
| `services.disabled` | `false` | Disable services support, and disabled Help, Feedback and About pages |
| `services.baseUrl` | `'http://mysite.com/api'` | Base URL for your API |
| **`router`** | `{}` | **Router information** |
| `router.mode` | `'history'` | Vue-router mode: default is `history`, a common setting is to set up router mode to `hash` |
| `router.routes` | `[]` | Routes to add; these will be added to template routes |
| `router.rootComponent` | `() => import('@/pages/Root.vue')` | Address to import your custom Root page as a vue.js component |
| `router.homeComponent` | `() => import('@/pages/home/Home.vue')` | Address to import your custom home page as a vue.js component |
| **`store`** | `{}` | **Store information** |
| `store.modules` | `[]` | Vuex modules to add; these will be added to template modules |
| **`i18n`** | `{}` | **Internationalization information** |
| `i18n.messages` | `{}` | Vue-i18n messages to add; these will be added to template messages |
| **`authentication`** | `{}` | **Users authentication information** |
| `authentication.disabled` | `false` | Disable user authentication |
| `authentication.userManagerSettings` | `{}` | Oidc-client user manager settings |

With all the settings defined, here is a complete example:
```js
import MilNode from 'milnode'
Vue.use(MilNode, {
  application: {
    name: 'APP_NAME',
    contact: 'CONTACT_NAME'
  },
  layout: {
    navigationDrawerItems: [],
    accountItems: [],
    applicationItems: [],
    languagesItems: [],
    enableTheme: false
  },
  services: {
    disabled: false,
    baseUrl: 'http://mysite.com/api'
  },
  router: {
    mode: 'history',
    routes: [],
    rootComponent: () => import('@/pages/Root.vue'),
    homeComponent: () => import('@/pages/home/Home.vue')
  },
  store: {
    modules: []
  },
  i18n: {
    messages: {}
  },
  authentication: {
    disabled: false,
    userManagerSettings: {}
  }
})
```
