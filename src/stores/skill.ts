import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useSkillStore = defineStore('skills', () => {
  const skill_definitions = ref([
    { name: 'Fishing', xp: 0, level: 1, maxlevel: 99, description: "catch raw fish"},
    { name: 'Cooking', xp: 0, level: 1, maxlevel: 99, description: "Cook raw food, increasing the amount healed"}
  ])
  
  const skills = reactive({})
  skill_definitions.value.forEach((s) => skills[s.name] = s)

  function gain_skill_xp(skill_name, xp) {
    const skill = skills[skill_name]
    skill.xp = skill.xp + xp
    if(skill.xp > (skill.level * 10)) {
      skill.level++
      console.log(`Gained level ${skill.level} in ${skill.name}`)
    }
  }

  return { skills, skill_definitions, gain_skill_xp }
})
