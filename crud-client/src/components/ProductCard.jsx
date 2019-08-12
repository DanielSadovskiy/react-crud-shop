import React from 'react';
import { Card, Button } from 'react-bootstrap';
import prodcard from '../css/ProductCard.css';


const ProductCard = (props) => {
    return (
        <Card className={prodcard.card}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title><h3>{props.name}</h3></Card.Title>
                <Card.Text >
                    <span>Some quick example text to build on the card title and make up the bulk of
                    the card's content.</span>
                  
                    
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}
export default ProductCard;

