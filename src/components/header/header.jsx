import React from 'react'

import { Nav, Navbar, NavItem } from 'react-bootstrap'

import { IndexLinkContainer } from 'react-router-bootstrap'

const Header = () => <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <IndexLinkContainer to={{ pathname: '/' }}>
        <a>Didactic Redux</a>
      </IndexLinkContainer>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <IndexLinkContainer to={{ pathname: '/' }}>
      <NavItem eventKey={1} href='#'>Home</NavItem>
    </IndexLinkContainer>
  </Nav>
</Navbar>

export default Header
