import React from "react";
import { Navbar,Nav, NavDropdown } from "react-bootstrap";


const navbar = () => {
  return (
    <div>
      <Navbar collapseOnSelect className="nav" expand="lg" >
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar">
    <Nav className="mr-auto ">
      <Nav.Link href="#features">Inicio</Nav.Link>
      <Nav.Link href="#pricing">Menu</Nav.Link>
      <NavDropdown title="Categorias" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Burguers picantes</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Ofertas del dia</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">#VeggieLife</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Para celiacos</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav className="ml-auto">
      <a>Bienvenido a Burguer factory</a>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
};

export default navbar;
