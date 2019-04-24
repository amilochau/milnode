<template>
  <milnode-dialog
    :title="$t('dialogs.deleteManyItems')"
    :toggle="toggle"
    :max-width="600"
    save-class="error"
    :save-title="$t('dialogs.deleteMany')"
    @save="$emit('delete-confirmed')">
    <template>
      <p>
        {{ $t('dialogs.deleteManyItemsDesc', { count: names.length })}}
      </p>
      <p v-if="names.length">{{ $t('dialogs.itemNames') }}
        <v-chip
          v-for="(name, i) in names"
          :key="`delete-many-${i}`"
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
    names: {
      type: Array,
      required: true
    },
    toggle: {
      type: Boolean,
      required: true
    }
  }
}
</script>
