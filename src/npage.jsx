import React from 'react'
import { Card, CardHeader, CardContent } from 'material-ui'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import withStyles from 'material-ui/styles/withStyles'

export default withStyles({
  root: {

  },
})(({ classes }) => (
  <div>
    <Link to="/"> hohoho </Link>
  </div>
))