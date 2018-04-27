import React from "react";
import { render } from "react-dom";
import withStyles from "material-ui/styles/withStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button, Paper } from "material-ui";
import BottomNavigation, {
  BottomNavigationAction
} from "material-ui/BottomNavigation";
import Abar from "./abar";

export default withStyles({
  root: {
    background: "#9ECCAF",
    fontFamily: "Ubuntu",
    textAlign: "center"
  },
  paper: {
    paddingTop: "30px",
    height: "103vh",
    width: "103vw",
    color: "#D84315",
    lineHeight: "3.0rem",
    fontSize: "2.25rem",
    paddingBottom: "0.5rem",
    fontFamily: "Ubuntu"
  },
  tnav: {
    color: "#0D47A1",
    background: "#4CAF50",
    height: "10vw",
    width: "100vw"
  },
  button: {
    color: "#212121",
    background: "#00BCD4",
  },
  text: {
    fontFamily: "Ubuntu",
    textAlign: "center",
    fontSize: "18px",
    paddingTop: ".5vw",
    color: "#F5F5F5",
  },
  padding: {
    marginTop: "60px",
  },
  textnopadding: {
    fontFamily: "Ubuntu",
    textAlign: "center",
    fontSize: "18px",
  },
})(({ classes }) => (
  <div className={classes.paper}>
    <Abar />
    <div className={classes.padding} />
    <Button href="/content" className={classes.button}>
      A bit about Guido!
    </Button>
    <p className={classes.text}>
      Guido van Rossum is the talented, wonderful creator of Python!
    </p>
    <p className={classes.textnopadding}>

    </p>
  </div>
));
