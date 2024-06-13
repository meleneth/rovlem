<script setup lang="ts">
defineProps<{
  item: Object
}>()
</script>

<template lang="pug">
  h1(class="bg-green-500") {{ item.name }}
  p {{ item.description }}
</template>
