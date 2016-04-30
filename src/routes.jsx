import React, { PropTypes } from 'react'

import { IndexRoute, Route, Router } from 'react-router'
import { Provider } from 'react-redux'

import './theme/main.css'

import { App } from './containers'
import { Home, DevTools } from './components'

const Routes = (props) =>
  <Provider store={props.store}>
    <div>
      <Router history={props.history}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>

Routes.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default Routes
