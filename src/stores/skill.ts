import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { useItemStore } from '@/stores/item'
import { storeToRefs } from 'pinia'

import type { Skill, Skills, Item, CookingSkill, FishingSkill, PossibleSkillingTarget, AllSkills } from '@/types'

export const useSkillStore = defineStore('skills', () => {
  const skill_definitions = ref<Skill[]>([
    { name: 'Fishing', xp: 0, level: 1, maxlevel: 99, description: "catch raw fish"},
    { name: 'Cooking', xp: 0, level: 1, maxlevel: 99, description: "Cook raw food, increasing the amount healed"}
  ])

  const fishing_skills = ref<FishingSkill[]>([
    {name: 'Raw Salmon', xp: {fishing: 5}, description: 'a tasty fish', ticks: 4, min_ticks: 10, max_ticks: 16, fishing_level_required: 1},
    {name: 'Raw Minnow', xp: {fishing: 1}, description: 'barely worth catching', ticks: 7, min_ticks: 4, max_ticks: 9, fishing_level_required: 10},
    {name: 'Raw Shrimp', xp: {fishing: 3}, description: 'delicious with butter', ticks: 9, min_ticks: 7, max_ticks: 12, fishing_level_required: 20}
  ])

  const cooking_skills = ref<CookingSkill[]>([
    { name: "Raw Salmon", produces: "Salmon", xp: {cooking: 5}, description: "Seared with butter and chives", ticks: 20, cooking_level_required: 1 },
    { name: "Raw Minnow", produces: "Minnow", xp: {cooking: 5}, description: "Seared with butter and chives", ticks: 20, cooking_level_required: 10 },
    { name: "Raw Shrimp", produces: "Shrimp", xp: {cooking: 5}, description: "Seared with butter and chives", ticks: 20, cooking_level_required: 20 }
  ])

  const item_store = useItemStore()
  const { item_definitions } = storeToRefs(item_store)

  const skills_by_skill_name = reactive<AllSkills>({})
  skill_definitions.value.forEach((s) => skills_by_skill_name[s.name] = reactive({}))
  fishing_skills.value.forEach((s) => skills_by_skill_name['Fishing'][s.name] = s)
  cooking_skills.value.forEach((s) => skills_by_skill_name['Cooking'][s.name] = s)

  const skills = reactive<Skills>({})
  skill_definitions.value.forEach((s) => skills[s.name] = s)

  let current_skill_target = ref(false)
  let current_skill = ref(false)

  function change_skill(new_skill: string, target: string) {
    const my_target = this.skills_by_skill_name[new_skill][target]
    console.log(`Changing skill to ${new_skill} targetting ${target}`)
    this.current_skill = skills[new_skill]
    this.current_skill_target = my_target
  }

  function gain_skill_xp(skill_name: string, xp: number) {
    const skill = skills[skill_name]
    skill.xp = skill.xp + xp
    if(skill.xp > (skill.level * 10)) {
      skill.level++
      console.log(`Gained level ${skill.level} in ${skill.name}`)
    }
  }

  return { 
    skills,
    skill_definitions,
    gain_skill_xp,
    current_skill_target,
    current_skill,
    change_skill,
    fishing_skills,
    cooking_skills,
    skills_by_skill_name
  }
})
