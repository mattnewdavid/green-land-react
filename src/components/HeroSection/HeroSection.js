import React from 'react';
import { Carousel } from 'react-bootstrap';
import { CustomButton } from '../Button/Button';
import "./herosection.css"


const LiteCarousel = () => {

  const carousel_items = [
    {
      id: 1,
      title: "Welcome to TechPoint",
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate'
            
    }
  ]
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="assets/image-3.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Building Your Reality</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            perspiciatis porro in, possimus ea nam nemo recusandae quidem iste
            libero nobis officia accusamus quis quam consectetur ad magnam
            inventore animi.
          </p>
          <CustomButton
            buttonSize="btn--large"
            buttonStyle="btn--primary"
            link="/services"
          >
            Learn More
          </CustomButton>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="assets/image-1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Building your Advantage</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            perspiciatis porro in, possimus ea nam nemo recusandae quidem iste
            libero nobis officia accusamus quis quam consectetur ad magnam
            inventore animi.
          </p>
          <CustomButton
            buttonSize="btn--large"
            buttonStyle="btn--primary"
            link="/services"
          >
            Learn More
          </CustomButton>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="assets/image-2.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Building Your Future</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            perspiciatis porro in, possimus ea nam nemo recusandae quidem iste
            libero nobis officia accusamus quis quam consectetur ad magnam
            inventore animi.
          </p>
          <CustomButton
            buttonSize="btn--large"
            buttonStyle="btn--primary"
            link="/services"
          >
            Learn More
          </CustomButton>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default LiteCarousel;
