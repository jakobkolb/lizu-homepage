import React from 'react'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'

import Header from 'src/components/Header/Header.js'
import Footer from 'src/components/Footer/Footer.js'
import HeaderLinks from 'src/components/Header/HeaderLinks.js'

import styles from 'src/assets/jss/nextjs-material-kit/pages/landingPage.js'
import InfoSection from 'src/pages-sections/LandingPage-Sections/InfoSection.jsx'
import ContactSection from 'src/pages-sections/LandingPage-Sections/ContactSection.js'

import heroData from 'content/hero.json'
import landingData from 'content/landingContent.json'
import HeroSection from '../src/pages-sections/LandingPage-Sections/HeroSection'

const dashboardRoutes = []

const useStyles = makeStyles(styles)

export default function LandingPage(props) {
  const classes = useStyles()
  const { ...rest } = props
  const infoSections = landingData['items'].map((info) => (
    <InfoSection props={info} />
  ))
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Lieber Zusammen"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white'
        }}
        {...rest}
      />
      <HeroSection {...heroData} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {infoSections}
          <div id="contact">
            <ContactSection />
          </div>
        </div>
      </div>
      <Footer />

      <style global jsx>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
    </div>
  )
}
