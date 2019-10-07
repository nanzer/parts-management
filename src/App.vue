<template>
  <v-app id="inspire">
    <router-view/>
    <core-toolbar v-if="hasToolbar" />
  </v-app>
</template>

<script>
  export default {
    data: () => ({
    }),
    async mounted () {
      if (!this.hash) return
      await this.$nextTick()
      await waitForReadystate()
      this.$vuetify.goTo(this.hash)
    },
  }
</script>

<style>
  .text-decoration-none {
    text-decoration: none;
  }
  .wf-loading .material-icons {
    display: none;
  }
</style>
