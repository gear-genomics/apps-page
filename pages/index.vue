<template>
  <AppsList :apps="apps" />
</template>

<script>
import AppsList from '@/components/AppsList'
export default {
  name: 'App',
  components: {
    AppsList
  },
  data: () => ({
    apps: require('@/apps.json')
  })
}
</script>
