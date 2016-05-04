import { shallow } from 'enzyme'
import { App } from 'containers'
import { Header } from 'components'

import reducer from 'reducers/reducer'
import { createStore } from 'redux'

describe('A basic test', () => {
  it('should pass when everything is okay', () => {
    expect(true).to.be.true
  })
})

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
