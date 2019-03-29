<template>
  <milnode-page :title="$t('pages.home.privacy.title')">
    <v-layout wrap>
      <v-flex xs12>
        <section>
          <milnode-section-header>{{ $t('pages.home.privacy.header11') }}</milnode-section-header>
          <milnode-section-text>{{ $t('pages.home.privacy.text11', { name: $applicationName }) }}</milnode-section-text>
        </section>
        <section>
          <milnode-section-header>{{ $t('pages.home.privacy.header21') }}</milnode-section-header>
          <milnode-section-text>{{ $t('pages.home.privacy.text21', { name: $applicationName }) }}</milnode-section-text>
          <milnode-section-sub-header>{{ $t('pages.home.privacy.header22') }}</milnode-section-sub-header>
          <milnode-section-text>{{ $t('pages.home.privacy.text22', { name: $applicationName }) }}</milnode-section-text>
          <milnode-section-sub-header>{{ $t('pages.home.privacy.header23') }}</milnode-section-sub-header>
          <milnode-section-text>{{ $t('pages.home.privacy.text23', { name: $applicationName }) }}</milnode-section-text>
          <milnode-section-sub-header>{{ $t('pages.home.privacy.header24') }}</milnode-section-sub-header>
          <milnode-section-text>{{ $t('pages.home.privacy.text24') }}</milnode-section-text>
          <milnode-section-sub-header>{{ $t('pages.home.privacy.header25') }}</milnode-section-sub-header>
          <milnode-section-text>{{ $t('pages.home.privacy.text25', { name: $applicationName, contact: $applicationContact }) }}</milnode-section-text>
          <milnode-section-sub-header>{{ $t('pages.home.privacy.header26') }}</milnode-section-sub-header>
          <milnode-section-text>{{ $t('pages.home.privacy.text26', { name: $applicationName }) }}</milnode-section-text>
          <milnode-section-sub-header>{{ $t('pages.home.privacy.header27') }}</milnode-section-sub-header>
          <milnode-section-text>{{ $t('pages.home.privacy.text27', { name: $applicationName }) }}</milnode-section-text>
          <milnode-section-sub-header>{{ $t('pages.home.privacy.header28') }}</milnode-section-sub-header>
          <milnode-section-text>{{ $t('pages.home.privacy.text28', { name: $applicationName }) }}</milnode-section-text>
        </section>
      </v-flex>
    </v-layout>
  </milnode-page>
</template>
