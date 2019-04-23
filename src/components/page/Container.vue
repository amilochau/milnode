<template>
  <span>
    <milnode-page-menu
      v-if="!hideMenu"
      :absolute="fillHeight"
      :back-action="backAction"
      :pages="pages"
      :details="details"
      :more="more"
      @toggle="$emit('toggle')">
      <template #actions>
        <slot name="actions"/>
      </template>
      <template #details>
        <slot name="details"/>
      </template>
    </milnode-page-menu>
    <v-container
      :fluid="fluid"
      :fill-height="fillHeight"
      :class="containerClass"
      :style="fillHeightStyle"
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
    },
    fillHeight: {
      type: Boolean,
      default: false
    },
    hideMenu: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    containerClass () {
      return {
        'container-condensed': this.condensed
      }
    },
    fillHeightStyle () {
      return this.fillHeight ? 'padding: 48px 0 0' : undefined
    }
  }
}
</script>
