import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import logger from 'redux-logger'
import promise from 'redux-promise'

import reducers from './reducers'
import routes from './routes'

import './sass/style.scss'

const createStoreWithMiddleware = process.env.NODE_ENV === 'development' ? applyMiddleware(promise, logger())(createStore) : applyMiddleware(promise)(createStore)

ReactDOM.render(
  <MuiThemeProvider>
  <Provider store={createStoreWithMiddleware(reducers)}>
  <Router history={browserHistory} routes={routes}/>
  </Provider>
  </MuiThemeProvider>
  , document.querySelector('#app'))
