<template>
  <v-app
    class="milnode-app"
    :dark="darkTheme">
    <router-view/>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('theme', ['darkTheme'])
  }
}
</script>
