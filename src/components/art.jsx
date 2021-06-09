import React from "react";
import ProductList from "./productlist.jsx";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Productveggie from "./veggielife.jsx";
import Card_about from "./card_about.jsx";

const art = () => {
  return (
    <div>
      <Container className="cont">
        <Row>
          <Col className=" m-5 titles_shop" id="ofertas">Ofertas del dia</Col>
          
          <ProductList />
          <Col className=" m-5 titles_shop text-success" id="veggie">Veggie</Col>

          <Productveggie />
        </Row>
        
      </Container>
      <div className="sobre text-center m-5 ">
        <h1 className="mt-1">Nosotros!</h1>
        <Card_about className="card" />
       <img src="" alt="" srcset="" />
      </div>
    </div>
  );
};

export default art;
