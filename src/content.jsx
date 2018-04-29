import React from 'react';
import { render } from 'react-dom';
import withStyles from 'material-ui/styles/withStyles'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import Abar from './abar'

export default withStyles({
  root: {
    background: '#212121',
    fontFamily: 'Ubuntu',
    textAlign: 'center',
  },
  lbreak: {
    height: '9vw',
  },
  button: {
    color: "#212121",
    background: "#00BCD4",
    height: '7vw',
    width: '25vw',
    fontSize: '2vw',
    fontFamily: 'Ubuntu',
  },
  pythonimage: {
    height: '15vh',
    width: '15vw',
  },
  text: {
    fontFamily: "Ubuntu",
    textAlign: "center",
    paddingTop: ".5vw",
    color: "#F5F5F5",
  },
})(({ classes }) => (
  <div>
    <Abar />
    <p className={classes.lbreak}>​​ </p>
    <Link to='/'>
    <Button className={classes.button}>
    Back to the Home Page
    </Button>
    </Link>
    <h1 className={classes.text}>The logo of Python, Guido{'\''}s main invention! </h1>
    <h2 className={classes.text}>After creating of Python </h2>
    <h3 className={classes.text}>yes </h3>
    <h4 className={classes.text}>yes </h4>
    <h5 className={classes.text}>ys </h5>
    <h6 className={classes.text}>ys </h6>
    <img className={classes.pythonimage} src='https://rawgit.com/HonoriaShana/PersonProject/19861623c46dcd9a6540dfccc6cc0c5261f481be/src/img/1024px-Python-logo-notext.svg.png' alt='pythonlogo' />
  </div>
))
