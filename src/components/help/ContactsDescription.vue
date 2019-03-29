<template>
  <section class="text-xs-center pa-2">
    <milnode-section-header>{{ title }}</milnode-section-header>
    <milnode-section-text v-if="description">{{ description }}</milnode-section-text>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      // eslint-disable-next-line
      type: String | undefined,
      default: undefined
    }
  }
}
</script>
