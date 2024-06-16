import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useInventoryStore = defineStore('inventory', () => {
  const inventory = reactive({})

  function add_items(item_name, qty) {
    const new_qty = (inventory[item_name] || 0) + qty
    inventory[item_name] = new_qty
  }

  return { inventory, add_items }
})
