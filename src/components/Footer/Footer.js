import React from 'react'
import "./footer.css"
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import {
   faFacebookF, faInstagram, faTwitter, faLinkedin
 } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
import { CustomButton } from "../Button/Button";

export default function Footer() {

  const footer_links = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "About",
      link: "/about",
    },
    {
      id: 3,
      title: "Services",
      link: "/services",
    },
    {
      id: 4,
      title: "Contact",
      link: "/contact",
    },
    {
      id: 5,
      title: "Affliates",
      link: "/affliates",
    },
  ];
  return (
    <div class="footer">
      <div className="row">
        <div className="col-md-4 mx-2">
          <h2>TechPoint</h2>
          <div className="footer-icon-class">
            <FontAwesomeIcon icon={faFacebookF} className="footer-icon" />
            <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
            <FontAwesomeIcon icon={faTwitter} className="footer-icon" />
            <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates perspiciatis porro in, possimus ea nam nemo recusandae
              quidem iste libero nobis officia accusamus quis quam consectetur
              ad magnam inventore animi.
            </p>
          </div>
        </div>
        <div className="col-md-4 mx-2">
          <h5>Quick Links</h5>
          <div className="footer-link-wrapper row">
            <div className="footer-links col-md-6">
              {footer_links.map((link) => {
                // console.log(link)
                return <Link to={link.link}>{link.title}</Link>;
              })}
            </div>
            <div className="footer-links col-md-6">
              {footer_links.map((link) => {
                // console.log(link)
                return <Link to={link.link}>{link.title}</Link>;
              })}
            </div>
          </div>
        </div>
        <div className="col-md-3 subscribe-form">
          <h5>Subscribe to our Newsletter</h5>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter your email address"
              />
            </Form.Group>
            <CustomButton
              buttonSize="btn--medium"
              buttonStyle="btn--secondary"
              link="/services"
            >
              Submit
            </CustomButton>
          </Form>
        </div>
        <div className="footer-copyright">
          <h6>&copy; Techpoint</h6>
          <h6>{new Date().getFullYear()}</h6>
          <h6>| Designed by Matthew David</h6>
        </div>
      </div>
    </div>
  );
}
