<script setup lang="ts">
import { ref } from 'vue'

import ItemInfo from '../components/ItemInfo.vue'

const items = ref([
  {name: 'a name', description: 'a description'},
  {name: 'a second name', description: 'another description'},
  {name: 'a third name', description: 'a third description'}
]);

</script>

<template>
  <main>
    <ItemInfo :item="items[0]" />
    <ItemInfo :item="items[1]" />
    <ItemInfo :item="items[2]" />
  </main>
</template>
