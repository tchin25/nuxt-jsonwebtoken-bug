<script setup lang="ts">
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/protected/globally",
  },
});
</script>

<template>
  <div>
    <p>Hey!</p>
  </div>
</template>
