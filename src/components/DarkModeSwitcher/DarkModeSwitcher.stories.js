import React from 'react'

import Switcher from './Switcher'

export default {
  title: 'Components/DarkModeSwitcher',
  component: Switcher
}

const Template = (args) => <Switcher {...args} />

export const Active = Template.bind({})
Active.args = {
  active: true,
  onChange: () => console.log('clicked')
}

export const Inactive = Template.bind({})
Inactive.args = {
  active: false
}
