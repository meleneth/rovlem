import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SkillInfo from '../SkillInfo.vue'

describe('ItemInfo', () => {
  it('renders properly', () => {
    const wrapper = mount(SkillInfo, {
      props: {
        skill: {
          name: 'Thing',
          xp: { someskill: 5 },
          level: 1,
          maxlevel: 99,
          description: 'A description'
        }
      }
    })
    expect(wrapper.text()).toContain('Thing')
    expect(wrapper.text()).toContain('A description')
  })
})
