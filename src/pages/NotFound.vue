<template>
  <v-container fill-height>
    <v-layout align-center>
      <v-flex
        xs12
        text-xs-center>
        <h1 class="display-2 primary--text mb-3">{{ $t('pages.notFound.title') }}</h1>
        <p>{{ $t('pages.notFound.description') }}</p>
        <v-btn
          :disabled="loading"
          :to="{ name: 'home/Home' }"
          outline
          color="primary">{{ $t('pages.notFound.buttonText') }}</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('load', ['loading'])
  },
  created () {
    this.$ssrContext && this.$ssrContext.res.status(404)
  }
}
</script>
