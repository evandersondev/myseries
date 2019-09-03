import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler
} from 'reactstrap'

export default function Header() {
  const [open, setOpen] = useState(false)
  const toogle = () => {
    setOpen(!open)
  }

  return (
    <div className='mb-3'>
      <Navbar color='dark' dark expand='lg'>
        <div className="container">
          <NavbarBrand href='#/generos'>My Series</NavbarBrand>

          <NavbarToggler onClick={toogle} />

          <Collapse isOpen={open} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='#/generos'>Series</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#/new'>New</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
}
