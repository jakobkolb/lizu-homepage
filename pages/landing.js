import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";
// Sections for this page
import InfoSection from "pages-sections/LandingPage-Sections/InfoSection.js";
import ContactSection from "pages-sections/LandingPage-Sections/ContactSection.js";

import heroData from 'content/hero.json'
import landingData from 'content/landingContent.json'

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const {title, subtitle, image} = heroData
  const { ...rest } = props;
  const infoSections = landingData["items"].map((info) => <InfoSection props={info}/>)
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
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter responsive image={require(image)}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>{title}</h1>
              <h4>{subtitle}</h4>
              <br />
              <Button
                color="primary"
                size="lg"
                href="#contact"
              >
                <i className="fas" />
                Kontakt
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
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
  );
}
