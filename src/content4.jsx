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
    fontSize: '1.7rem',
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
})(({ classes }) => (
  <div className={classes.root}>
    <Abar />
    <p className={classes.lbreak}>​​ </p>
    <Link to='/content3'>
      <Button className={classes.button}>
        Back to the Previous Page
    </Button>
    </Link>
    <p />
    <p> Useful Info 1 </p>
    <dl>
    <dt>Python</dt>
    <dd>
    An open source, high level programming language written by Guido van Rossum; it is one of the most popular and influential languages of all time.
    <p />
      Python is used in animation, mathematics, neural networks, (things like HyperGAN) and more
      <p />
    </dd>
    <dt> Programming Language </dt>
    <dd>
    Information sent to a computer as information, instructing it to take actions from simple arithmetic to massive tasks, like rendering or playing a game. 
    </dd>
    </dl>
    <Link to='/content5'>
      <Button className={classes.button}>
        To the Last page!
    </Button>
    </Link>
  </div>
))
