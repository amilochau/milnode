<template>
  <milnode-page-container
    :back-action="{ to: { name: 'home/Home' } }"
    :pages="homePages">
    <v-layout wrap>
      <v-flex
        xs12
        md6
        order-md>
        <milnode-help-contacts-description
          :title="$t('pages.home.help.business.title')"
          :description="$t('pages.home.help.business.description')"/>
      </v-flex>
      <v-flex
        xs12
        md6
        order-md3>
        <milnode-help-contacts-category :contact-category="contacts.business"/>
      </v-flex>
      <v-flex
        xs12
        md6
        order-md5
        class="mb-3">
        <milnode-help-contacts :users="contacts.business.users"/>
      </v-flex>
      <v-flex
        xs12
        md6
        order-md2>
        <milnode-help-contacts-description
          :title="$t('pages.home.help.technical.title')"
          :description="$t('pages.home.help.technical.description')"/>
      </v-flex>
      <v-flex
        xs12
        md6
        order-md4>
        <milnode-help-contacts-category :contact-category="contacts.technical"/>
      </v-flex>
      <v-flex
        xs12
        md6
        order-md6
        class="mb-3">
        <milnode-help-contacts :users="contacts.technical.users"/>
      </v-flex>
    </v-layout>
  </milnode-page-container>
</template>

<script>
import applicationService from './../../services/application.service'
import { Contacts } from './../../models/contacts'
import homePages from './../../data/pages/home'

export default {
  data () {
    return {
      contacts: new Contacts(),
      homePages
    }
  },
  async beforeRouteEnter (to, from, next) {
    let result = await applicationService.getContacts({ load: true, errors: true })
    next(vm => { vm.contacts = result })
  },
  async beforeRouteUpdate (to, from, next) {
    this.contacts = await applicationService.getContacts({ load: true, errors: true })
    next()
  }
}
</script>
