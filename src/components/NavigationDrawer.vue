<template>
  <v-navigation-drawer
    v-model="inputValue"
    app
    temporary>
    <v-list class="py-0">
      <v-list-tile @click="inputValue = !inputValue" class="milnode-drawer-close">
        <v-list-tile-action>
          <v-icon>close</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            {{ $t("layout.drawer.close") }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-divider class="pb-2"/>
    <milnode-list-items :items="$navigationDrawerItems"/>
    <v-img
      v-if="imageSrc"
      :src="imageSrc"
      :alt="imageAlt"
      :max-height="imageHeight"
      contain/>
  </v-navigation-drawer>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  props: {
    imageSrc: {
      // eslint-disable-next-line
      type: String | undefined,
      default: undefined
    },
    imageAlt: {
      // eslint-disable-next-line
      type: String | undefined,
      default: undefined
    },
    imageHeight: {
      // eslint-disable-next-line
      type: String | undefined,
      default: undefined
    }
  },
  data () {
    return {
      baseUrl: process.env.BASE_URL
    }
  },
  computed: {
    ...mapState('app', ['appDrawer']),
    inputValue: {
      get (state) {
        return this.appDrawer
      },
      set (val) {
        this.drawer(val)
      }
    }
  },
  methods: {
    ...mapMutations('app', { drawer: 'DRAWER' })
  }
}
</script>
