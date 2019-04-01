<template>
  <v-tooltip
    v-if="$toolbarApplicationItems && $toolbarApplicationItems.length"
    left>
    <template #activator="tooltip">
      <v-menu
        v-on="tooltip.on"
        bottom
        offset-y
        left
        attach>
        <template #activator="menu">
          <v-btn
            v-on="menu.on"
            :aria-label="$t('layout.applications.title')"
            icon>
            <v-icon>apps</v-icon>
          </v-btn>
        </template>
        <v-card>
          <milnode-list-items
            :items="$toolbarApplicationItems"
            dense/>
        </v-card>
      </v-menu>
    </template>
    <span>{{ $t('layout.applications.title') }}</span>
  </v-tooltip>
</template>
