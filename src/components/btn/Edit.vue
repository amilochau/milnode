<template>
  <v-tooltip bottom>
    <template #activator="tooltip">
      <v-btn
        v-on="tooltip.on"
        :aria-label="$t('buttons.edit')"
        :disabled="disabled"
        class="ma-0"
        icon
        @click="$emit('click')">
        <v-icon>edit</v-icon>
      </v-btn>
    </template>
    <span>{{ $t('buttons.edit') }}</span>
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
