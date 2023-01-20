import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

const Cards = ({img, title, text}) => {
    return (
            <Card style={{width: '30%', margin: '0 0 20px 0', padding: '10px'}}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                </Card.Body>
            </Card>
    );
};

export default Cards;