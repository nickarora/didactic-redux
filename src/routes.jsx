import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { App } from 'containers'
import { Home } from 'components'

const getRoutes = () =>
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
  </Route>

export default getRoutes
