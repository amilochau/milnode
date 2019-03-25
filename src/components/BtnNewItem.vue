<template>
  <v-tooltip bottom>
    <v-btn
      slot="activator"
      :aria-label="computedTitle"
      :disabled="loading"
      color="primary"
      icon
      @click="$emit('click')">
      <v-icon>add</v-icon>
    </v-btn>
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
