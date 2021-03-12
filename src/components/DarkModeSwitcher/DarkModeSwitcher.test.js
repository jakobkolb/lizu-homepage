import { DarkModeSwitcher } from './DarkModeSwitcher'
import { createMount } from '@material-ui/core/test-utils'
import { Switch } from '@material-ui/core/Switch'
import { assert } from 'chai'

describe('DarkModeSwitcher', () => {
  let shallow

  beforeEach(() => {
    shallow = createMount()
  })

  test('Toggle', () => {
    const wrapper = shallow(<DarkModeSwitcher />)
    const input = wrapper.find('input')
    const root = document.documentElement

    assert.equal(localStorage.getItem('theme'), 'light')
    assert.equal(root.getAttribute('data-theme'), undefined)

    input.simulate('change')

    assert.equal(localStorage.getItem('theme'), 'dark')
    assert.equal(root.getAttribute('data-theme'), 'dark')
  })
})
