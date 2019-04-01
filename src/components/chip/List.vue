<template>
  <div>
    <v-chip
      v-for="(item, i) in list"
      :key="i"
      disabled
      class="text--primary"
      small>
      {{ item }}
    </v-chip>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>
