import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import Button from '../../components/CustomButtons/Button'
import Parallax from '../../components/Parallax/Parallax'
import React from 'react'
import styles from 'src/assets/jss/nextjs-material-kit/sections/heroSectionStyles.js'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(styles)

const HeroSection = (props) => {
  const { image, title, subtitle } = props
  const classes = useStyles()
  return (
    <Parallax filter responsive image={image}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <h1 className={classes.title}>{title}</h1>
            <h4>{subtitle}</h4>
            <br />
            <Button color="primary" size="lg" href="#contact">
              <i className="fas" />
              Kontakt
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </Parallax>
  )
}

export default HeroSection
