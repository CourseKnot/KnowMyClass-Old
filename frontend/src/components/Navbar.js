import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

const NavigationBar = () => (
  <Navbar className="navbar" fixed="top">
    <Navbar.Brand href="#home">Logo</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#login">Login</Nav.Link>
      <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    </Nav>
  </Navbar>
);

export default NavigationBar;
