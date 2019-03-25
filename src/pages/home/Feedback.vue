<template>
  <v-container fluid>
    <v-layout
      align-center
      justify-center>
      <v-flex
        xs12
        sm8
        md6>
        <v-card class="elevation-12">
          <v-toolbar
            dark
            color="primary">
            <v-toolbar-title>{{ $t('pages.home.feedback.title') }}</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <strong>{{ $t('pages.home.feedback.catch') }}</strong>
            {{ $t('pages.home.feedback.explain') }}
          </v-card-text>
          <v-form @submit.prevent="sendFeedback">
            <v-card-text>
              <v-rating
                v-model="feedback.rating"
                class="text-xs-center"
                hover/>
              <v-textarea
                v-model="feedback.comment"
                :label="$t('pages.home.feedback.comment')"/>
            </v-card-text>
            <v-card-actions>
              <v-spacer/>
              <v-btn
                :disabled="loading"
                color="primary"
                type="submit">
                {{ $t("pages.home.feedback.send") }}
              </v-btn>
            </v-card-actions>
            <v-card-text>
              <em>{{ $t('pages.home.feedback.privacy') }}</em>
            </v-card-text>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { EventBus } from './../../event-bus'
import applicationService from './../../services/application.service'

export default {
  data () {
    return {
      feedback: {
        rating: 0,
        comment: null
      }
    }
  },
  computed: {
    ...mapGetters('load', ['loading'])
  },
  methods: {
    async sendFeedback () {
      await applicationService.sendFeedback(this.feedback, { load: true, errors: true })
      EventBus.$emit('success', { message: this.$i18n.t('pages.home.feedback.success') })
      this.$router.push({ name: 'home/Home' })
    }
  }
}
</script>
