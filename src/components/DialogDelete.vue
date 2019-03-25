<template>
  <v-dialog
    v-model="dialog"
    max-width="600"
    @keydown.esc="dialog = false">
    <v-card>
      <v-card-title class="headline">{{ $t("dialogs.deleteItem") }}</v-card-title>
      <v-card-text>{{ $t('dialogs.deleteItemDesc') }}</v-card-text>
      <v-card-text v-if="name">{{ $t('dialogs.itemName') }} <v-chip
        disabled
        class="text--primary">{{ name }}</v-chip></v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn
          :disabled="loading"
          flat
          @click.native="dialog = false">{{ $t("dialogs.cancel") }}</v-btn>
        <v-btn
          :disabled="loading"
          class="error"
          @click="confirmDelete">{{ $t("dialogs.delete") }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    toggle: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      dialog: false
    }
  },
  computed: {
    ...mapGetters('load', ['loading'])
  },
  watch: {
    toggle () {
      this.dialog = !this.dialog
    }
  },
  methods: {
    confirmDelete () {
      this.$emit('delete-confirmed')
    }
  }
}
</script>
