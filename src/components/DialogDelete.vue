<template>
  <milnode-dialog
    :title="$t('dialogs.deleteItem')"
    :toggle="toggle"
    :max-width="600"
    save-class="error"
    :save-title="$t('dialogs.delete')"
    @save="$emit('delete-confirmed')">
    <template>
      <p>
        {{ $t('dialogs.deleteItemDesc')}}
      </p>
      <p v-if="name">{{ $t('dialogs.itemName') }}
        <v-chip
          disabled
          class="text--primary">
          {{ name }}
        </v-chip>
      </p>
    </template>
  </milnode-dialog>
</template>

<script>
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
  }
}
</script>
