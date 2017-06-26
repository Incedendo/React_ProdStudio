import React, { Component } from 'react';
import './navBarElement.css';
import '../../../assets/css/scss/import.css';

class NavBarElement extends Component {
  render() {
    return (
        <li><a href={this.props.href} className={this.props.className}>{this.props.navBarContent}</a></li> /* how to make a link without underscore*/
    );
  }
}

export default NavBarElement;
