import React from "react";
import { Navbar,Nav, NavDropdown } from "react-bootstrap";


const navbar = () => {
  return (
    <div>
      <Navbar collapseOnSelect className="nav" expand="lg" >
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar">
    <Nav className="mr-auto m-3 ">
      <Nav.Link href="#index">Inicio</Nav.Link>
      <NavDropdown title="Categorias" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#picantes">Burguers picantes</NavDropdown.Item>
        <NavDropdown.Item href="#ofertas">Ofertas del dia</NavDropdown.Item>
        <NavDropdown.Item href="#veggie">#VeggieLife</NavDropdown.Item>
        <NavDropdown.Item href="#celiacos">Para celiacos</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#about"> Sobre nosotros</Nav.Link>
    </Nav>
    <Nav className=" text-center">
      <a>Bienvenido a Burguer factory</a>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
};

export default navbar;
