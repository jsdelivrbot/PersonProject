import React from "react";
import { render } from "react-dom";
import withStyles from "material-ui/styles/withStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button, Paper } from "material-ui";
import BottomNavigation, {
  BottomNavigationAction
} from "material-ui/BottomNavigation";

export default withStyles({
  bnav: {
    color: "#0D47A1",
    background: "#4CAF50",
    height: "10vw",
    width: "100vw",
    position: "fixed",
    bottom: 0,
  }
})(({ classes }) => (
  <div>
    <BottomNavigation className={classes.bnav} />
  </div>
));
