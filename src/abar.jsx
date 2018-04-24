import React from "react";
import { render } from "react-dom";
import withStyles from "material-ui/styles/withStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button, Paper } from "material-ui";
import AppBar from "material-ui/AppBar";

export default withStyles({
  tnav: {
    color: "#90A4AE",
    background: "#A5D6A7",
    height: "9vw",
    width: "100vw",
    position: "fixed",
    bottom: 0,
  }
})(({ classes }) => (
  <div>
    <AppBar className={classes.tnav}>
    Guido van Rossum
    </AppBar>
  </div>
));
