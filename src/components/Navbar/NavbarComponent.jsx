import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarComponent = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="bokor-family text-spacing mb-2"
    >
      {/* <Container className=""> */}
      <Navbar.Brand
        href="#home"
        className="text-uppercase text-danger bokor-family"
      >
        Hackflix
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link href="#">Movies</Nav.Link>
          <Nav.Link href="#">About us</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
        <Nav>
          <NavDropdown title="Search by" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Title</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">Rating</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
};

export default NavbarComponent;
