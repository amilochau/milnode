<template>
  <span>
    <milnode-page-menu
      :back-action="backAction"
      :pages="pages"
      :details="details"
      :more="more"
      @toggle="$emit('toggle')">
      <template v-slot:actions>
        <slot name="actions"/>
      </template>
    </milnode-page-menu>
    <v-container
      :fluid="fluid"
      :class="containerClass"
      grid-list-md>
      <slot/>
    </v-container>
  </span>
</template>

<script>
export default {
  props: {
    backAction: {
      type: Object,
      default: () => ({})
    },
    pages: {
      type: Array,
      default: () => []
    },
    details: {
      type: Object,
      default: () => ({})
    },
    more: {
      type: Object,
      default: () => ({})
    },
    fluid: {
      type: Boolean,
      default: false
    },
    condensed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    containerClass () {
      return {
        'container-condensed': this.condensed
      }
    }
  }
}
</script>
