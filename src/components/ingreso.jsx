import React from 'react'
import { Carousel } from "react-bootstrap";

const ingreso = () => {
    return (
        <div>
        <Carousel className="">
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={"https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg"}
      alt="First slide"
    />
    <Carousel.Caption>
      <h2>A tu gusto!</h2>
      <p className="indexdesc">Busca que vas a comer hoy.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={'https://www.cocinayvino.com/wp-content/uploads/2017/01/comidarapida.jpg'}
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
      src={"https://cdn.aarp.net/content/dam/aarp/health/healthy-living/2019/01/1140-fried-foods-esp.web.jpg"}
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