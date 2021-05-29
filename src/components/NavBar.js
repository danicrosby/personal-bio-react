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

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link className="navbar-brand" to="/"> Dani Crosby</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar></Collapse>
        <Nav className="ml-auto" navbar>

          {user !== null && <NavItem>
            {
              user
                ? <div className="d-flex justify-content-end">
                  <NavItem><Link className="nav-link" to="/admin-projects">Edit</Link></NavItem>
                  <NavItem><Link className="nav-link" to="/add-project">Add</Link></NavItem>
                  <Button className="button ml-4 mr-4" color='danger' size="sm" onClick={signOutUser}>Sign Out</Button>
                </div>
                : <div className="d-flex justify-content-end">
                  <NavItem><Link className="nav-link" to="/projects">Projects</Link></NavItem>
                  <NavItem><Link className="nav-link" to="/technologies">Tech</Link></NavItem>
                  <Button className="button ml-4 mr-2" color='info' size="sm" onClick={signInUser}>Admin</Button>
                </div>
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
