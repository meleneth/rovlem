import { reactive } from 'vue'
import { defineStore } from 'pinia'

import type { Inventory } from '@/types'

export const useInventoryStore = defineStore('inventory', () => {
  const inventory = reactive<Inventory>({})

  function add_items(item_name: string, qty: number) {
    const new_qty = (inventory[item_name] || 0) + qty
    inventory[item_name] = new_qty
  }

  return { inventory, add_items }
})
