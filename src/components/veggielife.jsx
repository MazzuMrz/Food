import React, { Component } from "react";
import ProductData from "./dataveggie.json";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

class Productveggie extends Component {
  render() {
    return (
      <div className="row ">
        {ProductData.map((productDetail, index) => {
          return (
            <div className=" m-auto ">
              <Card
                style={{ width: "20rem", height: "34rem" }}
                className="mb-2 "
              >
                <Card.Img className="image" src={productDetail.image} />

                <Card.Body className="">
                  <Card.Title>
                    <h1>{productDetail.name}</h1>
                  </Card.Title>
                  <Card.Text className="texto text-dark">
                    {productDetail.description}
                  </Card.Text>
                
                  <h4>{productDetail.price}</h4>
                  <Button className="bg-dark text-white " >Comprar</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Productveggie;
