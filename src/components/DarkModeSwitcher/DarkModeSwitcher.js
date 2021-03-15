import Switcher from './Switcher'
import { useEffect, useState } from 'react'

import styles from 'src/assets/jss/nextjs-material-kit/components/headerLinksStyle.js'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(styles)

export const DarkModeSwitcher = () => {
  const classes = useStyles()

  const [darkTheme, setDarkTheme] = useState(false)

  const handleToggle = () => {
    setDarkTheme(!darkTheme)
  }
  const storeUserSetPreference = (pref) => {
    localStorage.setItem('theme', pref)
  }

  // don't do stuff that depends on browser environment during SSR
  if (process.browser) {
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
  }
  return (
    <div className={classes.navLink}>
      <Switcher active={darkTheme} onChange={handleToggle} />
    </div>
  )
}
