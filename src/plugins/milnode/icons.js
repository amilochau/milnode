
const MILNODE_ICONS_MATERIAL = {
  'delete': 'delete',
  'edit': 'edit',
  'add': 'add',
  'search': 'search',
  'refresh': 'refresh',
  'check': 'check',
  'close': 'close',
  'place': 'place',
  'email': 'email',
  'link': 'link',
  'domain': 'domain',
  'home': 'home',
  'more_vert': 'more_vert',
  'account_circle': 'account_circle',
  'face': 'face',
  'login': 'power_settings_new',
  'logout': 'power_settings_new',
  'apps': 'apps',
  'gavel': 'gavel',
  'settings': 'settings',
  'info': 'info',
  'expand_less': 'expand_less',
  'expand_more': 'expand_more',
  'web': 'web',
  'person_pin': 'person_pin',
  'room': 'room',
  'hot_tub': 'hot_tub',
  'help': 'help',
  'feedback': 'feedback',
  'copyright': 'copyright',
  snackbar: {
    'info': 'info',
    'success': 'check_circle',
    'warning': 'priority_high',
    'error': 'warning'
  }
}

const MILNODE_ICONS_MDI = {
  'delete': 'mdi-delete',
  'edit': 'mdi-pencil',
  'add': 'mdi-add',
  'search': 'mdi-search',
  'refresh': 'mdi-refresh',
  'check': 'mdi-check',
  'close': 'mdi-close',
  'place': 'mdi-place',
  'email': 'mdi-email',
  'link': 'mdi-link',
  'domain': 'mdi-domain',
  'home': 'mdi-home',
  'more_vert': 'mdi-more_vert',
  'account_circle': 'mdi-account_circle',
  'face': 'mdi-face',
  'login': 'mdi-power_settings_new',
  'logout': 'mdi-power_settings_new',
  'apps': 'mdi-apps',
  'gavel': 'mdi-gavel',
  'settings': 'mdi-settings',
  'info': 'mdi-info',
  'expand_less': 'mdi-expand_less',
  'expand_more': 'mdi-expand_more',
  'web': 'mdi-web',
  'person_pin': 'mdi-person_pin',
  'room': 'mdi-room',
  'hot_tub': 'mdi-hot_tub',
  'help': 'mdi-help',
  'feedback': 'mdi-feedback',
  'copyright': 'mdi-copyright',
  snackbar: {
    'info': 'mdi-info',
    'success': 'mdi-check_circle',
    'warning': 'mdi-priority_high',
    'error': 'mdi-warning'
  }
}

const MILNODE_ICONS_FONTAWESOME4 = {

}

const MILNODE_ICONS_FONTAWESOME = {

}

export function convertToComponentDeclarations (component, iconSet) {
  const result = {}

  for (const key in iconSet) {
    result[key] = {
      component,
      props: {
        icon: (iconSet[key]).split(' fa-')
      }
    }
  }

  return result
}

const iconSets = {
  md: MILNODE_ICONS_MATERIAL,
  mdi: MILNODE_ICONS_MDI,
  fa: MILNODE_ICONS_FONTAWESOME,
  fa4: MILNODE_ICONS_FONTAWESOME4,
  faSvg: convertToComponentDeclarations('font-awesome-icon', MILNODE_ICONS_FONTAWESOME)
}

export default function icons (iconfont = 'md') {
  return Object.assign({}, iconSets[iconfont] || iconSets.md)
}
