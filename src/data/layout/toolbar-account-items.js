export default [
  { event: 'logout', title: 'layout.account.logout', icon: 'logout', policies: ['user/logged'] },
  { divider: true, policies: ['user/logged'] },
  { name: 'home/Help', title: 'layout.account.help', icon: 'help' },
  { name: 'home/Feedback', title: 'layout.account.feedback', icon: 'feedback' }
]
