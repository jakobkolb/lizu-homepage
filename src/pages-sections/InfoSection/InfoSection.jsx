import InfoCard from './InfoCard'
import React from 'react'

import styles from 'src/assets/jss/nextjs-material-kit/pages/landingPageSections/infoStyle'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(styles)

export const InfoSection = ({ items }) => {
  const classes = useStyles()
  return (
    <div className={classes.section}>
      {items.map((info, index) => (
        <InfoCard props={info} key={index} />
      ))}
    </div>
  )
}
