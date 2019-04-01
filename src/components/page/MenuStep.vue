<template>
  <v-tooltip right>
    <template #activator="tooltip">
      <v-btn
        v-on="tooltip.on"
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
