import React, { Component } from 'react';
import '../../assets/css/scss/import.css';

const Logo = (props) =>
    <img id={props.id} className={props.className} src={props.source} alt="etc"/>

export default Logo;
