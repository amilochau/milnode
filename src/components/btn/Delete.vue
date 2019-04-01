<template>
  <v-tooltip bottom>
    <template #activator="tooltip">
      <v-btn
        v-on="tooltip.on"
        :aria-label="$t('buttons.delete')"
        :disabled="disabled"
        class="ma-0 error--text"
        icon
        @click="$emit('click')">
        <v-icon>delete</v-icon>
      </v-btn>
    </template>
    <span>{{ $t('buttons.delete') }}</span>
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
