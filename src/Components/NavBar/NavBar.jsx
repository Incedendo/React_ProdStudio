import React, { Component } from 'react';
import NavBarElement from './NavBarElement/NavBarElement';
import Logo from '../Logo/Logo';
import './navBar.css';
import '../../assets/css/scss/import.css';
import logo from '../../assets/img/ps_logo.svg';
import search from '../../assets/img/icon-search.svg';

const NavBar = () => (

      <div id="header" className="header padding-2 margin-3 padding-left-3">
        <a href="/" className="logo header-stagger tranform ">
          <Logo className="navBarLogo" source={logo}/>
        </a>
        <div className="container margin-right-4 top-align">
          <div className="row">
            <div className="col-md-12">
                <ul className="pull-right">
                  <NavBarElement className="header-stagger" href="#AboutUs" navBarContent="About Us" />
                  <NavBarElement className="header-stagger" href="#OurWorkProcess" navBarContent="Our Work Process" />
                  <NavBarElement className="header-stagger" href="#OurTeam" navBarContent="Our Team" />
                  <NavBarElement className="header-stagger" href="#Labs" navBarContent="Labs" />
                  <NavBarElement className="header-stagger" href="#Contact" navBarContent="Contact" />
                  <li id="search">
                    <Logo className="padding-left-3 search-icon header-stagger transform" source={search}/>
                  </li>
                </ul>

            </div>
          </div>
        </div>

      </div>
)

export default NavBar;
