<template>
  <milnode-page-container
    :back-action="{ to: { name: 'home/Home' } }"
    :pages="$homePages">
    <v-layout wrap>
      <v-flex
        xs12
        md6
        order-md>
        <milnode-help-contacts-description :title="$t('pages.home.about.applicationInformation')"/>
      </v-flex>
      <v-flex
        xs12
        md6
        order-md3
        class="mb-3">
        <v-list class="elevation-1">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>{{ $icons.web }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ $applicationName }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>{{ $icons.person_pin }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ $t('pages.home.about.developedBy', { contact: $applicationContact }) }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
      <v-flex
        xs12
        md6
        order-md2>
        <milnode-help-contacts-description :title="$t('pages.home.about.releaseInformation')"/>
      </v-flex>
      <v-flex
        xs12
        md6
        order-md4
        class="mb-3">
        <v-list class="elevation-1">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>{{ $icons.room }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ applicationInformation.definition }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>{{ $icons.hot_tub }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ applicationInformation.name }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </milnode-page-container>
</template>

<script>
import applicationService from './../../services/application.service'

export default {
  data () {
    return {
      applicationInformation: {
        definitionName: null,
        releaseName: null
      }
    }
  },
  async beforeRouteEnter (to, from, next) {
    let result = await applicationService.getApplicationInformation({ load: true, errors: true })
    next(vm => { vm.applicationInformation = result })
  },
  async beforeRouteUpdate (to, from, next) {
    this.applicationInformation = await applicationService.getApplicationInformation({ load: true, errors: true })
    next()
  }
}
</script>
