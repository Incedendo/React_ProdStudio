import React, { Component } from 'react';
import logo from '../../assets/img/icon-search.svg' // relative path to image
import './navBarElement.css';

class NavBarElementLogo extends Component {
  render() {
    return (
      <img src={logo} alt="etc"/>
    )
  }
}

export default NavBarElementLogo;
