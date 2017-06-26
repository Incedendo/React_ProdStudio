import React from 'react';
import './Hero.css';
import Logo from '../Logo/Logo';
//import logo from '../../assets/img/banner_triangle@3x.png';
import logo from '../../assets/img/partly_cloudy.png';
import '../../assets/css/scss/import.css';

const Hero = () => (
  <div id="hero" className="block paralax light-gray-bg clearfix">
    <div className="container">
      <div className="row">
        <div className="hero-fade col-md-12 transform">
          <h1 className="invert">We Bring Digital Products to Life</h1>
          <p className="lead invert">
            Integer mi libero, vehicula ut sodales sit amet, ultricies eget risus. Integer sodales placerat lorem, vitae faucibus sem tincidunt at. Curabitur blandit, lorem quis aliquet porta, elit leo consectetur velit, nec gravida ligula felis fermentum lectus. Donec id nulla vitae ligula iaculis sollicitudin vel quis lectus.
          </p>
          <Logo id="bg-triangle" className="triangle-fade" source={logo}/>
        </div>
      </div>
    </div>
  </div>
)

export default Hero;
