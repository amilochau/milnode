<template>
  <v-tooltip right>
    <v-btn
      v-slot:activator
      :aria-label="$t(page.title)"
      :to="page.to"
      class="milnode-step-btn px-3"
      active-class="active"
      exact
      flat>
      <v-avatar
        v-if="page.number"
        class="avatar"
        size="24px">
        <span class="white--text">{{ page.number }}</span>
      </v-avatar>
      <v-avatar
        v-else-if="page.icon"
        size="24px">
        <v-icon>{{ page.icon }}</v-icon>
      </v-avatar>
      <span class="hidden-xs-only ml-2 step-title">
      {{ $t(page.title) }}
      </span>
    </v-btn>
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
