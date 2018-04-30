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
    fontSize: '1.4rem',
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
  endtext: {
    fontSize: '3rem',
  },
})(({ classes }) => (
  <div className={classes.root}>
    <Abar />
    <p className={classes.lbreak}>​​ </p>
    <Link to='/content4'>
      <Button className={classes.button}>
        Back to the Previous Page
    </Button>
    </Link>
    <p />
    <p> Useful Info 2 </p>
    <dl>
    High-level Programming Language
    </dl>
    <dd>
    A programming language in which some features are hidden and the actual hardware functions of the computer are in a layer of abstraction.
    <p />
    </dd>
    <dl>
    Abstraction
    </dl>
    <dd>
    The action of singling out important information to the user, and disregarding the primal functions of the computer.
    </dd>
    <p />
    <p> Useful Info 3 </p>
    <dl>
    <dt>
    Github
    </dt>
    <dd>
    Github is a place in which programmers store, and edit their code; it can also be used as a location to share code with the world or work on professional projects. 
    </dd>
    <p />
    <dt>
    ABC
    </dt>
    <dd>
    An old high-level programming language developed by Centrum Wiskunde & Informatica (National Research Institute for Mathematics and Computer Science (In the Netherlands))
    it influenced Guido van Rossum while he was developing Python!
    </dd>
    </dl>
    <p className={classes.endtext}> The End! </p>
  </div>
))
