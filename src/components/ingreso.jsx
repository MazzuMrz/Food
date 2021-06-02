import React from 'react'
import { Carousel } from "react-bootstrap";

const ingreso = () => {
    return (
        <div>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + './imgs/food1.png'}
      alt="First slide"
    />
    <Carousel.Caption>
      <h2>A tu gusto!</h2>
      <p className="indexdesc">Busca que vas a comer hoy.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + './imgs/food2.png'}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h2>Personaliza tu pedido</h2>
      <p className="indexdesc">Segun tu paladar.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + './imgs/food3.png'}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2>Experimentá!</h2>
      <p className="indexdesc">Cosas nuevas todos los dias ;) </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    
      
    )
};

export default ingreso;