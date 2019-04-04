<template>
  <v-expansion-panel expand>
    <v-expansion-panel-content
      v-for="(user, i) in users"
      :key="i">
      <template #header>
        {{ user.firstName }} {{ user.lastName }}
      </template>
      <v-list>
        <v-list-tile
          v-if="user.email"
          :href="'mailto:' + user.email"
          ripple>
          <v-list-tile-action>
            <v-icon>{{ $icons.email }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ user.email }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          v-if="user.place"
          ripple>
          <v-list-tile-action>
            <v-icon>{{ $icons.domain }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ user.place }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true
    }
  }
}
</script>
