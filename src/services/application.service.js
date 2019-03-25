import BaseService from './base.service'

class ApplicationService extends BaseService {
  constructor () {
    super()
    this.serviceApi = '/application'
  }

  static get Instance () {
    return this.instance || (this.instance = new this())
  }

  async getApplicationInformation (settings) {
    return this.get('', settings)
  }

  async getContacts (settings) {
    return this.get('/contacts', settings)
  }

  async seedDatabase (settings) {
    return this.post('/seeddatabase', null, settings)
  }

  async sendFeedback (model, settings) {
    return this.post('/Feedback', model, settings)
  }
}

export default ApplicationService.Instance
