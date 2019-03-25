class ContactUser {
  constructor () {
    this.email = null
    this.firstName = null
    this.lastName = null
    this.siteName = null
  }
}

class ContactCategory {
  constructor () {
    this.users = []
    this.email = null
    this.place = null
    this.url = null
  }
}

class Contacts {
  constructor () {
    this.business = new ContactCategory()
    this.technical = new ContactCategory()
  }
}

export { ContactUser, ContactCategory, Contacts }
