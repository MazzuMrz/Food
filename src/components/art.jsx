import React from "react";
import ProductList from "./productlist.jsx";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const art = () => {
  return (
    <div>
      <Container className="cont">
        <Row>
          <Col className="h3 m-5 Cocina">Ofertas del dia  </Col>
          <ProductList />
        </Row>
        
      </Container>
      <div className="sobre text-center m-5 ">
        <h1 className="mt-1">Nosotros!</h1>
       <img src="" alt="" srcset="" />
      </div>
    </div>
  );
};

export default art;
