import BaseService from './base.service'

export default class CrudService extends BaseService {
  constructor (controller) {
    super()
    this.serviceApi = `/${controller}`
  }

  async getAll (settings) {
    return this.get('', settings)
  }

  async create (model, settings) {
    return this.post('', model, settings)
  }

  async getById (settings) {
    return this.get(`/${settings.id}`, settings)
  }

  async edit (model, settings) {
    return this.post(`/${settings.id}`, model, settings)
  }

  async deleteById (settings) {
    return this.delete(`/${settings.id}`, settings)
  }
}
