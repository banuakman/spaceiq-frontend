import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap/Navbar";
import "./styling.css";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />{" "}
        SpaceIQ
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="#">About Us</Nav.Link>
          <Button variant="outline-info">Login</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBar;
