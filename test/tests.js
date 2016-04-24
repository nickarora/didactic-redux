/* globals describe it */

import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
// import sinon from 'sinon'

chai.use(chaiEnzyme)

import { render } from 'enzyme'

import App from '../app/components/app.jsx'

describe('<App />', () => {
  it('displays the welcome message', () => {
    const wrapper = render(<App />)

    expect(wrapper.text()).to.contain('Welcome')
  })
})
