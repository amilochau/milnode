[![Build Status](https://amilochau.visualstudio.com/GitHub/_apis/build/status/amilochau.MilNode?branchName=master)](https://amilochau.visualstudio.com/GitHub/_build/latest?definitionId=16&branchName=master)

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

1. Just use `npm install milnode`
2. Now you can use MilNode library by using following snippet:
```
import MilNode from 'milnode'

Vue.use(MilNode, {
  noBack: false,
  noAuth: false,
  applicationName: 'YOUR_APP_NAME',
  navigationDrawerItems,
  toolbarAccountItems,
  toolbarApplicationItems,
  toolbarLanguagesItems,
  messages,
  router: {
    mode: 'hash' // 'history' by default
    routes,
    rootComponent: () => import('@/pages/Root.vue'),
    homeComponent: () => import('@/pages/home/Home.vue')
  },
  store: {
    modules
  },
  services: {
    baseUrl: 'YOUR_BACK_URL/api',
    mgrSettings
  },
  enableTheme: true
})
```

# Documentation

## Settings

The simplest way to install MilNode is by using int with the following snippet:
```
import MilNode from 'milnode'

Vue.use(MilNode)
```

You can provide more information to MilNode, to adapt the default template to your needs.

## Features

All components are registered with the Vue global and are available for use. You do not need to re-register them.
