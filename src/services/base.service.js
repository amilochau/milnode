import axios from 'axios'
import { EventBus } from './../event-bus'
import { i18n } from './../plugins/i18n'
import { store } from './../plugins/vuex'
import { router } from './../plugins/router'
import { mnOptions } from './../plugins/milnode'
import { UserManager } from 'oidc-client'

export default class BaseService {
  constructor () {
    this.serviceApi = ''
  }

  userManager () {
    return new UserManager(mnOptions.services.mgrSettings)
  }

  analyzeError (error) {
    if (error.response) {
      // The request was made and the server responded with a status code that falls out of the range of 2xx
      if (error.response.status === 401) {
        // Unauthorized error: user must log in
        store.dispatch('user/authLogout')
        store.dispatch('load/startLoading')
        if (window.location.pathname) {
          this.userManager().signinRedirect({ state: window.location.pathname })
        } else {
          this.userManager().signinRedirect()
        }
        return { message: i18n.t('errors.notAuthorized') }
      } else if (error.response.status === 403) {
        // Forbidden error: user has no right
        router.push({ name: 'Forbidden' })
        return { message: i18n.t('errors.notAuthorized') }
      } else if (error.response.status === 404) {
        // Not found error: resource does not exist
        router.push({ name: 'NotFound' })
        return { message: i18n.t('errors.notFound') }
      } else if (error.response.status === 400) {
        // Validation error
        let errorMessages = {}
        if (error.response.data && error.response.data.title) {
          errorMessages.message = error.response.data.title
        }
        if (error.response.data && error.response.data.errors) {
          errorMessages.details = ''
          for (const key in error.response.data.errors) {
            if (error.response.data.errors[key]) {
              errorMessages.details += `${key} - ${error.response.data.errors[key]}\n`
            }
          }
        }
        errorMessages.message = errorMessages.message === '' ? null : errorMessages.message
        if (errorMessages.message) {
          return errorMessages
        }
      } else if (error.response.status === 500) {
        // Server error
        return { message: i18n.t('errors.serverError') }
      } else if (error.response.headers['Application-Error']) {
        return { message: error.response.headers['Application-Error'] }
      }
    } else if (error.request) {
      // The request was made but no response was received
    } else {
      // Something happened in setting up the request that triggered an Error
    }
    return { message: i18n.t('errors.serverError') }
  }

  getAxiosUrl (url) {
    return `${mnOptions.services.baseUrl}${this.serviceApi}${url}`
  }

  async getAxiosSettings (isFormData) {
    let headers = {}
    if (isFormData) {
      headers['Content-Type'] = 'multipart/form-data'
    }
    try {
      const user = await this.userManager().getUser()
      headers['Authorization'] = `Bearer ${user.access_token}`
    } catch (error) {
      // Not logged in? No problem!
    }
    return { headers: headers }
  }

  async get (url, settings) {
    if (settings.load) store.dispatch('load/startLoading')
    const axiosSettings = await this.getAxiosSettings()
    try {
      const result = await axios.get(this.getAxiosUrl(url), axiosSettings)
      if (settings.load) store.dispatch('load/stopLoading')
      return result.data
    } catch (error) {
      let errorMessages = this.analyzeError(error)
      if (settings.load) store.dispatch('load/stopLoading')
      if (settings.errors) { EventBus.$emit('error', errorMessages) }
      throw errorMessages
    }
  }

  async post (url, data, settings) {
    if (settings.load) store.dispatch('load/startLoading')
    const axiosSettings = await this.getAxiosSettings()
    try {
      const result = await axios.post(this.getAxiosUrl(url), data, axiosSettings)
      if (settings.load) store.dispatch('load/stopLoading')
      return result.data
    } catch (error) {
      let errorMessages = this.analyzeError(error)
      if (settings.load) store.dispatch('load/stopLoading')
      if (settings.errors) { EventBus.$emit('error', errorMessages) }
      throw errorMessages
    }
  }

  async put (url, data, settings) {
    if (settings.load) store.dispatch('load/startLoading')
    const axiosSettings = await this.getAxiosSettings()
    try {
      const result = await axios.put(this.getAxiosUrl(url), data, axiosSettings)
      if (settings.load) store.dispatch('load/stopLoading')
      return result.data
    } catch (error) {
      let errorMessages = this.analyzeError(error)
      if (settings.load) store.dispatch('load/stopLoading')
      if (settings.errors) { EventBus.$emit('error', errorMessages) }
      throw errorMessages
    }
  }

  async delete (url, settings) {
    if (settings.load) store.dispatch('load/startLoading')
    const axiosSettings = await this.getAxiosSettings()
    try {
      const result = await axios.delete(this.getAxiosUrl(url), axiosSettings)
      if (settings.load) store.dispatch('load/stopLoading')
      return result.data
    } catch (error) {
      let errorMessages = this.analyzeError(error)
      if (settings.load) store.dispatch('load/stopLoading')
      if (settings.errors) { EventBus.$emit('error', errorMessages) }
      throw errorMessages
    }
  }

  async getFile (url, settings) {
    if (settings.load) store.dispatch('load/startLoading')
    const axiosSettings = await this.getAxiosSettings(true)
    axiosSettings.responseType = 'blob'
    try {
      const result = await axios.get(this.getAxiosUrl(url), axiosSettings)

      // Create file into browser
      const fileUrl = window.URL.createObjectURL(new Blob([result.data]))
      const link = document.createElement('a')
      link.href = fileUrl
      const fileName = settings.fileName || 'file'
      link.setAttribute('download', fileName)
      document.body.appendChild(link)
      if (settings.load) store.dispatch('load/stopLoading')
      link.click()
    } catch (error) {
      let errorMessages = this.analyzeError(error)
      if (settings.load) store.dispatch('load/stopLoading')
      if (settings.errors) { EventBus.$emit('error', errorMessages) }
      throw errorMessages
    }
  }

  async postFile (url, file, settings) {
    if (settings.load) store.dispatch('load/startLoading')
    const axiosSettings = await this.getAxiosSettings(true)
    let formData = new FormData()
    formData.append('file', file)
    try {
      const result = await axios.post(this.getAxiosUrl(url), formData, axiosSettings)
      if (settings.load) store.dispatch('load/stopLoading')
      return result.data
    } catch (error) {
      let errorMessages = this.analyzeError(error)
      if (settings.load) store.dispatch('load/stopLoading')
      if (settings.errors) { EventBus.$emit('error', errorMessages) }
      throw errorMessages
    }
  }

  async postFileAndData (url, file, data, settings) {
    if (settings.load) store.dispatch('load/startLoading')
    const axiosSettings = await this.getAxiosSettings(true)
    let formData = new FormData()
    formData.append('file', file)
    formData.append('data', JSON.stringify(data))
    try {
      const result = await axios.post(this.getAxiosUrl(url), formData, axiosSettings)
      if (settings.load) store.dispatch('load/stopLoading')
      return result.data
    } catch (error) {
      let errorMessages = this.analyzeError(error)
      if (settings.load) store.dispatch('load/stopLoading')
      if (settings.errors) { EventBus.$emit('error', errorMessages) }
      throw errorMessages
    }
  }
}
