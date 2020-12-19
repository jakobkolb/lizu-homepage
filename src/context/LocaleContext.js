import React from 'react'
import { defaultLocale } from '../config/i18n.config'

export const LocaleContext = React.createContext({
  locale: defaultLocale,
  setLocale: () => null
})
