<template>
  <v-container fluid>
    <v-layout
      align-center
      justify-center>
      <v-flex xs12>
        <v-card class="elevation-12">
          <v-toolbar
            dark
            color="primary">
            <v-toolbar-title>{{ $t('pages.home.privacy.h1') }}</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <section>
              <milnode-section-header>{{ $t('pages.home.privacy.header11') }}</milnode-section-header>
              <milnode-section-text>{{ $t('pages.home.privacy.text11', { name: $applicationName }) }}</milnode-section-text>
            </section>
            <section>
              <milnode-section-header>{{ $t('pages.home.privacy.header21') }}</milnode-section-header>
              <milnode-section-text>{{ $t('pages.home.privacy.text21', { name: $applicationName }) }}</milnode-section-text>
              <milnode-section-header>{{ $t('pages.home.privacy.header22') }}</milnode-section-header>
              <milnode-section-text>{{ $t('pages.home.privacy.text22', { name: $applicationName }) }}</milnode-section-text>
              <milnode-section-header>{{ $t('pages.home.privacy.header23') }}</milnode-section-header>
              <milnode-section-text>{{ $t('pages.home.privacy.text23', { name: $applicationName }) }}</milnode-section-text>
              <milnode-section-header>{{ $t('pages.home.privacy.header24') }}</milnode-section-header>
              <milnode-section-text>{{ $t('pages.home.privacy.text24') }}</milnode-section-text>
              <milnode-section-header>{{ $t('pages.home.privacy.header25') }}</milnode-section-header>
              <milnode-section-text>{{ $t('pages.home.privacy.text25', { name: $applicationName, contact: $applicationContact }) }}</milnode-section-text>
              <milnode-section-header>{{ $t('pages.home.privacy.header26') }}</milnode-section-header>
              <milnode-section-text>{{ $t('pages.home.privacy.text26', { name: $applicationName }) }}</milnode-section-text>
              <milnode-section-header>{{ $t('pages.home.privacy.header27') }}</milnode-section-header>
              <milnode-section-text>{{ $t('pages.home.privacy.text27', { name: $applicationName }) }}</milnode-section-text>
              <milnode-section-header>{{ $t('pages.home.privacy.header28') }}</milnode-section-header>
              <milnode-section-text>{{ $t('pages.home.privacy.text28', { name: $applicationName }) }}</milnode-section-text>
            </section>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
