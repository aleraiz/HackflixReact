import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";

const NavbarComponent = () => {
  const navigate = useNavigate();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="bokor-family text-spacing mb-2"
    >
      <Navbar.Brand className="text-uppercase text-danger bokor-family">
        <Nav.Link
          onClick={() => {
            navigate("/");
          }}
        >
          Hackflix
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link as={Link} to={"/movies"}>
            Movies
          </Nav.Link>
          <Nav.Link as={Link} to={"/tvshows"}>
            TV Shows
          </Nav.Link>
          <Nav.Link as={Link} to={"/about"}>
            About
          </Nav.Link>
        </Nav>
        {/* <Nav>
          <NavDropdown title="Search by" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Title</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">Rating</NavDropdown.Item>
          </NavDropdown>
        </Nav> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
