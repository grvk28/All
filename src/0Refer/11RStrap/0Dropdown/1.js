import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Button,
  Navbar,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import PropTypes from 'prop-types';

function Drop({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="">
      <div>Normal with Props isOpen toggle and direction, subcomponnets DropdownToggle, DropdownMenu
        and Dro...Item
        Dropdown items can have props header text disabled divider
      </div>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu {...args}>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem text>Dropdown Item Text</DropdownItem>
          <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <div>Split Button</div>
      <UncontrolledDropdown group>
  <Button color="primary">
    Primary
  </Button>
  <DropdownToggle
    caret
    color="primary"
  />
  <DropdownMenu>
    <DropdownItem header>
      Header
    </DropdownItem>
    <DropdownItem>
      Some Action
    </DropdownItem>
    <DropdownItem text>
      Dropdown Item Text
    </DropdownItem>
    <DropdownItem disabled>
      Action (disabled)
    </DropdownItem>
    <DropdownItem divider />
    <DropdownItem>
      Foo Action
    </DropdownItem>
    <DropdownItem>
      Bar Action
    </DropdownItem>
    <DropdownItem>
      Quo Action
    </DropdownItem>
  </DropdownMenu>
</UncontrolledDropdown>
<div>Set Active from child: Uncontrolled dropdown has setActiveFromChild which scroll up to top page</div>
<Navbar
  color="light"
  expand="md"
  light
>
  <Nav
    className="ms-auto"
    navbar
  >
    <NavItem>
      <NavLink
        disabled
        href="#"
      >
        Inactive Link
      </NavLink>
    </NavItem>
    <UncontrolledDropdown setActiveFromChild>
      <DropdownToggle
        caret
        className="nav-link"
        tag="a"
      >
        Dropdown
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem
          active
          href="#"
          tag="a"
        >
          Link
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  </Nav>
</Navbar>
<div>Custom Dropdown</div>
<Dropdown toggle={function noRefCheck(){}}>
  <DropdownToggle
    data-toggle="dropdown"
    tag="span"
  >
    Custom Dropdown Content
  </DropdownToggle>
  <DropdownMenu>
    <div onClick={function noRefCheck(){}}>
      Custom dropdown item
    </div>
    <div onClick={function noRefCheck(){}}>
      Custom dropdown item
    </div>
    <div onClick={function noRefCheck(){}}>
      Custom dropdown item
    </div>
    <div onClick={function noRefCheck(){}}>
      Custom dropdown item
    </div>
  </DropdownMenu>
</Dropdown>
    </div>
  );
}

Drop.propTypes = {
  direction: PropTypes.string,
};

export default Drop;