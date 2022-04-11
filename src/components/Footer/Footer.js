import React from 'react'
import "./footer.css"
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import {
   faFacebookF, faInstagram, faTwitter, faLinkedin
 } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

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
      <div className="col-md-4 mx-4">
        <h2>TechPoint</h2>
        <div className="footer-icon-class">
          <FontAwesomeIcon icon={faFacebookF} className="footer-icon" />
          <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
          <FontAwesomeIcon icon={faTwitter} className="footer-icon" />
          <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            perspiciatis porro in, possimus ea nam nemo recusandae quidem iste
            libero nobis officia accusamus quis quam consectetur ad magnam
            inventore animi.
          </p>
        </div>
      </div>
      <div className="col-md-3 mx-4">
        <h5>Links</h5>
        <div className='footer-links'>
          {footer_links.map((link) => {
            // console.log(link)
           return <Link to={link.link}>{ link.title }</Link>
            })}
        </div>
      </div>
      <div className='col-md-3'>
        <h5>Links</h5>
      </div>
    </div>
  );
}
