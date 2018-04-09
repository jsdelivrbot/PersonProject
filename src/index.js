import React from 'react';
import { render } from 'react-dom';
import withStyles from 'material-ui/styles/withStyles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Title from './title.jsx'
import Npage from './npage.jsx'


const App = withStyles({
  root: {
    fontFamily: 'Ubuntu',
    textAlign: 'center',
  },
})(({ classes }) => (
  <Router>
    <div className={classes.root}>
      <Switch>
      <Title/>
        <Route exact path="/" component={Title} />
        <Route exact path="/donors" component={Npage} />
      </Switch>
      </div>
  </Router>
))

render(<App />, document.getElementById('root'))