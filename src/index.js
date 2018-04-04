import React from 'react';
import { render } from 'react-dom';
import withStyles from 'material-ui/styles/withStyles'

const App = withStyles({
  root: {
    fontFamily: 'Ubuntu',
    textAlign: 'center',
  },
})(({ classes }) => (
  <div className={classes.root}>

  </div>
))

render(<App />, document.getElementById('root'))