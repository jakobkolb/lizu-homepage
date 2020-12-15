import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Card from 'src/components/Card/Card'
import CardBody from 'src/components/Card/CardBody'

import styles from 'src/assets/jss/nextjs-material-kit/pages/landingPageSections/infoStyle'
import * as R from 'ramda'

const useStyles = makeStyles(styles)

const InfoSection = (props) => {
  const [expand, setExpand] = useState(false)
  const classes = useStyles()
  const {
    content: { headline, image, imageCap, text }
  } = props.props
  const expandText = expand ? 'weniger' : '...mehr'
  return (
    <div className={classes.section}>
      <Card>
        <img className={classes.imgCardTop} src={image} alt={imageCap} />
        <CardBody>
          <h2 className={classes.cardTitle}>{headline}</h2>
          <p className={classes.twoColumnText}>
            {truncateText(text, 350, !expand)}
            <a onClick={() => setExpand(!expand)}>{expandText}</a>
          </p>
        </CardBody>
      </Card>
    </div>
  )
}
export const truncateText = R.curry((text, truncateAt, truncate) => {
  if (truncate) {
    return R.pipe(R.splitAt(truncateAt), R.head)(text)
  } else {
    return text
  }
})

export default InfoSection
