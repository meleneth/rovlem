import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

import type { Item, Items } from '@/types'

export const useItemStore = defineStore('item', () => {
  const item_definitions = ref<Item[]>([
    { name: 'Raw Salmon', description: 'a tasty fish', worth: 10 },
    { name: 'Raw Minnow', description: 'barely worth catching', worth: 2 },
    { name: 'Raw Shrimp', description: 'delicious with butter', worth: 1 }
  ])

  const items_by_name = reactive<Items>({})
  item_definitions.value.forEach((i: Item) => (items_by_name[i.name] = i))

  return { item_definitions, items_by_name }
})
