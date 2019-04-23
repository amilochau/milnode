<template>
  <v-toolbar
    class="milnode-toolbar elevation-1 pr-2"
    :absolute="absolute"
    dense>
    <template v-if="!$slots.back">
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
            <v-icon>{{ backAction.icon || $icons.home }}</v-icon>
          </v-btn>
        </template>
        <span>{{ $t(backAction.title) || $t('pages.menu.backToHomePage')}}</span>
      </v-tooltip>
      <v-divider
        v-if="backAction.to"
        class="mx-2"
        vertical/>
    </template>
    <slot name="back"/>
    <v-toolbar-items>
      <template v-for="(page, i) in pages">
        <v-divider
          v-if="page.divider"
          :key="`page-${i}`"
          class="mx-1"
          inset
          vertical/>
        <milnode-page-menu-step
          v-else
          :key="`page-${i}`"
          :page="page"/>
      </template>
      <v-divider
        v-if="pages.length && ($slots.details || !$slots.details && details.title)"
        class="mx-2"
        inset
        vertical/>
    </v-toolbar-items>
    <slot name="details"/>
    <template v-if="!$slots.details">
      <v-chip
        v-if="details.id"
        class="grey darken-3 white--text hidden-xs-only"
        disabled>
        # {{ details.id }}
      </v-chip>
      <v-toolbar-title v-if="details.title">{{ details.title }}</v-toolbar-title>
      <v-toolbar-title v-else class="hidden-xs-only">{{ title }}</v-toolbar-title>
    </template>
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
          <v-icon>{{ more.icon || $icons.more_vert }}</v-icon>
        </v-btn>
      </template>
      <span>{{ $t(more.title) || $t('pages.menu.more') }}</span>
    </v-tooltip>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'

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
  },
  computed: {
    ...mapGetters('app', ['title'])
  }
}
</script>
