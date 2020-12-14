import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardBody from 'components/Card/CardBody'

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/infoStyle.js";
import Card from "components/Card/Card";
const useStyles = makeStyles(styles);

export default function InfoSection(props) {
  const classes = useStyles();
  const {content: {headline, image, imageCap, text}} = props.props
  return (
    <div className={classes.section}>
      <Card>
        <img className={classes.imgCardTop} src={image} alt={imageCap} />
          <CardBody>
              <h2 className={classes.cardTitle}>{headline}</h2>

              <p className={classes.twoColumnText}>{text}</p>
          </CardBody>
      </Card>
    </div>
  );
}
