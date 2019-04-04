<template>
  <v-text-field
    v-model="search"
    :label="$t('fields.search')"
    :append-icon="$icons.search"
    class="mx-3 hidden-xs-only"
    single-line />
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search () {
      this.$emit('update:search', this.search)
    }
  }
}
</script>
