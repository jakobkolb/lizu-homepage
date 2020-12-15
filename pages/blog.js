import Header from '../src/components/Header/Header'
import HeaderLinks from '../src/components/Header/HeaderLinks'
import Footer from '../src/components/Footer/Footer'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styles from 'src/assets/jss/nextjs-material-kit/pages/blogPage'
import GridContainer from '../src/components/Grid/GridContainer'
import GridItem from '../src/components/Grid/GridItem'
import BlogContent from '../src/pages-sections/BlogPage-Sections/blogContentSection'

const dashboardRoutes = []
const useStyles = makeStyles(styles)

export default function Blog(props) {
  const classes = useStyles()
  const { ...rest } = props
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Lieber Zusammen"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 10,
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
        <BlogContent path={'content/blog'} />
      </div>
      <Footer />
    </div>
  )
}
