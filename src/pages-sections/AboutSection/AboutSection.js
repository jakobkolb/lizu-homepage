import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import ReactMarkdown from 'react-markdown'

import styles from 'src/assets/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js'
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";


const useStyles = makeStyles(styles)


export const AboutSection = (props) => {
    const classes = useStyles()
    return(
        <div className={classes.container}>
            <Card>
                <CardBody>
                    <h2 className={classes.title}>{props.title}</h2>
                    <h4 className={classes.textCenter}>{props.subtitle}</h4>
                    <ReactMarkdown className={classes.description}>
                        {props.text}
                    </ReactMarkdown>
                </CardBody>
            </Card>
        </div>
    )
}

export default AboutSection
