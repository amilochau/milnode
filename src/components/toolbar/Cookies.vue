<template>
  <v-toolbar
    v-if="showCookiesBar"
    dense
    class="cookies-menu blue lighten-3 elevation-2">
    <v-icon class="ml-3">{{ $icons.cookie }}</v-icon>
    <span class="ml-3 mr-5">{{ $t('layout.privacy.cookiesText') }}</span>
    <v-spacer/>
    <v-btn
      class="hidden-sm-and-down"
      flat
      :to="{ name: 'home/Privacy' }">{{ $t("layout.privacy.cookiesButton") }}</v-btn>
    <v-btn
      class="green lighten-3"
      flat
      @click="acceptCookies">{{ $t("layout.privacy.cookiesAccept") }}</v-btn>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    cookieName: {
      type: String,
      default: '.AspNet.Consent'
    }
  },
  data () {
    return {
      showCookiesBar: false
    }
  },
  created () {
    var cookieFound = false
    var name = this.cookieName + '='
    var decodedCookie = decodeURIComponent(document.cookie)
    var ca = decodedCookie.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) === ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) === 0) {
        cookieFound = true
      }
    }
    this.showCookiesBar = !cookieFound
  },
  methods: {
    acceptCookies () {
      var d = new Date()
      d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000))
      document.cookie = `${this.cookieName}=yes; expires=${d.toUTCString()}; path=/; samesite=lax`
      this.showCookiesBar = false
    }
  }
}
</script>
