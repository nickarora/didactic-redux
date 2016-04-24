/* globals describe it */
import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
// import sinon from 'sinon'

chai.use(chaiEnzyme())

import { shallow } from 'enzyme'

import App from '../app/components/app.jsx'
import Header from '../app/components/header.jsx'

describe('<App/>', () => {
  it('includes the Header', () => {
    const wrapper = shallow(<App><p /></App>)

    expect(wrapper).to.contain(<Header />)
  })
})
