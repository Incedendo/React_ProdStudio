import React from 'react';
import NavBarElement from './NavBarElement/NavBarElement';
import Logo from '../Logo/Logo';
import './navBar.css';
import '../../assets/css/scss/import.css';
import logo from '../../assets/img/ps_logo.svg';
import search from '../../assets/img/icon-search.svg';

const navBarElements = [
  {
    classes: "header-stagger",
    href: "#AboutUs",
    navBarContent: "About Us",
  },
  {
    classes: "header-stagger",
    href: "#OurWorkProcess",
    navBarContent: "Our Work Process",
  },
  {
    classes: "header-stagger",
    href: "#OurTeam",
    navBarContent: "Our Team",
  },
  {
    classes: "header-stagger",
    href: "#Labs",
    navBarContent: "Labs",
  },
  {
    classes: "header-stagger",
    href: "#Contact",
    navBarContent: "Contact",
  },
]

const displayNavElem = () => {
  return navBarElements.map( ({classes, href, navBarContent}) => (
    <NavBarElement className={classes} href={href} navBarContent={navBarContent} />
  ))
}

const NavBar = () => (
      <div id="header" className="header padding-3 margin-0 padding-left-3">
        <a href="/" className="logo header-stagger tranform ">
          <Logo className="navBarLogo" source={logo}/>
        </a>
        <div className="container margin-right-0 padding-right-0 top-align">
          <div className="row">
            <div className="col-md-12 padding-right-0">
                <ul className="pull-right">
                  {displayNavElem()}
                </ul>

            </div>
          </div>
        </div>

      </div>
)

export default NavBar;
