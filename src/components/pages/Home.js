import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import HeroSection from '../HeroSection/HeroSection'
import LiteCard from '../Card/Card'
import { CustomButton } from '../Button/Button';
import { ListGroup } from 'react-bootstrap';
import "./home.css"
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faCheck, faSatellite, faCrown, faBookmark } from "@fortawesome/free-solid-svg-icons";
import Contact from '../Contact/Contact';
import Promo from '../Promo/Promo';
import About from '../About/About';
import Task from '../Task/Task';



export default function Home() {

    const cardDetails = [
      {
        title: "Web Technology",
        desc: "This is card one",
        btnText: "text-1",
        image: "assets/image-1.jpg",
      },
      {
        title: "Systems Management",
        desc: "This is card two",
        btnText: "text-2",
        image: "assets/image-2.jpg",
      },
      {
        title: "AI Intelligence",
        desc: "This is card three",
        btnText: "text-3",
        image: "assets/image-3.jpg",
      },
    ];
  return (
    <div className="home">
      <HeroSection />
      <div className="section service-section my-5 mx-auto" data-aos="fade-up">
        <div className="my-5 section-heading">
          <h3 className="text-center section-title">Services Section</h3>
          <p className="section-description text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            perspiciatis porro in, possimus ea nam nemo recusandae quidem iste
            libero nobis officia accusamus quis quam consectetur ad magnam
            inventore animi.
          </p>
        </div>
        <div
          className="card-container row mx-5"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="500"
        >
          {cardDetails.map((card, key) => {
            return (
              <LiteCard
                key={key}
                title={card.title}
                desc={card.desc}
                btnText={card.btnText}
                image={card.image}
              />
            );
          })}
        </div>
      </div>
      <About />
      <Task />
      <div
        className="section my-5"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="500"
      >
        <div className="section-heading">
          <h3>Our Expertise is Confidence</h3>
        </div>
        <div className="row d-flex my-5">
          <div
            className="detail col-md-3"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
          >
            <div className="detail-icon ">
              <FontAwesomeIcon icon={faSatellite} />
            </div>
            <div className="detail-body">
              <h3>Timely Delivery</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates perspiciatis porro in, possimus ea nam nemo
              </p>
            </div>
          </div>
          <div
            className="detail col-md-3"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
          >
            <div className="detail-icon">
              <FontAwesomeIcon icon={faBookmark} />
            </div>
            <div className="detail-body">
              <h3>Unlimited Review</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates perspiciatis porro in, possimus ea nam nemo
              </p>
            </div>
          </div>
          <div
            className="detail col-md-3"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
          >
            <div className="detail-icon">
              <FontAwesomeIcon icon={faCrown} />
            </div>
            <div className="detail-body">
              <h3>Standard Supervision</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates perspiciatis porro in, possimus ea nam nemo
              </p>
            </div>
          </div>
        </div>
      </div>
      <Promo />
      <Contact />
    </div>
  );
}

