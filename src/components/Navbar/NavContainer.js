import React from 'react';
import { Navbar, Nav, Container, Offcanvas, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { CustomButton } from '../Button/Button';
import "./nav.css"


function NavContainer (props){

   const navs = [
       {
           name: 'Home',
           id: 1,
           link: 'home.html'
       },
       {
        name: 'About',
        id: 2,
        link: 'about.html'
       },
       {
        name: 'Services',
        id: 3,
        link: 'services.html'
    },

    ]

    return (
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          sticky="top"
        >
          <Navbar.Brand href="#home">
            Tech<span>Point</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
              <Nav.Link href="#pricing">Affiliates</Nav.Link>
              <NavDropdown title="Services" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <CustomButton
                buttonSize="btn--medium"
                buttonStyle="btn--primary"
                link="/"
              >
                Contact Us
              </CustomButton>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
}

export default NavContainer;
