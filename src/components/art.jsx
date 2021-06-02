import React from 'react'
import ProductList from "./productlist"
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const art = () => {
    return (
        <div>
          <Container className="cont">
  <Row>
    <Col className="h3 m-5 Cocina">Listo para ver que vas a comer?</Col>
  </Row>
  <ProductList />
    
  
</Container>
<div className="sobre text-center m-5 bg-danger">
                <h1 className="mt-1">Nosotros!</h1>

                <p className="about col-md-12 col-sm-12 col-bg-2">La Burguería nace como una opción de hamburguesas Gourmet que combinan los ingredientes más acordes a cada gusto. 

Nuestra huerta propia provee vegetales frescos y el producto se expresa en cada mesa con panes de distintas variedades recién horneados, salsas caseras, verduras frescas y hamburguesas recién hechas. Todo lo que hacemos es producción del día!

Podés acompañarlas con cerveza tirada, limonadas o un chato de vino orgánico Malbec.

Una atractiva selección de postres, música y un cómodo ambiente, hacen de La Burguería tu mejor opción para reunirte con familia y amigos para comprobar que tenemos la mejor hamburguesa de zona sur.

Si buscás una hamburguesería que combine un lugar agradable las mejores hamburguesas, cervezas, vino orgánico, ensaladas, postres y más si dudas tenéis que conocernos.</p>  </div>

            
        </div>
    )
}

export default art;
