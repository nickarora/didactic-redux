import React from 'react'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { combineReducers, createStore } from 'redux'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'

import Root from './components/root.jsx'
import DevTools from './components/devtools.jsx'
import reducer from './reducer.js'

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

render(<AppContainer component={Root} props={{ store, history }} />, div)

if (module.hot) {
  module.hot.accept('./components/root.jsx', () => {
    render(<AppContainer component={require('./components/root.jsx').default} props={{ store, history }} />, div) // eslint-disable-line global-require, max-len
  })
}
