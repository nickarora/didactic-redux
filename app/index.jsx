import React from 'react'
import { render } from 'react-dom'
import { browserHistory, IndexRoute, Route, Router } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './main.css'
import App from './components/app.jsx'
import Home from './components/home.jsx'
import About from './components/about.jsx'

import reducer from './reducer.js'

const store = createStore(reducer)

const div = document.createElement('div')

document.body.appendChild(div)

render(<Provider store={store}>
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
    </Route>
  </Router>
</Provider>, div)
