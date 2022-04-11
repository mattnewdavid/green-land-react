import React from 'react'
import { CustomButton } from "../Button/Button";
import { ListGroup } from "react-bootstrap";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import {
   faCheck
 } from "@fortawesome/free-solid-svg-icons";
import './task.css'

export default function Task() {
  return (
    <div
      className="section my-5 task-section"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay="500"
    >
      <div className="row mx-auto">
        <div
          className="col-md-6 col-sm-12 promo-img"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="500"
        >
          <img src="assets/services-img-1.png" />
        </div>
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
            <h3 className=" section-title">What we do</h3>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <FontAwesomeIcon icon={faCheck} />
                Cras justo odio
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faCheck} />
                Dapibus ac facilisis in
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faCheck} />
                Morbi leo risus
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faCheck} />
                Porta ac consectetur ac
              </ListGroup.Item>
            </ListGroup>
            <CustomButton
              buttonSize="btn--medium"
              buttonStyle="btn--primary"
              link="/"
            >
              Learn More
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
