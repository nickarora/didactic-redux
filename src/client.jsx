import React from 'react'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { combineReducers, createStore } from 'redux'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'

import Routes from './routes'
import { DevTools } from './components'
import reducer from './redux/modules/reducer'

const reducers = combineReducers({
  reducer,
  routing: routerReducer,
})

const store = createStore(
  reducers,
  DevTools.instrument()
)

const div = document.createElement('div')
document.body.appendChild(div)

const history = syncHistoryWithStore(browserHistory, store)

render(<AppContainer component={Routes} props={{ store, history }} />, div)

if (module.hot) {
  module.hot.accept('./routes.jsx', () => {
    render(<AppContainer component={require('./routes.jsx').default} props={{ store, history }} />, div) // eslint-disable-line global-require, max-len
  })
}
