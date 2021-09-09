import {useState, useEffect} from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Productveggie = () => {
  const [data, setData] = useState([])

  const fetchAPI = () => {
    fetch('http://localhost:3000/dataVeggie')
    .then(response => response.json())
    .then(data => setData(data));
  }
    useEffect(() => {
      fetchAPI()
    }, [])
    return (
      <div className="d-flex row container  ">
        {data.map((productDetail, index) => {
          return (
            <div className="mx-auto ">
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
                  <Button className="bg-success text-white font-weight-bolder " >Comprar</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }


export default Productveggie;
