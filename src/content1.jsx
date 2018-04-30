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
    paddingTop: "0.8rem",
    color: "#F5F5F5",
  },
  smolesttext: {
    fontFamily: "Ubuntu",
    textAlign: "center",
    paddingTop: ".8rem",
    fontSize: ".9rem",
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
    <h2 className={classes.text}>After creating Python, Van Rossum worked at many top tier technology companies! </h2>
    <h3 className={classes.text}>Some of these companies that Van Rossum worked for were Google and Dropbox! </h3>
    <h4 className={classes.text}>While he is still Benevolent Dictator for Life (BDFL) of Python, he mainly works on Dropbox now, mostly overseeing large changes to the language. </h4>
    <h5 className={classes.text}>Van Rossum was born in 1956, a wee bit before the modern computer was invented. </h5>
    <h6 className={classes.smolesttext}>He is also from Haarlem, Netherlands — the namesake of the neighboorhood in Manhattan. </h6>
    <img className={classes.pythonimage} src='https://rawgit.com/HonoriaShana/PersonProject/19861623c46dcd9a6540dfccc6cc0c5261f481be/src/img/1024px-Python-logo-notext.svg.png' alt='pythonlogo' />
  </div>
))
