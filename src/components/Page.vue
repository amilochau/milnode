<template>
  <v-container grid-list-lg>
    <milnode-page-header>{{ title }}</milnode-page-header>
    <slot/>
  </v-container>
</template>

<script>
// TODO v0.7: remove this component, use MilnodePageContainer instead
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
