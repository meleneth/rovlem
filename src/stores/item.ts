import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useItemStore = defineStore('item', () => {
  const items = ref([
    {name: 'Raw Salmon', xp: {fishing: 5}, description: 'a tasty fish', ticks: 10},
    {name: 'Raw Minnow', xp: {fishing: 1}, description: 'barely worth catching', ticks: 4},
    {name: 'Raw Shrimp', xp: {fishing: 3}, description: 'delicious with butter', ticks: 7}
  ]);

  return { items }
})
