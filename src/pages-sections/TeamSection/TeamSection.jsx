import React from 'react'
import * as R from 'ramda'
import { makeStyles } from '@material-ui/core/styles'

import {InfoElement} from "../../components/InfoElement/InfoElement";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem"
import {Grid} from "@material-ui/core";
import styles from 'src/assets/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js'



const useStyles = makeStyles(styles)

export const TeamSection = (props) => {
    const peopleComponents = props.people.map( person => <Grid item>
        <InfoElement {...person}/></Grid>)
    const classes = useStyles()
    return(
        <div>
        <h2 className={classes.title}>Team</h2>
        <Grid container direction="row" justify="center">
            {peopleComponents}
        </Grid>
        </div>
    )
}
