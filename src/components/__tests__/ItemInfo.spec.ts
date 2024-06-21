import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ItemInfo from '../ItemInfo.vue'

describe('ItemInfo', () => {
  it('renders properly', () => {
    const wrapper = mount(ItemInfo, {
      props: { item: { name: 'Thing', description: 'A description' } }
    })
    expect(wrapper.text()).toContain('Thing')
    expect(wrapper.text()).toContain('A description')
  })
})
