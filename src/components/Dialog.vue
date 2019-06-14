<template>
  <v-dialog
    v-model="dialog"
    :fullscreen="fullscreen"
    :max-width="maxWidth"
    :persistent="persistent"
    scrollable
    @keydown.esc="dialog = false">
    <v-form
      style="width:100%"
      @submit.prevent="save">
      <v-card>
        <v-toolbar
          v-if="fullscreen"
          color="primary"
          dense>
          <v-btn icon @click="dialog = false">
            <v-icon>{{ $icons.close }}</v-icon>
          </v-btn>
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-title
          v-else
          class="headline">{{ title }}</v-card-title>
        <v-card-actions v-if="$slots['header-actions']">
          <slot name="header-actions"/>
        </v-card-actions>
        <v-card-text v-if="$slots.default">
          <slot/>
        </v-card-text>
        <v-card-actions v-if="$slots['form-actions']">
          <slot name="form-actions"/>
        </v-card-actions>
        <v-card-actions v-else>
          <v-spacer/>
          <v-btn
            v-if="!hideCancel"
            :disabled="loading"
            flat
            @click="cancel">{{ cancelText }}</v-btn>
          <v-btn
            :disabled="loading || disableSave"
            :class="saveClass || 'milnode-dialog-primary'"
            flat
            type="submit">{{ saveText }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    toggle: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    cancelTitle: {
      type: String,
      default: ''
    },
    saveTitle: {
      type: String,
      default: ''
    },
    saveClass: {
      type: String,
      default: ''
    },
    hideCancel: {
      type: Boolean,
      default: false
    },
    disableSave: {
      type: Boolean,
      default: false
    },
    persistent: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: Number,
      default: 400
    }
  },
  data () {
    return {
      dialog: false,
      fullscreen: undefined
    }
  },
  computed: {
    ...mapGetters('load', ['loading']),
    cancelText () {
      return this.cancelTitle ? this.cancelTitle : this.$t('dialogs.cancel')
    },
    saveText () {
      return this.saveTitle ? this.saveTitle : this.$t('dialogs.save')
    }
  },
  watch: {
    toggle () {
      this.dialog = !this.dialog
    }
  },
  methods: {
    cancel () {
      this.$emit('cancel')
      this.dialog = false
    },
    save () {
      this.$emit('save')
    }
  },
  mounted () {
    this.resize()
  },
  methods: {
    resize () {
      this.fullscreen = window.innerWidth < 768
    }
  }
}
</script>
