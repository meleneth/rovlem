<script setup lang="ts">
defineProps<{
  item: Object
}>()
</script>

<template>
  <h1>{{ item.name }}</h1>
  <p>{{ item.description }}</p>
</template>
