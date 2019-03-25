<template>
  <v-container fluid>
    <v-layout
      align-center
      justify-center>
      <v-flex
        xs12
        sm8
        md4>
        <v-card class="elevation-12">
          <v-toolbar
            dark
            color="primary">
            <v-toolbar-title>{{ $t("pages.home.about.about") }}</v-toolbar-title>
          </v-toolbar>
          <v-list>
            <v-subheader>{{ $t('pages.home.about.applicationInformation') }}</v-subheader>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>web</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ $applicationName }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>person_pin</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ $t('pages.home.about.developedBy', { name: 'Antoine Milochau' }) }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider/>
            <v-subheader>{{ $t('pages.home.about.releaseInformation') }}</v-subheader>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>room</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ applicationInformation.definition }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>hot_tub</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ applicationInformation.name }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
