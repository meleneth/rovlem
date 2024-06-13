<script setup lang="ts">
import { ref } from 'vue'

import ItemInfo from '../components/ItemInfo.vue'
import SkillInfo from '../components/SkillInfo.vue'

const skills = ref([
  { name: 'Fishing', xp: 0, level: 1, maxlevel: 99, description: "catch raw fish"},
  { name: 'Cooking', xp: 0, level: 1, maxlevel: 99, description: "Cook raw food, increasing the amount healed"}
])

const inventory = ref({})

const items = ref([
  {name: 'Raw Salmon', xp: {fishing: 5}, description: 'a tasty fish', ticks: 10},
  {name: 'Raw Minnow', xp: {fishing: 1}, description: 'barely worth catching', ticks: 4},
  {name: 'Raw Shrimp', xp: {fishing: 3}, description: 'delicious with butter', ticks: 7}
]);

function gain_skill_xp(skill, xp) {
  skill.xp = skill.xp + xp
  if(skill.xp > (skill.level * 10)) {
    skill.level = skill.level + 1
  }
}

var num_ticks = ref(0);
const ticktimer = setInterval(() => {
  num_ticks.value = num_ticks.value + 1;
  if (num_ticks.value > current_skill_target.ticks) {
    num_ticks.value -= current_skill_target.ticks
    inventory.value[current_skill_target.name] = (inventory.value[current_skill_target.name] || 0) + 1
    gain_skill_xp(current_skill, current_skill_target.xp.fishing)
  }
}, 100);

const current_skill_target = items.value[0]
const current_skill = skills.value[0]

</script>

<template lang="pug">
  ul
    li(v-for="skill in skills")
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
