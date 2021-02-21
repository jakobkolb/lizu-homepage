import React from 'react'

import {InfoElement} from "./InfoElement";

import ImageFile from '/public/img/team/jakob.jpg'

export default {
    title: 'Components/InfoElement',
    component: InfoElement,
}

const Template = (args) => <InfoElement {...args} />

export const Default = Template.bind({})
Default.args = {
    imagePath: ImageFile,
    headerText: 'Header Text',
    bodyText: 'Body Text'
}