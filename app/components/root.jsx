import React, { PropTypes } from 'react'

import { IndexRoute, Route, Router } from 'react-router'
import { Provider } from 'react-redux'

import '../main.css'
import App from './app.jsx'
import Home from './home.jsx'
import About from './about.jsx'
import DevTools from './devtools.jsx'

const Root = (props) =>
  <Provider store={props.store}>
    <div>
      <Router history={props.history}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='about' component={About} />
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default Root
