<template>
  <v-list
    class="py-0"
    dense>
    <template v-for="(item, i) in items.filter(x => display(x))">
      <v-list-group
        v-if="item.items"
        :key="i"
        :prepend-icon="item.icon"
        no-action>
        <template #activator>
          <v-list-tile ripple>
            <v-list-tile-content>
              <v-list-tile-title>{{ $t(item.title) }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
        <template v-for="(subItem, j) in item.items.filter(x => display(x))">
          <v-subheader
            v-if="subItem.header"
            :key="j"
            class="grey--text">
            {{ $t(subItem.header) }}
          </v-subheader>
          <v-divider
            v-else-if="subItem.divider"
            :key="j"
            :class="dividerClass"/>
          <v-list-tile
            v-else
            :key="j"
            :to="genChildTarget(item, subItem)"
            :href="subItem.href"
            :disabled="subItem.disabled"
            :inactive="subItem.inactive"
            :target="subItem.target"
            :avatar="!!subItem.avatar"
            exact
            ripple
            rel="noopener"
            @click="item.event ? $emit(item.event, item.eventArg) : null">
            <v-list-tile-action v-if="subItem.action">
              <v-icon :class="[subItem.actionClass || 'success--text']">
                {{ subItem.action }}
              </v-icon>
            </v-list-tile-action>
            <v-list-tile-avatar
              v-else-if="subItem.avatar"
              tile
              size="24px">
              <img
                :src="`${baseUrl}${subItem.avatar}`"
                width="24px">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                <span>{{ $t(subItem.title) }}</span>
              </v-list-tile-title>
            </v-list-tile-content>
            <v-chip
              v-if="subItem.badge"
              :color="subItem.color || 'primary'"
              class="white--text pa-0 v-chip--x-small"
              disabled>
              {{ $t(subItem.badge) }}
            </v-chip>
          </v-list-tile>
        </template>
      </v-list-group>
      <v-subheader
        v-else-if="item.header"
        :key="i"
        class="grey--text">
        {{ $t(item.header) }}
      </v-subheader>
      <v-divider
        v-else-if="item.divider"
        :key="i"
        :class="dividerClass"/>
      <v-list-tile
        v-else
        :key="i"
        :to="item.href || item.event ? null : { name: item.name, params: { lang: $i18n.locale } }"
        :href="item.href"
        :disabled="item.disabled"
        :inactive="item.inactive"
        :target="item.target"
        :avatar="!!item.avatar"
        exact
        ripple
        rel="noopener"
        @click="item.event ? $emit(item.event, item.eventArg) : null">
        <v-list-tile-action v-if="item.icon">
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-avatar
          v-else-if="item.avatar"
          tile
          size="24px">
          <img
            :src="`${baseUrl}${item.avatar}`"
            width="24px">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{ $t(item.title) }}</v-list-tile-title>
        </v-list-tile-content>
        <v-chip
          v-if="item.badge"
          :color="item.color || 'primary'"
          class="white--text pa-0 v-chip--x-small"
          disabled>
          {{ $t(item.badge) }}
        </v-chip>
      </v-list-tile>
    </template>
  </v-list>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    dense: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      baseUrl: process.env.BASE_URL
    }
  },
  computed: {
    dividerClass () {
      if (!this.dense) return 'my-2'
      else return undefined
    }
  },
  methods: {
    display (item) {
      // If no policy is needed: always display
      if (!item.policies || !item.policies.length) return true
      // The current store state must have at least one policy
      if (item.policies.some(r => this.$store.getters[r])) {
        return true
      }
      return false
    },
    genChildTarget (item, subItem) {
      if (subItem.href || subItem.event) return
      return { name: `${item.group}/${subItem.name}`, params: { lang: this.$i18n.locale } }
    }
  }
}
</script>
