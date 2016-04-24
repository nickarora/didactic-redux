import React from 'react'

import { Nav, Navbar, NavItem } from 'react-bootstrap'

const Header = () => <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href='#'>Didactic Doodle</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href='#'>Home</NavItem>
    <NavItem eventKey={2} href='#'>About</NavItem>
  </Nav>
</Navbar>

export default Header
