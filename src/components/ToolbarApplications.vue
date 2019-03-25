<template>
  <v-tooltip
    v-if="$toolbarApplicationItems && $toolbarApplicationItems.length"
    left>
    <v-menu
      slot="activator"
      bottom
      offset-y
      left
      attach>
      <v-btn
        slot="activator"
        :aria-label="$t('layout.applications.title')"
        icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-card>
        <milnode-list-items
          :items="$toolbarApplicationItems"
          dense/>
      </v-card>
    </v-menu>
    <span>{{ $t('layout.applications.title') }}</span>
  </v-tooltip>
</template>
