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
    fontSize: '1.75rem',
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
    <Link to='/content'>
      <Button className={classes.button}>
        Back to the Previous Page
    </Button>
    </Link>
    <p> Major projects that Guido worked on! (In order of release) </p>
    <ol>
    <li> The language ABC. </li>
    <li> The uncommon web browser Grail.  </li>
    <li> The famous language Python.  </li>
    <li> An in-house code auditor for Google.   </li>
    <li> And finally the cloud-sharing software drop box!  </li>
    </ol>
    <p />
    <p> The amount of repositories of the most popular languages on Github. </p>
    <ol type='I'>
    <li> Javascript - 323,938 </li>
    <li> Java - 222,852 </li>
    <li> Python - 164,852 </li>
    <li> PHP - 138,771 </li>
    <li> Ruby - 132,848 </li>
    </ol>
    <Link to='/content3'>
      <Button className={classes.button}>
        To the Next Page
    </Button>
    </Link>
  </div>
))
