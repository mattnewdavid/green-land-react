import React from 'react'
import { CustomButton } from '../Button/Button';
import "./promo.css"

export default function Promo() {
  return (
    <div className="promo-section">
      <div>
        <h1>Explore the world of Tech Possibilities</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          perspiciatis porro in, possimus ea nam nemo recusandae quidem iste
          libero nobis officia accusamus quis quam consectetur ad magnam
          inventore animi. Lorem ipsum dolor sit
              </p>
              <CustomButton buttonSize="btn--large" buttonStyle="btn--secondary"  link="/">Explore</CustomButton>
      </div>
    </div>
  );
}
