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
          <form name="contact" method="POST" data-netlify="true" action="/">
            {/* This hidden field is required because of https://community.netlify.com/t/forms-not-being-sent-with-next-js/15602*/}
            <input type="hidden" name="form-name" value="contact" />
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Name"
                  id="name"
                  name="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    required: true,
                    onInvalid: (e) =>
                      e.target.setCustomValidity('Bitte ausfüllen'),
                    onChange: (e) => e.target.setCustomValidity('')
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Email"
                  id="email"
                  name="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: 'email',
                    required: true,
                    onInvalid: (e) =>
                      e.target.setCustomValidity('Keine Email Addresse'),
                    onChange: (e) => e.target.setCustomValidity('')
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Nachricht"
                id="message"
                name="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                  required: true,
                  onInvalid: (e) =>
                    e.target.setCustomValidity('Bitte ausfüllen'),
                  onChange: (e) => e.target.setCustomValidity('')
                }}
              />
              <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                <Button color="primary" type="submit">
                  Absenden
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  )
}

export default ContactSection
