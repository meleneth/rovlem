<script setup lang="ts">
import { ref } from 'vue'
import { useItemStore } from '@/stores/item'
import { useSkillStore } from '@/stores/skill'
import { useInventoryStore } from '@/stores/inventory'
import { storeToRefs } from 'pinia'

import ItemInfo from '../components/ItemInfo.vue'
import SkillInfo from '../components/SkillInfo.vue'

const item_store = useItemStore()
const { items } = storeToRefs(item_store)

const inventory_store = useInventoryStore()
const { inventory } = storeToRefs(inventory_store)
</script>
<template lang="pug">
  table
    tr(v-for="(qty, name) of inventory")
      td {{ name }}
      td {{ qty }}
</template>
