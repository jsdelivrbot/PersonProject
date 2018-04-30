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
    width: '15rem',
    fontSize: '1.5rem',
    fontFamily: 'Ubuntu',
  },
  text: {
    fontFamily: "Ubuntu",
    textAlign: "center",
    fontSize: "2rem",
    paddingTop: ".5rem",
    color: "#F5F5F5",
  },
  padding: {
    marginTop: "3rem",
  },
  textnopadding: {
    fontFamily: "Ubuntu",
    textAlign: "center",
    fontSize: "18px",
  },
  guidosmol: {
    height: '20rem',
    width: '30rem',
  },
  citetext: {
    fontFamily: "Ubuntu",
    textAlign: "center",
    fontSize: "0.9rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    color: "#F5F5F5",
    textDecoration: "underline",
  },
  //this is lazy but i dont really care bloody css isnt help'n me rn
  lbreak: {
    height: '4rem',
  },
  buttonlicense: {
    color: "#212121",
    background: "#00BCD4",
    width: '3rem',
    fontSize: '.6rem',
    fontFamily: 'Ubuntu',
  },
  spoopymarquee: {
    fontSize: '.01rem',
    color: "#F5F5F5",
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
     <a rel="noopener noreferrer" target="_blank" href="mailto:honoriashana@gmail.com"> <div className={classes.citetext}> To email the creator of this website click here </div> </a>
     <Link to='/licenses'>
      <Button className={classes.buttonlicense}>
      Licenses
      </Button>
       </Link>
    </p>
    <marquee />
  </div>
));
