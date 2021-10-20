import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/logo.png'


const Header = () => {
  const {user, logOut} = useAuth();
    return (
        <>
      <Navbar className="p-4" bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
        <Container className="">
          <Navbar.Brand href="#home"><img src={logo} alt="" /> </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
            <Nav.Link as={HashLink} to="/home#specialists">Specialists</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            {user?.email?
              <Button onClick={logOut} variant="light">Logout</Button>:
              <Nav.Link as={Link} to="/login">Login</Nav.Link>}
            
            <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    );
};

export default Header;