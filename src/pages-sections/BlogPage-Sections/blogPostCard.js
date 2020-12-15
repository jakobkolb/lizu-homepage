import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import CardBody from '../../components/Card/CardBody'
import * as R from 'ramda'

import { makeStyles } from '@material-ui/core/styles'
import styles from 'src/assets/jss/nextjs-material-kit/pages/blogPage'
import loadJsonFile from 'load-json-file'

const useStyles = makeStyles(styles)

export async function getStaticProps(context) {
  const {
    props: { path }
  } = context
  return await loadJsonFile(path)
}

const BlogpostCard = ({ image, title, date, body }) => {
  const [expand, setExpand] = useState(false)

  const classes = useStyles()
  const expandText = expand ? 'weniger' : '...mehr'
  return (
    <div className={classes.section}>
      <Card>
        <img className={classes.imgCardTop} src={image} />
        <CardBody>
          <h2 className={classes.cardTitle}>{title}</h2>
          <h4 className={classes.cardTitle}>{date}</h4>
          <p className={classes.twoColumnText}>
            {truncateText(body, 350, !expand)}
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

export default BlogpostCard
