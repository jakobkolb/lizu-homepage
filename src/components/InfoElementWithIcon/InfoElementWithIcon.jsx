import React from 'react'
import Image from 'next/image'
import GridContainer from "../Grid/GridContainer";
import PropTypes from 'prop-types'
import ReactMarkdown from "react-markdown";
import {makeStyles} from '@material-ui/core/styles'
import classNames from 'classnames'
import styles from "src/assets/jss/nextjs-material-kit/components/infoElementWithIcon"
import GridItem from "../Grid/GridItem";

const useStyles = makeStyles(styles)

export const InfoElementWithIcon = (props) => {
    const classes = useStyles()
    const imageClasses = classNames(
        classes.imgFluid,
        classes.imgCentered
    )
    return (
        <div className={classes.container}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}>
                    <div className={classes.title}>
                        <img className={imageClasses} src={props.image} width={90} height={90}/>
                    </div>
                    <div>
                        <h3 className={classes.title}>{props.title}</h3>
                    </div>
                    <p className={classes.description}>
                        {props.description}
                    </p>
                </GridItem>
            </GridContainer>
        </div>
    )
}

InfoElementWithIcon.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
}