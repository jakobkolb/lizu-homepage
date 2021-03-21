import React from 'react'

import {InfoElementWithIcon} from "./InfoElementWithIcon";

export default {
    title: 'Components/InfoElementWithIcon',
    component: InfoElementWithIcon,
}

const Template = (args) => <InfoElementWithIcon {...args} />

export const Default = Template.bind({})
Default.args = {
    image: '/icons/icon_bycicle.png',
    headerText: 'Für Geschäfte',
    bodyText: 'Wir helfen Ihnen, Ihre Produkte über unseren Online-Marktplatz zu verkaufen. \n * Unser Marktplatz ist exclusiv für lokale Läden und Produzenten. \n * Wir helfen beim Einstellen der Produkte. \n * Falls verfügbar, auch automatisch per Schnittstelle. \n * Bestellungen werden einmal am Tag zur festen Zeit abgeholt.'
}