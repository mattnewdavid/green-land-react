import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './app.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavContainer from './components/Navbar/NavContainer';
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Footer from './components/Footer/Footer';
import AOS from 'aos'
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App(){

  {
    AOS.init()
  }

    return (
      <>
        <Router>
            <NavContainer />
            <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="/services" element={<Services/>} />
              {/* <Route path='/products' component={Products} />
              <Route path='/sign-up' component={SignUp} /> */}
          </Routes>
          <Footer />
          
        </Router>
      </>
    );
}

export default App;
