import React from "react";
import { render } from "react-dom";
import withStyles from "material-ui/styles/withStyles";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Button, Paper } from "material-ui";
import BottomNavigation, {
  BottomNavigationAction
} from "material-ui/BottomNavigation";
import Abar from "./abar";

export default withStyles({
  root: {
    background: "#03A9F4",
    fontFamily: "Ubuntu",
    textAlign: "center",
    overflow: "auto",
  },
  button: {
    color: "#212121",
    background: "#00BCD4",
    height: '5vw',
    width: '25vw',
    fontSize: '2vw',
    fontFamily: 'Ubuntu',
  },
  text: {
    fontFamily: "Ubuntu",
    textAlign: "center",
    fontSize: "3.75vw",
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
  guidosmol: {
    width: '40vw',
    height: '30vw',
  },
  citetext: {
    fontFamily: "Ubuntu",
    textAlign: "center",
    fontSize: "10px",
    paddingTop: "1vw",
    color: "#F5F5F5",
  },
  //this is lazy but i dont really care bloody css isnt help'n me rn
  lbreak: {
    height: '7vw',
  },
})(({ classes }) => (
  <div className={classes.root} >
    <Abar />
    <br />
    <p className={classes.lbreak}>​​​​​</p>
    <img className={classes.guidosmol} src='https://rawgit.com/HonoriaShana/PersonProject/da4749b0104af46107c7ffd1a77549beda1428f4/src/Guido-portrait-2014.jpg' alt="guido"/>
    <div className={classes.padding} />
    <Link to='/content'><Button className={classes.button}>
      A bit about Guido!
    </Button>
    </Link>
    <p className={classes.text}>
      Guido van Rossum is the talented, wonderful creator of Python!
    </p>
    <p className={classes.textnopadding}>
     <div className={classes.citetext}>  Image By Daniel Stroud [<a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>], <a href="https://commons.wikimedia.org/wiki/File:Guido-portrait-2014.jpg">from Wikimedia Commons</a></div>
    </p>
  </div>
));
