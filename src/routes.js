import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import Layout from './components/Layout'
import Splash from './components/Splash'
import Signin from './components/Signin'
import Signup from './components/Signup'

export default (
  <Route path="/" component={Layout}>
  <IndexRoute component={Splash} />
  <Route path='signin' component={Signin} />
  <Route path='signup' component={Signup} />
  <Redirect from="*" to="/" />
  </Route>
)
