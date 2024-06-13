<script setup lang="ts">
defineProps<{
  item: Object
}>()
</script>

<template lang="pug">
  h1 {{ item.name }}
  p {{ item.description }}
</template>
