import React from 'react'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { combineReducers, createStore } from 'redux'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'

import Root from './root'
import DevTools from './utils/devtools'
import reducer from './redux/modules/reducer'

const reducers = combineReducers({
  reducer,
  routing: routerReducer,
})

const store = createStore(
  reducers,
  DevTools.instrument()
)

const history = syncHistoryWithStore(browserHistory, store)

const rootElement = document.getElementById('root')

function renderApp(RootComponent) {
  render(
    <AppContainer>
      <RootComponent store={store} history={history} />
    </AppContainer>,
    rootElement
  )
}

renderApp(Root)

if (module.hot) {
  module.hot.accept(
    './root',
    () => renderApp(require('./root').default) // eslint-disable-line global-require
  )
}
