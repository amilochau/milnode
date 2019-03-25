<template>
  <v-tooltip bottom>
    <v-btn
      slot="activator"
      :aria-label="$t('buttons.refresh')"
      :disabled="loading"
      class="milnode-btn-refresh"
      icon
      @click="$emit('click')">
      <v-icon>refresh</v-icon>
    </v-btn>
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
