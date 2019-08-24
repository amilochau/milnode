<template>
  <v-snackbar
    :timeout="timeout"
    :color="color"
    v-model="enabled"
    auto-height
    top
    right>
    <v-layout row wrap align-center>
      <v-flex v-if="icon" shrink class="mr-3">
        <v-icon>{{ $icons.info }}</v-icon>
      </v-flex>
      <v-flex grow>
        <span style="white-space: pre-wrap">{{ message }}</span>
      </v-flex>
      <v-flex shrink>
        <v-btn
          v-if="details"
          icon
          class="ml-2"
          @click.native="expanded = !expanded">
          <v-icon v-if="expanded">{{ $icons.expand_less }}</v-icon>
          <v-icon v-else>{{ $icons.expand_more }}</v-icon>
        </v-btn>
        <v-btn
          flat
          class="ml-2"
          @click.native="enabled = false">
          {{ $t("snackbars.close") }}
        </v-btn>
      </v-flex>
      <v-flex v-if="expanded && details" xs12 class="mt-3 mb-2">
        <span style="white-space: pre-wrap">{{ details }}</span>
      </v-flex>
    </v-layout>
  </v-snackbar>
</template>

<script>
import { EventBus } from './../event-bus'

export default {
  data () {
    return {
      enabled: false,
      message: undefined,
      details: undefined,
      color: undefined,
      icon: undefined,
      expanded: false,
      timeout: 10000
    }
  },
  created () {
    EventBus.$on('info', (errorMessages) => {
      this.enableSnackbar(errorMessages, 'info', this.$icons.snackbar.info)
    })
    EventBus.$on('success', (errorMessages) => {
      this.enableSnackbar(errorMessages, 'success', this.$icons.snackbar.success)
    })
    EventBus.$on('warning', (errorMessages) => {
      this.enableSnackbar(errorMessages, 'warning', this.$icons.snackbar.warning)
    })
    EventBus.$on('error', (errorMessages) => {
      this.enableSnackbar(errorMessages, 'error', this.$icons.snackbar.error)
    })
  },
  methods: {
    enableSnackbar (errorMessages, color, icon) {
      if (errorMessages.message) {
        this.message = errorMessages.message
      } else {
        this.message = errorMessages // TODO v7.0 remove compatibility mode
        // eslint-disable-next-line
        if (process.env.NODE_ENV !== 'production') {
          console.warn(`Message must be set with the dedicated structure for snackbar: { message: XXX, details: XXX } (${errorMessages})`)
        }
      }
      this.details = errorMessages.details
      this.color = errorMessages.color || color
      this.icon = errorMessages.icon || icon
      this.expanded = false
      this.enabled = true
      this.timeout = errorMessages.timeout || 10000
    }
  }
}
</script>
