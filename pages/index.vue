<template>
  <AppsList :apps="apps"/>
</template>

<script>
import AppsList from '@/components/AppsList.vue'
import appsData from '@/apps.json'

export default {
  components: {
    AppsList
  },
  data() {
    return {
      apps: appsData.apps
    }
  }
}
</script>
