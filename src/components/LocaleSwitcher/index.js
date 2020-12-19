import { useRouter } from 'next/router'
import { locales, languageNames } from '../../config/i18n.config'
import React from 'react'
import { Apps } from '@material-ui/icons'
import Link from 'next/link'
import CustomDropdown from '../CustomDropdown/CustomDropdown'
import styles from 'src/assets/jss/nextjs-material-kit/components/headerLinksStyle.js'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(styles)

const LocaleSwitcher = () => {
  const router = useRouter()
  const locale = router.locale
  const handleLocaleChange = React.useCallback(
    (locale) => {
      router.push(router.pathname, router.pathname, { locale })
    },
    [router]
  )
  const classes = useStyles()
  return (
    <CustomDropdown
      noLiPadding
      navDropdown
      buttonText={languageNames[locale]}
      buttonProps={{
        className: classes.navLink,
        color: 'transparent'
      }}
      dropdownList={locales.map((locale) => (
        <Link href="/investors">
          <a
            className={classes.dropdownLink}
            onClick={() => handleLocaleChange(locale)}
          >
            {languageNames[locale]}
          </a>
        </Link>
      ))}
    />
  )
}

export default LocaleSwitcher
