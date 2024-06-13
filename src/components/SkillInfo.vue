<script setup lang="ts">
defineProps<{
  skill: Object
}>()
</script>

<template lang="pug">
  h1(class="bg-orange-500") {{ skill.name }} {{ skill.level }} / {{ skill.maxlevel }}
  p {{ skill.description }} 
</template>
