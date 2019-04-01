<template>
  <milnode-page-container :title="$t('pages.home.feedback.title')">
    <v-layout wrap>
      <v-flex xs12>
        <milnode-help-contacts-description
          :title="$t('pages.home.feedback.catch')"
          :description="$t('pages.home.feedback.explain')"/>
      </v-flex>
      <v-flex
        xs12 
        sm8 offset-sm2 
        md6 offset-md3>
        <v-card>
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
          </v-form>
        </v-card>
      </v-flex>
      <v-flex 
        xs12 
        sm8 offset-sm2 
        md6 offset-md3
        class="text-xs-center">
        <em>{{ $t('pages.home.feedback.privacy') }}</em>
      </v-flex>
    </v-layout>
  </milnode-page-container>
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
