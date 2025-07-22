<script lang="ts" setup>
  const { isUserConnected } = storeToRefs(useAuthStore())

  if (!isUserConnected.value) {
    router.get('/login', {}, { replace: true })
  }
</script>

<template>
  <Page>
    <slot />
  </Page>
</template>
