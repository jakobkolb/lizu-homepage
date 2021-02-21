import React from 'react'
import GridContainer from "../Grid/GridContainer";
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import classNames from 'classnames'
import styles from "src/assets/jss/nextjs-material-kit/pages/profilePage.js"
import GridItem from "../Grid/GridItem";

const useStyles = makeStyles(styles)

export const InfoElement = (props) => {
    const classes = useStyles()
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    )
    return (
        <div className={classes.container}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}>
                    <div className={classes.centered}>
                        <img className={imageClasses} src={props.image} width={200} height={200}/>
                    </div>
                    <div>
                        <h3 className={classes.title}>{props.name}</h3>
                    </div>
                    <div className={classes.description}>
                        {props.description}
                    </div>
                </GridItem>
            </GridContainer>
        </div>
    )
}

InfoElement.propTypes = {
    imagePath: PropTypes.string,
    headerText: PropTypes.string,
    bodyText: PropTypes.string
}