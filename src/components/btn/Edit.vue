<template>
  <v-tooltip bottom>
    <v-btn
      v-slot:activator
      :aria-label="$t('buttons.edit')"
      :disabled="disabled"
      class="ma-0"
      icon
      @click="$emit('click')">
      <v-icon>edit</v-icon>
    </v-btn>
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
