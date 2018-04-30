import React from 'react';
import { render } from 'react-dom';
import withStyles from 'material-ui/styles/withStyles'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import Abar from './abar'

export default withStyles({
  root: {
    background: '#03A9F4',
    fontFamily: 'Ubuntu',
    textAlign: 'center',
    color: "#F5F5F5",
    fontSize: '1.3rem',
  },
  lbreak: {
    height: '5rem',
  },
  button: {
    color: "#212121",
    background: "#00BCD4",
    width: '10rem',
    fontSize: '1rem',
    fontFamily: 'Ubuntu',
  },
  pythonimage: {
    width: '10rem',
    height: '10rem',
  },
  text: {
    fontFamily: "Ubuntu",
    textAlign: "center",
    paddingTop: ".5rem",
    color: "#F5F5F5",
  },
  listtwo: {
    fontFamily: "Ubuntu",
    textAlign: "center",
    paddingTop: ".5rem",
    color: "#004d40",
  },
})(({ classes }) => (
  <div className={classes.root}>
    <Abar />
    <p className={classes.lbreak}>​​ </p>
    <Link to='/content2'>
      <Button className={classes.button}>
        Back to the Previous Page
    </Button>
    </Link>
    <p> A list of large companies that use Python! </p>
    <ul>
      <li> Google </li>
      <li> Dropbox </li>
      <li> Wikipedia </li>
      <li> Lucas Films </li>
      <li> Reddit </li>
      <li> Facebook </li>
    <li> Amazon </li>
    </ul>
    <p />
    <p> List of programs that use Python</p>
    <ul className={classes.listtwo}>
      <li> Blender </li>
      <li> Maya </li>
      <li> Ubuntu Software Center </li>
      <li> Google App Engine </li>
      <li> NumPy </li>
      <li> Pygame</li>
    </ul>
    <Link to='/content4'>
      <Button className={classes.button}>
        To the Next Page
    </Button>
    </Link>
  </div>
))
