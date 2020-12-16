import * as R from 'ramda'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styles from 'src/assets/jss/nextjs-material-kit/pages/blogPage'

import BlogpostCard from './blogPostCard'
const useStyles = makeStyles(styles)

const BlogContent = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      {R.map(BlogpostCard, props.blogPosts)}
    </div>
  )
}

export default BlogContent
