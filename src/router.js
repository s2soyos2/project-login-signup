import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeVM from './pages/home/HomeVM'
import UserVM from './pages/user/UserVM'
import LoginVM from './pages/login/loginVM'
import SignUpVM from './pages/signup/signupVM'
import { Breadcrumb } from 'react-bootstrap'
import { userIsAuthenticatedRedir, userIsNotAuthenticatedRedir } from './redux/authtication'

export default () => (
  <div>
    <Breadcrumb>
      <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/user">User</Breadcrumb.Item>
    </Breadcrumb>

    <Switch>
      <Route exact component={userIsNotAuthenticatedRedir(LoginVM)} path="/" />
      <Route component={userIsAuthenticatedRedir(HomeVM)} path="/home" />
      <Route exact component={userIsAuthenticatedRedir(UserVM)} path="/user" />  
      <Route exact component={userIsNotAuthenticatedRedir(SignUpVM)} path="/signup" />
    </Switch>  
  </div>
)

