<template>
  <v-app :dark="darkTheme">
    <router-view class="grey lighten-2"/>
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
