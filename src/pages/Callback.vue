<template>
  <v-container
    fluid
    fill-height>
    <v-layout
      align-center
      justify-center>
      <v-progress-circular
        :size="60"
        color="primary"
        indeterminate/>
    </v-layout>
  </v-container>
</template>

<script>
import { UserManager, WebStorageStateStore } from 'oidc-client'
import { EventBus } from './../event-bus'

export default {
  async created () {
    let userManager = new UserManager({
      userStore: new WebStorageStateStore({ store: localStorage })
    })

    try {
      let user = await userManager.signinRedirectCallback()
      this.$store.dispatch('user/authLogin')
      if (user.state) {
        this.$router.push(user.state)
      } else {
        this.$router.push({ name: 'home/Home' })
      }
    } catch (error) {
      EventBus.$emit('error', { message: error.message })
      this.$store.dispatch('user/authLogout')
      this.$router.push({ name: 'home/Home' })
    }
  }
}
</script>
