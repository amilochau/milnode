<template>
  <v-container fluid>
    <v-layout
      align-center
      justify-center>
      <v-flex
        xs12
        lg8>
        <v-card
          class="grey lighten-4 elevation-12">
          <v-toolbar
            dark
            color="primary">
            <v-toolbar-title>{{ $t("pages.home.help.title") }}</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-container
              fluid
              grid-list-md>
              <v-layout wrap>
                <v-flex
                  xs12
                  md6>
                  <milnode-help-business-support :contact-category="contacts.business"/>
                </v-flex>
                <v-flex
                  xs12
                  md6>
                  <milnode-help-contacts :users="contacts.business.users"/>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-divider/>
          <v-card-text>
            <v-container
              fluid
              grid-list-md>
              <v-layout wrap>
                <v-flex
                  xs12
                  md6>
                  <milnode-help-technical-support :contact-category="contacts.technical"/>
                </v-flex>
                <v-flex
                  xs12
                  md6>
                  <milnode-help-contacts :users="contacts.technical.users"/>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import applicationService from './../../services/application.service'
import { Contacts } from './../../models/contacts'

export default {
  data () {
    return {
      contacts: new Contacts()
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
