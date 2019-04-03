<template>
  <v-chip
    :class="chipClass"
    disabled
    small>
    <v-avatar class="mr-0">
      <v-icon :class="chipClass">{{ icon }}</v-icon>
    </v-avatar>
    {{ text }}
  </v-chip>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  computed: {
    chipClass () {
      if (this.value) {
        return 'success black--text'
      } else {
        return 'warning black--text'
      }
    },
    icon () {
      return this.value ? 'check' : 'close'
    }
  }
}
</script>
