<template>
  <v-container grid-list-lg>
    <milnode-page-header>{{ title }}</milnode-page-header>
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
