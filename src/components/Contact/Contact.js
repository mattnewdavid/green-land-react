import React from 'react'
import { Form,  Button } from 'react-bootstrap'
import { CustomButton } from '../Button/Button';
import "./contact.css"
import MapComponent from './MapComponent';
import MapContainer from './MapContainer';

export default function Contact() {
  return (
    <div className="contact-section my-5">
      <div className="row">
        <div className="col-md-6">
          <h3>Get in Touch</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <CustomButton
              buttonSize="btn--medium"
              buttonStyle="btn--primary"
              link="/services"
            >
              Submit
            </CustomButton>
          </Form>
        </div>
        <div className="map-wrapper" >
          <MapContainer />
        </div>
      </div>
    </div>
  );
}

