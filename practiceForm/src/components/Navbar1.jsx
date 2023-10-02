import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


function Navbar1() {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to= "/aboutus">Hello World!</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to= "/aboutus">About Us</Nav.Link>
            <Nav.Link as={NavLink} to= "/carousel1">Carousel</Nav.Link>
            <Nav.Link as={NavLink} to= "/">Practice Form</Nav.Link>
          </Nav>
        </Container>
      </Navbar> 
      {/* <div><NavLink to= "/aboutus">About Us</NavLink></div>
        <div><NavLink to= "/carousel1">Carousel1</NavLink></div>  
        <div><NavLink to= "/">Practice Form</NavLink></div>  */}
    </div>
  );
}

export default Navbar1;