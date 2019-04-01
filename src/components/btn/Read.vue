<template>
  <v-tooltip bottom>
    <template #activator="tooltip">
      <v-btn
        v-on="tooltip.on"
        :aria-label="$t('buttons.read')"
        :disabled="disabled"
        class="ma-0"
        icon
        @click="$emit('click')">
        <v-icon>search</v-icon>
      </v-btn>
    </template>
    <span>{{ $t('buttons.read') }}</span>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
