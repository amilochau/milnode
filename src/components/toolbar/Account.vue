<template>
  <v-menu
    v-if="logged"
    slot="activator"
    class="milnode-toolbar-account"
    bottom
    offset-y
    left
    attach>
    <v-btn
      slot="activator"
      :aria-label="$t('layout.account.title')"
      icon>
      <v-icon>account_circle</v-icon>
    </v-btn>
    <v-card>
      <v-list dense>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <v-icon class="grey lighten-1 white--text">face</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ profile.given_name }} {{ profile.family_name }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ profile.email }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider/>
      <milnode-list-items
        :items="$toolbarAccountItems"
        dense
        @logout="logout"/>
    </v-card>
  </v-menu>
  <v-tooltip
    v-else
    left>
    <v-btn
      slot="activator"
      class="primary"
      icon
      @click="login">
      <v-icon>power_settings_new</v-icon>
    </v-btn>
    <span>{{ $t('layout.account.login') }}</span>
  </v-tooltip>
</template>

<script>
import { mapGetters } from 'vuex'
import accountService from './../../services/account.service'

export default {
  computed: {
    ...mapGetters('user', ['logged']),
    ...mapGetters('user', ['profile'])
  },
  methods: {
    async login () {
      await accountService.login()
    },
    async logout () {
      this.$store.dispatch('user/authLogout')
      await accountService.logout()
    }
  }
}
</script>
