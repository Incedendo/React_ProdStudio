import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import AboutUs from './Components/AboutUs/AboutUs';
import OurWorkProcess from './Components/OurWorkProcess/OurWorkProcess';
import OurTeam from './Components/OurTeam/OurTeam';
import Labs from './Components/Labs/Labs';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';

const App = ()  => (
  <div className="App">
    <div>
      <NavBar />
    </div>

    <div>
      <Hero />
    </div>

    <div>
      <AboutUs />
    </div>

    <div>
      <OurWorkProcess />
    </div>

    <div>
      <OurTeam />
    </div>

    <div>
      <Labs />
    </div>

    <div>
      <ContactUs />
    </div>

    <div>
      <Footer />
    </div>

  </div>
)

export default App;
