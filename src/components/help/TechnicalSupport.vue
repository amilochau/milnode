<template>
  <v-card class="transparent elevation-0">
    <v-card-title
      primary-title
      class="layout justify-center">
      <div class="headline">{{ $t("pages.home.help.technical.title") }}</div>
    </v-card-title>
    <v-card-text>
      {{ $t("pages.home.help.technical.description") }}
    </v-card-text>
    <v-list class="transparent">
      <v-list-tile v-if="helpPlace">
        <v-list-tile-action>
          <v-icon class="blue--text text--lighten-2">{{ $icons.place }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ helpPlace }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile
        v-if="helpEmail"
        ripple
        :href="'mailto:' + helpEmail">
        <v-list-tile-action>
          <v-icon class="blue--text text--lighten-2">{{ $icons.email }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ helpEmail }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    helpEmail: {
      // eslint-disable-next-line
      type: String | null | undefined,
      default: null
    },
    helpPlace: {
      // eslint-disable-next-line
      type: String | null | undefined,
      default: null
    }
  }
}
</script>
