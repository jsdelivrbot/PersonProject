import React from "react";
import { render } from "react-dom";
import withStyles from "material-ui/styles/withStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button, Paper } from "material-ui";
import AppBar from "material-ui/AppBar";

export default withStyles({
  tnav: {
    color: "#0D47A1",
    background: "#80CBC4",
    height: "8vw",
    width: "100vw",
    position: "fixed",
    bottom: 0,
  }
})(({ classes }) => (
  <div>
    <AppBar className={classes.tnav} />
  </div>
));
