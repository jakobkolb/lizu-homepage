/*eslint-disable*/
import React from 'react'
import Link from 'next/link'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Tooltip from '@material-ui/core/Tooltip'
import Icon from '@material-ui/core/Icon'

// @material-ui/icons
import { Apps } from '@material-ui/icons'

// core components
import CustomDropdown from 'src/components/CustomDropdown/CustomDropdown.js'
import Button from 'src/components/CustomButtons/Button.js'

import styles from 'src/assets/jss/nextjs-material-kit/components/headerLinksStyle.js'
import LocaleSwitcher from '../LocaleSwitcher'

const useStyles = makeStyles(styles)

export default function HeaderLinks(props) {
  const classes = useStyles()
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Informationen"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="/investors">
              <a className={classes.dropdownLink}>Für Investor:innen</a>
            </Link>,
            <Link href="/members">
              <a className={classes.dropdownLink}>Für Interessent:innen</a>
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/blog" locale="de" passHref>
          <Button href="/blog" color="transparent" className={classes.navLink}>
            <Icon className={classes.icons}>book</Icon> Neuigkeiten
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="telegram-tooltip"
          title="Follow us on Telegram"
          placement={'top'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://t.me/joinchat/Bfy8p02aayBkWCll2YxCD"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-telegram'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <LocaleSwitcher />
      </ListItem>
    </List>
  )
}
