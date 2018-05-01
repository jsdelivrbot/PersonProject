import React from "react";
import { render } from "react-dom";
import withStyles from "material-ui/styles/withStyles";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Button, Paper } from "material-ui";
import AppBar from "material-ui/AppBar";

export default withStyles({
  tnav: {
    color: "#E0E0E0",
    background: "#29B6F6",
    height: "5rem",
    bottom: 0,
    fontSize: '3.8rem',
  }
})(({ classes }) => (
  <div>
    <AppBar className={classes.tnav}>
    <Link to='/'>
      <div>Guido van Rossum</div>
    </Link>
    </AppBar>
  </div>
));
