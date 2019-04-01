<template>
  <v-tooltip bottom>
    <template #activator="tooltip">
      <v-btn
        v-on="tooltip.on"
        :aria-label="computedTitle"
        :disabled="loading"
        color="primary"
        icon
        @click="$emit('click')">
        <v-icon>add</v-icon>
      </v-btn>
    </template>
    <span>{{ computedTitle }}</span>
  </v-tooltip>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters('load', ['loading']),
    computedTitle () {
      return this.title ? this.title : this.$t('buttons.newItem')
    }
  }
}
</script>
