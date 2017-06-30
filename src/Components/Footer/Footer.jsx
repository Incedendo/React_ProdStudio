import React from 'react';
import './Footer.css';
import footer1 from '../../assets/img/ps_grey_logo.svg';
import Logo from '../Logo/Logo';
import '../../assets/css/scss/import.css';

const FooterImg = () => (
  <div className="col-md-1 pull-left">
    <Logo className="logo-ps-footer" source={footer1}/>
  </div>
)

const Footer = () => (
  <div className="staticFooter">
    <div className="footer">
      <div className="container padding-top-4 padding-bottom-4">
        <div className="row">
          <FooterImg />
          <div className="col-md-10">
            <p className="text-center" style={{color:'white'}} >2727A Allen Parkway, 5th Floor, Houston, TX 77019    |    hello@productstudio.valic.com</p>
          </div>
          <FooterImg />
        </div>
      </div>
    </div>
  </div>
)

export default Footer;
