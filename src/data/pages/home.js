import Vue from 'vue'

const homePages = [
  { to: { name: 'home/Help' }, icon: 'help', title: 'pages.home.help.title', options: { backRequired: true } },
  { to: { name: 'home/Feedback' }, icon: 'feedback', title: 'pages.home.feedback.title', options: { backRequired: true } },
  { to: { name: 'home/Privacy' }, icon: 'gavel', title: 'pages.home.privacy.title' },
  { to: { name: 'home/About' }, icon: 'copyright', title: 'pages.home.about.title', options: { backRequired: true } }
].filter(r => !Vue.prototype.$noBack || !(r.options && r.options.backRequired))

export default homePages
