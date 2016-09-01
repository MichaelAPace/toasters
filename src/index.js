import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'

// import { createStore, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'


// import logger from 'redux-logger'
// import promise from 'redux-promise'

// import reducers from './reducers'
import routes from './routes'

import './sass/style.scss'

// const createStoreWithMiddleware = process.env.NODE_ENV === 'development' ? applyMiddleware(promise, logger())(createStore) : applyMiddleware(promise)(createStore)

ReactDOM.render(
  <Router history={browserHistory} routes={routes}/>
  , document.querySelector('#app'))
// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//   <Router history={browserHistory} routes={routes}/>
//   </Provider>
//   , document.querySelector('#app'))
