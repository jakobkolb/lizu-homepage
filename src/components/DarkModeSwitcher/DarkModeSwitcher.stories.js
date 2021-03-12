import React from 'react'

import { DarkModeSwitcher } from './DarkModeSwitcher'

export default {
  title: 'Components/DarkModeSwitcher',
  component: DarkModeSwitcher
}

localStorage.setItem('theme', 'dark')

const Template = (args) => <DarkModeSwitcher {...args} />

export const Active = Template.bind({})
Active.args = {
  active: true,
  onChange: () => console.log('clicked')
}

export const Inactive = Template.bind({})
Inactive.args = {
  active: false
}
