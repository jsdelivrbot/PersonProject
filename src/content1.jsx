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
    height: '4rem',
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
    color: "#F5F5F5",
  },
  smolesttext: {
    fontFamily: "Ubuntu",
    textAlign: "center",
    fontSize: ".9rem",
    color: "#F5F5F5",
  },
  button2: {
    color: "#212121",
    background: "#00BCD4",
    width: '10rem',
    fontSize: '1rem',
    fontFamily: 'Ubuntu',
  },
  itiboi: {
    fontStyle: 'italic',
    color: "#F5F5F5",
  },
  line2: {
    borderColor: '#01579B',
  },
  line3: {
    borderColor: '#18FFFF',
  },
  line4: {
    borderColor: '#00897B',
  },
  bold: {
    fontFamily: 'Ubuntu:700',
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
    <hr />
    <h2 className={classes.text}>After creating Python, Van Rossum worked at many top tier technology companies! </h2>
    <hr className={classes.line2} />
    <h3 className={classes.text}>Some of these companies that Van Rossum worked for were Google and Dropbox! </h3>
    <hr className={classes.line3} />
    <h4 className={classes.text}>While he is still Benevolent Dictator for Life (<span className={classes.itiboi}>BDFL</span>) of Python, he mainly works on Dropbox now, mostly overseeing large changes to the language. </h4>
    <hr className={classes.line4} />
    <h5 className={classes.text}>Van Rossum was born in 1956, a wee bit before the modern computer was invented. </h5>
    <h6 className={classes.smolesttext}>He is also from Haarlem, Netherlands — the namesake of the neighboorhood in Manhattan. </h6>
    <img className={classes.pythonimage} src='http://i.imgur.com/oJuTmH9.png' alt='pythonlogo' />
    <p />
    <Link to='/content2'>
      <Button className={classes.button2}>
        To the next page
    </Button>
    </Link>

  </div>
))
