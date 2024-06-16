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

const skill_store = useSkillStore()
const { skills, skill_definitions, current_skill_target, current_skill } = storeToRefs(skill_store)
</script>

<template lang="pug">
  ul
    li(v-for="skill in skill_definitions")
      <SkillInfo :skill="skill" />
  ul
    li(v-for="item in items")
      <ItemInfo :item="item" />
  hr
  h1 Currently Skilling:
    <SkillInfo :skill="current_skill_target" />
  h1(class="bg-purple-500") Inventory
  table
    tr(v-for="(qty, name) of inventory")
      td {{ name }}
      td {{ qty }}
</template>
