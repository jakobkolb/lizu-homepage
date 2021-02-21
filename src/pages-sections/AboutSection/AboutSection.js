import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import ReactMarkdown from 'react-markdown'

import styles from 'src/assets/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js'


const useStyles = makeStyles(styles)


export const AboutSection = (props) => {
    const classes = useStyles()
    return(
        <div className={classes.container}>
        <h2 className={classes.title}>{props.title}</h2>
        <ReactMarkdown className={classes.description}>
        {props.text}
        </ReactMarkdown>
        </div>
    )
}

export default AboutSection
