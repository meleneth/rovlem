import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { useItemStore } from '@/stores/item'
import { storeToRefs } from 'pinia'

import type { Skill } from '@/types'

export const useSkillStore = defineStore('skills', () => {
  const skill_definitions = ref<Skill[]>([
    { name: 'Fishing', xp: 0, level: 1, maxlevel: 99, description: "catch raw fish"},
    { name: 'Cooking', xp: 0, level: 1, maxlevel: 99, description: "Cook raw food, increasing the amount healed"}
  ])

  const item_store = useItemStore()
  const { items } = storeToRefs(item_store)
  const skills = reactive({})
  skill_definitions.value.forEach((s) => skills[s.name] = s)

  let current_skill_target = items.value[0]
  let current_skill = skills['Fishing']

  function change_skill(new_skill, item) {
    this.current_skill = skills[new_skill]
    this.current_skill_target = item
  }

  function gain_skill_xp(skill_name, xp) {
    const skill = skills[skill_name]
    skill.xp = skill.xp + xp
    if(skill.xp > (skill.level * 10)) {
      skill.level++
      console.log(`Gained level ${skill.level} in ${skill.name}`)
    }
  }

  return { skills, skill_definitions, gain_skill_xp, current_skill_target, current_skill, change_skill }
})
