import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { App, Counter, Topics, Topic } from 'containers'
import { Home } from 'components'

const getRoutes = () =>
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='topics' component={Topics} />
    <Route path='topic/:topicId' component={Topic} />
    <Route path='counter' component={Counter} />
  </Route>

export default getRoutes
