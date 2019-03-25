<template>
  <v-chip
    :class="className"
    disabled
    small>
    <v-avatar class="mr-0">
      <v-icon :class="className">{{ icon }}</v-icon>
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
    className () {
      if (this.value) {
        return 'success white--text'
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
