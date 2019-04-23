<template>
  <v-tooltip bottom>
    <template #activator="tooltip">
      <v-btn
        v-on="tooltip.on"
        :aria-label="$t(page.title)"
        :to="page.to"
        class="milnode-step-btn-icon"
        active-class="active"
        exact
        icon
        flat>
        <v-icon v-if="page.number" class="number">{{ page.number }}</v-icon>
        <v-icon v-else-if="page.icon">{{ page.icon }}</v-icon>
      </v-btn>
    </template>
    <span>{{ $t(page.title) }}</span>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      required: true
    }
  }
}
</script>
