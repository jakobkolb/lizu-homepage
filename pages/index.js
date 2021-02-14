import React from 'react'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'

import Header from 'src/components/Header/Header.js'
import Footer from 'src/components/Footer/Footer.js'
import HeaderLinks from 'src/components/Header/HeaderLinks.js'

import styles from 'src/assets/jss/nextjs-material-kit/pages/landingPage.js'
import InfoSection from 'src/pages-sections/InfoSection/InfoSection.js'
import ContactSection from 'src/pages-sections/ContactSection/ContactSection.js'

import HeroSection from '../src/pages-sections/HeroSection/HeroSection'
import { loadContentWithLocale } from '../src/helpers/loadContent'

const dashboardRoutes = []

const useStyles = makeStyles(styles)

export async function getStaticProps(context) {
  const loadContentWithLocaleSet = loadContentWithLocale(context.locale)
  return {
    props: {
      landingData: await loadContentWithLocaleSet('content/landing.json'),
      heroData: await loadContentWithLocaleSet('content/hero.json'),
      headerData: await loadContentWithLocaleSet('content/header.json'),
      footerData: await loadContentWithLocaleSet('content/footer.json'),
      contactData: await loadContentWithLocaleSet('content/contact.json')
    }
  }
}

export default function LandingPage(props) {
  const classes = useStyles()
  const { ...rest } = props
  const infoSections = props.landingData['items'].map((info) => (
    <InfoSection props={info} />
  ))
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand={props.headerData.brand}
        rightLinks={<HeaderLinks {...props.headerData} />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white'
        }}
        {...rest}
      />
      <HeroSection {...props.heroData} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div id="contact">
            <ContactSection {...props.contactData} />
          </div>
        </div>
      </div>
      <Footer {...props.footerData} />

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
