<template>
  <v-list class="elevation-1">
    <v-list-tile v-if="contactCategory.place">
      <v-list-tile-action>
        <v-icon class="blue--text text--lighten-2">{{ $icons.place }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ contactCategory.place }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile
      v-if="contactCategory.email"
      ripple
      :href="'mailto:' + contactCategory.email">
      <v-list-tile-action>
        <v-icon class="blue--text text--lighten-2">{{ $icons.email }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ contactCategory.email }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile
      v-if="contactCategory.url"
      :href="contactCategory.url"
      target="_blank"
      rel="noopener"
      ripple>
      <v-list-tile-action>
        <v-icon class="blue--text text--lighten-2">{{ $icons.link }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ $t('pages.home.help.linkText') }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  props: {
    contactCategory: {
      type: Object,
      required: true
    }
  }
}
</script>
