import {useState, useEffect} from "react";
import ProductData from "./datafiles.json";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";


const Productlist = () => {

  const [data, setData] = useState([])

  const fetchAPI = () => {
    fetch('http://localhost:3000/dataBurguer')
    .then(response => response.json())
    .then(data => setData(data));
  }
    useEffect(() => {
      fetchAPI()
    }, [])
  return (
    <div>
       <div className=" products row">
        {data.map((productDetail, index) => {
          return (
            <div className=" m-auto products  ">
              <Card
                style={{ width: "20rem", height: "34rem" }}
                className="mb-2 "
              >
                <Card.Img className="image" src={productDetail.image} />

                <Card.Body className="">
                  <Card.Title>
                    <h2>{productDetail.name}</h2>
                  </Card.Title>
                  <Card.Text className="">
                    {productDetail.description}
                  </Card.Text>
                
                  <h4>{productDetail.price}</h4>
                  <Button className="bg-dark text-white">Comprar</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Productlist

    
     


