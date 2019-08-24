<template>
  <v-progress-linear
    :active="lazyProgress"
    :indeterminate="progress.indeterminate"
    class="progress-bar mt-0 mb-0"/>
</template>

<script>
import { mapGetters } from 'vuex'

let lazyProgressTimeout = null

export default {
  props: {
    lazyDelay: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      lazyProgress: false
    }
  },
  computed: {
    ...mapGetters('load', ['progress'])
  },
  watch: {
    progress: {
      handler () {
        if (this.progress.loading) {
          lazyProgressTimeout = setTimeout(() => {
            this.lazyProgress = true
          }, this.lazyDelay)
        } else {
          clearTimeout(lazyProgressTimeout)
          this.lazyProgress = false
        }
      },
      deep: true
    }
  }
}
</script>
