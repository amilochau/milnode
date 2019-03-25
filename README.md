# MilNode package project

## Installation and Usage:
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

## List of components:
All components are registered with the Vue global and are available for use. You do not need to re-register them.

TODO...
