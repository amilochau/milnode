<template>
  <v-toolbar
    class="milnode-toolbar milnode-toolbar-app elevation-0"
    dense
    app
    absolute
    clipped-left>
    <v-toolbar-side-icon
      :aria-label="$t('layout.toolbar.toggleMenu')"
      @click="$store.commit('app/DRAWER_TOGGLE')"/>
    <span class="title ml-3 mr-5 hidden-sm-and-up">{{ title }}</span>
    <span class="title ml-3 mr-5 hidden-xs-only">{{ $applicationName }}</span>
    <v-spacer/>
    <milnode-toolbar-applications/>
    <milnode-toolbar-settings/>
    <milnode-toolbar-account v-if="!$noAuth"/>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('app', ['title']),

  }
}
</script>

