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
const { skills, skill_definitions } = storeToRefs(skill_store)

const current_skill_target = items.value[0]
const current_skill = skills.value['Fishing']
var num_ticks = ref(0);

const ticktimer = setInterval(() => {
  num_ticks.value = num_ticks.value + 1;
  if (num_ticks.value > current_skill_target.ticks) {
    num_ticks.value -= current_skill_target.ticks
    inventory_store.add_items(current_skill_target.name, 1)
    skill_store.gain_skill_xp(current_skill.name, current_skill_target.xp.fishing)
  }
}, 100);
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
