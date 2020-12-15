import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import GridContainer from 'src/components/Grid/GridContainer.js'
import GridItem from 'src/components/Grid/GridItem.js'
import CustomInput from 'src/components/CustomInput/CustomInput.js'
import Button from 'src/components/CustomButtons/Button.js'

import styles from 'src/assets/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js'

const useStyles = makeStyles(styles)

const ContactSection = () => {
  const classes = useStyles()
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Kontakt</h2>
          <h4 className={classes.description}>
            Wir freuen uns über eine Nachricht und melden uns umgehend zurück.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Nachricht"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
              <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                <Button color="primary">Absenden</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  )
}

export default ContactSection
