<template>
  <v-app class="text-center my-8">
    <h1>
      <v-icon class="error-icon d-block">far fa-frown</v-icon>
      <span v-if="error.statusCode === 404">{{ pageNotFound }}</span>
      <span v-else>{{ otherError }}</span>
    </h1>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data() {
    return {
      pageNotFound: 'Page not found',
      otherError: 'An error occurred'
    }
  }
}
</script>

<style scoped>
.error-icon {
  font-size: 3rem !important;
}
</style>
