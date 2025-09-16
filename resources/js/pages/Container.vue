<script lang="ts" setup>
  import { RootContainer } from '@creopse/vue'

  const { getFinalPageSections, getComponents, page } = useContent()

  const sections = getFinalPageSections()
  const components = getComponents()
</script>

<template>
  <Page>
    <AppHead />
    <RootContainer :page="page" :sections="sections" :components="components" />
  </Page>
</template>
