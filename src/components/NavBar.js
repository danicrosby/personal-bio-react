import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
      <NavItem><Link className="nav-link" to="/project-admin">Project ADMIN</Link></NavItem>
      <NavItem><Link className="nav-link" to="/add-project">Add Project ADMIN</Link></NavItem>
    </>
  );

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link className="navbar-brand" to="/">Dani Crosby</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar></Collapse>
        <Nav className="ml-auto" navbar>
          <NavItem><Link className="nav-link" to="/projects">Projects VIEW</Link></NavItem>
          <NavItem><Link className="nav-link" to="/technologies">Tech VIEW</Link></NavItem>
          {user && authenticated()}
          {
            user !== null
            && <NavItem>
              {
                user
                  ? <Button color='danger' size="sm" onClick={signOutUser}>Sign Out</Button>
                  : <Button color='info' size="sm" onClick={signInUser}>Admin</Button>
              }
            </NavItem>
          }
        </Nav>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
