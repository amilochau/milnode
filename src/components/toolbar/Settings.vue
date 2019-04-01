<template>
  <v-tooltip left>
    <v-menu
      v-slot:activator
      :close-on-content-click="false"
      bottom
      offset-y
      left
      attach>
      <v-btn
        v-slot:activator
        :aria-label="$t('layout.settings.title')"
        icon>
        <v-icon>settings</v-icon>
      </v-btn>
      <v-card>
        <milnode-list-items
          :items="$toolbarLanguagesItems"
          dense
          @to="changeLanguage"/>
        <v-divider v-if="$enableTheme"/>
        <v-list
          v-if="$enableTheme"
          class="py-0"
          dense>
          <v-subheader class="grey--text">
            {{ $t('layout.settings.display.title') }}
          </v-subheader>
          <v-list-tile>
            <v-list-tile-action>
              <v-switch v-model="inputValue"/>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ $t('layout.settings.display.darkMode') }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-menu>
    <span>{{ $t('layout.settings.title') }}</span>
  </v-tooltip>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('theme', ['darkTheme']),
    inputValue: {
      get (state) {
        return this.darkTheme
      },
      set (val) {
        this.theme(val)
      }
    }
  },
  methods: {
    ...mapMutations('theme', { theme: 'THEME' }),
    changeLanguage (lang) {
      this.$router.replace({ params: { lang } })
    }
  }
}
</script>
