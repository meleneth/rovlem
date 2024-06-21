<script setup lang="ts">
import { ref } from 'vue'
import { useSkillStore } from '@/stores/skill'
import { useInventoryStore } from '@/stores/inventory'
import { storeToRefs } from 'pinia'

const inventory_store = useInventoryStore()
const { inventory } = storeToRefs(inventory_store)

const skill_store = useSkillStore()
const { cooking_skills, current_skill_target } = storeToRefs(skill_store)
console.log(cooking_skills)
</script>

<template lang="pug">
  ul
    li(v-for="skill in cooking_skills")
      | {{ skill.name }} (
      | {{ inventory[skill.name] }}
      | )
      | produces: 
      | {{ skill.produces }} (
      | {{ inventory[skill.produces] }}
      | ) in 
      | {{ skill.ticks }} ticks.
      | required level:
      | {{ skill.cooking_level_required }}
      p(@click="skill_store.change_skill('Cooking', skill.name)")
        | cookme
</template>
