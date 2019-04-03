<template>
  <v-dialog
    v-model="dialog"
    :max-width="maxWidth"
    :persistent="persistent"
    @keydown.esc="dialog = false">
    <v-card>
      <v-form @submit.prevent="save">
        <v-card-title class="headline">{{ title }}</v-card-title>
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
            @click.native="cancel">{{ cancelText }}</v-btn>
          <v-btn
            :disabled="loading || disableSave"
            class="milnode-dialog-primary"
            flat
            type="submit">{{ saveText }}</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
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
      dialog: false
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
  }
}
</script>
