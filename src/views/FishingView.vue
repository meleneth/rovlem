<script setup lang="ts">
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
const { skills, skill_definitions, current_skill_target, current_skill, change_skill } = storeToRefs(skill_store)
</script>

<template lang="pug">
  ul
    li(v-for="skill in skill_definitions")
      <SkillInfo :skill="skill" />
  ul
    li(v-for="item in items")
      <ItemInfo :item="item" />
      p(@click="skill_store.change_skill('Fishing', item)")
        | fishme
</template>
