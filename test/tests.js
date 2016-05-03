/* globals describe it */
import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
// import sinon from 'sinon'

import { createStore } from 'redux'

import reducer from '../src/reducers'

chai.use(chaiEnzyme())

import { shallow } from 'enzyme'

import { App } from '../src/containers'
import { Header } from '../src/components'

describe('<App/>', () => {
  it('includes the Header', () => {
    const wrapper = shallow(<App><p /></App>)

    expect(wrapper).to.contain(<Header />)
  })
})

describe('reducer', () => {
  it('increments the count when an INCREMENT action is dispatched', () => {
    const store = createStore(reducer)
    const action = { type: 'INCREMENT' }

    store.dispatch(action)
    store.dispatch(action)
    store.dispatch(action)

    expect(store.getState().count).to.equal(3)
  })

  it('increments the count when an DECREMENT action is dispatched', () => {
    const store = createStore(reducer)
    const action = { type: 'DECREMENT' }

    store.dispatch(action)
    store.dispatch(action)
    store.dispatch(action)

    expect(store.getState().count).to.equal(-3)
  })
})
