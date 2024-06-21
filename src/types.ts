export type Skill = {
  name: string
  xp: number
  level: number
  maxlevel: number
  description: string
}

export type Skills = {
  [key: string]: Skill
}

export type Inventory = {
  [key: string]: number
}

export type XPPacket = {
  fishing?: number
  cooking?: number
}

export type Item = {
  name: string
  description: string
  worth: number
}

export type Items = {
  [key: string]: Item
}

export type FishingSkill = {
  name: string
  xp: XPPacket
  description: string
  min_ticks: number
  max_ticks: number
  ticks: number // fixme
  fishing_level_required: number
}

export type FishingSkills = {
  [key: string]: FishingSkill
}

export type CookingSkill = {
  name: string
  produces: string
  xp: XPPacket
  description: string
  ticks: number
  cooking_level_required: number
}

export type CookingSkills = {
  [key: string]: CookingSkill
}

export type AllSkills = {
  Fishing: FishingSkills
  Cooking: CookingSkills
}

export type PossibleSkillingTarget = FishingSkill | CookingSkill
