import Document, { Html, Head, Main, NextScript } from 'next/document'

function setInitialColorMode() {
  function getInitialColorMode() {
    const savedPreference = window.localStorage.getItem('theme')
    const hasSavedPreference = typeof savedPreference === 'string'

    /**
     * If the user has explicitly chosen light or dark,
     * use it. Otherwise, this value will be null.
     */
    if (hasSavedPreference) {
      return savedPreference
    }

    // If there is no saved preference, use a media query
    const mediaQuery = '(prefers-color-scheme: dark)'
    const mql = window.matchMedia(mediaQuery)

    const hasOSPreference = typeof mql.matches === 'boolean'
    if (hasOSPreference) {
      return mql.matches ? 'dark' : 'light'
    }

    // default to 'light'.
    return 'light'
  }

  const colorMode = getInitialColorMode()
  const root = document.documentElement
  root.style.setProperty('--initial-color-mode', colorMode)

  // add HTML attribute if dark mode
  if (colorMode === 'dark')
    document.documentElement.setAttribute('data-theme', 'dark')
}

// our function needs to be a string
export const blockingSetInitialColorMode = `(function() {
        ${setInitialColorMode.toString()}
        setInitialColorMode();
})()
`
