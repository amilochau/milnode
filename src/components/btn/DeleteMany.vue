<template>
  <v-tooltip bottom>
    <template #activator="tooltip">
      <v-btn
        v-on="tooltip.on"
        :aria-label="$t('buttons.deleteMany')"
        :disabled="disabled"
        class="error"
        icon
        @click="$emit('click')">
        <v-icon>{{ $icons.deleteMany }}</v-icon>
      </v-btn>
    </template>
    <span>{{ $t('buttons.deleteMany') }}</span>
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
