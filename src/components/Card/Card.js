import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { CustomButton } from '../Button/Button';
import "./card.css"

export default function LiteCard({ key, title, desc, btnText, image }) {
    console.log(image)
    return (
      <Card className="col-md-3">
        <Card.Img variant="" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className='text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            perspiciatis porro in.
          </Card.Text>
          {/* <Button variant="primary" className="container">{btnText}</Button> */}
          <CustomButton
            buttonSize="btn--medium"
            buttonStyle="btn--primary"
            link="/"
            className="fluid"
          >
            Learn More
          </CustomButton>
        </Card.Body>
      </Card>
    );
}
