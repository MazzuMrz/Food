import React from 'react'
import { Navbar } from "react-bootstrap";



const navbar = () => {
    return (
        <div>
           <Navbar className="bg-danger nav ">
  <Navbar.Brand className="p-2 h3 " href="#home">Tu cocina!</Navbar.Brand>
  
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-center">
    <Navbar.Text>
      By: <a href="https://maruzzamn.000webhostapp.com/" target="_blank">Matias Maruzza</a>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default navbar;

