import React from 'react'
import * as R from 'ramda'
import {InfoElement} from "../../components/InfoElement/InfoElement";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem"
import {Grid} from "@material-ui/core";

export const TeamSection = (props) => {
    const peopleComponents = props.people.map( person => <Grid item>
        <InfoElement {...person}/></Grid>)
    return(
        <Grid container direction="row" justify="center">
            {peopleComponents}
        </Grid>
    )
}

