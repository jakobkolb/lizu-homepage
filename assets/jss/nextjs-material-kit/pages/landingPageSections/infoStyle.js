import { title } from "assets/jss/nextjs-material-kit.js";
import twoColumnText from "assets/jss/nextjs-material-kit/components/twoColumnText.js"
import cardStyle from "../../components/cardStyle";
import cardBodyStyle from "../../components/cardBodyStyle";
import imagesStyles from "../../imagesStyles";

const infoStyle = {
  ...imagesStyles,
  twoColumnText,
  cardBodyStyle,
  cardStyle,
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: "#999"
  }
};

export default infoStyle;
