import React from 'react'

import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'

import Home from '../screens/home'

import PrivateRoute from '../utils/privateRoute'
import Header from '../components/header'
import Menu from '../components/menu'
import Detail from '../screens/detail'

const Routes = () => {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/home' component={Home} />
        {/* <PrivateRoute path='/home' component={Home} /> */}
        <Route path='/video/:id' component={Detail} />
        <Redirect to='/home'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
