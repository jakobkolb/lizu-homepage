import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import CardBody from '../../components/Card/CardBody'
import * as R from 'ramda'
import ReactMarkdown from 'react-markdown'

import { makeStyles } from '@material-ui/core/styles'
import styles from 'src/assets/jss/nextjs-material-kit/pages/blogPage'

const useStyles = makeStyles(styles)

const BlogpostCard = ({ thumbnail, title, date, body }) => {
  const [expand, setExpand] = useState(false)

  const classes = useStyles()
  const expandText = expand ? 'weniger' : '...mehr'
  return (
    <div className={classes.section}>
      <Card>
        <img className={classes.imgCardTop} src={thumbnail} />
        <CardBody>
          <h2 className={classes.cardTitle}>{title}</h2>
          <h4 className={classes.cardTitle}>{date}</h4>
          <ReactMarkdown className={classes.twoColumnText}>
            {truncateText(body, 350, !expand)}
          </ReactMarkdown>
          <a onClick={() => setExpand(!expand)}>{expandText}</a>
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
