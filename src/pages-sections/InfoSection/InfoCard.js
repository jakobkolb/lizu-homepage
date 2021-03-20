import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Card from 'src/components/Card/Card'
import CardBody from 'src/components/Card/CardBody'

import styles from 'src/assets/jss/nextjs-material-kit/pages/landingPageSections/infoStyle'
import { truncateText } from '../../helpers/truncateText'

const useStyles = makeStyles(styles)

const InfoCard = (props) => {
  const [expand, setExpand] = useState(false)
  const classes = useStyles()
  const {
    content: { headline, image, imageCap, text }
  } = props.props
  return (
    <a alt={'Expand info card'} onClick={() => setExpand(!expand)}>
      <Card>
        <img className={classes.imgCardTop} src={image} alt={imageCap} />
        <CardBody>
          <h2 className={classes.cardTitle}>{headline}</h2>
          <p className={classes.twoColumnText}>
            {truncateText(text, 350, !expand)}
          </p>
        </CardBody>
      </Card>
    </a>
  )
}

export default InfoCard
