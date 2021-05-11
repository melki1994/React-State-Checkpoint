import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';

function Start() {
    return (
        <div style={{height: '50px', position: 'relative'}}>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Celebrity-Profile</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about-me">ABOUT ME</Nav.Link>
      <Nav.Link href ="#contact-me">CONTACT ME</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        
        </div>
    )
}

export default Start