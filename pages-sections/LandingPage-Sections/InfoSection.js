import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardBody from 'components/Card/CardBody'

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import image1 from 'assets/img/bg.jpg'
import Card from "components/Card/Card";
const useStyles = makeStyles(styles);

export default function InfoSection(props) {
  const classes = useStyles();
  console.log(props.props.value)
  const {value:{headline, image, text}} = props.props
  return (
    <div className={classes.section}>
      <Card>
        <img className={classes.imgRounded} src={image1} alt="Card-img-cap" />
          <CardBody>
              <h2 className={classes.cardTitle}>title</h2>
              <p>{text}</p>
          </CardBody>
      </Card>
    </div>
  );
}
