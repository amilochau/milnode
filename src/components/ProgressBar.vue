<template>
  <v-progress-linear
    :active="progress.loading"
    :indeterminate="progress.indeterminate"
    class="progress-bar mt-0 mb-0"/>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('load', ['progress'])
  }
}
</script>
