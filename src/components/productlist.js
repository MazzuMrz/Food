import React, {Component} from 'react'
import ProductData from "./datafiles.json"
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

class ProductList extends Component{
    render() {
        return (
        <div className="row img-responsive d-flex justify-content-center ">
         
            {ProductData.map((productDetail, index) =>{
                return <div className=" mb-4 m-auto">
                <Card style={{ width: '25rem' }} className="">
                    <Card.Img variant="top" 
                        src={productDetail.image} />
    
                    <Card.Body className="">
                <Card.Title>{productDetail.name}</Card.Title>
                <Card.Text className="textc text-dark">
                   {productDetail.description}
                         </Card.Text>

                <h3>{productDetail.price}</h3>
                 <Button variant="danger">Comprar!</Button>
                         </Card.Body>
                         </Card>
            </div>
                
            })}
        </div>

        )
    } 
}

export default ProductList;
