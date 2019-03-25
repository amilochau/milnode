<template>
  <v-toolbar
    class="milnode-toolbar"
    dense
    app
    absolute
    clipped-left>
    <v-toolbar-side-icon
      :aria-label="$t('layout.toolbar.toggleMenu')"
      @click="$store.commit('app/DRAWER_TOGGLE')"/>
    <span class="title ml-3 mr-5">{{ $applicationName }}</span>
    <v-spacer/>
    <milnode-toolbar-applications/>
    <milnode-toolbar-settings/>
    <milnode-toolbar-account v-if="!$noAuth"/>
  </v-toolbar>
</template>
