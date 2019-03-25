import About from './../pages/home/About'
import Feedback from './../pages/home/Feedback'
import Help from './../pages/home/Help'
import Privacy from './../pages/home/Privacy'

import Callback from './../pages/Callback'
import SilentCallback from './../pages/SilentCallback'
import Forbidden from './../pages/Forbidden'
import NotFound from './../pages/NotFound'

export default [
  { name: 'home/About', path: 'About', component: About, options: { backRequired: true } },
  { name: 'home/Feedback', path: 'Feedback', component: Feedback, options: { backRequired: true } },
  { name: 'home/Help', path: 'Help', component: Help, options: { backRequired: true } },
  { name: 'home/Privacy', path: 'Privacy', component: Privacy },

  { name: 'Callback', path: 'callback', component: Callback, options: { authRequired: true } },
  { name: 'SilentCallback', path: 'silent-callback', component: SilentCallback, options: { authRequired: true } },
  { name: 'Forbidden', path: 'Forbidden', component: Forbidden },
  { name: 'NotFound', path: '*', component: NotFound }
]
