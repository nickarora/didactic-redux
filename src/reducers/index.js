import { combineReducers } from 'redux'

import { routerReducer as routing } from 'react-router-redux'
import counter from 'reducers/counter'
import topics from 'reducers/topics'
import cards from 'reducers/cards'

const reducers = combineReducers({
  counter,
  topics,
  cards,
  routing,
})

export default reducers
