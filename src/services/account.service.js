import BaseService from './base.service'
import { store } from './../plugins/vuex'

class AccountService extends BaseService {
  constructor () {
    super()
    this.serviceApi = '/account'
  }

  static get Instance () {
    return this.instance || (this.instance = new this())
  }

  async login (redirectUrl) {
    store.dispatch('load/startLoading')
    return this.userManager().signinRedirect({ state: redirectUrl })
  }

  async logout () {
    store.dispatch('load/startLoading')
    return this.userManager().signoutRedirect()
  }

  async getUser () {
    return this.userManager().getUser()
  }

  async isLogged () {
    let user = await this.getUser()
    return user && !user.expired
  }
}

export default AccountService.Instance
