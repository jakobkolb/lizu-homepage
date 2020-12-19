import Header from '../src/components/Header/Header'
import HeaderLinks from '../src/components/Header/HeaderLinks'
import Footer from '../src/components/Footer/Footer'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styles from 'src/assets/jss/nextjs-material-kit/pages/blogPage'
import GridContainer from '../src/components/Grid/GridContainer'
import GridItem from '../src/components/Grid/GridItem'
import BlogContent from '../src/pages-sections/BlogContentSection/blogContentSection'
import glob from 'glob'
import * as R from 'ramda'
import * as loadJsonFile from 'load-json-file'
import Bluebird from 'bluebird'
import loadContent from '../src/helpers/loadContent'

const dashboardRoutes = []
const useStyles = makeStyles(styles)

export async function getStaticProps(context) {
  const paths = glob.sync('content/blog/*.json')
  const blogPosts = await Bluebird.all(R.map(loadJsonFile, paths))
  return { 
    props: { 
      blogPosts: R.map(R.prop(context.locale), blogPosts),
      headerContent: await loadContent(context.locale, 'content/header.json'),
      footerContent: await loadContent(context.locale, 'content/footer.json')
          } 
        }
}

export default function Blog(props) {
  const classes = useStyles()
  const { ...rest } = props
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand={props.headerContent.brand}
        rightLinks={<HeaderLinks {...props.headerContent}/>}
        fixed
        changeColorOnScroll={{
          height: 50,
          color: 'white'
        }}
        {...rest}
      />
      <div className={classes.background}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <br />
              <br />
              <br />
              <br />
              <br />
              <h1 className={classes.title}>Blog</h1>
              <h4>Neuigkeiten aus dem Projekt.</h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
        <BlogContent blogPosts={props.blogPosts} />
        <br />
      </div>
      <Footer {...props.footerContent}/>
    </div>
  )
}
