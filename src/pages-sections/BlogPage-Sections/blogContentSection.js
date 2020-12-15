import * as R from 'ramda'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styles from 'src/assets/jss/nextjs-material-kit/pages/blogPage'

import glob from 'glob'
import BlogpostCard from './blogPostCard'
const useStyles = makeStyles(styles)

const getFilenames = (path) => glob.sync(path + '*.json')

const BlogContent = ({ path }) => {
  const classes = useStyles()
  const blogPostPaths = getFilenames(path)
  const blogPosts = R.map(BlogpostCard, blogPostPaths)
  return <div className={classes.container}>{blogPosts}</div>
}

export default BlogContent
