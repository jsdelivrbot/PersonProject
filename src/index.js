import React from 'react';
import { render } from 'react-dom';
import withStyles from 'material-ui/styles/withStyles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Content from './content1';
import Content2 from './content2';
import Content3 from './content3';
import Content4 from './content4';
import Content5 from './content5';
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
        <Route exact path="/content2" component={Content2} />
        <Route exact path="/content3" component={Content3} />
        <Route exact path="/content4" component={Content4} />
        <Route exact path="/content5" component={Content5} />
      </Switch>
      </div>
  </Router>
))

render(<App />, document.getElementById('root'))