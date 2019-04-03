<template>
  <v-toolbar
    class="milnode-toolbar elevation-1 pr-2"
    :absolute="absolute"
    dense>
    <v-tooltip
      v-if="backAction.to"
      right>
      <template #activator="tooltip">
        <v-btn
          v-on="tooltip.on"
          :aria-label="$t(backAction.title) || $t('pages.menu.backToHomePage')"
          :to="backAction.to"
          exact
          icon>
          <v-icon>{{ backAction.icon || 'home' }}</v-icon>
        </v-btn>
      </template>
      <span>{{ $t(backAction.title) || $t('pages.menu.backToHomePage')}}</span>
    </v-tooltip>
    <v-divider
      v-if="backAction.to"
      class="mx-2"
      vertical/>
    <v-toolbar-items>
      <milnode-page-menu-step
        v-for="(page, i) in pages"
        :key="`page-${i}`"
        :page="page"/>
      <v-divider
        v-if="pages.length && details.title"
        class="mx-2"
        inset
        vertical/>
    </v-toolbar-items>
    <v-chip
      v-if="details.id"
      class="grey darken-3 white--text"
      disabled>
      # {{ details.id }}
    </v-chip>
    <v-toolbar-title v-if="details.title">{{ $t(details.title) }}</v-toolbar-title>
    <v-spacer/>
    <slot name="actions"/>
    <v-tooltip
      v-if="more.enabled"
      bottom>
      <template #activator="tooltip">
        <v-btn
          v-on="tooltip.on"
          :aria-label="$t(more.title) || $t('pages.menu.more')"
          icon
          @click="$emit('toggle')">
          <v-icon>{{ more.icon || 'more_vert' }}</v-icon>
        </v-btn>
      </template>
      <span>{{ $t(more.title) || $t('pages.menu.more') }}</span>
    </v-tooltip>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    backAction: {
      type: Object,
      default: () => ({})
    },
    pages: {
      type: Array,
      default: () => []
    },
    details: {
      type: Object,
      default: () => ({})
    },
    more: {
      type: Object,
      default: () => ({})
    },
    absolute: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      toggle: false
    }
  }
}
</script>
