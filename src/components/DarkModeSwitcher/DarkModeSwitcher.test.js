/**
 * @jest-environment jsdom
 */

import React from 'react'
import { DarkModeSwitcher } from './DarkModeSwitcher'
import { createMount } from '@material-ui/core/test-utils'
import { assert } from 'chai'
import { jest } from '@jest/globals'

describe('DarkModeSwitcher', () => {
  let mount

  beforeEach(() => {
    mount = createMount()
    localStorage.clear()
    jest.clearAllMocks()
    localStorage.setItem.mockClear()
  })

  test('Toggle', () => {
    process.browser = true // set to true to enable hooks in DarkModeSwitcher
    const wrapper = mount(<DarkModeSwitcher />)
    const input = wrapper.find('input')
    const root = document.documentElement

    assert.equal(
      localStorage.getItem('theme'),
      'light',
      'default state of theme is light'
    )
    assert.equal(
      root.getAttribute('data-theme'),
      undefined,
      'Default state of data-theme is undefined'
    )

    input.simulate('change')

    assert.equal(
      localStorage.getItem('theme'),
      'dark',
      'After toggling, theme is dark'
    )
    assert.equal(
      root.getAttribute('data-theme'),
      'dark',
      'After toggling, data-theme is dark'
    )
  })
  test('Read initial state from localStorage', () => {
    localStorage.setItem('theme', 'dark')
    assert.equal(
      localStorage.getItem('theme'),
      'dark',
      'Setting item in local storage successfully'
    )
    const wrapper = mount(<DarkModeSwitcher />)
    const input = wrapper.find('input')
  })
})
