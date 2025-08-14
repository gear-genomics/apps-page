<template>
  <AppsList :apps="apps"/>
</template>

<script>
import AppsList from '@/components/AppsList'
import appsData from '@/apps.yaml'

const apps = appsData.apps
console.log(appsData)
</script>
