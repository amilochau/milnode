export default {
  feedback: {
    title: 'Your feedback',
    catch: 'Your opinion is precious!',
    explain: 'Share your feedback with us. All your comments and ratings challenge us to continuously improve WebOptis.',
    comment: 'Comment',
    send: 'Send your feedback',
    privacy: 'Your feedback is anonymous. No personal data is linked with your rating and comment.',
    success: 'Thanks for your feedback!'
  },
  buttons: {
    delete: 'Delete',
    edit: 'Edit',
    read: 'Read',
    newItem: 'New item',
    refresh: 'Refresh'
  },
  dialogs: {
    cancel: 'Cancel',
    save: 'Save',
    delete: 'Delete',
    deleteItem: 'Delete item',
    deleteItemDesc: 'This will delete this item.',
    itemName: 'Item name:'
  },
  errors: {
    notAuthorized: 'Not authorized',
    notFound: 'Not found',
    serverError: 'Server error'
  },
  fields: {
    search: 'Search'
  },
  snackbars: {
    close: 'Close',
    error: 'Error',
    icons: {
      info: 'info',
      success: 'check_circle',
      warning: 'priority_high',
      error: 'warning'
    }
  },
  layout: {
    drawer: {
      close: 'Close',
      feedback: 'Your feedback',
      privacy: 'Privacy',
      help: 'Help',
      about: 'About'
    },
    toolbar: {
      toggleMenu: 'Toggle menu'
    },
    privacy: {
      cookiesText: 'This website uses cookies to work.',
      cookiesButton: 'Read privacy policy',
      cookiesAccept: 'Accept'
    },
    account: {
      login: 'Login',
      title: 'Account',
      logout: 'Logout',
      help: 'Help',
      feedback: 'Your feedback'
    },
    applications: {
      title: 'Applications'
    },
    settings: {
      title: 'Settings',
      languages: {
        title: 'Languages',
        english: 'English',
        french: 'French'
      },
      display: {
        title: 'Display',
        darkMode: 'Dark mode'
      }
    }
  },
  meta: {
    'home/About': { 'title': 'About', 'description': 'About page' },
    'home/Feedback': { 'title': 'Feedback', 'description': 'Feedback page' },
    'home/Help': { 'title': 'Help', 'description': 'Help page' },
    'home/Privacy': { 'title': 'Privacy', 'description': 'Privacy page' },
    'Callback': { 'title': 'Back to application...', 'description': 'Callback page' },
    'Forbidden': { 'title': 'Forbidden', 'description': 'Page for access to forbidden resources' },
    'NotFound': { 'title': 'Not found', 'description': 'Page for access to not found resources' },
    'SilentCallback': { 'title': 'Back to application...', 'description': 'Callback page' }
  },
  pages: {
    forbidden: {
      title: 'Whoops, 403',
      description: 'You don\'t have enough privileges to access this page',
      buttonText: 'Get me out of here!'
    },
    notFound: {
      title: 'Whoops, 404',
      description: 'The page you were looking for does not exist',
      buttonText: 'Get me out of here!'
    },
    home: {
      about: {
        about: 'About',
        applicationInformation: 'Application information',
        developedBy: 'Developed by {contact}',
        releaseInformation: 'Release information'
      },
      feedback: {
        title: 'Your feedback',
        catch: 'Your opinion is precious!',
        explain: 'Share your feedback with us. All your comments and ratings challenge us to continuously improve WebOptis.',
        comment: 'Comment',
        send: 'Send your feedback',
        privacy: 'Your feedback is anonymous. No personal data is linked with your rating and comment.',
        success: 'Thanks for your feedback!'
      },
      help: {
        title: 'Help',
        business: {
          title: 'Business support',
          description: 'If you need help to use this application, please contact our team.',
          linkText: 'Help community'
        },
        technical: {
          title: 'Technical support',
          description: 'If you detect a bug or need a new feature, don\'t hesitate to contact us.'
        }
      },
      privacy: {
        h1: 'Privacy',
        header11: 'Storage and removal',
        text11: 'Personal data are stored in the database, on the server where {name} has been installed. The physical localization of the server determines the legal framework applicable to your personal data. The information stored in the database is mapped to unique identifiers: modification of that information, including your account name, does not compromise the data integrity nor its confidentiality.',
        header21: 'Law # 78-17 from January 6th, 1978 on computerized treatments, files and freedom',
        text21: 'Law # 78-17 from January 6th, 1978 on computerized treatments, files and freedom is applicable to our handling of your personal data in {name}. The applicable text is available from the legifrance.gouv.fr web site.',
        header22: 'Data handling general purpose',
        text22: 'Collecting your personal data is justified by the operation of the {name} application. {name} allows you to search, look at, comment, discuss fuel blends data centered topics. Most of the collected data is directly related to the handling of the functionalities associated to those needs. Those data are stored as soon as you start using the application. Connection, navigation and error information provide us ways to make statistical analysis of {name} usage and operation.',
        header23: 'People affected',
        text23: 'Only registered users of {name} are affected by personal data collection: all collected data are associated to a registered user account.',
        header24: 'Recipient of the data',
        text24: 'No personal data is transmitted to nor used by any third party. Each registered user (having a personal user account) can also access his own information. An anonymous user can\'t access any information from other users.',
        header25: 'Supervision of the data handling',
        text25: 'Your personal data is handled by {name} under the supervision of {contact}. Storage and transfer of your personal data is done under the supervision of the site providing the server on which {name} is installed and the transfer medium.',
        header26: 'Retention period',
        text26: 'Your personal data are kept as long as your {name} user account exists. Your personal data are erased when your user account is suppressed, or when {name} is uninstalled from the server. Some personal data can be removed manually by user action.',
        header27: 'Access to the data',
        text27: 'Every {name} user is granted the right to get access to, modify, correct or remove their own personal data.',
        header28: 'Opposition to the handling of the data',
        text28: 'The removal of your user account gives you full ability to oppose the {name} handling of your personal data. You can also ask the person supervising {name} handling of the data to proceed with the removal of your user account. You might oppose some specific ways of handling your data through configuration options available in your user parameters.'
      }
    }
  }
}
