import React, { Component } from 'react';
import './navBarElement.css';

class NavBarElement extends Component {
  render() {
    return (
        <li><a href="" className="link">{this.props.navBarContent}</a></li> /* how to make a link without underscore*/
    );
  }
}

export default NavBarElement;
