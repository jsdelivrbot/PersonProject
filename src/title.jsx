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
    background: "#212121",
    fontFamily: "Ubuntu",
    textAlign: "center"
  },
  paper: {
    paddingTop: "30px",
    background: "#9ECCAF",
    height: "103vh",
    width: "103vw",
    color: "#3F51B5",
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
    color: 'blue',
    background: '#4CAF50',
  },
  text: {
    fontFamily: 'Ubuntu',
    textAlign: 'center',
    fontSize: '18px',
    paddingTop: '.5vw',
  },
})(({ classes }) => (
  <div className={classes.body}>
  <Abar />
    <Paper className={classes.paper}>
      <p>Guido van Rossum</p>
      <Button href='/content' className={classes.button}>A bit about Guido!</Button>
      <p className={classes.text}>
        Too much shade from tom
      </p>
    </Paper>
  </div>
));
