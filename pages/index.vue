<template>
  <AppsList :apps="apps"/>
</template>

<script>
import AppsList from '@/components/AppsList'
import appsData from '@/apps.json'

const apps = appsData.apps
</script>
