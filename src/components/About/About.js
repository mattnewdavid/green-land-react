import React from 'react'
import { CustomButton } from '../Button/Button';
import "./about.css"

export default function About() {
  return (
    <div
      className="section about-section my-5"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay="500"
    >
      <div className="row mx-auto">
        <div
          className="col-md-6 col-sm-12 col-xs-12"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="500"
        >
          <div
            className="my-5 section-heading"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
          >
            <h3 className=" section-title">About Section</h3>
            <p className="section-description ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates perspiciatis porro in, possimus ea nam nemo recusandae
              quidem iste libero nobis officia accusamus quis quam consectetur
              ad magnam inventore animi. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptates perspiciatis porro in, possimus ea
              nam nemo recusandae quidem iste libero nobis officia accusamus
              quis quam consectetur ad magnam inventore animi.
            </p>
            <CustomButton
              buttonSize="btn--medium"
              buttonStyle="btn--primary"
              link="/"
            >
              Learn More
            </CustomButton>
          </div>
          <div className="count-section">
            <div>
              <h4>200+</h4>
              <p>Happy Clients</p>
            </div>
            <div>
              <h4>200+</h4>
              <p>Completed Projects</p>
            </div>
            <div>
              <h4>200+</h4>
              <p> Reviews</p>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-sm-12"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="500"
        >
          <img src="assets/services-img-2.png" />
        </div>
      </div>
    </div>
  );
}
