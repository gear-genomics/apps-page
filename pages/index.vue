<template>
  <AppsList :apps="apps"/>
</template>

<script>
import AppsList from '@/components/AppsList'
import apps from '@/apps.yaml'

export default {
  name: 'App',
  components: {
    AppsList
  },
  data: () => ({ apps })
}
</script>
