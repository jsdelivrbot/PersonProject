import React from "react";
import { render } from "react-dom";
import withStyles from "material-ui/styles/withStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button, Paper } from "material-ui";
import AppBar from "material-ui/AppBar";

export default withStyles({
  tnav: {
    color: "#E0E0E0",
    background: "#29B6F6",
    height: "9vw",
    width: "100vw",
    position: "fixed",
    bottom: 0,
    fontSize: '7vw',
  }
})(({ classes }) => (
  <div>
    <AppBar className={classes.tnav}>
    Guido van Rossum
    </AppBar>
  </div>
));
