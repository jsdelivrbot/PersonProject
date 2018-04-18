import React from "react";
import { render } from "react-dom";
import withStyles from "material-ui/styles/withStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button, Paper } from "material-ui";
import BottomNavigation, {
  BottomNavigationAction
} from "material-ui/BottomNavigation";
import Bnav from "./bnav";

export default withStyles({
  root: {
    background: "#212121",
    fontFamily: "Ubuntu",
    textAlign: "center"
  },
  paper: {
    paddingTop: "2.0rem",
    background: "#9ECCAF",
    height: "100vw",
    width: "100vw",
    color: "#5E35B1",
    lineHeight: "3.0rem",
    fontSize: "2.25rem",
    paddingBottom: "0.5rem",
    fontFamily: "Ubuntu"
  },
  bnav: {
    color: "#0D47A1",
    background: "#4CAF50",
    height: "10vw",
    width: "100vw"
  },
  button: {
    color: 'blue',
    background: 'green'
  },
})(({ classes }) => (
  <div>
    <Paper className={classes.paper}>
      <p>Guido van Rossum</p>
      <Button className={classes.button}>A bit about Guido!</Button>
    </Paper>
    <Bnav />
  </div>
));
