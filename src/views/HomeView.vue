<script setup lang="ts">
import { ref } from 'vue'

import ItemInfo from '../components/ItemInfo.vue'
import SkillInfo from '../components/SkillInfo.vue'

const skills = ref([
  { name: 'Fishing', level: 1, maxlevel: 99, description: "catch raw fish"},
  { name: 'Cooking', level: 1, maxlevel: 99, description: "Cook raw food, increasing the amount healed"}
])

const items = ref([
  {name: 'Raw Salmon', xp: {fishing: 5}, description: 'a tasty fish'},
  {name: 'Raw Minnow', xp: {fishing: 1}, description: 'barely worth catching'},
  {name: 'Raw Shrimp', xp: {fishing: 3}, description: 'delicious with butter'}
]);

</script>

<template lang="pug">
  ul
    li(v-for="skill in skills")
      <SkillInfo :skill="skill" />
  ul
    li(v-for="item in items")
      <ItemInfo :item="item" />
</template>
