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
```
import MilNode from 'milnode'
Vue.use(MilNode)
```
3. Import MilNode styles (provided as `.stylus` file) into your `main.js` file:
```
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
```
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

# Documentation

## Settings

The simplest way to install MilNode is by using int with the following snippet:
```
import MilNode from 'milnode'
Vue.use(MilNode)
```

You can provide more information to MilNode, to adapt the default template to your needs:
```
import MilNode from 'milnode'
Vue.use(MilNode, {
  // Your settings here
})
```

The following settings are available:
<table>
  <thead>
    <tr>
      <th>Key</th>
      <th>Default value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
      `application`
      </td>
      <td>
      ```
      {
        name: 'APP_NAME',
        contact: 'CONTACT_NAME'
      }
      ```
      </td>
      <td>
      Main application information:
      <ul>
        <li>`name`: application name displayed on top toolbar and in Privacy page</li>
        <li>`contact`: contact name used on Contact and Privacy pages</li>
      </ul>
      </td>
    </tr>
    <tr>
      <td>
      `layout`
      </td>
      <td>
      ```
      {
        navigationDrawerItems: [],
        accountItems: [],
        applicationItems: [],
        languagesItems: [],
        enabledTheme: false
      }
      ```
      </td>
      <td>
      Layout information:
      <ul>
        <li>`navigationDrawerItems`: items to add in navigation drawer; these will be added before template items (Help, Your feedback, Privacy, About)</li>
        <li>`accountItems`: items to add in account toolbar; these will be added before template items (Logout)</li>
        <li>`applicationItems`: items to add in applications toolbar; let this array empty or undefined to disable the applications toolbar</li>
        <li>`languagesItems`: languages to propose on settings toolbar</li>
        <li>`enabledTheme`: enabled dark theme support on settings toolbar</li>
      </ul>
      </td>
    </tr>
    <tr>
      <td>
      `services`
      </td>
      <td>
      ```
      {
        disabled: false,
        baseUrl: 'http://mysite.com/api'
      }
      ```
      </td>
      <td>
      Services (API) information:
      <ul>
        <li>`disabled`: disable services support, and disabled Help, Feedback and About pages</li>
        <li>`baseUrl`: base URL for your API</li>
      </ul>
      </td>
    </tr>
    <tr>
      <td>
      `router`
      </td>
      <td>
      ```
      {
        mode: 'history',
        routes: [],
        rootComponent: () => import('@/pages/Root.vue'),
        homeComponent: () => import('@/pages/home/Home.vue')
      }
      ```
      </td>
      <td>
      Router information:
      <ul>
        <li>`mode`: vue-router mode: default is `history`, a common setting is to set up router mode to `hash`</li>
        <li>`routes`: routes to add; these will be added to template routes</li>
        <li>`rootComponent`: address to import your custom Root page as a vue.js component</li>
        <li>`homeComponent`: address to import your custom home page as a vue.js component</li>
      </ul>
      </td>
    </tr>
    <tr>
      <td>
      `store`
      </td>
      <td>
      ```
      {
        modules: []
      }
      ```
      </td>
      <td>
      Store information:
      <ul>
        <li>`modules`: vuex modules to add; these will be added to template modules</li>
      </ul>
      </td>
    </tr>
    <tr>
      <td>
      `i18n`
      </td>
      <td>
      ```
      {
        messages: {}
      }
      ```
      </td>
      <td>
      Internationalization information:
      <ul>
        <li>`messages`: vue-i18n messages to add; these will be added to template messages</li>
      </ul>
      </td>
    </tr>
    <tr>
      <td>
      `authentication`
      </td>
      <td>
      ```
      {
        disabled: false,
        userManagerSettings: {}
      }
      ```
      </td>
      <td>
      Users authentication information:
      <ul>
        <li>`disabled`: disable user authentication</li>
        <li>`userManagerSettings`: oidc-client user manager settings</li>
      </ul>
      </td>
    </tr>
  </tbody>
</table>

With all the settings defined, here is a complete example:
```
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
    enabledTheme: false
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

## Features

All components are registered with the Vue global and are available for use. You do not need to re-register them.
