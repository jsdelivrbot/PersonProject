import React from 'react';
import { render } from 'react-dom';
import withStyles from 'material-ui/styles/withStyles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Content from './content';
import Title from './title'
import './index.css'

const App = withStyles({
  root: {
    fontFamily: 'Ubuntu',
    textAlign: 'center',
  },
})(({ classes }) => (
  <Router>
    <div className={classes.root}>
      <Switch>
        <Route exact path="/" component={Title} />
        <Route exact path="/content" component={Content} />
      </Switch>
      </div>
  </Router>
))

render(<App />, document.getElementById('root'))