<template>
  <v-container class="container-condensed pa-2">
    <milnode-page-header class="heading mb-4">{{ title }}</milnode-page-header>
    <slot/>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
