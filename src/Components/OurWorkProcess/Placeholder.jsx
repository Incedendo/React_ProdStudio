import React, { Component } from 'react';
import './OurWorkProcess.css';
import '../../assets/css/scss/import.css';

const Placeholder = (props) => (
  <div className="col-md-4 col-sm-6 col-xs-12 padding-bottom-4 work-process-stagger OurWorkProcessStyle">
    <div className="pull-left rounded-md light-gray-bg Dimensions"></div>
    <div className="pull-left padding-left-3 padding-top-1">
      <h4 className="padding-bottom-0">{props.placeholder}</h4>
      <p className="text-muted">{props.text}</p>
    </div>
  </div>
)

export default Placeholder;
