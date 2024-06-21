<script setup lang="ts">
import { useItemStore } from '@/stores/item'
import { useSkillStore } from '@/stores/skill'
import { useInventoryStore } from '@/stores/inventory'
import { storeToRefs } from 'pinia'

import ItemInfo from '../components/ItemInfo.vue'
import SkillInfo from '../components/SkillInfo.vue'

const item_store = useItemStore()
const { items_by_name } = storeToRefs(item_store)

const inventory_store = useInventoryStore()
const { inventory } = storeToRefs(inventory_store)

const skill_store = useSkillStore()
const { skills, skill_definitions, current_skill_target, current_skill, change_skill, fishing_skills } = storeToRefs(skill_store)
</script>

<template lang="pug">
  ul
    li(v-for="skill in fishing_skills")
      <ItemInfo :item="items_by_name[skill.name]" />
      p(@click="skill_store.change_skill('Fishing', skill.name)")
        | fishme
</template>
