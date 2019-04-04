<template>
  <v-tooltip bottom>
    <template #activator="tooltip">
      <v-btn
        v-on="tooltip.on"
        :aria-label="$t('buttons.refresh')"
        :disabled="loading"
        class="grey lighten-2"
        icon
        @click="$emit('click')">
        <v-icon>{{ $icons.refresh }}</v-icon>
      </v-btn>
    </template>
    <span>{{ $t('buttons.refresh') }}</span>
  </v-tooltip>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('load', ['loading'])
  }
}
</script>
