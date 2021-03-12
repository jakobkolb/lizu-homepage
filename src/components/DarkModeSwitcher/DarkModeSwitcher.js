import Switcher from './Switcher'
import { useEffect, useState } from 'react'

export const DarkModeSwitcher = () => {
  const [darkTheme, setDarkTheme] = useState(true)

  const handleToggle = () => {
    setDarkTheme(!darkTheme)
  }
  const storeUserSetPreference = (pref) => {
    localStorage.setItem('theme', pref)
  }

  const root = document.documentElement
  useEffect(() => {
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    )
    setDarkTheme(initialColorValue === 'dark')
  }, [])

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        root.setAttribute('data-theme', 'dark')
        storeUserSetPreference('dark')
      } else {
        root.removeAttribute('data-theme')
        storeUserSetPreference('light')
      }
    }
  }, [darkTheme])
  return <Switcher active={darkTheme} onChange={handleToggle} />
}
